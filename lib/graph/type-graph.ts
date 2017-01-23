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
    }));
  }

  function getEdges(type) {
    return _([
      ..._.values(type.fields),
      ...type.derivedTypes || [],
      ...type.possibleTypes || [],
    ])
      .reject('type.isBasicType')
      .map(member => ({
        from: member.id,
        to: member.type.id,
      }))
      .value();
  }

  function buildGraph(rootName) {
    var typeIDs = [rootName];
    var nodes = [];

    for (var i = 0; i < typeIDs.length; ++i) {
      var id = typeIDs[i];
      if (typeIDs.indexOf(id) < i)
        continue;

      var type = schema.types[id.replace(/^TYPE::/, '')];

      nodes.push(type);
      typeIDs.push(..._.map(getEdges(type), 'to'));
    }
    return _.keyBy(nodes, 'id');
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
