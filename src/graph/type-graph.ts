/* eslint-disable */
import * as _ from 'lodash';
import {
  typeNameToId,
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

export function getDefaultRoot(schema) {
  return schema.queryType.name;
}

export function getTypeGraph(schema, rootType: string, hideRoot: boolean) {
  if (schema === null) return null;

  const rootId = typeNameToId(rootType || getDefaultRoot(schema));
  return buildGraph(rootId);

  function getEdgeTargets(type) {
    return _([
      ..._.values(type.fields),
      ...(type.derivedTypes || []),
      ...(type.possibleTypes || []),
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
      if (typeIds.indexOf(id) < i) continue;

      var type = types[id];

      nodes.push(type);
      typeIds.push(...getEdgeTargets(type));
    }
    return {
      rootId,
      nodes: hideRoot
        ? _.omit(_.keyBy(nodes, 'id'), [rootId])
        : _.keyBy(nodes, 'id'),
    };
  }
}
