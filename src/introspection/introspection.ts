import {
  assertNamedType,
  getNamedType,
  getNullableType,
  GraphQLDirective,
  GraphQLEnumType,
  GraphQLFieldConfig,
  GraphQLFieldConfigArgumentMap,
  GraphQLFieldConfigMap,
  GraphQLInputFieldConfig,
  GraphQLInputFieldConfigMap,
  GraphQLInputObjectType,
  GraphQLInterfaceType,
  GraphQLList,
  GraphQLNamedType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLOutputType,
  GraphQLSchema,
  GraphQLType,
  GraphQLUnionType,
  isEnumType,
  isInputObjectType,
  isInterfaceType,
  isIntrospectionType,
  isListType,
  isNonNullType,
  isObjectType,
  isScalarType,
  isSpecifiedScalarType,
  isUnionType,
  lexicographicSortSchema,
} from 'graphql';

import { collectDirectlyReferencedTypes } from '../utils/collect-referenced-types';

declare module 'graphql' {
  interface GraphQLFieldExtensions<_TSource, _TContext, _TArgs> {
    isRelayField?: boolean;
  }

  interface GraphQLObjectTypeExtensions<_TSource, _TContext> {
    isRelayType?: boolean;
  }

  interface GraphQLInterfaceTypeExtensions {
    isRelayType?: boolean;
  }
}

// https://graphql.org/learn/global-object-identification/
// https://relay.dev/graphql/connections.htm
function removeRelayTypes(schema: GraphQLSchema) {
  const nodeType = getNodeType();
  const pageInfoType = getPageInfoType();
  const relayTypes = new Set<GraphQLNamedType>([nodeType, pageInfoType]);
  const relayTypeToNodeMap = new Map<GraphQLObjectType, GraphQLOutputType>();

  for (const type of Object.values(schema.getTypeMap())) {
    if (isInterfaceType(type) || isObjectType(type)) {
      for (const field of Object.values(type.getFields())) {
        const connectionType = getNamedType(field.type);

        if (
          !isObjectType(connectionType) ||
          !/.Connection$/.test(connectionType.name)
        ) {
          continue;
        }

        const connectionFields = connectionType.getFields();
        const edgeType = getNamedType(connectionFields.edges?.type);
        if (!isObjectType(edgeType) || connectionFields.pageInfo == null) {
          continue;
        }

        const edgeFields = edgeType.getFields();
        const nodeType = edgeFields.node?.type;
        if (nodeType == null || edgeFields.cursor == null) {
          continue;
        }

        relayTypes.add(connectionType);
        relayTypes.add(edgeType);
        relayTypeToNodeMap.set(connectionType, new GraphQLList(nodeType));
        // GitHub uses edge type in mutations
        relayTypeToNodeMap.set(edgeType, getNullableType(nodeType));
      }
    }
  }

  // Dry run changeType and collect all referenced types to eliminate unused Relay types
  const allReferenceTypes = new Set<GraphQLNamedType>();
  for (const oldType of Object.values(schema.getTypeMap())) {
    if (!relayTypes.has(oldType)) {
      const newType = changeType(oldType);
      collectDirectlyReferencedTypes(newType, allReferenceTypes);
    }
  }

  return (type: GraphQLNamedType) => {
    if (relayTypes.has(type) && !allReferenceTypes.has(type)) {
      return null;
    }
    return changeType(type);
  };

  function changeType(type: GraphQLNamedType) {
    if (isInterfaceType(type)) {
      const config = type.toConfig();
      return new GraphQLInterfaceType({
        ...config,
        ...type.toConfig(),
        fields: changeFields(type),
        interfaces: config.interfaces.filter((type) => type !== nodeType),
        extensions: {
          ...config.extensions,
          isRelayType: relayTypes.has(type),
        },
      });
    }
    if (isObjectType(type)) {
      const config = type.toConfig();
      return new GraphQLObjectType({
        ...config,
        fields: changeFields(type),
        interfaces: config.interfaces.filter((type) => type !== nodeType),
        extensions: {
          ...config.extensions,
          isRelayType: relayTypes.has(type),
        },
      });
    }
    return type;
  }

  function changeFields(type: GraphQLObjectType | GraphQLInterfaceType) {
    return mapValues(type.toConfig().fields, (field, fieldName) => {
      if (type === schema.getQueryType()) {
        switch (fieldName) {
          case 'relay':
            if (getNamedType(field.type) === type) {
              return null; // delete field
            }
            break;
          case 'node':
          // falls through since GitHub use `nodes` instead of `node`.
          case 'nodes':
            if (getNamedType(field.type) === nodeType) {
              return null; // delete field
            }
            break;
        }
      }

      const relayConnection = getNullableType(field.type);
      if (isObjectType(relayConnection)) {
        const relayNode = relayTypeToNodeMap.get(relayConnection);
        if (relayNode !== undefined) {
          return {
            ...field,
            type: isNonNullType(field.type)
              ? new GraphQLNonNull(relayNode)
              : relayNode,
            args: mapValues(field.args, (arg, argName) =>
              isRelayArgumentName(argName) ? null : arg,
            ),
            extensions: {
              ...field.extensions,
              isRelayField: true,
            },
          };
        }
      }

      return {
        ...field,
        extensions: {
          ...field.extensions,
          isRelayField: relayTypes.has(getNamedType(field.type)),
        },
      };
    });
  }

  function isRelayArgumentName(name: string) {
    switch (name) {
      case 'first':
      case 'last':
      case 'before':
      case 'after':
        return true;
      default:
        return false;
    }
  }

  function getNodeType(): GraphQLInterfaceType | null {
    const nodeType = schema.getType('Node');
    return isInterfaceType(nodeType) ? nodeType : null;
  }

  function getPageInfoType() {
    const pageInfo = schema.getType('PageInfo');
    return isObjectType(pageInfo) ? pageInfo : null;
  }
}

