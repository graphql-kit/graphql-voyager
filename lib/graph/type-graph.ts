import * as _ from 'lodash';
import { createSelector } from 'reselect'

import { store } from '../redux';

import {
  getSchemaSelector,
  isScalarType,
  isInputObjectType,
} from '../introspection/';

function getTypeGraph(schema) {
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

  function getEdgeTargets(type) {
    return _([
      ..._.values(type.fields),
      ...type.derivedTypes || [],
      ...type.possibleTypes || [],
    ])
      .map('type')
      .reject(isScalarType)
      .reject(isInputObjectType)
      .map('name')
      .value();
  }

  function buildGraph(rootName) {
    var rootType = schema.types[rootName];
    var typeNames = [rootName];
    var nodes = [];

    for (var i = 0; i < typeNames.length; ++i) {
      var name = typeNames[i];
      if (typeNames.indexOf(name) < i)
        continue;

      var type = schema.types[name];

      nodes.push(type);
      typeNames.push(...getEdgeTargets(type));
    }
    return {
      rootId: rootType.id,
      nodes: _.keyBy(nodes, 'id'),
    };
  }
}

export const getTypeGraphSelector = createSelector(
  getSchemaSelector,
  getTypeGraph
);
