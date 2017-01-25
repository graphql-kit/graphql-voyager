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
    isBasicType: (['SCALAR', 'ENUM', 'INPUT_OBJECT'].indexOf(inType.kind) !== -1),
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

function markRelayTypes(types, queryType) {
  types['Node'].isRelayType = true;
  types['PageInfo'].isRelayType = true;

  types = _.mapValues(types, type => ({
    ...type,
    fields: _.mapValues(type.fields, field => {
      if (!/.Connection$/.test(field.type.name))
        return field;
      //FIXME: additional checks
      let relayConnetion = field.type;
      relayConnetion.isRelayType = true;
      let relayEdge = relayConnetion.fields['edges'].type;
      relayEdge.isRelayType = true;

      return {
        ...field,
        type: relayEdge.fields['node'].type,
        typeWrappers: ['LIST'],
        relayType: field.type,
      };
    }),
  }));

  let query = types[queryType];
  if (_.get(query,'fields.node.type.isRelayType'))
    delete query.fields['node'];

  //GitHub use `nodes` instead of `node`.
  if (_.get(query,'fields.nodes.type.isRelayType'))
    delete query.fields['nodes'];

  if (_.get(query,'fields.relay.type.name') == queryType)
    delete query.fields['relay'];
  return types;
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

function assignTypesAndIDs(types) {
  _.each(types, type => {
    type.id = `TYPE::${type.name}`;

    _.each(type.fields, field => {
      field.id = `FIELD::${type.name}::${field.name}`;
      field.type = types[field.type];
    });

    if (!_.isEmpty(type.possibleTypes)) {
      type.possibleTypes = _.map(type.possibleTypes, possibleType => ({
        id: `POSSIBLE_TYPE::${type.name}::${possibleType}`,
        type: types[possibleType]
      }));
    }

    if (!_.isEmpty(type.derivedTypes)) {
      type.derivedTypes = _.map(type.derivedTypes, derivedType => ({
        id: `DERIVED_TYPE::${type.name}::${derivedType}`,
        type: types[derivedType]
      }));
    }
  });
}

export const getSchemaSelector = createSelector(
  (state:any) => state.introspection.presets[state.introspection.activePreset],
  (state:any) => state.displayOptions,
  (introspection, displayOptions) => {
    if (!introspection || introspection === '')
      return null;

    var schema = simplifySchema(introspection.__schema);

    if (displayOptions.sortByAlphabet)
      schema =  sortIntrospection(schema);

    assignTypesAndIDs(schema.types);

    if (displayOptions.skipRelay)
      schema.types = markRelayTypes(schema.types, schema.queryType);
    return schema;
  }
);
