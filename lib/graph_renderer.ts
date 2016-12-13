import * as _ from 'lodash';
import * as ejs from 'ejs';
import {getSchema} from './introspection';

const template = require('./template.ejs');
const introspection = require('./swapi_introspection.json').data;

var schema = getSchema(introspection);
var types = schema.types;

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

function skipType(type):boolean {
  return (
    isScalar(type) ||
    isInputObject(type) ||
    type.isSystemType ||
    type.isRelayType
  );
}

function skipField(field):boolean {
  return types[field.type].isRelayType && !field.relayNodeType;
}

function getFieldType(field) {
  return types[field.relayNodeType || field.type];
}

export function getTypeGraph():TypeGraph {
  var nodes = {};
  walkTree(schema.types, schema.queryType, type => {
    if (skipType(type)) return;
    var id = `TYPE::${type.name}`;
    nodes[id] = {
      id,
      data: type,
      field_edges: _(type.fields)
        .reject(skipField)
        .filter(field => !isScalar(field.type))
        .map(field => ({
          id: `FIELD_EDGE::${type.name}::${field.name}`,
          to: getFieldType(field).name,
          data: field,
        })).value()
    };
  });

  return new TypeGraph(nodes);
}

class TypeGraph {
  nodes: any;
  constructor(nodes) {
    this.nodes = nodes;
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
}

export function cleanTypeName(typeName:string):string {
  return typeName.trim().replace(/^\[*/, '').replace(/[\]\!]*$/, '');
}

export function isScalar(typeObjOrName):boolean {
  let typeObj;
  if (_.isString(typeObjOrName)) {
    typeObj = types[typeObjOrName];
  } else {
    typeObj = typeObjOrName
  }
  return ['SCALAR', 'ENUM'].indexOf(typeObj.kind) !== -1;
}

function isInputObject(typeObj):boolean {
  return typeObj.kind === 'INPUT_OBJECT';
}

function printFieldType(field) {
  return _.reduce(field.typeWrappers, (str, wrapper) => {
    switch (wrapper) {
      case 'NON_NULL':
        return `${str}!`;
      case 'LIST':
        return `[${str}]`;
    }
  }, getFieldType(field).name);
}
