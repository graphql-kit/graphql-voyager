import * as _ from 'lodash';
import * as ejs from 'ejs';

const template = require('./template.ejs');

export class TypeGraph {
  nodes: any;
  schema: any;
  options: any;

  constructor(schema, options) {
    this.options = _.defaults(options, {
      skipRelay: false,
      sortByAlphabet: false
    });

    var clone = _.bind(_.cloneDeepWith, this, _, value => {
      if (!this.options.sortByAlphabet || !_.isPlainObject(value))
        return;
      return _(value).toPairs().sortBy(0).fromPairs().mapValues(clone).value();
    });

    this.schema = clone(schema);

    this.nodes = {};
    walkTree(schema.types, schema.queryType, type => {
      if (this._skipType(type))
        return;

      var id = `TYPE::${type.name}`;
      this.nodes[id] = {
        id,
        data: type,
        edges: _([...this._fieldEdges(type), ...this._unionEdges(type)])
          .compact().keyBy('id').value(),
      };
    });
  }

  _skipType(type):boolean {
    return (
      ['SCALAR', 'ENUM', 'INPUT_OBJECT'].indexOf(type.kind) !== -1 ||
      type.isSystemType ||
      (this.options.skipRelay && type.isRelayType)
    );
  }

  _fieldEdges(type) {
    return _.map(type.fields, field => {
      var fieldType = this._getFieldType(field);
      if (this._skipType(fieldType))
        return;

      return {
        id: `FIELD_EDGE::${type.name}::${field.name}`,
        relationType: 'field',
        to: fieldType.name,
        data: field,
      }
    });
  }

  _unionEdges(type) {
    return _.map(type.possibleTypes, typeName => {
      var possibleType = this.schema.types[typeName];
      if (this._skipType(possibleType))
        return;

      return {
        id: `UNION_EDGE::${type.name}::${possibleType.name}`,
        relationType: 'union',
        to: possibleType.name,
      };
    });
  }

  _getFieldType(field) {
    var fieldType = field.type;
    if (this.options.skipRelay && field.relayNodeType)
      fieldType = field.relayNodeType;
    return this.schema.types[fieldType];
  }

  getFieldTypeById(fieldId: string) {
    let [tag, type, field] = fieldId.split('::');
    return this._getFieldType(this.schema.types[type].fields[field]);
  }

  getDot():string {
    return ejs.render(template, {_, graph: this, printFieldType});
  }

  getInEdges(nodeId:string):{id: string, nodeId: string}[] {
    var typeName = this.nodes[nodeId].data.name;
    let res = [];
    _.each(this.nodes, node => {
      _.each(node.edges, edge => {
        if (edge.to === typeName)
          res.push({ id: edge.id, nodeId: node.id });
      });
    });
    return res;
  }

  getOutEdges(nodeId:string):{id: string, nodeId: string}[] {
    let node = this.nodes[nodeId];
    return _.map(node.edges, edge => ({
      id: edge.id,
      nodeId: 'TYPE::' + edge.to
    }))
  }

  getFieldEdge(typeName:string, fieldName:string) {
    return this.nodes['TYPE::${typeName}']['FIELD_EDGE::${typeName}::${fieldName}'];
  }

  isDisplayedType(name: string):boolean {
    return !_.isUndefined(this.nodes['TYPE::' + name]);
  }
}

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
    typeNames.push(...type.possibleTypes);
    typeNames.push(..._.map(type.fields, 'type'));
  }
}

export function cleanTypeName(typeName:string):string {
  return typeName.trim().replace(/^\[*/, '').replace(/[\]\!]*$/, '');
}
