import * as _ from 'lodash';
import * as ejs from 'ejs';

const template = require('./template.ejs');
const schema = require('./swapi_introspection.json').data.__schema;

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
    usedInQuery: false,
    usedInMutation: false
  };

  switch (outType.kind) {
    case 'OBJECT':
      outType.interfaces = _.map(inType.interfaces, 'name');
      outType.fields = _(inType.fields).map(convertField).keyBy('name').value();
      break;
    case 'INTERFACE':
      outType.derivedTypes = _.map(inType.possibleType, 'name');
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

const types = _(schema.types).map(convertType).keyBy('name').value();

types['Node'].isRelayType = true;
types['PageInfo'].isRelayType = true;

_.each(types, type => {
  _.each(type.fields, field => {
    if (!/.Connection$/.test(field.type))
      return;
    //FIXME: additional checks
    let relayConnetion = types[field.type];
    relayConnetion.isRelayType = true;
    let relayEdge = types[relayConnetion.fields['edges'].type];
    relayEdge.isRelayType = true;

    field.relayNodeType = relayEdge.fields['node'].type
  });
});

function isScalar(typeObj) {
  return ['SCALAR', 'ENUM'].indexOf(typeObj.kind) !== -1;
}

function isInputObject(typeObj) {
  return typeObj.kind === 'INPUT_OBJECT';
}

function skipType(type) {
  return (
    isScalar(type) ||
    isInputObject(type) ||
    type.isSystemType ||
    type.isRelayType
  );
}

function skipField(field) {
  return types[field.type].isRelayType && !field.relayNodeType;
}

function getFieldType(field) {
  return field.relayNodeType || field.type;
}

export var dot = ejs.render(template, {_, types, isScalar, skipType, skipField, getFieldType});
