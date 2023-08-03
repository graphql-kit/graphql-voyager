import {
  GraphQLField,
  GraphQLInterfaceType,
  GraphQLNamedType,
  GraphQLObjectType,
  GraphQLSchema,
  isInterfaceType,
  isObjectType,
  isUnionType,
} from 'graphql/type';

export function buildId(...parts) {
  return parts.join('::');
}

export function typeObjToId(type: GraphQLNamedType) {
  return typeNameToId(type.name);
}

export function typeNameToId(name: string) {
  return buildId('TYPE', name);
}

export function extractTypeName(typeID: string) {
  const [, type] = typeID.split('::');
  return type;
}

export function extractTypeId(typeID: string) {
  const [, name] = extractTypeName(typeID);
  return typeNameToId(name);
}

export function mapFields<R>(
  type: GraphQLNamedType,
  fn: (id: string, field: GraphQLField<any, any>) => R,
): Array<R> {
  if (!isInterfaceType(type) && !isObjectType(type)) {
    return [];
  }

  return Object.values(type.getFields())
    .map((field) => {
      const fieldID = `FIELD::${type.name}::${field.name}`;
      return fn(fieldID, field);
    })
    .filter((item) => item != null);
}

export function mapPossibleTypes<R>(
  type: GraphQLNamedType,
  fn: (id: string, type: GraphQLObjectType) => R,
): Array<R> {
  if (!isUnionType(type)) {
    return [];
  }

  return type
    .getTypes()
    .map((possibleType) => {
      const id = `POSSIBLE_TYPE::${type.name}::${possibleType.name}`;
      return fn(id, possibleType);
    })
    .filter((item) => item != null);
}

export function mapDerivedTypes<R>(
  schema: GraphQLSchema,
  type: GraphQLNamedType,
  fn: (id: string, type: GraphQLObjectType | GraphQLInterfaceType) => R,
): Array<R> {
  if (!isInterfaceType(type)) {
    return [];
  }

  const { interfaces, objects } = schema.getImplementations(type);
  return [...interfaces, ...objects]
    .map((possibleType) => {
      const id = `POSSIBLE_TYPE::${type.name}::${possibleType.name}`;
      return fn(id, possibleType);
    })
    .filter((item) => item != null);
}

export function mapInterfaces<R>(
  type: GraphQLNamedType,
  fn: (id: string, type: GraphQLInterfaceType) => R,
): Array<R> {
  if (!isInterfaceType(type) && !isObjectType(type)) {
    return [];
  }

  return type
    .getInterfaces()
    .map((baseType) => {
      const id = `INTERFACE::${type.name}::${baseType.name}`;
      return fn(id, baseType);
    })
    .filter((item) => item != null);
}
