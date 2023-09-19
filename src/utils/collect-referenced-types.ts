import {
  getNamedType,
  GraphQLNamedType,
  GraphQLType,
  isInputObjectType,
  isInterfaceType,
  isObjectType,
  isUnionType,
} from 'graphql/type';

export function collectDirectlyReferencedTypes(
  type: GraphQLType,
  typeSet: Set<GraphQLNamedType>,
): Set<GraphQLNamedType> {
  const namedType = getNamedType(type);

  if (isUnionType(namedType)) {
    for (const memberType of namedType.getTypes()) {
      typeSet.add(memberType);
    }
  } else if (isObjectType(namedType) || isInterfaceType(namedType)) {
    for (const interfaceType of namedType.getInterfaces()) {
      typeSet.add(interfaceType);
    }

    for (const field of Object.values(namedType.getFields())) {
      typeSet.add(getNamedType(field.type));
      for (const arg of field.args) {
        typeSet.add(getNamedType(arg.type));
      }
    }
  } else if (isInputObjectType(namedType)) {
    for (const field of Object.values(namedType.getFields())) {
      typeSet.add(getNamedType(field.type));
    }
  }

  return typeSet;
}