function removeDeprecated(type: GraphQLNamedType) {
  // We can't remove types that end up being empty because we cannot be sure that
  // the @deprecated directives where consistently added to the schema we're handling.
  //
  // Entities may have non deprecated fields pointing towards entities which are deprecated.

  if (isObjectType(type)) {
    const config = type.toConfig();
    return new GraphQLObjectType({
      ...config,
      fields: Object.fromEntries(
        Object.entries(config.fields).filter(notDeprecated),
      ),
    });
  }
  if (isInterfaceType(type)) {
    const config = type.toConfig();
    return new GraphQLInterfaceType({
      ...config,
      fields: Object.fromEntries(
        Object.entries(config.fields).filter(notDeprecated),
      ),
    });
  }
  if (isInputObjectType(type)) {
    const config = type.toConfig();
    return new GraphQLInputObjectType({
      ...config,
      fields: Object.fromEntries(
        Object.entries(config.fields).filter(notDeprecated),
      ),
    });
  }

  return type;

  function notDeprecated([, field]: [
    string,
    GraphQLFieldConfig<any, any> | GraphQLInputFieldConfig,
  ]) {
    return field.deprecationReason == null;
  }
}

export function getSchema(
  introspectionSchema: GraphQLSchema,
  sortByAlphabet: boolean,
  skipRelay: boolean,
  skipDeprecated: boolean,
): GraphQLSchema {
  let schema = introspectionSchema;

  if (sortByAlphabet) {
    schema = lexicographicSortSchema(schema);
  }

  const typeTransformers = [];
  if (skipRelay === true) {
    typeTransformers.push(removeRelayTypes(schema));
  }
  if (skipDeprecated === true) {
    typeTransformers.push(removeDeprecated);
  }

  return transformSchema(schema, typeTransformers);
}

