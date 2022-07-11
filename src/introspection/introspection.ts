import * as _ from 'lodash';
import {
  GraphQLNamedType,
  GraphQLSchema,
  GraphQLArgument,
  GraphQLInputField,
  GraphQLField,
  isWrappingType,
  isNonNullType,
  isUnionType,
  isEnumType,
  isInputObjectType,
  isObjectType,
  isInterfaceType,
  isScalarType,
  buildClientSchema,
  lexicographicSortSchema,
} from 'graphql';
import {
  SimplifiedIntrospection,
  SimplifiedIntrospectionWithIds,
  SimplifiedType,
  SimplifiedInputField,
  SimplifiedField,
} from './types';
import { typeNameToId } from './utils';

function unwrapType(type) {
  let unwrappedType = type;
  const typeWrappers = [];

  while (isWrappingType(unwrappedType)) {
    typeWrappers.push(isNonNullType(unwrappedType) ? 'NON_NULL' : 'LIST');
    unwrappedType = unwrappedType.ofType;
  }

  return {
    type: unwrappedType.name,
    typeWrappers,
  };
}

function convertInputValue(
  inputValue: GraphQLArgument | GraphQLInputField,
): SimplifiedInputField {
  return {
    name: inputValue.name,
    description: inputValue.description,
    ...unwrapType(inputValue.type),
    defaultValue: inputValue.defaultValue,
  };
}

function convertField(
  field: GraphQLField<unknown, unknown>,
): SimplifiedField<string> {
  return {
    name: field.name,
    description: field.description,
    ...unwrapType(field.type),
    args: Object.fromEntries(
      field.args.map((arg) => [arg.name, convertInputValue(arg)]),
    ),
    isDeprecated: field.deprecationReason != null,
    deprecationReason: field.deprecationReason,
  };
}

function convertType(
  schema: GraphQLSchema,
  type: GraphQLNamedType,
): SimplifiedType {
  if (isObjectType(type)) {
    return {
      kind: 'OBJECT',
      name: type.name,
      description: type.description,
      interfaces: type.getInterfaces().map(({ name }) => name),
      fields: mapValues(type.getFields(), convertField),
    };
  } else if (isInterfaceType(type)) {
    return {
      kind: 'INTERFACE',
      name: type.name,
      description: type.description,
      interfaces: type.getInterfaces().map(({ name }) => name),
      fields: mapValues(type.getFields(), convertField),
      derivedTypes: schema
        .getImplementations(type)
        .objects.map(({ name }) => name),
    };
  } else if (isUnionType(type)) {
    return {
      kind: 'UNION',
      name: type.name,
      description: type.description,
      possibleTypes: type.getTypes().map(({ name }) => name),
    };
  } else if (isEnumType(type)) {
    return {
      kind: 'ENUM',
      name: type.name,
      description: type.description,
      enumValues: type.getValues().map((value) => ({
        name: value.name,
        description: value.description,
        isDeprecated: value.deprecationReason != null,
        deprecationReason: value.deprecationReason,
      })),
    };
  } else if (isInputObjectType(type)) {
    return {
      kind: 'INTERFACE',
      name: type.name,
      description: type.description,
      inputFields: mapValues(type.getFields(), convertInputValue),
    };
  } else if (isScalarType(type)) {
    return {
      kind: 'SCALAR',
      name: type.name,
      description: type.description,
    };
  }
}

function mapValues<T, R>(
  obj: { [key: string]: T },
  mapper: (value: T) => R,
): { [key: string]: R } {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, mapper(value)]),
  );
}

function simplifySchema(schema: GraphQLSchema): SimplifiedIntrospection {
  return {
    types: mapValues(schema.getTypeMap(), (type) => convertType(schema, type)),
    queryType: schema.getQueryType().name,
    mutationType: schema.getMutationType()?.name ?? null,
    subscriptionType: schema.getSubscriptionType()?.name ?? null,
    //FIXME:
    //directives:
  };
}

