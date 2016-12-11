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
  type._id = `TYPE::${type.name}`;
  _.each(type.fields, field => {
    field._id = `FIELD_EDGE::${type.name}::${field.name}`;
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

export function cleanTypeName(typeName:string):string {
  return typeName.trim().replace(/^\[*/, '').replace(/[\]\!]*$/, '');
}
function walkTree(rootName, cb) {
  var typeNames = [rootName];

  for (var i = 0; i < typeNames.length; ++i) {
    var name = typeNames[i];
    if (typeNames.indexOf(name) < i)
      continue;

    var type = types[name];
    cb(type);
    //FIXME:
    //typeNames.push(...type.interfaces);
    //typeNames.push(...type.derivedTypes);
    typeNames.push(..._.map(type.fields, 'type'));
  }
}

walkTree(schema.queryType.name, type => type.usedInQuery = true);
if (schema.mutationType)
  walkTree(schema.mutationType.name, type => type.mutationType = true);

export function isScalar(typeObjOrName):boolean {
  let typeObj;
  if (_.isString(typeObjOrName)) {
    typeObj = types[typeObjOrName];
  } else {
    typeObj = typeObjOrName
  }
  return ['SCALAR', 'ENUM'].indexOf(typeObj.kind) !== -1;
}

function isInputObject(typeObj):boolean {
  return typeObj.kind === 'INPUT_OBJECT';
}

function skipType(type):boolean {
  return (
    isScalar(type) ||
    isInputObject(type) ||
    type.isSystemType ||
    type.isRelayType ||
    !type.usedInQuery
  );
}

function printFieldType(field) {
  return _.reduce(field.typeWrappers, (str, wrapper) => {
    switch (wrapper) {
      case 'NON_NULL':
        return `${str}!`;
      case 'LIST':
        return `[${str}]`;
    }
  }, getFieldType(field).name);
}

function skipField(field):boolean {
  return types[field.type].isRelayType && !field.relayNodeType;
}

function getFieldType(field) {
  return types[field.relayNodeType || field.type];
}

export function getInEdges(typeName:string):{id: string, nodeId: string}[] {
  let type = types[typeName];
  let res = [];
  _.each(types, type => {
    if (skipType(type)) return;
    _.each(type.fields, field => {
      if (skipField(field)) return;
      let fieldType = types[field.type];
      if (isScalar(fieldType)) return;
      if (getFieldType(field).name !== typeName) return;
      res.push({ id: field._id, nodeId: type._id });
    });
  });
  return res;
}

export function getOutEdges(typeName:string):{id: string, nodeId: string}[] {
  let type = types[typeName];
  return _(type.fields)
    .values()
    .filter(field => !skipField(field))
    .filter(field => !isScalar(getFieldType(field)))
    .map(field => ({ id: field._id, nodeId: getFieldType(field)._id }))
    .value();
}

export var dot = ejs.render(template, {_, types, isScalar, skipType, skipField, getFieldType, printFieldType});
