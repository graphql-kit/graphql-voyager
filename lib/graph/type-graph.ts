import * as _ from 'lodash';
import * as ejs from 'ejs';

import { store } from '../redux';

const template = require('./template.ejs');

export function getTypeGraph(schema, skipRelay) {
  return buildGraph(schema.queryType, type => ({
    id: `TYPE::${type.name}`,
    edges: _([
        ...fieldEdges(type),
        ...unionEdges(type),
        ...interfaceEdges(type)
      ]).compact().keyBy('id').value(),
  }));

  function skipType(typeName):boolean {
    var type = schema.types[typeName];
    return (
      ['SCALAR', 'ENUM', 'INPUT_OBJECT'].indexOf(type.kind) !== -1 ||
      type.isSystemType ||
      (skipRelay && type.isRelayType)
    );
  }

  function fieldEdges(type) {
    return _.map<any, any>(type.fields, field => {
      var fieldType = field.type;
      if (skipRelay && field.relayNodeType)
        fieldType = field.relayNodeType;

      if (skipType(fieldType))
        return;

      return {
        id: `FIELD_EDGE::${type.name}::${field.name}`,
        to: fieldType,
      }
    });
  }

  function unionEdges(type) {
    return _.map<string, any>(type.possibleTypes, possibleType => {
      if (skipType(possibleType))
        return;

      return {
        id: `POSSIBLE_TYPE_EDGE::${type.name}::${possibleType}`,
        to: possibleType,
      };
    });
  }

  function interfaceEdges(type) {
    return _.map<string, any>(type.derivedTypes, derivedType => {
      if (skipType(derivedType))
        return;

      return {
        id: `DERIVED_TYPE_EDGE::${type.name}::${derivedType}`,
        to: derivedType,
      };
    });
  }

  function buildGraph(rootName, cb) {
    var typeNames = [rootName];
    var nodes = {};

    for (var i = 0; i < typeNames.length; ++i) {
      var name = typeNames[i];
      if (typeNames.indexOf(name) < i)
        continue;

      var node = cb(schema.types[name]);
      nodes[node.id] = node;
      typeNames.push(..._.map(node.edges, 'to'));
    }
    return nodes;
  }
}

export class TypeGraph {
  constructor() {
  }

  _isSkipRelay() {
    return store.getState().displayOptions.skipRelay;
  }

  _getSchema() {
    return store.getState().schema;
  }

  _getNodes() {
    return store.getState().typeGraph;
  }

  _getTypeById(typeId:string) {
    let [tag, type] = typeId.split('::');
    return this._getSchema().types[type];
  }

  _getFieldById(fieldId:string) {
    let [tag, type, field] = fieldId.split('::');
    return this._getSchema().types[type].fields[field];
  }

  _getFieldType(field) {
    var fieldType = field.type;
    if (this._isSkipRelay() && field.relayNodeType)
      fieldType = field.relayNodeType;
    return this._getSchema().types[fieldType];
  }

  getDot():string {
    return ejs.render(template, {_, graph: this, stringifyWrappers});
  }

  getInEdges(nodeId:string):{id: string, nodeId: string}[] {
    var typeName = this._getTypeById(nodeId).name;
    let res = [];
    _.each(this._getNodes(), node => {
      _.each(node.edges, edge => {
        if (edge.to === typeName)
          res.push({ id: edge.id, nodeId: node.id });
      });
    });
    return res;
  }

  getOutEdges(nodeId:string):{id: string, nodeId: string}[] {
    let node = this._getNodes()[nodeId];
    return _.map<any, any>(node.edges, edge => ({
      id: edge.id,
      nodeId: 'TYPE::' + edge.to
    }))
  }

  getEdgeBySourceId(id:string) {
    let [tag, type, ...rest] = id.split('::');
    return this._getNodes()['TYPE::' + type].edges[buildId(tag + '_EDGE', type, ...rest)];
  }

  isFieldEdge(edge) {
    return edge.id.startsWith('FIELD_EDGE::');
  }

  isPossibleTypeEdge(edge) {
    return edge.id.startsWith('POSSIBLE_TYPE_EDGE::');
  }

  isDerivedTypeEdge(edge) {
    return edge.id.startsWith('DERIVED_TYPE_EDGE::');
  }
}

function stringifyWrappers(wrappers) {
  return _.reduce(wrappers, ([left, right], wrapper) => {
    switch (wrapper) {
      case 'NON_NULL':
        return [left, right + '!'];
      case 'LIST':
        return ['[' + left, right + ']'];
    }
  }, ['', '']);
}

function buildId(...parts) {
  return parts.join('::');
}
