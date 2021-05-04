import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLInt,
  GraphQLString
} from 'graphql/type/scalars'

export function extractTypeId(id: string) {
  let [, type] = id.split('::');
  return buildId('TYPE', type);
}

export function buildId(...parts) {
  return parts.join('::');
}

export function isBuiltInScalarType(type) {
  return ['Int', 'Float', 'String', 'Boolean', 'ID'].indexOf(type.name) !== -1;
}

export function isScalarType(type) {
  return type.kind === 'SCALAR' || type.kind === 'ENUM';
}

export function isObjectType(type) {
  return type.kind === 'OBJECT';
}

export function isInputObjectType(type) {
  return type.kind === 'INPUT_OBJECT';
}

export function stringifyWrappers(wrappers) {
  let left = '';
  let right = '';

  for (const wrapper of wrappers) {
    if (wrapper.startsWith('MAP:')) {
      left = left + `map[${wrapper.substr(4)}]`
      continue
    }

    switch (wrapper) {
      case 'NON_NULL':
        right = '!' + right;
        break;
      case 'LIST':
        left = left + '[';
        right = ']' + right;
        break;
    }
  }
  return [left, right];
}

export function fixConstants(node) {
  for (let field of node.fields) {
    if (typeof field.type == "string") {
      switch (field.type) {
        case "Int":
          field.type = GraphQLInt
          break
        case "Float":
          field.type = GraphQLFloat
          break
        case "String":
          field.type = GraphQLString
          break
        case "Boolean":
          field.type = GraphQLBoolean
          break
        default:
          field.type = GraphQLString
      }
    } else {
      fixConstants(field.type)
    }
  }
}
