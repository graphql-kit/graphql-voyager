import { StateInterface } from '../reducers';
import * as _ from 'lodash';
import { createSelector } from 'reselect';
import { buildClientSchema, IntrospectionSchema, IntrospectionType } from 'graphql';
import { SimplifiedIntrospection, SimplifiedIntrospectionWithIds, SimplifiedType } from './types';

import { typeNameToId } from './utils';

function unwrapType(type, wrappers) {
  while (type.kind === 'NON_NULL' || type.kind == 'LIST') {
    wrappers.push(type.kind);
    type = type.ofType;
  }

  return type.name;
}

function convertArg(inArg) {
  var outArg = <any>{
    name: inArg.name,
    description: inArg.description,
    defaultValue: inArg.defaultValue,
    typeWrappers: [],
  };
  outArg.type = unwrapType(inArg.type, outArg.typeWrappers);

  return outArg;
}

let convertInputField = convertArg;

function convertField(inField) {
  var outField = <any>{
    name: inField.name,
    description: inField.description,
    typeWrappers: [],
    isDeprecated: inField.isDeprecated,
  };

  outField.type = unwrapType(inField.type, outField.typeWrappers);

  outField.args = _(inField.args)
    .map(convertArg)
    .keyBy('name')
    .value();

  if (outField.isDeprecated) outField.deprecationReason = inField.deprecationReason;

  return outField;
}

function convertType(inType: IntrospectionType): SimplifiedType {
  const outType: SimplifiedType = {
    kind: inType.kind,
    name: inType.name,
    description: inType.description,
  };

  switch (inType.kind) {
    case 'OBJECT':
      outType.interfaces = _(inType.interfaces)
        .map('name')
        .uniq()
        .value();
      outType.fields = _(inType.fields)
        .map(convertField)
        .keyBy('name')
        .value();
      break;
    case 'INTERFACE':
      outType.derivedTypes = _(inType.possibleTypes)
        .map('name')
        .uniq()
        .value();
      outType.fields = _(inType.fields)
        .map(convertField)
        .keyBy('name')
        .value();
      break;
    case 'UNION':
      outType.possibleTypes = _(inType.possibleTypes)
        .map('name')
        .uniq()
        .value();
      break;
    case 'ENUM':
      outType.enumValues = inType.enumValues;
      break;
    case 'INPUT_OBJECT':
      outType.inputFields = _(inType.inputFields)
        .map(convertInputField)
        .keyBy('name')
        .value();
      break;
  }

  return outType;
}

function simplifySchema(inSchema: IntrospectionSchema): SimplifiedIntrospection {
  return {
    types: _(inSchema.types)
      .map(convertType)
      .keyBy('name')
      .value(),
    queryType: inSchema.queryType.name,
    mutationType: _.get(inSchema, 'mutationType.name', null),
    subscriptionType: _.get(inSchema, 'subscriptionType.name', null),
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

  _.each(schema.types, type => {
    if (!_.isEmpty(type.interfaces)) {
      type.interfaces = _.reject(type.interfaces, baseType => baseType.type.name === 'Node');
      if (_.isEmpty(type.interfaces)) delete type.interfaces;
    }

    _.each(type.fields, field => {
      if (!/.Connection$/.test(field.type.name)) return;

      //FIXME: additional checks
      const relayConnetion = field.type;

      if (!relayConnetion.fields.edges) return;

      relayConnetion.isRelayType = true;
      const relayEdge = relayConnetion.fields['edges'].type;
      relayEdge.isRelayType = true;
      const realType = relayEdge.fields['node'].type;
      edgeTypesMap[relayEdge.name] = realType;

      field.relayType = field.type;
      field.type = realType;
      field.typeWrappers = ['LIST'];

      const relayArgNames = ['first', 'last', 'before', 'after'];
      const isRelayArg = arg => relayArgNames.includes(arg.name);
      field.relayArgs = _.pickBy(field.args, isRelayArg);
      field.args = _.omitBy(field.args, isRelayArg);
    });
  });

  _.each(schema.types, type => {
    _.each(type.fields, field => {
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

function sortIntrospection(value) {
  if (Array.isArray(value)) {
    if (typeof value[0] === 'string') {
      return value.sort();
    } else {
      return value.map(sortIntrospection);
    }
  } else if (typeof value === 'object' && value !== null) {
    var sortedObj = Object.create(null);
    for (const key of Object.keys(value).sort()) {
      sortedObj[key] = sortIntrospection(value[key]);
    }
    return sortedObj;
  } else {
    return value;
  }
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
      type.possibleTypes = _.map(type.possibleTypes, (possibleType: string) => ({
        id: `POSSIBLE_TYPE::${type.name}::${possibleType}`,
        type: schema.types[possibleType],
      }));
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

export function getSchema(introspection: any, sortByAlphabet: boolean, skipRelay: boolean) {
  if (!introspection) return null;

  //TODO: Check introspection result for errors
  var schema = simplifySchema(introspection.data.__schema);

  if (sortByAlphabet) schema = sortIntrospection(schema);

  assignTypesAndIDs(schema);

  if (skipRelay) {
    markRelayTypes((<any>schema) as SimplifiedIntrospectionWithIds);
  }
  return schema;
}

export const getSchemaSelector = createSelector(
  (state: StateInterface) => state.schema,
  (state: StateInterface) => state.displayOptions.sortByAlphabet,
  (state: StateInterface) => state.displayOptions.skipRelay,
  getSchema,
);

export const getNaSchemaSelector = createSelector(
  (state: StateInterface) => {
    if (state.schemaModal.notApplied === null) return null;

    const presetValue = state.schemaModal.notApplied.presetValue;
    return presetValue;
  },
  (state: StateInterface) => _.get(state, 'schemaModal.notApplied.displayOptions.sortByAlphabet'),
  (state: StateInterface) => _.get(state, 'schemaModal.notApplied.displayOptions.skipRelay'),
  (introspection, sortByAlphabet, skipRelay) => {
    if (introspection == null) return { schema: null, error: null };

    try {
      if (typeof introspection === 'string') {
        introspection = JSON.parse(introspection);
      }

      //Used only to validate introspection so result is ignored
      buildClientSchema(introspection.data);

      const schema = getSchema(introspection, sortByAlphabet, skipRelay);
      return { schema, error: null };
    } catch (e) {
      console.error(e);
      return { error: e.toString(), schema: null };
    }
  },
);
