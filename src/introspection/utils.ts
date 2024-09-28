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

export function typeObjToId(type: GraphQLNamedType) {
  return typeNameToId(type.name);
}

export function typeNameToId(name: string) {
  return `TYPE::${name}`;
}

export function extractTypeName(typeID: string): string {
  const [, type] = typeID.split('::');
  return type;
}

export function mapFields<R>(
  type: GraphQLNamedType,
  fn: (id: string, field: GraphQLField<any, any>) => R | null,
): Array<R> {
  const array = [];
  if (isInterfaceType(type) || isObjectType(type)) {
    for (const field of Object.values(type.getFields())) {
      const id = `FIELD::${type.name}::${field.name}`;
      const result = fn(id, field);
      if (result != null) {
        array.push(result);
      }
    }
  }
  return array;
}

export function mapPossibleTypes<R>(
  type: GraphQLNamedType,
  fn: (id: string, type: GraphQLObjectType) => R | null,
): Array<R> {
  const array = [];
  if (isUnionType(type)) {
    for (const possibleType of type.getTypes()) {
      const id = `POSSIBLE_TYPE::${type.name}::${possibleType.name}`;
      const result = fn(id, possibleType);
      if (result != null) {
        array.push(result);
      }
    }
  }
  return array;
}

export function mapDerivedTypes<R>(
  schema: GraphQLSchema,
  type: GraphQLNamedType,
  fn: (id: string, type: GraphQLObjectType | GraphQLInterfaceType) => R | null,
): Array<R> {
  const array = [];
  if (isInterfaceType(type)) {
    const { interfaces, objects } = schema.getImplementations(type);
    for (const derivedType of [...interfaces, ...objects]) {
      const id = `DERIVED_TYPE::${type.name}::${derivedType.name}`;
      const result = fn(id, derivedType);
      if (result != null) {
        array.push(result);
      }
    }
  }
  return array;
}

export function mapInterfaces<R>(
  type: GraphQLNamedType,
  fn: (id: string, type: GraphQLInterfaceType) => R | null,
): Array<R> {
  const array = [];
  if (isInterfaceType(type) || isObjectType(type)) {
    for (const baseType of type.getInterfaces()) {
      const id = `INTERFACE::${type.name}::${baseType.name}`;
      const result = fn(id, baseType);
      if (result != null) {
        array.push(result);
      }
    }
  }
  return array;
}
