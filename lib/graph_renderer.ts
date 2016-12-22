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
    this._buildGraph(schema.types, schema.queryType, type => ({
      id: `TYPE::${type.name}`,
      data: type,
      edges: _([
          ...this._fieldEdges(type),
          ...this._unionEdges(type),
          ...this._interfaceEdges(type)
        ]).compact().keyBy('id').value(),
    }));
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
        id: `POSIBLE_TYPE_EDGE::${type.name}::${possibleType.name}`,
        to: possibleType.name,
      };
    });
  }

  _interfaceEdges(type) {
    return _.map(type.derivedTypes, typeName => {
      var derivedType = this.schema.types[typeName];
      if (this._skipType(derivedType))
        return;

      return {
        id: `DERIVED_TYPE_EDGE::${type.name}::${derivedType.name}`,
        to: derivedType.name,
      };
    });
  }

  _isFieldEdge(edge) {
    return edge.id.startsWith('FIELD_EDGE::');
  }

  _isPosibleTypeEdge(edge) {
    return edge.id.startsWith('POSIBLE_TYPE_EDGE::');
  }

  _isDerivedTypeEdge(edge) {
    return edge.id.startsWith('DERIVED_TYPE_EDGE::');
  }

  _getFieldType(field) {
    var fieldType = field.type;
    if (this.options.skipRelay && field.relayNodeType)
      fieldType = field.relayNodeType;
    return this.schema.types[fieldType];
  }

  _buildGraph(types, rootName, cb) {
    var typeNames = [rootName];

    for (var i = 0; i < typeNames.length; ++i) {
      var name = typeNames[i];
      if (typeNames.indexOf(name) < i)
        continue;

      var node = cb(types[name]);
      if (_.isUndefined(node))
        continue;

      this.nodes[node.id] = node;
      typeNames.push(..._.map(node.edges, 'to'));
    }
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

export function cleanTypeName(typeName:string):string {
  return typeName.trim().replace(/^\[*/, '').replace(/[\]\!]*$/, '');
}