// FIXME: Contribute to graphql-js
export function transformSchema(
  schema: GraphQLSchema,
  transformType: ReadonlyArray<(type: GraphQLNamedType) => GraphQLNamedType>,
  transformDirective: ReadonlyArray<
    (directive: GraphQLDirective) => GraphQLDirective
  > = [],
): GraphQLSchema {
  const schemaConfig = schema.toConfig();

  const typeMap = new Map<string, GraphQLNamedType>();
  for (const oldType of schemaConfig.types) {
    const newType = transformNamedType(oldType);
    if (newType != null) {
      typeMap.set(newType.name, newType);
    }
  }

  const directives = [];
  for (const oldDirective of schemaConfig.directives) {
    let newDirective = oldDirective;
    for (const fn of transformDirective) {
      if (newDirective === null) {
        continue;
      }
      newDirective = fn(newDirective);
    }

    if (newDirective == null) {
      continue;
    }
    directives.push(replaceDirective(newDirective));
  }

  return new GraphQLSchema({
    ...schemaConfig,
    types: Array.from(typeMap.values()),
    directives,
    query: replaceMaybeType(schemaConfig.query),
    mutation: replaceMaybeType(schemaConfig.mutation),
    subscription: replaceMaybeType(schemaConfig.subscription),
  });

  function replaceType<T extends GraphQLType>(type: T): T {
    if (isListType(type)) {
      // @ts-expect-error Type mismatch
      return new GraphQLList(replaceType(type.ofType));
    } else if (isNonNullType(type)) {
      // @ts-expect-error Type mismatch
      return new GraphQLNonNull(replaceType(type.ofType));
    }
    // @ts-expect-error Type mismatch
    return replaceNamedType<GraphQLNamedType>(type);
  }

  function replaceMaybeType<T extends GraphQLNamedType>(
    maybeType: T | null | undefined,
  ): T | null | undefined {
    return maybeType && (replaceNamedType(maybeType) as T);
  }

  function replaceTypes<T extends GraphQLNamedType>(
    array: ReadonlyArray<T>,
  ): Array<T> {
    return array.map(replaceNamedType) as Array<T>;
  }

  function replaceNamedType(type: GraphQLNamedType): GraphQLNamedType {
    return assertNamedType(typeMap.get(type.name));
  }

  function replaceDirective(directive: GraphQLDirective) {
    const config = directive.toConfig();
    return new GraphQLDirective({
      ...config,
      args: transformArgs(config.args),
    });
  }

  function transformArgs(args: GraphQLFieldConfigArgumentMap) {
    return mapValues(args, (arg) => ({
      ...arg,
      type: replaceType(arg.type),
    }));
  }

  function transformFields(fieldsMap: GraphQLFieldConfigMap<unknown, unknown>) {
    return mapValues(fieldsMap, (field) => ({
      ...field,
      type: replaceType(field.type),
      args: field.args && transformArgs(field.args),
    }));
  }

  function transformInputFields(fieldsMap: GraphQLInputFieldConfigMap) {
    return mapValues(fieldsMap, (field) => ({
      ...field,
      type: replaceType(field.type),
    }));
  }

  function transformNamedType(
    oldType: GraphQLNamedType,
  ): GraphQLNamedType | null {
    if (isIntrospectionType(oldType) || isSpecifiedScalarType(oldType)) {
      return oldType;
    }

    let newType = oldType;
    for (const fn of transformType) {
      newType = fn(newType);
      if (newType === null) {
        return null;
      }
    }

    if (isScalarType(newType)) {
      return newType;
    }
    if (isObjectType(newType)) {
      const config = newType.toConfig();
      return new GraphQLObjectType({
        ...config,
        interfaces: () => replaceTypes(config.interfaces),
        fields: () => transformFields(config.fields),
      });
    }
    if (isInterfaceType(newType)) {
      const config = newType.toConfig();
      return new GraphQLInterfaceType({
        ...config,
        interfaces: () => replaceTypes(config.interfaces),
        fields: () => transformFields(config.fields),
      });
    }
    if (isUnionType(newType)) {
      const config = newType.toConfig();
      return new GraphQLUnionType({
        ...config,
        types: () => replaceTypes(config.types),
      });
    }
    if (isEnumType(newType)) {
      const config = newType.toConfig();
      return new GraphQLEnumType({ ...config });
    }
    if (isInputObjectType(newType)) {
      const config = newType.toConfig();
      return new GraphQLInputObjectType({
        ...config,
        fields: () => transformInputFields(config.fields),
      });
    }
  }
}

function mapValues<T, R>(
  obj: { [key: string]: T },
  mapper: (value: T, key: string) => R,
): { [key: string]: R } {
  return Object.fromEntries(
    Object.entries(obj)
      .map(([key, value]) => [key, mapper(value, key)])
      .filter(([, value]) => value != null),
  );
}
