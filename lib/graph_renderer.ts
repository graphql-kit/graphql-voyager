import * as _ from 'lodash';
import * as ejs from 'ejs';

const template = require('./template.ejs');

function printFieldType(typeName, wrappers) {
  return _.reduce(wrappers, (str, wrapper) => {
    switch (wrapper) {
      case 'NON_NULL':
        return `${str}!`;
      case 'LIST':
        return `[${str}]`;
    }
  }, typeName);
}

function walkTree(types, rootName, cb) {
  var typeNames = [rootName];

  for (var i = 0; i < typeNames.length; ++i) {
    var name = typeNames[i];
    if (typeNames.indexOf(name) < i)
      continue;

    var type = types[name];
    cb(type);
    //FIXME:
    //typeNames.push(...type.derivedTypes);
    typeNames.push(..._.map(type.fields, 'type'));
  }
}

export function getTypeGraph(schema):TypeGraph {
  var skipRelay = false;

  function skipType(type):boolean {
    return (
      ['SCALAR', 'ENUM', 'INPUT_OBJECT'].indexOf(type.kind) !== -1 ||
      type.isSystemType ||
      (skipRelay && type.isRelayType)
    );
  }

  var nodes = {};
  walkTree(schema.types, schema.queryType, type => {
    if (skipType(type))
      return;

    var id = `TYPE::${type.name}`;
    nodes[id] = {
      id,
      data: type,
      field_edges: _(type.fields)
        .map(field => {
          var fieldType = field.type;
          if (skipRelay && field.relayNodeType)
            fieldType = field.relayNodeType;
          fieldType = schema.types[fieldType];

          if (skipType(fieldType))
            return;

          return {
            id: `FIELD_EDGE::${type.name}::${field.name}`,
            to: fieldType.name,
            data: field,
          }
        }).compact().keyBy('data.name').value(),
    };
  });

  return new TypeGraph(schema, nodes);
}

class TypeGraph {
  nodes: any;
  schema: any;
  constructor(schema, nodes) {
    this.nodes = nodes;
    this.schema = schema;
  }

  getDot():string {
    return ejs.render(template, {_, nodes: this.nodes, printFieldType});
  }

  getInEdges(nodeId:string):{id: string, nodeId: string}[] {
    var typeName = this.nodes[nodeId].data.name;
    let res = [];
    _.each(this.nodes, node => {
      _.each(node.field_edges, edge => {
        if (edge.to === typeName)
          res.push({ id: edge.id, nodeId: node.id });
      });
    });
    return res;
  }

  getOutEdges(nodeId:string):{id: string, nodeId: string}[] {
    let node = this.nodes[nodeId];
    return _.map(node.field_edges, edge => ({
      id: edge.id,
      nodeId: 'TYPE::' + edge.to
    }))
  }

  isDisplayedType(name: string):boolean {
    return !_.isUndefined(this.nodes['TYPE::' + name]);
  }
}

export function cleanTypeName(typeName:string):string {
  return typeName.trim().replace(/^\[*/, '').replace(/[\]\!]*$/, '');
}

