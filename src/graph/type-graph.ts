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

export interface TypeGraph {
  schema: GraphQLSchema;
  rootType: GraphQLCompositeType;
  nodes: Map<string, GraphQLCompositeType>;
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
  rootName?: string,
  hideRoot?: boolean,
): TypeGraph {
  const rootType = assertCompositeType(
    schema.getType(rootName ?? schema.getQueryType()!.name),
  );

  const nodeMap = new Map<string, GraphQLCompositeType>();
  nodeMap.set(rootType.name, rootType);

  for (const type of nodeMap.values()) {
    for (const edgeTarget of getEdgeTargets(type)) {
      if (isNode(edgeTarget)) {
        nodeMap.set(edgeTarget.name, edgeTarget);
      }
    }
  }

  if (hideRoot === true) {
    nodeMap.delete(rootType.name);
  }

  return {
    schema,
    rootType,
    nodes: nodeMap,
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
}
