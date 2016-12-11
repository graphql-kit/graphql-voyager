import * as _ from 'lodash';
import * as ejs from 'ejs';
import {getSchema} from './introspection';

const template = require('./template.ejs');
const introspection = require('./swapi_introspection.json').data;

var types = getSchema(introspection).types;
_.each(types, type => {
  type._id = `TYPE::${type.name}`;
  _.each(type.fields, field => {
    field._id = `FIELD_EDGE::${type.name}::${field.name}`;
  });
});


export function cleanTypeName(typeName:string):string {
  return typeName.trim().replace(/^\[*/, '').replace(/[\]\!]*$/, '');
}

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
