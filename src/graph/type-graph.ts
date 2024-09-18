import {
  assertCompositeType,
  getNamedType,
  GraphQLCompositeType,
  GraphQLNamedOutputType,
  GraphQLNamedType,
  GraphQLSchema,
  isCompositeType,
  isInterfaceType,
  isUnionType,
} from 'graphql/type';

import { VoyagerDisplayOptions } from '../components/Voyager';

export interface TypeGraph {
  schema: GraphQLSchema;
  rootType: GraphQLCompositeType;
  nodes: Map<string, GraphQLNamedType>;
  showLeafFields: boolean;
}

export function isNode(type: GraphQLNamedType): type is GraphQLCompositeType {
  return (
    isCompositeType(type) &&
    type.extensions.isRelayType !== true &&
    !type.name.startsWith('__')
  );
}

export function getTypeGraph(
  schema: GraphQLSchema,
  displayOptions: VoyagerDisplayOptions,
): TypeGraph {
  const rootType = assertCompositeType(
    schema.getType(displayOptions.rootType ?? schema.getQueryType()!.name),
  );

  const nodeMap = new Map<string, GraphQLCompositeType>();
  nodeMap.set(rootType.name, rootType);

  getOtherRootTypes(schema).forEach((type) => nodeMap.set(type.name, type));

  for (const type of nodeMap.values()) {
    for (const edgeTarget of getEdgeTargets(type)) {
      if (isNode(edgeTarget)) {
        nodeMap.set(edgeTarget.name, edgeTarget);
      }
    }
  }

  if (displayOptions.hideRoot === true) {
    nodeMap.delete(rootType.name);
  }

  return {
    schema,
    rootType,
    nodes: nodeMap,
    showLeafFields: displayOptions.showLeafFields ?? false,
  };

  function getEdgeTargets(
    type: GraphQLCompositeType,
  ): ReadonlyArray<GraphQLNamedOutputType> {
    if (isUnionType(type)) {
      return type.getTypes();
    }

    const fieldTypes = Object.values(type.getFields()).map((field) =>
      getNamedType(field.type),
    );

    if (isInterfaceType(type)) {
      const implementations = schema.getImplementations(type);
      return [
        ...fieldTypes,
        ...implementations.interfaces,
        ...implementations.objects,
      ];
    }

    return fieldTypes;
  }

  function getOtherRootTypes(schema: GraphQLSchema): Array<GraphQLCompositeType> {
    const types = Object.values(schema.getTypeMap())
      .filter(isNode)
      .filter((type) => type !== rootType);

    // Collect all types that are referenced from a source
    const typesWithSourceReference: Set<string> = new Set();

    types.forEach((type) => {
      (isUnionType(type) ? type.getTypes() : [type]).map((type) => {
        Object.values(type.getFields()).forEach((field) => {
          typesWithSourceReference.add(getNamedType(field.type).name);
        });
      });
    });

    // Return only the types that have no source reference
    return types.filter((type) => !typesWithSourceReference.has(getNamedType(type).name));
  }
}
