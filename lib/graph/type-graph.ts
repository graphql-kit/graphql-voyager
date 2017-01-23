import * as _ from 'lodash';
import * as ejs from 'ejs';
import { createSelector } from 'reselect'

import { store } from '../redux';
import { getSchemaSelector } from '../introspection/'

const template = require('./dot_template.ejs');

function getTypeGraph(schema, skipRelay) {
  if (schema === null)
    return null;

  return buildGraph(schema.queryType);

  function skipType(typeName):boolean {
    var type = schema.types[typeName];
    return (
      ['SCALAR', 'ENUM', 'INPUT_OBJECT'].indexOf(type.kind) !== -1 ||
      type.isSystemType ||
      (skipRelay && type.isRelayType)
    );
  }

  function fieldEdges(type) {
    return _.map<any, any>(type.fields, field => ({
      connectionType: 'field',
      fromPort: field.name,
      to: field.type,
    }));
  }

  function unionEdges(type) {
    return _.map<string, any>(type.possibleTypes, possibleType => ({
      connectionType: 'possible_type',
      fromPort: possibleType.type,
      to: possibleType.type,
    }));
  }

  function interfaceEdges(type) {
    return _.map<string, any>(type.derivedTypes, derivedType => ({
      connectionType: 'derived_type',
      fromPort: derivedType.type,
      to: derivedType.type,
    }));
  }

  function buildGraph(rootName) {
    var typeNames = [rootName];
    var nodes = {};

    for (var i = 0; i < typeNames.length; ++i) {
      var name = typeNames[i];
      if (typeNames.indexOf(name) < i)
        continue;

      var type = schema.types[name];
      var edges = _([
        ...fieldEdges(type),
        ...unionEdges(type),
        ...interfaceEdges(type)
      ])
      .reject(edge => skipType(edge.to))
      .map(edge => ({
        ...edge,
        id: `${edge.connectionType.toUpperCase()}_EDGE::${type.name}::${edge.fromPort}`
      }))
      .keyBy('id')
      .value();

      nodes[type.id] = {...type, edges};
      typeNames.push(..._.map(edges, 'to'));
    }
    return nodes;
  }
}

export const getTypeGraphSelector = createSelector(
  getSchemaSelector,
  (state:any) => state.displayOptions.skipRelay,
  getTypeGraph
);

export class TypeGraph {
  typeGraph: any;
  constructor(typeGraph) {
    this.typeGraph = typeGraph
  }

  getDot():string {
    return ejs.render(template, {_, typeGraph: this.typeGraph, stringifyWrappers});
  }

  getInEdges(nodeId:string):{id: string, nodeId: string}[] {
    var typeName = this.typeGraph[nodeId].name;
    let res = [];
    _.each(this.typeGraph, node => {
      _.each(node.edges, edge => {
        if (edge.to === typeName)
          res.push({ id: edge.id, nodeId: node.id });
      });
    });
    return res;
  }

  getOutEdges(nodeId:string):{id: string, nodeId: string}[] {
    let node = this.typeGraph[nodeId];
    return _.map<any, any>(node.edges, edge => ({
      id: edge.id,
      nodeId: 'TYPE::' + edge.to
    }))
  }

  getEdgeBySourceId(id:string) {
    let [tag, type, ...rest] = id.split('::');
    return this.typeGraph['TYPE::' + type].edges[buildId(tag + '_EDGE', type, ...rest)];
  }

  getTypeById(id: string) {
    let [tag, type] = id.split('::');
    return this.typeGraph['TYPE::' + type];
  }
}

export function stringifyWrappers(wrappers) {
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
