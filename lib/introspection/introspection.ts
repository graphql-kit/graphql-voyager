import * as _ from 'lodash';
import { createSelector } from 'reselect';

import { store } from "../redux";

function unwrapType(type, wrappers) {
  while (type.kind === 'NON_NULL' || type.kind == 'LIST') {
    wrappers.push(type.kind);
    type = type.ofType;
  }

  return type.name;
}

function convertArg(inArg) {
  var outArg = <any> {
    name: inArg.name,
    description: inArg.description,
    typeWrappers: []
  };
  outArg.type = unwrapType(inArg.type, outArg.typeWrappers);

  return outArg;
}

function convertField(inField) {
  var outField = <any> {
    name: inField.name,
    description: inField.description,
    typeWrappers: [],
    isDepreated: inField.isDepreated
  };

  outField.type = unwrapType(inField.type, outField.typeWrappers);

  outField.args = _(inField.args).map(convertArg).keyBy('name').value();

  if (outField.isDepreated)
    outField.deprecationReason = inField.deprecationReason;

  return outField;
}

function convertType(inType) {
  var outType = <any> {
    kind: inType.kind,
    name: inType.name,
    description: inType.description,

    isSystemType: _.startsWith(inType.name, '__'),
  };

  switch (outType.kind) {
    case 'OBJECT':
      outType.interfaces = _.map(inType.interfaces, 'name');
      outType.fields = _(inType.fields).map(convertField).keyBy('name').value();
      break;
    case 'INTERFACE':
      outType.derivedTypes = _.map(inType.possibleTypes, 'name');
      outType.fields = _(inType.fields).map(convertField).keyBy('name').value();
      break;
    case 'UNION':
      outType.possibleTypes = _.map(inType.possibleTypes, 'name');
      break;
    case 'ENUM':
      outType.enumValues = inType.enumValues;
      break;
    case 'INPUT_OBJECT':
      //FIXME
      break;
  }

  return outType;
}

function simplifySchema(inSchema) {
  return <any> {
    types: _(inSchema.types).map(convertType).keyBy('name').value(),
    queryType: inSchema.queryType.name,
    mutationType: inSchema.mutationType ? inSchema.mutationType.name : null,
    //FIXME:
    //directives:
  };
}

function markRelayTypes(types) {
  types['Node'].isRelayType = true;
  types['PageInfo'].isRelayType = true;

  return _.mapValues(types, type => ({
    ...type,
    fields: _.mapValues(type.fields, field => {
      if (!/.Connection$/.test(field.type))
        return field;
      //FIXME: additional checks
      let relayConnetion = types[field.type];
      relayConnetion.isRelayType = true;
      let relayEdge = types[relayConnetion.fields['edges'].type];
      relayEdge.isRelayType = true;

      return {
        ...field,
        type: relayEdge.fields['node'].type,
        typeWrappers: ['LIST'],
        relayType: field.type,
      };
    }),
  }));
}

function sortIntrospection(value) {
  if (_.isArray(value)) {
    if (_.isString(value[0]))
      return value.sort();
    else
      return _.map(value, sortIntrospection);
  }
  else if (_.isPlainObject(value))
    return _(value)
      .toPairs().sortBy(0).fromPairs()
      .mapValues(sortIntrospection).value();
  else
    return value;
}

function assignIDs(types) {
  return _.mapValues(types, type => ({
    ...type,
    id: `TYPE::${type.name}`,
    fields: _.mapValues(type.fields, field => ({
      ...field,
      id: `FIELD::${type.name}::${field.name}`,
    })),
    possibleTypes: _.map(type.possibleTypes, possibleType => ({
      type: possibleType,
      id: `POSSIBLE_TYPE::${type.name}::${possibleType}`,
    })),
    derivedTypes: _.map(type.derivedTypes, derivedType => ({
      type: derivedType,
      id: `DERIVED_TYPE::${type.name}::${derivedType}`,
    })),
  }));
}

export const getSchemaSelector = createSelector(
  (state:any) => state.introspection.presets[state.introspection.activePreset],
  (state:any) => state.displayOptions,
  (introspection, displayOptions) => {
    if (!introspection || introspection === '')
      return null;

    var schema = simplifySchema(introspection.__schema);
    if (displayOptions.skipRelay)
      schema.types = markRelayTypes(schema.types);

    if (displayOptions.sortByAlphabet)
      schema =  sortIntrospection(schema);

    schema.types = assignIDs(schema.types);
    return schema;
  }
);
