import {
  assertNamedType,
  GraphQLDirective,
  GraphQLEnumType,
  GraphQLFieldConfigArgumentMap,
  GraphQLFieldConfigMap,
  GraphQLInputFieldConfigMap,
  GraphQLInputObjectType,
  GraphQLInterfaceType,
  GraphQLList,
  GraphQLNamedType,
  GraphQLNonNull,
  GraphQLObjectType,
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
} from 'graphql/type';

import { unreachable } from '../utils/unreachable';
import { mapValues } from './mapValues';

// FIXME: Contribute to graphql-js
export function transformSchema(
  schema: GraphQLSchema,
  transformType: ReadonlyArray<
    (type: GraphQLNamedType) => GraphQLNamedType | null
  >,
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
      const resultType = fn(newType);
      if (resultType === null) {
        return null;
      }
      newType = resultType;
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
    unreachable(newType);
  }
}