function markRelayTypes(schema: SimplifiedIntrospectionWithIds): void {
  const nodeType = schema.types[typeNameToId('Node')];
  if (nodeType) nodeType.isRelayType = true;

  const pageInfoType = schema.types[typeNameToId('PageInfo')];
  if (pageInfoType) pageInfoType.isRelayType = true;

  const edgeTypesMap = {};

  _.each(schema.types, (type) => {
    if (!_.isEmpty(type.interfaces)) {
      type.interfaces = _.reject(
        type.interfaces,
        (baseType) => baseType.type.name === 'Node',
      );
    }

    _.each(type.fields, (field) => {
      const connectionType = field.type;
      if (
        !/.Connection$/.test(connectionType.name) ||
        connectionType.kind !== 'OBJECT' ||
        !connectionType.fields.edges
      ) {
        return;
      }

      const edgesType = connectionType.fields.edges.type;
      if (edgesType.kind !== 'OBJECT' || !edgesType.fields.node) {
        return;
      }

      const nodeType = edgesType.fields.node.type;

      connectionType.isRelayType = true;
      edgesType.isRelayType = true;

      edgeTypesMap[edgesType.name] = nodeType;

      field.relayType = field.type;
      field.type = nodeType;
      field.typeWrappers = ['LIST'];

      const relayArgNames = ['first', 'last', 'before', 'after'];
      const isRelayArg = (arg) => relayArgNames.includes(arg.name);
      field.relayArgs = _.pickBy(field.args, isRelayArg);
      field.args = _.omitBy(field.args, isRelayArg);
    });
  });

  _.each(schema.types, (type) => {
    _.each(type.fields, (field) => {
      var realType = edgeTypesMap[field.type.name];
      if (realType === undefined) return;

      field.relayType = field.type;
      field.type = realType;
    });
  });

  const { queryType } = schema;
  let query = schema.types[queryType.id];

  if (_.get(query, 'fields.node.type.isRelayType')) {
    delete query.fields['node'];
  }

  //GitHub use `nodes` instead of `node`.
  if (_.get(query, 'fields.nodes.type.isRelayType')) {
    delete query.fields['nodes'];
  }

  if (_.get(query, 'fields.relay.type') === queryType) {
    delete query.fields['relay'];
  }
}

function markDeprecated(schema: SimplifiedIntrospectionWithIds): void {
  // Remove deprecated fields.
  _.each(schema.types, (type) => {
    type.fields = _.pickBy(type.fields, (field) => !field.isDeprecated);
  });

  // We can't remove types that end up being empty
  // because we cannot be sure that the @deprecated directives where
  // consistently added to the schema we're handling.
  //
  // Entities may have non deprecated fields pointing towards entities
  // which are deprecated.
}

function assignTypesAndIDs(schema: SimplifiedIntrospection) {
  (<any>schema).queryType = schema.types[schema.queryType];
  (<any>schema).mutationType = schema.types[schema.mutationType];
  (<any>schema).subscriptionType = schema.types[schema.subscriptionType];

  _.each(schema.types, (type: any) => {
    type.id = typeNameToId(type.name);

    _.each(type.inputFields, (field: any) => {
      field.id = `FIELD::${type.name}::${field.name}`;
      field.type = schema.types[field.type];
    });

    _.each(type.fields, (field: any) => {
      field.id = `FIELD::${type.name}::${field.name}`;
      field.type = schema.types[field.type];
      _.each(field.args, (arg: any) => {
        arg.id = `ARGUMENT::${type.name}::${field.name}::${arg.name}`;
        arg.type = schema.types[arg.type];
      });
    });

    if (!_.isEmpty(type.possibleTypes)) {
      type.possibleTypes = _.map(
        type.possibleTypes,
        (possibleType: string) => ({
          id: `POSSIBLE_TYPE::${type.name}::${possibleType}`,
          type: schema.types[possibleType],
        }),
      );
    }

    if (!_.isEmpty(type.derivedTypes)) {
      type.derivedTypes = _.map(type.derivedTypes, (derivedType: string) => ({
        id: `DERIVED_TYPE::${type.name}::${derivedType}`,
        type: schema.types[derivedType],
      }));
    }

    if (!_.isEmpty(type.interfaces)) {
      type.interfaces = _.map(type.interfaces, (baseType: string) => ({
        id: `INTERFACE::${type.name}::${baseType}`,
        type: schema.types[baseType],
      }));
    }
  });

  schema.types = _.keyBy(schema.types, 'id');
}

export function getSchema(
  introspection: any,
  sortByAlphabet: boolean,
  skipRelay: boolean,
  skipDeprecated: boolean,
) {
  if (!introspection) return null;

  let schema = buildClientSchema(introspection.data);
  if (sortByAlphabet) {
    schema = lexicographicSortSchema(schema);
  }

  let simpleSchema = simplifySchema(schema);

  assignTypesAndIDs(simpleSchema);

  if (skipRelay) {
    markRelayTypes((<any>simpleSchema) as SimplifiedIntrospectionWithIds);
  }
  if (skipDeprecated) {
    markDeprecated((<any>simpleSchema) as SimplifiedIntrospectionWithIds);
  }
  return simpleSchema;
}
