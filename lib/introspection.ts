import * as _ from 'lodash';

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
}

function walkTree(types, rootName, cb) {
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

export function getSchema(introspection) {
  var schema = simplifySchema(introspection.__schema);

  markRelayTypes(schema.types);

  walkTree(schema.types, schema.queryType, type => type.usedInQuery = true);
  if (schema.mutationType)
    walkTree(schema.types, schema.mutationType, type => type.mutationType = true);

  return schema;
}
