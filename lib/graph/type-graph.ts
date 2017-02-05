import * as _ from 'lodash';
import { createSelector } from 'reselect'

import { store } from '../redux';

import {
  getSchemaSelector,
  isScalarType,
  isInputObjectType,
  isSystemType,
} from '../introspection/';

export function isNode(type) {
  return !(
    isScalarType(type) ||
    isInputObjectType(type) ||
    isSystemType(type) ||
    type.isRelayType
  );
}

function getTypeGraph(schema, rootTypeId) {
  if (schema === null || rootTypeId === null)
    return null;

  return buildGraph(rootTypeId);

  function getEdgeTargets(type) {
    return _([
      ..._.values(type.fields),
      ...type.derivedTypes || [],
      ...type.possibleTypes || [],
    ])
      .map('type')
      .filter(isNode)
      .map('id')
      .value();
  }

  function buildGraph(rootId) {
    var typeIds = [rootId];
    var nodes = [];
    var types = _.keyBy(schema.types, 'id');

    for (var i = 0; i < typeIds.length; ++i) {
      var id = typeIds[i];
      if (typeIds.indexOf(id) < i)
        continue;

      var type = types[id];

      nodes.push(type);
      typeIds.push(...getEdgeTargets(type));
    }
    return {
      rootId,
      nodes: _.keyBy(nodes, 'id'),
    };
  }
}

export const getTypeGraphSelector = createSelector(
  getSchemaSelector,
  state => state.displayOptions.rootTypeId,
  getTypeGraph
);
