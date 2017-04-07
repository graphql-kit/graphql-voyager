(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("classnames"), require("lodash"), require("react-redux"), require("reselect"), require("react-dom"), require("@f/animate"), require("clipboard"), require("graphql"), require("marked"), require("react-modal"), require("redux"), require("redux-thunk"), require("svg-pan-zoom"));
	else if(typeof define === 'function' && define.amd)
		define("GraphQLVoyager", ["react", "classnames", "lodash", "react-redux", "reselect", "react-dom", "@f/animate", "clipboard", "graphql", "marked", "react-modal", "redux", "redux-thunk", "svg-pan-zoom"], factory);
	else if(typeof exports === 'object')
		exports["GraphQLVoyager"] = factory(require("react"), require("classnames"), require("lodash"), require("react-redux"), require("reselect"), require("react-dom"), require("@f/animate"), require("clipboard"), require("graphql"), require("marked"), require("react-modal"), require("redux"), require("redux-thunk"), require("svg-pan-zoom"));
	else
		root["GraphQLVoyager"] = factory(root["React"], root["classnames"], root["_"], root["react-redux"], root["reselect"], root["ReactDOM"], root["@f/animate"], root["clipboard"], root["graphql"], root["marked"], root["react-modal"], root["redux"], root["redux-thunk"], root["svg-pan-zoom"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_69__, __WEBPACK_EXTERNAL_MODULE_70__, __WEBPACK_EXTERNAL_MODULE_474__, __WEBPACK_EXTERNAL_MODULE_475__, __WEBPACK_EXTERNAL_MODULE_476__, __WEBPACK_EXTERNAL_MODULE_477__, __WEBPACK_EXTERNAL_MODULE_478__, __WEBPACK_EXTERNAL_MODULE_479__, __WEBPACK_EXTERNAL_MODULE_480__, __WEBPACK_EXTERNAL_MODULE_481__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 482);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var _isPlaceholder = __webpack_require__(60);


/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a) ? f2
             : _curry1(function(_b) { return fn(a, _b); });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2
             : _isPlaceholder(a) ? _curry1(function(_a) { return fn(_a, b); })
             : _isPlaceholder(b) ? _curry1(function(_b) { return fn(a, _b); })
             : fn(a, b);
    }
  };
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var _isPlaceholder = __webpack_require__(60);


/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var _curry2 = __webpack_require__(0);
var _isPlaceholder = __webpack_require__(60);


/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return _isPlaceholder(a) ? f3
             : _curry2(function(_b, _c) { return fn(a, _b, _c); });
      case 2:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f3
             : _isPlaceholder(a) ? _curry2(function(_a, _c) { return fn(_a, b, _c); })
             : _isPlaceholder(b) ? _curry2(function(_b, _c) { return fn(a, _b, _c); })
             : _curry1(function(_c) { return fn(a, b, _c); });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3
             : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function(_a, _b) { return fn(_a, _b, c); })
             : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function(_a, _c) { return fn(_a, b, _c); })
             : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function(_b, _c) { return fn(a, _b, _c); })
             : _isPlaceholder(a) ? _curry1(function(_a) { return fn(_a, b, c); })
             : _isPlaceholder(b) ? _curry1(function(_b) { return fn(a, _b, c); })
             : _isPlaceholder(c) ? _curry1(function(_c) { return fn(a, b, _c); })
             : fn(a, b, c);
    }
  };
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var _isArray = __webpack_require__(25);
var _isTransformer = __webpack_require__(92);


/**
 * Returns a function that dispatches with different strategies based on the
 * object in list position (last argument). If it is an array, executes [fn].
 * Otherwise, if it has a function with one of the given method names, it will
 * execute that function (functor case). Otherwise, if it is a transformer,
 * uses transducer [xf] to return a new transformer (transducer case).
 * Otherwise, it will default to executing [fn].
 *
 * @private
 * @param {Array} methodNames properties to check for a custom implementation
 * @param {Function} xf transducer to initialize if object is transformer
 * @param {Function} fn default ramda implementation
 * @return {Function} A function that dispatches on object in list position
 */
module.exports = function _dispatchable(methodNames, xf, fn) {
  return function() {
    if (arguments.length === 0) {
      return fn();
    }
    var args = Array.prototype.slice.call(arguments, 0);
    var obj = args.pop();
    if (!_isArray(obj)) {
      var idx = 0;
      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === 'function') {
          return obj[methodNames[idx]].apply(obj, args);
        }
        idx += 1;
      }
      if (_isTransformer(obj)) {
        var transducer = xf.apply(null, args);
        return transducer(obj);
      }
    }
    return fn.apply(this, arguments);
  };
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphQLNonNull = exports.GraphQLList = exports.GraphQLInputObjectType = exports.GraphQLEnumType = exports.GraphQLUnionType = exports.GraphQLInterfaceType = exports.GraphQLObjectType = exports.GraphQLScalarType = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.isType = isType;
exports.assertType = assertType;
exports.isInputType = isInputType;
exports.assertInputType = assertInputType;
exports.isOutputType = isOutputType;
exports.assertOutputType = assertOutputType;
exports.isLeafType = isLeafType;
exports.assertLeafType = assertLeafType;
exports.isCompositeType = isCompositeType;
exports.assertCompositeType = assertCompositeType;
exports.isAbstractType = isAbstractType;
exports.assertAbstractType = assertAbstractType;
exports.getNullableType = getNullableType;
exports.isNamedType = isNamedType;
exports.assertNamedType = assertNamedType;
exports.getNamedType = getNamedType;

var _invariant = __webpack_require__(10);

var _invariant2 = _interopRequireDefault(_invariant);

var _isNullish = __webpack_require__(27);

var _isNullish2 = _interopRequireDefault(_isNullish);

var _kinds = __webpack_require__(17);

var _assertValidName = __webpack_require__(79);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

// Predicates & Assertions

/**
 * These are all of the possible kinds of types.
 */
function isType(type) {
  return type instanceof GraphQLScalarType || type instanceof GraphQLObjectType || type instanceof GraphQLInterfaceType || type instanceof GraphQLUnionType || type instanceof GraphQLEnumType || type instanceof GraphQLInputObjectType || type instanceof GraphQLList || type instanceof GraphQLNonNull;
}

function assertType(type) {
  (0, _invariant2.default)(isType(type), 'Expected ' + String(type) + ' to be a GraphQL type.');
  return type;
}

/**
 * These types may be used as input types for arguments and directives.
 */
function isInputType(type) {
  var namedType = getNamedType(type);
  return namedType instanceof GraphQLScalarType || namedType instanceof GraphQLEnumType || namedType instanceof GraphQLInputObjectType;
}

function assertInputType(type) {
  (0, _invariant2.default)(isInputType(type), 'Expected ' + String(type) + ' to be a GraphQL input type.');
  return type;
}

/**
 * These types may be used as output types as the result of fields.
 */
function isOutputType(type) {
  var namedType = getNamedType(type);
  return namedType instanceof GraphQLScalarType || namedType instanceof GraphQLObjectType || namedType instanceof GraphQLInterfaceType || namedType instanceof GraphQLUnionType || namedType instanceof GraphQLEnumType;
}

function assertOutputType(type) {
  (0, _invariant2.default)(isOutputType(type), 'Expected ' + String(type) + ' to be a GraphQL output type.');
  return type;
}

/**
 * These types may describe types which may be leaf values.
 */
function isLeafType(type) {
  var namedType = getNamedType(type);
  return namedType instanceof GraphQLScalarType || namedType instanceof GraphQLEnumType;
}

function assertLeafType(type) {
  (0, _invariant2.default)(isLeafType(type), 'Expected ' + String(type) + ' to be a GraphQL leaf type.');
  return type;
}

/**
 * These types may describe the parent context of a selection set.
 */
function isCompositeType(type) {
  return type instanceof GraphQLObjectType || type instanceof GraphQLInterfaceType || type instanceof GraphQLUnionType;
}

function assertCompositeType(type) {
  (0, _invariant2.default)(isCompositeType(type), 'Expected ' + String(type) + ' to be a GraphQL composite type.');
  return type;
}

/**
 * These types may describe the parent context of a selection set.
 */
function isAbstractType(type) {
  return type instanceof GraphQLInterfaceType || type instanceof GraphQLUnionType;
}

function assertAbstractType(type) {
  (0, _invariant2.default)(isAbstractType(type), 'Expected ' + String(type) + ' to be a GraphQL abstract type.');
  return type;
}

/**
 * These types can all accept null as a value.
 */
function getNullableType(type) {
  return type instanceof GraphQLNonNull ? type.ofType : type;
}

/**
 * These named types do not include modifiers like List or NonNull.
 */
function isNamedType(type) {
  return type instanceof GraphQLScalarType || type instanceof GraphQLObjectType || type instanceof GraphQLInterfaceType || type instanceof GraphQLUnionType || type instanceof GraphQLEnumType || type instanceof GraphQLInputObjectType;
}

function assertNamedType(type) {
  (0, _invariant2.default)(isNamedType(type), 'Expected ' + String(type) + ' to be a GraphQL named type.');
  return type;
}

function getNamedType(type) {
  var unmodifiedType = type;
  while (unmodifiedType instanceof GraphQLList || unmodifiedType instanceof GraphQLNonNull) {
    unmodifiedType = unmodifiedType.ofType;
  }
  return unmodifiedType;
}

/**
 * Used while defining GraphQL types to allow for circular references in
 * otherwise immutable type definitions.
 */


function resolveThunk(thunk) {
  return typeof thunk === 'function' ? thunk() : thunk;
}

/**
 * Scalar Type Definition
 *
 * The leaf values of any request and input values to arguments are
 * Scalars (or Enums) and are defined with a name and a series of functions
 * used to parse input from ast or variables and to ensure validity.
 *
 * Example:
 *
 *     const OddType = new GraphQLScalarType({
 *       name: 'Odd',
 *       serialize(value) {
 *         return value % 2 === 1 ? value : null;
 *       }
 *     });
 *
 */

var GraphQLScalarType = exports.GraphQLScalarType = function () {
  function GraphQLScalarType(config) {
    _classCallCheck(this, GraphQLScalarType);

    (0, _assertValidName.assertValidName)(config.name);
    this.name = config.name;
    this.description = config.description;
    (0, _invariant2.default)(typeof config.serialize === 'function', this.name + ' must provide "serialize" function. If this custom Scalar ' + 'is also used as an input type, ensure "parseValue" and "parseLiteral" ' + 'functions are also provided.');
    if (config.parseValue || config.parseLiteral) {
      (0, _invariant2.default)(typeof config.parseValue === 'function' && typeof config.parseLiteral === 'function', this.name + ' must provide both "parseValue" and "parseLiteral" ' + 'functions.');
    }
    this._scalarConfig = config;
  }

  // Serializes an internal value to include in a response.


  GraphQLScalarType.prototype.serialize = function serialize(value) {
    var serializer = this._scalarConfig.serialize;
    return serializer(value);
  };

  // Parses an externally provided value to use as an input.


  GraphQLScalarType.prototype.parseValue = function parseValue(value) {
    var parser = this._scalarConfig.parseValue;
    return parser ? parser(value) : null;
  };

  // Parses an externally provided literal value to use as an input.


  GraphQLScalarType.prototype.parseLiteral = function parseLiteral(valueNode) {
    var parser = this._scalarConfig.parseLiteral;
    return parser ? parser(valueNode) : null;
  };

  GraphQLScalarType.prototype.toString = function toString() {
    return this.name;
  };

  return GraphQLScalarType;
}();

// Also provide toJSON and inspect aliases for toString.


GraphQLScalarType.prototype.toJSON = GraphQLScalarType.prototype.inspect = GraphQLScalarType.prototype.toString;

/**
 * Object Type Definition
 *
 * Almost all of the GraphQL types you define will be object types. Object types
 * have a name, but most importantly describe their fields.
 *
 * Example:
 *
 *     const AddressType = new GraphQLObjectType({
 *       name: 'Address',
 *       fields: {
 *         street: { type: GraphQLString },
 *         number: { type: GraphQLInt },
 *         formatted: {
 *           type: GraphQLString,
 *           resolve(obj) {
 *             return obj.number + ' ' + obj.street
 *           }
 *         }
 *       }
 *     });
 *
 * When two types need to refer to each other, or a type needs to refer to
 * itself in a field, you can use a function expression (aka a closure or a
 * thunk) to supply the fields lazily.
 *
 * Example:
 *
 *     const PersonType = new GraphQLObjectType({
 *       name: 'Person',
 *       fields: () => ({
 *         name: { type: GraphQLString },
 *         bestFriend: { type: PersonType },
 *       })
 *     });
 *
 */
var GraphQLObjectType = exports.GraphQLObjectType = function () {
  function GraphQLObjectType(config) {
    _classCallCheck(this, GraphQLObjectType);

    (0, _assertValidName.assertValidName)(config.name, config.isIntrospection);
    this.name = config.name;
    this.description = config.description;
    if (config.isTypeOf) {
      (0, _invariant2.default)(typeof config.isTypeOf === 'function', this.name + ' must provide "isTypeOf" as a function.');
    }
    this.isTypeOf = config.isTypeOf;
    this._typeConfig = config;
  }

  GraphQLObjectType.prototype.getFields = function getFields() {
    return this._fields || (this._fields = defineFieldMap(this, this._typeConfig.fields));
  };

  GraphQLObjectType.prototype.getInterfaces = function getInterfaces() {
    return this._interfaces || (this._interfaces = defineInterfaces(this, this._typeConfig.interfaces));
  };

  GraphQLObjectType.prototype.toString = function toString() {
    return this.name;
  };

  return GraphQLObjectType;
}();

// Also provide toJSON and inspect aliases for toString.


GraphQLObjectType.prototype.toJSON = GraphQLObjectType.prototype.inspect = GraphQLObjectType.prototype.toString;

function defineInterfaces(type, interfacesThunk) {
  var interfaces = resolveThunk(interfacesThunk);
  if (!interfaces) {
    return [];
  }
  (0, _invariant2.default)(Array.isArray(interfaces), type.name + ' interfaces must be an Array or a function which returns ' + 'an Array.');
  interfaces.forEach(function (iface) {
    (0, _invariant2.default)(iface instanceof GraphQLInterfaceType, type.name + ' may only implement Interface types, it cannot ' + ('implement: ' + String(iface) + '.'));
    if (typeof iface.resolveType !== 'function') {
      (0, _invariant2.default)(typeof type.isTypeOf === 'function', 'Interface Type ' + iface.name + ' does not provide a "resolveType" ' + ('function and implementing Type ' + type.name + ' does not provide a ') + '"isTypeOf" function. There is no way to resolve this implementing ' + 'type during execution.');
    }
  });
  return interfaces;
}

function defineFieldMap(type, fieldsThunk) {
  var fieldMap = resolveThunk(fieldsThunk);
  (0, _invariant2.default)(isPlainObj(fieldMap), type.name + ' fields must be an object with field names as keys or a ' + 'function which returns such an object.');

  var fieldNames = Object.keys(fieldMap);
  (0, _invariant2.default)(fieldNames.length > 0, type.name + ' fields must be an object with field names as keys or a ' + 'function which returns such an object.');

  var resultFieldMap = {};
  fieldNames.forEach(function (fieldName) {
    (0, _assertValidName.assertValidName)(fieldName);
    var fieldConfig = fieldMap[fieldName];
    (0, _invariant2.default)(!fieldConfig.hasOwnProperty('isDeprecated'), type.name + '.' + fieldName + ' should provide "deprecationReason" instead ' + 'of "isDeprecated".');
    var field = _extends({}, fieldConfig, {
      isDeprecated: Boolean(fieldConfig.deprecationReason),
      name: fieldName
    });
    (0, _invariant2.default)(isOutputType(field.type), type.name + '.' + fieldName + ' field type must be Output Type but ' + ('got: ' + String(field.type) + '.'));
    (0, _invariant2.default)(isValidResolver(field.resolve), type.name + '.' + fieldName + ' field resolver must be a function if ' + ('provided, but got: ' + String(field.resolve) + '.'));
    var argsConfig = fieldConfig.args;
    if (!argsConfig) {
      field.args = [];
    } else {
      (0, _invariant2.default)(isPlainObj(argsConfig), type.name + '.' + fieldName + ' args must be an object with argument ' + 'names as keys.');
      field.args = Object.keys(argsConfig).map(function (argName) {
        (0, _assertValidName.assertValidName)(argName);
        var arg = argsConfig[argName];
        (0, _invariant2.default)(isInputType(arg.type), type.name + '.' + fieldName + '(' + argName + ':) argument type must be ' + ('Input Type but got: ' + String(arg.type) + '.'));
        return {
          name: argName,
          description: arg.description === undefined ? null : arg.description,
          type: arg.type,
          defaultValue: arg.defaultValue
        };
      });
    }
    resultFieldMap[fieldName] = field;
  });
  return resultFieldMap;
}

function isPlainObj(obj) {
  return obj && typeof obj === 'object' && !Array.isArray(obj);
}

// If a resolver is defined, it must be a function.
function isValidResolver(resolver) {
  return resolver == null || typeof resolver === 'function';
}

/**
 * Interface Type Definition
 *
 * When a field can return one of a heterogeneous set of types, a Interface type
 * is used to describe what types are possible, what fields are in common across
 * all types, as well as a function to determine which type is actually used
 * when the field is resolved.
 *
 * Example:
 *
 *     const EntityType = new GraphQLInterfaceType({
 *       name: 'Entity',
 *       fields: {
 *         name: { type: GraphQLString }
 *       }
 *     });
 *
 */
var GraphQLInterfaceType = exports.GraphQLInterfaceType = function () {
  function GraphQLInterfaceType(config) {
    _classCallCheck(this, GraphQLInterfaceType);

    (0, _assertValidName.assertValidName)(config.name);
    this.name = config.name;
    this.description = config.description;
    if (config.resolveType) {
      (0, _invariant2.default)(typeof config.resolveType === 'function', this.name + ' must provide "resolveType" as a function.');
    }
    this.resolveType = config.resolveType;
    this._typeConfig = config;
  }

  GraphQLInterfaceType.prototype.getFields = function getFields() {
    return this._fields || (this._fields = defineFieldMap(this, this._typeConfig.fields));
  };

  GraphQLInterfaceType.prototype.toString = function toString() {
    return this.name;
  };

  return GraphQLInterfaceType;
}();

// Also provide toJSON and inspect aliases for toString.


GraphQLInterfaceType.prototype.toJSON = GraphQLInterfaceType.prototype.inspect = GraphQLInterfaceType.prototype.toString;

/**
 * Union Type Definition
 *
 * When a field can return one of a heterogeneous set of types, a Union type
 * is used to describe what types are possible as well as providing a function
 * to determine which type is actually used when the field is resolved.
 *
 * Example:
 *
 *     const PetType = new GraphQLUnionType({
 *       name: 'Pet',
 *       types: [ DogType, CatType ],
 *       resolveType(value) {
 *         if (value instanceof Dog) {
 *           return DogType;
 *         }
 *         if (value instanceof Cat) {
 *           return CatType;
 *         }
 *       }
 *     });
 *
 */
var GraphQLUnionType = exports.GraphQLUnionType = function () {
  function GraphQLUnionType(config) {
    _classCallCheck(this, GraphQLUnionType);

    (0, _assertValidName.assertValidName)(config.name);
    this.name = config.name;
    this.description = config.description;
    if (config.resolveType) {
      (0, _invariant2.default)(typeof config.resolveType === 'function', this.name + ' must provide "resolveType" as a function.');
    }
    this.resolveType = config.resolveType;
    this._typeConfig = config;
  }

  GraphQLUnionType.prototype.getTypes = function getTypes() {
    return this._types || (this._types = defineTypes(this, this._typeConfig.types));
  };

  GraphQLUnionType.prototype.toString = function toString() {
    return this.name;
  };

  return GraphQLUnionType;
}();

// Also provide toJSON and inspect aliases for toString.


GraphQLUnionType.prototype.toJSON = GraphQLUnionType.prototype.inspect = GraphQLUnionType.prototype.toString;

function defineTypes(unionType, typesThunk) {
  var types = resolveThunk(typesThunk);

  (0, _invariant2.default)(Array.isArray(types) && types.length > 0, 'Must provide Array of types or a function which returns ' + ('such an array for Union ' + unionType.name + '.'));
  types.forEach(function (objType) {
    (0, _invariant2.default)(objType instanceof GraphQLObjectType, unionType.name + ' may only contain Object types, it cannot contain: ' + (String(objType) + '.'));
    if (typeof unionType.resolveType !== 'function') {
      (0, _invariant2.default)(typeof objType.isTypeOf === 'function', 'Union type "' + unionType.name + '" does not provide a "resolveType" ' + ('function and possible type "' + objType.name + '" does not provide an ') + '"isTypeOf" function. There is no way to resolve this possible type ' + 'during execution.');
    }
  });

  return types;
}

/**
 * Enum Type Definition
 *
 * Some leaf values of requests and input values are Enums. GraphQL serializes
 * Enum values as strings, however internally Enums can be represented by any
 * kind of type, often integers.
 *
 * Example:
 *
 *     const RGBType = new GraphQLEnumType({
 *       name: 'RGB',
 *       values: {
 *         RED: { value: 0 },
 *         GREEN: { value: 1 },
 *         BLUE: { value: 2 }
 *       }
 *     });
 *
 * Note: If a value is not provided in a definition, the name of the enum value
 * will be used as its internal value.
 */
var GraphQLEnumType /* <T> */ = exports.GraphQLEnumType = function () {
  function GraphQLEnumType(config /* <T> */) {
    _classCallCheck(this, GraphQLEnumType);

    this.name = config.name;
    (0, _assertValidName.assertValidName)(config.name, config.isIntrospection);
    this.description = config.description;
    this._values = defineEnumValues(this, config.values);
    this._enumConfig = config;
  }

  GraphQLEnumType.prototype.getValues = function getValues() {
    return this._values;
  };

  GraphQLEnumType.prototype.getValue = function getValue(name) {
    return this._getNameLookup()[name];
  };

  GraphQLEnumType.prototype.serialize = function serialize(value /* T */) {
    var enumValue = this._getValueLookup().get(value);
    return enumValue ? enumValue.name : null;
  };

  GraphQLEnumType.prototype.parseValue = function parseValue(value) /* T */{
    if (typeof value === 'string') {
      var enumValue = this._getNameLookup()[value];
      if (enumValue) {
        return enumValue.value;
      }
    }
  };

  GraphQLEnumType.prototype.parseLiteral = function parseLiteral(valueNode) /* T */{
    if (valueNode.kind === _kinds.ENUM) {
      var enumValue = this._getNameLookup()[valueNode.value];
      if (enumValue) {
        return enumValue.value;
      }
    }
  };

  GraphQLEnumType.prototype._getValueLookup = function _getValueLookup() {
    var _this = this;

    if (!this._valueLookup) {
      (function () {
        var lookup = new Map();
        _this.getValues().forEach(function (value) {
          lookup.set(value.value, value);
        });
        _this._valueLookup = lookup;
      })();
    }
    return this._valueLookup;
  };

  GraphQLEnumType.prototype._getNameLookup = function _getNameLookup() {
    var _this2 = this;

    if (!this._nameLookup) {
      (function () {
        var lookup = Object.create(null);
        _this2.getValues().forEach(function (value) {
          lookup[value.name] = value;
        });
        _this2._nameLookup = lookup;
      })();
    }
    return this._nameLookup;
  };

  GraphQLEnumType.prototype.toString = function toString() {
    return this.name;
  };

  return GraphQLEnumType;
}();

// Also provide toJSON and inspect aliases for toString.


GraphQLEnumType.prototype.toJSON = GraphQLEnumType.prototype.inspect = GraphQLEnumType.prototype.toString;

function defineEnumValues(type, valueMap /* <T> */
) {
  (0, _invariant2.default)(isPlainObj(valueMap), type.name + ' values must be an object with value names as keys.');
  var valueNames = Object.keys(valueMap);
  (0, _invariant2.default)(valueNames.length > 0, type.name + ' values must be an object with value names as keys.');
  return valueNames.map(function (valueName) {
    (0, _assertValidName.assertValidName)(valueName);
    var value = valueMap[valueName];
    (0, _invariant2.default)(isPlainObj(value), type.name + '.' + valueName + ' must refer to an object with a "value" key ' + ('representing an internal value but got: ' + String(value) + '.'));
    (0, _invariant2.default)(!value.hasOwnProperty('isDeprecated'), type.name + '.' + valueName + ' should provide "deprecationReason" instead ' + 'of "isDeprecated".');
    return {
      name: valueName,
      description: value.description,
      isDeprecated: Boolean(value.deprecationReason),
      deprecationReason: value.deprecationReason,
      value: (0, _isNullish2.default)(value.value) ? valueName : value.value
    };
  });
} /* <T> */


/**
 * Input Object Type Definition
 *
 * An input object defines a structured collection of fields which may be
 * supplied to a field argument.
 *
 * Using `NonNull` will ensure that a value must be provided by the query
 *
 * Example:
 *
 *     const GeoPoint = new GraphQLInputObjectType({
 *       name: 'GeoPoint',
 *       fields: {
 *         lat: { type: new GraphQLNonNull(GraphQLFloat) },
 *         lon: { type: new GraphQLNonNull(GraphQLFloat) },
 *         alt: { type: GraphQLFloat, defaultValue: 0 },
 *       }
 *     });
 *
 */
var GraphQLInputObjectType = exports.GraphQLInputObjectType = function () {
  function GraphQLInputObjectType(config) {
    _classCallCheck(this, GraphQLInputObjectType);

    (0, _assertValidName.assertValidName)(config.name);
    this.name = config.name;
    this.description = config.description;
    this._typeConfig = config;
  }

  GraphQLInputObjectType.prototype.getFields = function getFields() {
    return this._fields || (this._fields = this._defineFieldMap());
  };

  GraphQLInputObjectType.prototype._defineFieldMap = function _defineFieldMap() {
    var _this3 = this;

    var fieldMap = resolveThunk(this._typeConfig.fields);
    (0, _invariant2.default)(isPlainObj(fieldMap), this.name + ' fields must be an object with field names as keys or a ' + 'function which returns such an object.');
    var fieldNames = Object.keys(fieldMap);
    (0, _invariant2.default)(fieldNames.length > 0, this.name + ' fields must be an object with field names as keys or a ' + 'function which returns such an object.');
    var resultFieldMap = {};
    fieldNames.forEach(function (fieldName) {
      (0, _assertValidName.assertValidName)(fieldName);
      var field = _extends({}, fieldMap[fieldName], {
        name: fieldName
      });
      (0, _invariant2.default)(isInputType(field.type), _this3.name + '.' + fieldName + ' field type must be Input Type but ' + ('got: ' + String(field.type) + '.'));
      (0, _invariant2.default)(field.resolve == null, _this3.name + '.' + fieldName + ' field type has a resolve property, but ' + 'Input Types cannot define resolvers.');
      resultFieldMap[fieldName] = field;
    });
    return resultFieldMap;
  };

  GraphQLInputObjectType.prototype.toString = function toString() {
    return this.name;
  };

  return GraphQLInputObjectType;
}();

// Also provide toJSON and inspect aliases for toString.


GraphQLInputObjectType.prototype.toJSON = GraphQLInputObjectType.prototype.inspect = GraphQLInputObjectType.prototype.toString;

/**
 * List Modifier
 *
 * A list is a kind of type marker, a wrapping type which points to another
 * type. Lists are often created within the context of defining the fields of
 * an object type.
 *
 * Example:
 *
 *     const PersonType = new GraphQLObjectType({
 *       name: 'Person',
 *       fields: () => ({
 *         parents: { type: new GraphQLList(Person) },
 *         children: { type: new GraphQLList(Person) },
 *       })
 *     })
 *
 */
var GraphQLList = exports.GraphQLList = function () {
  function GraphQLList(type) {
    _classCallCheck(this, GraphQLList);

    (0, _invariant2.default)(isType(type), 'Can only create List of a GraphQLType but got: ' + String(type) + '.');
    this.ofType = type;
  }

  GraphQLList.prototype.toString = function toString() {
    return '[' + String(this.ofType) + ']';
  };

  return GraphQLList;
}();

// Also provide toJSON and inspect aliases for toString.


GraphQLList.prototype.toJSON = GraphQLList.prototype.inspect = GraphQLList.prototype.toString;

/**
 * Non-Null Modifier
 *
 * A non-null is a kind of type marker, a wrapping type which points to another
 * type. Non-null types enforce that their values are never null and can ensure
 * an error is raised if this ever occurs during a request. It is useful for
 * fields which you can make a strong guarantee on non-nullability, for example
 * usually the id field of a database row will never be null.
 *
 * Example:
 *
 *     const RowType = new GraphQLObjectType({
 *       name: 'Row',
 *       fields: () => ({
 *         id: { type: new GraphQLNonNull(GraphQLString) },
 *       })
 *     })
 *
 * Note: the enforcement of non-nullability occurs within the executor.
 */

var GraphQLNonNull = exports.GraphQLNonNull = function () {
  function GraphQLNonNull(type) {
    _classCallCheck(this, GraphQLNonNull);

    (0, _invariant2.default)(isType(type) && !(type instanceof GraphQLNonNull), 'Can only create NonNull of a Nullable GraphQLType but got: ' + (String(type) + '.'));
    this.ofType = type;
  }

  GraphQLNonNull.prototype.toString = function toString() {
    return this.ofType.toString() + '!';
  };

  return GraphQLNonNull;
}();

// Also provide toJSON and inspect aliases for toString.


GraphQLNonNull.prototype.toJSON = GraphQLNonNull.prototype.inspect = GraphQLNonNull.prototype.toString;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {
  init: function() {
    return this.xf['@@transducer/init']();
  },
  result: function(result) {
    return this.xf['@@transducer/result'](result);
  }
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(23);
var _curry1 = __webpack_require__(1);
var _curry2 = __webpack_require__(0);
var _curryN = __webpack_require__(58);


/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value `R.__` may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is `R.__`, the
 * following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      var sumArgs = (...args) => R.sum(args);
 *
 *      var curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
module.exports = _curry2(function curryN(length, fn) {
  if (length === 1) {
    return _curry1(fn);
  }
  return _arity(length, _curryN(length, [], fn));
});


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal__ = __webpack_require__(183);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__modal__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__modal__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__modal__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__modal__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__modal__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_0__modal__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_0__modal__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_0__modal__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_0__modal__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_0__modal__["j"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__introspection__ = __webpack_require__(182);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__introspection__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_1__introspection__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__svg__ = __webpack_require__(184);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_2__svg__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_2__svg__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__display__ = __webpack_require__(181);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__display__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__display__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_3__display__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_3__display__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_3__display__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_3__display__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_3__display__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "G", function() { return __WEBPACK_IMPORTED_MODULE_3__display__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "H", function() { return __WEBPACK_IMPORTED_MODULE_3__display__["i"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viewport__ = __webpack_require__(185);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_4__viewport__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_4__viewport__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_4__viewport__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_4__viewport__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_4__viewport__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_4__viewport__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_4__viewport__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_4__viewport__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_4__viewport__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_4__viewport__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __WEBPACK_IMPORTED_MODULE_4__viewport__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "I", function() { return __WEBPACK_IMPORTED_MODULE_4__viewport__["l"]; });







/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = invariant;

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

function invariant(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ThemeProvider = __webpack_require__(454);

Object.defineProperty(exports, 'ThemeProvider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ThemeProvider).default;
  }
});

var _themr = __webpack_require__(455);

Object.defineProperty(exports, 'themr', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_themr).default;
  }
});
Object.defineProperty(exports, 'themeable', {
  enumerable: true,
  get: function get() {
    return _themr.themeable;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var APP_BAR = exports.APP_BAR = 'RTAppBar';
var AUTOCOMPLETE = exports.AUTOCOMPLETE = 'RTAutocomplete';
var AVATAR = exports.AVATAR = 'RTAvatar';
var BUTTON = exports.BUTTON = 'RTButton';
var CARD = exports.CARD = 'RTCard';
var CHIP = exports.CHIP = 'RTChip';
var CHECKBOX = exports.CHECKBOX = 'RTCheckbox';
var DATE_PICKER = exports.DATE_PICKER = 'RTDatePicker';
var DIALOG = exports.DIALOG = 'RTDialog';
var DRAWER = exports.DRAWER = 'RTDrawer';
var DROPDOWN = exports.DROPDOWN = 'RTDropdown';
var INPUT = exports.INPUT = 'RTInput';
var LAYOUT = exports.LAYOUT = 'RTLayout';
var LINK = exports.LINK = 'RTLink';
var LIST = exports.LIST = 'RTList';
var MENU = exports.MENU = 'RTMenu';
var NAVIGATION = exports.NAVIGATION = 'RTNavigation';
var OVERLAY = exports.OVERLAY = 'RTOverlay';
var PROGRESS_BAR = exports.PROGRESS_BAR = 'RTProgressBar';
var RADIO = exports.RADIO = 'RTRadio';
var RIPPLE = exports.RIPPLE = 'RTRipple';
var SLIDER = exports.SLIDER = 'RTSlider';
var SNACKBAR = exports.SNACKBAR = 'RTSnackbar';
var SWITCH = exports.SWITCH = 'RTSwitch';
var TABLE = exports.TABLE = 'RTTable';
var TABS = exports.TABS = 'RTTabs';
var TOOLTIP = exports.TOOLTIP = 'RTTooltip';
var TIME_PICKER = exports.TIME_PICKER = 'RTTimePicker';

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(4);
var _map = __webpack_require__(62);
var _reduce = __webpack_require__(18);
var _xmap = __webpack_require__(347);
var curryN = __webpack_require__(8);
var keys = __webpack_require__(20);


/**
 * Takes a function and
 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
 * applies the function to each of the functor's values, and returns
 * a functor of the same shape.
 *
 * Ramda provides suitable `map` implementations for `Array` and `Object`,
 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
 *
 * Dispatches to the `map` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * Also treats functions as functors and will compose them together.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @see R.transduce, R.addIndex
 * @example
 *
 *      var double = x => x * 2;
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 *
 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * @symb R.map(f, [a, b]) = [f(a), f(b)]
 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
 * @symb R.map(f, functor_o) = functor_o.map(f)
 */
module.exports = _curry2(_dispatchable(['map'], _xmap, function map(fn, functor) {
  switch (Object.prototype.toString.call(functor)) {
    case '[object Function]':
      return curryN(functor.length, function() {
        return fn.call(this, functor.apply(this, arguments));
      });
    case '[object Object]':
      return _reduce(function(acc, key) {
        acc[key] = fn(functor[key]);
        return acc;
      }, {}, keys(functor));
    default:
      return _map(fn, functor);
  }
}));


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

// Name

var NAME = exports.NAME = 'Name';

// Document

var DOCUMENT = exports.DOCUMENT = 'Document';
var OPERATION_DEFINITION = exports.OPERATION_DEFINITION = 'OperationDefinition';
var VARIABLE_DEFINITION = exports.VARIABLE_DEFINITION = 'VariableDefinition';
var VARIABLE = exports.VARIABLE = 'Variable';
var SELECTION_SET = exports.SELECTION_SET = 'SelectionSet';
var FIELD = exports.FIELD = 'Field';
var ARGUMENT = exports.ARGUMENT = 'Argument';

// Fragments

var FRAGMENT_SPREAD = exports.FRAGMENT_SPREAD = 'FragmentSpread';
var INLINE_FRAGMENT = exports.INLINE_FRAGMENT = 'InlineFragment';
var FRAGMENT_DEFINITION = exports.FRAGMENT_DEFINITION = 'FragmentDefinition';

// Values

var INT = exports.INT = 'IntValue';
var FLOAT = exports.FLOAT = 'FloatValue';
var STRING = exports.STRING = 'StringValue';
var BOOLEAN = exports.BOOLEAN = 'BooleanValue';
var NULL = exports.NULL = 'NullValue';
var ENUM = exports.ENUM = 'EnumValue';
var LIST = exports.LIST = 'ListValue';
var OBJECT = exports.OBJECT = 'ObjectValue';
var OBJECT_FIELD = exports.OBJECT_FIELD = 'ObjectField';

// Directives

var DIRECTIVE = exports.DIRECTIVE = 'Directive';

// Types

var NAMED_TYPE = exports.NAMED_TYPE = 'NamedType';
var LIST_TYPE = exports.LIST_TYPE = 'ListType';
var NON_NULL_TYPE = exports.NON_NULL_TYPE = 'NonNullType';

// Type System Definitions

var SCHEMA_DEFINITION = exports.SCHEMA_DEFINITION = 'SchemaDefinition';
var OPERATION_TYPE_DEFINITION = exports.OPERATION_TYPE_DEFINITION = 'OperationTypeDefinition';

// Type Definitions

var SCALAR_TYPE_DEFINITION = exports.SCALAR_TYPE_DEFINITION = 'ScalarTypeDefinition';
var OBJECT_TYPE_DEFINITION = exports.OBJECT_TYPE_DEFINITION = 'ObjectTypeDefinition';
var FIELD_DEFINITION = exports.FIELD_DEFINITION = 'FieldDefinition';
var INPUT_VALUE_DEFINITION = exports.INPUT_VALUE_DEFINITION = 'InputValueDefinition';
var INTERFACE_TYPE_DEFINITION = exports.INTERFACE_TYPE_DEFINITION = 'InterfaceTypeDefinition';
var UNION_TYPE_DEFINITION = exports.UNION_TYPE_DEFINITION = 'UnionTypeDefinition';
var ENUM_TYPE_DEFINITION = exports.ENUM_TYPE_DEFINITION = 'EnumTypeDefinition';
var ENUM_VALUE_DEFINITION = exports.ENUM_VALUE_DEFINITION = 'EnumValueDefinition';
var INPUT_OBJECT_TYPE_DEFINITION = exports.INPUT_OBJECT_TYPE_DEFINITION = 'InputObjectTypeDefinition';

// Type Extensions

var TYPE_EXTENSION_DEFINITION = exports.TYPE_EXTENSION_DEFINITION = 'TypeExtensionDefinition';

// Directive Definitions

var DIRECTIVE_DEFINITION = exports.DIRECTIVE_DEFINITION = 'DirectiveDefinition';

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var _xwrap = __webpack_require__(145);
var bind = __webpack_require__(121);
var isArrayLike = __webpack_require__(46);


module.exports = (function() {
  function _arrayReduce(xf, acc, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      acc = xf['@@transducer/step'](acc, list[idx]);
      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
      }
      idx += 1;
    }
    return xf['@@transducer/result'](acc);
  }

  function _iterableReduce(xf, acc, iter) {
    var step = iter.next();
    while (!step.done) {
      acc = xf['@@transducer/step'](acc, step.value);
      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
      }
      step = iter.next();
    }
    return xf['@@transducer/result'](acc);
  }

  function _methodReduce(xf, acc, obj) {
    return xf['@@transducer/result'](obj.reduce(bind(xf['@@transducer/step'], xf), acc));
  }

  var symIterator = (typeof Symbol !== 'undefined') ? Symbol.iterator : '@@iterator';
  return function _reduce(fn, acc, list) {
    if (typeof fn === 'function') {
      fn = _xwrap(fn);
    }
    if (isArrayLike(list)) {
      return _arrayReduce(fn, acc, list);
    }
    if (typeof list.reduce === 'function') {
      return _methodReduce(fn, acc, list);
    }
    if (list[symIterator] != null) {
      return _iterableReduce(fn, acc, list[symIterator]());
    }
    if (typeof list.next === 'function') {
      return _iterableReduce(fn, acc, list);
    }
    throw new TypeError('reduce: list must be array or iterable');
  };
}());


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/**
 * Private `concat` function to merge two array-like objects.
 *
 * @private
 * @param {Array|Arguments} [set1=[]] An array-like object.
 * @param {Array|Arguments} [set2=[]] An array-like object.
 * @return {Array} A new, merged array.
 * @example
 *
 *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 */
module.exports = function _concat(set1, set2) {
  set1 = set1 || [];
  set2 = set2 || [];
  var idx;
  var len1 = set1.length;
  var len2 = set2.length;
  var result = [];

  idx = 0;
  while (idx < len1) {
    result[result.length] = set1[idx];
    idx += 1;
  }
  idx = 0;
  while (idx < len2) {
    result[result.length] = set2[idx];
    idx += 1;
  }
  return result;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var _has = __webpack_require__(11);
var _isArguments = __webpack_require__(138);


/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */
module.exports = (function() {
  // cover IE < 9 keys issues
  var hasEnumBug = !({toString: null}).propertyIsEnumerable('toString');
  var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString',
                            'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
  // Safari bug
  var hasArgsEnumBug = (function() {
    'use strict';
    return arguments.propertyIsEnumerable('length');
  }());

  var contains = function contains(list, item) {
    var idx = 0;
    while (idx < list.length) {
      if (list[idx] === item) {
        return true;
      }
      idx += 1;
    }
    return false;
  };

  return typeof Object.keys === 'function' && !hasArgsEnumBug ?
    _curry1(function keys(obj) {
      return Object(obj) !== obj ? [] : Object.keys(obj);
    }) :
    _curry1(function keys(obj) {
      if (Object(obj) !== obj) {
        return [];
      }
      var prop, nIdx;
      var ks = [];
      var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
      for (prop in obj) {
        if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
          ks[ks.length] = prop;
        }
      }
      if (hasEnumBug) {
        nIdx = nonEnumerableProps.length - 1;
        while (nIdx >= 0) {
          prop = nonEnumerableProps[nIdx];
          if (_has(prop, obj) && !contains(ks, prop)) {
            ks[ks.length] = prop;
          }
          nIdx -= 1;
        }
      }
      return ks;
    });
}());


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);
var _reduce = __webpack_require__(18);


/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * `R.reduced` to shortcut the iteration.
 *
 * The arguments' order of `reduceRight`'s iterator function is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Dispatches to the `reduce` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *                -               -10
 *               / \              / \
 *              -   4           -6   4
 *             / \              / \
 *            -   3   ==>     -3   3
 *           / \              / \
 *          -   2           -1   2
 *         / \              / \
 *        0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */
module.exports = _curry3(_reduce);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _equals = __webpack_require__(322);


/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      var a = {}; a.v = a;
 *      var b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */
module.exports = _curry2(function equals(a, b) {
  return _equals(a, b, [], []);
});


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0: return function() { return fn.apply(this, arguments); };
    case 1: return function(a0) { return fn.apply(this, arguments); };
    case 2: return function(a0, a1) { return fn.apply(this, arguments); };
    case 3: return function(a0, a1, a2) { return fn.apply(this, arguments); };
    case 4: return function(a0, a1, a2, a3) { return fn.apply(this, arguments); };
    case 5: return function(a0, a1, a2, a3, a4) { return fn.apply(this, arguments); };
    case 6: return function(a0, a1, a2, a3, a4, a5) { return fn.apply(this, arguments); };
    case 7: return function(a0, a1, a2, a3, a4, a5, a6) { return fn.apply(this, arguments); };
    case 8: return function(a0, a1, a2, a3, a4, a5, a6, a7) { return fn.apply(this, arguments); };
    case 9: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) { return fn.apply(this, arguments); };
    case 10: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) { return fn.apply(this, arguments); };
    default: throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
};


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__introspection__ = __webpack_require__(205);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__introspection__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__introspection__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(102);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__utils__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__utils__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__utils__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__utils__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__utils__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__utils__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__utils__["g"]; });




/***/ }),
/* 25 */
/***/ (function(module, exports) {

/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
module.exports = Array.isArray || function _isArray(val) {
  return (val != null &&
          val.length >= 0 &&
          Object.prototype.toString.call(val) === '[object Array]');
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function _reduced(x) {
  return x && x['@@transducer/reduced'] ? x :
    {
      '@@transducer/value': x,
      '@@transducer/reduced': true
    };
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNullish;

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Returns true if a value is null, undefined, or NaN.
 */
function isNullish(value) {
  return value === null || value === undefined || value !== value;
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphQLID = exports.GraphQLBoolean = exports.GraphQLString = exports.GraphQLFloat = exports.GraphQLInt = undefined;

var _definition = __webpack_require__(6);

var _kinds = __webpack_require__(17);

var Kind = _interopRequireWildcard(_kinds);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// As per the GraphQL Spec, Integers are only treated as valid when a valid
// 32-bit signed integer, providing the broadest support across platforms.
//
// n.b. JavaScript's integers are safe between -(2^53 - 1) and 2^53 - 1 because
// they are internally represented as IEEE 754 doubles.

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

var MAX_INT = 2147483647;
var MIN_INT = -2147483648;

function coerceInt(value) {
  if (value === '') {
    throw new TypeError('Int cannot represent non 32-bit signed integer value: (empty string)');
  }
  var num = Number(value);
  if (num === num && num <= MAX_INT && num >= MIN_INT) {
    return (num < 0 ? Math.ceil : Math.floor)(num);
  }
  throw new TypeError('Int cannot represent non 32-bit signed integer value: ' + String(value));
}

var GraphQLInt = exports.GraphQLInt = new _definition.GraphQLScalarType({
  name: 'Int',
  description: 'The `Int` scalar type represents non-fractional signed whole numeric ' + 'values. Int can represent values between -(2^31) and 2^31 - 1. ',
  serialize: coerceInt,
  parseValue: coerceInt,
  parseLiteral: function parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      var num = parseInt(ast.value, 10);
      if (num <= MAX_INT && num >= MIN_INT) {
        return num;
      }
    }
    return null;
  }
});

function coerceFloat(value) {
  if (value === '') {
    throw new TypeError('Float cannot represent non numeric value: (empty string)');
  }
  var num = Number(value);
  if (num === num) {
    return num;
  }
  throw new TypeError('Float cannot represent non numeric value: ' + String(value));
}

var GraphQLFloat = exports.GraphQLFloat = new _definition.GraphQLScalarType({
  name: 'Float',
  description: 'The `Float` scalar type represents signed double-precision fractional ' + 'values as specified by ' + '[IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). ',
  serialize: coerceFloat,
  parseValue: coerceFloat,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === Kind.FLOAT || ast.kind === Kind.INT ? parseFloat(ast.value) : null;
  }
});

var GraphQLString = exports.GraphQLString = new _definition.GraphQLScalarType({
  name: 'String',
  description: 'The `String` scalar type represents textual data, represented as UTF-8 ' + 'character sequences. The String type is most often used by GraphQL to ' + 'represent free-form human-readable text.',
  serialize: String,
  parseValue: String,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === Kind.STRING ? ast.value : null;
  }
});

var GraphQLBoolean = exports.GraphQLBoolean = new _definition.GraphQLScalarType({
  name: 'Boolean',
  description: 'The `Boolean` scalar type represents `true` or `false`.',
  serialize: Boolean,
  parseValue: Boolean,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === Kind.BOOLEAN ? ast.value : null;
  }
});

var GraphQLID = exports.GraphQLID = new _definition.GraphQLScalarType({
  name: 'ID',
  description: 'The `ID` scalar type represents a unique identifier, often used to ' + 'refetch an object or as key for a cache. The ID type appears in a JSON ' + 'response as a String; however, it is not intended to be human-readable. ' + 'When expected as an input type, any string (such as `"4"`) or integer ' + '(such as `4`) input value will be accepted as an ID.',
  serialize: String,
  parseValue: String,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === Kind.STRING || ast.kind === Kind.INT ? ast.value : null;
  }
});

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var _indexOf = __webpack_require__(137);


module.exports = function _contains(a, list) {
  return _indexOf(list, a, 0) >= 0;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var _checkForMethod = __webpack_require__(44);
var _curry3 = __webpack_require__(3);


/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * Dispatches to the `slice` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @sig Number -> Number -> String -> String
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
 */
module.exports = _curry3(_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
  return Array.prototype.slice.call(list, fromIndex, toIndex);
}));


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type_graph__ = __webpack_require__(101);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__type_graph__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__type_graph__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__type_graph__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__viewport__ = __webpack_require__(203);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__viewport__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__svg_renderer__ = __webpack_require__(202);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__svg_renderer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dot__ = __webpack_require__(100);
/* unused harmony namespace reexport */






/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.specifiedDirectives = exports.GraphQLDeprecatedDirective = exports.DEFAULT_DEPRECATION_REASON = exports.GraphQLSkipDirective = exports.GraphQLIncludeDirective = exports.GraphQLDirective = exports.DirectiveLocation = undefined;

var _definition = __webpack_require__(6);

var _scalars = __webpack_require__(28);

var _invariant = __webpack_require__(10);

var _invariant2 = _interopRequireDefault(_invariant);

var _assertValidName = __webpack_require__(79);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

var DirectiveLocation = exports.DirectiveLocation = {
  // Operations
  QUERY: 'QUERY',
  MUTATION: 'MUTATION',
  SUBSCRIPTION: 'SUBSCRIPTION',
  FIELD: 'FIELD',
  FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
  FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
  INLINE_FRAGMENT: 'INLINE_FRAGMENT',
  // Schema Definitions
  SCHEMA: 'SCHEMA',
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  FIELD_DEFINITION: 'FIELD_DEFINITION',
  ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  ENUM_VALUE: 'ENUM_VALUE',
  INPUT_OBJECT: 'INPUT_OBJECT',
  INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
};

// eslint-disable-line

/**
 * Directives are used by the GraphQL runtime as a way of modifying execution
 * behavior. Type system creators will usually not create these directly.
 */
var GraphQLDirective = exports.GraphQLDirective = function GraphQLDirective(config) {
  _classCallCheck(this, GraphQLDirective);

  (0, _invariant2.default)(config.name, 'Directive must be named.');
  (0, _assertValidName.assertValidName)(config.name);
  (0, _invariant2.default)(Array.isArray(config.locations), 'Must provide locations for directive.');
  this.name = config.name;
  this.description = config.description;
  this.locations = config.locations;

  var args = config.args;
  if (!args) {
    this.args = [];
  } else {
    (0, _invariant2.default)(!Array.isArray(args), '@' + config.name + ' args must be an object with argument names as keys.');
    this.args = Object.keys(args).map(function (argName) {
      (0, _assertValidName.assertValidName)(argName);
      var arg = args[argName];
      (0, _invariant2.default)((0, _definition.isInputType)(arg.type), '@' + config.name + '(' + argName + ':) argument type must be ' + ('Input Type but got: ' + String(arg.type) + '.'));
      return {
        name: argName,
        description: arg.description === undefined ? null : arg.description,
        type: arg.type,
        defaultValue: arg.defaultValue
      };
    });
  }
};

/**
 * Used to conditionally include fields or fragments.
 */
var GraphQLIncludeDirective = exports.GraphQLIncludeDirective = new GraphQLDirective({
  name: 'include',
  description: 'Directs the executor to include this field or fragment only when ' + 'the `if` argument is true.',
  locations: [DirectiveLocation.FIELD, DirectiveLocation.FRAGMENT_SPREAD, DirectiveLocation.INLINE_FRAGMENT],
  args: {
    'if': {
      type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
      description: 'Included when true.'
    }
  }
});

/**
 * Used to conditionally skip (exclude) fields or fragments.
 */
var GraphQLSkipDirective = exports.GraphQLSkipDirective = new GraphQLDirective({
  name: 'skip',
  description: 'Directs the executor to skip this field or fragment when the `if` ' + 'argument is true.',
  locations: [DirectiveLocation.FIELD, DirectiveLocation.FRAGMENT_SPREAD, DirectiveLocation.INLINE_FRAGMENT],
  args: {
    'if': {
      type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
      description: 'Skipped when true.'
    }
  }
});

/**
 * Constant string used for default reason for a deprecation.
 */
var DEFAULT_DEPRECATION_REASON = exports.DEFAULT_DEPRECATION_REASON = 'No longer supported';

/**
 * Used to declare element of a GraphQL schema as deprecated.
 */
var GraphQLDeprecatedDirective = exports.GraphQLDeprecatedDirective = new GraphQLDirective({
  name: 'deprecated',
  description: 'Marks an element of a GraphQL schema as no longer supported.',
  locations: [DirectiveLocation.FIELD_DEFINITION, DirectiveLocation.ENUM_VALUE],
  args: {
    reason: {
      type: _scalars.GraphQLString,
      description: 'Explains why this element was deprecated, usually also including a ' + 'suggestion for how to access supported similar data. Formatted ' + 'in [Markdown](https://daringfireball.net/projects/markdown/).',
      defaultValue: DEFAULT_DEPRECATION_REASON
    }
  }
});

/**
 * The full list of specified directives.
 */
var specifiedDirectives = exports.specifiedDirectives = [GraphQLIncludeDirective, GraphQLSkipDirective, GraphQLDeprecatedDirective];

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);


/**
 * Returns a function that always returns the given value. Note that for
 * non-primitives the value returned is a reference to the original value.
 *
 * This function is known as `const`, `constant`, or `K` (for K combinator) in
 * other languages and libraries.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> (* -> a)
 * @param {*} val The value to wrap in a function
 * @return {Function} A Function :: * -> val.
 * @example
 *
 *      var t = R.always('Tee');
 *      t(); //=> 'Tee'
 */
module.exports = _curry1(function always(val) {
  return function() {
    return val;
  };
});


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns the larger of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.maxBy, R.min
 * @example
 *
 *      R.max(789, 123); //=> 789
 *      R.max('a', 'b'); //=> 'b'
 */
module.exports = _curry2(function max(a, b) { return b > a ? b : a; });


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrowseButton = exports.IconButton = exports.Button = undefined;

var _reactCssThemr = __webpack_require__(12);

var _identifiers = __webpack_require__(13);

var _Button = __webpack_require__(174);

var _BrowseButton = __webpack_require__(458);

var _IconButton = __webpack_require__(459);

var _FontIcon = __webpack_require__(36);

var _ripple = __webpack_require__(178);

var _ripple2 = _interopRequireDefault(_ripple);

var _theme = __webpack_require__(235);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = (0, _Button.buttonFactory)((0, _ripple2.default)({ centered: false }), _FontIcon.FontIcon);
var IconButton = (0, _IconButton.iconButtonFactory)((0, _ripple2.default)({ centered: true }), _FontIcon.FontIcon);
var BrowseButton = (0, _BrowseButton.browseButtonFactory)((0, _ripple2.default)({ centered: false }), _FontIcon.FontIcon);
var ThemedButton = (0, _reactCssThemr.themr)(_identifiers.BUTTON, _theme2.default)(Button);
var ThemedIconButton = (0, _reactCssThemr.themr)(_identifiers.BUTTON, _theme2.default)(IconButton);
var ThemedBrowseButton = (0, _reactCssThemr.themr)(_identifiers.BUTTON, _theme2.default)(BrowseButton);

exports.default = ThemedButton;
exports.Button = ThemedButton;
exports.IconButton = ThemedIconButton;
exports.BrowseButton = ThemedBrowseButton;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FontIcon = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(5);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FontIcon = function FontIcon(_ref) {
  var alt = _ref.alt,
      children = _ref.children,
      className = _ref.className,
      theme = _ref.theme,
      value = _ref.value,
      other = _objectWithoutProperties(_ref, ['alt', 'children', 'className', 'theme', 'value']);

  return (// eslint-disable-line
    _react2.default.createElement(
      'span',
      _extends({
        'data-react-toolbox': 'font-icon',
        'aria-label': alt,
        className: (0, _classnames2.default)({ 'material-icons': typeof value === 'string' || typeof children === 'string' }, className)
      }, other),
      _react2.default.createElement(
        'span',
        { 'aria-hidden': 'true' },
        value
      ),
      children
    )
  );
};

FontIcon.propTypes = {
  alt: _react.PropTypes.string,
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  theme: _react.PropTypes.object, // eslint-disable-line
  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element])
};

FontIcon.defaultProps = {
  alt: '',
  className: ''
};

exports.default = FontIcon;
exports.FontIcon = FontIcon;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphQLError = GraphQLError;

var _location = __webpack_require__(106);

/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */
function GraphQLError( // eslint-disable-line no-redeclare
message, nodes, source, positions, path, originalError) {
  // Include (non-enumerable) stack trace.
  if (originalError && originalError.stack) {
    Object.defineProperty(this, 'stack', {
      value: originalError.stack,
      writable: true,
      configurable: true
    });
  } else if (Error.captureStackTrace) {
    Error.captureStackTrace(this, GraphQLError);
  } else {
    Object.defineProperty(this, 'stack', {
      value: Error().stack,
      writable: true,
      configurable: true
    });
  }

  // Compute locations in the source for the given nodes/positions.
  var _source = source;
  if (!_source && nodes && nodes.length > 0) {
    var node = nodes[0];
    _source = node && node.loc && node.loc.source;
  }

  var _positions = positions;
  if (!_positions && nodes) {
    _positions = nodes.filter(function (node) {
      return Boolean(node.loc);
    }).map(function (node) {
      return node.loc.start;
    });
  }
  if (_positions && _positions.length === 0) {
    _positions = undefined;
  }

  var _locations = void 0;
  var _source2 = _source; // seems here Flow need a const to resolve type.
  if (_source2 && _positions) {
    _locations = _positions.map(function (pos) {
      return (0, _location.getLocation)(_source2, pos);
    });
  }

  Object.defineProperties(this, {
    message: {
      value: message,
      // By being enumerable, JSON.stringify will include `message` in the
      // resulting output. This ensures that the simplist possible GraphQL
      // service adheres to the spec.
      enumerable: true,
      writable: true
    },
    locations: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: _locations || undefined,
      // By being enumerable, JSON.stringify will include `locations` in the
      // resulting output. This ensures that the simplist possible GraphQL
      // service adheres to the spec.
      enumerable: true
    },
    path: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: path || undefined,
      // By being enumerable, JSON.stringify will include `path` in the
      // resulting output. This ensures that the simplist possible GraphQL
      // service adheres to the spec.
      enumerable: true
    },
    nodes: {
      value: nodes || undefined
    },
    source: {
      value: _source || undefined
    },
    positions: {
      value: _positions || undefined
    },
    originalError: {
      value: originalError
    }
  });
}
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

GraphQLError.prototype = Object.create(Error.prototype, {
  constructor: { value: GraphQLError },
  name: { value: 'GraphQLError' }
});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isInvalid;

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Returns true if a value is undefined, or NaN.
 */
function isInvalid(value) {
  return value === undefined || value !== value;
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keyMap;

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Creates a keyed JS object from an array, given a function to produce the keys
 * for each value in the array.
 *
 * This provides a convenient lookup for the array items if the key function
 * produces unique results.
 *
 *     const phoneBook = [
 *       { name: 'Jon', num: '555-1234' },
 *       { name: 'Jenny', num: '867-5309' }
 *     ]
 *
 *     // { Jon: { name: 'Jon', num: '555-1234' },
 *     //   Jenny: { name: 'Jenny', num: '867-5309' } }
 *     const entriesByName = keyMap(
 *       phoneBook,
 *       entry => entry.name
 *     )
 *
 *     // { name: 'Jenny', num: '857-6309' }
 *     const jennyEntry = entriesByName['Jenny']
 *
 */
function keyMap(list, keyFn) {
  return list.reduce(function (map, item) {
    return map[keyFn(item)] = item, map;
  }, {});
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeNameMetaFieldDef = exports.TypeMetaFieldDef = exports.SchemaMetaFieldDef = exports.__TypeKind = exports.TypeKind = exports.__EnumValue = exports.__InputValue = exports.__Field = exports.__Type = exports.__DirectiveLocation = exports.__Directive = exports.__Schema = undefined;

var _isInvalid = __webpack_require__(38);

var _isInvalid2 = _interopRequireDefault(_isInvalid);

var _astFromValue = __webpack_require__(80);

var _printer = __webpack_require__(53);

var _definition = __webpack_require__(6);

var _scalars = __webpack_require__(28);

var _directives = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

var __Schema = exports.__Schema = new _definition.GraphQLObjectType({
  name: '__Schema',
  isIntrospection: true,
  description: 'A GraphQL Schema defines the capabilities of a GraphQL server. It ' + 'exposes all available types and directives on the server, as well as ' + 'the entry points for query, mutation, and subscription operations.',
  fields: function fields() {
    return {
      types: {
        description: 'A list of all types supported by this server.',
        type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type))),
        resolve: function resolve(schema) {
          var typeMap = schema.getTypeMap();
          return Object.keys(typeMap).map(function (key) {
            return typeMap[key];
          });
        }
      },
      queryType: {
        description: 'The type that query operations will be rooted at.',
        type: new _definition.GraphQLNonNull(__Type),
        resolve: function resolve(schema) {
          return schema.getQueryType();
        }
      },
      mutationType: {
        description: 'If this server supports mutation, the type that ' + 'mutation operations will be rooted at.',
        type: __Type,
        resolve: function resolve(schema) {
          return schema.getMutationType();
        }
      },
      subscriptionType: {
        description: 'If this server support subscription, the type that ' + 'subscription operations will be rooted at.',
        type: __Type,
        resolve: function resolve(schema) {
          return schema.getSubscriptionType();
        }
      },
      directives: {
        description: 'A list of all directives supported by this server.',
        type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__Directive))),
        resolve: function resolve(schema) {
          return schema.getDirectives();
        }
      }
    };
  }
});

var __Directive = exports.__Directive = new _definition.GraphQLObjectType({
  name: '__Directive',
  isIntrospection: true,
  description: 'A Directive provides a way to describe alternate runtime execution and ' + 'type validation behavior in a GraphQL document.' + '\n\nIn some cases, you need to provide options to alter GraphQL\'s ' + 'execution behavior in ways field arguments will not suffice, such as ' + 'conditionally including or skipping a field. Directives provide this by ' + 'describing additional information to the executor.',
  fields: function fields() {
    return {
      name: { type: new _definition.GraphQLNonNull(_scalars.GraphQLString) },
      description: { type: _scalars.GraphQLString },
      locations: {
        type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__DirectiveLocation)))
      },
      args: {
        type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__InputValue))),
        resolve: function resolve(directive) {
          return directive.args || [];
        }
      },
      // NOTE: the following three fields are deprecated and are no longer part
      // of the GraphQL specification.
      onOperation: {
        deprecationReason: 'Use `locations`.',
        type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
        resolve: function resolve(d) {
          return d.locations.indexOf(_directives.DirectiveLocation.QUERY) !== -1 || d.locations.indexOf(_directives.DirectiveLocation.MUTATION) !== -1 || d.locations.indexOf(_directives.DirectiveLocation.SUBSCRIPTION) !== -1;
        }
      },
      onFragment: {
        deprecationReason: 'Use `locations`.',
        type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
        resolve: function resolve(d) {
          return d.locations.indexOf(_directives.DirectiveLocation.FRAGMENT_SPREAD) !== -1 || d.locations.indexOf(_directives.DirectiveLocation.INLINE_FRAGMENT) !== -1 || d.locations.indexOf(_directives.DirectiveLocation.FRAGMENT_DEFINITION) !== -1;
        }
      },
      onField: {
        deprecationReason: 'Use `locations`.',
        type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
        resolve: function resolve(d) {
          return d.locations.indexOf(_directives.DirectiveLocation.FIELD) !== -1;
        }
      }
    };
  }
});

var __DirectiveLocation = exports.__DirectiveLocation = new _definition.GraphQLEnumType({
  name: '__DirectiveLocation',
  isIntrospection: true,
  description: 'A Directive can be adjacent to many parts of the GraphQL language, a ' + '__DirectiveLocation describes one such possible adjacencies.',
  values: {
    QUERY: {
      value: _directives.DirectiveLocation.QUERY,
      description: 'Location adjacent to a query operation.'
    },
    MUTATION: {
      value: _directives.DirectiveLocation.MUTATION,
      description: 'Location adjacent to a mutation operation.'
    },
    SUBSCRIPTION: {
      value: _directives.DirectiveLocation.SUBSCRIPTION,
      description: 'Location adjacent to a subscription operation.'
    },
    FIELD: {
      value: _directives.DirectiveLocation.FIELD,
      description: 'Location adjacent to a field.'
    },
    FRAGMENT_DEFINITION: {
      value: _directives.DirectiveLocation.FRAGMENT_DEFINITION,
      description: 'Location adjacent to a fragment definition.'
    },
    FRAGMENT_SPREAD: {
      value: _directives.DirectiveLocation.FRAGMENT_SPREAD,
      description: 'Location adjacent to a fragment spread.'
    },
    INLINE_FRAGMENT: {
      value: _directives.DirectiveLocation.INLINE_FRAGMENT,
      description: 'Location adjacent to an inline fragment.'
    },
    SCHEMA: {
      value: _directives.DirectiveLocation.SCHEMA,
      description: 'Location adjacent to a schema definition.'
    },
    SCALAR: {
      value: _directives.DirectiveLocation.SCALAR,
      description: 'Location adjacent to a scalar definition.'
    },
    OBJECT: {
      value: _directives.DirectiveLocation.OBJECT,
      description: 'Location adjacent to an object type definition.'
    },
    FIELD_DEFINITION: {
      value: _directives.DirectiveLocation.FIELD_DEFINITION,
      description: 'Location adjacent to a field definition.'
    },
    ARGUMENT_DEFINITION: {
      value: _directives.DirectiveLocation.ARGUMENT_DEFINITION,
      description: 'Location adjacent to an argument definition.'
    },
    INTERFACE: {
      value: _directives.DirectiveLocation.INTERFACE,
      description: 'Location adjacent to an interface definition.'
    },
    UNION: {
      value: _directives.DirectiveLocation.UNION,
      description: 'Location adjacent to a union definition.'
    },
    ENUM: {
      value: _directives.DirectiveLocation.ENUM,
      description: 'Location adjacent to an enum definition.'
    },
    ENUM_VALUE: {
      value: _directives.DirectiveLocation.ENUM_VALUE,
      description: 'Location adjacent to an enum value definition.'
    },
    INPUT_OBJECT: {
      value: _directives.DirectiveLocation.INPUT_OBJECT,
      description: 'Location adjacent to an input object type definition.'
    },
    INPUT_FIELD_DEFINITION: {
      value: _directives.DirectiveLocation.INPUT_FIELD_DEFINITION,
      description: 'Location adjacent to an input object field definition.'
    }
  }
});

var __Type = exports.__Type = new _definition.GraphQLObjectType({
  name: '__Type',
  isIntrospection: true,
  description: 'The fundamental unit of any GraphQL Schema is the type. There are ' + 'many kinds of types in GraphQL as represented by the `__TypeKind` enum.' + '\n\nDepending on the kind of a type, certain fields describe ' + 'information about that type. Scalar types provide no information ' + 'beyond a name and description, while Enum types provide their values. ' + 'Object and Interface types provide the fields they describe. Abstract ' + 'types, Union and Interface, provide the Object types possible ' + 'at runtime. List and NonNull types compose other types.',
  fields: function fields() {
    return {
      kind: {
        type: new _definition.GraphQLNonNull(__TypeKind),
        resolve: function resolve(type) {
          if (type instanceof _definition.GraphQLScalarType) {
            return TypeKind.SCALAR;
          } else if (type instanceof _definition.GraphQLObjectType) {
            return TypeKind.OBJECT;
          } else if (type instanceof _definition.GraphQLInterfaceType) {
            return TypeKind.INTERFACE;
          } else if (type instanceof _definition.GraphQLUnionType) {
            return TypeKind.UNION;
          } else if (type instanceof _definition.GraphQLEnumType) {
            return TypeKind.ENUM;
          } else if (type instanceof _definition.GraphQLInputObjectType) {
            return TypeKind.INPUT_OBJECT;
          } else if (type instanceof _definition.GraphQLList) {
            return TypeKind.LIST;
          } else if (type instanceof _definition.GraphQLNonNull) {
            return TypeKind.NON_NULL;
          }
          throw new Error('Unknown kind of type: ' + type);
        }
      },
      name: { type: _scalars.GraphQLString },
      description: { type: _scalars.GraphQLString },
      fields: {
        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__Field)),
        args: {
          includeDeprecated: { type: _scalars.GraphQLBoolean, defaultValue: false }
        },
        resolve: function resolve(type, _ref) {
          var includeDeprecated = _ref.includeDeprecated;

          if (type instanceof _definition.GraphQLObjectType || type instanceof _definition.GraphQLInterfaceType) {
            var _ret = function () {
              var fieldMap = type.getFields();
              var fields = Object.keys(fieldMap).map(function (fieldName) {
                return fieldMap[fieldName];
              });
              if (!includeDeprecated) {
                fields = fields.filter(function (field) {
                  return !field.deprecationReason;
                });
              }
              return {
                v: fields
              };
            }();

            if (typeof _ret === "object") return _ret.v;
          }
          return null;
        }
      },
      interfaces: {
        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type)),
        resolve: function resolve(type) {
          if (type instanceof _definition.GraphQLObjectType) {
            return type.getInterfaces();
          }
        }
      },
      possibleTypes: {
        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type)),
        resolve: function resolve(type, args, context, _ref2) {
          var schema = _ref2.schema;

          if (type instanceof _definition.GraphQLInterfaceType || type instanceof _definition.GraphQLUnionType) {
            return schema.getPossibleTypes(type);
          }
        }
      },
      enumValues: {
        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__EnumValue)),
        args: {
          includeDeprecated: { type: _scalars.GraphQLBoolean, defaultValue: false }
        },
        resolve: function resolve(type, _ref3) {
          var includeDeprecated = _ref3.includeDeprecated;

          if (type instanceof _definition.GraphQLEnumType) {
            var values = type.getValues();
            if (!includeDeprecated) {
              values = values.filter(function (value) {
                return !value.deprecationReason;
              });
            }
            return values;
          }
        }
      },
      inputFields: {
        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__InputValue)),
        resolve: function resolve(type) {
          if (type instanceof _definition.GraphQLInputObjectType) {
            var _ret2 = function () {
              var fieldMap = type.getFields();
              return {
                v: Object.keys(fieldMap).map(function (fieldName) {
                  return fieldMap[fieldName];
                })
              };
            }();

            if (typeof _ret2 === "object") return _ret2.v;
          }
        }
      },
      ofType: { type: __Type }
    };
  }
});

var __Field = exports.__Field = new _definition.GraphQLObjectType({
  name: '__Field',
  isIntrospection: true,
  description: 'Object and Interface types are described by a list of Fields, each of ' + 'which has a name, potentially a list of arguments, and a return type.',
  fields: function fields() {
    return {
      name: { type: new _definition.GraphQLNonNull(_scalars.GraphQLString) },
      description: { type: _scalars.GraphQLString },
      args: {
        type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__InputValue))),
        resolve: function resolve(field) {
          return field.args || [];
        }
      },
      type: { type: new _definition.GraphQLNonNull(__Type) },
      isDeprecated: { type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean) },
      deprecationReason: {
        type: _scalars.GraphQLString
      }
    };
  }
});

var __InputValue = exports.__InputValue = new _definition.GraphQLObjectType({
  name: '__InputValue',
  isIntrospection: true,
  description: 'Arguments provided to Fields or Directives and the input fields of an ' + 'InputObject are represented as Input Values which describe their type ' + 'and optionally a default value.',
  fields: function fields() {
    return {
      name: { type: new _definition.GraphQLNonNull(_scalars.GraphQLString) },
      description: { type: _scalars.GraphQLString },
      type: { type: new _definition.GraphQLNonNull(__Type) },
      defaultValue: {
        type: _scalars.GraphQLString,
        description: 'A GraphQL-formatted string representing the default value for this ' + 'input value.',
        resolve: function resolve(inputVal) {
          return (0, _isInvalid2.default)(inputVal.defaultValue) ? null : (0, _printer.print)((0, _astFromValue.astFromValue)(inputVal.defaultValue, inputVal.type));
        }
      }
    };
  }
});

var __EnumValue = exports.__EnumValue = new _definition.GraphQLObjectType({
  name: '__EnumValue',
  isIntrospection: true,
  description: 'One possible value for a given Enum. Enum values are unique values, not ' + 'a placeholder for a string or numeric value. However an Enum value is ' + 'returned in a JSON response as a string.',
  fields: function fields() {
    return {
      name: { type: new _definition.GraphQLNonNull(_scalars.GraphQLString) },
      description: { type: _scalars.GraphQLString },
      isDeprecated: { type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean) },
      deprecationReason: {
        type: _scalars.GraphQLString
      }
    };
  }
});

var TypeKind = exports.TypeKind = {
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  INPUT_OBJECT: 'INPUT_OBJECT',
  LIST: 'LIST',
  NON_NULL: 'NON_NULL'
};

var __TypeKind = exports.__TypeKind = new _definition.GraphQLEnumType({
  name: '__TypeKind',
  isIntrospection: true,
  description: 'An enum describing what kind of type a given `__Type` is.',
  values: {
    SCALAR: {
      value: TypeKind.SCALAR,
      description: 'Indicates this type is a scalar.'
    },
    OBJECT: {
      value: TypeKind.OBJECT,
      description: 'Indicates this type is an object. ' + '`fields` and `interfaces` are valid fields.'
    },
    INTERFACE: {
      value: TypeKind.INTERFACE,
      description: 'Indicates this type is an interface. ' + '`fields` and `possibleTypes` are valid fields.'
    },
    UNION: {
      value: TypeKind.UNION,
      description: 'Indicates this type is a union. ' + '`possibleTypes` is a valid field.'
    },
    ENUM: {
      value: TypeKind.ENUM,
      description: 'Indicates this type is an enum. ' + '`enumValues` is a valid field.'
    },
    INPUT_OBJECT: {
      value: TypeKind.INPUT_OBJECT,
      description: 'Indicates this type is an input object. ' + '`inputFields` is a valid field.'
    },
    LIST: {
      value: TypeKind.LIST,
      description: 'Indicates this type is a list. ' + '`ofType` is a valid field.'
    },
    NON_NULL: {
      value: TypeKind.NON_NULL,
      description: 'Indicates this type is a non-null. ' + '`ofType` is a valid field.'
    }
  }
});

/**
 * Note that these are GraphQLField and not GraphQLFieldConfig,
 * so the format for args is different.
 */

var SchemaMetaFieldDef = exports.SchemaMetaFieldDef = {
  name: '__schema',
  type: new _definition.GraphQLNonNull(__Schema),
  description: 'Access the current type schema of this server.',
  args: [],
  resolve: function resolve(source, args, context, _ref4) {
    var schema = _ref4.schema;
    return schema;
  }
};

var TypeMetaFieldDef = exports.TypeMetaFieldDef = {
  name: '__type',
  type: __Type,
  description: 'Request the type information of a single type.',
  args: [{ name: 'name', type: new _definition.GraphQLNonNull(_scalars.GraphQLString) }],
  resolve: function resolve(source, _ref5, context, _ref6) {
    var name = _ref5.name;
    var schema = _ref6.schema;
    return schema.getType(name);
  }
};

var TypeNameMetaFieldDef = exports.TypeNameMetaFieldDef = {
  name: '__typename',
  type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
  description: 'The name of the current Object type at runtime.',
  args: [],
  resolve: function resolve(source, args, context, _ref7) {
    var parentType = _ref7.parentType;
    return parentType.name;
  }
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphQLSchema = undefined;

var _definition = __webpack_require__(6);

var _directives = __webpack_require__(32);

var _introspection = __webpack_require__(40);

var _find = __webpack_require__(76);

var _find2 = _interopRequireDefault(_find);

var _invariant = __webpack_require__(10);

var _invariant2 = _interopRequireDefault(_invariant);

var _typeComparators = __webpack_require__(113);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Schema Definition
 *
 * A Schema is created by supplying the root types of each type of operation,
 * query and mutation (optional). A schema definition is then supplied to the
 * validator and executor.
 *
 * Example:
 *
 *     const MyAppSchema = new GraphQLSchema({
 *       query: MyAppQueryRootType,
 *       mutation: MyAppMutationRootType,
 *     })
 *
 * Note: If an array of `directives` are provided to GraphQLSchema, that will be
 * the exact list of directives represented and allowed. If `directives` is not
 * provided then a default set of the specified directives (e.g. @include and
 * @skip) will be used. If you wish to provide *additional* directives to these
 * specified directives, you must explicitly declare them. Example:
 *
 *     const MyAppSchema = new GraphQLSchema({
 *       ...
 *       directives: specifiedDirectives.concat([ myCustomDirective ]),
 *     })
 *
 */
var GraphQLSchema = exports.GraphQLSchema = function () {
  function GraphQLSchema(config) {
    var _this = this;

    _classCallCheck(this, GraphQLSchema);

    (0, _invariant2.default)(typeof config === 'object', 'Must provide configuration object.');

    (0, _invariant2.default)(config.query instanceof _definition.GraphQLObjectType, 'Schema query must be Object Type but got: ' + String(config.query) + '.');
    this._queryType = config.query;

    (0, _invariant2.default)(!config.mutation || config.mutation instanceof _definition.GraphQLObjectType, 'Schema mutation must be Object Type if provided but got: ' + String(config.mutation) + '.');
    this._mutationType = config.mutation;

    (0, _invariant2.default)(!config.subscription || config.subscription instanceof _definition.GraphQLObjectType, 'Schema subscription must be Object Type if provided but got: ' + String(config.subscription) + '.');
    this._subscriptionType = config.subscription;

    (0, _invariant2.default)(!config.types || Array.isArray(config.types), 'Schema types must be Array if provided but got: ' + String(config.types) + '.');

    (0, _invariant2.default)(!config.directives || Array.isArray(config.directives) && config.directives.every(function (directive) {
      return directive instanceof _directives.GraphQLDirective;
    }), 'Schema directives must be Array<GraphQLDirective> if provided but got: ' + String(config.directives) + '.');
    // Provide specified directives (e.g. @include and @skip) by default.
    this._directives = config.directives || _directives.specifiedDirectives;

    // Build type map now to detect any errors within this schema.
    var initialTypes = [this.getQueryType(), this.getMutationType(), this.getSubscriptionType(), _introspection.__Schema];

    var types = config.types;
    if (types) {
      initialTypes = initialTypes.concat(types);
    }

    this._typeMap = initialTypes.reduce(typeMapReducer, Object.create(null));

    // Keep track of all implementations by interface name.
    this._implementations = Object.create(null);
    Object.keys(this._typeMap).forEach(function (typeName) {
      var type = _this._typeMap[typeName];
      if (type instanceof _definition.GraphQLObjectType) {
        type.getInterfaces().forEach(function (iface) {
          var impls = _this._implementations[iface.name];
          if (impls) {
            impls.push(type);
          } else {
            _this._implementations[iface.name] = [type];
          }
        });
      }
    });

    // Enforce correct interface implementations.
    Object.keys(this._typeMap).forEach(function (typeName) {
      var type = _this._typeMap[typeName];
      if (type instanceof _definition.GraphQLObjectType) {
        type.getInterfaces().forEach(function (iface) {
          return assertObjectImplementsInterface(_this, type, iface);
        });
      }
    });
  }

  GraphQLSchema.prototype.getQueryType = function getQueryType() {
    return this._queryType;
  };

  GraphQLSchema.prototype.getMutationType = function getMutationType() {
    return this._mutationType;
  };

  GraphQLSchema.prototype.getSubscriptionType = function getSubscriptionType() {
    return this._subscriptionType;
  };

  GraphQLSchema.prototype.getTypeMap = function getTypeMap() {
    return this._typeMap;
  };

  GraphQLSchema.prototype.getType = function getType(name) {
    return this.getTypeMap()[name];
  };

  GraphQLSchema.prototype.getPossibleTypes = function getPossibleTypes(abstractType) {
    if (abstractType instanceof _definition.GraphQLUnionType) {
      return abstractType.getTypes();
    }
    (0, _invariant2.default)(abstractType instanceof _definition.GraphQLInterfaceType);
    return this._implementations[abstractType.name];
  };

  GraphQLSchema.prototype.isPossibleType = function isPossibleType(abstractType, possibleType) {
    var possibleTypeMap = this._possibleTypeMap;
    if (!possibleTypeMap) {
      this._possibleTypeMap = possibleTypeMap = Object.create(null);
    }

    if (!possibleTypeMap[abstractType.name]) {
      var possibleTypes = this.getPossibleTypes(abstractType);
      (0, _invariant2.default)(Array.isArray(possibleTypes), 'Could not find possible implementing types for ' + abstractType.name + ' ' + 'in schema. Check that schema.types is defined and is an array of ' + 'all possible types in the schema.');
      possibleTypeMap[abstractType.name] = possibleTypes.reduce(function (map, type) {
        return map[type.name] = true, map;
      }, Object.create(null));
    }

    return Boolean(possibleTypeMap[abstractType.name][possibleType.name]);
  };

  GraphQLSchema.prototype.getDirectives = function getDirectives() {
    return this._directives;
  };

  GraphQLSchema.prototype.getDirective = function getDirective(name) {
    return (0, _find2.default)(this.getDirectives(), function (directive) {
      return directive.name === name;
    });
  };

  return GraphQLSchema;
}();

function typeMapReducer(map, type) {
  if (!type) {
    return map;
  }
  if (type instanceof _definition.GraphQLList || type instanceof _definition.GraphQLNonNull) {
    return typeMapReducer(map, type.ofType);
  }
  if (map[type.name]) {
    (0, _invariant2.default)(map[type.name] === type, 'Schema must contain unique named types but contains multiple ' + ('types named "' + type.name + '".'));
    return map;
  }
  map[type.name] = type;

  var reducedMap = map;

  if (type instanceof _definition.GraphQLUnionType) {
    reducedMap = type.getTypes().reduce(typeMapReducer, reducedMap);
  }

  if (type instanceof _definition.GraphQLObjectType) {
    reducedMap = type.getInterfaces().reduce(typeMapReducer, reducedMap);
  }

  if (type instanceof _definition.GraphQLObjectType || type instanceof _definition.GraphQLInterfaceType) {
    (function () {
      var fieldMap = type.getFields();
      Object.keys(fieldMap).forEach(function (fieldName) {
        var field = fieldMap[fieldName];

        if (field.args) {
          var fieldArgTypes = field.args.map(function (arg) {
            return arg.type;
          });
          reducedMap = fieldArgTypes.reduce(typeMapReducer, reducedMap);
        }
        reducedMap = typeMapReducer(reducedMap, field.type);
      });
    })();
  }

  if (type instanceof _definition.GraphQLInputObjectType) {
    (function () {
      var fieldMap = type.getFields();
      Object.keys(fieldMap).forEach(function (fieldName) {
        var field = fieldMap[fieldName];
        reducedMap = typeMapReducer(reducedMap, field.type);
      });
    })();
  }

  return reducedMap;
}

function assertObjectImplementsInterface(schema, object, iface) {
  var objectFieldMap = object.getFields();
  var ifaceFieldMap = iface.getFields();

  // Assert each interface field is implemented.
  Object.keys(ifaceFieldMap).forEach(function (fieldName) {
    var objectField = objectFieldMap[fieldName];
    var ifaceField = ifaceFieldMap[fieldName];

    // Assert interface field exists on object.
    (0, _invariant2.default)(objectField, '"' + iface.name + '" expects field "' + fieldName + '" but "' + object.name + '" ' + 'does not provide it.');

    // Assert interface field type is satisfied by object field type, by being
    // a valid subtype. (covariant)
    (0, _invariant2.default)((0, _typeComparators.isTypeSubTypeOf)(schema, objectField.type, ifaceField.type), iface.name + '.' + fieldName + ' expects type "' + String(ifaceField.type) + '" ' + 'but ' + (object.name + '.' + fieldName + ' provides type "' + String(objectField.type) + '".'));

    // Assert each interface field arg is implemented.
    ifaceField.args.forEach(function (ifaceArg) {
      var argName = ifaceArg.name;
      var objectArg = (0, _find2.default)(objectField.args, function (arg) {
        return arg.name === argName;
      });

      // Assert interface field arg exists on object field.
      (0, _invariant2.default)(objectArg, iface.name + '.' + fieldName + ' expects argument "' + argName + '" but ' + (object.name + '.' + fieldName + ' does not provide it.'));

      // Assert interface field arg type matches object field arg type.
      // (invariant)
      (0, _invariant2.default)((0, _typeComparators.isEqualType)(ifaceArg.type, objectArg.type), iface.name + '.' + fieldName + '(' + argName + ':) expects type ' + ('"' + String(ifaceArg.type) + '" but ') + (object.name + '.' + fieldName + '(' + argName + ':) provides type ') + ('"' + String(objectArg.type) + '".'));
    });

    // Assert additional arguments must not be required.
    objectField.args.forEach(function (objectArg) {
      var argName = objectArg.name;
      var ifaceArg = (0, _find2.default)(ifaceField.args, function (arg) {
        return arg.name === argName;
      });
      if (!ifaceArg) {
        (0, _invariant2.default)(!(objectArg.type instanceof _definition.GraphQLNonNull), object.name + '.' + fieldName + '(' + argName + ':) is of required type ' + ('"' + String(objectArg.type) + '" but is not also provided by the ') + ('interface ' + iface.name + '.' + fieldName + '.'));
      }
    });
  });
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.valueFromAST = valueFromAST;

var _keyMap = __webpack_require__(39);

var _keyMap2 = _interopRequireDefault(_keyMap);

var _invariant = __webpack_require__(10);

var _invariant2 = _interopRequireDefault(_invariant);

var _isNullish = __webpack_require__(27);

var _isNullish2 = _interopRequireDefault(_isNullish);

var _isInvalid = __webpack_require__(38);

var _isInvalid2 = _interopRequireDefault(_isInvalid);

var _kinds = __webpack_require__(17);

var Kind = _interopRequireWildcard(_kinds);

var _definition = __webpack_require__(6);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Produces a JavaScript value given a GraphQL Value AST.
 *
 * A GraphQL type must be provided, which will be used to interpret different
 * GraphQL Value literals.
 *
 * Returns `undefined` when the value could not be validly coerced according to
 * the provided type.
 *
 * | GraphQL Value        | JSON Value    |
 * | -------------------- | ------------- |
 * | Input Object         | Object        |
 * | List                 | Array         |
 * | Boolean              | Boolean       |
 * | String               | String        |
 * | Int / Float          | Number        |
 * | Enum Value           | Mixed         |
 * | NullValue            | null          |
 *
 */

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

function valueFromAST(valueNode, type, variables) {
  if (!valueNode) {
    // When there is no node, then there is also no value.
    // Importantly, this is different from returning the value null.
    return;
  }

  if (type instanceof _definition.GraphQLNonNull) {
    if (valueNode.kind === Kind.NULL) {
      return; // Invalid: intentionally return no value.
    }
    return valueFromAST(valueNode, type.ofType, variables);
  }

  if (valueNode.kind === Kind.NULL) {
    // This is explicitly returning the value null.
    return null;
  }

  if (valueNode.kind === Kind.VARIABLE) {
    var variableName = valueNode.name.value;
    if (!variables || (0, _isInvalid2.default)(variables[variableName])) {
      // No valid return value.
      return;
    }
    // Note: we're not doing any checking that this variable is correct. We're
    // assuming that this query has been validated and the variable usage here
    // is of the correct type.
    return variables[variableName];
  }

  if (type instanceof _definition.GraphQLList) {
    var itemType = type.ofType;
    if (valueNode.kind === Kind.LIST) {
      var coercedValues = [];
      var itemNodes = valueNode.values;
      for (var i = 0; i < itemNodes.length; i++) {
        if (isMissingVariable(itemNodes[i], variables)) {
          // If an array contains a missing variable, it is either coerced to
          // null or if the item type is non-null, it considered invalid.
          if (itemType instanceof _definition.GraphQLNonNull) {
            return; // Invalid: intentionally return no value.
          }
          coercedValues.push(null);
        } else {
          var itemValue = valueFromAST(itemNodes[i], itemType, variables);
          if ((0, _isInvalid2.default)(itemValue)) {
            return; // Invalid: intentionally return no value.
          }
          coercedValues.push(itemValue);
        }
      }
      return coercedValues;
    }
    var coercedValue = valueFromAST(valueNode, itemType, variables);
    if ((0, _isInvalid2.default)(coercedValue)) {
      return; // Invalid: intentionally return no value.
    }
    return [coercedValue];
  }

  if (type instanceof _definition.GraphQLInputObjectType) {
    if (valueNode.kind !== Kind.OBJECT) {
      return; // Invalid: intentionally return no value.
    }
    var coercedObj = Object.create(null);
    var fields = type.getFields();
    var fieldNodes = (0, _keyMap2.default)(valueNode.fields, function (field) {
      return field.name.value;
    });
    var fieldNames = Object.keys(fields);
    for (var _i = 0; _i < fieldNames.length; _i++) {
      var fieldName = fieldNames[_i];
      var field = fields[fieldName];
      var fieldNode = fieldNodes[fieldName];
      if (!fieldNode || isMissingVariable(fieldNode.value, variables)) {
        if (!(0, _isInvalid2.default)(field.defaultValue)) {
          coercedObj[fieldName] = field.defaultValue;
        } else if (field.type instanceof _definition.GraphQLNonNull) {
          return; // Invalid: intentionally return no value.
        }
        continue;
      }
      var fieldValue = valueFromAST(fieldNode.value, field.type, variables);
      if ((0, _isInvalid2.default)(fieldValue)) {
        return; // Invalid: intentionally return no value.
      }
      coercedObj[fieldName] = fieldValue;
    }
    return coercedObj;
  }

  (0, _invariant2.default)(type instanceof _definition.GraphQLScalarType || type instanceof _definition.GraphQLEnumType, 'Must be input type');

  var parsed = type.parseLiteral(valueNode);
  if ((0, _isNullish2.default)(parsed)) {
    // null or invalid values represent a failure to parse correctly,
    // in which case no value is returned.
    return;
  }

  return parsed;
}

// Returns true if the provided valueNode is a variable which is not defined
// in the set of variables.
function isMissingVariable(valueNode, variables) {
  return valueNode.kind === Kind.VARIABLE && (!variables || (0, _isInvalid2.default)(variables[valueNode.name.value]));
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);


/**
 * Makes a shallow clone of an object, setting or overriding the specified
 * property with the given value. Note that this copies and flattens prototype
 * properties onto the new object as well. All non-primitive properties are
 * copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig String -> a -> {k: v} -> {k: v}
 * @param {String} prop The property name to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except for the changed property.
 * @see R.dissoc
 * @example
 *
 *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
 */
module.exports = _curry3(function assoc(prop, val, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  result[prop] = val;
  return result;
});


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var _isArray = __webpack_require__(25);


/**
 * This checks whether a function has a [methodname] function. If it isn't an
 * array it will execute that function otherwise it will default to the ramda
 * implementation.
 *
 * @private
 * @param {Function} fn ramda implemtation
 * @param {String} methodname property to check for a custom implementation
 * @return {Object} Whatever the return value of the method is.
 */
module.exports = function _checkForMethod(methodname, fn) {
  return function() {
    var length = arguments.length;
    if (length === 0) {
      return fn();
    }
    var obj = arguments[length - 1];
    return (_isArray(obj) || typeof obj[methodname] !== 'function') ?
      fn.apply(this, arguments) :
      obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
  };
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _isFunction = __webpack_require__(59);
var curryN = __webpack_require__(8);
var toString = __webpack_require__(50);


/**
 * Turns a named method with a specified arity into a function that can be
 * called directly supplied with arguments and a target object.
 *
 * The returned function is curried and accepts `arity + 1` parameters where
 * the final parameter is the target object.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
 * @param {Number} arity Number of arguments the returned function should take
 *        before the target object.
 * @param {String} method Name of the method to call.
 * @return {Function} A new curried function.
 * @example
 *
 *      var sliceFrom = R.invoker(1, 'slice');
 *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
 *      var sliceFrom6 = R.invoker(2, 'slice')(6);
 *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
 * @symb R.invoker(0, 'method')(o) = o['method']()
 * @symb R.invoker(1, 'method')(a, o) = o['method'](a)
 * @symb R.invoker(2, 'method')(a, b, o) = o['method'](a, b)
 */
module.exports = _curry2(function invoker(arity, method) {
  return curryN(arity + 1, function() {
    var target = arguments[arity];
    if (target != null && _isFunction(target[method])) {
      return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
    }
    throw new TypeError(toString(target) + ' does not have a method named "' + method + '"');
  });
});


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var _isArray = __webpack_require__(25);
var _isString = __webpack_require__(61);


/**
 * Tests whether or not an object is similar to an array.
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @deprecated since v0.23.0
 * @example
 *
 *      R.isArrayLike([]); //=> true
 *      R.isArrayLike(true); //=> false
 *      R.isArrayLike({}); //=> false
 *      R.isArrayLike({length: 10}); //=> false
 *      R.isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */
module.exports = _curry1(function isArrayLike(x) {
  if (_isArray(x)) { return true; }
  if (!x) { return false; }
  if (typeof x !== 'object') { return false; }
  if (_isString(x)) { return false; }
  if (x.nodeType === 1) { return !!x.length; }
  if (x.length === 0) { return true; }
  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }
  return false;
});


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _isString = __webpack_require__(61);


/**
 * Returns the nth element of the given list or string. If n is negative the
 * element at index length + n is returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> a | Undefined
 * @sig Number -> String -> String
 * @param {Number} offset
 * @param {*} list
 * @return {*}
 * @example
 *
 *      var list = ['foo', 'bar', 'baz', 'quux'];
 *      R.nth(1, list); //=> 'bar'
 *      R.nth(-1, list); //=> 'quux'
 *      R.nth(-99, list); //=> undefined
 *
 *      R.nth(2, 'abc'); //=> 'c'
 *      R.nth(3, 'abc'); //=> ''
 * @symb R.nth(-1, [a, b, c]) = c
 * @symb R.nth(0, [a, b, c]) = a
 * @symb R.nth(1, [a, b, c]) = b
 */
module.exports = _curry2(function nth(offset, list) {
  var idx = offset < 0 ? list.length + offset : offset;
  return _isString(list) ? list.charAt(idx) : list[idx];
});


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Retrieve the value at a given path.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {a} -> a | Undefined
 * @param {Array} path The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @see R.prop
 * @example
 *
 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 */
module.exports = _curry2(function path(paths, obj) {
  var val = obj;
  var idx = 0;
  while (idx < paths.length) {
    if (val == null) {
      return;
    }
    val = val[paths[idx]];
    idx += 1;
  }
  return val;
});


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var map = __webpack_require__(15);
var prop = __webpack_require__(93);


/**
 * Returns a new list by plucking the same named property off all objects in
 * the list supplied.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig k -> [{k: v}] -> [v]
 * @param {Number|String} key The key name to pluck off of each object.
 * @param {Array} list The array to consider.
 * @return {Array} The list of values for the given key.
 * @see R.props
 * @example
 *
 *      R.pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]
 *      R.pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]
 * @symb R.pluck('x', [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]) = [1, 3, 5]
 * @symb R.pluck(0, [[1, 2], [3, 4], [5, 6]]) = [1, 3, 5]
 */
module.exports = _curry2(function pluck(p, list) {
  return map(prop(p), list);
});


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var _toString = __webpack_require__(334);


/**
 * Returns the string representation of the given value. `eval`'ing the output
 * should result in a value equivalent to the input value. Many of the built-in
 * `toString` methods do not satisfy this requirement.
 *
 * If the given value is an `[object Object]` with a `toString` method other
 * than `Object.prototype.toString`, this method is invoked with no arguments
 * to produce the return value. This means user-defined constructor functions
 * can provide a suitable `toString` method. For example:
 *
 *     function Point(x, y) {
 *       this.x = x;
 *       this.y = y;
 *     }
 *
 *     Point.prototype.toString = function() {
 *       return 'new Point(' + this.x + ', ' + this.y + ')';
 *     };
 *
 *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category String
 * @sig * -> String
 * @param {*} val
 * @return {String}
 * @example
 *
 *      R.toString(42); //=> '42'
 *      R.toString('abc'); //=> '"abc"'
 *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
 *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
 *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
 */
module.exports = _curry1(function toString(val) { return _toString(val, []); });


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(70);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames2 = __webpack_require__(5);

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssThemr = __webpack_require__(12);

var _dissoc = __webpack_require__(86);

var _dissoc2 = _interopRequireDefault(_dissoc);

var _identifiers = __webpack_require__(13);

var _events = __webpack_require__(98);

var _events2 = _interopRequireDefault(_events);

var _prefixer = __webpack_require__(470);

var _prefixer2 = _interopRequireDefault(_prefixer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaults = {
  centered: false,
  className: '',
  multiple: true,
  passthrough: true,
  spread: 2,
  theme: {}
};

var rippleFactory = function rippleFactory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _defaults$options = _extends({}, defaults, options),
      defaultCentered = _defaults$options.centered,
      defaultClassName = _defaults$options.className,
      defaultMultiple = _defaults$options.multiple,
      defaultPassthrough = _defaults$options.passthrough,
      defaultSpread = _defaults$options.spread,
      defaultTheme = _defaults$options.theme,
      props = _objectWithoutProperties(_defaults$options, ['centered', 'className', 'multiple', 'passthrough', 'spread', 'theme']);

  return function (ComposedComponent) {
    var RippledComponent = function (_Component) {
      _inherits(RippledComponent, _Component);

      function RippledComponent() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, RippledComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RippledComponent.__proto__ || Object.getPrototypeOf(RippledComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
          ripples: {}
        }, _this.rippleNodes = {}, _this.handleMouseDown = function (event) {
          if (_this.props.onMouseDown) _this.props.onMouseDown(event);
          if (!_this.props.disabled) {
            var _events$getMousePosit = _events2.default.getMousePosition(event),
                x = _events$getMousePosit.x,
                y = _events$getMousePosit.y;

            _this.animateRipple(x, y, false);
          }
        }, _this.handleTouchStart = function (event) {
          if (_this.props.onTouchStart) _this.props.onTouchStart(event);
          if (!_this.props.disabled) {
            var _events$getTouchPosit = _events2.default.getTouchPosition(event),
                x = _events$getTouchPosit.x,
                y = _events$getTouchPosit.y;

            _this.animateRipple(x, y, true);
          }
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(RippledComponent, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
          // If a new ripple was just added, add a remove event listener to its animation
          if (Object.keys(prevState.ripples).length < Object.keys(this.state.ripples).length) {
            this.addRippleRemoveEventListener(this.getLastKey());
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          var _this2 = this;

          // Remove document event listeners for ripple if they still exists
          Object.keys(this.state.ripples).forEach(function (key) {
            _this2.state.ripples[key].endRipple();
          });
        }

        /**
         * Find out a descriptor object for the ripple element being created depending on
         * the position where the it was triggered and the component's dimensions.
         *
         * @param {Number} x Coordinate x in the viewport where ripple was triggered
         * @param {Number} y Coordinate y in the viewport where ripple was triggered
         * @return {Object} Descriptor element including position and size of the element
         */

      }, {
        key: 'getDescriptor',
        value: function getDescriptor(x, y) {
          var _ReactDOM$findDOMNode = _reactDom2.default.findDOMNode(this).getBoundingClientRect(),
              left = _ReactDOM$findDOMNode.left,
              top = _ReactDOM$findDOMNode.top,
              height = _ReactDOM$findDOMNode.height,
              width = _ReactDOM$findDOMNode.width;

          var _props = this.props,
              centered = _props.rippleCentered,
              spread = _props.rippleSpread;

          return {
            left: centered ? 0 : x - left - width / 2,
            top: centered ? 0 : y - top - height / 2,
            width: width * spread
          };
        }

        /**
         * Increments and internal counter and returns the next value as a string. It
         * is used to assign key references to new ripple elements.
         *
         * @return {String} Key to be assigned to a ripple.
         */

      }, {
        key: 'getNextKey',
        value: function getNextKey() {
          this.currentCount = this.currentCount ? this.currentCount + 1 : 1;
          return 'ripple' + this.currentCount;
        }

        /**
         * Return the last generated key for a ripple element. When there is only one ripple
         * and to get the reference when a ripple was just created.
         *
         * @return {String} The last generated ripple key.
         */

      }, {
        key: 'getLastKey',
        value: function getLastKey() {
          return 'ripple' + this.currentCount;
        }

        /**
         * Variable to store the ripple references
         */

      }, {
        key: 'rippleShouldTrigger',


        /**
         * Determine if a ripple should start depending if its a touch event. For mobile both
         * touchStart and mouseDown are launched so in case is touch we should always trigger
         * but if its not we should check if a touch was already triggered to decide.
         *
         * @param {Boolean} isTouch True in case a touch event triggered the ripple false otherwise.
         * @return {Boolean} True in case the ripple should trigger or false if it shouldn't.
         */
        value: function rippleShouldTrigger(isTouch) {
          var shouldStart = isTouch ? true : !this.touchCache;
          this.touchCache = isTouch;
          return shouldStart;
        }

        /**
         * Start a ripple animation on an specific point with touch or mouse events. First
         * decides if the animation should trigger. If the ripple is multiple or there is no
         * ripple present, it creates a new key. If it's a simple ripple and already exists,
         * it just restarts the current ripple. The animation happens in two state changes
         * to allow triggering via css.
         *
         * @param {Number} x Coordinate X on the screen where animation should start
         * @param {Number} y Coordinate Y on the screen where animation should start
         * @param {Boolean} isTouch Use events from touch or mouse.
         */

      }, {
        key: 'animateRipple',
        value: function animateRipple(x, y, isTouch) {
          var _this3 = this;

          if (this.rippleShouldTrigger(isTouch)) {
            (function () {
              var _getDescriptor = _this3.getDescriptor(x, y),
                  top = _getDescriptor.top,
                  left = _getDescriptor.left,
                  width = _getDescriptor.width;

              var noRipplesActive = Object.keys(_this3.state.ripples).length === 0;
              var key = _this3.props.rippleMultiple || noRipplesActive ? _this3.getNextKey() : _this3.getLastKey();
              var endRipple = _this3.addRippleDeactivateEventListener(isTouch, key);
              var initialState = { active: false, restarting: true, top: top, left: left, width: width, endRipple: endRipple };
              var runningState = { active: true, restarting: false };
              var ripples = _extends({}, _this3.state.ripples, _defineProperty({}, key, initialState));
              _this3.setState({ ripples: ripples }, function () {
                if (_this3.rippleNodes[key]) _this3.rippleNodes[key].offsetWidth; // eslint-disable-line
                _this3.setState({ ripples: _extends({}, _this3.state.ripples, _defineProperty({}, key, Object.assign({}, _this3.state.ripples[key], runningState))) });
              });
            })();
          }
        }

        /**
         * Add an event listener to the reference with given key so when the animation transition
         * ends we can be sure that it finished and it can be safely removed from the state.
         * This function is called whenever a new ripple is added to the component.
         *
         * @param {String} rippleKey Is the key of the ripple to add the event.
         */

      }, {
        key: 'addRippleRemoveEventListener',
        value: function addRippleRemoveEventListener(rippleKey) {
          var self = this;
          var rippleNode = this.rippleNodes[rippleKey];
          _events2.default.addEventListenerOnTransitionEnded(rippleNode, function onOpacityEnd(e) {
            if (e.propertyName === 'opacity') {
              if (self.props.onRippleEnded) self.props.onRippleEnded(e);
              _events2.default.removeEventListenerOnTransitionEnded(self.rippleNodes[rippleKey], onOpacityEnd);
              // self.rippleNodes = dissoc(rippleKey, self.rippleNodes);
              delete self.rippleNodes[rippleKey];
              self.setState({ ripples: (0, _dissoc2.default)(rippleKey, self.state.ripples) });
            }
          });
        }

        /**
         * Add an event listener to the document needed to deactivate a ripple and make it dissappear.
         * Deactivation can happen with a touchend or mouseup depending on the trigger type. The
         * ending function is created from a factory function and returned.
         *
         * @param {Boolean} isTouch True in case the trigger was a touch event false otherwise.
         * @param {String} rippleKey It's a key to identify the ripple that should be deactivated.
         * @return {Function} Callback function that deactivates the ripple and removes the listener
         */

      }, {
        key: 'addRippleDeactivateEventListener',
        value: function addRippleDeactivateEventListener(isTouch, rippleKey) {
          var eventType = isTouch ? 'touchend' : 'mouseup';
          var endRipple = this.createRippleDeactivateCallback(eventType, rippleKey);
          document.addEventListener(eventType, endRipple);
          return endRipple;
        }

        /**
         * Generates a function that can be called to deactivate a ripple and remove its finishing
         * event listener. If is generated because we need to store it to be called on unmount in case
         * the ripple is still running.
         *
         * @param {String} eventType Is the event type that can be touchend or mouseup
         * @param {String} rippleKey Is the key representing the ripple
         * @return {Function} Callback function that deactivates the ripple and removes the listener
         */

      }, {
        key: 'createRippleDeactivateCallback',
        value: function createRippleDeactivateCallback(eventType, rippleKey) {
          var self = this;
          return function endRipple() {
            document.removeEventListener(eventType, endRipple);
            self.setState({ ripples: _extends({}, self.state.ripples, _defineProperty({}, rippleKey, Object.assign({}, self.state.ripples[rippleKey], { active: false }))) });
          };
        }
      }, {
        key: 'renderRipple',
        value: function renderRipple(key, className, _ref2) {
          var _classnames,
              _this4 = this;

          var active = _ref2.active,
              left = _ref2.left,
              restarting = _ref2.restarting,
              top = _ref2.top,
              width = _ref2.width;

          var scale = restarting ? 0 : 1;
          var transform = 'translate3d(' + (-width / 2 + left) + 'px, ' + (-width / 2 + top) + 'px, 0) scale(' + scale + ')';
          var _className = (0, _classnames3.default)(this.props.theme.ripple, (_classnames = {}, _defineProperty(_classnames, this.props.theme.rippleActive, active), _defineProperty(_classnames, this.props.theme.rippleRestarting, restarting), _classnames), className);
          return _react2.default.createElement(
            'span',
            _extends({ key: key, 'data-react-toolbox': 'ripple', className: this.props.theme.rippleWrapper }, props),
            _react2.default.createElement('span', {
              className: _className,
              ref: function ref(node) {
                if (node) _this4.rippleNodes[key] = node;
              },
              style: (0, _prefixer2.default)({ transform: transform }, { width: width, height: width })
            })
          );
        }
      }, {
        key: 'render',
        value: function render() {
          var _this5 = this;

          var _props2 = this.props,
              children = _props2.children,
              disabled = _props2.disabled,
              ripple = _props2.ripple,
              onRippleEnded = _props2.onRippleEnded,
              rippleCentered = _props2.rippleCentered,
              rippleClassName = _props2.rippleClassName,
              rippleMultiple = _props2.rippleMultiple,
              rippleSpread = _props2.rippleSpread,
              theme = _props2.theme,
              other = _objectWithoutProperties(_props2, ['children', 'disabled', 'ripple', 'onRippleEnded', 'rippleCentered', 'rippleClassName', 'rippleMultiple', 'rippleSpread', 'theme']);

          var ripples = this.state.ripples;

          var childRipples = Object.keys(ripples).map(function (key) {
            return _this5.renderRipple(key, rippleClassName, ripples[key]);
          });
          var childProps = _extends({
            onMouseDown: this.handleMouseDown,
            onTouchStart: this.handleTouchStart
          }, other);
          var finalProps = defaultPassthrough ? _extends({}, childProps, { theme: theme, disabled: disabled }) : childProps;

          return !ripple ? _react2.default.createElement(ComposedComponent, finalProps, children) : _react2.default.createElement(ComposedComponent, finalProps, [children, childRipples]);
        }
      }]);

      return RippledComponent;
    }(_react.Component);

    RippledComponent.propTypes = {
      children: _react.PropTypes.node,
      disabled: _react.PropTypes.bool,
      onMouseDown: _react.PropTypes.func,
      onRippleEnded: _react.PropTypes.func,
      onTouchStart: _react.PropTypes.func,
      ripple: _react.PropTypes.bool,
      rippleCentered: _react.PropTypes.bool,
      rippleClassName: _react.PropTypes.string,
      rippleMultiple: _react.PropTypes.bool,
      rippleSpread: _react.PropTypes.number,
      theme: _react.PropTypes.shape({
        ripple: _react.PropTypes.string,
        rippleActive: _react.PropTypes.string,
        rippleRestarting: _react.PropTypes.string,
        rippleWrapper: _react.PropTypes.string
      })
    };
    RippledComponent.defaultProps = {
      disabled: false,
      ripple: true,
      rippleCentered: defaultCentered,
      rippleClassName: defaultClassName,
      rippleMultiple: defaultMultiple,
      rippleSpread: defaultSpread
    };


    return (0, _reactCssThemr.themr)(_identifiers.RIPPLE, defaultTheme)(RippledComponent);
  };
};

exports.default = rippleFactory;

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_marked__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_marked__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Markdown = (function (_super) {
    __extends(Markdown, _super);
    function Markdown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Markdown.prototype.shouldComponentUpdate = function (nextProps) {
        return this.props.text !== nextProps.text;
    };
    Markdown.prototype.render = function () {
        var _a = this.props, text = _a.text, className = _a.className;
        if (!text)
            return null;
        var html = __WEBPACK_IMPORTED_MODULE_1_marked__(text, { sanitize: true });
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: className, dangerouslySetInnerHTML: { __html: html } }));
    };
    return Markdown;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = Markdown;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.print = print;

var _visitor = __webpack_require__(78);

/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */
function print(ast) {
  return (0, _visitor.visit)(ast, { leave: printDocASTReducer });
} /**
   *  Copyright (c) 2015, Facebook, Inc.
   *  All rights reserved.
   *
   *  This source code is licensed under the BSD-style license found in the
   *  LICENSE file in the root directory of this source tree. An additional grant
   *  of patent rights can be found in the PATENTS file in the same directory.
   */

var printDocASTReducer = {
  Name: function Name(node) {
    return node.value;
  },
  Variable: function Variable(node) {
    return '$' + node.name;
  },

  // Document

  Document: function Document(node) {
    return join(node.definitions, '\n\n') + '\n';
  },

  OperationDefinition: function OperationDefinition(node) {
    var op = node.operation;
    var name = node.name;
    var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
    var directives = join(node.directives, ' ');
    var selectionSet = node.selectionSet;
    // Anonymous queries with no directives or variable definitions can use
    // the query short form.
    return !name && !directives && !varDefs && op === 'query' ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], ' ');
  },


  VariableDefinition: function VariableDefinition(_ref) {
    var variable = _ref.variable,
        type = _ref.type,
        defaultValue = _ref.defaultValue;
    return variable + ': ' + type + wrap(' = ', defaultValue);
  },

  SelectionSet: function SelectionSet(_ref2) {
    var selections = _ref2.selections;
    return block(selections);
  },

  Field: function Field(_ref3) {
    var alias = _ref3.alias,
        name = _ref3.name,
        args = _ref3.arguments,
        directives = _ref3.directives,
        selectionSet = _ref3.selectionSet;
    return join([wrap('', alias, ': ') + name + wrap('(', join(args, ', '), ')'), join(directives, ' '), selectionSet], ' ');
  },

  Argument: function Argument(_ref4) {
    var name = _ref4.name,
        value = _ref4.value;
    return name + ': ' + value;
  },

  // Fragments

  FragmentSpread: function FragmentSpread(_ref5) {
    var name = _ref5.name,
        directives = _ref5.directives;
    return '...' + name + wrap(' ', join(directives, ' '));
  },

  InlineFragment: function InlineFragment(_ref6) {
    var typeCondition = _ref6.typeCondition,
        directives = _ref6.directives,
        selectionSet = _ref6.selectionSet;
    return join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
  },

  FragmentDefinition: function FragmentDefinition(_ref7) {
    var name = _ref7.name,
        typeCondition = _ref7.typeCondition,
        directives = _ref7.directives,
        selectionSet = _ref7.selectionSet;
    return 'fragment ' + name + ' on ' + typeCondition + ' ' + wrap('', join(directives, ' '), ' ') + selectionSet;
  },

  // Value

  IntValue: function IntValue(_ref8) {
    var value = _ref8.value;
    return value;
  },
  FloatValue: function FloatValue(_ref9) {
    var value = _ref9.value;
    return value;
  },
  StringValue: function StringValue(_ref10) {
    var value = _ref10.value;
    return JSON.stringify(value);
  },
  BooleanValue: function BooleanValue(_ref11) {
    var value = _ref11.value;
    return JSON.stringify(value);
  },
  NullValue: function NullValue() {
    return 'null';
  },
  EnumValue: function EnumValue(_ref12) {
    var value = _ref12.value;
    return value;
  },
  ListValue: function ListValue(_ref13) {
    var values = _ref13.values;
    return '[' + join(values, ', ') + ']';
  },
  ObjectValue: function ObjectValue(_ref14) {
    var fields = _ref14.fields;
    return '{' + join(fields, ', ') + '}';
  },
  ObjectField: function ObjectField(_ref15) {
    var name = _ref15.name,
        value = _ref15.value;
    return name + ': ' + value;
  },

  // Directive

  Directive: function Directive(_ref16) {
    var name = _ref16.name,
        args = _ref16.arguments;
    return '@' + name + wrap('(', join(args, ', '), ')');
  },

  // Type

  NamedType: function NamedType(_ref17) {
    var name = _ref17.name;
    return name;
  },
  ListType: function ListType(_ref18) {
    var type = _ref18.type;
    return '[' + type + ']';
  },
  NonNullType: function NonNullType(_ref19) {
    var type = _ref19.type;
    return type + '!';
  },

  // Type System Definitions

  SchemaDefinition: function SchemaDefinition(_ref20) {
    var directives = _ref20.directives,
        operationTypes = _ref20.operationTypes;
    return join(['schema', join(directives, ' '), block(operationTypes)], ' ');
  },

  OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
    var operation = _ref21.operation,
        type = _ref21.type;
    return operation + ': ' + type;
  },

  ScalarTypeDefinition: function ScalarTypeDefinition(_ref22) {
    var name = _ref22.name,
        directives = _ref22.directives;
    return join(['scalar', name, join(directives, ' ')], ' ');
  },

  ObjectTypeDefinition: function ObjectTypeDefinition(_ref23) {
    var name = _ref23.name,
        interfaces = _ref23.interfaces,
        directives = _ref23.directives,
        fields = _ref23.fields;
    return join(['type', name, wrap('implements ', join(interfaces, ', ')), join(directives, ' '), block(fields)], ' ');
  },

  FieldDefinition: function FieldDefinition(_ref24) {
    var name = _ref24.name,
        args = _ref24.arguments,
        type = _ref24.type,
        directives = _ref24.directives;
    return name + wrap('(', join(args, ', '), ')') + ': ' + type + wrap(' ', join(directives, ' '));
  },

  InputValueDefinition: function InputValueDefinition(_ref25) {
    var name = _ref25.name,
        type = _ref25.type,
        defaultValue = _ref25.defaultValue,
        directives = _ref25.directives;
    return join([name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')], ' ');
  },

  InterfaceTypeDefinition: function InterfaceTypeDefinition(_ref26) {
    var name = _ref26.name,
        directives = _ref26.directives,
        fields = _ref26.fields;
    return join(['interface', name, join(directives, ' '), block(fields)], ' ');
  },

  UnionTypeDefinition: function UnionTypeDefinition(_ref27) {
    var name = _ref27.name,
        directives = _ref27.directives,
        types = _ref27.types;
    return join(['union', name, join(directives, ' '), '= ' + join(types, ' | ')], ' ');
  },

  EnumTypeDefinition: function EnumTypeDefinition(_ref28) {
    var name = _ref28.name,
        directives = _ref28.directives,
        values = _ref28.values;
    return join(['enum', name, join(directives, ' '), block(values)], ' ');
  },

  EnumValueDefinition: function EnumValueDefinition(_ref29) {
    var name = _ref29.name,
        directives = _ref29.directives;
    return join([name, join(directives, ' ')], ' ');
  },

  InputObjectTypeDefinition: function InputObjectTypeDefinition(_ref30) {
    var name = _ref30.name,
        directives = _ref30.directives,
        fields = _ref30.fields;
    return join(['input', name, join(directives, ' '), block(fields)], ' ');
  },

  TypeExtensionDefinition: function TypeExtensionDefinition(_ref31) {
    var definition = _ref31.definition;
    return 'extend ' + definition;
  },

  DirectiveDefinition: function DirectiveDefinition(_ref32) {
    var name = _ref32.name,
        args = _ref32.arguments,
        locations = _ref32.locations;
    return 'directive @' + name + wrap('(', join(args, ', '), ')') + ' on ' + join(locations, ' | ');
  }
};

/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */
function join(maybeArray, separator) {
  return maybeArray ? maybeArray.filter(function (x) {
    return x;
  }).join(separator || '') : '';
}

/**
 * Given array, print each item on its own line, wrapped in an
 * indented "{ }" block.
 */
function block(array) {
  return array && array.length !== 0 ? indent('{\n' + join(array, '\n')) + '\n}' : '{}';
}

/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise
 * print an empty string.
 */
function wrap(start, maybeString, end) {
  return maybeString ? start + maybeString + (end || '') : '';
}

function indent(maybeString) {
  return maybeString && maybeString.replace(/\n/g, '\n  ');
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Adds two values.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * @see R.subtract
 * @example
 *
 *      R.add(2, 3);       //=>  5
 *      R.add(7)(10);      //=> 17
 */
module.exports = _curry2(function add(a, b) {
  return Number(a) + Number(b);
});


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var pipe = __webpack_require__(160);
var reverse = __webpack_require__(68);


/**
 * Performs right-to-left function composition. The rightmost function may have
 * any arity; the remaining functions must be unary.
 *
 * **Note:** The result of compose is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipe
 * @example
 *
 *      var classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
 *      var yellGreeting = R.compose(R.toUpper, classyGreeting);
 *      yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
 *
 * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))
 */
module.exports = function compose() {
  if (arguments.length === 0) {
    throw new Error('compose requires at least one argument');
  }
  return pipe.apply(this, reverse(arguments));
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var curryN = __webpack_require__(8);


/**
 * Returns a curried equivalent of the provided function. The curried function
 * has two unusual capabilities. First, its arguments needn't be provided one
 * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value `R.__` may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is `R.__`, the
 * following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> a) -> (* -> a)
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curryN
 * @example
 *
 *      var addFourNumbers = (a, b, c, d) => a + b + c + d;
 *
 *      var curriedAddFourNumbers = R.curry(addFourNumbers);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
module.exports = _curry1(function curry(fn) {
  return curryN(fn.length, fn);
});


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var curry = __webpack_require__(56);


/**
 * Returns a new function much like the supplied one, except that the first two
 * arguments' order is reversed.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a -> b -> c -> ... -> z) -> (b -> a -> c -> ... -> z)
 * @param {Function} fn The function to invoke with its first two parameters reversed.
 * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
 * @example
 *
 *      var mergeThree = (a, b, c) => [].concat(a, b, c);
 *
 *      mergeThree(1, 2, 3); //=> [1, 2, 3]
 *
 *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
 * @symb R.flip(f)(a, b, c) = f(b, a, c)
 */
module.exports = _curry1(function flip(fn) {
  return curry(function(a, b) {
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = b;
    args[1] = a;
    return fn.apply(this, args);
  });
});


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(23);
var _isPlaceholder = __webpack_require__(60);


/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curryN(length, received, fn) {
  return function() {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;
      if (combinedIdx < received.length &&
          (!_isPlaceholder(received[combinedIdx]) ||
           argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }
      combined[combinedIdx] = result;
      if (!_isPlaceholder(result)) {
        left -= 1;
      }
      combinedIdx += 1;
    }
    return left <= 0 ? fn.apply(this, combined)
                     : _arity(left, _curryN(length, combined, fn));
  };
};


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = function _isFunction(x) {
  return Object.prototype.toString.call(x) === '[object Function]';
};


/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = function _isPlaceholder(a) {
  return a != null &&
         typeof a === 'object' &&
         a['@@functional/placeholder'] === true;
};


/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
};


/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = function _map(fn, functor) {
  var idx = 0;
  var len = functor.length;
  var result = Array(len);
  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }
  return result;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var map = __webpack_require__(15);


/**
 * Returns a lens for the given getter and setter functions. The getter "gets"
 * the value of the focus; the setter "sets" the value of the focus. The setter
 * should not mutate the data structure.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig (s -> a) -> ((a, s) -> s) -> Lens s a
 * @param {Function} getter
 * @param {Function} setter
 * @return {Lens}
 * @see R.view, R.set, R.over, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lens(R.prop('x'), R.assoc('x'));
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */
module.exports = _curry2(function lens(getter, setter) {
  return function(toFunctorFn) {
    return function(target) {
      return map(
        function(focus) {
          return setter(focus, target);
        },
        toFunctorFn(getter(target))
      );
    };
  };
});


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var liftN = __webpack_require__(150);


/**
 * "lifts" a function of arity > 1 so that it may "map over" a list, Function or other
 * object that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.liftN
 * @example
 *
 *      var madd3 = R.lift((a, b, c) => a + b + c);
 *
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 *
 *      var madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);
 *
 *      madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]
 */
module.exports = _curry1(function lift(fn) {
  return liftN(fn.length, fn);
});


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly `n` parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} n The desired arity of the new function.
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity `n`.
 * @example
 *
 *      var takesTwoArgs = (a, b) => [a, b];
 *
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      var takesOneArg = R.nAry(1, takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only `n` arguments are passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 * @symb R.nAry(0, f)(a, b) = f()
 * @symb R.nAry(1, f)(a, b) = f(a)
 * @symb R.nAry(2, f)(a, b) = f(a, b)
 */
module.exports = _curry2(function nAry(n, fn) {
  switch (n) {
    case 0: return function() {return fn.call(this);};
    case 1: return function(a0) {return fn.call(this, a0);};
    case 2: return function(a0, a1) {return fn.call(this, a0, a1);};
    case 3: return function(a0, a1, a2) {return fn.call(this, a0, a1, a2);};
    case 4: return function(a0, a1, a2, a3) {return fn.call(this, a0, a1, a2, a3);};
    case 5: return function(a0, a1, a2, a3, a4) {return fn.call(this, a0, a1, a2, a3, a4);};
    case 6: return function(a0, a1, a2, a3, a4, a5) {return fn.call(this, a0, a1, a2, a3, a4, a5);};
    case 7: return function(a0, a1, a2, a3, a4, a5, a6) {return fn.call(this, a0, a1, a2, a3, a4, a5, a6);};
    case 8: return function(a0, a1, a2, a3, a4, a5, a6, a7) {return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);};
    case 9: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);};
    case 10: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);};
    default: throw new Error('First argument to nAry must be a non-negative integer no greater than ten');
  }
});


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var _curryN = __webpack_require__(58);
var _dispatchable = __webpack_require__(4);
var _has = __webpack_require__(11);
var _reduce = __webpack_require__(18);
var _xreduceBy = __webpack_require__(348);


/**
 * Groups the elements of the list according to the result of calling
 * the String-returning function `keyFn` on each element and reduces the elements
 * of each group to a single value via the reducer function `valueFn`.
 *
 * This function is basically a more general `groupBy` function.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category List
 * @sig ((a, b) -> a) -> a -> (b -> String) -> [b] -> {String: a}
 * @param {Function} valueFn The function that reduces the elements of each group to a single
 *        value. Receives two values, accumulator for a particular group and the current element.
 * @param {*} acc The (initial) accumulator value for each group.
 * @param {Function} keyFn The function that maps the list's element into a key.
 * @param {Array} list The array to group.
 * @return {Object} An object with the output of `keyFn` for keys, mapped to the output of
 *         `valueFn` for elements which produced that key when passed to `keyFn`.
 * @see R.groupBy, R.reduce
 * @example
 *
 *      var reduceToNamesBy = R.reduceBy((acc, student) => acc.concat(student.name), []);
 *      var namesByGrade = reduceToNamesBy(function(student) {
 *        var score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      var students = [{name: 'Lucy', score: 92},
 *                      {name: 'Drew', score: 85},
 *                      // ...
 *                      {name: 'Bart', score: 62}];
 *      namesByGrade(students);
 *      // {
 *      //   'A': ['Lucy'],
 *      //   'B': ['Drew']
 *      //   // ...,
 *      //   'F': ['Bart']
 *      // }
 */
module.exports = _curryN(4, [], _dispatchable([], _xreduceBy,
  function reduceBy(valueFn, valueAcc, keyFn, list) {
    return _reduce(function(acc, elt) {
      var key = keyFn(elt);
      acc[key] = valueFn(_has(key, acc) ? acc[key] : valueAcc, elt);
      return acc;
    }, {}, list);
  }));


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var _complement = __webpack_require__(134);
var _curry2 = __webpack_require__(0);
var filter = __webpack_require__(87);


/**
 * The complement of `filter`.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.filter, R.transduce, R.addIndex
 * @example
 *
 *      var isOdd = (n) => n % 2 === 1;
 *
 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
module.exports = _curry2(function reject(pred, filterable) {
  return filter(_complement(pred), filterable);
});


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var _isString = __webpack_require__(61);


/**
 * Returns a new list or string with the elements or characters in reverse
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {Array|String} list
 * @return {Array|String}
 * @example
 *
 *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
 *      R.reverse([1, 2]);     //=> [2, 1]
 *      R.reverse([1]);        //=> [1]
 *      R.reverse([]);         //=> []
 *
 *      R.reverse('abc');      //=> 'cba'
 *      R.reverse('ab');       //=> 'ba'
 *      R.reverse('a');        //=> 'a'
 *      R.reverse('');         //=> ''
 */
module.exports = _curry1(function reverse(list) {
  return _isString(list) ? list.split('').reverse().join('') :
                           Array.prototype.slice.call(list, 0).reverse();
});


/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_69__;

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_70__;

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Description_css__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Description_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Description_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Markdown__ = __webpack_require__(52);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Description = (function (_super) {
    __extends(Description, _super);
    function Description() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Description.prototype.render = function () {
        var _a = this.props, text = _a.text, className = _a.className;
        if (text)
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__utils_Markdown__["a" /* default */], { text: text, className: __WEBPACK_IMPORTED_MODULE_1_classnames__('description-box', className) }));
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_1_classnames__('description-box', className, '-no-description') },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, 'No Description')));
    };
    return Description;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = Description;


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TypeLink_css__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TypeLink_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__TypeLink_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions___ = __webpack_require__(9);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var TypeLink = (function (_super) {
    __extends(TypeLink, _super);
    function TypeLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypeLink.prototype.render = function () {
        var _a = this.props, type = _a.type, dispatch = _a.dispatch;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "type-name -object", onClick: function (event) {
                event.stopPropagation();
                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions___["C" /* focusElement */])(type.id));
                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions___["D" /* selectNode */])(type.id));
            } }, type.name));
    };
    return TypeLink;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])()(TypeLink);


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_toolbox_lib_tooltip__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_toolbox_lib_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_toolbox_lib_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_button__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__WrappedTypeName_css__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__WrappedTypeName_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__WrappedTypeName_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__introspection___ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__graph___ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__TypeLink__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__TypeName__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__icons_relay_icon_svg__ = __webpack_require__(213);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();









var TooltipIcon = __WEBPACK_IMPORTED_MODULE_1_react_toolbox_lib_tooltip___default()(__WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_button__["IconButton"]);
var WrappedTypeName = (function (_super) {
    __extends(WrappedTypeName, _super);
    function WrappedTypeName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WrappedTypeName.prototype.renderRelayIcon = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](TooltipIcon, { className: "relay-icon", tooltipPosition: "top", ripple: false, tooltip: "Relay Connection" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__icons_relay_icon_svg__["a" /* default */], null)));
    };
    WrappedTypeName.prototype.render = function () {
        var container = this.props.container;
        var type = container.type;
        var wrappers = container.typeWrappers || [];
        var _a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__introspection___["d" /* stringifyWrappers */])(wrappers), leftWrap = _a[0], rightWrap = _a[1];
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "wrapped-type-name" },
            leftWrap,
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__graph___["d" /* isNode */])(type) ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__TypeLink__["a" /* default */], { type: type }) : __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__TypeName__["a" /* default */], { type: type }),
            rightWrap,
            container.relayType && this.renderRelayIcon()));
    };
    return WrappedTypeName;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = WrappedTypeName;


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__(207);
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony export (immutable) */ __webpack_exports__["b"] = observeStore;




function configureStore(preloadedState) {
    var composeEnhancers;
    if (false) {
        composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
    }
    else {
        composeEnhancers = __WEBPACK_IMPORTED_MODULE_1_redux__["compose"];
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_3__reducers__["a" /* rootReducer */], preloadedState, composeEnhancers(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_2_redux_thunk___default.a)));
}
// Initial version was copy-pasted from
// https://github.com/reactjs/redux/issues/303#issuecomment-125184409
function observeStore(store) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var onChange = args.pop();
    var selectors = args;
    var currentState;
    function handleChange() {
        var nextState = __WEBPACK_IMPORTED_MODULE_0_lodash__["map"](selectors, function (f) { return f(store.getState()); });
        var stateChanged = __WEBPACK_IMPORTED_MODULE_0_lodash__(nextState)
            .zip(currentState)
            .some(function (_a) {
            var x = _a[0], y = _a[1];
            return (x !== y);
        });
        if (stateChanged) {
            currentState = nextState;
            onChange.apply(void 0, currentState);
        }
    }
    var unsubscribe = store.subscribe(handleChange);
    handleChange();
    return unsubscribe;
}


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GraphQLError = __webpack_require__(37);

Object.defineProperty(exports, 'GraphQLError', {
  enumerable: true,
  get: function get() {
    return _GraphQLError.GraphQLError;
  }
});

var _syntaxError = __webpack_require__(246);

Object.defineProperty(exports, 'syntaxError', {
  enumerable: true,
  get: function get() {
    return _syntaxError.syntaxError;
  }
});

var _locatedError = __webpack_require__(245);

Object.defineProperty(exports, 'locatedError', {
  enumerable: true,
  get: function get() {
    return _locatedError.locatedError;
  }
});

var _formatError = __webpack_require__(244);

Object.defineProperty(exports, 'formatError', {
  enumerable: true,
  get: function get() {
    return _formatError.formatError;
  }
});

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = find;

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

function find(list, predicate) {
  for (var i = 0; i < list.length; i++) {
    if (predicate(list[i])) {
      return list[i];
    }
  }
}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keyValMap;

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Creates a keyed JS object from an array, given a function to produce the keys
 * and a function to produce the values from each item in the array.
 *
 *     const phoneBook = [
 *       { name: 'Jon', num: '555-1234' },
 *       { name: 'Jenny', num: '867-5309' }
 *     ]
 *
 *     // { Jon: '555-1234', Jenny: '867-5309' }
 *     const phonesByName = keyValMap(
 *       phoneBook,
 *       entry => entry.name,
 *       entry => entry.num
 *     )
 *
 */
function keyValMap(list, keyFn, valFn) {
  return list.reduce(function (map, item) {
    return map[keyFn(item)] = valFn(item), map;
  }, {});
}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.visit = visit;
exports.visitInParallel = visitInParallel;
exports.visitWithTypeInfo = visitWithTypeInfo;
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

var QueryDocumentKeys = exports.QueryDocumentKeys = {
  Name: [],

  Document: ['definitions'],
  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
  VariableDefinition: ['variable', 'type', 'defaultValue'],
  Variable: ['name'],
  SelectionSet: ['selections'],
  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
  Argument: ['name', 'value'],

  FragmentSpread: ['name', 'directives'],
  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
  FragmentDefinition: ['name', 'typeCondition', 'directives', 'selectionSet'],

  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ['values'],
  ObjectValue: ['fields'],
  ObjectField: ['name', 'value'],

  Directive: ['name', 'arguments'],

  NamedType: ['name'],
  ListType: ['type'],
  NonNullType: ['type'],

  SchemaDefinition: ['directives', 'operationTypes'],
  OperationTypeDefinition: ['type'],

  ScalarTypeDefinition: ['name', 'directives'],
  ObjectTypeDefinition: ['name', 'interfaces', 'directives', 'fields'],
  FieldDefinition: ['name', 'arguments', 'type', 'directives'],
  InputValueDefinition: ['name', 'type', 'defaultValue', 'directives'],
  InterfaceTypeDefinition: ['name', 'directives', 'fields'],
  UnionTypeDefinition: ['name', 'directives', 'types'],
  EnumTypeDefinition: ['name', 'directives', 'values'],
  EnumValueDefinition: ['name', 'directives'],
  InputObjectTypeDefinition: ['name', 'directives', 'fields'],

  TypeExtensionDefinition: ['definition'],

  DirectiveDefinition: ['name', 'arguments', 'locations']
};

var BREAK = exports.BREAK = {};

/**
 * visit() will walk through an AST using a depth first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 *     const editedAST = visit(ast, {
 *       enter(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: skip visiting this node
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       },
 *       leave(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: no action
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       }
 *     });
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to four permutations of
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node a specific kind.
 *
 *     visit(ast, {
 *       Kind(node) {
 *         // enter the "Kind" node
 *       }
 *     })
 *
 * 2) Named visitors that trigger upon entering and leaving a node of
 *    a specific kind.
 *
 *     visit(ast, {
 *       Kind: {
 *         enter(node) {
 *           // enter the "Kind" node
 *         }
 *         leave(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 *     visit(ast, {
 *       enter(node) {
 *         // enter any node
 *       },
 *       leave(node) {
 *         // leave any node
 *       }
 *     })
 *
 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
 *
 *     visit(ast, {
 *       enter: {
 *         Kind(node) {
 *           // enter the "Kind" node
 *         }
 *       },
 *       leave: {
 *         Kind(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 */
function visit(root, visitor, keyMap) {
  var visitorKeys = keyMap || QueryDocumentKeys;

  var stack = void 0;
  var inArray = Array.isArray(root);
  var keys = [root];
  var index = -1;
  var edits = [];
  var parent = void 0;
  var path = [];
  var ancestors = [];
  var newRoot = root;

  do {
    index++;
    var isLeaving = index === keys.length;
    var key = void 0;
    var node = void 0;
    var isEdited = isLeaving && edits.length !== 0;
    if (isLeaving) {
      key = ancestors.length === 0 ? undefined : path.pop();
      node = parent;
      parent = ancestors.pop();
      if (isEdited) {
        if (inArray) {
          node = node.slice();
        } else {
          var clone = {};
          for (var k in node) {
            if (node.hasOwnProperty(k)) {
              clone[k] = node[k];
            }
          }
          node = clone;
        }
        var editOffset = 0;
        for (var ii = 0; ii < edits.length; ii++) {
          var editKey = edits[ii][0];
          var editValue = edits[ii][1];
          if (inArray) {
            editKey -= editOffset;
          }
          if (inArray && editValue === null) {
            node.splice(editKey, 1);
            editOffset++;
          } else {
            node[editKey] = editValue;
          }
        }
      }
      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else {
      key = parent ? inArray ? index : keys[index] : undefined;
      node = parent ? parent[key] : newRoot;
      if (node === null || node === undefined) {
        continue;
      }
      if (parent) {
        path.push(key);
      }
    }

    var result = void 0;
    if (!Array.isArray(node)) {
      if (!isNode(node)) {
        throw new Error('Invalid AST Node: ' + JSON.stringify(node));
      }
      var visitFn = getVisitFn(visitor, node.kind, isLeaving);
      if (visitFn) {
        result = visitFn.call(visitor, node, key, parent, path, ancestors);

        if (result === BREAK) {
          break;
        }

        if (result === false) {
          if (!isLeaving) {
            path.pop();
            continue;
          }
        } else if (result !== undefined) {
          edits.push([key, result]);
          if (!isLeaving) {
            if (isNode(result)) {
              node = result;
            } else {
              path.pop();
              continue;
            }
          }
        }
      }
    }

    if (result === undefined && isEdited) {
      edits.push([key, node]);
    }

    if (!isLeaving) {
      stack = { inArray: inArray, index: index, keys: keys, edits: edits, prev: stack };
      inArray = Array.isArray(node);
      keys = inArray ? node : visitorKeys[node.kind] || [];
      index = -1;
      edits = [];
      if (parent) {
        ancestors.push(parent);
      }
      parent = node;
    }
  } while (stack !== undefined);

  if (edits.length !== 0) {
    newRoot = edits[edits.length - 1][1];
  }

  return newRoot;
}

function isNode(maybeNode) {
  return maybeNode && typeof maybeNode.kind === 'string';
}

/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */
function visitInParallel(visitors) {
  var skipping = new Array(visitors.length);

  return {
    enter: function enter(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (!skipping[i]) {
          var fn = getVisitFn(visitors[i], node.kind, /* isLeaving */false);
          if (fn) {
            var result = fn.apply(visitors[i], arguments);
            if (result === false) {
              skipping[i] = node;
            } else if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined) {
              return result;
            }
          }
        }
      }
    },
    leave: function leave(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (!skipping[i]) {
          var fn = getVisitFn(visitors[i], node.kind, /* isLeaving */true);
          if (fn) {
            var result = fn.apply(visitors[i], arguments);
            if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined && result !== false) {
              return result;
            }
          }
        } else if (skipping[i] === node) {
          skipping[i] = null;
        }
      }
    }
  };
}

/**
 * Creates a new visitor instance which maintains a provided TypeInfo instance
 * along with visiting visitor.
 */
function visitWithTypeInfo(typeInfo, visitor) {
  return {
    enter: function enter(node) {
      typeInfo.enter(node);
      var fn = getVisitFn(visitor, node.kind, /* isLeaving */false);
      if (fn) {
        var result = fn.apply(visitor, arguments);
        if (result !== undefined) {
          typeInfo.leave(node);
          if (isNode(result)) {
            typeInfo.enter(result);
          }
        }
        return result;
      }
    },
    leave: function leave(node) {
      var fn = getVisitFn(visitor, node.kind, /* isLeaving */true);
      var result = void 0;
      if (fn) {
        result = fn.apply(visitor, arguments);
      }
      typeInfo.leave(node);
      return result;
    }
  };
}

/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 */
function getVisitFn(visitor, kind, isLeaving) {
  var kindVisitor = visitor[kind];
  if (kindVisitor) {
    if (!isLeaving && typeof kindVisitor === 'function') {
      // { Kind() {} }
      return kindVisitor;
    }
    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;
    if (typeof kindSpecificVisitor === 'function') {
      // { Kind: { enter() {}, leave() {} } }
      return kindSpecificVisitor;
    }
  } else {
    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;
    if (specificVisitor) {
      if (typeof specificVisitor === 'function') {
        // { enter() {}, leave() {} }
        return specificVisitor;
      }
      var specificKindVisitor = specificVisitor[kind];
      if (typeof specificKindVisitor === 'function') {
        // { enter: { Kind() {} }, leave: { Kind() {} } }
        return specificKindVisitor;
      }
    }
  }
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertValidName = assertValidName;

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

var NAME_RX = /^[_a-zA-Z][_a-zA-Z0-9]*$/;

// Ensures console warnings are only issued once.
var hasWarnedAboutDunder = false;

/**
 * Upholds the spec rules about naming.
 */
function assertValidName(name, isIntrospection) {
  if (!name || typeof name !== 'string') {
    throw new Error('Must be named. Unexpected name: ' + name + '.');
  }
  if (!isIntrospection && name.slice(0, 2) === '__' && !hasWarnedAboutDunder) {
    hasWarnedAboutDunder = true;
    /* eslint-disable no-console */
    if (console && console.error) {
      var error = new Error('Name "' + name + '" must not begin with "__", which is reserved by ' + 'GraphQL introspection.');
      console.error(error.stack || String(error));
    }
    /* eslint-enable no-console */
  }
  if (!NAME_RX.test(name)) {
    throw new Error('Names must match /^[_a-zA-Z][_a-zA-Z0-9]*$/ but "' + name + '" does not.');
  }
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.astFromValue = astFromValue;

var _iterall = __webpack_require__(82);

var _invariant = __webpack_require__(10);

var _invariant2 = _interopRequireDefault(_invariant);

var _isNullish = __webpack_require__(27);

var _isNullish2 = _interopRequireDefault(_isNullish);

var _isInvalid = __webpack_require__(38);

var _isInvalid2 = _interopRequireDefault(_isInvalid);

var _kinds = __webpack_require__(17);

var _definition = __webpack_require__(6);

var _scalars = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Produces a GraphQL Value AST given a JavaScript value.
 *
 * A GraphQL type must be provided, which will be used to interpret different
 * JavaScript values.
 *
 * | JSON Value    | GraphQL Value        |
 * | ------------- | -------------------- |
 * | Object        | Input Object         |
 * | Array         | List                 |
 * | Boolean       | Boolean              |
 * | String        | String / Enum Value  |
 * | Number        | Int / Float          |
 * | Mixed         | Enum Value           |
 * | null          | NullValue            |
 *
 */
function astFromValue(value, type) {
  // Ensure flow knows that we treat function params as const.
  var _value = value;

  if (type instanceof _definition.GraphQLNonNull) {
    var astValue = astFromValue(_value, type.ofType);
    if (astValue && astValue.kind === _kinds.NULL) {
      return null;
    }
    return astValue;
  }

  // only explicit null, not undefined, NaN
  if (_value === null) {
    return { kind: _kinds.NULL };
  }

  // undefined, NaN
  if ((0, _isInvalid2.default)(_value)) {
    return null;
  }

  // Convert JavaScript array to GraphQL list. If the GraphQLType is a list, but
  // the value is not an array, convert the value using the list's item type.
  if (type instanceof _definition.GraphQLList) {
    var _ret = function () {
      var itemType = type.ofType;
      if ((0, _iterall.isCollection)(_value)) {
        var _ret2 = function () {
          var valuesNodes = [];
          (0, _iterall.forEach)(_value, function (item) {
            var itemNode = astFromValue(item, itemType);
            if (itemNode) {
              valuesNodes.push(itemNode);
            }
          });
          return {
            v: {
              v: { kind: _kinds.LIST, values: valuesNodes }
            }
          };
        }();

        if (typeof _ret2 === "object") return _ret2.v;
      }
      return {
        v: astFromValue(_value, itemType)
      };
    }();

    if (typeof _ret === "object") return _ret.v;
  }

  // Populate the fields of the input object by creating ASTs from each value
  // in the JavaScript object according to the fields in the input type.
  if (type instanceof _definition.GraphQLInputObjectType) {
    var _ret3 = function () {
      if (_value === null || typeof _value !== 'object') {
        return {
          v: null
        };
      }
      var fields = type.getFields();
      var fieldNodes = [];
      Object.keys(fields).forEach(function (fieldName) {
        var fieldType = fields[fieldName].type;
        var fieldValue = astFromValue(_value[fieldName], fieldType);
        if (fieldValue) {
          fieldNodes.push({
            kind: _kinds.OBJECT_FIELD,
            name: { kind: _kinds.NAME, value: fieldName },
            value: fieldValue
          });
        }
      });
      return {
        v: { kind: _kinds.OBJECT, fields: fieldNodes }
      };
    }();

    if (typeof _ret3 === "object") return _ret3.v;
  }

  (0, _invariant2.default)(type instanceof _definition.GraphQLScalarType || type instanceof _definition.GraphQLEnumType, 'Must provide Input Type, cannot use: ' + String(type));

  // Since value is an internally represented value, it must be serialized
  // to an externally represented value before converting into an AST.
  var serialized = type.serialize(_value);
  if ((0, _isNullish2.default)(serialized)) {
    return null;
  }

  // Others serialize based on their corresponding JavaScript scalar types.
  if (typeof serialized === 'boolean') {
    return { kind: _kinds.BOOLEAN, value: serialized };
  }

  // JavaScript numbers can be Int or Float values.
  if (typeof serialized === 'number') {
    var stringNum = String(serialized);
    return (/^[0-9]+$/.test(stringNum) ? { kind: _kinds.INT, value: stringNum } : { kind: _kinds.FLOAT, value: stringNum }
    );
  }

  if (typeof serialized === 'string') {
    // Enum types use Enum literals.
    if (type instanceof _definition.GraphQLEnumType) {
      return { kind: _kinds.ENUM, value: serialized };
    }

    // ID types can use Int literals.
    if (type === _scalars.GraphQLID && /^[0-9]+$/.test(serialized)) {
      return { kind: _kinds.INT, value: serialized };
    }

    // Use JSON stringify, which uses the same string encoding as GraphQL,
    // then remove the quotes.
    return {
      kind: _kinds.STRING,
      value: JSON.stringify(serialized).slice(1, -1)
    };
  }

  throw new TypeError('Cannot convert value to AST: ' + String(serialized));
}
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeFromAST = typeFromAST;

var _invariant = __webpack_require__(10);

var _invariant2 = _interopRequireDefault(_invariant);

var _kinds = __webpack_require__(17);

var _definition = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function typeFromAST(schema, typeNode) {
  var innerType = void 0;
  if (typeNode.kind === _kinds.LIST_TYPE) {
    innerType = typeFromAST(schema, typeNode.type);
    return innerType && new _definition.GraphQLList(innerType);
  }
  if (typeNode.kind === _kinds.NON_NULL_TYPE) {
    innerType = typeFromAST(schema, typeNode.type);
    return innerType && new _definition.GraphQLNonNull(innerType);
  }
  (0, _invariant2.default)(typeNode.kind === _kinds.NAMED_TYPE, 'Must be a named type.');
  return schema.getType(typeNode.name.value);
}
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

/***/ }),
/* 82 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2016, Lee Byron
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @ignore
 */

/**
 * [Iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterator)
 * is a *protocol* which describes a standard way to produce a sequence of
 * values, typically the values of the Iterable represented by this Iterator.
 *
 * While described by the [ES2015 version of JavaScript](http://www.ecma-international.org/ecma-262/6.0/#sec-iterator-interface)
 * it can be utilized by any version of JavaScript.
 *
 * @typedef {Object} Iterator
 * @template T The type of each iterated value
 * @property {function (): { value: T, done: boolean }} next
 *   A method which produces either the next value in a sequence or a result
 *   where the `done` property is `true` indicating the end of the Iterator.
 */

/**
 * [Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable)
 * is a *protocol* which when implemented allows a JavaScript object to define
 * their iteration behavior, such as what values are looped over in a `for..of`
 * loop or `iterall`'s `forEach` function. Many [built-in types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#Builtin_iterables)
 * implement the Iterable protocol, including `Array` and `Map`.
 *
 * While described by the [ES2015 version of JavaScript](http://www.ecma-international.org/ecma-262/6.0/#sec-iterable-interface)
 * it can be utilized by any version of JavaScript.
 *
 * @typedef {Object} Iterable
 * @template T The type of each iterated value
 * @property {function (): Iterator<T>} Symbol.iterator
 *   A method which produces an Iterator for this Iterable.
 */

// In ES2015 (or a polyfilled) environment, this will be Symbol.iterator
var SYMBOL_ITERATOR = typeof Symbol === 'function' && Symbol.iterator

/**
 * A property name to be used as the name of an Iterable's method responsible
 * for producing an Iterator, referred to as `@@iterator`. Typically represents
 * the value `Symbol.iterator` but falls back to the string `"@@iterator"` when
 * `Symbol.iterator` is not defined.
 *
 * Use `$$iterator` for defining new Iterables instead of `Symbol.iterator`,
 * but do not use it for accessing existing Iterables, instead use
 * `getIterator()` or `isIterable()`.
 *
 * @example
 *
 * var $$iterator = require('iterall').$$iterator
 *
 * function Counter (to) {
 *   this.to = to
 * }
 *
 * Counter.prototype[$$iterator] = function () {
 *   return {
 *     to: this.to,
 *     num: 0,
 *     next () {
 *       if (this.num >= this.to) {
 *         return { value: undefined, done: true }
 *       }
 *       return { value: this.num++, done: false }
 *     }
 *   }
 * }
 *
 * var counter = new Counter(3)
 * for (var number of counter) {
 *   console.log(number) // 0 ... 1 ... 2
 * }
 *
 * @type {Symbol|string}
 */
var $$iterator = SYMBOL_ITERATOR || '@@iterator'
exports.$$iterator = $$iterator

/**
 * Returns true if the provided object implements the Iterator protocol via
 * either implementing a `Symbol.iterator` or `"@@iterator"` method.
 *
 * @example
 *
 * var isIterable = require('iterall').isIterable
 * isIterable([ 1, 2, 3 ]) // true
 * isIterable('ABC') // true
 * isIterable({ length: 1, 0: 'Alpha' }) // false
 * isIterable({ key: 'value' }) // false
 * isIterable(new Map()) // true
 *
 * @param obj
 *   A value which might implement the Iterable protocol.
 * @return {boolean} true if Iterable.
 */
function isIterable (obj) {
  return !!getIteratorMethod(obj)
}
exports.isIterable = isIterable

/**
 * Returns true if the provided object implements the Array-like protocol via
 * defining a positive-integer `length` property.
 *
 * @example
 *
 * var isArrayLike = require('iterall').isArrayLike
 * isArrayLike([ 1, 2, 3 ]) // true
 * isArrayLike('ABC') // true
 * isArrayLike({ length: 1, 0: 'Alpha' }) // true
 * isArrayLike({ key: 'value' }) // false
 * isArrayLike(new Map()) // false
 *
 * @param obj
 *   A value which might implement the Array-like protocol.
 * @return {boolean} true if Array-like.
 */
function isArrayLike (obj) {
  var length = obj != null && obj.length
  return typeof length === 'number' && length >= 0 && length % 1 === 0
}
exports.isArrayLike = isArrayLike

/**
 * Returns true if the provided object is an Object (i.e. not a string literal)
 * and is either Iterable or Array-like.
 *
 * This may be used in place of [Array.isArray()][isArray] to determine if an
 * object should be iterated-over. It always excludes string literals and
 * includes Arrays (regardless of if it is Iterable). It also includes other
 * Array-like objects such as NodeList, TypedArray, and Buffer.
 *
 * @example
 *
 * var isCollection = require('iterall').isCollection
 * isCollection([ 1, 2, 3 ]) // true
 * isCollection('ABC') // false
 * isCollection({ length: 1, 0: 'Alpha' }) // true
 * isCollection({ key: 'value' }) // false
 * isCollection(new Map()) // true
 *
 * @example
 *
 * var forEach = require('iterall').forEach
 * if (isCollection(obj)) {
 *   forEach(obj, function (value) {
 *     console.log(value)
 *   })
 * }
 *
 * @param obj
 *   An Object value which might implement the Iterable or Array-like protocols.
 * @return {boolean} true if Iterable or Array-like Object.
 */
function isCollection (obj) {
  return Object(obj) === obj && (isArrayLike(obj) || isIterable(obj))
}
exports.isCollection = isCollection

/**
 * If the provided object implements the Iterator protocol, its Iterator object
 * is returned. Otherwise returns undefined.
 *
 * @example
 *
 * var getIterator = require('iterall').getIterator
 * var iterator = getIterator([ 1, 2, 3 ])
 * iterator.next() // { value: 1, done: false }
 * iterator.next() // { value: 2, done: false }
 * iterator.next() // { value: 3, done: false }
 * iterator.next() // { value: undefined, done: true }
 *
 * @template T the type of each iterated value
 * @param {Iterable<T>} iterable
 *   An Iterable object which is the source of an Iterator.
 * @return {Iterator<T>} new Iterator instance.
 */
function getIterator (iterable) {
  var method = getIteratorMethod(iterable)
  if (method) {
    return method.call(iterable)
  }
}
exports.getIterator = getIterator

/**
 * If the provided object implements the Iterator protocol, the method
 * responsible for producing its Iterator object is returned.
 *
 * This is used in rare cases for performance tuning. This method must be called
 * with obj as the contextual this-argument.
 *
 * @example
 *
 * var getIteratorMethod = require('iterall').getIteratorMethod
 * var myArray = [ 1, 2, 3 ]
 * var method = getIteratorMethod(myArray)
 * if (method) {
 *   var iterator = method.call(myArray)
 * }
 *
 * @template T the type of each iterated value
 * @param {Iterable<T>} iterable
 *   An Iterable object which defines an `@@iterator` method.
 * @return {function(): Iterator<T>} `@@iterator` method.
 */
function getIteratorMethod (iterable) {
  if (iterable != null) {
    var method = SYMBOL_ITERATOR && iterable[SYMBOL_ITERATOR] || iterable['@@iterator']
    if (typeof method === 'function') {
      return method
    }
  }
}
exports.getIteratorMethod = getIteratorMethod

/**
 * Given an object which either implements the Iterable protocol or is
 * Array-like, iterate over it, calling the `callback` at each iteration.
 *
 * Use `forEach` where you would expect to use a `for ... of` loop in ES6.
 * However `forEach` adheres to the behavior of [Array#forEach][] described in
 * the ECMAScript specification, skipping over "holes" in Array-likes. It will
 * also delegate to a `forEach` method on `collection` if one is defined,
 * ensuring native performance for `Arrays`.
 *
 * Similar to [Array#forEach][], the `callback` function accepts three
 * arguments, and is provided with `thisArg` as the calling context.
 *
 * Note: providing an infinite Iterator to forEach will produce an error.
 *
 * [Array#forEach]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 *
 * @example
 *
 * var forEach = require('iterall').forEach
 *
 * forEach(myIterable, function (value, index, iterable) {
 *   console.log(value, index, iterable === myIterable)
 * })
 *
 * @example
 *
 * // ES6:
 * for (let value of myIterable) {
 *   console.log(value)
 * }
 *
 * // Any JavaScript environment:
 * forEach(myIterable, function (value) {
 *   console.log(value)
 * })
 *
 * @template T the type of each iterated value
 * @param {Iterable<T>|{ length: number }} collection
 *   The Iterable or array to iterate over.
 * @param {function(T, number, object)} callback
 *   Function to execute for each iteration, taking up to three arguments
 * @param [thisArg]
 *   Optional. Value to use as `this` when executing `callback`.
 */
function forEach (collection, callback, thisArg) {
  if (collection != null) {
    if (typeof collection.forEach === 'function') {
      return collection.forEach(callback, thisArg)
    }
    var i = 0
    var iterator = getIterator(collection)
    if (iterator) {
      var step
      while (!(step = iterator.next()).done) {
        callback.call(thisArg, step.value, i++, collection)
        // Infinite Iterators could cause forEach to run forever.
        // After a very large number of iterations, produce an error.
        /* istanbul ignore if */
        if (i > 9999999) {
          throw new TypeError('Near-infinite iteration.')
        }
      }
    } else if (isArrayLike(collection)) {
      for (; i < collection.length; i++) {
        if (collection.hasOwnProperty(i)) {
          callback.call(thisArg, collection[i], i, collection)
        }
      }
    }
  }
}
exports.forEach = forEach

/**
 * Similar to `getIterator()`, this method returns a new Iterator given an
 * Iterable. However it will also create an Iterator for a non-Iterable
 * Array-like collection, such as Array in a non-ES2015 environment.
 *
 * `createIterator` is complimentary to `forEach`, but allows a "pull"-based
 * iteration as opposed to `forEach`'s "push"-based iteration.
 *
 * `createIterator` produces an Iterator for Array-likes with the same behavior
 * as ArrayIteratorPrototype described in the ECMAScript specification, and
 * does *not* skip over "holes".
 *
 * @example
 *
 * var createIterator = require('iterall').createIterator
 *
 * var myArraylike = { length: 3, 0: 'Alpha', 1: 'Bravo', 2: 'Charlie' }
 * var iterator = createIterator(myArraylike)
 * iterator.next() // { value: 'Alpha', done: false }
 * iterator.next() // { value: 'Bravo', done: false }
 * iterator.next() // { value: 'Charlie', done: false }
 * iterator.next() // { value: undefined, done: true }
 *
 * @template T the type of each iterated value
 * @param {Iterable<T>|{ length: number }} collection
 *   An Iterable or Array-like object to produce an Iterator.
 * @return {Iterator<T>} new Iterator instance.
 */
function createIterator (collection) {
  if (collection != null) {
    var iterator = getIterator(collection)
    if (iterator) {
      return iterator
    }
    if (isArrayLike(collection)) {
      return new ArrayLikeIterator(collection)
    }
  }
}
exports.createIterator = createIterator

// When the object provided to `createIterator` is not Iterable but is
// Array-like, this simple Iterator is created.
function ArrayLikeIterator (obj) {
  this._o = obj
  this._i = 0
}

// Note: all Iterators are themselves Iterable.
ArrayLikeIterator.prototype[$$iterator] = function () {
  return this
}

// A simple state-machine determines the IteratorResult returned, yielding
// each value in the Array-like object in order of their indicies.
ArrayLikeIterator.prototype.next = function () {
  if (this._o === void 0 || this._i >= this._o.length) {
    this._o = void 0
    return { value: void 0, done: true }
  }
  return { value: this._o[this._i++], done: false }
}


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(19);
var _curry2 = __webpack_require__(0);
var _reduce = __webpack_require__(18);
var map = __webpack_require__(15);


/**
 * ap applies a list of functions to a list of values.
 *
 * Dispatches to the `ap` method of the second argument, if present. Also
 * treats curried functions as applicatives.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig [a -> b] -> [a] -> [b]
 * @sig Apply f => f (a -> b) -> f a -> f b
 * @param {Array} fns An array of functions
 * @param {Array} vs An array of values
 * @return {Array} An array of results of applying each of `fns` to all of `vs` in turn.
 * @example
 *
 *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
 *      R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
 * @symb R.ap([f, g], [a, b]) = [f(a), f(b), g(a), g(b)]
 */
module.exports = _curry2(function ap(applicative, fn) {
  return (
    typeof applicative.ap === 'function' ?
      applicative.ap(fn) :
    typeof applicative === 'function' ?
      function(x) { return applicative(x)(fn(x)); } :
    // else
      _reduce(function(acc, f) { return _concat(acc, map(f, fn)); }, [], applicative)
  );
});


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(4);
var _makeFlat = __webpack_require__(142);
var _xchain = __webpack_require__(337);
var map = __webpack_require__(15);


/**
 * `chain` maps a function over a list and concatenates the results. `chain`
 * is also known as `flatMap` in some libraries
 *
 * Dispatches to the `chain` method of the second argument, if present,
 * according to the [FantasyLand Chain spec](https://github.com/fantasyland/fantasy-land#chain).
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain m => (a -> m b) -> m a -> m b
 * @param {Function} fn The function to map with
 * @param {Array} list The list to map over
 * @return {Array} The result of flat-mapping `list` with `fn`
 * @example
 *
 *      var duplicate = n => [n, n];
 *      R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
 *
 *      R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]
 */
module.exports = _curry2(_dispatchable(['chain'], _xchain, function chain(fn, monad) {
  if (typeof monad === 'function') {
    return function(x) { return fn(monad(x))(x); };
  }
  return _makeFlat(false)(map(fn, monad));
}));


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _isArray = __webpack_require__(25);
var _isFunction = __webpack_require__(59);
var toString = __webpack_require__(50);


/**
 * Returns the result of concatenating the given lists or strings.
 *
 * Note: `R.concat` expects both arguments to be of the same type,
 * unlike the native `Array.prototype.concat` method. It will throw
 * an error if you `concat` an Array with a non-Array value.
 *
 * Dispatches to the `concat` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @sig String -> String -> String
 * @param {Array|String} firstList The first list
 * @param {Array|String} secondList The second list
 * @return {Array|String} A list consisting of the elements of `firstList` followed by the elements of
 * `secondList`.
 *
 * @example
 *
 *      R.concat('ABC', 'DEF'); // 'ABCDEF'
 *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 *      R.concat([], []); //=> []
 */
module.exports = _curry2(function concat(a, b) {
  if (a == null || !_isFunction(a.concat)) {
    throw new TypeError(toString(a) + ' does not have a method named "concat"');
  }
  if (_isArray(a) && !_isArray(b)) {
    throw new TypeError(toString(b) + ' is not an array');
  }
  return a.concat(b);
});


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns a new object that does not contain a `prop` property.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Object
 * @sig String -> {k: v} -> {k: v}
 * @param {String} prop The name of the property to dissociate
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original but without the specified property
 * @see R.assoc
 * @example
 *
 *      R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
 */
module.exports = _curry2(function dissoc(prop, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  delete result[prop];
  return result;
});


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(4);
var _filter = __webpack_require__(136);
var _isObject = __webpack_require__(141);
var _reduce = __webpack_require__(18);
var _xfilter = __webpack_require__(342);
var keys = __webpack_require__(20);


/**
 * Takes a predicate and a "filterable", and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      var isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
module.exports = _curry2(_dispatchable(['filter'], _xfilter, function(pred, filterable) {
  return (
    _isObject(filterable) ?
      _reduce(function(acc, key) {
        if (pred(filterable[key])) {
          acc[key] = filterable[key];
        }
        return acc;
      }, {}, keys(filterable)) :
    // else
      _filter(pred, filterable)
  );
}));


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var _identity = __webpack_require__(91);


/**
 * A function that does nothing but return the parameter supplied to it. Good
 * as a default or placeholder function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> a
 * @param {*} x The value to return.
 * @return {*} The input value, `x`.
 * @example
 *
 *      R.identity(1); //=> 1
 *
 *      var obj = {};
 *      R.identity(obj) === obj; //=> true
 * @symb R.identity(a) = a
 */
module.exports = _curry1(_identity);


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var _objectAssign = __webpack_require__(327);

module.exports =
  typeof Object.assign === 'function' ? Object.assign : _objectAssign;


/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = function _containsWith(pred, x, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
};


/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = function _identity(x) { return x; };


/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = function _isTransformer(obj) {
  return typeof obj['@@transducer/step'] === 'function';
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig s -> {s: a} -> a | Undefined
 * @param {String} p The property name
 * @param {Object} obj The object to query
 * @return {*} The value at `obj.p`.
 * @see R.path
 * @example
 *
 *      R.prop('x', {x: 100}); //=> 100
 *      R.prop('x', {}); //=> undefined
 */
module.exports = _curry2(function prop(p, obj) { return obj[p]; });


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var _checkForMethod = __webpack_require__(44);
var _curry1 = __webpack_require__(1);
var slice = __webpack_require__(30);


/**
 * Returns all but the first element of the given list or string (or object
 * with a `tail` method).
 *
 * Dispatches to the `slice` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.head, R.init, R.last
 * @example
 *
 *      R.tail([1, 2, 3]);  //=> [2, 3]
 *      R.tail([1, 2]);     //=> [2]
 *      R.tail([1]);        //=> []
 *      R.tail([]);         //=> []
 *
 *      R.tail('abc');  //=> 'bc'
 *      R.tail('ab');   //=> 'b'
 *      R.tail('a');    //=> ''
 *      R.tail('');     //=> ''
 */
module.exports = _curry1(_checkForMethod('tail', slice(1, Infinity)));


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);


/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig (* -> {*}) -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 */
module.exports = _curry1(function type(val) {
  return val === null      ? 'Null'      :
         val === undefined ? 'Undefined' :
         Object.prototype.toString.call(val).slice(8, -1);
});


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(88);
var uniqBy = __webpack_require__(168);


/**
 * Returns a new list containing only one copy of each element in the original
 * list. `R.equals` is used to determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniq([1, 1, 2, 1]); //=> [1, 2]
 *      R.uniq([1, '1']);     //=> [1, '1']
 *      R.uniq([[42], [42]]); //=> [[42]]
 */
module.exports = uniqBy(identity);


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var _containsWith = __webpack_require__(90);
var _curry2 = __webpack_require__(0);


/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied predicate to
 * two list elements. Prefers the first item if two items compare equal based
 * on the predicate.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category List
 * @sig (a, a -> Boolean) -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      var strEq = R.eqBy(String);
 *      R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
 *      R.uniqWith(strEq)([{}, {}]);       //=> [{}]
 *      R.uniqWith(strEq)([1, '1', 1]);    //=> [1]
 *      R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']
 */
module.exports = _curry2(function uniqWith(pred, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  var item;
  while (idx < len) {
    item = list[idx];
    if (!_containsWith(pred, item, result)) {
      result[result.length] = item;
    }
    idx += 1;
  }
  return result;
});


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(259);

exports.default = {
  getMousePosition: function getMousePosition(event) {
    return {
      x: event.pageX - (window.scrollX || window.pageXOffset),
      y: event.pageY - (window.scrollY || window.pageYOffset)
    };
  },
  getTouchPosition: function getTouchPosition(event) {
    return {
      x: event.touches[0].pageX - (window.scrollX || window.pageXOffset),
      y: event.touches[0].pageY - (window.scrollY || window.pageYOffset)
    };
  },
  pauseEvent: function pauseEvent(event) {
    event.stopPropagation();
    event.preventDefault();
  },
  addEventsToDocument: function addEventsToDocument(eventMap) {
    Object.keys(eventMap).forEach(function (key) {
      document.addEventListener(key, eventMap[key], false);
    });
  },
  removeEventsFromDocument: function removeEventsFromDocument(eventMap) {
    Object.keys(eventMap).forEach(function (key) {
      document.removeEventListener(key, eventMap[key], false);
    });
  },
  targetIsDescendant: function targetIsDescendant(event, parent) {
    var node = event.target;
    while (node !== null) {
      if (node === parent) return true;
      node = node.parentNode;
    }
    return false;
  },
  addEventListenerOnTransitionEnded: function addEventListenerOnTransitionEnded(element, fn) {
    var eventName = transitionEventNamesFor(element);
    if (!eventName) return false;
    element.addEventListener(eventName, fn);
    return true;
  },
  removeEventListenerOnTransitionEnded: function removeEventListenerOnTransitionEnded(element, fn) {
    var eventName = transitionEventNamesFor(element);
    if (!eventName) return false;
    element.removeEventListener(eventName, fn);
    return true;
  }
};


var TRANSITIONS = {
  transition: 'transitionend',
  OTransition: 'oTransitionEnd',
  MozTransition: 'transitionend',
  WebkitTransition: 'webkitTransitionEnd'
};

function transitionEventNamesFor(element) {
  return (0, _ramda.values)(TRANSITIONS).reduce(function (result, transition) {
    return !result && element && element.style[transition] !== undefined ? TRANSITIONS[transition] : result;
  });
}

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_button__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icons_remove_red_eye_svg__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FocusTypeButton_css__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FocusTypeButton_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__FocusTypeButton_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions___ = __webpack_require__(9);






function FocusTypeButton(props) {
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_button__["IconButton"], { className: "eye-button", onClick: function () { return props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions___["C" /* focusElement */])(props.type.id)); } },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__icons_remove_red_eye_svg__["a" /* default */], null)));
}
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])()(FocusTypeButton);


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reselect__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__introspection___ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__type_graph__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDotSelector; });




var template = __webpack_require__(215);
function getDot(typeGraph) {
    if (typeGraph === null)
        return null;
    if (typeGraph.hideRoot) {
        delete typeGraph.nodes[typeGraph.rootId];
    }
    return template({ _: __WEBPACK_IMPORTED_MODULE_0_lodash__, typeGraph: typeGraph, stringifyWrappers: __WEBPACK_IMPORTED_MODULE_2__introspection___["d" /* stringifyWrappers */] });
}
var getDotSelector = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_reselect__["createSelector"])(__WEBPACK_IMPORTED_MODULE_3__type_graph__["c" /* getTypeGraphSelector */], getDot);


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reselect__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__introspection___ = __webpack_require__(24);
/* harmony export (immutable) */ __webpack_exports__["b"] = isNode;
/* harmony export (immutable) */ __webpack_exports__["a"] = getDefaultRoot;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getTypeGraphSelector; });



function isNode(type) {
    return !(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__introspection___["e" /* isScalarType */])(type) ||
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__introspection___["f" /* isInputObjectType */])(type) ||
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__introspection___["g" /* isSystemType */])(type) ||
        type.isRelayType);
}
function getDefaultRoot(schema) {
    console.log('getting default root', schema);
    return schema.queryType.id;
}
function getTypeGraph(schema, rootTypeId, hideRoot) {
    if (schema === null)
        return null;
    return buildGraph(rootTypeId || getDefaultRoot(schema));
    function getEdgeTargets(type) {
        return __WEBPACK_IMPORTED_MODULE_0_lodash__(__WEBPACK_IMPORTED_MODULE_0_lodash__["values"](type.fields).concat(type.derivedTypes || [], type.possibleTypes || []))
            .map('type')
            .filter(isNode)
            .map('id')
            .value();
    }
    function buildGraph(rootId) {
        var typeIds = [rootId];
        var nodes = [];
        var types = __WEBPACK_IMPORTED_MODULE_0_lodash__["keyBy"](schema.types, 'id');
        for (var i = 0; i < typeIds.length; ++i) {
            var id = typeIds[i];
            if (typeIds.indexOf(id) < i)
                continue;
            var type = types[id];
            nodes.push(type);
            typeIds.push.apply(typeIds, getEdgeTargets(type));
        }
        var graph = {
            rootId: rootId,
            nodes: __WEBPACK_IMPORTED_MODULE_0_lodash__["keyBy"](nodes, 'id'),
            hideRoot: hideRoot,
        };
        return graph;
    }
}
var getTypeGraphSelector = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_reselect__["createSelector"])(__WEBPACK_IMPORTED_MODULE_2__introspection___["c" /* getSchemaSelector */], function (state) { return state.displayOptions.rootTypeId; }, function (state) { return state.displayOptions.hideRoot; }, getTypeGraph);


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony export (immutable) */ __webpack_exports__["b"] = stringifyWrappers;
/* unused harmony export buildId */
/* harmony export (immutable) */ __webpack_exports__["a"] = typeNameToId;
/* harmony export (immutable) */ __webpack_exports__["f"] = extractTypeId;
/* harmony export (immutable) */ __webpack_exports__["e"] = isSystemType;
/* harmony export (immutable) */ __webpack_exports__["g"] = isBuiltInScalarType;
/* harmony export (immutable) */ __webpack_exports__["c"] = isScalarType;
/* unused harmony export isObjectType */
/* harmony export (immutable) */ __webpack_exports__["d"] = isInputObjectType;

function stringifyWrappers(wrappers) {
    return __WEBPACK_IMPORTED_MODULE_0_lodash__["reduce"](wrappers, function (_a, wrapper) {
        var left = _a[0], right = _a[1];
        switch (wrapper) {
            case 'NON_NULL':
                return [left, right + '!'];
            case 'LIST':
                return ['[' + left, right + ']'];
        }
    }, ['', '']);
}
function buildId() {
    var parts = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parts[_i] = arguments[_i];
    }
    return parts.join('::');
}
function typeNameToId(name) {
    return buildId('TYPE', name);
}
function extractTypeId(id) {
    var _a = id.split('::'), type = _a[1];
    return buildId('TYPE', type);
}
function isSystemType(type) {
    return __WEBPACK_IMPORTED_MODULE_0_lodash__["startsWith"](type.name, '__');
}
function isBuiltInScalarType(type) {
    return [
        'Int',
        'Float',
        'String',
        'Boolean',
        'ID'
    ].indexOf(type.name) !== -1;
}
function isScalarType(type) {
    return (type.kind === 'SCALAR' || type.kind === 'ENUM');
}
function isObjectType(type) {
    return (type.kind === 'OBJECT');
}
function isInputObjectType(type) {
    return (type.kind === 'INPUT_OBJECT');
}


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selected__ = __webpack_require__(208);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__selected__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__selected__["b"]; });



/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", _extends({ height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" }, this.props), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }));
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = SVG;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TokenKind = undefined;
exports.createLexer = createLexer;
exports.getTokenDesc = getTokenDesc;

var _error = __webpack_require__(75);

/**
 * Given a Source object, this returns a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */
function createLexer(source, options) {
  var startOfFileToken = new Tok(SOF, 0, 0, 0, 0, null);
  var lexer = {
    source: source,
    options: options,
    lastToken: startOfFileToken,
    token: startOfFileToken,
    line: 1,
    lineStart: 0,
    advance: advanceLexer
  };
  return lexer;
} /*  /
  /**
   *  Copyright (c) 2015, Facebook, Inc.
   *  All rights reserved.
   *
   *  This source code is licensed under the BSD-style license found in the
   *  LICENSE file in the root directory of this source tree. An additional grant
   *  of patent rights can be found in the PATENTS file in the same directory.
   */

function advanceLexer() {
  var token = this.lastToken = this.token;
  if (token.kind !== EOF) {
    do {
      token = token.next = readToken(this, token);
    } while (token.kind === COMMENT);
    this.token = token;
  }
  return token;
}

/**
 * The return type of createLexer.
 */


// Each kind of token.
var SOF = '<SOF>';
var EOF = '<EOF>';
var BANG = '!';
var DOLLAR = '$';
var PAREN_L = '(';
var PAREN_R = ')';
var SPREAD = '...';
var COLON = ':';
var EQUALS = '=';
var AT = '@';
var BRACKET_L = '[';
var BRACKET_R = ']';
var BRACE_L = '{';
var PIPE = '|';
var BRACE_R = '}';
var NAME = 'Name';
var INT = 'Int';
var FLOAT = 'Float';
var STRING = 'String';
var COMMENT = 'Comment';

/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */
var TokenKind = exports.TokenKind = {
  SOF: SOF,
  EOF: EOF,
  BANG: BANG,
  DOLLAR: DOLLAR,
  PAREN_L: PAREN_L,
  PAREN_R: PAREN_R,
  SPREAD: SPREAD,
  COLON: COLON,
  EQUALS: EQUALS,
  AT: AT,
  BRACKET_L: BRACKET_L,
  BRACKET_R: BRACKET_R,
  BRACE_L: BRACE_L,
  PIPE: PIPE,
  BRACE_R: BRACE_R,
  NAME: NAME,
  INT: INT,
  FLOAT: FLOAT,
  STRING: STRING,
  COMMENT: COMMENT
};

/**
 * A helper function to describe a token as a string for debugging
 */
function getTokenDesc(token) {
  var value = token.value;
  return value ? token.kind + ' "' + value + '"' : token.kind;
}

var charCodeAt = String.prototype.charCodeAt;
var slice = String.prototype.slice;

/**
 * Helper function for constructing the Token object.
 */
function Tok(kind, start, end, line, column, prev, value) {
  this.kind = kind;
  this.start = start;
  this.end = end;
  this.line = line;
  this.column = column;
  this.value = value;
  this.prev = prev;
  this.next = null;
}

// Print a simplified form when appearing in JSON/util.inspect.
Tok.prototype.toJSON = Tok.prototype.inspect = function toJSON() {
  return {
    kind: this.kind,
    value: this.value,
    line: this.line,
    column: this.column
  };
};

function printCharCode(code) {
  return (
    // NaN/undefined represents access beyond the end of the file.
    isNaN(code) ? EOF :
    // Trust JSON for ASCII.
    code < 0x007F ? JSON.stringify(String.fromCharCode(code)) :
    // Otherwise print the escaped form.
    '"\\u' + ('00' + code.toString(16).toUpperCase()).slice(-4) + '"'
  );
}

/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace and comments until it finds the next lexable
 * token, then lexes punctuators immediately or calls the appropriate helper
 * function for more complicated tokens.
 */
function readToken(lexer, prev) {
  var source = lexer.source;
  var body = source.body;
  var bodyLength = body.length;

  var position = positionAfterWhitespace(body, prev.end, lexer);
  var line = lexer.line;
  var col = 1 + position - lexer.lineStart;

  if (position >= bodyLength) {
    return new Tok(EOF, bodyLength, bodyLength, line, col, prev);
  }

  var code = charCodeAt.call(body, position);

  // SourceCharacter
  if (code < 0x0020 && code !== 0x0009 && code !== 0x000A && code !== 0x000D) {
    throw (0, _error.syntaxError)(source, position, 'Cannot contain the invalid character ' + printCharCode(code) + '.');
  }

  switch (code) {
    // !
    case 33:
      return new Tok(BANG, position, position + 1, line, col, prev);
    // #
    case 35:
      return readComment(source, position, line, col, prev);
    // $
    case 36:
      return new Tok(DOLLAR, position, position + 1, line, col, prev);
    // (
    case 40:
      return new Tok(PAREN_L, position, position + 1, line, col, prev);
    // )
    case 41:
      return new Tok(PAREN_R, position, position + 1, line, col, prev);
    // .
    case 46:
      if (charCodeAt.call(body, position + 1) === 46 && charCodeAt.call(body, position + 2) === 46) {
        return new Tok(SPREAD, position, position + 3, line, col, prev);
      }
      break;
    // :
    case 58:
      return new Tok(COLON, position, position + 1, line, col, prev);
    // =
    case 61:
      return new Tok(EQUALS, position, position + 1, line, col, prev);
    // @
    case 64:
      return new Tok(AT, position, position + 1, line, col, prev);
    // [
    case 91:
      return new Tok(BRACKET_L, position, position + 1, line, col, prev);
    // ]
    case 93:
      return new Tok(BRACKET_R, position, position + 1, line, col, prev);
    // {
    case 123:
      return new Tok(BRACE_L, position, position + 1, line, col, prev);
    // |
    case 124:
      return new Tok(PIPE, position, position + 1, line, col, prev);
    // }
    case 125:
      return new Tok(BRACE_R, position, position + 1, line, col, prev);
    // A-Z _ a-z
    case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:
    case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:
    case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:
    case 89:case 90:
    case 95:
    case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:
    case 105:case 106:case 107:case 108:case 109:case 110:case 111:
    case 112:case 113:case 114:case 115:case 116:case 117:case 118:
    case 119:case 120:case 121:case 122:
      return readName(source, position, line, col, prev);
    // - 0-9
    case 45:
    case 48:case 49:case 50:case 51:case 52:
    case 53:case 54:case 55:case 56:case 57:
      return readNumber(source, position, code, line, col, prev);
    // "
    case 34:
      return readString(source, position, line, col, prev);
  }

  throw (0, _error.syntaxError)(source, position, unexpectedCharacterMessage(code));
}

/**
 * Report a message that an unexpected character was encountered.
 */
function unexpectedCharacterMessage(code) {
  if (code === 39) {
    // '
    return 'Unexpected single quote character (\'), did you mean to use ' + 'a double quote (")?';
  }

  return 'Cannot parse the unexpected character ' + printCharCode(code) + '.';
}

/**
 * Reads from body starting at startPosition until it finds a non-whitespace
 * or commented character, then returns the position of that character for
 * lexing.
 */
function positionAfterWhitespace(body, startPosition, lexer) {
  var bodyLength = body.length;
  var position = startPosition;
  while (position < bodyLength) {
    var code = charCodeAt.call(body, position);
    // tab | space | comma | BOM
    if (code === 9 || code === 32 || code === 44 || code === 0xFEFF) {
      ++position;
    } else if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (charCodeAt.call(body, position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }
      ++lexer.line;
      lexer.lineStart = position;
    } else {
      break;
    }
  }
  return position;
}

/**
 * Reads a comment token from the source file.
 *
 * #[\u0009\u0020-\uFFFF]*
 */
function readComment(source, start, line, col, prev) {
  var body = source.body;
  var code = void 0;
  var position = start;

  do {
    code = charCodeAt.call(body, ++position);
  } while (code !== null && (
  // SourceCharacter but not LineTerminator
  code > 0x001F || code === 0x0009));

  return new Tok(COMMENT, start, position, line, col, prev, slice.call(body, start + 1, position));
}

/**
 * Reads a number token from the source file, either a float
 * or an int depending on whether a decimal point appears.
 *
 * Int:   -?(0|[1-9][0-9]*)
 * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
 */
function readNumber(source, start, firstCode, line, col, prev) {
  var body = source.body;
  var code = firstCode;
  var position = start;
  var isFloat = false;

  if (code === 45) {
    // -
    code = charCodeAt.call(body, ++position);
  }

  if (code === 48) {
    // 0
    code = charCodeAt.call(body, ++position);
    if (code >= 48 && code <= 57) {
      throw (0, _error.syntaxError)(source, position, 'Invalid number, unexpected digit after 0: ' + printCharCode(code) + '.');
    }
  } else {
    position = readDigits(source, position, code);
    code = charCodeAt.call(body, position);
  }

  if (code === 46) {
    // .
    isFloat = true;

    code = charCodeAt.call(body, ++position);
    position = readDigits(source, position, code);
    code = charCodeAt.call(body, position);
  }

  if (code === 69 || code === 101) {
    // E e
    isFloat = true;

    code = charCodeAt.call(body, ++position);
    if (code === 43 || code === 45) {
      // + -
      code = charCodeAt.call(body, ++position);
    }
    position = readDigits(source, position, code);
  }

  return new Tok(isFloat ? FLOAT : INT, start, position, line, col, prev, slice.call(body, start, position));
}

/**
 * Returns the new position in the source after reading digits.
 */
function readDigits(source, start, firstCode) {
  var body = source.body;
  var position = start;
  var code = firstCode;
  if (code >= 48 && code <= 57) {
    // 0 - 9
    do {
      code = charCodeAt.call(body, ++position);
    } while (code >= 48 && code <= 57); // 0 - 9
    return position;
  }
  throw (0, _error.syntaxError)(source, position, 'Invalid number, expected digit but got: ' + printCharCode(code) + '.');
}

/**
 * Reads a string token from the source file.
 *
 * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
 */
function readString(source, start, line, col, prev) {
  var body = source.body;
  var position = start + 1;
  var chunkStart = position;
  var code = 0;
  var value = '';

  while (position < body.length && (code = charCodeAt.call(body, position)) !== null &&
  // not LineTerminator
  code !== 0x000A && code !== 0x000D &&
  // not Quote (")
  code !== 34) {
    // SourceCharacter
    if (code < 0x0020 && code !== 0x0009) {
      throw (0, _error.syntaxError)(source, position, 'Invalid character within String: ' + printCharCode(code) + '.');
    }

    ++position;
    if (code === 92) {
      // \
      value += slice.call(body, chunkStart, position - 1);
      code = charCodeAt.call(body, position);
      switch (code) {
        case 34:
          value += '"';break;
        case 47:
          value += '/';break;
        case 92:
          value += '\\';break;
        case 98:
          value += '\b';break;
        case 102:
          value += '\f';break;
        case 110:
          value += '\n';break;
        case 114:
          value += '\r';break;
        case 116:
          value += '\t';break;
        case 117:
          // u
          var charCode = uniCharCode(charCodeAt.call(body, position + 1), charCodeAt.call(body, position + 2), charCodeAt.call(body, position + 3), charCodeAt.call(body, position + 4));
          if (charCode < 0) {
            throw (0, _error.syntaxError)(source, position, 'Invalid character escape sequence: ' + ('\\u' + body.slice(position + 1, position + 5) + '.'));
          }
          value += String.fromCharCode(charCode);
          position += 4;
          break;
        default:
          throw (0, _error.syntaxError)(source, position, 'Invalid character escape sequence: \\' + String.fromCharCode(code) + '.');
      }
      ++position;
      chunkStart = position;
    }
  }

  if (code !== 34) {
    // quote (")
    throw (0, _error.syntaxError)(source, position, 'Unterminated string.');
  }

  value += slice.call(body, chunkStart, position);
  return new Tok(STRING, start, position + 1, line, col, prev, value);
}

/**
 * Converts four hexidecimal chars to the integer that the
 * string represents. For example, uniCharCode('0','0','0','f')
 * will return 15, and uniCharCode('0','0','f','f') returns 255.
 *
 * Returns a negative number on error, if a char was invalid.
 *
 * This is implemented by noting that char2hex() returns -1 on error,
 * which means the result of ORing the char2hex() will also be negative.
 */
function uniCharCode(a, b, c, d) {
  return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
}

/**
 * Converts a hex character to its integer value.
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 on error.
 */
function char2hex(a) {
  return a >= 48 && a <= 57 ? a - 48 : // 0-9
  a >= 65 && a <= 70 ? a - 55 : // A-F
  a >= 97 && a <= 102 ? a - 87 : // a-f
  -1;
}

/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * [_A-Za-z][_0-9A-Za-z]*
 */
function readName(source, position, line, col, prev) {
  var body = source.body;
  var bodyLength = body.length;
  var end = position + 1;
  var code = 0;
  while (end !== bodyLength && (code = charCodeAt.call(body, end)) !== null && (code === 95 || // _
  code >= 48 && code <= 57 || // 0-9
  code >= 65 && code <= 90 || // A-Z
  code >= 97 && code <= 122 // a-z
  )) {
    ++end;
  }
  return new Tok(NAME, position, end, line, col, prev, slice.call(body, position, end));
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocation = getLocation;


/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

function getLocation(source, position) {
  var lineRegexp = /\r\n|[\n\r]/g;
  var line = 1;
  var column = position + 1;
  var match = void 0;
  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
    line += 1;
    column = position + 1 - (match.index + match[0].length);
  }
  return { line: line, column: column };
}

/**
 * Represents a location in a Source.
 */

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = parse;
exports.parseValue = parseValue;
exports.parseType = parseType;
exports.parseConstValue = parseConstValue;
exports.parseTypeReference = parseTypeReference;
exports.parseNamedType = parseNamedType;

var _source = __webpack_require__(248);

var _error = __webpack_require__(75);

var _lexer = __webpack_require__(105);

var _kinds = __webpack_require__(17);

/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */


/**
 * Configuration options to control parser behavior
 */

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

function parse(source, options) {
  var sourceObj = typeof source === 'string' ? new _source.Source(source) : source;
  var lexer = (0, _lexer.createLexer)(sourceObj, options || {});
  return parseDocument(lexer);
}

/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */
function parseValue(source, options) {
  var sourceObj = typeof source === 'string' ? new _source.Source(source) : source;
  var lexer = (0, _lexer.createLexer)(sourceObj, options || {});
  expect(lexer, _lexer.TokenKind.SOF);
  var value = parseValueLiteral(lexer, false);
  expect(lexer, _lexer.TokenKind.EOF);
  return value;
}

/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */
function parseType(source, options) {
  var sourceObj = typeof source === 'string' ? new _source.Source(source) : source;
  var lexer = (0, _lexer.createLexer)(sourceObj, options || {});
  expect(lexer, _lexer.TokenKind.SOF);
  var type = parseTypeReference(lexer);
  expect(lexer, _lexer.TokenKind.EOF);
  return type;
}

/**
 * Converts a name lex token into a name parse node.
 */
function parseName(lexer) {
  var token = expect(lexer, _lexer.TokenKind.NAME);
  return {
    kind: _kinds.NAME,
    value: token.value,
    loc: loc(lexer, token)
  };
}

// Implements the parsing rules in the Document section.

/**
 * Document : Definition+
 */
function parseDocument(lexer) {
  var start = lexer.token;
  expect(lexer, _lexer.TokenKind.SOF);
  var definitions = [];
  do {
    definitions.push(parseDefinition(lexer));
  } while (!skip(lexer, _lexer.TokenKind.EOF));

  return {
    kind: _kinds.DOCUMENT,
    definitions: definitions,
    loc: loc(lexer, start)
  };
}

/**
 * Definition :
 *   - OperationDefinition
 *   - FragmentDefinition
 *   - TypeSystemDefinition
 */
function parseDefinition(lexer) {
  if (peek(lexer, _lexer.TokenKind.BRACE_L)) {
    return parseOperationDefinition(lexer);
  }

  if (peek(lexer, _lexer.TokenKind.NAME)) {
    switch (lexer.token.value) {
      // Note: subscription is an experimental non-spec addition.
      case 'query':
      case 'mutation':
      case 'subscription':
        return parseOperationDefinition(lexer);

      case 'fragment':
        return parseFragmentDefinition(lexer);

      // Note: the Type System IDL is an experimental non-spec addition.
      case 'schema':
      case 'scalar':
      case 'type':
      case 'interface':
      case 'union':
      case 'enum':
      case 'input':
      case 'extend':
      case 'directive':
        return parseTypeSystemDefinition(lexer);
    }
  }

  throw unexpected(lexer);
}

// Implements the parsing rules in the Operations section.

/**
 * OperationDefinition :
 *  - SelectionSet
 *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
 */
function parseOperationDefinition(lexer) {
  var start = lexer.token;
  if (peek(lexer, _lexer.TokenKind.BRACE_L)) {
    return {
      kind: _kinds.OPERATION_DEFINITION,
      operation: 'query',
      name: null,
      variableDefinitions: null,
      directives: [],
      selectionSet: parseSelectionSet(lexer),
      loc: loc(lexer, start)
    };
  }
  var operation = parseOperationType(lexer);
  var name = void 0;
  if (peek(lexer, _lexer.TokenKind.NAME)) {
    name = parseName(lexer);
  }
  return {
    kind: _kinds.OPERATION_DEFINITION,
    operation: operation,
    name: name,
    variableDefinitions: parseVariableDefinitions(lexer),
    directives: parseDirectives(lexer),
    selectionSet: parseSelectionSet(lexer),
    loc: loc(lexer, start)
  };
}

/**
 * OperationType : one of query mutation subscription
 */
function parseOperationType(lexer) {
  var operationToken = expect(lexer, _lexer.TokenKind.NAME);
  switch (operationToken.value) {
    case 'query':
      return 'query';
    case 'mutation':
      return 'mutation';
    // Note: subscription is an experimental non-spec addition.
    case 'subscription':
      return 'subscription';
  }

  throw unexpected(lexer, operationToken);
}

/**
 * VariableDefinitions : ( VariableDefinition+ )
 */
function parseVariableDefinitions(lexer) {
  return peek(lexer, _lexer.TokenKind.PAREN_L) ? many(lexer, _lexer.TokenKind.PAREN_L, parseVariableDefinition, _lexer.TokenKind.PAREN_R) : [];
}

/**
 * VariableDefinition : Variable : Type DefaultValue?
 */
function parseVariableDefinition(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds.VARIABLE_DEFINITION,
    variable: parseVariable(lexer),
    type: (expect(lexer, _lexer.TokenKind.COLON), parseTypeReference(lexer)),
    defaultValue: skip(lexer, _lexer.TokenKind.EQUALS) ? parseValueLiteral(lexer, true) : null,
    loc: loc(lexer, start)
  };
}

/**
 * Variable : $ Name
 */
function parseVariable(lexer) {
  var start = lexer.token;
  expect(lexer, _lexer.TokenKind.DOLLAR);
  return {
    kind: _kinds.VARIABLE,
    name: parseName(lexer),
    loc: loc(lexer, start)
  };
}

/**
 * SelectionSet : { Selection+ }
 */
function parseSelectionSet(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds.SELECTION_SET,
    selections: many(lexer, _lexer.TokenKind.BRACE_L, parseSelection, _lexer.TokenKind.BRACE_R),
    loc: loc(lexer, start)
  };
}

/**
 * Selection :
 *   - Field
 *   - FragmentSpread
 *   - InlineFragment
 */
function parseSelection(lexer) {
  return peek(lexer, _lexer.TokenKind.SPREAD) ? parseFragment(lexer) : parseField(lexer);
}

/**
 * Field : Alias? Name Arguments? Directives? SelectionSet?
 *
 * Alias : Name :
 */
function parseField(lexer) {
  var start = lexer.token;

  var nameOrAlias = parseName(lexer);
  var alias = void 0;
  var name = void 0;
  if (skip(lexer, _lexer.TokenKind.COLON)) {
    alias = nameOrAlias;
    name = parseName(lexer);
  } else {
    alias = null;
    name = nameOrAlias;
  }

  return {
    kind: _kinds.FIELD,
    alias: alias,
    name: name,
    arguments: parseArguments(lexer),
    directives: parseDirectives(lexer),
    selectionSet: peek(lexer, _lexer.TokenKind.BRACE_L) ? parseSelectionSet(lexer) : null,
    loc: loc(lexer, start)
  };
}

/**
 * Arguments : ( Argument+ )
 */
function parseArguments(lexer) {
  return peek(lexer, _lexer.TokenKind.PAREN_L) ? many(lexer, _lexer.TokenKind.PAREN_L, parseArgument, _lexer.TokenKind.PAREN_R) : [];
}

/**
 * Argument : Name : Value
 */
function parseArgument(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds.ARGUMENT,
    name: parseName(lexer),
    value: (expect(lexer, _lexer.TokenKind.COLON), parseValueLiteral(lexer, false)),
    loc: loc(lexer, start)
  };
}

// Implements the parsing rules in the Fragments section.

/**
 * Corresponds to both FragmentSpread and InlineFragment in the spec.
 *
 * FragmentSpread : ... FragmentName Directives?
 *
 * InlineFragment : ... TypeCondition? Directives? SelectionSet
 */
function parseFragment(lexer) {
  var start = lexer.token;
  expect(lexer, _lexer.TokenKind.SPREAD);
  if (peek(lexer, _lexer.TokenKind.NAME) && lexer.token.value !== 'on') {
    return {
      kind: _kinds.FRAGMENT_SPREAD,
      name: parseFragmentName(lexer),
      directives: parseDirectives(lexer),
      loc: loc(lexer, start)
    };
  }
  var typeCondition = null;
  if (lexer.token.value === 'on') {
    lexer.advance();
    typeCondition = parseNamedType(lexer);
  }
  return {
    kind: _kinds.INLINE_FRAGMENT,
    typeCondition: typeCondition,
    directives: parseDirectives(lexer),
    selectionSet: parseSelectionSet(lexer),
    loc: loc(lexer, start)
  };
}

/**
 * FragmentDefinition :
 *   - fragment FragmentName on TypeCondition Directives? SelectionSet
 *
 * TypeCondition : NamedType
 */
function parseFragmentDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'fragment');
  return {
    kind: _kinds.FRAGMENT_DEFINITION,
    name: parseFragmentName(lexer),
    typeCondition: (expectKeyword(lexer, 'on'), parseNamedType(lexer)),
    directives: parseDirectives(lexer),
    selectionSet: parseSelectionSet(lexer),
    loc: loc(lexer, start)
  };
}

/**
 * FragmentName : Name but not `on`
 */
function parseFragmentName(lexer) {
  if (lexer.token.value === 'on') {
    throw unexpected(lexer);
  }
  return parseName(lexer);
}

// Implements the parsing rules in the Values section.

/**
 * Value[Const] :
 *   - [~Const] Variable
 *   - IntValue
 *   - FloatValue
 *   - StringValue
 *   - BooleanValue
 *   - NullValue
 *   - EnumValue
 *   - ListValue[?Const]
 *   - ObjectValue[?Const]
 *
 * BooleanValue : one of `true` `false`
 *
 * NullValue : `null`
 *
 * EnumValue : Name but not `true`, `false` or `null`
 */
function parseValueLiteral(lexer, isConst) {
  var token = lexer.token;
  switch (token.kind) {
    case _lexer.TokenKind.BRACKET_L:
      return parseList(lexer, isConst);
    case _lexer.TokenKind.BRACE_L:
      return parseObject(lexer, isConst);
    case _lexer.TokenKind.INT:
      lexer.advance();
      return {
        kind: _kinds.INT,
        value: token.value,
        loc: loc(lexer, token)
      };
    case _lexer.TokenKind.FLOAT:
      lexer.advance();
      return {
        kind: _kinds.FLOAT,
        value: token.value,
        loc: loc(lexer, token)
      };
    case _lexer.TokenKind.STRING:
      lexer.advance();
      return {
        kind: _kinds.STRING,
        value: token.value,
        loc: loc(lexer, token)
      };
    case _lexer.TokenKind.NAME:
      if (token.value === 'true' || token.value === 'false') {
        lexer.advance();
        return {
          kind: _kinds.BOOLEAN,
          value: token.value === 'true',
          loc: loc(lexer, token)
        };
      } else if (token.value === 'null') {
        lexer.advance();
        return {
          kind: _kinds.NULL,
          loc: loc(lexer, token)
        };
      }
      lexer.advance();
      return {
        kind: _kinds.ENUM,
        value: token.value,
        loc: loc(lexer, token)
      };
    case _lexer.TokenKind.DOLLAR:
      if (!isConst) {
        return parseVariable(lexer);
      }
      break;
  }
  throw unexpected(lexer);
}

function parseConstValue(lexer) {
  return parseValueLiteral(lexer, true);
}

function parseValueValue(lexer) {
  return parseValueLiteral(lexer, false);
}

/**
 * ListValue[Const] :
 *   - [ ]
 *   - [ Value[?Const]+ ]
 */
function parseList(lexer, isConst) {
  var start = lexer.token;
  var item = isConst ? parseConstValue : parseValueValue;
  return {
    kind: _kinds.LIST,
    values: any(lexer, _lexer.TokenKind.BRACKET_L, item, _lexer.TokenKind.BRACKET_R),
    loc: loc(lexer, start)
  };
}

/**
 * ObjectValue[Const] :
 *   - { }
 *   - { ObjectField[?Const]+ }
 */
function parseObject(lexer, isConst) {
  var start = lexer.token;
  expect(lexer, _lexer.TokenKind.BRACE_L);
  var fields = [];
  while (!skip(lexer, _lexer.TokenKind.BRACE_R)) {
    fields.push(parseObjectField(lexer, isConst));
  }
  return {
    kind: _kinds.OBJECT,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * ObjectField[Const] : Name : Value[?Const]
 */
function parseObjectField(lexer, isConst) {
  var start = lexer.token;
  return {
    kind: _kinds.OBJECT_FIELD,
    name: parseName(lexer),
    value: (expect(lexer, _lexer.TokenKind.COLON), parseValueLiteral(lexer, isConst)),
    loc: loc(lexer, start)
  };
}

// Implements the parsing rules in the Directives section.

/**
 * Directives : Directive+
 */
function parseDirectives(lexer) {
  var directives = [];
  while (peek(lexer, _lexer.TokenKind.AT)) {
    directives.push(parseDirective(lexer));
  }
  return directives;
}

/**
 * Directive : @ Name Arguments?
 */
function parseDirective(lexer) {
  var start = lexer.token;
  expect(lexer, _lexer.TokenKind.AT);
  return {
    kind: _kinds.DIRECTIVE,
    name: parseName(lexer),
    arguments: parseArguments(lexer),
    loc: loc(lexer, start)
  };
}

// Implements the parsing rules in the Types section.

/**
 * Type :
 *   - NamedType
 *   - ListType
 *   - NonNullType
 */
function parseTypeReference(lexer) {
  var start = lexer.token;
  var type = void 0;
  if (skip(lexer, _lexer.TokenKind.BRACKET_L)) {
    type = parseTypeReference(lexer);
    expect(lexer, _lexer.TokenKind.BRACKET_R);
    type = {
      kind: _kinds.LIST_TYPE,
      type: type,
      loc: loc(lexer, start)
    };
  } else {
    type = parseNamedType(lexer);
  }
  if (skip(lexer, _lexer.TokenKind.BANG)) {
    return {
      kind: _kinds.NON_NULL_TYPE,
      type: type,
      loc: loc(lexer, start)
    };
  }
  return type;
}

/**
 * NamedType : Name
 */
function parseNamedType(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds.NAMED_TYPE,
    name: parseName(lexer),
    loc: loc(lexer, start)
  };
}

// Implements the parsing rules in the Type Definition section.

/**
 * TypeSystemDefinition :
 *   - SchemaDefinition
 *   - TypeDefinition
 *   - TypeExtensionDefinition
 *   - DirectiveDefinition
 *
 * TypeDefinition :
 *   - ScalarTypeDefinition
 *   - ObjectTypeDefinition
 *   - InterfaceTypeDefinition
 *   - UnionTypeDefinition
 *   - EnumTypeDefinition
 *   - InputObjectTypeDefinition
 */
function parseTypeSystemDefinition(lexer) {
  if (peek(lexer, _lexer.TokenKind.NAME)) {
    switch (lexer.token.value) {
      case 'schema':
        return parseSchemaDefinition(lexer);
      case 'scalar':
        return parseScalarTypeDefinition(lexer);
      case 'type':
        return parseObjectTypeDefinition(lexer);
      case 'interface':
        return parseInterfaceTypeDefinition(lexer);
      case 'union':
        return parseUnionTypeDefinition(lexer);
      case 'enum':
        return parseEnumTypeDefinition(lexer);
      case 'input':
        return parseInputObjectTypeDefinition(lexer);
      case 'extend':
        return parseTypeExtensionDefinition(lexer);
      case 'directive':
        return parseDirectiveDefinition(lexer);
    }
  }

  throw unexpected(lexer);
}

/**
 * SchemaDefinition : schema Directives? { OperationTypeDefinition+ }
 *
 * OperationTypeDefinition : OperationType : NamedType
 */
function parseSchemaDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'schema');
  var directives = parseDirectives(lexer);
  var operationTypes = many(lexer, _lexer.TokenKind.BRACE_L, parseOperationTypeDefinition, _lexer.TokenKind.BRACE_R);
  return {
    kind: _kinds.SCHEMA_DEFINITION,
    directives: directives,
    operationTypes: operationTypes,
    loc: loc(lexer, start)
  };
}

function parseOperationTypeDefinition(lexer) {
  var start = lexer.token;
  var operation = parseOperationType(lexer);
  expect(lexer, _lexer.TokenKind.COLON);
  var type = parseNamedType(lexer);
  return {
    kind: _kinds.OPERATION_TYPE_DEFINITION,
    operation: operation,
    type: type,
    loc: loc(lexer, start)
  };
}

/**
 * ScalarTypeDefinition : scalar Name Directives?
 */
function parseScalarTypeDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'scalar');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer);
  return {
    kind: _kinds.SCALAR_TYPE_DEFINITION,
    name: name,
    directives: directives,
    loc: loc(lexer, start)
  };
}

/**
 * ObjectTypeDefinition :
 *   - type Name ImplementsInterfaces? Directives? { FieldDefinition+ }
 */
function parseObjectTypeDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'type');
  var name = parseName(lexer);
  var interfaces = parseImplementsInterfaces(lexer);
  var directives = parseDirectives(lexer);
  var fields = any(lexer, _lexer.TokenKind.BRACE_L, parseFieldDefinition, _lexer.TokenKind.BRACE_R);
  return {
    kind: _kinds.OBJECT_TYPE_DEFINITION,
    name: name,
    interfaces: interfaces,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * ImplementsInterfaces : implements NamedType+
 */
function parseImplementsInterfaces(lexer) {
  var types = [];
  if (lexer.token.value === 'implements') {
    lexer.advance();
    do {
      types.push(parseNamedType(lexer));
    } while (peek(lexer, _lexer.TokenKind.NAME));
  }
  return types;
}

/**
 * FieldDefinition : Name ArgumentsDefinition? : Type Directives?
 */
function parseFieldDefinition(lexer) {
  var start = lexer.token;
  var name = parseName(lexer);
  var args = parseArgumentDefs(lexer);
  expect(lexer, _lexer.TokenKind.COLON);
  var type = parseTypeReference(lexer);
  var directives = parseDirectives(lexer);
  return {
    kind: _kinds.FIELD_DEFINITION,
    name: name,
    arguments: args,
    type: type,
    directives: directives,
    loc: loc(lexer, start)
  };
}

/**
 * ArgumentsDefinition : ( InputValueDefinition+ )
 */
function parseArgumentDefs(lexer) {
  if (!peek(lexer, _lexer.TokenKind.PAREN_L)) {
    return [];
  }
  return many(lexer, _lexer.TokenKind.PAREN_L, parseInputValueDef, _lexer.TokenKind.PAREN_R);
}

/**
 * InputValueDefinition : Name : Type DefaultValue? Directives?
 */
function parseInputValueDef(lexer) {
  var start = lexer.token;
  var name = parseName(lexer);
  expect(lexer, _lexer.TokenKind.COLON);
  var type = parseTypeReference(lexer);
  var defaultValue = null;
  if (skip(lexer, _lexer.TokenKind.EQUALS)) {
    defaultValue = parseConstValue(lexer);
  }
  var directives = parseDirectives(lexer);
  return {
    kind: _kinds.INPUT_VALUE_DEFINITION,
    name: name,
    type: type,
    defaultValue: defaultValue,
    directives: directives,
    loc: loc(lexer, start)
  };
}

/**
 * InterfaceTypeDefinition : interface Name Directives? { FieldDefinition+ }
 */
function parseInterfaceTypeDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'interface');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer);
  var fields = any(lexer, _lexer.TokenKind.BRACE_L, parseFieldDefinition, _lexer.TokenKind.BRACE_R);
  return {
    kind: _kinds.INTERFACE_TYPE_DEFINITION,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * UnionTypeDefinition : union Name Directives? = UnionMembers
 */
function parseUnionTypeDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'union');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer);
  expect(lexer, _lexer.TokenKind.EQUALS);
  var types = parseUnionMembers(lexer);
  return {
    kind: _kinds.UNION_TYPE_DEFINITION,
    name: name,
    directives: directives,
    types: types,
    loc: loc(lexer, start)
  };
}

/**
 * UnionMembers :
 *   - NamedType
 *   - UnionMembers | NamedType
 */
function parseUnionMembers(lexer) {
  var members = [];
  do {
    members.push(parseNamedType(lexer));
  } while (skip(lexer, _lexer.TokenKind.PIPE));
  return members;
}

/**
 * EnumTypeDefinition : enum Name Directives? { EnumValueDefinition+ }
 */
function parseEnumTypeDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'enum');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer);
  var values = many(lexer, _lexer.TokenKind.BRACE_L, parseEnumValueDefinition, _lexer.TokenKind.BRACE_R);
  return {
    kind: _kinds.ENUM_TYPE_DEFINITION,
    name: name,
    directives: directives,
    values: values,
    loc: loc(lexer, start)
  };
}

/**
 * EnumValueDefinition : EnumValue Directives?
 *
 * EnumValue : Name
 */
function parseEnumValueDefinition(lexer) {
  var start = lexer.token;
  var name = parseName(lexer);
  var directives = parseDirectives(lexer);
  return {
    kind: _kinds.ENUM_VALUE_DEFINITION,
    name: name,
    directives: directives,
    loc: loc(lexer, start)
  };
}

/**
 * InputObjectTypeDefinition : input Name Directives? { InputValueDefinition+ }
 */
function parseInputObjectTypeDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'input');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer);
  var fields = any(lexer, _lexer.TokenKind.BRACE_L, parseInputValueDef, _lexer.TokenKind.BRACE_R);
  return {
    kind: _kinds.INPUT_OBJECT_TYPE_DEFINITION,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * TypeExtensionDefinition : extend ObjectTypeDefinition
 */
function parseTypeExtensionDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  var definition = parseObjectTypeDefinition(lexer);
  return {
    kind: _kinds.TYPE_EXTENSION_DEFINITION,
    definition: definition,
    loc: loc(lexer, start)
  };
}

/**
 * DirectiveDefinition :
 *   - directive @ Name ArgumentsDefinition? on DirectiveLocations
 */
function parseDirectiveDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'directive');
  expect(lexer, _lexer.TokenKind.AT);
  var name = parseName(lexer);
  var args = parseArgumentDefs(lexer);
  expectKeyword(lexer, 'on');
  var locations = parseDirectiveLocations(lexer);
  return {
    kind: _kinds.DIRECTIVE_DEFINITION,
    name: name,
    arguments: args,
    locations: locations,
    loc: loc(lexer, start)
  };
}

/**
 * DirectiveLocations :
 *   - Name
 *   - DirectiveLocations | Name
 */
function parseDirectiveLocations(lexer) {
  var locations = [];
  do {
    locations.push(parseName(lexer));
  } while (skip(lexer, _lexer.TokenKind.PIPE));
  return locations;
}

// Core parsing utility functions

/**
 * Returns a location object, used to identify the place in
 * the source that created a given parsed object.
 */
function loc(lexer, startToken) {
  if (!lexer.options.noLocation) {
    return new Loc(startToken, lexer.lastToken, lexer.source);
  }
}

function Loc(startToken, endToken, source) {
  this.start = startToken.start;
  this.end = endToken.end;
  this.startToken = startToken;
  this.endToken = endToken;
  this.source = source;
}

// Print a simplified form when appearing in JSON/util.inspect.
Loc.prototype.toJSON = Loc.prototype.inspect = function toJSON() {
  return { start: this.start, end: this.end };
};

/**
 * Determines if the next token is of a given kind
 */
function peek(lexer, kind) {
  return lexer.token.kind === kind;
}

/**
 * If the next token is of the given kind, return true after advancing
 * the lexer. Otherwise, do not change the parser state and return false.
 */
function skip(lexer, kind) {
  var match = lexer.token.kind === kind;
  if (match) {
    lexer.advance();
  }
  return match;
}

/**
 * If the next token is of the given kind, return that token after advancing
 * the lexer. Otherwise, do not change the parser state and throw an error.
 */
function expect(lexer, kind) {
  var token = lexer.token;
  if (token.kind === kind) {
    lexer.advance();
    return token;
  }
  throw (0, _error.syntaxError)(lexer.source, token.start, 'Expected ' + kind + ', found ' + (0, _lexer.getTokenDesc)(token));
}

/**
 * If the next token is a keyword with the given value, return that token after
 * advancing the lexer. Otherwise, do not change the parser state and return
 * false.
 */
function expectKeyword(lexer, value) {
  var token = lexer.token;
  if (token.kind === _lexer.TokenKind.NAME && token.value === value) {
    lexer.advance();
    return token;
  }
  throw (0, _error.syntaxError)(lexer.source, token.start, 'Expected "' + value + '", found ' + (0, _lexer.getTokenDesc)(token));
}

/**
 * Helper function for creating an error when an unexpected lexed token
 * is encountered.
 */
function unexpected(lexer, atToken) {
  var token = atToken || lexer.token;
  return (0, _error.syntaxError)(lexer.source, token.start, 'Unexpected ' + (0, _lexer.getTokenDesc)(token));
}

/**
 * Returns a possibly empty list of parse nodes, determined by
 * the parseFn. This list begins with a lex token of openKind
 * and ends with a lex token of closeKind. Advances the parser
 * to the next lex token after the closing token.
 */
function any(lexer, openKind, parseFn, closeKind) {
  expect(lexer, openKind);
  var nodes = [];
  while (!skip(lexer, closeKind)) {
    nodes.push(parseFn(lexer));
  }
  return nodes;
}

/**
 * Returns a non-empty list of parse nodes, determined by
 * the parseFn. This list begins with a lex token of openKind
 * and ends with a lex token of closeKind. Advances the parser
 * to the next lex token after the closing token.
 */
function many(lexer, openKind, parseFn, closeKind) {
  expect(lexer, openKind);
  var nodes = [parseFn(lexer)];
  while (!skip(lexer, closeKind)) {
    nodes.push(parseFn(lexer));
  }
  return nodes;
}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeInfo = undefined;

var _kinds = __webpack_require__(17);

var Kind = _interopRequireWildcard(_kinds);

var _definition = __webpack_require__(6);

var _introspection = __webpack_require__(40);

var _typeFromAST = __webpack_require__(81);

var _find = __webpack_require__(76);

var _find2 = _interopRequireDefault(_find);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * TypeInfo is a utility class which, given a GraphQL schema, can keep track
 * of the current field and type definitions at any point in a GraphQL document
 * AST during a recursive descent by calling `enter(node)` and `leave(node)`.
 */
var TypeInfo = exports.TypeInfo = function () {
  function TypeInfo(schema,
  // NOTE: this experimental optional second parameter is only needed in order
  // to support non-spec-compliant codebases. You should never need to use it.
  getFieldDefFn) {
    _classCallCheck(this, TypeInfo);

    this._schema = schema;
    this._typeStack = [];
    this._parentTypeStack = [];
    this._inputTypeStack = [];
    this._fieldDefStack = [];
    this._directive = null;
    this._argument = null;
    this._enumValue = null;
    this._getFieldDef = getFieldDefFn || getFieldDef;
  }

  TypeInfo.prototype.getType = function getType() {
    if (this._typeStack.length > 0) {
      return this._typeStack[this._typeStack.length - 1];
    }
  };

  TypeInfo.prototype.getParentType = function getParentType() {
    if (this._parentTypeStack.length > 0) {
      return this._parentTypeStack[this._parentTypeStack.length - 1];
    }
  };

  TypeInfo.prototype.getInputType = function getInputType() {
    if (this._inputTypeStack.length > 0) {
      return this._inputTypeStack[this._inputTypeStack.length - 1];
    }
  };

  TypeInfo.prototype.getFieldDef = function getFieldDef() {
    if (this._fieldDefStack.length > 0) {
      return this._fieldDefStack[this._fieldDefStack.length - 1];
    }
  };

  TypeInfo.prototype.getDirective = function getDirective() {
    return this._directive;
  };

  TypeInfo.prototype.getArgument = function getArgument() {
    return this._argument;
  };

  TypeInfo.prototype.getEnumValue = function getEnumValue() {
    return this._enumValue;
  };

  // Flow does not yet handle this case.


  TypeInfo.prototype.enter = function enter(node /* ASTNode */) {
    var schema = this._schema;
    switch (node.kind) {
      case Kind.SELECTION_SET:
        var namedType = (0, _definition.getNamedType)(this.getType());
        var compositeType = void 0;
        if ((0, _definition.isCompositeType)(namedType)) {
          // isCompositeType is a type refining predicate, so this is safe.
          compositeType = namedType;
        }
        this._parentTypeStack.push(compositeType);
        break;
      case Kind.FIELD:
        var parentType = this.getParentType();
        var fieldDef = void 0;
        if (parentType) {
          fieldDef = this._getFieldDef(schema, parentType, node);
        }
        this._fieldDefStack.push(fieldDef);
        this._typeStack.push(fieldDef && fieldDef.type);
        break;
      case Kind.DIRECTIVE:
        this._directive = schema.getDirective(node.name.value);
        break;
      case Kind.OPERATION_DEFINITION:
        var type = void 0;
        if (node.operation === 'query') {
          type = schema.getQueryType();
        } else if (node.operation === 'mutation') {
          type = schema.getMutationType();
        } else if (node.operation === 'subscription') {
          type = schema.getSubscriptionType();
        }
        this._typeStack.push(type);
        break;
      case Kind.INLINE_FRAGMENT:
      case Kind.FRAGMENT_DEFINITION:
        var typeConditionAST = node.typeCondition;
        var outputType = typeConditionAST ? (0, _typeFromAST.typeFromAST)(schema, typeConditionAST) : this.getType();
        this._typeStack.push(outputType);
        break;
      case Kind.VARIABLE_DEFINITION:
        var inputType = (0, _typeFromAST.typeFromAST)(schema, node.type);
        this._inputTypeStack.push(inputType);
        break;
      case Kind.ARGUMENT:
        var argDef = void 0;
        var argType = void 0;
        var fieldOrDirective = this.getDirective() || this.getFieldDef();
        if (fieldOrDirective) {
          argDef = (0, _find2.default)(fieldOrDirective.args, function (arg) {
            return arg.name === node.name.value;
          });
          if (argDef) {
            argType = argDef.type;
          }
        }
        this._argument = argDef;
        this._inputTypeStack.push(argType);
        break;
      case Kind.LIST:
        var listType = (0, _definition.getNullableType)(this.getInputType());
        this._inputTypeStack.push(listType instanceof _definition.GraphQLList ? listType.ofType : undefined);
        break;
      case Kind.OBJECT_FIELD:
        var objectType = (0, _definition.getNamedType)(this.getInputType());
        var fieldType = void 0;
        if (objectType instanceof _definition.GraphQLInputObjectType) {
          var inputField = objectType.getFields()[node.name.value];
          fieldType = inputField ? inputField.type : undefined;
        }
        this._inputTypeStack.push(fieldType);
        break;
      case Kind.ENUM:
        var enumType = (0, _definition.getNamedType)(this.getInputType());
        var enumValue = void 0;
        if (enumType instanceof _definition.GraphQLEnumType) {
          enumValue = enumType.getValue(node.value);
        }
        this._enumValue = enumValue;
        break;
    }
  };

  TypeInfo.prototype.leave = function leave(node) {
    switch (node.kind) {
      case Kind.SELECTION_SET:
        this._parentTypeStack.pop();
        break;
      case Kind.FIELD:
        this._fieldDefStack.pop();
        this._typeStack.pop();
        break;
      case Kind.DIRECTIVE:
        this._directive = null;
        break;
      case Kind.OPERATION_DEFINITION:
      case Kind.INLINE_FRAGMENT:
      case Kind.FRAGMENT_DEFINITION:
        this._typeStack.pop();
        break;
      case Kind.VARIABLE_DEFINITION:
        this._inputTypeStack.pop();
        break;
      case Kind.ARGUMENT:
        this._argument = null;
        this._inputTypeStack.pop();
        break;
      case Kind.LIST:
      case Kind.OBJECT_FIELD:
        this._inputTypeStack.pop();
        break;
      case Kind.ENUM:
        this._enumValue = null;
        break;
    }
  };

  return TypeInfo;
}();

/**
 * Not exactly the same as the executor's definition of getFieldDef, in this
 * statically evaluated environment we do not always have an Object type,
 * and need to handle Interface and Union types.
 */


function getFieldDef(schema, parentType, fieldNode) {
  var name = fieldNode.name.value;
  if (name === _introspection.SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
    return _introspection.SchemaMetaFieldDef;
  }
  if (name === _introspection.TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
    return _introspection.TypeMetaFieldDef;
  }
  if (name === _introspection.TypeNameMetaFieldDef.name && (parentType instanceof _definition.GraphQLObjectType || parentType instanceof _definition.GraphQLInterfaceType || parentType instanceof _definition.GraphQLUnionType)) {
    return _introspection.TypeNameMetaFieldDef;
  }
  if (parentType instanceof _definition.GraphQLObjectType || parentType instanceof _definition.GraphQLInterfaceType) {
    return parentType.getFields()[name];
  }
}

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildASTSchema = buildASTSchema;
exports.getDescription = getDescription;
exports.buildSchema = buildSchema;

var _find = __webpack_require__(76);

var _find2 = _interopRequireDefault(_find);

var _invariant = __webpack_require__(10);

var _invariant2 = _interopRequireDefault(_invariant);

var _keyValMap = __webpack_require__(77);

var _keyValMap2 = _interopRequireDefault(_keyValMap);

var _valueFromAST = __webpack_require__(42);

var _lexer = __webpack_require__(105);

var _parser = __webpack_require__(107);

var _values = __webpack_require__(247);

var _kinds = __webpack_require__(17);

var _schema = __webpack_require__(41);

var _scalars = __webpack_require__(28);

var _definition = __webpack_require__(6);

var _directives = __webpack_require__(32);

var _introspection = __webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function buildWrappedType(innerType, inputTypeNode) {
  if (inputTypeNode.kind === _kinds.LIST_TYPE) {
    return new _definition.GraphQLList(buildWrappedType(innerType, inputTypeNode.type));
  }
  if (inputTypeNode.kind === _kinds.NON_NULL_TYPE) {
    var wrappedType = buildWrappedType(innerType, inputTypeNode.type);
    (0, _invariant2.default)(!(wrappedType instanceof _definition.GraphQLNonNull), 'No nesting nonnull.');
    return new _definition.GraphQLNonNull(wrappedType);
  }
  return innerType;
}
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

function getNamedTypeNode(typeNode) {
  var namedType = typeNode;
  while (namedType.kind === _kinds.LIST_TYPE || namedType.kind === _kinds.NON_NULL_TYPE) {
    namedType = namedType.type;
  }
  return namedType;
}

/**
 * This takes the ast of a schema document produced by the parse function in
 * src/language/parser.js.
 *
 * If no schema definition is provided, then it will look for types named Query
 * and Mutation.
 *
 * Given that AST it constructs a GraphQLSchema. The resulting schema
 * has no resolve methods, so execution will use default resolvers.
 */
function buildASTSchema(ast) {
  if (!ast || ast.kind !== _kinds.DOCUMENT) {
    throw new Error('Must provide a document ast.');
  }

  var schemaDef = void 0;

  var typeDefs = [];
  var nodeMap = Object.create(null);
  var directiveDefs = [];
  for (var i = 0; i < ast.definitions.length; i++) {
    var d = ast.definitions[i];
    switch (d.kind) {
      case _kinds.SCHEMA_DEFINITION:
        if (schemaDef) {
          throw new Error('Must provide only one schema definition.');
        }
        schemaDef = d;
        break;
      case _kinds.SCALAR_TYPE_DEFINITION:
      case _kinds.OBJECT_TYPE_DEFINITION:
      case _kinds.INTERFACE_TYPE_DEFINITION:
      case _kinds.ENUM_TYPE_DEFINITION:
      case _kinds.UNION_TYPE_DEFINITION:
      case _kinds.INPUT_OBJECT_TYPE_DEFINITION:
        typeDefs.push(d);
        nodeMap[d.name.value] = d;
        break;
      case _kinds.DIRECTIVE_DEFINITION:
        directiveDefs.push(d);
        break;
    }
  }

  var queryTypeName = void 0;
  var mutationTypeName = void 0;
  var subscriptionTypeName = void 0;
  if (schemaDef) {
    schemaDef.operationTypes.forEach(function (operationType) {
      var typeName = operationType.type.name.value;
      if (operationType.operation === 'query') {
        if (queryTypeName) {
          throw new Error('Must provide only one query type in schema.');
        }
        if (!nodeMap[typeName]) {
          throw new Error('Specified query type "' + typeName + '" not found in document.');
        }
        queryTypeName = typeName;
      } else if (operationType.operation === 'mutation') {
        if (mutationTypeName) {
          throw new Error('Must provide only one mutation type in schema.');
        }
        if (!nodeMap[typeName]) {
          throw new Error('Specified mutation type "' + typeName + '" not found in document.');
        }
        mutationTypeName = typeName;
      } else if (operationType.operation === 'subscription') {
        if (subscriptionTypeName) {
          throw new Error('Must provide only one subscription type in schema.');
        }
        if (!nodeMap[typeName]) {
          throw new Error('Specified subscription type "' + typeName + '" not found in document.');
        }
        subscriptionTypeName = typeName;
      }
    });
  } else {
    if (nodeMap.Query) {
      queryTypeName = 'Query';
    }
    if (nodeMap.Mutation) {
      mutationTypeName = 'Mutation';
    }
    if (nodeMap.Subscription) {
      subscriptionTypeName = 'Subscription';
    }
  }

  if (!queryTypeName) {
    throw new Error('Must provide schema definition with query type or a type named Query.');
  }

  var innerTypeMap = {
    String: _scalars.GraphQLString,
    Int: _scalars.GraphQLInt,
    Float: _scalars.GraphQLFloat,
    Boolean: _scalars.GraphQLBoolean,
    ID: _scalars.GraphQLID,
    __Schema: _introspection.__Schema,
    __Directive: _introspection.__Directive,
    __DirectiveLocation: _introspection.__DirectiveLocation,
    __Type: _introspection.__Type,
    __Field: _introspection.__Field,
    __InputValue: _introspection.__InputValue,
    __EnumValue: _introspection.__EnumValue,
    __TypeKind: _introspection.__TypeKind
  };

  var types = typeDefs.map(function (def) {
    return typeDefNamed(def.name.value);
  });

  var directives = directiveDefs.map(getDirective);

  // If specified directives were not explicitly declared, add them.
  if (!directives.some(function (directive) {
    return directive.name === 'skip';
  })) {
    directives.push(_directives.GraphQLSkipDirective);
  }

  if (!directives.some(function (directive) {
    return directive.name === 'include';
  })) {
    directives.push(_directives.GraphQLIncludeDirective);
  }

  if (!directives.some(function (directive) {
    return directive.name === 'deprecated';
  })) {
    directives.push(_directives.GraphQLDeprecatedDirective);
  }

  return new _schema.GraphQLSchema({
    query: getObjectType(nodeMap[queryTypeName]),
    mutation: mutationTypeName ? getObjectType(nodeMap[mutationTypeName]) : null,
    subscription: subscriptionTypeName ? getObjectType(nodeMap[subscriptionTypeName]) : null,
    types: types,
    directives: directives
  });

  function getDirective(directiveNode) {
    return new _directives.GraphQLDirective({
      name: directiveNode.name.value,
      description: getDescription(directiveNode),
      locations: directiveNode.locations.map(function (node) {
        return node.value;
      }),
      args: directiveNode.arguments && makeInputValues(directiveNode.arguments)
    });
  }

  function getObjectType(typeNode) {
    var type = typeDefNamed(typeNode.name.value);
    (0, _invariant2.default)(type instanceof _definition.GraphQLObjectType, 'AST must provide object type.');
    return type;
  }

  function produceType(typeNode) {
    var typeName = getNamedTypeNode(typeNode).name.value;
    var typeDef = typeDefNamed(typeName);
    return buildWrappedType(typeDef, typeNode);
  }

  function produceInputType(typeNode) {
    var type = produceType(typeNode);
    (0, _invariant2.default)((0, _definition.isInputType)(type), 'Expected Input type.');
    return type;
  }

  function produceOutputType(typeNode) {
    var type = produceType(typeNode);
    (0, _invariant2.default)((0, _definition.isOutputType)(type), 'Expected Output type.');
    return type;
  }

  function produceObjectType(typeNode) {
    var type = produceType(typeNode);
    (0, _invariant2.default)(type instanceof _definition.GraphQLObjectType, 'Expected Object type.');
    return type;
  }

  function produceInterfaceType(typeNode) {
    var type = produceType(typeNode);
    (0, _invariant2.default)(type instanceof _definition.GraphQLInterfaceType, 'Expected Interface type.');
    return type;
  }

  function typeDefNamed(typeName) {
    if (innerTypeMap[typeName]) {
      return innerTypeMap[typeName];
    }

    if (!nodeMap[typeName]) {
      throw new Error('Type "' + typeName + '" not found in document.');
    }

    var innerTypeDef = makeSchemaDef(nodeMap[typeName]);
    if (!innerTypeDef) {
      throw new Error('Nothing constructed for "' + typeName + '".');
    }
    innerTypeMap[typeName] = innerTypeDef;
    return innerTypeDef;
  }

  function makeSchemaDef(def) {
    if (!def) {
      throw new Error('def must be defined');
    }
    switch (def.kind) {
      case _kinds.OBJECT_TYPE_DEFINITION:
        return makeTypeDef(def);
      case _kinds.INTERFACE_TYPE_DEFINITION:
        return makeInterfaceDef(def);
      case _kinds.ENUM_TYPE_DEFINITION:
        return makeEnumDef(def);
      case _kinds.UNION_TYPE_DEFINITION:
        return makeUnionDef(def);
      case _kinds.SCALAR_TYPE_DEFINITION:
        return makeScalarDef(def);
      case _kinds.INPUT_OBJECT_TYPE_DEFINITION:
        return makeInputObjectDef(def);
      default:
        throw new Error('Type kind "' + def.kind + '" not supported.');
    }
  }

  function makeTypeDef(def) {
    var typeName = def.name.value;
    return new _definition.GraphQLObjectType({
      name: typeName,
      description: getDescription(def),
      fields: function fields() {
        return makeFieldDefMap(def);
      },
      interfaces: function interfaces() {
        return makeImplementedInterfaces(def);
      }
    });
  }

  function makeFieldDefMap(def) {
    return (0, _keyValMap2.default)(def.fields, function (field) {
      return field.name.value;
    }, function (field) {
      return {
        type: produceOutputType(field.type),
        description: getDescription(field),
        args: makeInputValues(field.arguments),
        deprecationReason: getDeprecationReason(field.directives)
      };
    });
  }

  function makeImplementedInterfaces(def) {
    return def.interfaces && def.interfaces.map(function (iface) {
      return produceInterfaceType(iface);
    });
  }

  function makeInputValues(values) {
    return (0, _keyValMap2.default)(values, function (value) {
      return value.name.value;
    }, function (value) {
      var type = produceInputType(value.type);
      return {
        type: type,
        description: getDescription(value),
        defaultValue: (0, _valueFromAST.valueFromAST)(value.defaultValue, type)
      };
    });
  }

  function makeInterfaceDef(def) {
    var typeName = def.name.value;
    return new _definition.GraphQLInterfaceType({
      name: typeName,
      description: getDescription(def),
      fields: function fields() {
        return makeFieldDefMap(def);
      },
      resolveType: cannotExecuteSchema
    });
  }

  function makeEnumDef(def) {
    var enumType = new _definition.GraphQLEnumType({
      name: def.name.value,
      description: getDescription(def),
      values: (0, _keyValMap2.default)(def.values, function (enumValue) {
        return enumValue.name.value;
      }, function (enumValue) {
        return {
          description: getDescription(enumValue),
          deprecationReason: getDeprecationReason(enumValue.directives)
        };
      })
    });

    return enumType;
  }

  function makeUnionDef(def) {
    return new _definition.GraphQLUnionType({
      name: def.name.value,
      description: getDescription(def),
      types: def.types.map(function (t) {
        return produceObjectType(t);
      }),
      resolveType: cannotExecuteSchema
    });
  }

  function makeScalarDef(def) {
    return new _definition.GraphQLScalarType({
      name: def.name.value,
      description: getDescription(def),
      serialize: function serialize() {
        return null;
      },
      // Note: validation calls the parse functions to determine if a
      // literal value is correct. Returning null would cause use of custom
      // scalars to always fail validation. Returning false causes them to
      // always pass validation.
      parseValue: function parseValue() {
        return false;
      },
      parseLiteral: function parseLiteral() {
        return false;
      }
    });
  }

  function makeInputObjectDef(def) {
    return new _definition.GraphQLInputObjectType({
      name: def.name.value,
      description: getDescription(def),
      fields: function fields() {
        return makeInputValues(def.fields);
      }
    });
  }
}

function getDeprecationReason(directives) {
  var deprecatedAST = directives && (0, _find2.default)(directives, function (directive) {
    return directive.name.value === _directives.GraphQLDeprecatedDirective.name;
  });
  if (!deprecatedAST) {
    return;
  }

  var _getArgumentValues = (0, _values.getArgumentValues)(_directives.GraphQLDeprecatedDirective, deprecatedAST),
      reason = _getArgumentValues.reason;

  return reason;
}

/**
 * Given an ast node, returns its string description based on a contiguous
 * block full-line of comments preceding it.
 */
function getDescription(node) {
  var loc = node.loc;
  if (!loc) {
    return;
  }
  var comments = [];
  var minSpaces = void 0;
  var token = loc.startToken.prev;
  while (token && token.kind === _lexer.TokenKind.COMMENT && token.next && token.prev && token.line + 1 === token.next.line && token.line !== token.prev.line) {
    var value = String(token.value);
    var spaces = leadingSpaces(value);
    if (minSpaces === undefined || spaces < minSpaces) {
      minSpaces = spaces;
    }
    comments.push(value);
    token = token.prev;
  }
  return comments.reverse().map(function (comment) {
    return comment.slice(minSpaces);
  }).join('\n');
}

/**
 * A helper function to build a GraphQLSchema directly from a source
 * document.
 */
function buildSchema(source) {
  return buildASTSchema((0, _parser.parse)(source));
}

// Count the number of spaces on the starting side of a string.
function leadingSpaces(str) {
  var i = 0;
  for (; i < str.length; i++) {
    if (str[i] !== ' ') {
      break;
    }
  }
  return i;
}

function cannotExecuteSchema() {
  throw new Error('Generated Schema cannot use Interface or Union types for execution.');
}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _introspectionQuery = __webpack_require__(255);

Object.defineProperty(exports, 'introspectionQuery', {
  enumerable: true,
  get: function get() {
    return _introspectionQuery.introspectionQuery;
  }
});

var _getOperationAST = __webpack_require__(254);

Object.defineProperty(exports, 'getOperationAST', {
  enumerable: true,
  get: function get() {
    return _getOperationAST.getOperationAST;
  }
});

var _buildClientSchema = __webpack_require__(249);

Object.defineProperty(exports, 'buildClientSchema', {
  enumerable: true,
  get: function get() {
    return _buildClientSchema.buildClientSchema;
  }
});

var _buildASTSchema = __webpack_require__(109);

Object.defineProperty(exports, 'buildASTSchema', {
  enumerable: true,
  get: function get() {
    return _buildASTSchema.buildASTSchema;
  }
});
Object.defineProperty(exports, 'buildSchema', {
  enumerable: true,
  get: function get() {
    return _buildASTSchema.buildSchema;
  }
});

var _extendSchema = __webpack_require__(251);

Object.defineProperty(exports, 'extendSchema', {
  enumerable: true,
  get: function get() {
    return _extendSchema.extendSchema;
  }
});

var _schemaPrinter = __webpack_require__(256);

Object.defineProperty(exports, 'printSchema', {
  enumerable: true,
  get: function get() {
    return _schemaPrinter.printSchema;
  }
});
Object.defineProperty(exports, 'printType', {
  enumerable: true,
  get: function get() {
    return _schemaPrinter.printType;
  }
});
Object.defineProperty(exports, 'printIntrospectionSchema', {
  enumerable: true,
  get: function get() {
    return _schemaPrinter.printIntrospectionSchema;
  }
});

var _typeFromAST = __webpack_require__(81);

Object.defineProperty(exports, 'typeFromAST', {
  enumerable: true,
  get: function get() {
    return _typeFromAST.typeFromAST;
  }
});

var _valueFromAST = __webpack_require__(42);

Object.defineProperty(exports, 'valueFromAST', {
  enumerable: true,
  get: function get() {
    return _valueFromAST.valueFromAST;
  }
});

var _astFromValue = __webpack_require__(80);

Object.defineProperty(exports, 'astFromValue', {
  enumerable: true,
  get: function get() {
    return _astFromValue.astFromValue;
  }
});

var _TypeInfo = __webpack_require__(108);

Object.defineProperty(exports, 'TypeInfo', {
  enumerable: true,
  get: function get() {
    return _TypeInfo.TypeInfo;
  }
});

var _isValidJSValue = __webpack_require__(111);

Object.defineProperty(exports, 'isValidJSValue', {
  enumerable: true,
  get: function get() {
    return _isValidJSValue.isValidJSValue;
  }
});

var _isValidLiteralValue = __webpack_require__(112);

Object.defineProperty(exports, 'isValidLiteralValue', {
  enumerable: true,
  get: function get() {
    return _isValidLiteralValue.isValidLiteralValue;
  }
});

var _concatAST = __webpack_require__(250);

Object.defineProperty(exports, 'concatAST', {
  enumerable: true,
  get: function get() {
    return _concatAST.concatAST;
  }
});

var _separateOperations = __webpack_require__(257);

Object.defineProperty(exports, 'separateOperations', {
  enumerable: true,
  get: function get() {
    return _separateOperations.separateOperations;
  }
});

var _typeComparators = __webpack_require__(113);

Object.defineProperty(exports, 'isEqualType', {
  enumerable: true,
  get: function get() {
    return _typeComparators.isEqualType;
  }
});
Object.defineProperty(exports, 'isTypeSubTypeOf', {
  enumerable: true,
  get: function get() {
    return _typeComparators.isTypeSubTypeOf;
  }
});
Object.defineProperty(exports, 'doTypesOverlap', {
  enumerable: true,
  get: function get() {
    return _typeComparators.doTypesOverlap;
  }
});

var _assertValidName = __webpack_require__(79);

Object.defineProperty(exports, 'assertValidName', {
  enumerable: true,
  get: function get() {
    return _assertValidName.assertValidName;
  }
});

var _findBreakingChanges = __webpack_require__(252);

Object.defineProperty(exports, 'findBreakingChanges', {
  enumerable: true,
  get: function get() {
    return _findBreakingChanges.findBreakingChanges;
  }
});

var _findDeprecatedUsages = __webpack_require__(253);

Object.defineProperty(exports, 'findDeprecatedUsages', {
  enumerable: true,
  get: function get() {
    return _findDeprecatedUsages.findDeprecatedUsages;
  }
});

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidJSValue = isValidJSValue;

var _iterall = __webpack_require__(82);

var _invariant = __webpack_require__(10);

var _invariant2 = _interopRequireDefault(_invariant);

var _isNullish = __webpack_require__(27);

var _isNullish2 = _interopRequireDefault(_isNullish);

var _definition = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Given a JavaScript value and a GraphQL type, determine if the value will be
 * accepted for that type. This is primarily useful for validating the
 * runtime values of query variables.
 */

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

function isValidJSValue(value, type) {
  // A value must be provided if the type is non-null.
  if (type instanceof _definition.GraphQLNonNull) {
    if ((0, _isNullish2.default)(value)) {
      return ['Expected "' + String(type) + '", found null.'];
    }
    return isValidJSValue(value, type.ofType);
  }

  if ((0, _isNullish2.default)(value)) {
    return [];
  }

  // Lists accept a non-list value as a list of one.
  if (type instanceof _definition.GraphQLList) {
    var _ret = function () {
      var itemType = type.ofType;
      if ((0, _iterall.isCollection)(value)) {
        var _ret2 = function () {
          var errors = [];
          (0, _iterall.forEach)(value, function (item, index) {
            errors.push.apply(errors, isValidJSValue(item, itemType).map(function (error) {
              return 'In element #' + index + ': ' + error;
            }));
          });
          return {
            v: {
              v: errors
            }
          };
        }();

        if (typeof _ret2 === "object") return _ret2.v;
      }
      return {
        v: isValidJSValue(value, itemType)
      };
    }();

    if (typeof _ret === "object") return _ret.v;
  }

  // Input objects check each defined field.
  if (type instanceof _definition.GraphQLInputObjectType) {
    var _ret3 = function () {
      if (typeof value !== 'object' || value === null) {
        return {
          v: ['Expected "' + type.name + '", found not an object.']
        };
      }
      var fields = type.getFields();

      var errors = [];

      // Ensure every provided field is defined.
      Object.keys(value).forEach(function (providedField) {
        if (!fields[providedField]) {
          errors.push('In field "' + providedField + '": Unknown field.');
        }
      });

      // Ensure every defined field is valid.
      Object.keys(fields).forEach(function (fieldName) {
        var newErrors = isValidJSValue(value[fieldName], fields[fieldName].type);
        errors.push.apply(errors, newErrors.map(function (error) {
          return 'In field "' + fieldName + '": ' + error;
        }));
      });

      return {
        v: errors
      };
    }();

    if (typeof _ret3 === "object") return _ret3.v;
  }

  (0, _invariant2.default)(type instanceof _definition.GraphQLScalarType || type instanceof _definition.GraphQLEnumType, 'Must be input type');

  // Scalar/Enum input checks to ensure the type can parse the value to
  // a non-null value.
  try {
    var parseResult = type.parseValue(value);
    if ((0, _isNullish2.default)(parseResult)) {
      return ['Expected type "' + type.name + '", found ' + JSON.stringify(value) + '.'];
    }
  } catch (error) {
    return ['Expected type "' + type.name + '", found ' + JSON.stringify(value) + ': ' + error.message];
  }

  return [];
}

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidLiteralValue = isValidLiteralValue;

var _printer = __webpack_require__(53);

var _kinds = __webpack_require__(17);

var _definition = __webpack_require__(6);

var _invariant = __webpack_require__(10);

var _invariant2 = _interopRequireDefault(_invariant);

var _keyMap = __webpack_require__(39);

var _keyMap2 = _interopRequireDefault(_keyMap);

var _isNullish = __webpack_require__(27);

var _isNullish2 = _interopRequireDefault(_isNullish);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Utility for validators which determines if a value literal node is valid
 * given an input type.
 *
 * Note that this only validates literal values, variables are assumed to
 * provide values of the correct type.
 */

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

function isValidLiteralValue(type, valueNode) {
  // A value must be provided if the type is non-null.
  if (type instanceof _definition.GraphQLNonNull) {
    if (!valueNode || valueNode.kind === _kinds.NULL) {
      return ['Expected "' + String(type) + '", found null.'];
    }
    return isValidLiteralValue(type.ofType, valueNode);
  }

  if (!valueNode || valueNode.kind === _kinds.NULL) {
    return [];
  }

  // This function only tests literals, and assumes variables will provide
  // values of the correct type.
  if (valueNode.kind === _kinds.VARIABLE) {
    return [];
  }

  // Lists accept a non-list value as a list of one.
  if (type instanceof _definition.GraphQLList) {
    var _ret = function () {
      var itemType = type.ofType;
      if (valueNode.kind === _kinds.LIST) {
        return {
          v: valueNode.values.reduce(function (acc, item, index) {
            var errors = isValidLiteralValue(itemType, item);
            return acc.concat(errors.map(function (error) {
              return 'In element #' + index + ': ' + error;
            }));
          }, [])
        };
      }
      return {
        v: isValidLiteralValue(itemType, valueNode)
      };
    }();

    if (typeof _ret === "object") return _ret.v;
  }

  // Input objects check each defined field and look for undefined fields.
  if (type instanceof _definition.GraphQLInputObjectType) {
    var _ret2 = function () {
      if (valueNode.kind !== _kinds.OBJECT) {
        return {
          v: ['Expected "' + type.name + '", found not an object.']
        };
      }
      var fields = type.getFields();

      var errors = [];

      // Ensure every provided field is defined.
      var fieldNodes = valueNode.fields;
      fieldNodes.forEach(function (providedFieldNode) {
        if (!fields[providedFieldNode.name.value]) {
          errors.push('In field "' + providedFieldNode.name.value + '": Unknown field.');
        }
      });

      // Ensure every defined field is valid.
      var fieldNodeMap = (0, _keyMap2.default)(fieldNodes, function (fieldNode) {
        return fieldNode.name.value;
      });
      Object.keys(fields).forEach(function (fieldName) {
        var result = isValidLiteralValue(fields[fieldName].type, fieldNodeMap[fieldName] && fieldNodeMap[fieldName].value);
        errors.push.apply(errors, result.map(function (error) {
          return 'In field "' + fieldName + '": ' + error;
        }));
      });

      return {
        v: errors
      };
    }();

    if (typeof _ret2 === "object") return _ret2.v;
  }

  (0, _invariant2.default)(type instanceof _definition.GraphQLScalarType || type instanceof _definition.GraphQLEnumType, 'Must be input type');

  // Scalar/Enum input checks to ensure the type can parse the value to
  // a non-null value.
  var parseResult = type.parseLiteral(valueNode);
  if ((0, _isNullish2.default)(parseResult)) {
    return ['Expected type "' + type.name + '", found ' + (0, _printer.print)(valueNode) + '.'];
  }

  return [];
}

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEqualType = isEqualType;
exports.isTypeSubTypeOf = isTypeSubTypeOf;
exports.doTypesOverlap = doTypesOverlap;

var _definition = __webpack_require__(6);

/**
 * Provided two types, return true if the types are equal (invariant).
 */
function isEqualType(typeA, typeB) {
  // Equivalent types are equal.
  if (typeA === typeB) {
    return true;
  }

  // If either type is non-null, the other must also be non-null.
  if (typeA instanceof _definition.GraphQLNonNull && typeB instanceof _definition.GraphQLNonNull) {
    return isEqualType(typeA.ofType, typeB.ofType);
  }

  // If either type is a list, the other must also be a list.
  if (typeA instanceof _definition.GraphQLList && typeB instanceof _definition.GraphQLList) {
    return isEqualType(typeA.ofType, typeB.ofType);
  }

  // Otherwise the types are not equal.
  return false;
}

/**
 * Provided a type and a super type, return true if the first type is either
 * equal or a subset of the second super type (covariant).
 */

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

function isTypeSubTypeOf(schema, maybeSubType, superType) {
  // Equivalent type is a valid subtype
  if (maybeSubType === superType) {
    return true;
  }

  // If superType is non-null, maybeSubType must also be non-null.
  if (superType instanceof _definition.GraphQLNonNull) {
    if (maybeSubType instanceof _definition.GraphQLNonNull) {
      return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
    }
    return false;
  } else if (maybeSubType instanceof _definition.GraphQLNonNull) {
    // If superType is nullable, maybeSubType may be non-null or nullable.
    return isTypeSubTypeOf(schema, maybeSubType.ofType, superType);
  }

  // If superType type is a list, maybeSubType type must also be a list.
  if (superType instanceof _definition.GraphQLList) {
    if (maybeSubType instanceof _definition.GraphQLList) {
      return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
    }
    return false;
  } else if (maybeSubType instanceof _definition.GraphQLList) {
    // If superType is not a list, maybeSubType must also be not a list.
    return false;
  }

  // If superType type is an abstract type, maybeSubType type may be a currently
  // possible object type.
  if ((0, _definition.isAbstractType)(superType) && maybeSubType instanceof _definition.GraphQLObjectType && schema.isPossibleType(superType, maybeSubType)) {
    return true;
  }

  // Otherwise, the child type is not a valid subtype of the parent type.
  return false;
}

/**
 * Provided two composite types, determine if they "overlap". Two composite
 * types overlap when the Sets of possible concrete types for each intersect.
 *
 * This is often used to determine if a fragment of a given type could possibly
 * be visited in a context of another type.
 *
 * This function is commutative.
 */
function doTypesOverlap(schema, typeA, typeB) {
  // So flow is aware this is constant
  var _typeB = typeB;

  // Equivalent types overlap
  if (typeA === _typeB) {
    return true;
  }

  if (typeA instanceof _definition.GraphQLInterfaceType || typeA instanceof _definition.GraphQLUnionType) {
    if (_typeB instanceof _definition.GraphQLInterfaceType || _typeB instanceof _definition.GraphQLUnionType) {
      // If both types are abstract, then determine if there is any intersection
      // between possible concrete types of each.
      return schema.getPossibleTypes(typeA).some(function (type) {
        return schema.isPossibleType(_typeB, type);
      });
    }
    // Determine if the latter type is a possible concrete type of the former.
    return schema.isPossibleType(typeA, _typeB);
  }

  if (_typeB instanceof _definition.GraphQLInterfaceType || _typeB instanceof _definition.GraphQLUnionType) {
    // Determine if the former type is a possible concrete type of the latter.
    return schema.isPossibleType(_typeB, typeA);
  }

  // Otherwise the types do not overlap.
  return false;
}

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
	setTimeout(fn, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__(115);
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(114)))

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(19);
var _curry3 = __webpack_require__(3);


/**
 * Applies a function to the value at the given index of an array, returning a
 * new copy of the array with the element at the given index replaced with the
 * result of the function application.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig (a -> a) -> Number -> [a] -> [a]
 * @param {Function} fn The function to apply.
 * @param {Number} idx The index.
 * @param {Array|Arguments} list An array-like object whose value
 *        at the supplied index will be replaced.
 * @return {Array} A copy of the supplied array-like object with
 *         the element at index `idx` replaced with the value
 *         returned by applying `fn` to the existing element.
 * @see R.update
 * @example
 *
 *      R.adjust(R.add(10), 1, [1, 2, 3]);     //=> [1, 12, 3]
 *      R.adjust(R.add(10))(1)([1, 2, 3]);     //=> [1, 12, 3]
 * @symb R.adjust(f, -1, [a, b]) = [a, f(b)]
 * @symb R.adjust(f, 0, [a, b]) = [f(a), b]
 */
module.exports = _curry3(function adjust(fn, idx, list) {
  if (idx >= list.length || idx < -list.length) {
    return list;
  }
  var start = idx < 0 ? list.length : 0;
  var _idx = start + idx;
  var _list = _concat(list);
  _list[_idx] = fn(list[_idx]);
  return _list;
});


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns `true` if both arguments are `true`; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any} the first argument if it is falsy, otherwise the second argument.
 * @see R.both
 * @example
 *
 *      R.and(true, true); //=> true
 *      R.and(true, false); //=> false
 *      R.and(false, true); //=> false
 *      R.and(false, false); //=> false
 */
module.exports = _curry2(function and(a, b) {
  return a && b;
});


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(4);
var _xany = __webpack_require__(143);


/**
 * Returns `true` if at least one of elements of the list match the predicate,
 * `false` otherwise.
 *
 * Dispatches to the `any` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by at least one element, `false`
 *         otherwise.
 * @see R.all, R.none, R.transduce
 * @example
 *
 *      var lessThan0 = R.flip(R.lt)(0);
 *      var lessThan2 = R.flip(R.lt)(2);
 *      R.any(lessThan0)([1, 2]); //=> false
 *      R.any(lessThan2)([1, 2]); //=> true
 */
module.exports = _curry2(_dispatchable(['any'], _xany, function any(fn, list) {
  var idx = 0;
  while (idx < list.length) {
    if (fn(list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}));


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Applies function `fn` to the argument list `args`. This is useful for
 * creating a fixed-arity function from a variadic function. `fn` should be a
 * bound function if context is significant.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> a) -> [*] -> a
 * @param {Function} fn The function which will be called with `args`
 * @param {Array} args The arguments to call `fn` with
 * @return {*} result The result, equivalent to `fn(...args)`
 * @see R.call, R.unapply
 * @example
 *
 *      var nums = [1, 2, 3, -99, 42, 6, 7];
 *      R.apply(Math.max, nums); //=> 42
 * @symb R.apply(f, [a, b, c]) = f(a, b, c)
 */
module.exports = _curry2(function apply(fn, args) {
  return fn.apply(this, args);
});


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);
var _has = __webpack_require__(11);
var _isArray = __webpack_require__(25);
var _isInteger = __webpack_require__(139);
var assoc = __webpack_require__(43);


/**
 * Makes a shallow clone of an object, setting or overriding the nodes required
 * to create the given path, and placing the specific value at the tail end of
 * that path. Note that this copies and flattens prototype properties onto the
 * new object as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> a -> {a} -> {a}
 * @param {Array} path the path to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except along the specified path.
 * @see R.dissocPath
 * @example
 *
 *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
 *
 *      // Any missing or non-object keys in path will be overridden
 *      R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
 */
module.exports = _curry3(function assocPath(path, val, obj) {
  if (path.length === 0) {
    return val;
  }
  var idx = path[0];
  if (path.length > 1) {
    var nextObj = _has(idx, obj) ? obj[idx] : _isInteger(path[1]) ? [] : {};
    val = assocPath(Array.prototype.slice.call(path, 1), val, nextObj);
  }
  if (_isInteger(idx) && _isArray(obj)) {
    var arr = [].concat(obj);
    arr[idx] = val;
    return arr;
  } else {
    return assoc(idx, val, obj);
  }
});


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(23);
var _curry2 = __webpack_require__(0);


/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      var log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */
module.exports = _curry2(function bind(fn, thisObj) {
  return _arity(fn.length, function() {
    return fn.apply(thisObj, arguments);
  });
});


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var chain = __webpack_require__(84);
var compose = __webpack_require__(55);
var map = __webpack_require__(15);


/**
 * Returns the right-to-left Kleisli composition of the provided functions,
 * each of which must return a value of a type supported by [`chain`](#chain).
 *
 * `R.composeK(h, g, f)` is equivalent to `R.compose(R.chain(h), R.chain(g), R.chain(f))`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Function
 * @sig Chain m => ((y -> m z), (x -> m y), ..., (a -> m b)) -> (a -> m z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipeK
 * @example
 *
 *       //  get :: String -> Object -> Maybe *
 *       var get = R.curry((propName, obj) => Maybe(obj[propName]))
 *
 *       //  getStateCode :: Maybe String -> Maybe String
 *       var getStateCode = R.composeK(
 *         R.compose(Maybe.of, R.toUpper),
 *         get('state'),
 *         get('address'),
 *         get('user'),
 *       );
 *       getStateCode({"user":{"address":{"state":"ny"}}}); //=> Maybe.Just("NY")
 *       getStateCode({}); //=> Maybe.Nothing()
 * @symb R.composeK(f, g, h)(a) = R.chain(f, R.chain(g, h(a)))
 */
module.exports = function composeK() {
  if (arguments.length === 0) {
    throw new Error('composeK requires at least one argument');
  }
  var init = Array.prototype.slice.call(arguments);
  var last = init.pop();
  return compose(compose.apply(this, map(chain, init)), last);
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var curry = __webpack_require__(56);
var nAry = __webpack_require__(65);


/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type. The arity of the function
 * returned is specified to allow using variadic constructor functions.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Function
 * @sig Number -> (* -> {*}) -> (* -> {*})
 * @param {Number} n The arity of the constructor function.
 * @param {Function} Fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @example
 *
 *      // Variadic Constructor function
 *      function Salad() {
 *        this.ingredients = arguments;
 *      };
 *      Salad.prototype.recipe = function() {
 *        var instructions = R.map((ingredient) => (
 *          'Add a whollop of ' + ingredient, this.ingredients)
 *        )
 *        return R.join('\n', instructions)
 *      }
 *
 *      var ThreeLayerSalad = R.constructN(3, Salad)
 *
 *      // Notice we no longer need the 'new' keyword, and the constructor is curried for 3 arguments.
 *      var salad = ThreeLayerSalad('Mayonnaise')('Potato Chips')('Ketchup')
 *      console.log(salad.recipe());
 *      // Add a whollop of Mayonnaise
 *      // Add a whollop of Potato Chips
 *      // Add a whollop of Potato Ketchup
 */
module.exports = _curry2(function constructN(n, Fn) {
  if (n > 10) {
    throw new Error('Constructor with greater than ten arguments');
  }
  if (n === 0) {
    return function() { return new Fn(); };
  }
  return curry(nAry(n, function($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    switch (arguments.length) {
      case  1: return new Fn($0);
      case  2: return new Fn($0, $1);
      case  3: return new Fn($0, $1, $2);
      case  4: return new Fn($0, $1, $2, $3);
      case  5: return new Fn($0, $1, $2, $3, $4);
      case  6: return new Fn($0, $1, $2, $3, $4, $5);
      case  7: return new Fn($0, $1, $2, $3, $4, $5, $6);
      case  8: return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
      case  9: return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
      case 10: return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
    }
  }));
});


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _map = __webpack_require__(62);
var curryN = __webpack_require__(8);
var max = __webpack_require__(34);
var pluck = __webpack_require__(49);
var reduce = __webpack_require__(21);


/**
 * Accepts a converging function and a list of branching functions and returns
 * a new function. When invoked, this new function is applied to some
 * arguments, each branching function is applied to those same arguments. The
 * results of each branching function are passed as arguments to the converging
 * function to produce the return value.
 *
 * @func
 * @memberOf R
 * @since v0.4.2
 * @category Function
 * @sig (x1 -> x2 -> ... -> z) -> [(a -> b -> ... -> x1), (a -> b -> ... -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} after A function. `after` will be invoked with the return values of
 *        `fn1` and `fn2` as its arguments.
 * @param {Array} functions A list of functions.
 * @return {Function} A new function.
 * @see R.useWith
 * @example
 *
 *      var average = R.converge(R.divide, [R.sum, R.length])
 *      average([1, 2, 3, 4, 5, 6, 7]) //=> 4
 *
 *      var strangeConcat = R.converge(R.concat, [R.toUpper, R.toLower])
 *      strangeConcat("Yodel") //=> "YODELyodel"
 *
 * @symb R.converge(f, [g, h])(a, b) = f(g(a, b), h(a, b))
 */
module.exports = _curry2(function converge(after, fns) {
  return curryN(reduce(max, 0, pluck('length', fns)), function() {
    var args = arguments;
    var context = this;
    return after.apply(context, _map(function(fn) {
      return fn.apply(context, args);
    }, fns));
  });
});


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns the second argument if it is not `null`, `undefined` or `NaN`
 * otherwise the first argument is returned.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {a} default The default value.
 * @param {b} val `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.
 * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
 * @example
 *
 *      var defaultTo42 = R.defaultTo(42);
 *
 *      defaultTo42(null);  //=> 42
 *      defaultTo42(undefined);  //=> 42
 *      defaultTo42('Ramda');  //=> 'Ramda'
 *      // parseInt('string') results in NaN
 *      defaultTo42(parseInt('string')); //=> 42
 */
module.exports = _curry2(function defaultTo(d, v) {
  return v == null || v !== v ? d : v;
});


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var _contains = __webpack_require__(29);
var _curry2 = __webpack_require__(0);


/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Objects and Arrays are compared are compared
 * in terms of value equality, not reference equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.differenceWith, R.symmetricDifference, R.symmetricDifferenceWith
 * @example
 *
 *      R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
 *      R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
 *      R.difference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) //=> [{b: 2}]
 */
module.exports = _curry2(function difference(first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  while (idx < firstLen) {
    if (!_contains(first[idx], second) && !_contains(first[idx], out)) {
      out[out.length] = first[idx];
    }
    idx += 1;
  }
  return out;
});


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var _containsWith = __webpack_require__(90);
var _curry3 = __webpack_require__(3);


/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Duplication is determined according to the
 * value returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.difference, R.symmetricDifference, R.symmetricDifferenceWith
 * @example
 *
 *      var cmp = (x, y) => x.a === y.a;
 *      var l1 = [{a: 1}, {a: 2}, {a: 3}];
 *      var l2 = [{a: 3}, {a: 4}];
 *      R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]
 */
module.exports = _curry3(function differenceWith(pred, first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  while (idx < firstLen) {
    if (!_containsWith(pred, first[idx], second) &&
        !_containsWith(pred, first[idx], out)) {
      out.push(first[idx]);
    }
    idx += 1;
  }
  return out;
});


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(4);
var _xdrop = __webpack_require__(338);
var slice = __webpack_require__(30);


/**
 * Returns all but the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `drop` method).
 *
 * Dispatches to the `drop` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {[a]} list
 * @return {[a]} A copy of list without the first `n` elements
 * @see R.take, R.transduce, R.dropLast, R.dropWhile
 * @example
 *
 *      R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.drop(3, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(4, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(3, 'ramda');               //=> 'da'
 */
module.exports = _curry2(_dispatchable(['drop'], _xdrop, function drop(n, xs) {
  return slice(Math.max(0, n), Infinity, xs);
}));


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(4);
var _xdropRepeatsWith = __webpack_require__(144);
var last = __webpack_require__(148);


/**
 * Returns a new list without any consecutively repeating elements. Equality is
 * determined by applying the supplied predicate to each pair of consecutive elements. The
 * first element in a series of equal elements will be preserved.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig (a, a -> Boolean) -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *      var l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];
 *      R.dropRepeatsWith(R.eqBy(Math.abs), l); //=> [1, 3, 4, -5, 3]
 */
module.exports = _curry2(_dispatchable([], _xdropRepeatsWith, function dropRepeatsWith(pred, list) {
  var result = [];
  var idx = 1;
  var len = list.length;
  if (len !== 0) {
    result[0] = list[0];
    while (idx < len) {
      if (!pred(last(result), list[idx])) {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
  }
  return result;
}));



/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var _isArguments = __webpack_require__(138);
var _isArray = __webpack_require__(25);
var _isObject = __webpack_require__(141);
var _isString = __webpack_require__(61);


/**
 * Returns the empty value of its argument's type. Ramda defines the empty
 * value of Array (`[]`), Object (`{}`), String (`''`), and Arguments. Other
 * types are supported if they define `<Type>.empty` and/or
 * `<Type>.prototype.empty`.
 *
 * Dispatches to the `empty` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> a
 * @param {*} x
 * @return {*}
 * @example
 *
 *      R.empty(Just(42));      //=> Nothing()
 *      R.empty([1, 2, 3]);     //=> []
 *      R.empty('unicorns');    //=> ''
 *      R.empty({x: 1, y: 2});  //=> {}
 */
module.exports = _curry1(function empty(x) {
  return (
    (x != null && typeof x.empty === 'function') ?
      x.empty() :
    (x != null && x.constructor != null && typeof x.constructor.empty === 'function') ?
      x.constructor.empty() :
    _isArray(x) ?
      [] :
    _isString(x) ?
      '' :
    _isObject(x) ?
      {} :
    _isArguments(x) ?
      (function() { return arguments; }()) :
    // else
      void 0
  );
});


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns true if its arguments are identical, false otherwise. Values are
 * identical if they reference the same memory. `NaN` is identical to `NaN`;
 * `0` and `-0` are not identical.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      var o = {};
 *      R.identical(o, o); //=> true
 *      R.identical(1, 1); //=> true
 *      R.identical(1, '1'); //=> false
 *      R.identical([], []); //=> false
 *      R.identical(0, -0); //=> false
 *      R.identical(NaN, NaN); //=> true
 */
module.exports = _curry2(function identical(a, b) {
  // SameValue algorithm
  if (a === b) { // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return a !== 0 || 1 / a === 1 / b;
  } else {
    // Step 6.a: NaN == NaN
    return a !== a && b !== b;
  }
});


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var _cloneRegExp = __webpack_require__(133);
var type = __webpack_require__(95);


/**
 * Copies an object.
 *
 * @private
 * @param {*} value The value to be copied
 * @param {Array} refFrom Array containing the source references
 * @param {Array} refTo Array containing the copied source references
 * @param {Boolean} deep Whether or not to perform deep cloning.
 * @return {*} The copied value.
 */
module.exports = function _clone(value, refFrom, refTo, deep) {
  var copy = function copy(copiedValue) {
    var len = refFrom.length;
    var idx = 0;
    while (idx < len) {
      if (value === refFrom[idx]) {
        return refTo[idx];
      }
      idx += 1;
    }
    refFrom[idx + 1] = value;
    refTo[idx + 1] = copiedValue;
    for (var key in value) {
      copiedValue[key] = deep ?
        _clone(value[key], refFrom, refTo, true) : value[key];
    }
    return copiedValue;
  };
  switch (type(value)) {
    case 'Object':  return copy({});
    case 'Array':   return copy([]);
    case 'Date':    return new Date(value.valueOf());
    case 'RegExp':  return _cloneRegExp(value);
    default:        return value;
  }
};


/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports = function _cloneRegExp(pattern) {
  return new RegExp(pattern.source, (pattern.global     ? 'g' : '') +
                                    (pattern.ignoreCase ? 'i' : '') +
                                    (pattern.multiline  ? 'm' : '') +
                                    (pattern.sticky     ? 'y' : '') +
                                    (pattern.unicode    ? 'u' : ''));
};


/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports = function _complement(f) {
  return function() {
    return !f.apply(this, arguments);
  };
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(23);
var _curry2 = __webpack_require__(0);


module.exports = function _createPartialApplicator(concat) {
  return _curry2(function(fn, args) {
    return _arity(Math.max(0, fn.length - args.length), function() {
      return fn.apply(this, concat(args, arguments));
    });
  });
};


/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports = function _filter(fn, list) {
  var idx = 0;
  var len = list.length;
  var result = [];

  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx];
    }
    idx += 1;
  }
  return result;
};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var equals = __webpack_require__(22);


module.exports = function _indexOf(list, a, idx) {
  var inf, item;
  // Array.prototype.indexOf doesn't exist below IE9
  if (typeof list.indexOf === 'function') {
    switch (typeof a) {
      case 'number':
        if (a === 0) {
          // manually crawl the list to distinguish between +0 and -0
          inf = 1 / a;
          while (idx < list.length) {
            item = list[idx];
            if (item === 0 && 1 / item === inf) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        } else if (a !== a) {
          // NaN
          while (idx < list.length) {
            item = list[idx];
            if (typeof item === 'number' && item !== item) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        }
        // non-zero numbers can utilise Set
        return list.indexOf(a, idx);

      // all these types can utilise Set
      case 'string':
      case 'boolean':
      case 'function':
      case 'undefined':
        return list.indexOf(a, idx);

      case 'object':
        if (a === null) {
          // null can utilise Set
          return list.indexOf(a, idx);
        }
    }
  }
  // anything else not covered above, defer to R.equals
  while (idx < list.length) {
    if (equals(list[idx], a)) {
      return idx;
    }
    idx += 1;
  }
  return -1;
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var _has = __webpack_require__(11);


module.exports = (function() {
  var toString = Object.prototype.toString;
  return toString.call(arguments) === '[object Arguments]' ?
    function _isArguments(x) { return toString.call(x) === '[object Arguments]'; } :
    function _isArguments(x) { return _has('callee', x); };
}());


/***/ }),
/* 139 */
/***/ (function(module, exports) {

/**
 * Determine if the passed argument is an integer.
 *
 * @private
 * @param {*} n
 * @category Type
 * @return {Boolean}
 */
module.exports = Number.isInteger || function _isInteger(n) {
  return (n << 0) === n;
};


/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = function _isNumber(x) {
  return Object.prototype.toString.call(x) === '[object Number]';
};


/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports = function _isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(46);


/**
 * `_makeFlat` is a helper function that returns a one-level or fully recursive
 * function based on the flag passed in.
 *
 * @private
 */
module.exports = function _makeFlat(recursive) {
  return function flatt(list) {
    var value, jlen, j;
    var result = [];
    var idx = 0;
    var ilen = list.length;

    while (idx < ilen) {
      if (isArrayLike(list[idx])) {
        value = recursive ? flatt(list[idx]) : list[idx];
        j = 0;
        jlen = value.length;
        while (j < jlen) {
          result[result.length] = value[j];
          j += 1;
        }
      } else {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
    return result;
  };
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _reduced = __webpack_require__(26);
var _xfBase = __webpack_require__(7);


module.exports = (function() {
  function XAny(f, xf) {
    this.xf = xf;
    this.f = f;
    this.any = false;
  }
  XAny.prototype['@@transducer/init'] = _xfBase.init;
  XAny.prototype['@@transducer/result'] = function(result) {
    if (!this.any) {
      result = this.xf['@@transducer/step'](result, false);
    }
    return this.xf['@@transducer/result'](result);
  };
  XAny.prototype['@@transducer/step'] = function(result, input) {
    if (this.f(input)) {
      this.any = true;
      result = _reduced(this.xf['@@transducer/step'](result, true));
    }
    return result;
  };

  return _curry2(function _xany(f, xf) { return new XAny(f, xf); });
}());


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _xfBase = __webpack_require__(7);


module.exports = (function() {
  function XDropRepeatsWith(pred, xf) {
    this.xf = xf;
    this.pred = pred;
    this.lastValue = undefined;
    this.seenFirstValue = false;
  }

  XDropRepeatsWith.prototype['@@transducer/init'] = _xfBase.init;
  XDropRepeatsWith.prototype['@@transducer/result'] = _xfBase.result;
  XDropRepeatsWith.prototype['@@transducer/step'] = function(result, input) {
    var sameAsLast = false;
    if (!this.seenFirstValue) {
      this.seenFirstValue = true;
    } else if (this.pred(this.lastValue, input)) {
      sameAsLast = true;
    }
    this.lastValue = input;
    return sameAsLast ? result : this.xf['@@transducer/step'](result, input);
  };

  return _curry2(function _xdropRepeatsWith(pred, xf) { return new XDropRepeatsWith(pred, xf); });
}());


/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports = (function() {
  function XWrap(fn) {
    this.f = fn;
  }
  XWrap.prototype['@@transducer/init'] = function() {
    throw new Error('init not implemented on XWrap');
  };
  XWrap.prototype['@@transducer/result'] = function(acc) { return acc; };
  XWrap.prototype['@@transducer/step'] = function(acc, x) {
    return this.f(acc, x);
  };

  return function _xwrap(fn) { return new XWrap(fn); };
}());


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * See if an object (`val`) is an instance of the supplied constructor. This
 * function will check up the inheritance chain, if any.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Type
 * @sig (* -> {*}) -> a -> Boolean
 * @param {Object} ctor A constructor
 * @param {*} val The value to test
 * @return {Boolean}
 * @example
 *
 *      R.is(Object, {}); //=> true
 *      R.is(Number, 1); //=> true
 *      R.is(Object, 1); //=> false
 *      R.is(String, 's'); //=> true
 *      R.is(String, new String('')); //=> true
 *      R.is(Object, new String('')); //=> true
 *      R.is(Object, 's'); //=> false
 *      R.is(Number, {}); //=> false
 */
module.exports = _curry2(function is(Ctor, val) {
  return val != null && val.constructor === Ctor || val instanceof Ctor;
});


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var converge = __webpack_require__(124);


/**
 * juxt applies a list of functions to a list of values.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Function
 * @sig [(a, b, ..., m) -> n] -> ((a, b, ..., m) -> [n])
 * @param {Array} fns An array of functions
 * @return {Function} A function that returns a list of values after applying each of the original `fns` to its parameters.
 * @see R.applySpec
 * @example
 *
 *      var getRange = R.juxt([Math.min, Math.max]);
 *      getRange(3, 4, 9, -3); //=> [-3, 9]
 * @symb R.juxt([f, g, h])(a, b) = [f(a, b), g(a, b), h(a, b)]
 */
module.exports = _curry1(function juxt(fns) {
  return converge(function() { return Array.prototype.slice.call(arguments, 0); }, fns);
});


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var nth = __webpack_require__(47);


/**
 * Returns the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.init, R.head, R.tail
 * @example
 *
 *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
 *      R.last([]); //=> undefined
 *
 *      R.last('abc'); //=> 'c'
 *      R.last(''); //=> ''
 */
module.exports = nth(-1);


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var _isNumber = __webpack_require__(140);


/**
 * Returns the number of elements in the array by returning `list.length`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [a] -> Number
 * @param {Array} list The array to inspect.
 * @return {Number} The length of the array.
 * @example
 *
 *      R.length([]); //=> 0
 *      R.length([1, 2, 3]); //=> 3
 */
module.exports = _curry1(function length(list) {
  return list != null && _isNumber(list.length) ? list.length : NaN;
});


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _reduce = __webpack_require__(18);
var ap = __webpack_require__(83);
var curryN = __webpack_require__(8);
var map = __webpack_require__(15);


/**
 * "lifts" a function to be the specified arity, so that it may "map over" that
 * many lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig Number -> (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.lift, R.ap
 * @example
 *
 *      var madd3 = R.liftN(3, (...args) => R.sum(args));
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 */
module.exports = _curry2(function liftN(arity, fn) {
  var lifted = curryN(arity, fn);
  return curryN(arity, function() {
    return _reduce(ap, map(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
});


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var sum = __webpack_require__(165);


/**
 * Returns the mean of the given list of numbers.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @example
 *
 *      R.mean([2, 7, 9]); //=> 6
 *      R.mean([]); //=> NaN
 */
module.exports = _curry1(function mean(list) {
  return sum(list) / list.length;
});


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);
var _has = __webpack_require__(11);


/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the key
 * and the values associated with the key in each object, with the result being
 * used as the value associated with the key in the returned object. The key
 * will be excluded from the returned object if the resulting value is
 * `undefined`.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig (String -> a -> a -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.merge, R.mergeWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeWithKey(concatValues,
 *                     { a: true, thing: 'foo', values: [10, 20] },
 *                     { b: true, thing: 'bar', values: [15, 35] });
 *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
 * @symb R.mergeWithKey(f, { x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: f('y', 2, 5), z: 3 }
 */
module.exports = _curry3(function mergeWithKey(fn, l, r) {
  var result = {};
  var k;

  for (k in l) {
    if (_has(k, l)) {
      result[k] = _has(k, r) ? fn(k, l[k], r[k]) : l[k];
    }
  }

  for (k in r) {
    if (_has(k, r) && !(_has(k, result))) {
      result[k] = r[k];
    }
  }

  return result;
});


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Multiplies two numbers. Equivalent to `a * b` but curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a * b`.
 * @see R.divide
 * @example
 *
 *      var double = R.multiply(2);
 *      var triple = R.multiply(3);
 *      double(3);       //=>  6
 *      triple(4);       //=> 12
 *      R.multiply(2, 5);  //=> 10
 */
module.exports = _curry2(function multiply(a, b) { return a * b; });


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);


/**
 * A function that returns the `!` of its argument. It will return `true` when
 * passed false-y value, and `false` when passed a truth-y one.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig * -> Boolean
 * @param {*} a any value
 * @return {Boolean} the logical inverse of passed argument.
 * @see R.complement
 * @example
 *
 *      R.not(true); //=> false
 *      R.not(false); //=> true
 *      R.not(0); //=> true
 *      R.not(1); //=> false
 */
module.exports = _curry1(function not(a) {
  return !a;
});


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Creates an object containing a single key:value pair.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @sig String -> a -> {String:a}
 * @param {String} key
 * @param {*} val
 * @return {Object}
 * @see R.pair
 * @example
 *
 *      var matchPhrases = R.compose(
 *        R.objOf('must'),
 *        R.map(R.objOf('match_phrase'))
 *      );
 *      matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}
 */
module.exports = _curry2(function objOf(key, val) {
  var obj = {};
  obj[key] = val;
  return obj;
});


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns `true` if one or both of its arguments are `true`. Returns `false`
 * if both arguments are `false`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any} the first argument if truthy, otherwise the second argument.
 * @see R.either
 * @example
 *
 *      R.or(true, true); //=> true
 *      R.or(true, false); //=> true
 *      R.or(false, true); //=> true
 *      R.or(false, false); //=> false
 */
module.exports = _curry2(function or(a, b) {
  return a || b;
});


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);


/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the result of applying the given function to
 * the focused value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> (a -> a) -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var headLens = R.lensIndex(0);
 *
 *      R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
 */
module.exports = (function() {
  // `Identity` is a functor that holds a single value, where `map` simply
  // transforms the held value with the provided function.
  var Identity = function(x) {
    return {value: x, map: function(f) { return Identity(f(x)); }};
  };

  return _curry3(function over(lens, f, x) {
    // The value returned by the getter function is first transformed with `f`,
    // then set as the value of an `Identity`. This is then mapped over with the
    // setter function of the lens.
    return lens(function(y) { return Identity(f(y)); })(x).value;
  });
}());


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Similar to `pick` except that this one includes a `key: undefined` pair for
 * properties that don't exist.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.pick
 * @example
 *
 *      R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}
 */
module.exports = _curry2(function pickAll(names, obj) {
  var result = {};
  var idx = 0;
  var len = names.length;
  while (idx < len) {
    var name = names[idx];
    result[name] = obj[name];
    idx += 1;
  }
  return result;
});


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns a partial copy of an object containing only the keys that satisfy
 * the supplied predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig (v, k -> Boolean) -> {k: v} -> {k: v}
 * @param {Function} pred A predicate to determine whether or not a key
 *        should be included on the output object.
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties that satisfy `pred`
 *         on it.
 * @see R.pick, R.filter
 * @example
 *
 *      var isUpperCase = (val, key) => key.toUpperCase() === key;
 *      R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
 */
module.exports = _curry2(function pickBy(test, obj) {
  var result = {};
  for (var prop in obj) {
    if (test(obj[prop], prop, obj)) {
      result[prop] = obj[prop];
    }
  }
  return result;
});


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(23);
var _pipe = __webpack_require__(329);
var reduce = __webpack_require__(21);
var tail = __webpack_require__(94);


/**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity; the remaining functions must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.compose
 * @example
 *
 *      var f = R.pipe(Math.pow, R.negate, R.inc);
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
 */
module.exports = function pipe() {
  if (arguments.length === 0) {
    throw new Error('pipe requires at least one argument');
  }
  return _arity(arguments[0].length,
                reduce(_pipe, arguments[0], tail(arguments)));
};


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(23);
var _pipeP = __webpack_require__(330);
var reduce = __webpack_require__(21);
var tail = __webpack_require__(94);


/**
 * Performs left-to-right composition of one or more Promise-returning
 * functions. The leftmost function may have any arity; the remaining functions
 * must be unary.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a -> Promise b), (b -> Promise c), ..., (y -> Promise z)) -> (a -> Promise z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.composeP
 * @example
 *
 *      //  followersForUser :: String -> Promise [User]
 *      var followersForUser = R.pipeP(db.getUserById, db.getFollowers);
 */
module.exports = function pipeP() {
  if (arguments.length === 0) {
    throw new Error('pipeP requires at least one argument');
  }
  return _arity(arguments[0].length,
                reduce(_pipeP, arguments[0], tail(arguments)));
};


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(19);
var _curry2 = __webpack_require__(0);


/**
 * Returns a new list with the given element at the front, followed by the
 * contents of the list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The item to add to the head of the output list.
 * @param {Array} list The array to add to the tail of the output list.
 * @return {Array} A new array.
 * @see R.append
 * @example
 *
 *      R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
 */
module.exports = _curry2(function prepend(el, list) {
  return _concat([el], list);
});


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);


/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * Similar to `reduce`, except moves through the input list from the right to
 * the left.
 *
 * The iterator function receives two values: *(value, acc)*, while the arguments'
 * order of `reduce`'s iterator function is *(acc, value)*.
 *
 * Note: `R.reduceRight` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a, b -> b) -> b -> [a] -> b
 * @param {Function} fn The iterator function. Receives two values, the current element from the array
 *        and the accumulator.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.addIndex
 * @example
 *
 *      R.reduceRight(R.subtract, 0, [1, 2, 3, 4]) // => (1 - (2 - (3 - (4 - 0)))) = -2
 *          -               -2
 *         / \              / \
 *        1   -            1   3
 *           / \              / \
 *          2   -     ==>    2  -1
 *             / \              / \
 *            3   -            3   4
 *               / \              / \
 *              4   0            4   0
 *
 * @symb R.reduceRight(f, a, [b, c, d]) = f(b, f(c, f(d, a)))
 */
module.exports = _curry3(function reduceRight(fn, acc, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    acc = fn(list[idx], acc);
    idx -= 1;
  }
  return acc;
});


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var ap = __webpack_require__(83);
var map = __webpack_require__(15);
var prepend = __webpack_require__(162);
var reduceRight = __webpack_require__(163);


/**
 * Transforms a [Traversable](https://github.com/fantasyland/fantasy-land#traversable)
 * of [Applicative](https://github.com/fantasyland/fantasy-land#applicative) into an
 * Applicative of Traversable.
 *
 * Dispatches to the `sequence` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (Applicative f, Traversable t) => (a -> f a) -> t (f a) -> f (t a)
 * @param {Function} of
 * @param {*} traversable
 * @return {*}
 * @see R.traverse
 * @example
 *
 *      R.sequence(Maybe.of, [Just(1), Just(2), Just(3)]);   //=> Just([1, 2, 3])
 *      R.sequence(Maybe.of, [Just(1), Just(2), Nothing()]); //=> Nothing()
 *
 *      R.sequence(R.of, Just([1, 2, 3])); //=> [Just(1), Just(2), Just(3)]
 *      R.sequence(R.of, Nothing());       //=> [Nothing()]
 */
module.exports = _curry2(function sequence(of, traversable) {
  return typeof traversable.sequence === 'function' ?
    traversable.sequence(of) :
    reduceRight(function(x, acc) { return ap(map(prepend, x), acc); },
                of([]),
                traversable);
});


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var add = __webpack_require__(54);
var reduce = __webpack_require__(21);


/**
 * Adds together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The sum of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.sum([2,4,6,8,100,1]); //=> 121
 */
module.exports = reduce(add, 0);


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(4);
var _xtake = __webpack_require__(349);
var slice = __webpack_require__(30);


/**
 * Returns the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `take` method).
 *
 * Dispatches to the `take` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*}
 * @see R.drop
 * @example
 *
 *      R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(3, 'ramda');               //=> 'ram'
 *
 *      var personnel = [
 *        'Dave Brubeck',
 *        'Paul Desmond',
 *        'Eugene Wright',
 *        'Joe Morello',
 *        'Gerry Mulligan',
 *        'Bob Bates',
 *        'Joe Dodge',
 *        'Ron Crotty'
 *      ];
 *
 *      var takeFive = R.take(5);
 *      takeFive(personnel);
 *      //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
 * @symb R.take(-1, [a, b]) = [a, b]
 * @symb R.take(0, [a, b]) = []
 * @symb R.take(1, [a, b]) = [a]
 * @symb R.take(2, [a, b]) = [a, b]
 */
module.exports = _curry2(_dispatchable(['take'], _xtake, function take(n, xs) {
  return slice(0, n < 0 ? Infinity : n, xs);
}));


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Calls an input function `n` times, returning an array containing the results
 * of those function calls.
 *
 * `fn` is passed one argument: The current value of `n`, which begins at `0`
 * and is gradually incremented to `n - 1`.
 *
 * @func
 * @memberOf R
 * @since v0.2.3
 * @category List
 * @sig (Number -> a) -> Number -> [a]
 * @param {Function} fn The function to invoke. Passed one argument, the current value of `n`.
 * @param {Number} n A value between `0` and `n - 1`. Increments after each function call.
 * @return {Array} An array containing the return values of all calls to `fn`.
 * @example
 *
 *      R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
 * @symb R.times(f, 0) = []
 * @symb R.times(f, 1) = [f(0)]
 * @symb R.times(f, 2) = [f(0), f(1)]
 */
module.exports = _curry2(function times(fn, n) {
  var len = Number(n);
  var idx = 0;
  var list;

  if (len < 0 || isNaN(len)) {
    throw new RangeError('n must be a non-negative number');
  }
  list = new Array(len);
  while (idx < len) {
    list[idx] = fn(idx);
    idx += 1;
  }
  return list;
});


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var _Set = __webpack_require__(317);
var _curry2 = __webpack_require__(0);


/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied function to
 * each list element. Prefers the first item if the supplied function produces
 * the same value on two items. `R.equals` is used for comparison.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> b) -> [a] -> [a]
 * @param {Function} fn A function used to produce a value to use during comparisons.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
 */
module.exports = _curry2(function uniqBy(fn, list) {
  var set = new _Set();
  var result = [];
  var idx = 0;
  var appliedItem, item;

  while (idx < list.length) {
    item = list[idx];
    appliedItem = fn(item);
    if (set.add(appliedItem)) {
      result.push(item);
    }
    idx += 1;
  }
  return result;
});


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);
var adjust = __webpack_require__(116);
var always = __webpack_require__(33);


/**
 * Returns a new copy of the array with the element at the provided index
 * replaced with the given value.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} idx The index to update.
 * @param {*} x The value to exist at the given index of the returned array.
 * @param {Array|Arguments} list The source array-like object to be updated.
 * @return {Array} A copy of `list` with the value at index `idx` replaced with `x`.
 * @see R.adjust
 * @example
 *
 *      R.update(1, 11, [0, 1, 2]);     //=> [0, 11, 2]
 *      R.update(1)(11)([0, 1, 2]);     //=> [0, 11, 2]
 * @symb R.update(-1, a, [b, c]) = [b, a]
 * @symb R.update(0, a, [b, c]) = [a, c]
 * @symb R.update(1, a, [b, c]) = [b, a]
 */
module.exports = _curry3(function update(idx, x, list) {
  return adjust(always(x), idx, list);
});


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var curryN = __webpack_require__(8);


/**
 * Accepts a function `fn` and a list of transformer functions and returns a
 * new curried function. When the new function is invoked, it calls the
 * function `fn` with parameters consisting of the result of calling each
 * supplied handler on successive arguments to the new function.
 *
 * If more arguments are passed to the returned function than transformer
 * functions, those arguments are passed directly to `fn` as additional
 * parameters. If you expect additional arguments that don't need to be
 * transformed, although you can ignore them, it's best to pass an identity
 * function so that the new function reports the correct arity.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (x1 -> x2 -> ... -> z) -> [(a -> x1), (b -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} fn The function to wrap.
 * @param {Array} transformers A list of transformer functions
 * @return {Function} The wrapped function.
 * @see R.converge
 * @example
 *
 *      R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81
 *      R.useWith(Math.pow, [R.identity, R.identity])(3)(4); //=> 81
 *      R.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32
 *      R.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32
 * @symb R.useWith(f, [g, h])(a, b) = f(g(a), h(b))
 */
module.exports = _curry2(function useWith(fn, transformers) {
  return curryN(transformers.length, function() {
    var args = [];
    var idx = 0;
    while (idx < transformers.length) {
      args.push(transformers[idx].call(this, arguments[idx]));
      idx += 1;
    }
    return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, transformers.length)));
  });
});


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var keys = __webpack_require__(20);


/**
 * Returns a list of all the enumerable own properties of the supplied object.
 * Note that the order of the output array is not guaranteed across different
 * JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own properties.
 * @example
 *
 *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
 */
module.exports = _curry1(function values(obj) {
  var props = keys(obj);
  var len = props.length;
  var vals = [];
  var idx = 0;
  while (idx < len) {
    vals[idx] = obj[props[idx]];
    idx += 1;
  }
  return vals;
});


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _has = __webpack_require__(11);


/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec. Each of the spec's own properties must be a predicate function.
 * Each predicate is applied to the value of the corresponding property of the
 * test object. `where` returns true if all the predicates return true, false
 * otherwise.
 *
 * `where` is well suited to declaratively expressing constraints for other
 * functions such as `filter` and `find`.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category Object
 * @sig {String: (* -> Boolean)} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @example
 *
 *      // pred :: Object -> Boolean
 *      var pred = R.where({
 *        a: R.equals('foo'),
 *        b: R.complement(R.equals('bar')),
 *        x: R.gt(__, 10),
 *        y: R.lt(__, 20)
 *      });
 *
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
 *      pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false
 */
module.exports = _curry2(function where(spec, testObj) {
  for (var prop in spec) {
    if (_has(prop, spec) && !spec[prop](testObj[prop])) {
      return false;
    }
  }
  return true;
});


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var properties = __webpack_require__(457);
var React = __webpack_require__(2);

module.exports = function(props, propName, componentName) {
  var styles = props[propName];
  if (!styles) {
    return;
  }

  var failures = [];
  Object.keys(styles).forEach(function(styleKey){
    if (properties.indexOf(styleKey) === -1) {
      failures.push(styleKey);
    }
  });
  if (failures.length) {
    throw new Error('Prop ' + propName + ' passed to ' + componentName + '. Has invalid keys ' + failures.join(', '));
  }
};

module.exports.isRequired = function(props, propName, componentName) {
  if (!props[propName]) {
    throw new Error('Prop ' + propName + ' passed to ' + componentName + ' is required');
  }
  return module.exports(props, propName, componentName);
};

module.exports.supportingArrays = React.PropTypes.oneOfType([
  React.PropTypes.arrayOf(module.exports),
  module.exports
]);



/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.buttonFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames2 = __webpack_require__(5);

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssThemr = __webpack_require__(12);

var _identifiers = __webpack_require__(13);

var _FontIcon = __webpack_require__(36);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _Ripple = __webpack_require__(51);

var _Ripple2 = _interopRequireDefault(_Ripple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(ripple, FontIcon) {
  var Button = function (_Component) {
    _inherits(Button, _Component);

    function Button() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Button);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.getLevel = function () {
        if (_this.props.primary) return 'primary';
        if (_this.props.accent) return 'accent';
        return 'neutral';
      }, _this.getShape = function () {
        if (_this.props.raised) return 'raised';
        if (_this.props.floating) return 'floating';
        return 'flat';
      }, _this.handleMouseUp = function (event) {
        _this.buttonNode.blur();
        if (_this.props.onMouseUp) _this.props.onMouseUp(event);
      }, _this.handleMouseLeave = function (event) {
        _this.buttonNode.blur();
        if (_this.props.onMouseLeave) _this.props.onMouseLeave(event);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Button, [{
      key: 'render',
      value: function render() {
        var _classnames,
            _this2 = this;

        var _props = this.props,
            accent = _props.accent,
            children = _props.children,
            className = _props.className,
            flat = _props.flat,
            floating = _props.floating,
            href = _props.href,
            icon = _props.icon,
            inverse = _props.inverse,
            label = _props.label,
            mini = _props.mini,
            neutral = _props.neutral,
            primary = _props.primary,
            raised = _props.raised,
            theme = _props.theme,
            type = _props.type,
            others = _objectWithoutProperties(_props, ['accent', 'children', 'className', 'flat', 'floating', 'href', 'icon', 'inverse', 'label', 'mini', 'neutral', 'primary', 'raised', 'theme', 'type']);

        var element = href ? 'a' : 'button';
        var level = this.getLevel();
        var shape = this.getShape();

        var classes = (0, _classnames3.default)(theme.button, [theme[shape]], (_classnames = {}, _defineProperty(_classnames, theme[level], neutral), _defineProperty(_classnames, theme.mini, mini), _defineProperty(_classnames, theme.inverse, inverse), _classnames), className);

        var props = _extends({}, others, {
          href: href,
          ref: function ref(node) {
            _this2.buttonNode = node;
          },
          className: classes,
          disabled: this.props.disabled,
          onMouseUp: this.handleMouseUp,
          onMouseLeave: this.handleMouseLeave,
          type: !href ? type : null,
          'data-react-toolbox': 'button'
        });

        return _react2.default.createElement(element, props, icon ? _react2.default.createElement(FontIcon, { className: theme.icon, value: icon }) : null, label, children);
      }
    }]);

    return Button;
  }(_react.Component);

  Button.propTypes = {
    accent: _react.PropTypes.bool,
    children: _react.PropTypes.node,
    className: _react.PropTypes.string,
    disabled: _react.PropTypes.bool,
    flat: _react.PropTypes.bool,
    floating: _react.PropTypes.bool,
    href: _react.PropTypes.string,
    icon: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
    inverse: _react.PropTypes.bool,
    label: _react.PropTypes.string,
    mini: _react.PropTypes.bool,
    neutral: _react.PropTypes.bool,
    onMouseLeave: _react.PropTypes.func,
    onMouseUp: _react.PropTypes.func,
    primary: _react.PropTypes.bool,
    raised: _react.PropTypes.bool,
    theme: _react.PropTypes.shape({
      accent: _react.PropTypes.string,
      button: _react.PropTypes.string,
      flat: _react.PropTypes.string,
      floating: _react.PropTypes.string,
      icon: _react.PropTypes.string,
      inverse: _react.PropTypes.string,
      mini: _react.PropTypes.string,
      neutral: _react.PropTypes.string,
      primary: _react.PropTypes.string,
      raised: _react.PropTypes.string,
      rippleWrapper: _react.PropTypes.string,
      toggle: _react.PropTypes.string
    }),
    type: _react.PropTypes.string
  };
  Button.defaultProps = {
    accent: false,
    className: '',
    flat: false,
    floating: false,
    mini: false,
    neutral: true,
    primary: false,
    raised: false,
    type: 'button'
  };


  return ripple(Button);
};

var Button = factory((0, _Ripple2.default)({ centered: false }), _FontIcon2.default);
exports.default = (0, _reactCssThemr.themr)(_identifiers.BUTTON)(Button);
exports.buttonFactory = factory;
exports.Button = Button;

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames2 = __webpack_require__(5);

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactStyleProptype = __webpack_require__(173);

var _reactStyleProptype2 = _interopRequireDefault(_reactStyleProptype);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var factory = function factory(ripple) {
  var Check = function Check(_ref) {
    var checked = _ref.checked,
        children = _ref.children,
        onMouseDown = _ref.onMouseDown,
        theme = _ref.theme,
        style = _ref.style;
    return _react2.default.createElement(
      'div',
      {
        'data-react-toolbox': 'check',
        className: (0, _classnames3.default)(theme.check, _defineProperty({}, theme.checked, checked)),
        onMouseDown: onMouseDown,
        style: style
      },
      children
    );
  };

  Check.propTypes = {
    checked: _react.PropTypes.bool,
    children: _react.PropTypes.node,
    onMouseDown: _react.PropTypes.func,
    style: _reactStyleProptype2.default,
    theme: _react.PropTypes.shape({
      check: _react.PropTypes.string,
      checked: _react.PropTypes.string
    })
  };

  return ripple(Check);
};

exports.default = factory;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(70);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portal = function (_Component) {
  _inherits(Portal, _Component);

  function Portal() {
    _classCallCheck(this, Portal);

    return _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  _createClass(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._renderOverlay();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this._overlayTarget && nextProps.container !== this.props.container) {
        this._portalContainerNode.removeChild(this._overlayTarget);
        this._portalContainerNode = getContainer(nextProps.container);
        this._portalContainerNode.appendChild(this._overlayTarget);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._renderOverlay();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._unrenderOverlay();
      this._unmountOverlayTarget();
    }
  }, {
    key: 'getMountNode',
    value: function getMountNode() {
      return this._overlayTarget;
    }
  }, {
    key: 'getOverlayDOMNode',
    value: function getOverlayDOMNode() {
      if (!this.isMounted()) {
        // eslint-disable-line
        throw new Error('getOverlayDOMNode(): A component must be mounted to have a DOM node.');
      }

      if (this._overlayInstance) {
        if (this._overlayInstance.getWrappedDOMNode) {
          return this._overlayInstance.getWrappedDOMNode();
        }
        return _reactDom2.default.findDOMNode(this._overlayInstance);
      }

      return null;
    }
  }, {
    key: '_getOverlay',
    value: function _getOverlay() {
      if (!this.props.children) return null;
      return _react2.default.createElement(
        'div',
        { className: this.props.className },
        this.props.children
      );
    }
  }, {
    key: '_renderOverlay',
    value: function _renderOverlay() {
      var overlay = this._getOverlay();
      if (overlay !== null) {
        this._mountOverlayTarget();
        this._overlayInstance = _reactDom2.default.unstable_renderSubtreeIntoContainer(this, overlay, this._overlayTarget);
      } else {
        this._unrenderOverlay();
        this._unmountOverlayTarget();
      }
    }
  }, {
    key: '_unrenderOverlay',
    value: function _unrenderOverlay() {
      if (this._overlayTarget) {
        _reactDom2.default.unmountComponentAtNode(this._overlayTarget);
        this._overlayInstance = null;
      }
    }
  }, {
    key: '_mountOverlayTarget',
    value: function _mountOverlayTarget() {
      if (!this._overlayTarget) {
        this._overlayTarget = document.createElement('div');
        this._portalContainerNode = getContainer(this.props.container);
        this._portalContainerNode.appendChild(this._overlayTarget);
      }
    }
  }, {
    key: '_unmountOverlayTarget',
    value: function _unmountOverlayTarget() {
      if (this._overlayTarget) {
        this._portalContainerNode.removeChild(this._overlayTarget);
        this._overlayTarget = null;
      }
      this._portalContainerNode = null;
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Portal;
}(_react.Component);

Portal.propTypes = {
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  container: _react.PropTypes.node
};
Portal.defaultProps = {
  className: ''
};


function getContainer(container) {
  var _container = typeof container === 'function' ? container() : container;
  return _reactDom2.default.findDOMNode(_container) || document.body;
}

exports.default = Portal;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = exports.inputFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames4 = __webpack_require__(5);

var _classnames5 = _interopRequireDefault(_classnames4);

var _reactCssThemr = __webpack_require__(12);

var _identifiers = __webpack_require__(13);

var _FontIcon = __webpack_require__(36);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(FontIcon) {
  var Input = function (_React$Component) {
    _inherits(Input, _React$Component);

    function Input() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Input);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (event) {
        var _this$props = _this.props,
            onChange = _this$props.onChange,
            multiline = _this$props.multiline,
            maxLength = _this$props.maxLength;

        var valueFromEvent = event.target.value;

        // Trim value to maxLength if that exists (only on multiline inputs).
        // Note that this is still required even tho we have the onKeyPress filter
        // because the user could paste smt in the textarea.
        var haveToTrim = multiline && maxLength && event.target.value.length > maxLength;
        var value = haveToTrim ? valueFromEvent.substr(0, maxLength) : valueFromEvent;

        // propagate to to store and therefore to the input
        if (onChange) onChange(value, event);
      }, _this.handleAutoresize = function () {
        var element = _this.inputNode;
        var rows = _this.props.rows;

        if (typeof rows === 'number' && !isNaN(rows)) {
          element.style.height = null;
        } else {
          // compute the height difference between inner height and outer height
          var style = getComputedStyle(element, null);
          var heightOffset = style.boxSizing === 'content-box' ? -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom)) : parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);

          // resize the input to its content size
          element.style.height = 'auto';
          element.style.height = element.scrollHeight + heightOffset + 'px';
        }
      }, _this.handleKeyPress = function (event) {
        // prevent insertion of more characters if we're a multiline input
        // and maxLength exists
        var _this$props2 = _this.props,
            multiline = _this$props2.multiline,
            maxLength = _this$props2.maxLength,
            onKeyPress = _this$props2.onKeyPress;

        if (multiline && maxLength) {
          // check if smt is selected, in which case the newly added charcter would
          // replace the selected characters, so the length of value doesn't actually
          // increase.
          var isReplacing = event.target.selectionEnd - event.target.selectionStart;
          var value = event.target.value;

          if (!isReplacing && value.length === maxLength) {
            event.preventDefault();
            event.stopPropagation();
            return undefined;
          }
        }

        if (onKeyPress) onKeyPress(event);
        return undefined;
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Input, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.multiline) {
          window.addEventListener('resize', this.handleAutoresize);
          this.handleAutoresize();
        }
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (!this.props.multiline && nextProps.multiline) {
          window.addEventListener('resize', this.handleAutoresize);
        } else if (this.props.multiline && !nextProps.multiline) {
          window.removeEventListener('resize', this.handleAutoresize);
        }
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        // resize the textarea, if nessesary
        if (this.props.multiline) this.handleAutoresize();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.props.multiline) window.removeEventListener('resize', this.handleAutoresize);
      }
    }, {
      key: 'blur',
      value: function blur() {
        this.inputNode.blur();
      }
    }, {
      key: 'focus',
      value: function focus() {
        this.inputNode.focus();
      }
    }, {
      key: 'render',
      value: function render() {
        var _classnames2,
            _this2 = this;

        var _props = this.props,
            children = _props.children,
            disabled = _props.disabled,
            error = _props.error,
            floating = _props.floating,
            hint = _props.hint,
            icon = _props.icon,
            name = _props.name,
            labelText = _props.label,
            maxLength = _props.maxLength,
            multiline = _props.multiline,
            required = _props.required,
            theme = _props.theme,
            type = _props.type,
            value = _props.value,
            onKeyPress = _props.onKeyPress,
            _props$rows = _props.rows,
            rows = _props$rows === undefined ? 1 : _props$rows,
            others = _objectWithoutProperties(_props, ['children', 'disabled', 'error', 'floating', 'hint', 'icon', 'name', 'label', 'maxLength', 'multiline', 'required', 'theme', 'type', 'value', 'onKeyPress', 'rows']);

        var length = maxLength && value ? value.length : 0;
        var labelClassName = (0, _classnames5.default)(theme.label, _defineProperty({}, theme.fixed, !floating));

        var className = (0, _classnames5.default)(theme.input, (_classnames2 = {}, _defineProperty(_classnames2, theme.disabled, disabled), _defineProperty(_classnames2, theme.errored, error), _defineProperty(_classnames2, theme.hidden, type === 'hidden'), _defineProperty(_classnames2, theme.withIcon, icon), _classnames2), this.props.className);

        var valuePresent = value !== null && value !== undefined && value !== '' && !((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === Number && isNaN(value)); // eslint-disable-line

        var inputElementProps = _extends({}, others, {
          className: (0, _classnames5.default)(theme.inputElement, _defineProperty({}, theme.filled, valuePresent)),
          onChange: this.handleChange,
          ref: function ref(node) {
            _this2.inputNode = node;
          },
          role: 'input',
          name: name,
          disabled: disabled,
          required: required,
          type: type,
          value: value
        });
        if (!multiline) {
          inputElementProps.maxLength = maxLength;
          inputElementProps.onKeyPress = onKeyPress;
        } else {
          inputElementProps.rows = rows;
          inputElementProps.onKeyPress = this.handleKeyPress;
        }

        return _react2.default.createElement(
          'div',
          { 'data-react-toolbox': 'input', className: className },
          _react2.default.createElement(multiline ? 'textarea' : 'input', inputElementProps),
          icon ? _react2.default.createElement(FontIcon, { className: theme.icon, value: icon }) : null,
          _react2.default.createElement('span', { className: theme.bar }),
          labelText ? _react2.default.createElement(
            'label',
            { className: labelClassName, htmlFor: name },
            labelText,
            required ? _react2.default.createElement(
              'span',
              { className: theme.required },
              ' * '
            ) : null
          ) : null,
          hint ? _react2.default.createElement(
            'span',
            { hidden: labelText, className: theme.hint },
            hint
          ) : null,
          error ? _react2.default.createElement(
            'span',
            { className: theme.error },
            error
          ) : null,
          maxLength ? _react2.default.createElement(
            'span',
            { className: theme.counter },
            length,
            '/',
            maxLength
          ) : null,
          children
        );
      }
    }]);

    return Input;
  }(_react2.default.Component);

  Input.propTypes = {
    children: _react.PropTypes.node,
    className: _react.PropTypes.string,
    disabled: _react.PropTypes.bool,
    error: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node]),
    floating: _react.PropTypes.bool,
    hint: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node]),
    icon: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
    label: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node]),
    maxLength: _react.PropTypes.number,
    multiline: _react.PropTypes.bool,
    name: _react.PropTypes.string,
    onBlur: _react.PropTypes.func,
    onChange: _react.PropTypes.func,
    onFocus: _react.PropTypes.func,
    onKeyPress: _react.PropTypes.func,
    required: _react.PropTypes.bool,
    rows: _react.PropTypes.number,
    theme: _react.PropTypes.shape({
      bar: _react.PropTypes.string,
      counter: _react.PropTypes.string,
      disabled: _react.PropTypes.string,
      error: _react.PropTypes.string,
      errored: _react.PropTypes.string,
      hidden: _react.PropTypes.string,
      hint: _react.PropTypes.string,
      icon: _react.PropTypes.string,
      input: _react.PropTypes.string,
      inputElement: _react.PropTypes.string,
      required: _react.PropTypes.string,
      withIcon: _react.PropTypes.string
    }),
    type: _react.PropTypes.string,
    value: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string])
  };
  Input.defaultProps = {
    className: '',
    hint: '',
    disabled: false,
    floating: true,
    multiline: false,
    required: false,
    type: 'text'
  };


  return Input;
};

var Input = factory(_FontIcon2.default);
exports.default = (0, _reactCssThemr.themr)(_identifiers.INPUT, null, { withRef: true })(Input);
exports.inputFactory = factory;
exports.Input = Input;

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Ripple = __webpack_require__(51);

var _Ripple2 = _interopRequireDefault(_Ripple);

var _theme = __webpack_require__(239);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (options) {
  return (0, _Ripple2.default)(_extends({}, options, { theme: _theme2.default }));
};

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__(193);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Voyager", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



function init(element, options) {
    __WEBPACK_IMPORTED_MODULE_1_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components__["a" /* Voyager */], __assign({}, options)), element);
}



/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hint_css_hint_base_css__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hint_css_hint_base_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_hint_css_hint_base_css__);




/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHANGE_DISPLAY_OPTIONS; });
/* harmony export (immutable) */ __webpack_exports__["b"] = changeDisplayOptions;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TOGGLE_MENU; });
/* unused harmony export toggleMenu */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return REPORT_ERROR; });
/* harmony export (immutable) */ __webpack_exports__["a"] = reportError;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CLEAR_ERROR; });
/* harmony export (immutable) */ __webpack_exports__["h"] = clearError;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CHANGE_SELECTED_TYPEINFO; });
/* harmony export (immutable) */ __webpack_exports__["i"] = changeSelectedTypeInfo;
var CHANGE_DISPLAY_OPTIONS = 'CHANGE_DISPLAY_OPTIONS';
function changeDisplayOptions(options) {
    return {
        type: CHANGE_DISPLAY_OPTIONS,
        payload: options,
    };
}
var TOGGLE_MENU = 'TOGGLE_MENU';
function toggleMenu() {
    return {
        type: TOGGLE_MENU
    };
}
var REPORT_ERROR = 'REPORT_ERROR';
function reportError(msg) {
    return {
        type: REPORT_ERROR,
        payload: msg
    };
}
var CLEAR_ERROR = 'CLEAR_ERROR';
function clearError() {
    return {
        type: CLEAR_ERROR
    };
}
var CHANGE_SELECTED_TYPEINFO = 'CHANGE_SELECTED_TYPEINFO';
function changeSelectedTypeInfo(type) {
    return {
        type: CHANGE_SELECTED_TYPEINFO,
        payload: type
    };
}


/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHANGE_SCHEMA; });
/* harmony export (immutable) */ __webpack_exports__["a"] = changeSchema;
var CHANGE_SCHEMA = 'CHANGE_SCHEMA';
function changeSchema(introspection, displayOptions) {
    return {
        type: CHANGE_SCHEMA,
        payload: {
            introspection: introspection,
            displayOptions: displayOptions
        }
    };
}


/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SHOW_SCHEMA_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return HIDE_SCHEMA_MODAL; });
/* harmony export (immutable) */ __webpack_exports__["a"] = showSchemaModal;
/* harmony export (immutable) */ __webpack_exports__["e"] = hideSchemaModal;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CHANGE_NOT_APPLIED_ACTIVE_PRESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return CHANGE_NOT_APPLIED_DISPLAY_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CHANGE_ACTIVE_PRESET; });
/* harmony export (immutable) */ __webpack_exports__["b"] = changeNaActivePreset;
/* harmony export (immutable) */ __webpack_exports__["c"] = changeNaDisplayOptions;
/* harmony export (immutable) */ __webpack_exports__["d"] = changeActivePreset;
var SHOW_SCHEMA_MODAL = 'SHOW_SCHEMA_MODAL';
var HIDE_SCHEMA_MODAL = 'HIDE_SCHEMA_MODAL';
function showSchemaModal() {
    return {
        type: SHOW_SCHEMA_MODAL
    };
}
function hideSchemaModal() {
    return {
        type: HIDE_SCHEMA_MODAL
    };
}
var CHANGE_NOT_APPLIED_ACTIVE_PRESET = 'CHANGE_NOT_APPLIED_ACTIVE_PRESET';
var CHANGE_NOT_APPLIED_DISPLAY_OPTIONS = 'CHANGE_NOT_APPLIED_DISPLAY_OPTIONS';
var CHANGE_ACTIVE_PRESET = 'CHANGE_ACTIVE_PRESET';
function changeNaActivePreset(value, schema) {
    return {
        type: CHANGE_NOT_APPLIED_ACTIVE_PRESET,
        payload: {
            presetName: value,
            schema: schema
        }
    };
}
function changeNaDisplayOptions(options) {
    return {
        type: CHANGE_NOT_APPLIED_DISPLAY_OPTIONS,
        payload: options
    };
}
function changeActivePreset(preset) {
    console.log(preset);
    return {
        type: CHANGE_ACTIVE_PRESET,
        payload: preset
    };
}


/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SVG_RENDERING_FINISHED; });
/* harmony export (immutable) */ __webpack_exports__["a"] = svgRenderingFinished;
var SVG_RENDERING_FINISHED = 'SVG_RENDERING_FINISHED';
function svgRenderingFinished(svgString) {
    return {
        type: SVG_RENDERING_FINISHED,
        payload: svgString
    };
}


/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SELECT_NODE; });
/* harmony export (immutable) */ __webpack_exports__["i"] = selectNode;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SELECT_EDGE; });
/* harmony export (immutable) */ __webpack_exports__["j"] = selectEdge;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SELECT_PREVIOUS_TYPE; });
/* harmony export (immutable) */ __webpack_exports__["l"] = selectPreviousType;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CLEAR_SELECTION; });
/* harmony export (immutable) */ __webpack_exports__["k"] = clearSelection;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FOCUS_ELEMENT; });
/* harmony export (immutable) */ __webpack_exports__["h"] = focusElement;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FOCUS_ELEMENT_DONE; });
/* harmony export (immutable) */ __webpack_exports__["g"] = focusElementDone;
var SELECT_NODE = 'SELECT_NODE';
function selectNode(id) {
    return {
        type: SELECT_NODE,
        payload: id,
    };
}
var SELECT_EDGE = 'SELECT_EDGE';
function selectEdge(id) {
    return {
        type: SELECT_EDGE,
        payload: id,
    };
}
var SELECT_PREVIOUS_TYPE = 'SELECT_PREVIOUS_TYPE';
function selectPreviousType() {
    return {
        type: SELECT_PREVIOUS_TYPE,
    };
}
var CLEAR_SELECTION = 'CLEAR_SELECTION';
function clearSelection() {
    return {
        type: CLEAR_SELECTION,
    };
}
var FOCUS_ELEMENT = 'FOCUS_ELEMENT';
function focusElement(id) {
    return {
        type: FOCUS_ELEMENT,
        payload: id,
    };
}
var FOCUS_ELEMENT_DONE = 'FOCUS_ELEMENT_DONE';
function focusElementDone(id) {
    return {
        type: FOCUS_ELEMENT_DONE,
        payload: id,
    };
}


/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_graphql_utilities__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_graphql_utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_graphql_utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Voyager_css__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Voyager_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Voyager_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__viewport_css__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__viewport_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__viewport_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_ErrorBar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_LoadingAnimation__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__panel_DocPanel__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__settings_SchemaModal__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__graph___ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__actions___ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__introspection___ = __webpack_require__(24);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
















var Voyager = (function (_super) {
    __extends(Voyager, _super);
    function Voyager(props) {
        var _this = _super.call(this, props) || this;
        _this.store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__redux__["a" /* configureStore */])();
        return _this;
    }
    Voyager.prototype.componentDidMount = function () {
        // init viewport and svg-renderer
        this.renderer = new __WEBPACK_IMPORTED_MODULE_11__graph___["a" /* SVGRender */](this.store);
        this.viewport = new __WEBPACK_IMPORTED_MODULE_11__graph___["b" /* Viewport */](this.store, this.refs['viewport']);
        this.updateIntrospection();
    };
    Voyager.prototype.componentWillUnmount = function () {
        this.viewport.destroy();
        this.renderer.unsubscribe();
    };
    Voyager.prototype.updateIntrospection = function () {
        var _this = this;
        var displayOpts = normalizeDisplayOptions(this.props.displayOptions);
        if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isFunction"](this.props.introspection)) {
            var promise = this.props.introspection(__WEBPACK_IMPORTED_MODULE_4_graphql_utilities__["introspectionQuery"]);
            if (!isPromise(promise)) {
                this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__actions___["a" /* reportError */])('SchemaProvider did not return a Promise for introspection.'));
            }
            promise.then(function (schema) {
                if (schema === _this.store.schema)
                    return;
                _this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__actions___["b" /* changeSchema */])(schema, displayOpts));
            });
        }
        else if (this.props.introspection) {
            this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__actions___["b" /* changeSchema */])(this.props.introspection, displayOpts));
        }
    };
    Voyager.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.introspection !== prevProps.introspection) {
            this.updateIntrospection();
            return;
        }
        if (this.props.displayOptions !== prevProps.displayOptions) {
            var opts = normalizeDisplayOptions(this.props.displayOptions);
            this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__actions___["c" /* changeDisplayOptions */])(opts));
        }
    };
    Voyager.prototype.render = function () {
        var _a = this.props, _schemaPresets = _a._schemaPresets, hideDocs = _a.displayOptions.hideDocs;
        var showModal = !!_schemaPresets;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_redux__["Provider"], { store: this.store },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "graphql-voyager" },
                !hideDocs && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9__panel_DocPanel__["a" /* default */], { _showChangeButton: !!_schemaPresets })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { ref: "viewport", className: "viewport" }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__utils_ErrorBar__["a" /* default */], null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__utils_LoadingAnimation__["a" /* default */], null),
                showModal && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10__settings_SchemaModal__["a" /* default */], { presets: _schemaPresets }))));
    };
    return Voyager;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = Voyager;
Voyager.propTypes = {
    introspection: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].oneOfType([
        __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
        __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired,
        __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool.isRequired
    ]).isRequired,
    _schemaPresets: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object,
    displayOptions: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
        rootType: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
        skipRelay: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
        sortByAlphabet: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
        hideDocs: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
        hideRoot: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
        transformSchema: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
    })
};
// Duck-type promise detection.
function isPromise(value) {
    return typeof value === 'object' && typeof value.then === 'function';
}
function normalizeDisplayOptions(opts) {
    opts = opts || {};
    return {
        rootTypeId: opts.rootType && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__introspection___["a" /* typeNameToId */])(opts.rootType),
        skipRelay: opts.skipRelay,
        sortByAlphabet: opts.sortByAlphabet,
        transformSchema: opts.transformSchema,
        hideDocs: opts.hideDocs,
        hideRoot: opts.hideRoot,
    };
}


/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Argument_css__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Argument_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Argument_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Markdown__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__WrappedTypeName__ = __webpack_require__(73);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var Argument = (function (_super) {
    __extends(Argument, _super);
    function Argument() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Argument.prototype.render = function () {
        var _a = this.props, arg = _a.arg, expanded = _a.expanded;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: __WEBPACK_IMPORTED_MODULE_1_classnames__('arg-wrap', { '-expanded': expanded }) },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "arg" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "arg-name" }, arg.name),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__WrappedTypeName__["a" /* default */], { container: arg }),
                arg.defaultValue !== null &&
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null,
                        ' = ',
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "default-value" }, arg.defaultValue))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__utils_Markdown__["a" /* default */], { text: arg.description, className: "arg-description" })));
    };
    return Argument;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = Argument;


/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DocNavigation_css__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DocNavigation_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__DocNavigation_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectors__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions___ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__FocusTypeButton__ = __webpack_require__(99);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






function mapStateToProps(state) {
    return {
        selectedType: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__selectors__["a" /* getSelectedType */])(state),
        previousType: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__selectors__["b" /* getPreviousType */])(state),
    };
}
var DocNavigation = (function (_super) {
    __extends(DocNavigation, _super);
    function DocNavigation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocNavigation.prototype.render = function () {
        var _a = this.props, selectedType = _a.selectedType, previousType = _a.previousType, dispatch = _a.dispatch;
        var clickHandler = function () {
            if (!previousType)
                return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__actions___["F" /* clearSelection */])());
            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__actions___["C" /* focusElement */])(previousType.id));
            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__actions___["I" /* selectPreviousType */])());
        };
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "doc-navigation" },
            selectedType && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "back", onClick: clickHandler }, previousType ? previousType.name : 'Type List') || __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "header" }, "Type List"),
            selectedType &&
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "active" },
                    selectedType.name,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__FocusTypeButton__["a" /* default */], { type: selectedType }))));
    };
    return DocNavigation;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(DocNavigation);


/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_Markdown__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Description__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__WrappedTypeName__ = __webpack_require__(73);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var TypeDetails = (function (_super) {
    __extends(TypeDetails, _super);
    function TypeDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypeDetails.prototype.renderFields = function (type) {
        if (__WEBPACK_IMPORTED_MODULE_0_lodash__["isEmpty"](type.inputFields))
            return null;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "doc-category" },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "title" }, 'fields'),
            __WEBPACK_IMPORTED_MODULE_0_lodash__["map"](type.inputFields, function (field) {
                return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { key: field.id, className: "item" },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("a", { className: "field-name" }, field.name),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__WrappedTypeName__["a" /* default */], { container: field }),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__utils_Markdown__["a" /* default */], { text: field.description, className: "description-box -field" }));
            })));
    };
    TypeDetails.prototype.renderEnumValues = function (type) {
        if (__WEBPACK_IMPORTED_MODULE_0_lodash__["isEmpty"](type.enumValues))
            return null;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "doc-category" },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "title" }, 'values'),
            __WEBPACK_IMPORTED_MODULE_0_lodash__["map"](type.enumValues, function (value) {
                return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](EnumValue, { key: value.name, value: value });
            })));
    };
    TypeDetails.prototype.render = function () {
        var type = this.props.type;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "type-details" },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("header", null,
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("h3", null, type.name),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Description__["a" /* default */], { className: "-doc-type", text: type.description })),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "doc-categories" },
                this.renderFields(type),
                this.renderEnumValues(type))));
    };
    return TypeDetails;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = TypeDetails;
var EnumValue = (function (_super) {
    __extends(EnumValue, _super);
    function EnumValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EnumValue.prototype.render = function () {
        var value = this.props.value;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "item" },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "enum-value" }, value.name),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__utils_Markdown__["a" /* default */], { className: "description-box -enum-value", text: value.description }),
            value.deprecationReason &&
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__utils_Markdown__["a" /* default */], { className: "doc-deprecation", text: value.deprecationReason })));
    };
    return EnumValue;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));


/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TypeDoc_css__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TypeDoc_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__TypeDoc_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__selectors__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__graph__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__TypeList__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__DocNavigation__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_Markdown__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Description__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__TypeLink__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__WrappedTypeName__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Argument__ = __webpack_require__(187);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};















function mapStateToProps(state) {
    return {
        selectedType: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__selectors__["a" /* getSelectedType */])(state),
        selectedEdgeId: state.selected.currentEdgeId,
        typeGraph: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__graph__["e" /* getTypeGraphSelector */])(state),
    };
}
var TypeDoc = (function (_super) {
    __extends(TypeDoc, _super);
    function TypeDoc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypeDoc.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.selectedEdgeId !== prevProps.selectedEdgeId) {
            this.ensureActiveVisible();
        }
    };
    TypeDoc.prototype.ensureActiveVisible = function () {
        var itemComponent = this.refs['selectedItem'];
        if (!itemComponent)
            return;
        itemComponent.scrollIntoViewIfNeeded();
    };
    TypeDoc.prototype.renderTypesDef = function (type, typeGraph, selectedId) {
        var typesTitle;
        var types;
        var dispatch = this.props.dispatch;
        switch (type.kind) {
            case 'UNION':
                typesTitle = 'possible types';
                types = type.possibleTypes;
                break;
            case 'INTERFACE':
                typesTitle = 'implementations';
                types = type.derivedTypes;
                break;
            case 'OBJECT':
                typesTitle = 'implements';
                types = type.interfaces;
                break;
            default:
                return null;
        }
        types = __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](types, function (type) { return (typeGraph.nodes[type.type.id] !== undefined); });
        if (__WEBPACK_IMPORTED_MODULE_0_lodash__["isEmpty"](types))
            return null;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "doc-category" },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "title" }, typesTitle),
            __WEBPACK_IMPORTED_MODULE_0_lodash__["map"](types, function (type) {
                var props = {
                    key: type.id,
                    className: __WEBPACK_IMPORTED_MODULE_3_classnames__('item', {
                        '-selected': type.id === selectedId
                    }),
                    onClick: function () {
                        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions__["E" /* selectEdge */])(type.id));
                    }
                };
                if (type.id === selectedId)
                    props.ref = 'selectedItem';
                return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", __assign({}, props),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12__TypeLink__["a" /* default */], { type: type.type }),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_11__Description__["a" /* default */], { text: type.type.description, className: "-linked-type" }));
            })));
    };
    TypeDoc.prototype.renderFields = function (type, selectedId) {
        if (__WEBPACK_IMPORTED_MODULE_0_lodash__["isEmpty"](type.fields))
            return null;
        var dispatch = this.props.dispatch;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "doc-category" },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "title" }, 'fields'),
            __WEBPACK_IMPORTED_MODULE_0_lodash__["map"](type.fields, function (field) {
                var props = {
                    key: field.name,
                    className: __WEBPACK_IMPORTED_MODULE_3_classnames__('item', {
                        '-selected': field.id === selectedId,
                        '-with-args': !__WEBPACK_IMPORTED_MODULE_0_lodash__["isEmpty"](field.args)
                    }),
                    onClick: function () {
                        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions__["E" /* selectEdge */])(field.id));
                    }
                };
                if (field.id === selectedId)
                    props.ref = 'selectedItem';
                return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", __assign({}, props),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("a", { className: "field-name" }, field.name),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: __WEBPACK_IMPORTED_MODULE_3_classnames__('args-wrap', {
                            '-empty': __WEBPACK_IMPORTED_MODULE_0_lodash__["isEmpty"](field.args)
                        }) }, !__WEBPACK_IMPORTED_MODULE_0_lodash__["isEmpty"](field.args) &&
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { key: "args", className: "args" }, __WEBPACK_IMPORTED_MODULE_0_lodash__["map"](field.args, function (arg) {
                            return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_14__Argument__["a" /* default */], { key: arg.name, arg: arg, expanded: field.id === selectedId });
                        }))),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_13__WrappedTypeName__["a" /* default */], { container: field }),
                    field.isDeprecated &&
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: "doc-alert-text" }, ' (DEPRECATED)'),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10__utils_Markdown__["a" /* default */], { text: field.description, className: "description-box -field" }));
            })));
    };
    TypeDoc.prototype.render = function () {
        var _a = this.props, selectedType = _a.selectedType, selectedEdgeId = _a.selectedEdgeId, typeGraph = _a.typeGraph;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "type-doc" },
            typeGraph && __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9__DocNavigation__["a" /* default */], null) || __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: "loading" }, " Loading... "),
            !selectedType ?
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__TypeList__["a" /* default */], { typeGraph: typeGraph }) :
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "scroll-area" },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_11__Description__["a" /* default */], { className: "-doc-type", text: selectedType.description }),
                    this.renderTypesDef(selectedType, typeGraph, selectedEdgeId),
                    this.renderFields(selectedType, selectedEdgeId))));
    };
    return TypeDoc;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps)(TypeDoc);


/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TypeList_css__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TypeList_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__TypeList_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TypeLink__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Description__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__FocusTypeButton__ = __webpack_require__(99);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var TypeList = (function (_super) {
    __extends(TypeList, _super);
    function TypeList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypeList.prototype.renderItem = function (type, className) {
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { key: type.id, className: __WEBPACK_IMPORTED_MODULE_3_classnames__('typelist-item', className || '') },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__TypeLink__["a" /* default */], { type: type }),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__FocusTypeButton__["a" /* default */], { type: type }),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__Description__["a" /* default */], { className: "-doc-type", text: type.description })));
    };
    TypeList.prototype.render = function () {
        var _this = this;
        var typeGraph = this.props.typeGraph;
        if (typeGraph === null)
            return null;
        var rootType = typeGraph.nodes[typeGraph.rootId];
        var types = __WEBPACK_IMPORTED_MODULE_0_lodash__(typeGraph.nodes)
            .values()
            .reject({ id: rootType.id })
            .sortBy('name').value();
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "scroll-area doc-explorer-type-list" },
            this.renderItem(rootType, '-root'),
            __WEBPACK_IMPORTED_MODULE_0_lodash__["map"](types, function (type) { return _this.renderItem(type); })));
    };
    return TypeList;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])()(TypeList);


/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TypeName_css__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TypeName_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__TypeName_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__introspection__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions___ = __webpack_require__(9);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var TypeName = (function (_super) {
    __extends(TypeName, _super);
    function TypeName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypeName.prototype.render = function () {
        var _this = this;
        var type = this.props.type;
        var className;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__introspection__["i" /* isBuiltInScalarType */])(type))
            className = '-built-in';
        else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__introspection__["e" /* isScalarType */])(type))
            className = '-scalar';
        else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__introspection__["f" /* isInputObjectType */])(type))
            className = '-input-obj';
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: __WEBPACK_IMPORTED_MODULE_1_classnames__('type-name', className), onClick: function (event) {
                _this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions___["H" /* changeSelectedTypeInfo */])(type));
                event.stopPropagation();
            } }, type.name));
    };
    return TypeName;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])()(TypeName);


/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Voyager__ = __webpack_require__(186);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Voyager__["a"]; });



/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DocPanel_css__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DocPanel_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__DocPanel_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TitleArea__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doc_explorer_TypeDoc__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TypeInfoPopover__ = __webpack_require__(196);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var DocPanel = (function (_super) {
    __extends(DocPanel, _super);
    function DocPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocPanel.prototype.render = function () {
        var _showChangeButton = this.props._showChangeButton;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "doc-panel" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "contents" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__TitleArea__["a" /* default */], { _showChangeButton: _showChangeButton }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__doc_explorer_TypeDoc__["a" /* default */], null)),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__TypeInfoPopover__["a" /* default */], null)));
    };
    return DocPanel;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = DocPanel;


/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TitleArea_css__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TitleArea_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__TitleArea_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions___ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icons_logo_small_svg__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_toolbox_lib_button__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_toolbox_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_toolbox_lib_button__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var TitleArea = (function (_super) {
    __extends(TitleArea, _super);
    function TitleArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TitleArea.prototype.render = function () {
        var _a = this.props, dispatch = _a.dispatch, _showChangeButton = _a._showChangeButton;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "title-area" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "https://github.com/APIs-guru/graphql-voyager" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "logo" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__icons_logo_small_svg__["a" /* default */], null),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", { className: "title" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", null, "GraphQL"),
                        " Voyager"))),
            _showChangeButton && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_toolbox_lib_button__["Button"], { className: "choosebutton", raised: true, primary: true, label: "Change Schema", onClick: function () { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions___["d" /* showSchemaModal */])()); } })));
    };
    return TitleArea;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])()(TitleArea);


/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TypeInfoPopover_css__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TypeInfoPopover_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__TypeInfoPopover_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icons_close_black_svg__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_toolbox_lib_button__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_toolbox_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_toolbox_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__doc_explorer_TypeDetails__ = __webpack_require__(189);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








function mapStateToProps(state) {
    return {
        type: state.selected.typeinfo
    };
}
var ScalarDetails = (function (_super) {
    __extends(ScalarDetails, _super);
    function ScalarDetails(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { localType: null };
        return _this;
    }
    ScalarDetails.prototype.close = function () {
        var _this = this;
        this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__actions__["H" /* changeSelectedTypeInfo */])(null));
        setTimeout(function () {
            _this.setState({ localType: null });
        }, 450);
    };
    ScalarDetails.prototype.render = function () {
        var _this = this;
        var type = this.props.type;
        //FIXME: implement animation correctly
        //https://facebook.github.io/react/docs/animation.html
        var localType = this.state.localType;
        if (type && (!localType || type.name !== localType.name)) {
            setTimeout(function () {
                _this.setState({ localType: type });
            });
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_2_classnames__('type-info-popover', {
                '-opened': !!type
            }) },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_toolbox_lib_button__["IconButton"], { className: "closeButton", onClick: function () { return _this.close(); } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__icons_close_black_svg__["a" /* default */], null)),
            (type || localType) && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__doc_explorer_TypeDetails__["a" /* default */], { type: type || localType })));
    };
    return ScalarDetails;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(ScalarDetails);


/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__graph___ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_toolbox_lib_dropdown__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_toolbox_lib_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_toolbox_lib_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RootSelector_css__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RootSelector_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__RootSelector_css__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var RootSelector = (function (_super) {
    __extends(RootSelector, _super);
    function RootSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RootSelector.prototype.render = function () {
        var _a = this.props, rootTypeId = _a.rootTypeId, theme = _a.theme, schema = _a.schema, onChange = _a.onChange;
        if (schema === null)
            return null;
        rootTypeId = rootTypeId || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__graph___["c" /* getDefaultRoot */])(schema);
        var types = schema.types, queryType = schema.queryType, mutationType = schema.mutationType, subscriptionType = schema.subscriptionType;
        types = __WEBPACK_IMPORTED_MODULE_0_lodash__["omit"](types, queryType.id);
        if (mutationType)
            types = __WEBPACK_IMPORTED_MODULE_0_lodash__["omit"](types, mutationType.id);
        if (subscriptionType)
            types = __WEBPACK_IMPORTED_MODULE_0_lodash__["omit"](types, subscriptionType.id);
        types = __WEBPACK_IMPORTED_MODULE_0_lodash__(types).values().filter(__WEBPACK_IMPORTED_MODULE_2__graph___["d" /* isNode */])
            .sortBy('name').value();
        var typesList = __WEBPACK_IMPORTED_MODULE_0_lodash__["compact"]([queryType, mutationType, subscriptionType]).map(function (type) { return ({
            value: type.id,
            label: type.name,
            bold: true
        }); });
        typesList = typesList.concat(types.map(function (type) { return ({ value: type.id, label: type.name }); }));
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_toolbox_lib_dropdown___default.a, { className: 'root-selector', theme: theme, source: typesList, onChange: function (value) {
                onChange(value);
            }, value: rootTypeId, template: function (item) { return item.bold ? __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("strong", null,
                " ",
                item.label,
                " ") : __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", null, item.label); } }));
    };
    return RootSelector;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = RootSelector;


/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_modal__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SchemaModal_css__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SchemaModal_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__SchemaModal_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__button_dark_theme_css__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__button_dark_theme_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__button_dark_theme_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings_dark_theme_css__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings_dark_theme_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__settings_dark_theme_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_toolbox_lib_button__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_toolbox_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_toolbox_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__icons_close_black_svg__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_clipboard_js__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_clipboard_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_clipboard_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_graphql_utilities__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_graphql_utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_graphql_utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__actions___ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Settings__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__introspection__ = __webpack_require__(24);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};















function mapStateToProps(state) {
    return {
        showSchemaModal: state.schemaModal.opened,
        notApplied: state.schemaModal.notApplied,
        schema: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__introspection__["b" /* getNaSchemaSelector */])(state),
    };
}
var SchemaModal = (function (_super) {
    __extends(SchemaModal, _super);
    function SchemaModal(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { recentlyCopied: false };
        return _this;
    }
    SchemaModal.prototype.componentDidMount = function () {
        this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__actions___["d" /* showSchemaModal */])());
        if (false) {
            this.props.dispatch(hideSchemaModal());
            this.props.dispatch(changeActivePreset(DEBUG_INITIAL_PRESET));
            this.props.dispatch(changeSchema(this.props.presets[DEBUG_INITIAL_PRESET], {
                transformSchema: function (schema) {
                    var types = schema.types;
                    var copy = Object.assign({}, types);
                    Object.keys(copy).forEach(function (typeName) {
                        if (typeName.startsWith('_all') || typeName.startsWith('all')) {
                            delete copy[typeName];
                        }
                        else {
                            var type_1 = copy[typeName];
                            if (type_1.fields) {
                                Object.keys(type_1.fields).forEach(function (fieldName) {
                                    var field = type_1.fields[fieldName];
                                    if (field.type === '_QueryMeta') {
                                        delete copy[typeName].fields[fieldName];
                                    }
                                });
                            }
                        }
                    });
                    return Object.assign({}, schema, {
                        queryType: 'Node',
                        types: copy,
                    });
                },
                hideDocs: true,
                hideRoot: true,
            }));
        }
    };
    SchemaModal.prototype.handleTextChange = function (event) {
        var text = event.target.value;
        if (text === '')
            text = null;
        this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__actions___["e" /* changeNaActivePreset */])('custom', text));
    };
    SchemaModal.prototype.handlePresetChange = function (name) {
        this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__actions___["e" /* changeNaActivePreset */])(name, this.props.presets[name]));
    };
    SchemaModal.prototype.handleDisplayOptionsChange = function (options) {
        this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__actions___["f" /* changeNaDisplayOptions */])(options));
    };
    SchemaModal.prototype.handleChange = function () {
        var _a = this.props.notApplied, activePreset = _a.activePreset, displayOptions = _a.displayOptions, presetValue = _a.presetValue;
        var schema = activePreset === 'custom' ? JSON.parse(presetValue) : presetValue;
        this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__actions___["g" /* changeActivePreset */])(activePreset));
        this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__actions___["b" /* changeSchema */])(schema, displayOptions));
        this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__actions___["h" /* hideSchemaModal */])());
    };
    SchemaModal.prototype.close = function () {
        this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__actions___["h" /* hideSchemaModal */])());
    };
    SchemaModal.prototype.copy = function () {
        var _this = this;
        this.setState(__assign({}, this.state, { recentlyCopied: true }));
        setTimeout(function () {
            _this.setState(__assign({}, _this.state, { recentlyCopied: false }));
        }, 2000);
    };
    SchemaModal.prototype.appBar = function () {
        var _this = this;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_react_toolbox_lib_button__["IconButton"], { className: "close-icon", onClick: function () { return _this.close(); } },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9__icons_close_black_svg__["a" /* default */], { color: "#ffffff" })));
    };
    SchemaModal.prototype.predefinedCards = function (presetNames, activePreset) {
        var _this = this;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "schema-presets" }, __WEBPACK_IMPORTED_MODULE_0_lodash__(presetNames).without('custom').map(function (name) {
            return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { key: name, className: __WEBPACK_IMPORTED_MODULE_4_classnames__('introspection-card', {
                    '-active': name === activePreset
                }), onClick: function () {
                    if (name !== activePreset)
                        _this.handlePresetChange(name);
                } },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("h2", null,
                    " ",
                    name,
                    " "));
        }).value()));
    };
    SchemaModal.prototype.customCard = function (isActive, customPresetText) {
        var _this = this;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "custom-schema-selector" },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_4_classnames__('introspection-card', {
                    '-active': isActive
                }), onClick: function () { return isActive || _this.handlePresetChange('custom'); } },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "card-header" },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("h2", null, " Custom Schema ")),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "card-content" },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("p", null, " Run the introspection query against a GraphQL endpoint. Paste the result into the textarea below to view the model relationships."),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10_react_clipboard_js__, { component: "a", "data-clipboard-text": __WEBPACK_IMPORTED_MODULE_11_graphql_utilities__["introspectionQuery"], className: __WEBPACK_IMPORTED_MODULE_4_classnames__({
                            'hint--top': this.state.recentlyCopied
                        }), "data-hint": 'Copied to clipboard', onClick: function () { return _this.copy(); } }, "Copy Introspection Query"),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("textarea", { value: customPresetText || '', disabled: !isActive, onChange: this.handleTextChange.bind(this), placeholder: "Paste Introspection Here" })))));
    };
    SchemaModal.prototype.modalContent = function (presetNames, notApplied, schema) {
        var _this = this;
        if (notApplied === null)
            return null;
        var activePreset = notApplied.activePreset, displayOptions = notApplied.displayOptions, presetValue = notApplied.presetValue;
        var validSelected = !!(schema.schema);
        var errorMessage = schema.error;
        var infoMessage = null;
        var infoClass = null;
        if (errorMessage != null) {
            infoMessage = errorMessage;
            infoClass = '-error';
        }
        else if (activePreset == null) {
            infoMessage = 'Please select introspection';
            infoClass = '-select';
        }
        else if (activePreset === 'custom') {
            infoMessage = 'Please paste your introspection';
            infoClass = '-select';
        }
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "schema-modal" },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "logo" },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("img", { src: "logo.png" })),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "modal-cards" },
                this.predefinedCards(presetNames, activePreset),
                this.customCard(activePreset === 'custom', presetValue)),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_4_classnames__('modal-info-panel', {
                    '-message': !validSelected,
                    '-settings': validSelected
                }) },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_4_classnames__('modal-message', 'content', infoClass) }, infoMessage),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_13__Settings__["a" /* Settings */], { theme: __WEBPACK_IMPORTED_MODULE_7__settings_dark_theme_css__, schema: schema.schema, options: displayOptions, onChange: function (options) { return _this.handleDisplayOptionsChange(options); } })),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_react_toolbox_lib_button__["Button"], { raised: true, label: "Change Schema", theme: __WEBPACK_IMPORTED_MODULE_6__button_dark_theme_css__, disabled: !validSelected, onClick: this.handleChange.bind(this) })));
    };
    SchemaModal.prototype.render = function () {
        var _this = this;
        var _a = this.props, showSchemaModal = _a.showSchemaModal, notApplied = _a.notApplied, schema = _a.schema, presets = _a.presets;
        if (!presets)
            throw new Error('To use schema modal pass "_schemaPresets" property to "<Voyager>"');
        var customStyle = {
            content: { maxHeight: '600px', maxWidth: '1000px' },
            overlay: { zIndex: 10, backgroundColor: 'rgba(0, 0, 0, 0.74902)' }
        };
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_modal__, { isOpen: showSchemaModal, className: "modal-root", style: customStyle, contentLabel: "Select Introspection", onRequestClose: function () { return _this.close(); } },
            this.appBar(),
            this.modalContent(Object.keys(presets), notApplied, schema)));
    };
    return SchemaModal;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps)(SchemaModal);


/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_checkbox__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_checkbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RootSelector__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__introspection__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions___ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};






function mapStateToProps(state) {
    var schema = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__introspection__["c" /* getSchemaSelector */])(state);
    return {
        options: state.displayOptions,
        schema: schema,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onChange: function (options) {
            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions___["c" /* changeDisplayOptions */])(options));
        }
    };
}
var Settings = (function (_super) {
    __extends(Settings, _super);
    function Settings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Settings.prototype.render = function () {
        var _a = this.props, schema = _a.schema, options = _a.options, theme = _a.theme, onChange = _a.onChange;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "menu-content" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "setting-change-root" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, " Root Node "),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__RootSelector__["a" /* default */], { theme: theme, schema: schema, rootTypeId: options.rootTypeId, onChange: function (rootTypeId) { return onChange(__assign({}, options, { rootTypeId: rootTypeId })); } })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "setting-other-options" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, " Options "),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_checkbox___default.a, { label: "Sort by Alphabet", theme: theme, checked: !!options.sortByAlphabet, onChange: function (sortByAlphabet) { return onChange(__assign({}, options, { sortByAlphabet: sortByAlphabet })); } }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_checkbox___default.a, { label: "Skip Relay", theme: theme, checked: !!options.skipRelay, onChange: function (skipRelay) { return onChange(__assign({}, options, { skipRelay: skipRelay })); } }))));
    };
    return Settings;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));

/* unused harmony default export */ var _unused_webpack_default_export = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Settings);


/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_snackbar__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_snackbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ErrorBar_css__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ErrorBar_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ErrorBar_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__(9);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





function mapStateToProps(state) {
    return {
        errorMessage: state.errorMessage,
    };
}
var ErrorBar = (function (_super) {
    __extends(ErrorBar, _super);
    function ErrorBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorBar.prototype.render = function () {
        var _a = this.props, errorMessage = _a.errorMessage, dispatch = _a.dispatch;
        if (!errorMessage)
            return null;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_snackbar__["Snackbar"], { className: 'error-bar', action: 'Dismiss', active: errorMessage !== null, label: errorMessage, timeout: 2000, onClick: function () { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__actions__["G" /* clearError */])()); }, type: 'warning' }));
    };
    return ErrorBar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(ErrorBar);


/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LoadingAnimation_css__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LoadingAnimation_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__LoadingAnimation_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icons_logo_with_signals_svg__ = __webpack_require__(212);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





function mapStateToProps(state) {
    return {
        loading: (state.currentSvgIndex === null)
    };
}
var LoadingAnimation = (function (_super) {
    __extends(LoadingAnimation, _super);
    function LoadingAnimation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoadingAnimation.prototype.shouldComponentUpdate = function (nextProps) {
        return this.props.loading !== nextProps.loading;
    };
    LoadingAnimation.prototype.render = function () {
        var loading = this.props.loading;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_2_classnames__({
                'loading-box': true,
                'visible': loading
            }) },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: 'loading-animation' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__icons_logo_with_signals_svg__["a" /* default */], null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, " Transmitting... "))));
    };
    return LoadingAnimation;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(LoadingAnimation);


/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dot__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__redux__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__worker_monkeypatch__ = __webpack_require__(204);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SVGRender; });




__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__worker_monkeypatch__["a" /* monkeyPatchWorker */])();
var VizWorker = __webpack_require__(473);
var SVGRender = (function () {
    function SVGRender(store) {
        var _this = this;
        this.store = store;
        this.worker = new VizWorker();
        this.unsubscribe = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__redux__["b" /* observeStore */])(store, function (state) { return state.currentSvgIndex; }, __WEBPACK_IMPORTED_MODULE_0__dot__["a" /* getDotSelector */], function (currentSvgIndex, dot) {
            if (currentSvgIndex === null && dot !== null)
                _this._renderSvg(dot);
        });
    }
    SVGRender.prototype.destroy = function () {
        this.unsubscribe();
    };
    SVGRender.prototype._renderSvg = function (dot) {
        var _this = this;
        var cb = function (event) {
            var data = event.data;
            if (data.result === 'success')
                _this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions__["i" /* svgRenderingFinished */])(data.svgString));
            else
                _this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions__["a" /* reportError */])(data.msg));
            _this.worker.removeEventListener('message', cb);
        };
        this.worker.postMessage({ dot: dot });
        this.worker.addEventListener('message', cb);
    };
    return SVGRender;
}());

;


/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_pan_zoom__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_pan_zoom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_pan_zoom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__f_animate__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__f_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__f_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils___ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__introspection__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Viewport; });
/* unused harmony export preprocessVizSvg */







var RelayIconSvg = __webpack_require__(472);
var svgns = 'http://www.w3.org/2000/svg';
var xlinkns = 'http://www.w3.org/1999/xlink';
var Viewport = (function () {
    function Viewport(store, container) {
        var _this = this;
        this.store = store;
        this.container = container;
        var unsubscribe = [];
        function subscribe() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            unsubscribe.push(__WEBPACK_IMPORTED_MODULE_4__redux__["b" /* observeStore */].apply(void 0, [store].concat(args)));
        }
        this._unsubscribe = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__redux__["b" /* observeStore */])(store, function (state) { return state.currentSvgIndex; }, function (svgIdx) {
            unsubscribe.forEach(function (f) { return f(); });
            unsubscribe = [];
            if (svgIdx === null)
                return;
            var cachedSvg = store.getState().svgCache[svgIdx];
            _this.display(cachedSvg.svg);
            subscribe(function (state) { return state.selected.currentNodeId; }, function (id) { return _this.selectNodeById(id); });
            subscribe(function (state) { return state.selected.currentEdgeId; }, function (id) { return _this.selectEdgeById(id); });
            subscribe(function (state) { return state.graphView.focusedId; }, function (id) {
                if (id === null)
                    return;
                _this.focusElement(id);
                store.dispatch(__WEBPACK_IMPORTED_MODULE_3__actions__["B" /* focusElementDone */](id));
            });
        });
        this.resize();
    }
    Viewport.prototype.resize = function () {
        var bbRect = this.container.getBoundingClientRect();
        this.offsetLeft = bbRect.left;
        this.offsetTop = bbRect.top;
    };
    Viewport.prototype.display = function (svgString) {
        var _this = this;
        this.clear();
        this.$svg = preprocessVizSvg(svgString);
        this.container.appendChild(this.$svg);
        // run on next tick
        setTimeout(function () {
            _this.enableZoom();
            _this.bindClick();
            _this.bindHover();
        }, 0);
    };
    Viewport.prototype.clear = function () {
        try {
            this.zoomer && this.zoomer.destroy();
        }
        catch (e) {
        }
        this.container.innerHTML = '';
    };
    Viewport.prototype.enableZoom = function () {
        var svgHeight = this.$svg['height'].baseVal.value;
        var svgWidth = this.$svg['width'].baseVal.value;
        var bbRect = this.container.getBoundingClientRect();
        this.maxZoom = Math.max(svgHeight / bbRect.height, svgWidth / bbRect.width);
        this.zoomer = __WEBPACK_IMPORTED_MODULE_1_svg_pan_zoom__(this.$svg, {
            zoomScaleSensitivity: 0.25,
            minZoom: 0.95,
            maxZoom: this.maxZoom,
            controlIconsEnabled: true
        });
        this.zoomer.zoom(0.95);
    };
    Viewport.prototype.bindClick = function () {
        var _this = this;
        var dragged = false;
        var moveHandler = function () { return dragged = true; };
        this.$svg.addEventListener('mousedown', function () {
            dragged = false;
            setTimeout(function () { return _this.$svg.addEventListener('mousemove', moveHandler); });
        });
        this.$svg.addEventListener('mouseup', function (event) {
            _this.$svg.removeEventListener('mousemove', moveHandler);
            if (dragged)
                return;
            var target = event.target;
            if (isLink(target)) {
                var typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__introspection__["a" /* typeNameToId */])(target.textContent);
                _this.store.dispatch(__WEBPACK_IMPORTED_MODULE_3__actions__["C" /* focusElement */](typeId));
            }
            else if (isNode(target)) {
                var $node = getParent(target, 'node');
                _this.store.dispatch(__WEBPACK_IMPORTED_MODULE_3__actions__["D" /* selectNode */]($node.id));
            }
            else if (isEdge(target)) {
                var $edge = getParent(target, 'edge');
                _this.store.dispatch(__WEBPACK_IMPORTED_MODULE_3__actions__["E" /* selectEdge */](edgeSource($edge).id));
            }
            else if (!isControl(target)) {
                _this.store.dispatch(__WEBPACK_IMPORTED_MODULE_3__actions__["F" /* clearSelection */]());
            }
        });
    };
    Viewport.prototype.bindHover = function () {
        var $prevHovered = null;
        var $prevHoveredEdge = null;
        function clearSelection() {
            if ($prevHovered)
                $prevHovered.classList.remove('hovered');
            if ($prevHoveredEdge)
                $prevHoveredEdge.classList.remove('hovered');
        }
        this.$svg.addEventListener('mousemove', function (event) {
            var target = event.target;
            if (isEdgeSource(target)) {
                var $sourceGroup = getParent(target, 'edge-source');
                if ($sourceGroup.classList.contains('hovered'))
                    return;
                clearSelection();
                $sourceGroup.classList.add('hovered');
                $prevHovered = $sourceGroup;
                var $edge = edgeFrom($sourceGroup.id);
                $edge.classList.add('hovered');
                $prevHoveredEdge = $edge;
            }
            else {
                clearSelection();
            }
        });
    };
    Viewport.prototype.selectNodeById = function (id) {
        this.deselectNode();
        if (id === null) {
            this.$svg.classList.remove('selection-active');
            return;
        }
        this.$svg.classList.add('selection-active');
        var $selected = document.getElementById(id);
        this.selectNode($selected);
    };
    Viewport.prototype.selectNode = function (node) {
        node.classList.add('selected');
        __WEBPACK_IMPORTED_MODULE_0_lodash__["each"](edgesFromNode(node), function ($edge) {
            $edge.classList.add('highlighted');
            edgeTarget($edge).classList.add('selected-reachable');
        });
        __WEBPACK_IMPORTED_MODULE_0_lodash__["each"](edgesTo(node.id), function ($edge) {
            $edge.classList.add('highlighted');
            edgeSource($edge).parentElement.classList.add('selected-reachable');
        });
    };
    Viewport.prototype.selectEdgeById = function (id) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils___["a" /* removeClass */])(this.$svg, '.edge.selected', 'selected');
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils___["a" /* removeClass */])(this.$svg, '.edge-source.selected', 'selected');
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils___["a" /* removeClass */])(this.$svg, '.field.selected', 'selected');
        if (id === null)
            return;
        var $selected = document.getElementById(id);
        if ($selected) {
            var $edge = edgeFrom($selected.id);
            if ($edge)
                $edge.classList.add('selected');
            $selected.classList.add('selected');
        }
    };
    Viewport.prototype.deselectNode = function () {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils___["a" /* removeClass */])(this.$svg, '.node.selected', 'selected');
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils___["a" /* removeClass */])(this.$svg, '.highlighted', 'highlighted');
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils___["a" /* removeClass */])(this.$svg, '.selected-reachable', 'selected-reachable');
    };
    Viewport.prototype.focusElement = function (id) {
        var bbBox = document.getElementById(id).getBoundingClientRect();
        var currentPan = this.zoomer.getPan();
        var viewPortSizes = this.zoomer.getSizes();
        currentPan.x += viewPortSizes.width / 2 - bbBox.width / 2;
        currentPan.y += viewPortSizes.height / 2 - bbBox.height / 2;
        var zoomUpdateToFit = 1.2 * Math.max(bbBox.height / viewPortSizes.height, bbBox.width / viewPortSizes.width);
        var newZoom = this.zoomer.getZoom() / zoomUpdateToFit;
        var recomendedZoom = this.maxZoom * 0.6;
        if (newZoom > recomendedZoom)
            newZoom = recomendedZoom;
        var newX = currentPan.x - bbBox.left + this.offsetLeft;
        var newY = currentPan.y - bbBox.top + this.offsetTop;
        this.animatePanAndZoom(newX, newY, newZoom);
    };
    Viewport.prototype.animatePanAndZoom = function (x, y, zoomEnd) {
        var _this = this;
        var pan = this.zoomer.getPan();
        var panEnd = { x: x, y: y };
        __WEBPACK_IMPORTED_MODULE_2__f_animate__(pan, panEnd, function (props) {
            _this.zoomer.pan({ x: props.x, y: props.y });
            if (props === panEnd) {
                var zoom = _this.zoomer.getZoom();
                __WEBPACK_IMPORTED_MODULE_2__f_animate__({ zoom: zoom }, { zoom: zoomEnd }, function (props) {
                    _this.zoomer.zoom(props.zoom);
                });
            }
        });
    };
    Viewport.prototype.destroy = function () {
        this._unsubscribe();
        try {
            this.zoomer.destroy();
        }
        catch (e) {
        }
    };
    return Viewport;
}());

function preprocessVizSvg(svgString) {
    //Add Relay Icon
    svgString = svgString.replace(/<svg [^>]*>/, '$&' + RelayIconSvg);
    var svg = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils___["b" /* stringToSvg */])(svgString);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils___["c" /* forEachNode */])(svg, 'a', function ($a) {
        var $g = $a.parentNode;
        var $docFrag = document.createDocumentFragment();
        while ($a.firstChild) {
            var $child = $a.firstChild;
            $docFrag.appendChild($child);
        }
        $g.replaceChild($docFrag, $a);
        $g.id = $g.id.replace(/^a_/, '');
    });
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils___["c" /* forEachNode */])(svg, 'title', function ($el) { return $el.remove(); });
    var edgesSources = {};
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils___["c" /* forEachNode */])(svg, '.edge', function ($edge) {
        var _a = $edge.id.split(' => '), from = _a[0], to = _a[1];
        $edge.removeAttribute('id');
        $edge.setAttribute('data-from', from);
        $edge.setAttribute('data-to', to);
        edgesSources[from] = true;
    });
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils___["c" /* forEachNode */])(svg, '[id]', function ($el) {
        var _a = $el.id.split('::'), tag = _a[0], restOfId = _a.slice(1);
        if (__WEBPACK_IMPORTED_MODULE_0_lodash__["size"](restOfId) < 1)
            return;
        $el.classList.add(tag.toLowerCase().replace(/_/, '-'));
    });
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils___["c" /* forEachNode */])(svg, 'g.edge path', function ($path) {
        var $newPath = $path.cloneNode();
        $newPath.classList.add('hover-path');
        $newPath.removeAttribute('stroke-dasharray');
        $path.parentNode.appendChild($newPath);
    });
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils___["c" /* forEachNode */])(svg, '.field', function ($field) {
        var texts = $field.querySelectorAll('text');
        texts[0].classList.add('field-name');
        //Remove spaces used for text alligment
        texts[1].remove();
        if (edgesSources[$field.id])
            $field.classList.add('edge-source');
        for (var i = 2; i < texts.length; ++i) {
            var str = texts[i].innerHTML;
            if (str === '{R}') {
                var $iconPlaceholder = texts[i];
                var height = 22;
                var width = 22;
                var $useRelayIcon = document.createElementNS(svgns, 'use');
                $useRelayIcon.setAttributeNS(xlinkns, 'href', '#RelayIcon');
                $useRelayIcon.setAttribute('width', width + "px");
                $useRelayIcon.setAttribute('height', height + "px");
                //FIXME: remove hardcoded offset
                var y = parseInt($iconPlaceholder.getAttribute('y')) - 15;
                $useRelayIcon.setAttribute('x', $iconPlaceholder.getAttribute('x'));
                $useRelayIcon.setAttribute('y', y.toString());
                $field.replaceChild($useRelayIcon, $iconPlaceholder);
                continue;
            }
            texts[i].classList.add('field-type');
            if (edgesSources[$field.id] && !/[\[\]\!]/.test(str))
                texts[i].classList.add('type-link');
        }
    });
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils___["c" /* forEachNode */])(svg, '.derived-type', function ($derivedType) {
        $derivedType.classList.add('edge-source');
        $derivedType.querySelector('text').classList.add('type-link');
    });
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils___["c" /* forEachNode */])(svg, '.possible-type', function ($possibleType) {
        $possibleType.classList.add('edge-source');
        $possibleType.querySelector('text').classList.add('type-link');
    });
    return svg;
}
function getParent(elem, className) {
    while (elem && elem.tagName !== 'svg') {
        if (elem.classList.contains(className))
            return elem;
        elem = elem.parentNode;
    }
    return null;
}
function isNode(elem) {
    return getParent(elem, 'node') != null;
}
function isEdge(elem) {
    return getParent(elem, 'edge') != null;
}
function isLink(elem) {
    return elem.classList.contains('type-link');
}
function isEdgeSource(elem) {
    return getParent(elem, 'edge-source') != null;
}
function isControl(elem) {
    if (!(elem instanceof SVGElement))
        return false;
    return elem.className.baseVal.startsWith('svg-pan-zoom');
}
function edgeSource(edge) {
    return document.getElementById(edge['dataset']['from']);
}
function edgeTarget(edge) {
    return document.getElementById(edge['dataset']['to']);
}
function edgeFrom(id) {
    return document.querySelector(".edge[data-from='" + id + "']");
}
function edgesFromNode($node) {
    var edges = [];
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils___["c" /* forEachNode */])($node, '.edge-source', function ($source) {
        var $edge = edgeFrom($source.id);
        edges.push($edge);
    });
    return edges;
}
function edgesTo(id) {
    return __WEBPACK_IMPORTED_MODULE_0_lodash__["toArray"](document.querySelectorAll(".edge[data-to='" + id + "']"));
}


/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
/* harmony export (immutable) */ __webpack_exports__["a"] = monkeyPatchWorker;
/*
  According to WebWorker spec scriptURL argument is resolved
  relative to the entry script's base URL, when the method is invoked.
  Because graphql-voyager may be used as a lib and file with worker is located in
  the same folder as main script file we need resolve worker relatively to it.
*/

var origWorker = window.Worker;
function getPatchedWorker(relativeTo) {
    return function relativeWorker(scriptURL) {
        if (scriptURL.endsWith('voyager.worker.js')) {
            relativeTo = relativeTo.endsWith('/') ? relativeTo : relativeTo + '/';
            return new origWorker(relativeTo + scriptURL);
        }
        else {
            return new origWorker(scriptURL);
        }
    };
}
function monkeyPatchWorker() {
    var relativeTo = getJsUrl();
    var baseDir = __WEBPACK_IMPORTED_MODULE_0_path__["dirname"](relativeTo);
    window.Worker = getPatchedWorker(baseDir);
}
/*
  get current script URL
*/
function getJsUrl() {
    var id = +new Date + Math.random();
    try {
        // write empty script to the document. It will get placed directly after the current script
        document.write("<script id=\"dummy" + id + "\"></script>");
        // find appended script and return src of the previous script which is the current script
        return document.getElementById('dummy' + id).previousSibling.src;
    }
    catch (e) {
        return '';
    }
}


/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reselect__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(102);
/* unused harmony export getSchema */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSchemaSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getNaSchemaSelector; });




function unwrapType(type, wrappers) {
    while (type.kind === 'NON_NULL' || type.kind == 'LIST') {
        wrappers.push(type.kind);
        type = type.ofType;
    }
    return type.name;
}
function convertArg(inArg) {
    var outArg = {
        name: inArg.name,
        description: inArg.description,
        defaultValue: inArg.defaultValue,
        typeWrappers: [],
    };
    outArg.type = unwrapType(inArg.type, outArg.typeWrappers);
    return outArg;
}
var convertInputField = convertArg;
function convertField(inField) {
    var outField = {
        name: inField.name,
        description: inField.description,
        typeWrappers: [],
        isDeprecated: inField.isDeprecated
    };
    outField.type = unwrapType(inField.type, outField.typeWrappers);
    outField.args = __WEBPACK_IMPORTED_MODULE_0_lodash__(inField.args).map(convertArg).keyBy('name').value();
    if (outField.isDeprecated)
        outField.deprecationReason = inField.deprecationReason;
    return outField;
}
function convertType(inType) {
    var outType = {
        kind: inType.kind,
        name: inType.name,
        description: inType.description,
    };
    switch (outType.kind) {
        case 'OBJECT':
            outType.interfaces = __WEBPACK_IMPORTED_MODULE_0_lodash__(inType.interfaces).map('name').uniq().value();
            outType.fields = __WEBPACK_IMPORTED_MODULE_0_lodash__(inType.fields).map(convertField).keyBy('name').value();
            break;
        case 'INTERFACE':
            outType.derivedTypes = __WEBPACK_IMPORTED_MODULE_0_lodash__(inType.possibleTypes).map('name').uniq().value();
            outType.fields = __WEBPACK_IMPORTED_MODULE_0_lodash__(inType.fields).map(convertField).keyBy('name').value();
            break;
        case 'UNION':
            outType.possibleTypes = __WEBPACK_IMPORTED_MODULE_0_lodash__(inType.possibleTypes).map('name').uniq().value();
            break;
        case 'ENUM':
            outType.enumValues = inType.enumValues;
            break;
        case 'INPUT_OBJECT':
            outType.inputFields = __WEBPACK_IMPORTED_MODULE_0_lodash__(inType.inputFields)
                .map(convertInputField).keyBy('name').value();
            break;
    }
    return outType;
}
function simplifySchema(inSchema) {
    return {
        types: __WEBPACK_IMPORTED_MODULE_0_lodash__(inSchema.types).map(convertType).keyBy('name').value(),
        queryType: inSchema.queryType.name,
        mutationType: __WEBPACK_IMPORTED_MODULE_0_lodash__["get"](inSchema, 'mutationType.name', null),
        subscriptionType: __WEBPACK_IMPORTED_MODULE_0_lodash__["get"](inSchema, 'subscriptionType.name', null),
    };
}
function markRelayTypes(schema) {
    var nodeType = schema.types[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* typeNameToId */])('Node')];
    if (nodeType)
        nodeType.isRelayType = true;
    var pageInfoType = schema.types[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* typeNameToId */])('PageInfo')];
    if (pageInfoType)
        pageInfoType.isRelayType = true;
    var edgeTypesMap = {};
    __WEBPACK_IMPORTED_MODULE_0_lodash__["each"](schema.types, function (type) {
        if (!__WEBPACK_IMPORTED_MODULE_0_lodash__["isEmpty"](type.interfaces)) {
            type.interfaces = __WEBPACK_IMPORTED_MODULE_0_lodash__["reject"](type.interfaces, function (baseType) { return baseType.type.name === 'Node'; });
            if (__WEBPACK_IMPORTED_MODULE_0_lodash__["isEmpty"](type.interfaces))
                delete type.interfaces;
        }
        __WEBPACK_IMPORTED_MODULE_0_lodash__["each"](type.fields, function (field) {
            if (!/.Connection$/.test(field.type.name))
                return;
            //FIXME: additional checks
            var relayConnetion = field.type;
            if (!relayConnetion.fields.edges)
                return;
            relayConnetion.isRelayType = true;
            var relayEdge = relayConnetion.fields['edges'].type;
            relayEdge.isRelayType = true;
            var realType = relayEdge.fields['node'].type;
            edgeTypesMap[relayEdge.name] = realType;
            field.relayType = field.type;
            field.type = realType;
            field.typeWrappers = ['LIST'];
            var relayArgNames = ['first', 'last', 'before', 'after'];
            var isRelayArg = (function (arg) { return relayArgNames.includes(arg.name); });
            field.relayArgs = __WEBPACK_IMPORTED_MODULE_0_lodash__["pickBy"](field.args, isRelayArg);
            field.args = __WEBPACK_IMPORTED_MODULE_0_lodash__["omitBy"](field.args, isRelayArg);
        });
    });
    __WEBPACK_IMPORTED_MODULE_0_lodash__["each"](schema.types, function (type) {
        __WEBPACK_IMPORTED_MODULE_0_lodash__["each"](type.fields, function (field) {
            var realType = edgeTypesMap[field.type.name];
            if (realType === undefined)
                return;
            field.relayType = field.type;
            field.type = realType;
        });
    });
    var queryType = schema.queryType;
    var query = schema.types[queryType];
    if (__WEBPACK_IMPORTED_MODULE_0_lodash__["get"](query, 'fields.node.type.isRelayType'))
        delete query.fields['node'];
    //GitHub use `nodes` instead of `node`.
    if (__WEBPACK_IMPORTED_MODULE_0_lodash__["get"](query, 'fields.nodes.type.isRelayType'))
        delete query.fields['nodes'];
    if (__WEBPACK_IMPORTED_MODULE_0_lodash__["get"](query, 'fields.relay.type.id') == queryType)
        delete query.fields['relay'];
}
function sortIntrospection(value) {
    if (__WEBPACK_IMPORTED_MODULE_0_lodash__["isArray"](value)) {
        if (__WEBPACK_IMPORTED_MODULE_0_lodash__["isString"](value[0]))
            return value.sort();
        else
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["map"](value, sortIntrospection);
    }
    else if (__WEBPACK_IMPORTED_MODULE_0_lodash__["isPlainObject"](value))
        return __WEBPACK_IMPORTED_MODULE_0_lodash__(value)
            .toPairs().sortBy(0).fromPairs()
            .mapValues(sortIntrospection).value();
    else
        return value;
}
function assignTypesAndIDs(schema) {
    schema.queryType = schema.types[schema.queryType];
    schema.mutationType = schema.types[schema.mutationType];
    schema.subscriptionType = schema.types[schema.subscriptionType];
    __WEBPACK_IMPORTED_MODULE_0_lodash__["each"](schema.types, function (type) {
        type.id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* typeNameToId */])(type.name);
        __WEBPACK_IMPORTED_MODULE_0_lodash__["each"](type.inputFields, function (field) {
            field.id = "FIELD::" + type.name + "::" + field.name;
            field.type = schema.types[field.type];
        });
        __WEBPACK_IMPORTED_MODULE_0_lodash__["each"](type.fields, function (field) {
            field.id = "FIELD::" + type.name + "::" + field.name;
            field.type = schema.types[field.type];
            __WEBPACK_IMPORTED_MODULE_0_lodash__["each"](field.args, function (arg) {
                arg.id = "ARGUMENT::" + type.name + "::" + field.name + "::" + arg.name;
                arg.type = schema.types[arg.type];
            });
        });
        if (!__WEBPACK_IMPORTED_MODULE_0_lodash__["isEmpty"](type.possibleTypes)) {
            type.possibleTypes = __WEBPACK_IMPORTED_MODULE_0_lodash__["map"](type.possibleTypes, function (possibleType) { return ({
                id: "POSSIBLE_TYPE::" + type.name + "::" + possibleType,
                type: schema.types[possibleType]
            }); });
        }
        if (!__WEBPACK_IMPORTED_MODULE_0_lodash__["isEmpty"](type.derivedTypes)) {
            type.derivedTypes = __WEBPACK_IMPORTED_MODULE_0_lodash__["map"](type.derivedTypes, function (derivedType) { return ({
                id: "DERIVED_TYPE::" + type.name + "::" + derivedType,
                type: schema.types[derivedType]
            }); });
        }
        if (!__WEBPACK_IMPORTED_MODULE_0_lodash__["isEmpty"](type.interfaces)) {
            type.interfaces = __WEBPACK_IMPORTED_MODULE_0_lodash__["map"](type.interfaces, function (baseType) { return ({
                id: "INTERFACE::" + type.name + "::" + baseType,
                type: schema.types[baseType]
            }); });
        }
    });
    schema.types = __WEBPACK_IMPORTED_MODULE_0_lodash__["keyBy"](schema.types, 'id');
}
function getSchema(introspection, sortByAlphabet, skipRelay, transformSchema) {
    if (!introspection)
        return null;
    //TODO: Check introspection result for errors
    var schema = simplifySchema(introspection.data.__schema);
    if (sortByAlphabet)
        schema = sortIntrospection(schema);
    if (transformSchema)
        schema = transformSchema(schema);
    assignTypesAndIDs(schema);
    if (!skipRelay)
        markRelayTypes(schema);
    return schema;
}
// function transformSchema(schema) {
//   const {types} = schema
//
//   const copy = Object.assign({}, types)
//
//   Object.keys(copy).forEach(typeName => {
//     if (typeName.startsWith('_all') || typeName.startsWith('all')) {
//       delete copy[typeName]
//     } else {
//       const type = copy[typeName]
//
//       if (type.fields) {
//         Object.keys(type.fields).forEach(fieldName => {
//           const field = type.fields[fieldName]
//           if (field.type === '_QueryMeta') {
//             delete copy[typeName].fields[fieldName]
//           }
//         })
//       }
//     }
//   })
//
//   return {
//     ...schema,
//     queryType: 'Node',
//     types: copy,
//   }
// }
var getSchemaSelector = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_reselect__["createSelector"])(function (state) { return state.schema; }, function (state) { return state.displayOptions.sortByAlphabet; }, function (state) { return state.displayOptions.skipRelay; }, function (state) { return state.displayOptions.transformSchema; }, getSchema);
var getNaSchemaSelector = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_reselect__["createSelector"])(function (state) {
    if (state.schemaModal.notApplied === null)
        return null;
    var presetValue = state.schemaModal.notApplied.presetValue;
    return presetValue;
}, function (state) { return __WEBPACK_IMPORTED_MODULE_0_lodash__["get"](state, 'schemaModal.notApplied.displayOptions.sortByAlphabet'); }, function (state) { return __WEBPACK_IMPORTED_MODULE_0_lodash__["get"](state, 'schemaModal.notApplied.displayOptions.skipRelay'); }, function (state) { return __WEBPACK_IMPORTED_MODULE_0_lodash__["get"](state, 'schemaModal.notApplied.displayOptions.transformSchema'); }, function (introspection, sortByAlphabet, skipRelay, transformSchema) {
    if (introspection == null)
        return { schema: null, error: null };
    try {
        if (typeof introspection === 'string')
            introspection = JSON.parse(introspection);
        //Used only to validate introspection so result is ignored
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_graphql__["buildClientSchema"])(introspection.data);
        var schema = getSchema(introspection, sortByAlphabet, skipRelay, transformSchema);
        return { schema: schema, error: null };
    }
    catch (e) {
        console.error(e);
        return { error: e.toString(), schema: null };
    }
});


/***/ }),
/* 206 */
/***/ (function(module, exports) {

;
if (!Element.prototype.scrollIntoViewIfNeeded) {
    Element.prototype.scrollIntoViewIfNeeded = function (centerIfNeeded) {
        centerIfNeeded = arguments.length === 0 ? true : !!centerIfNeeded;
        var parent = this.parentNode, parentComputedStyle = window.getComputedStyle(parent, null), parentBorderTopWidth = parseInt(parentComputedStyle.getPropertyValue('border-top-width')), parentBorderLeftWidth = parseInt(parentComputedStyle.getPropertyValue('border-left-width')), overTop = this.offsetTop - parent.offsetTop < parent.scrollTop, overBottom = (this.offsetTop - parent.offsetTop + this.clientHeight - parentBorderTopWidth) > (parent.scrollTop + parent.clientHeight), overLeft = this.offsetLeft - parent.offsetLeft < parent.scrollLeft, overRight = (this.offsetLeft - parent.offsetLeft + this.clientWidth - parentBorderLeftWidth) > (parent.scrollLeft + parent.clientWidth), alignWithTop = overTop && !overBottom;
        if ((overTop || overBottom) && centerIfNeeded) {
            parent.scrollTop = this.offsetTop - parent.offsetTop - parent.clientHeight / 2 - parentBorderTopWidth + this.clientHeight / 2;
        }
        if ((overLeft || overRight) && centerIfNeeded) {
            parent.scrollLeft = this.offsetLeft - parent.offsetLeft - parent.clientWidth / 2 - parentBorderLeftWidth + this.clientWidth / 2;
        }
        if ((overTop || overBottom || overLeft || overRight) && !centerIfNeeded) {
            this.scrollIntoView(alignWithTop);
        }
    };
}


/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions___ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__introspection__ = __webpack_require__(24);
/* harmony export (immutable) */ __webpack_exports__["a"] = rootReducer;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var initialState = {
    schema: null,
    schemaModal: {
        opened: false,
        activePreset: null,
        notApplied: null
    },
    displayOptions: {
        rootTypeId: null,
        skipRelay: true,
        sortByAlphabet: false,
        hideTypes: [],
    },
    currentSvgIndex: null,
    svgCache: [],
    selected: {
        previousTypesIds: [],
        currentNodeId: null,
        currentEdgeId: null,
        scalar: null
    },
    graphView: {
        focusedId: null,
    },
    menuOpened: false,
    errorMessage: null,
};
function pushHistory(currentTypeId, previousState) {
    var previousTypesIds = previousState.selected.previousTypesIds;
    var previousTypeId = previousState.selected.currentNodeId;
    if (previousTypeId === null || previousTypeId === currentTypeId)
        return previousTypesIds;
    if (__WEBPACK_IMPORTED_MODULE_0_lodash__["last"](previousTypesIds) !== previousTypeId)
        return previousTypesIds.concat([previousTypeId]);
}
function rootReducer(previousState, action) {
    if (previousState === void 0) { previousState = initialState; }
    var type = action.type;
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions___["j" /* CHANGE_SCHEMA */]:
            return __assign({}, previousState, { schema: action.payload.introspection, displayOptions: __WEBPACK_IMPORTED_MODULE_0_lodash__["defaults"](action.payload.displayOptions, initialState.displayOptions), svgCache: [], currentSvgIndex: null, graphView: initialState.graphView, selected: initialState.selected });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["k" /* CHANGE_DISPLAY_OPTIONS */]:
            var displayOptions_1 = __assign({}, previousState.displayOptions, action.payload);
            var cacheIdx = __WEBPACK_IMPORTED_MODULE_0_lodash__["findIndex"](previousState.svgCache, function (cacheItem) {
                return __WEBPACK_IMPORTED_MODULE_0_lodash__["isEqual"](cacheItem.displayOptions, displayOptions_1);
            });
            return __assign({}, previousState, { displayOptions: displayOptions_1, currentSvgIndex: cacheIdx >= 0 ? cacheIdx : null, graphView: initialState.graphView, selected: initialState.selected });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["l" /* SVG_RENDERING_FINISHED */]:
            return __assign({}, previousState, { svgCache: previousState.svgCache.concat([{
                        displayOptions: previousState.displayOptions,
                        svg: action.payload
                    }]), currentSvgIndex: previousState.svgCache.length });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["m" /* SELECT_NODE */]:
            var currentNodeId = action.payload;
            if (currentNodeId === previousState.selected.currentNodeId)
                return previousState;
            return __assign({}, previousState, { selected: __assign({}, previousState.selected, { previousTypesIds: pushHistory(currentNodeId, previousState), currentNodeId: currentNodeId, currentEdgeId: null, scalar: null }) });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["n" /* SELECT_EDGE */]:
            var currentEdgeId = action.payload;
            // deselect if click again
            if (currentEdgeId === previousState.selected.currentEdgeId) {
                return __assign({}, previousState, { selected: __assign({}, previousState.selected, { currentEdgeId: null, scalar: null }) });
            }
            var nodeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__introspection__["h" /* extractTypeId */])(currentEdgeId);
            return __assign({}, previousState, { selected: __assign({}, previousState.selected, { previousTypesIds: pushHistory(nodeId, previousState), currentNodeId: nodeId, currentEdgeId: currentEdgeId, scalar: null }) });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["o" /* SELECT_PREVIOUS_TYPE */]:
            return __assign({}, previousState, { selected: __assign({}, previousState.selected, { previousTypesIds: __WEBPACK_IMPORTED_MODULE_0_lodash__["initial"](previousState.selected.previousTypesIds), currentNodeId: __WEBPACK_IMPORTED_MODULE_0_lodash__["last"](previousState.selected.previousTypesIds), currentEdgeId: null, scalar: null }) });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["p" /* CLEAR_SELECTION */]:
            return __assign({}, previousState, { selected: initialState.selected });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["q" /* FOCUS_ELEMENT */]:
            return __assign({}, previousState, { graphView: __assign({}, previousState.graphView, { focusedId: action.payload }) });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["r" /* FOCUS_ELEMENT_DONE */]:
            if (previousState.graphView.focusedId !== action.payload)
                return previousState;
            return __assign({}, previousState, { graphView: __assign({}, previousState.graphView, { focusedId: null }) });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["s" /* SHOW_SCHEMA_MODAL */]:
            var presetValue = previousState.schema;
            return __assign({}, previousState, { schemaModal: __assign({}, previousState.schemaModal, { opened: true, notApplied: {
                        //schema: schema,
                        activePreset: previousState.schemaModal.activePreset,
                        displayOptions: previousState.displayOptions,
                        presetValue: presetValue
                    } }), errorMessage: initialState.errorMessage });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["t" /* CHANGE_ACTIVE_PRESET */]:
            return __assign({}, previousState, { schemaModal: __assign({}, previousState.schemaModal, { activePreset: action.payload }) });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["u" /* CHANGE_NOT_APPLIED_ACTIVE_PRESET */]:
            var naActivePreset = action.payload.presetName;
            var naSchema = action.payload.schema;
            return __assign({}, previousState, { schemaModal: __assign({}, previousState.schemaModal, { notApplied: __assign({}, previousState.schemaModal.notApplied, { presetValue: naSchema, activePreset: naActivePreset, displayOptions: initialState.displayOptions }) }), errorMessage: initialState.errorMessage });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["v" /* CHANGE_NOT_APPLIED_DISPLAY_OPTIONS */]:
            return __assign({}, previousState, { schemaModal: __assign({}, previousState.schemaModal, { notApplied: __assign({}, previousState.schemaModal.notApplied, { displayOptions: action.payload }) }) });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["w" /* HIDE_SCHEMA_MODAL */]:
            return __assign({}, previousState, { schemaModal: __assign({}, previousState.schemaModal, { opened: false, notApplied: null }) });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["x" /* TOGGLE_MENU */]:
            return __assign({}, previousState, { menuOpened: !previousState.menuOpened });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["y" /* REPORT_ERROR */]:
            return __assign({}, previousState, { errorMessage: action.payload });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["z" /* CLEAR_ERROR */]:
            return __assign({}, previousState, { errorMessage: initialState.errorMessage });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["A" /* CHANGE_SELECTED_TYPEINFO */]:
            return __assign({}, previousState, { selected: __assign({}, previousState.selected, { typeinfo: action.payload }) });
        default:
            return previousState;
    }
}


/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reselect__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__graph__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSelectedType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPreviousType; });



var getSelectedType = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_reselect__["createSelector"])(function (state) { return state.selected.currentNodeId; }, function (state) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__graph__["e" /* getTypeGraphSelector */])(state); }, function (selectedNodeId, typeGraph) {
    return __WEBPACK_IMPORTED_MODULE_0_lodash__["get"](typeGraph, ['nodes', selectedNodeId], null);
});
var getPreviousType = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_reselect__["createSelector"])(function (state) { return __WEBPACK_IMPORTED_MODULE_0_lodash__["last"](state.selected.previousTypesIds); }, function (state) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__graph__["e" /* getTypeGraphSelector */])(state); }, function (previousNodeId, typeGraph) {
    return __WEBPACK_IMPORTED_MODULE_0_lodash__["get"](typeGraph, ['nodes', previousNodeId], null);
});


/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = forEachNode;
/* unused harmony export addClass */
/* harmony export (immutable) */ __webpack_exports__["a"] = removeClass;
/* harmony export (immutable) */ __webpack_exports__["b"] = stringToSvg;
function forEachNode(parent, selector, fn) {
    var $nodes = parent.querySelectorAll(selector);
    for (var i = 0; i < $nodes.length; i++) {
        fn($nodes[i]);
    }
}
function addClass(parent, selector, className) {
    forEachNode(parent, selector, function (node) { return node.classList.add(className); });
}
function removeClass(parent, selector, className) {
    forEachNode(parent, selector, function (node) { return node.classList.remove(className); });
}
function stringToSvg(svgString) {
    var svgDoc = new DOMParser().parseFromString(svgString, 'image/svg+xml');
    return document.importNode(svgDoc.documentElement, true);
}


/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_helpers__ = __webpack_require__(209);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dom_helpers__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__dom_helpers__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__dom_helpers__["c"]; });



/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 431.7 433.3" }, this.props), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M429.9 375.9l-95.7-95.7c-1.1-1.1-2.7-1.8-4.2-1.8-1.6 0-3.1.6-4.2 1.8l-6.5 6.5-10.1-10.1 2.9-2.9c4.7-4.7 4.7-12.3 0-17l-2.6-2.6c.2-.6.4-1.3.4-2.1v-39.8c22.9 15.1 46.9 23.5 67.7 23.5 4.8 0 9.5-.5 13.9-1.4 4.3-.9 7.8-4.1 9.1-8.3 1.3-4.2.1-8.8-3-11.9L344.5 161v-24.3c1.2.2 2.5.4 3.8.4 5.1 0 9.9-2 13.5-5.6 3.6-3.6 5.6-8.4 5.6-13.5s-2-9.9-5.6-13.5c-3.6-3.6-8.4-5.6-13.5-5.6s-9.9 2-13.5 5.6-5.6 8.4-5.6 13.5c0 1.3.1 2.5.4 3.8h-24.3l-53.1-53.1c-2.3-2.3-5.3-3.5-8.5-3.5-1.1 0-2.3.2-3.4.5-4.2 1.3-7.4 4.7-8.3 9.1-4.9 23.5 3.4 53.2 22.2 81.6h-39.8c-.5 0-1 .1-1.5.2 3.3-5.3 2.7-12.4-1.9-17-1.9-1.9-4.2-3.1-6.7-3.7L177.6 25.2c.4-.3.8-.7 1.2-1.1 5.5-5.5 5.5-14.5 0-20s-14.5-5.5-20 0-5.5 14.5 0 20c2 2 4.5 3.3 7.1 3.8l26.2 110.6c-.3.3-.7.6-1 .9-5.3 5.3-5.3 14 0 19.3.3.3.7.6 1 .9L159.7 192c-.3-.4-.6-.7-.9-1-5.3-5.3-14-5.3-19.3 0-.3.3-.6.7-.9 1L28 165.9c-.5-2.6-1.8-5.1-3.8-7.1-5.5-5.5-14.5-5.5-20 0s-5.5 14.5 0 20c2.8 2.8 6.4 4.1 10 4.1s7.2-1.4 10-4.1c.4-.4.7-.8 1.1-1.2L136 203.8c.5 2.4 1.8 4.8 3.7 6.7 2.7 2.7 6.2 4 9.7 4 2.1 0 4.2-.5 6.1-1.5l.3.3 99.9 99.9c2.3 2.3 5.4 3.5 8.5 3.5 3.1 0 6.1-1.2 8.5-3.5l3.4-3.4 10.1 10.1-7.4 7.4c-1.1 1.1-1.8 2.7-1.8 4.2 0 1.6.6 3.1 1.8 4.2l95.7 95.7c.3.3.6.5.9.8h.1c.3.2.6.4 1 .5h.1c.3.1.7.2 1 .3h.1c.4.1.7.1 1.1.1s.7 0 1.1-.1h.1c.4-.1.7-.2 1-.3h.1c.3-.1.7-.3 1-.5h.1c.7-.4 1.2-1 1.7-1.7v-.1c.2-.3.4-.6.5-1v-.1c.1-.3.2-.7.3-1v-.1c.1-.4.1-.7.1-1.1v-40.9h40.9c1.7 0 3.3-.7 4.4-1.9 0 0 .1 0 .1-.1 2.1-2.1 2.1-5.9-.3-8.3zm-57.4-1.5h-34.9v-34.9h34.9v34.9zm-46.9-77.1v30.3h-30.3l30.3-30.3zm0 42.2v26.4l-26.4-26.4h26.4zm12-12v-26.9l26.9 26.9h-26.9zm-69.2-114.3h29.3v29.3l-29.3-29.3zm-3.5-42.1l30.1 30.1h-30.1v-30.1zm63.9-25.4l3.4-3.4v6.8l-3.4-3.4zM343 113c1.3-1.3 3.1-2.1 5-2.1s3.7.7 5 2.1c1.3 1.3 2.1 3.1 2.1 5s-.7 3.7-2.1 5c-1.3 1.3-3.1 2.1-5 2.1s-3.7-.7-5-2.1c-1.3-1.3-2.1-3.1-2.1-5s.7-3.7 2.1-5zm-19.2 20.8l-3.4 3.4-3.4-3.4h6.8zm-80.5-56.7l145.6 145.6c-3.6.7-7.5 1.1-11.5 1.1-21.7 0-48.5-10.8-73.4-30.5l-31.4-31.4c-23.2-29.4-34.1-61.5-29.3-84.8zm9.6 120.5l-29.3-29.3h29.3v29.3zm-88.8 7.3l39.5-39.5 99.9 99.9-5.4 5.4c-.8.3-1.5.7-2.1 1.3-.6.6-1 1.3-1.3 2.1l-21.3 21.3c-.8.3-1.5.7-2.1 1.3-.6.6-1 1.3-1.3 2.1l-6 6-99.9-99.9zm120.3 96.4l16.3-16.3 10.1 10.1-16.3 16.3-10.1-10.1zm88.1 111.5l-26.4-26.4h26.4v26.4zm12-65.3l26.9 26.9h-26.9v-26.9z" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { className: "st0", d: "M217.5 193.4c-5.2 0-10.2 1.5-14.5 4.5-11.8 8-14.9 24.1-6.9 35.9 4.8 7.1 12.8 11.4 21.4 11.4 5.2 0 10.2-1.5 14.5-4.5 11.8-8 14.9-24.1 6.9-35.9-4.8-7.2-12.8-11.4-21.4-11.4zm7.7 37.3c-2.4 1.6-5.1 2.4-7.8 2.4-4.4 0-8.8-2.1-11.5-6.1-4.3-6.3-2.6-14.9 3.7-19.2 2.4-1.6 5.1-2.4 7.8-2.4 4.4 0 8.8 2.1 11.5 6.1 4.3 6.3 2.7 14.9-3.7 19.2z" }));
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = SVG;

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 490.8 438.1" }, this.props), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M334.2 285c-2.3-2.3-6.1-2.3-8.5 0l-6.5 6.5-10.1-10.1 2.9-2.9c4.7-4.7 4.7-12.3 0-17l-2.6-2.6c.2-.6.4-1.3.4-2.1V217c22.9 15.1 46.9 23.5 67.7 23.5 4.8 0 9.5-.5 13.9-1.4 4.3-.9 7.8-4.1 9.1-8.3 1.3-4.2.1-8.8-3-11.9l-53.1-53.1v-24.3c1.2.2 2.5.4 3.7.4 5.1 0 9.9-2 13.5-5.6 7.5-7.5 7.5-19.6 0-27.1-3.6-3.6-8.4-5.6-13.5-5.6s-9.9 2-13.5 5.6c-3.6 3.6-5.6 8.4-5.6 13.5 0 1.3.1 2.5.4 3.7h-24.3L252 73.3c-2.3-2.3-5.3-3.5-8.5-3.5-1.1 0-2.3.2-3.4.5-4.2 1.3-7.4 4.7-8.3 9.1-4.9 23.5 3.4 53.2 22.2 81.6h-39.8c-.5 0-1 .1-1.5.2 3.3-5.3 2.7-12.4-1.9-17-1.9-1.9-4.2-3.1-6.7-3.7L177.6 30c.4-.3.8-.7 1.2-1.1 5.5-5.5 5.5-14.5 0-20s-14.5-5.5-20 0-5.5 14.5 0 20c2 2 4.5 3.3 7.1 3.8l26.2 110.6c-.3.3-.7.6-1 .9-5.3 5.3-5.3 14 0 19.3.3.3.7.6 1 .9L159.8 197c-.3-.4-.6-.7-.9-1-5.3-5.3-14-5.3-19.3 0-.3.3-.6.7-.9 1L28 170.7c-.6-2.7-1.9-5.1-3.8-7.1-5.5-5.5-14.5-5.5-20 0-2.7 2.7-4.1 6.2-4.1 10s1.5 7.3 4.1 10c2.8 2.8 6.4 4.1 10 4.1 3.6 0 7.2-1.4 10-4.1.4-.4.7-.8 1.1-1.2L136 208.6c.5 2.4 1.8 4.8 3.7 6.7 2.7 2.7 6.2 4 9.7 4 2.1 0 4.2-.5 6.1-1.5l.3.3 99.9 99.9c2.3 2.3 5.3 3.5 8.5 3.5s6.2-1.3 8.5-3.5l3.4-3.4 10.1 10.1-7.4 7.4c-2.3 2.3-2.3 6.1 0 8.5l95.7 95.7c.3.3.6.5.9.8h.1c.3.2.6.4 1 .5h.1c.3.1.7.2 1 .3h.1c.4.1.7.1 1.1.1s.7 0 1.1-.1h.1c.4-.1.7-.2 1-.3h.1c.3-.1.7-.3 1-.5h.1c.7-.4 1.2-1 1.7-1.7v-.1c.2-.3.4-.6.5-1v-.1c.1-.3.2-.7.3-1v-.1c.1-.4.1-.7.1-1.1v-40.9h40.9c1.7 0 3.3-.7 4.4-1.9 0 0 .1 0 .1-.1 2.3-2.3 2.3-6.1 0-8.5l-96-95.6zm38.3 94.2h-34.9v-34.9h34.9v34.9zM325.7 302v30.3h-30.3l30.3-30.3zm0 42.3v26.4l-26.4-26.4h26.4zm12-12v-26.9l26.9 26.9h-26.9zm-69.3-114.4h29.3v29.3l-29.3-29.3zm-3.5-42L295 206h-30.1v-30.1zm63.9-25.5l3.4-3.4v6.8l-3.4-3.4zm14.2-32.7c1.3-1.3 3.1-2.1 5-2.1s3.7.7 5 2.1c2.8 2.8 2.8 7.3 0 10.1-1.3 1.3-3.1 2.1-5 2.1s-3.7-.7-5-2.1-2.1-3.1-2.1-5 .7-3.7 2.1-5.1zm-19.2 20.8l-3.4 3.4-3.4-3.4h6.8zm-80.5-56.6l145.6 145.6c-3.6.7-7.5 1.1-11.5 1.1-21.7 0-48.5-10.8-73.4-30.5l-31.4-31.4c-23.2-29.4-34.1-61.6-29.3-84.8zm9.6 120.5L223.5 173h29.3v29.4zm-88.8 7.2l39.5-39.5 99.9 99.9-5.4 5.4c-.8.3-1.5.7-2.1 1.3-.6.6-1 1.3-1.3 2.1l-21.3 21.3c-.8.3-1.5.7-2.1 1.3-.6.6-1 1.3-1.3 2.1l-6 6-99.9-99.9zm120.3 96.5l16.3-16.3 10.1 10.1-16.3 16.3-10.1-10.1zm88.1 111.5l-26.4-26.4h26.4v26.4zm12-65.3l26.9 26.9h-26.9v-26.9z" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M217.5 198.2c-5.2 0-10.2 1.5-14.5 4.5-11.8 8-14.9 24.1-6.9 35.9 4.8 7.1 12.8 11.4 21.4 11.4 5.2 0 10.2-1.5 14.5-4.5 5.7-3.9 9.6-9.7 10.9-16.5 1.3-6.8-.1-13.7-4-19.4-4.8-7.2-12.8-11.4-21.4-11.4zm7.8 37.3c-2.4 1.6-5.1 2.4-7.8 2.4-4.4 0-8.8-2.1-11.5-6.1-4.3-6.3-2.6-14.9 3.7-19.2 2.4-1.6 5.1-2.4 7.8-2.4 4.4 0 8.8 2.1 11.5 6.1 4.2 6.3 2.6 14.9-3.7 19.2z" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { className: "voyager-signal1", d: "M369.5 101.3c5.1 5.1 10.3 9.4 14.6 12.2 2.6 1.7 5.9 3.6 8.9 3.6 1.4 0 2.6-.4 3.7-1.4 5.8-5.8-8.1-20.9-14.3-27.2-5.1-5.1-10.3-9.4-14.6-12.2-3.8-2.5-9.3-5.4-12.5-2.1-5.9 5.7 8 20.8 14.2 27.1zm7.9-7.9c6.6 6.6 10.6 12 12.4 15.4-3.3-1.9-8.8-5.9-15.4-12.4-6.6-6.6-10.6-12-12.4-15.4 3.4 1.8 8.8 5.8 15.4 12.4z" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { className: "voyager-signal2", d: "M390 80.8c4.4 4.4 24.2 23.6 34.7 23.6 1.7 0 3.1-.5 4.2-1.6 8.1-8.1-16.9-33.9-22-39-5.1-5.1-30.9-30.1-39-22-3.1 3.1-2 8.4 3.5 16.8 4.4 6.7 11 14.5 18.6 22.2zm12-12.1c13.9 13.9 20.4 24.6 21.4 28.5-3.9-1.1-14.6-7.5-28.5-21.4-13.9-13.9-20.4-24.6-21.4-28.5 4 1.1 14.6 7.5 28.5 21.4z" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { className: "voyager-signal3", d: "M462.5 67c-6.5-9.2-16.2-20.4-27.3-31.5-11-11-22.2-20.7-31.4-27.2-11.5-8.1-18-10.1-21.5-6.6s-1.5 9.9 6.6 21.5c6.5 9.2 16.2 20.4 27.3 31.5 11.1 11.1 22.3 20.8 31.5 27.3 7.9 5.6 13.4 8.3 17.2 8.3 1.7 0 3.1-.6 4.2-1.7 3.5-3.6 1.6-10-6.6-21.6zm-41.4-17.3C399.4 28 389.3 12.4 387.8 7.2c5.2 1.5 20.8 11.6 42.5 33.3C452 62.2 462 77.8 463.6 83c-5.2-1.6-20.8-11.6-42.5-33.3z" }));
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = SVG;

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", _extends({ viewBox: "0 0 600 600" }, this.props), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", { fill: "#F26B00" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M142.536 198.858c0 26.36-21.368 47.72-47.72 47.72-26.36 0-47.722-21.36-47.722-47.72s21.36-47.72 47.72-47.72c26.355 0 47.722 21.36 47.722 47.72" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M505.18 414.225H238.124c-35.25 0-63.926-28.674-63.926-63.923s28.678-63.926 63.926-63.926h120.78c20.816 0 37.753-16.938 37.753-37.756s-16.938-37.756-37.753-37.756H94.81c-7.227 0-13.086-5.86-13.086-13.085 0-7.227 5.86-13.086 13.085-13.086h264.093c35.25 0 63.923 28.678 63.923 63.926s-28.674 63.923-63.923 63.923h-120.78c-20.82 0-37.756 16.938-37.756 37.76 0 20.816 16.938 37.753 37.756 37.753H505.18c7.227 0 13.086 5.86 13.086 13.085 0 7.226-5.858 13.085-13.085 13.085z" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M457.464 401.142c0-26.36 21.36-47.72 47.72-47.72s47.72 21.36 47.72 47.72-21.36 47.72-47.72 47.72-47.72-21.36-47.72-47.72" })));
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = SVG;

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", _extends({ height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" }, this.props), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" }));
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = SVG;

/***/ }),
/* 215 */
/***/ (function(module, exports) {

module.exports = function anonymous(locals, escapeFn, include, rethrow
/**/) {
"use strict";
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
        .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
  var __output = [], __append = __output.push.bind(__output);
    ; 
  var typeGraph = locals.typeGraph;
  var _ = locals._;
  var stringifyWrappers = locals.stringifyWrappers;
 
    ;  function HtmlId(id) {
  return 'HREF="remove_me_url" ID="' + id + '"';
} 
    ;  function TEXT(str) {
  if (str === '')
    return '';
  str = str.replace(/]/, '&#93;');
  return '<FONT>' + str + '</FONT>';
} 
    ;  var RELAY_ICON = TEXT('{R}'); 
    ; __append("digraph {\n  graph [\n    rankdir = \"LR\"\n  ];\n  node [\n    fontsize = \"16\"\n    fontname = \"helvetica, open-sans\"\n    shape = \"plaintext\"\n  ];\n  edge [\n  ];\n  ranksep = 2.0\n")
    ;  _.each(typeGraph.nodes, function(node) { 
    ; __append("  \"")
    ; __append( node.name )
    ; __append("\" [\n    id = \"")
    ; __append( node.id )
    ; __append("\"\n    label = <<TABLE ALIGN=\"LEFT\" BORDER=\"0\" CELLBORDER=\"1\" CELLSPACING=\"0\" CELLPADDING=\"5\">\n      <TR>\n")
    ;  var kindLabel = node.kind !== 'OBJECT' ? '<<' + node.kind.toLowerCase() + '>>' : '' 
    ; __append("        <TD CELLPADDING=\"4\" ")
    ; __append( HtmlId('TYPE_TITLE::' + node.name) )
    ; __append("\n          ><FONT POINT-SIZE=\"18\">")
    ; __append( node.name )
    ; __append("</FONT><BR/>")
    ; __append(escapeFn( kindLabel ))
    ; __append("</TD>\n      </TR>\n")
    ;  _.each(node.fields, function(field) { 
    ; __append("      <TR>\n        <TD ")
    ; __append( HtmlId(field.id) )
    ; __append("\n          ALIGN=\"LEFT\" PORT=\"")
    ; __append( field.name )
    ; __append("\">\n          <TABLE CELLPADDING=\"0\" CELLSPACING=\"0\" BORDER=\"0\">\n            <TR>\n              <TD ALIGN=\"LEFT\">")
    ; __append( field.name )
    ; __append("<FONT>  </FONT></TD>\n")
    ;  var parts = stringifyWrappers(field.typeWrappers); 
    ;  var relayIcon = field.relayType ? RELAY_ICON : ''; 
    ; __append("              <TD ALIGN=\"RIGHT\">")
    ; __append( relayIcon )
    ; __append( TEXT(parts[0]) )
    ; __append( field.type.name )
    ; __append( TEXT(parts[1]) )
    ; __append("</TD>\n            </TR>\n          </TABLE>\n        </TD>\n      </TR>\n")
    ;  }); 
    ;  if (!_.isEmpty(node.possibleTypes)) { 
    ; __append("      <TR>\n        <TD>possible types</TD>\n      </TR>\n")
    ;  _.each(node.possibleTypes, function (possibleType) { 
    ; __append("      <TR>\n        <TD ")
    ; __append( HtmlId(possibleType.id) )
    ; __append("\n          ALIGN=\"LEFT\" PORT=\"")
    ; __append( possibleType.type.name )
    ; __append("\">")
    ; __append( possibleType.type.name )
    ; __append("</TD>\n      </TR>\n")
    ;  }); 
    ;  } 
    ;  if (!_.isEmpty(node.derivedTypes)) { 
    ; __append("      <TR>\n        <TD>implementations</TD>\n      </TR>\n")
    ;  _.each(node.derivedTypes, function(derivedType) { 
    ; __append("      <TR>\n        <TD ")
    ; __append( HtmlId(derivedType.id) )
    ; __append("\n          ALIGN=\"LEFT\" PORT=\"")
    ; __append( derivedType.type.name )
    ; __append("\">")
    ; __append( derivedType.type.name )
    ; __append("</TD>\n      </TR>\n")
    ;  }); 
    ;  } 
    ; __append("    </TABLE>>\n  ];\n")
    ;  _(node.fields).each(function(field) { 
    ;  if (!typeGraph.nodes[field.type.id]) return; 
    ; __append("  \"")
    ; __append( node.name )
    ; __append("\":\"")
    ; __append( field.name )
    ; __append("\" -> \"")
    ; __append( field.type.name )
    ; __append("\" [\n    id = \"")
    ; __append( field.id )
    ; __append(" => ")
    ; __append( field.type.id )
    ; __append("\"\n    label = \"")
    ; __append( node.name )
    ; __append(":")
    ; __append( field.name )
    ; __append("\"\n  ]\n")
    ;  }); 
    ;  _(node.possibleTypes).each(function(possibleType) { 
    ; __append("  \"")
    ; __append( node.name )
    ; __append("\":\"")
    ; __append( possibleType.type.name )
    ; __append("\" -> \"")
    ; __append( possibleType.type.name )
    ; __append("\" [\n    id = \"")
    ; __append( possibleType.id )
    ; __append(" => ")
    ; __append( possibleType.type.id )
    ; __append("\"\n    style = \"dashed\"\n  ]\n")
    ;  }); 
    ;  _(node.derivedTypes).each(function(derivedType) { 
    ; __append("  \"")
    ; __append( node.name )
    ; __append("\":\"")
    ; __append( derivedType.type.name )
    ; __append("\" -> \"")
    ; __append( derivedType.type.name )
    ; __append("\" [\n    id = \"")
    ; __append( derivedType.id )
    ; __append(" => ")
    ; __append( derivedType.type.id )
    ; __append("\"\n    style = \"dotted\"\n  ]\n")
    ;  }); 
    ;  }); 
    ; __append("}\n")
  return __output.join("");

}

/***/ }),
/* 216 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 217 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 218 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 219 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 220 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 221 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 222 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 223 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 224 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 225 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 226 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 227 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 228 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 229 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 230 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 231 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 232 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 233 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 234 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 235 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"theme_button-2Agdx","rippleWrapper":"theme_rippleWrapper-3AVBi","squared":"theme_squared-2GH_L","icon":"theme_icon-3aBSX","solid":"theme_solid-1ZxqC","raised":"theme_raised-221ic theme_button-2Agdx theme_squared-2GH_L theme_solid-1ZxqC","flat":"theme_flat-1jWAQ theme_button-2Agdx theme_squared-2GH_L","floating":"theme_floating-3IRMZ theme_button-2Agdx theme_solid-1ZxqC","mini":"theme_mini-2DCN-","toggle":"theme_toggle-hC5Z2 theme_button-2Agdx","primary":"theme_primary-3tTAW","accent":"theme_accent-2wp6F","neutral":"theme_neutral-2CPs4","inverse":"theme_inverse-2SPZr"};

/***/ }),
/* 236 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"field":"theme_field-3Tq32","ripple":"theme_ripple-2NWrZ","text":"theme_text-dXU7C","input":"theme_input-271V1","check":"theme_check-1CXAo","checked":"theme_checked-nSz7s","checkmark-expand":"theme_checkmark-expand-3GU9D","disabled":"theme_disabled-2jVLS"};

/***/ }),
/* 237 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"dropdown":"theme_dropdown-ZzBNK","active":"theme_active-1DQ-E","values":"theme_values-2767w","label":"theme_label-2KjGM","value":"theme_value-6c1D5","up":"theme_up-1OA-G","disabled":"theme_disabled-1skVH","field":"theme_field-d5bru","errored":"theme_errored-3dZUG","templateValue":"theme_templateValue-6dCtT","required":"theme_required-1j4LX","error":"theme_error-fySw3","selected":"theme_selected-3uiEo"};

/***/ }),
/* 238 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"input":"theme_input-lFVgC","withIcon":"theme_withIcon-1nKdf","icon":"theme_icon-3ga1V","inputElement":"theme_inputElement-4bZUj","bar":"theme_bar-3FySS","label":"theme_label-34120","fixed":"theme_fixed-GRQEP","required":"theme_required-2G0aY","hint":"theme_hint-bMyi_","filled":"theme_filled-34NWn","error":"theme_error-2k5Jz","counter":"theme_counter-1oTuT","disabled":"theme_disabled-3ZfJq","errored":"theme_errored-2s74E","hidden":"theme_hidden-2gAMv"};

/***/ }),
/* 239 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rippleWrapper":"theme_rippleWrapper-16N7o","ripple":"theme_ripple-3SV_u","rippleRestarting":"theme_rippleRestarting-2OZWa","rippleActive":"theme_rippleActive-3O2Ue"};

/***/ }),
/* 240 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"snackbar":"theme_snackbar-zDi3X","accept":"theme_accept-2Y0Cy","button":"theme_button-2pCxU","warning":"theme_warning-2li3o","cancel":"theme_cancel-3731C","active":"theme_active-38CsO","label":"theme_label-1JIbY"};

/***/ }),
/* 241 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"tooltip":"theme_tooltip-1v8bI","tooltipActive":"theme_tooltipActive-2xWjx","tooltipTop":"theme_tooltipTop-1PfOK","tooltipLeft":"theme_tooltipLeft-3uj3d","tooltipRight":"theme_tooltipRight-3UQWj","tooltipInner":"theme_tooltipInner-9q2WH"};

/***/ }),
/* 242 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"button-dark-theme_button-gi7mA","raised":"button-dark-theme_raised-fPRBY"};

/***/ }),
/* 243 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"dropdown":"settings-dark-theme_dropdown-pXB2v","templateValue":"settings-dark-theme_templateValue-3PFLP","values":"settings-dark-theme_values-15-zR","field":"settings-dark-theme_field-3i7UA","text":"settings-dark-theme_text-2JhlV","check":"settings-dark-theme_check-13rsP"};

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatError = formatError;

var _invariant = __webpack_require__(10);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Given a GraphQLError, format it according to the rules described by the
 * Response Format, Errors section of the GraphQL Specification.
 */
function formatError(error) {
  (0, _invariant2.default)(error, 'Received null or undefined error.');
  return {
    message: error.message,
    locations: error.locations,
    path: error.path
  };
}
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locatedError = locatedError;

var _GraphQLError = __webpack_require__(37);

/**
 * Given an arbitrary Error, presumably thrown while attempting to execute a
 * GraphQL operation, produce a new GraphQLError aware of the location in the
 * document responsible for the original Error.
 */
function locatedError(originalError, nodes, path) {
  // Note: this uses a brand-check to support GraphQL errors originating from
  // other contexts.
  if (originalError && originalError.path) {
    return originalError;
  }

  var message = originalError ? originalError.message || String(originalError) : 'An unknown error occurred.';
  return new _GraphQLError.GraphQLError(message, originalError && originalError.nodes || nodes, originalError && originalError.source, originalError && originalError.positions, path, originalError);
}
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syntaxError = syntaxError;

var _location = __webpack_require__(106);

var _GraphQLError = __webpack_require__(37);

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

function syntaxError(source, position, description) {
  var location = (0, _location.getLocation)(source, position);
  var error = new _GraphQLError.GraphQLError('Syntax Error ' + source.name + ' (' + location.line + ':' + location.column + ') ' + description + '\n\n' + highlightSourceAtLocation(source, location), undefined, source, [position]);
  return error;
}

/**
 * Render a helpful description of the location of the error in the GraphQL
 * Source document.
 */
function highlightSourceAtLocation(source, location) {
  var line = location.line;
  var prevLineNum = (line - 1).toString();
  var lineNum = line.toString();
  var nextLineNum = (line + 1).toString();
  var padLen = nextLineNum.length;
  var lines = source.body.split(/\r\n|[\n\r]/g);
  return (line >= 2 ? lpad(padLen, prevLineNum) + ': ' + lines[line - 2] + '\n' : '') + lpad(padLen, lineNum) + ': ' + lines[line - 1] + '\n' + Array(2 + padLen + location.column).join(' ') + '^\n' + (line < lines.length ? lpad(padLen, nextLineNum) + ': ' + lines[line] + '\n' : '');
}

function lpad(len, str) {
  return Array(len - str.length + 1).join(' ') + str;
}

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVariableValues = getVariableValues;
exports.getArgumentValues = getArgumentValues;

var _iterall = __webpack_require__(82);

var _error = __webpack_require__(75);

var _invariant = __webpack_require__(10);

var _invariant2 = _interopRequireDefault(_invariant);

var _isNullish = __webpack_require__(27);

var _isNullish2 = _interopRequireDefault(_isNullish);

var _isInvalid = __webpack_require__(38);

var _isInvalid2 = _interopRequireDefault(_isInvalid);

var _keyMap = __webpack_require__(39);

var _keyMap2 = _interopRequireDefault(_keyMap);

var _typeFromAST = __webpack_require__(81);

var _valueFromAST = __webpack_require__(42);

var _isValidJSValue = __webpack_require__(111);

var _isValidLiteralValue = __webpack_require__(112);

var _kinds = __webpack_require__(17);

var Kind = _interopRequireWildcard(_kinds);

var _printer = __webpack_require__(53);

var _definition = __webpack_require__(6);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Prepares an object map of variableValues of the correct type based on the
 * provided variable definitions and arbitrary input. If the input cannot be
 * parsed to match the variable definitions, a GraphQLError will be thrown.
 */
function getVariableValues(schema, varDefNodes, inputs) {
  var coercedValues = Object.create(null);
  for (var i = 0; i < varDefNodes.length; i++) {
    var varDefNode = varDefNodes[i];
    var varName = varDefNode.variable.name.value;
    var varType = (0, _typeFromAST.typeFromAST)(schema, varDefNode.type);
    if (!(0, _definition.isInputType)(varType)) {
      throw new _error.GraphQLError('Variable "$' + varName + '" expected value of type ' + ('"' + (0, _printer.print)(varDefNode.type) + '" which cannot be used as an input type.'), [varDefNode.type]);
    }
    varType = varType;

    var value = inputs[varName];
    if ((0, _isInvalid2.default)(value)) {
      var defaultValue = varDefNode.defaultValue;
      if (defaultValue) {
        coercedValues[varName] = (0, _valueFromAST.valueFromAST)(defaultValue, varType);
      }
      if (varType instanceof _definition.GraphQLNonNull) {
        throw new _error.GraphQLError('Variable "$' + varName + '" of required type ' + ('"' + String(varType) + '" was not provided.'), [varDefNode]);
      }
    } else {
      var errors = (0, _isValidJSValue.isValidJSValue)(value, varType);
      if (errors.length) {
        var message = errors ? '\n' + errors.join('\n') : '';
        throw new _error.GraphQLError('Variable "$' + varName + '" got invalid value ' + (JSON.stringify(value) + '.' + message), [varDefNode]);
      }

      var coercedValue = coerceValue(varType, value);
      (0, _invariant2.default)(!(0, _isInvalid2.default)(coercedValue), 'Should have reported error.');
      coercedValues[varName] = coercedValue;
    }
  }
  return coercedValues;
}

/**
 * Prepares an object map of argument values given a list of argument
 * definitions and list of argument AST nodes.
 */

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

function getArgumentValues(def, node, variableValues) {
  var argDefs = def.args;
  var argNodes = node.arguments;
  if (!argDefs || !argNodes) {
    return {};
  }
  var coercedValues = Object.create(null);
  var argNodeMap = (0, _keyMap2.default)(argNodes, function (arg) {
    return arg.name.value;
  });
  for (var i = 0; i < argDefs.length; i++) {
    var argDef = argDefs[i];
    var name = argDef.name;
    var argType = argDef.type;
    var argumentNode = argNodeMap[name];
    var defaultValue = argDef.defaultValue;
    if (!argumentNode) {
      if (!(0, _isInvalid2.default)(defaultValue)) {
        coercedValues[name] = defaultValue;
      } else if (argType instanceof _definition.GraphQLNonNull) {
        throw new _error.GraphQLError('Argument "' + name + '" of required type ' + ('"' + String(argType) + '" was not provided.'), [node]);
      }
    } else if (argumentNode.value.kind === Kind.VARIABLE) {
      var variableName = argumentNode.value.name.value;
      if (variableValues && !(0, _isInvalid2.default)(variableValues[variableName])) {
        // Note: this does not check that this variable value is correct.
        // This assumes that this query has been validated and the variable
        // usage here is of the correct type.
        coercedValues[name] = variableValues[variableName];
      } else if (!(0, _isInvalid2.default)(defaultValue)) {
        coercedValues[name] = defaultValue;
      } else if (argType instanceof _definition.GraphQLNonNull) {
        throw new _error.GraphQLError('Argument "' + name + '" of required type "' + String(argType) + '" was ' + ('provided the variable "$' + variableName + '" which was not provided ') + 'a runtime value.', [argumentNode.value]);
      }
    } else {
      var valueNode = argumentNode.value;
      var coercedValue = (0, _valueFromAST.valueFromAST)(valueNode, argType, variableValues);
      if ((0, _isInvalid2.default)(coercedValue)) {
        var errors = (0, _isValidLiteralValue.isValidLiteralValue)(argType, valueNode);
        var message = errors ? '\n' + errors.join('\n') : '';
        throw new _error.GraphQLError('Argument "' + name + '" got invalid value ' + (0, _printer.print)(valueNode) + '.' + message, [argumentNode.value]);
      }
      coercedValues[name] = coercedValue;
    }
  }
  return coercedValues;
}

/**
 * Given a type and any value, return a runtime value coerced to match the type.
 */
function coerceValue(type, value) {
  // Ensure flow knows that we treat function params as const.
  var _value = value;

  if ((0, _isInvalid2.default)(_value)) {
    return; // Intentionally return no value.
  }

  if (type instanceof _definition.GraphQLNonNull) {
    if (_value === null) {
      return; // Intentionally return no value.
    }
    return coerceValue(type.ofType, _value);
  }

  if (_value === null) {
    // Intentionally return the value null.
    return null;
  }

  if (type instanceof _definition.GraphQLList) {
    var itemType = type.ofType;
    if ((0, _iterall.isCollection)(_value)) {
      var coercedValues = [];
      var valueIter = (0, _iterall.createIterator)(_value);
      if (!valueIter) {
        return; // Intentionally return no value.
      }
      var step = void 0;
      while (!(step = valueIter.next()).done) {
        var itemValue = coerceValue(itemType, step.value);
        if ((0, _isInvalid2.default)(itemValue)) {
          return; // Intentionally return no value.
        }
        coercedValues.push(itemValue);
      }
      return coercedValues;
    }
    var coercedValue = coerceValue(itemType, _value);
    if ((0, _isInvalid2.default)(coercedValue)) {
      return; // Intentionally return no value.
    }
    return [coerceValue(itemType, _value)];
  }

  if (type instanceof _definition.GraphQLInputObjectType) {
    if (typeof _value !== 'object') {
      return; // Intentionally return no value.
    }
    var coercedObj = Object.create(null);
    var fields = type.getFields();
    var fieldNames = Object.keys(fields);
    for (var i = 0; i < fieldNames.length; i++) {
      var fieldName = fieldNames[i];
      var field = fields[fieldName];
      if ((0, _isInvalid2.default)(_value[fieldName])) {
        if (!(0, _isInvalid2.default)(field.defaultValue)) {
          coercedObj[fieldName] = field.defaultValue;
        } else if (field.type instanceof _definition.GraphQLNonNull) {
          return; // Intentionally return no value.
        }
        continue;
      }
      var fieldValue = coerceValue(field.type, _value[fieldName]);
      if ((0, _isInvalid2.default)(fieldValue)) {
        return; // Intentionally return no value.
      }
      coercedObj[fieldName] = fieldValue;
    }
    return coercedObj;
  }

  (0, _invariant2.default)(type instanceof _definition.GraphQLScalarType || type instanceof _definition.GraphQLEnumType, 'Must be input type');

  var parsed = type.parseValue(_value);
  if ((0, _isNullish2.default)(parsed)) {
    // null or invalid values represent a failure to parse correctly,
    // in which case no value is returned.
    return;
  }

  return parsed;
}

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * A representation of source input to GraphQL. The name is optional,
 * but is mostly useful for clients who store GraphQL documents in
 * source files; for example, if the GraphQL input is in a file Foo.graphql,
 * it might be useful for name to be "Foo.graphql".
 */
var Source = exports.Source = function Source(body, name) {
  _classCallCheck(this, Source);

  this.body = body;
  this.name = name || 'GraphQL';
};

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildClientSchema = buildClientSchema;

var _invariant = __webpack_require__(10);

var _invariant2 = _interopRequireDefault(_invariant);

var _keyMap = __webpack_require__(39);

var _keyMap2 = _interopRequireDefault(_keyMap);

var _keyValMap = __webpack_require__(77);

var _keyValMap2 = _interopRequireDefault(_keyValMap);

var _valueFromAST = __webpack_require__(42);

var _parser = __webpack_require__(107);

var _schema = __webpack_require__(41);

var _definition = __webpack_require__(6);

var _introspection = __webpack_require__(40);

var _scalars = __webpack_require__(28);

var _directives = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Build a GraphQLSchema for use by client tools.
 *
 * Given the result of a client running the introspection query, creates and
 * returns a GraphQLSchema instance which can be then used with all graphql-js
 * tools, but cannot be used to execute a query, as introspection does not
 * represent the "resolver", "parse" or "serialize" functions or any other
 * server-internal mechanisms.
 */
function buildClientSchema(introspection) {

  // Get the schema from the introspection result.
  var schemaIntrospection = introspection.__schema;

  // Converts the list of types into a keyMap based on the type names.
  var typeIntrospectionMap = (0, _keyMap2.default)(schemaIntrospection.types, function (type) {
    return type.name;
  });

  // A cache to use to store the actual GraphQLType definition objects by name.
  // Initialize to the GraphQL built in scalars. All functions below are inline
  // so that this type def cache is within the scope of the closure.
  var typeDefCache = {
    String: _scalars.GraphQLString,
    Int: _scalars.GraphQLInt,
    Float: _scalars.GraphQLFloat,
    Boolean: _scalars.GraphQLBoolean,
    ID: _scalars.GraphQLID,
    __Schema: _introspection.__Schema,
    __Directive: _introspection.__Directive,
    __DirectiveLocation: _introspection.__DirectiveLocation,
    __Type: _introspection.__Type,
    __Field: _introspection.__Field,
    __InputValue: _introspection.__InputValue,
    __EnumValue: _introspection.__EnumValue,
    __TypeKind: _introspection.__TypeKind
  };

  // Given a type reference in introspection, return the GraphQLType instance.
  // preferring cached instances before building new instances.
  function getType(typeRef) {
    if (typeRef.kind === _introspection.TypeKind.LIST) {
      var itemRef = typeRef.ofType;
      if (!itemRef) {
        throw new Error('Decorated type deeper than introspection query.');
      }
      return new _definition.GraphQLList(getType(itemRef));
    }
    if (typeRef.kind === _introspection.TypeKind.NON_NULL) {
      var nullableRef = typeRef.ofType;
      if (!nullableRef) {
        throw new Error('Decorated type deeper than introspection query.');
      }
      var nullableType = getType(nullableRef);
      (0, _invariant2.default)(!(nullableType instanceof _definition.GraphQLNonNull), 'No nesting nonnull.');
      return new _definition.GraphQLNonNull(nullableType);
    }
    return getNamedType(typeRef.name);
  }

  function getNamedType(typeName) {
    if (typeDefCache[typeName]) {
      return typeDefCache[typeName];
    }
    var typeIntrospection = typeIntrospectionMap[typeName];
    if (!typeIntrospection) {
      throw new Error('Invalid or incomplete schema, unknown type: ' + typeName + '. Ensure ' + 'that a full introspection query is used in order to build a ' + 'client schema.');
    }
    var typeDef = buildType(typeIntrospection);
    typeDefCache[typeName] = typeDef;
    return typeDef;
  }

  function getInputType(typeRef) {
    var type = getType(typeRef);
    (0, _invariant2.default)((0, _definition.isInputType)(type), 'Introspection must provide input type for arguments.');
    return type;
  }

  function getOutputType(typeRef) {
    var type = getType(typeRef);
    (0, _invariant2.default)((0, _definition.isOutputType)(type), 'Introspection must provide output type for fields.');
    return type;
  }

  function getObjectType(typeRef) {
    var type = getType(typeRef);
    (0, _invariant2.default)(type instanceof _definition.GraphQLObjectType, 'Introspection must provide object type for possibleTypes.');
    return type;
  }

  function getInterfaceType(typeRef) {
    var type = getType(typeRef);
    (0, _invariant2.default)(type instanceof _definition.GraphQLInterfaceType, 'Introspection must provide interface type for interfaces.');
    return type;
  }

  // Given a type's introspection result, construct the correct
  // GraphQLType instance.
  function buildType(type) {
    switch (type.kind) {
      case _introspection.TypeKind.SCALAR:
        return buildScalarDef(type);
      case _introspection.TypeKind.OBJECT:
        return buildObjectDef(type);
      case _introspection.TypeKind.INTERFACE:
        return buildInterfaceDef(type);
      case _introspection.TypeKind.UNION:
        return buildUnionDef(type);
      case _introspection.TypeKind.ENUM:
        return buildEnumDef(type);
      case _introspection.TypeKind.INPUT_OBJECT:
        return buildInputObjectDef(type);
      default:
        throw new Error('Invalid or incomplete schema, unknown kind: ' + type.kind + '. Ensure ' + 'that a full introspection query is used in order to build a ' + 'client schema.');
    }
  }

  function buildScalarDef(scalarIntrospection) {
    return new _definition.GraphQLScalarType({
      name: scalarIntrospection.name,
      description: scalarIntrospection.description,
      serialize: function serialize(id) {
        return id;
      },
      // Note: validation calls the parse functions to determine if a
      // literal value is correct. Returning null would cause use of custom
      // scalars to always fail validation. Returning false causes them to
      // always pass validation.
      parseValue: function parseValue() {
        return false;
      },
      parseLiteral: function parseLiteral() {
        return false;
      }
    });
  }

  function buildObjectDef(objectIntrospection) {
    return new _definition.GraphQLObjectType({
      name: objectIntrospection.name,
      description: objectIntrospection.description,
      interfaces: objectIntrospection.interfaces.map(getInterfaceType),
      fields: function fields() {
        return buildFieldDefMap(objectIntrospection);
      }
    });
  }

  function buildInterfaceDef(interfaceIntrospection) {
    return new _definition.GraphQLInterfaceType({
      name: interfaceIntrospection.name,
      description: interfaceIntrospection.description,
      fields: function fields() {
        return buildFieldDefMap(interfaceIntrospection);
      },
      resolveType: cannotExecuteClientSchema
    });
  }

  function buildUnionDef(unionIntrospection) {
    return new _definition.GraphQLUnionType({
      name: unionIntrospection.name,
      description: unionIntrospection.description,
      types: unionIntrospection.possibleTypes.map(getObjectType),
      resolveType: cannotExecuteClientSchema
    });
  }

  function buildEnumDef(enumIntrospection) {
    return new _definition.GraphQLEnumType({
      name: enumIntrospection.name,
      description: enumIntrospection.description,
      values: (0, _keyValMap2.default)(enumIntrospection.enumValues, function (valueIntrospection) {
        return valueIntrospection.name;
      }, function (valueIntrospection) {
        return {
          description: valueIntrospection.description,
          deprecationReason: valueIntrospection.deprecationReason
        };
      })
    });
  }

  function buildInputObjectDef(inputObjectIntrospection) {
    return new _definition.GraphQLInputObjectType({
      name: inputObjectIntrospection.name,
      description: inputObjectIntrospection.description,
      fields: function fields() {
        return buildInputValueDefMap(inputObjectIntrospection.inputFields);
      }
    });
  }

  function buildFieldDefMap(typeIntrospection) {
    return (0, _keyValMap2.default)(typeIntrospection.fields, function (fieldIntrospection) {
      return fieldIntrospection.name;
    }, function (fieldIntrospection) {
      return {
        description: fieldIntrospection.description,
        deprecationReason: fieldIntrospection.deprecationReason,
        type: getOutputType(fieldIntrospection.type),
        args: buildInputValueDefMap(fieldIntrospection.args)
      };
    });
  }

  function buildInputValueDefMap(inputValueIntrospections) {
    return (0, _keyValMap2.default)(inputValueIntrospections, function (inputValue) {
      return inputValue.name;
    }, buildInputValue);
  }

  function buildInputValue(inputValueIntrospection) {
    var type = getInputType(inputValueIntrospection.type);
    var defaultValue = inputValueIntrospection.defaultValue ? (0, _valueFromAST.valueFromAST)((0, _parser.parseValue)(inputValueIntrospection.defaultValue), type) : undefined;
    return {
      name: inputValueIntrospection.name,
      description: inputValueIntrospection.description,
      type: type,
      defaultValue: defaultValue
    };
  }

  function buildDirective(directiveIntrospection) {
    // Support deprecated `on****` fields for building `locations`, as this
    // is used by GraphiQL which may need to support outdated servers.
    var locations = directiveIntrospection.locations ? directiveIntrospection.locations.slice() : [].concat(!directiveIntrospection.onField ? [] : [_directives.DirectiveLocation.FIELD], !directiveIntrospection.onOperation ? [] : [_directives.DirectiveLocation.QUERY, _directives.DirectiveLocation.MUTATION, _directives.DirectiveLocation.SUBSCRIPTION], !directiveIntrospection.onFragment ? [] : [_directives.DirectiveLocation.FRAGMENT_DEFINITION, _directives.DirectiveLocation.FRAGMENT_SPREAD, _directives.DirectiveLocation.INLINE_FRAGMENT]);
    return new _directives.GraphQLDirective({
      name: directiveIntrospection.name,
      description: directiveIntrospection.description,
      locations: locations,
      args: buildInputValueDefMap(directiveIntrospection.args)
    });
  }

  // Iterate through all types, getting the type definition for each, ensuring
  // that any type not directly referenced by a field will get created.
  var types = schemaIntrospection.types.map(function (typeIntrospection) {
    return getNamedType(typeIntrospection.name);
  });

  // Get the root Query, Mutation, and Subscription types.
  var queryType = getObjectType(schemaIntrospection.queryType);

  var mutationType = schemaIntrospection.mutationType ? getObjectType(schemaIntrospection.mutationType) : null;

  var subscriptionType = schemaIntrospection.subscriptionType ? getObjectType(schemaIntrospection.subscriptionType) : null;

  // Get the directives supported by Introspection, assuming empty-set if
  // directives were not queried for.
  var directives = schemaIntrospection.directives ? schemaIntrospection.directives.map(buildDirective) : [];

  // Then produce and return a Schema with these types.
  return new _schema.GraphQLSchema({
    query: queryType,
    mutation: mutationType,
    subscription: subscriptionType,
    types: types,
    directives: directives
  });
}
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

function cannotExecuteClientSchema() {
  throw new Error('Client Schema cannot use Interface or Union types for execution.');
}

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concatAST = concatAST;


/**
 * Provided a collection of ASTs, presumably each from different files,
 * concatenate the ASTs together into batched AST, useful for validating many
 * GraphQL source files which together represent one conceptual application.
 */
function concatAST(asts) {
  var batchDefinitions = [];
  for (var i = 0; i < asts.length; i++) {
    var definitions = asts[i].definitions;
    for (var j = 0; j < definitions.length; j++) {
      batchDefinitions.push(definitions[j]);
    }
  }
  return {
    kind: 'Document',
    definitions: batchDefinitions
  };
}
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extendSchema = extendSchema;

var _invariant = __webpack_require__(10);

var _invariant2 = _interopRequireDefault(_invariant);

var _keyMap = __webpack_require__(39);

var _keyMap2 = _interopRequireDefault(_keyMap);

var _keyValMap = __webpack_require__(77);

var _keyValMap2 = _interopRequireDefault(_keyValMap);

var _buildASTSchema = __webpack_require__(109);

var _valueFromAST = __webpack_require__(42);

var _GraphQLError = __webpack_require__(37);

var _schema = __webpack_require__(41);

var _definition = __webpack_require__(6);

var _directives = __webpack_require__(32);

var _introspection = __webpack_require__(40);

var _scalars = __webpack_require__(28);

var _kinds = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Produces a new schema given an existing schema and a document which may
 * contain GraphQL type extensions and definitions. The original schema will
 * remain unaltered.
 *
 * Because a schema represents a graph of references, a schema cannot be
 * extended without effectively making an entire copy. We do not know until it's
 * too late if subgraphs remain unchanged.
 *
 * This algorithm copies the provided schema, applying extensions while
 * producing the copy. The original schema remains unaltered.
 */

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

function extendSchema(schema, documentAST) {
  (0, _invariant2.default)(schema instanceof _schema.GraphQLSchema, 'Must provide valid GraphQLSchema');

  (0, _invariant2.default)(documentAST && documentAST.kind === _kinds.DOCUMENT, 'Must provide valid Document AST');

  // Collect the type definitions and extensions found in the document.
  var typeDefinitionMap = {};
  var typeExtensionsMap = {};

  // New directives and types are separate because a directives and types can
  // have the same name. For example, a type named "skip".
  var directiveDefinitions = [];

  for (var i = 0; i < documentAST.definitions.length; i++) {
    var def = documentAST.definitions[i];
    switch (def.kind) {
      case _kinds.OBJECT_TYPE_DEFINITION:
      case _kinds.INTERFACE_TYPE_DEFINITION:
      case _kinds.ENUM_TYPE_DEFINITION:
      case _kinds.UNION_TYPE_DEFINITION:
      case _kinds.SCALAR_TYPE_DEFINITION:
      case _kinds.INPUT_OBJECT_TYPE_DEFINITION:
        // Sanity check that none of the defined types conflict with the
        // schema's existing types.
        var typeName = def.name.value;
        if (schema.getType(typeName)) {
          throw new _GraphQLError.GraphQLError('Type "' + typeName + '" already exists in the schema. It cannot also ' + 'be defined in this type definition.', [def]);
        }
        typeDefinitionMap[typeName] = def;
        break;
      case _kinds.TYPE_EXTENSION_DEFINITION:
        // Sanity check that this type extension exists within the
        // schema's existing types.
        var extendedTypeName = def.definition.name.value;
        var existingType = schema.getType(extendedTypeName);
        if (!existingType) {
          throw new _GraphQLError.GraphQLError('Cannot extend type "' + extendedTypeName + '" because it does not ' + 'exist in the existing schema.', [def.definition]);
        }
        if (!(existingType instanceof _definition.GraphQLObjectType)) {
          throw new _GraphQLError.GraphQLError('Cannot extend non-object type "' + extendedTypeName + '".', [def.definition]);
        }
        var extensions = typeExtensionsMap[extendedTypeName];
        if (extensions) {
          extensions.push(def);
        } else {
          extensions = [def];
        }
        typeExtensionsMap[extendedTypeName] = extensions;
        break;
      case _kinds.DIRECTIVE_DEFINITION:
        var directiveName = def.name.value;
        var existingDirective = schema.getDirective(directiveName);
        if (existingDirective) {
          throw new _GraphQLError.GraphQLError('Directive "' + directiveName + '" already exists in the schema. It ' + 'cannot be redefined.', [def]);
        }
        directiveDefinitions.push(def);
        break;
    }
  }

  // If this document contains no new types, extensions, or directives then
  // return the same unmodified GraphQLSchema instance.
  if (Object.keys(typeExtensionsMap).length === 0 && Object.keys(typeDefinitionMap).length === 0 && directiveDefinitions.length === 0) {
    return schema;
  }

  // A cache to use to store the actual GraphQLType definition objects by name.
  // Initialize to the GraphQL built in scalars and introspection types. All
  // functions below are inline so that this type def cache is within the scope
  // of the closure.
  var typeDefCache = {
    String: _scalars.GraphQLString,
    Int: _scalars.GraphQLInt,
    Float: _scalars.GraphQLFloat,
    Boolean: _scalars.GraphQLBoolean,
    ID: _scalars.GraphQLID,
    __Schema: _introspection.__Schema,
    __Directive: _introspection.__Directive,
    __DirectiveLocation: _introspection.__DirectiveLocation,
    __Type: _introspection.__Type,
    __Field: _introspection.__Field,
    __InputValue: _introspection.__InputValue,
    __EnumValue: _introspection.__EnumValue,
    __TypeKind: _introspection.__TypeKind
  };

  // Get the root Query, Mutation, and Subscription object types.
  var queryType = getTypeFromDef(schema.getQueryType());

  var existingMutationType = schema.getMutationType();
  var mutationType = existingMutationType ? getTypeFromDef(existingMutationType) : null;

  var existingSubscriptionType = schema.getSubscriptionType();
  var subscriptionType = existingSubscriptionType ? getTypeFromDef(existingSubscriptionType) : null;

  // Iterate through all types, getting the type definition for each, ensuring
  // that any type not directly referenced by a field will get created.
  var typeMap = schema.getTypeMap();
  var types = Object.keys(typeMap).map(function (typeName) {
    return getTypeFromDef(typeMap[typeName]);
  });

  // Do the same with new types, appending to the list of defined types.
  Object.keys(typeDefinitionMap).forEach(function (typeName) {
    types.push(getTypeFromAST(typeDefinitionMap[typeName]));
  });

  // Then produce and return a Schema with these types.
  return new _schema.GraphQLSchema({
    query: queryType,
    mutation: mutationType,
    subscription: subscriptionType,
    types: types,
    directives: getMergedDirectives()
  });

  // Below are functions used for producing this schema that have closed over
  // this scope and have access to the schema, cache, and newly defined types.

  function getMergedDirectives() {
    var existingDirectives = schema.getDirectives();
    (0, _invariant2.default)(existingDirectives, 'schema must have default directives');

    var newDirectives = directiveDefinitions.map(function (directiveNode) {
      return getDirective(directiveNode);
    });
    return existingDirectives.concat(newDirectives);
  }

  function getTypeFromDef(typeDef) {
    var type = _getNamedType(typeDef.name);
    (0, _invariant2.default)(type, 'Missing type from schema');
    return type;
  }

  function getTypeFromAST(node) {
    var type = _getNamedType(node.name.value);
    if (!type) {
      throw new _GraphQLError.GraphQLError('Unknown type: "' + node.name.value + '". Ensure that this type exists ' + 'either in the original schema, or is added in a type definition.', [node]);
    }
    return type;
  }

  function getObjectTypeFromAST(node) {
    var type = getTypeFromAST(node);
    (0, _invariant2.default)(type instanceof _definition.GraphQLObjectType, 'Must be Object type.');
    return type;
  }

  function getInterfaceTypeFromAST(node) {
    var type = getTypeFromAST(node);
    (0, _invariant2.default)(type instanceof _definition.GraphQLInterfaceType, 'Must be Interface type.');
    return type;
  }

  function getInputTypeFromAST(node) {
    var type = getTypeFromAST(node);
    (0, _invariant2.default)((0, _definition.isInputType)(type), 'Must be Input type.');
    return type;
  }

  function getOutputTypeFromAST(node) {
    var type = getTypeFromAST(node);
    (0, _invariant2.default)((0, _definition.isOutputType)(type), 'Must be Output type.');
    return type;
  }

  // Given a name, returns a type from either the existing schema or an
  // added type.
  function _getNamedType(typeName) {
    var cachedTypeDef = typeDefCache[typeName];
    if (cachedTypeDef) {
      return cachedTypeDef;
    }

    var existingType = schema.getType(typeName);
    if (existingType) {
      var typeDef = extendType(existingType);
      typeDefCache[typeName] = typeDef;
      return typeDef;
    }

    var typeNode = typeDefinitionMap[typeName];
    if (typeNode) {
      var _typeDef = buildType(typeNode);
      typeDefCache[typeName] = _typeDef;
      return _typeDef;
    }
  }

  // Given a type's introspection result, construct the correct
  // GraphQLType instance.
  function extendType(type) {
    if (type instanceof _definition.GraphQLObjectType) {
      return extendObjectType(type);
    }
    if (type instanceof _definition.GraphQLInterfaceType) {
      return extendInterfaceType(type);
    }
    if (type instanceof _definition.GraphQLUnionType) {
      return extendUnionType(type);
    }
    return type;
  }

  function extendObjectType(type) {
    return new _definition.GraphQLObjectType({
      name: type.name,
      description: type.description,
      interfaces: function interfaces() {
        return extendImplementedInterfaces(type);
      },
      fields: function fields() {
        return extendFieldMap(type);
      },
      isTypeOf: type.isTypeOf
    });
  }

  function extendInterfaceType(type) {
    return new _definition.GraphQLInterfaceType({
      name: type.name,
      description: type.description,
      fields: function fields() {
        return extendFieldMap(type);
      },
      resolveType: type.resolveType
    });
  }

  function extendUnionType(type) {
    return new _definition.GraphQLUnionType({
      name: type.name,
      description: type.description,
      types: type.getTypes().map(getTypeFromDef),
      resolveType: type.resolveType
    });
  }

  function extendImplementedInterfaces(type) {
    var interfaces = type.getInterfaces().map(getTypeFromDef);

    // If there are any extensions to the interfaces, apply those here.
    var extensions = typeExtensionsMap[type.name];
    if (extensions) {
      extensions.forEach(function (extension) {
        extension.definition.interfaces.forEach(function (namedType) {
          var interfaceName = namedType.name.value;
          if (interfaces.some(function (def) {
            return def.name === interfaceName;
          })) {
            throw new _GraphQLError.GraphQLError('Type "' + type.name + '" already implements "' + interfaceName + '". ' + 'It cannot also be implemented in this type extension.', [namedType]);
          }
          interfaces.push(getInterfaceTypeFromAST(namedType));
        });
      });
    }

    return interfaces;
  }

  function extendFieldMap(type) {
    var newFieldMap = {};
    var oldFieldMap = type.getFields();
    Object.keys(oldFieldMap).forEach(function (fieldName) {
      var field = oldFieldMap[fieldName];
      newFieldMap[fieldName] = {
        description: field.description,
        deprecationReason: field.deprecationReason,
        type: extendFieldType(field.type),
        args: (0, _keyMap2.default)(field.args, function (arg) {
          return arg.name;
        }),
        resolve: field.resolve
      };
    });

    // If there are any extensions to the fields, apply those here.
    var extensions = typeExtensionsMap[type.name];
    if (extensions) {
      extensions.forEach(function (extension) {
        extension.definition.fields.forEach(function (field) {
          var fieldName = field.name.value;
          if (oldFieldMap[fieldName]) {
            throw new _GraphQLError.GraphQLError('Field "' + type.name + '.' + fieldName + '" already exists in the ' + 'schema. It cannot also be defined in this type extension.', [field]);
          }
          newFieldMap[fieldName] = {
            description: (0, _buildASTSchema.getDescription)(field),
            type: buildOutputFieldType(field.type),
            args: buildInputValues(field.arguments)
          };
        });
      });
    }

    return newFieldMap;
  }

  function extendFieldType(typeDef) {
    if (typeDef instanceof _definition.GraphQLList) {
      return new _definition.GraphQLList(extendFieldType(typeDef.ofType));
    }
    if (typeDef instanceof _definition.GraphQLNonNull) {
      return new _definition.GraphQLNonNull(extendFieldType(typeDef.ofType));
    }
    return getTypeFromDef(typeDef);
  }

  function buildType(typeNode) {
    switch (typeNode.kind) {
      case _kinds.OBJECT_TYPE_DEFINITION:
        return buildObjectType(typeNode);
      case _kinds.INTERFACE_TYPE_DEFINITION:
        return buildInterfaceType(typeNode);
      case _kinds.UNION_TYPE_DEFINITION:
        return buildUnionType(typeNode);
      case _kinds.SCALAR_TYPE_DEFINITION:
        return buildScalarType(typeNode);
      case _kinds.ENUM_TYPE_DEFINITION:
        return buildEnumType(typeNode);
      case _kinds.INPUT_OBJECT_TYPE_DEFINITION:
        return buildInputObjectType(typeNode);
    }
    throw new TypeError('Unknown type kind ' + typeNode.kind);
  }

  function buildObjectType(typeNode) {
    return new _definition.GraphQLObjectType({
      name: typeNode.name.value,
      description: (0, _buildASTSchema.getDescription)(typeNode),
      interfaces: function interfaces() {
        return buildImplementedInterfaces(typeNode);
      },
      fields: function fields() {
        return buildFieldMap(typeNode);
      }
    });
  }

  function buildInterfaceType(typeNode) {
    return new _definition.GraphQLInterfaceType({
      name: typeNode.name.value,
      description: (0, _buildASTSchema.getDescription)(typeNode),
      fields: function fields() {
        return buildFieldMap(typeNode);
      },
      resolveType: cannotExecuteExtendedSchema
    });
  }

  function buildUnionType(typeNode) {
    return new _definition.GraphQLUnionType({
      name: typeNode.name.value,
      description: (0, _buildASTSchema.getDescription)(typeNode),
      types: typeNode.types.map(getObjectTypeFromAST),
      resolveType: cannotExecuteExtendedSchema
    });
  }

  function buildScalarType(typeNode) {
    return new _definition.GraphQLScalarType({
      name: typeNode.name.value,
      description: (0, _buildASTSchema.getDescription)(typeNode),
      serialize: function serialize(id) {
        return id;
      },
      // Note: validation calls the parse functions to determine if a
      // literal value is correct. Returning null would cause use of custom
      // scalars to always fail validation. Returning false causes them to
      // always pass validation.
      parseValue: function parseValue() {
        return false;
      },
      parseLiteral: function parseLiteral() {
        return false;
      }
    });
  }

  function buildEnumType(typeNode) {
    return new _definition.GraphQLEnumType({
      name: typeNode.name.value,
      description: (0, _buildASTSchema.getDescription)(typeNode),
      values: (0, _keyValMap2.default)(typeNode.values, function (v) {
        return v.name.value;
      }, function () {
        return {};
      })
    });
  }

  function buildInputObjectType(typeNode) {
    return new _definition.GraphQLInputObjectType({
      name: typeNode.name.value,
      description: (0, _buildASTSchema.getDescription)(typeNode),
      fields: function fields() {
        return buildInputValues(typeNode.fields);
      }
    });
  }

  function getDirective(directiveNode) {
    return new _directives.GraphQLDirective({
      name: directiveNode.name.value,
      locations: directiveNode.locations.map(function (node) {
        return node.value;
      }),
      args: directiveNode.arguments && buildInputValues(directiveNode.arguments)
    });
  }

  function buildImplementedInterfaces(typeNode) {
    return typeNode.interfaces && typeNode.interfaces.map(getInterfaceTypeFromAST);
  }

  function buildFieldMap(typeNode) {
    return (0, _keyValMap2.default)(typeNode.fields, function (field) {
      return field.name.value;
    }, function (field) {
      return {
        type: buildOutputFieldType(field.type),
        description: (0, _buildASTSchema.getDescription)(field),
        args: buildInputValues(field.arguments)
      };
    });
  }

  function buildInputValues(values) {
    return (0, _keyValMap2.default)(values, function (value) {
      return value.name.value;
    }, function (value) {
      var type = buildInputFieldType(value.type);
      return {
        type: type,
        description: (0, _buildASTSchema.getDescription)(value),
        defaultValue: (0, _valueFromAST.valueFromAST)(value.defaultValue, type)
      };
    });
  }

  function buildInputFieldType(typeNode) {
    if (typeNode.kind === _kinds.LIST_TYPE) {
      return new _definition.GraphQLList(buildInputFieldType(typeNode.type));
    }
    if (typeNode.kind === _kinds.NON_NULL_TYPE) {
      var nullableType = buildInputFieldType(typeNode.type);
      (0, _invariant2.default)(!(nullableType instanceof _definition.GraphQLNonNull), 'Must be nullable');
      return new _definition.GraphQLNonNull(nullableType);
    }
    return getInputTypeFromAST(typeNode);
  }

  function buildOutputFieldType(typeNode) {
    if (typeNode.kind === _kinds.LIST_TYPE) {
      return new _definition.GraphQLList(buildOutputFieldType(typeNode.type));
    }
    if (typeNode.kind === _kinds.NON_NULL_TYPE) {
      var nullableType = buildOutputFieldType(typeNode.type);
      (0, _invariant2.default)(!(nullableType instanceof _definition.GraphQLNonNull), 'Must be nullable');
      return new _definition.GraphQLNonNull(nullableType);
    }
    return getOutputTypeFromAST(typeNode);
  }
}

function cannotExecuteExtendedSchema() {
  throw new Error('Extended Schema cannot use Interface or Union types for execution.');
}

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreakingChangeType = undefined;
exports.findBreakingChanges = findBreakingChanges;
exports.findRemovedTypes = findRemovedTypes;
exports.findTypesThatChangedKind = findTypesThatChangedKind;
exports.findFieldsThatChangedType = findFieldsThatChangedType;
exports.findTypesRemovedFromUnions = findTypesRemovedFromUnions;
exports.findValuesRemovedFromEnums = findValuesRemovedFromEnums;

var _definition = __webpack_require__(6);

var _schema = __webpack_require__(41);

/**
 *  Copyright (c) 2016, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

var BreakingChangeType = exports.BreakingChangeType = {
  FIELD_CHANGED_KIND: 'FIELD_CHANGED_KIND',
  FIELD_REMOVED: 'FIELD_REMOVED',
  TYPE_CHANGED_KIND: 'TYPE_CHANGED_KIND',
  TYPE_REMOVED: 'TYPE_REMOVED',
  TYPE_REMOVED_FROM_UNION: 'TYPE_REMOVED_FROM_UNION',
  VALUE_REMOVED_FROM_ENUM: 'VALUE_REMOVED_FROM_ENUM'
};

/**
 * Given two schemas, returns an Array containing descriptions of all the types
 * of breaking changes covered by the other functions down below.
 */
function findBreakingChanges(oldSchema, newSchema) {
  return [].concat(findRemovedTypes(oldSchema, newSchema), findTypesThatChangedKind(oldSchema, newSchema), findFieldsThatChangedType(oldSchema, newSchema), findTypesRemovedFromUnions(oldSchema, newSchema), findValuesRemovedFromEnums(oldSchema, newSchema));
}

/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to removing an entire type.
 */
function findRemovedTypes(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var breakingChanges = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    if (!newTypeMap[typeName]) {
      breakingChanges.push({
        type: BreakingChangeType.TYPE_REMOVED,
        description: typeName + ' was removed.'
      });
    }
  });
  return breakingChanges;
}

/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to changing the type of a type.
 */
function findTypesThatChangedKind(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var breakingChanges = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    if (!newTypeMap[typeName]) {
      return;
    }
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!(oldType instanceof newType.constructor)) {
      breakingChanges.push({
        type: BreakingChangeType.TYPE_CHANGED_KIND,
        description: typeName + ' changed from ' + (typeKindName(oldType) + ' to ' + typeKindName(newType) + '.')
      });
    }
  });
  return breakingChanges;
}

function typeKindName(type) {
  if (type instanceof _definition.GraphQLScalarType) {
    return 'a Scalar type';
  }
  if (type instanceof _definition.GraphQLObjectType) {
    return 'an Object type';
  }
  if (type instanceof _definition.GraphQLInterfaceType) {
    return 'an Interface type';
  }
  if (type instanceof _definition.GraphQLUnionType) {
    return 'a Union type';
  }
  if (type instanceof _definition.GraphQLEnumType) {
    return 'an Enum type';
  }
  if (type instanceof _definition.GraphQLInputObjectType) {
    return 'an Input type';
  }
  throw new TypeError('Unknown type ' + type.constructor.name);
}

/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to the fields on a type. This includes if
 * a field has been removed from a type or if a field has changed type.
 */
function findFieldsThatChangedType(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var breakingFieldChanges = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!(oldType instanceof _definition.GraphQLObjectType || oldType instanceof _definition.GraphQLInterfaceType || oldType instanceof _definition.GraphQLInputObjectType) || !(newType instanceof oldType.constructor)) {
      return;
    }

    var oldTypeFieldsDef = oldType.getFields();
    var newTypeFieldsDef = newType.getFields();
    Object.keys(oldTypeFieldsDef).forEach(function (fieldName) {
      // Check if the field is missing on the type in the new schema.
      if (!(fieldName in newTypeFieldsDef)) {
        breakingFieldChanges.push({
          type: BreakingChangeType.FIELD_REMOVED,
          description: typeName + '.' + fieldName + ' was removed.'
        });
      } else {
        // Check if the field's type has changed in the new schema.
        var oldFieldType = (0, _definition.getNamedType)(oldTypeFieldsDef[fieldName].type);
        var newFieldType = (0, _definition.getNamedType)(newTypeFieldsDef[fieldName].type);
        if (oldFieldType && newFieldType && oldFieldType.name !== newFieldType.name) {
          breakingFieldChanges.push({
            type: BreakingChangeType.FIELD_CHANGED_KIND,
            description: typeName + '.' + fieldName + ' changed type from ' + (oldFieldType.name + ' to ' + newFieldType.name + '.')
          });
        }
      }
    });
  });
  return breakingFieldChanges;
}

/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to removing types from a union type.
 */
function findTypesRemovedFromUnions(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var typesRemovedFromUnion = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!(oldType instanceof _definition.GraphQLUnionType) || !(newType instanceof _definition.GraphQLUnionType)) {
      return;
    }
    var typeNamesInNewUnion = Object.create(null);
    newType.getTypes().forEach(function (type) {
      typeNamesInNewUnion[type.name] = true;
    });
    oldType.getTypes().forEach(function (type) {
      if (!typeNamesInNewUnion[type.name]) {
        typesRemovedFromUnion.push({
          type: BreakingChangeType.TYPE_REMOVED_FROM_UNION,
          description: type.name + ' was removed from union type ' + typeName + '.'
        });
      }
    });
  });
  return typesRemovedFromUnion;
}

/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to removing values from an enum type.
 */
function findValuesRemovedFromEnums(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var valuesRemovedFromEnums = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!(oldType instanceof _definition.GraphQLEnumType) || !(newType instanceof _definition.GraphQLEnumType)) {
      return;
    }
    var valuesInNewEnum = Object.create(null);
    newType.getValues().forEach(function (value) {
      valuesInNewEnum[value.name] = true;
    });
    oldType.getValues().forEach(function (value) {
      if (!valuesInNewEnum[value.name]) {
        valuesRemovedFromEnums.push({
          type: BreakingChangeType.VALUE_REMOVED_FROM_ENUM,
          description: value.name + ' was removed from enum type ' + typeName + '.'
        });
      }
    });
  });
  return valuesRemovedFromEnums;
}

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findDeprecatedUsages = findDeprecatedUsages;

var _GraphQLError = __webpack_require__(37);

var _visitor = __webpack_require__(78);

var _definition = __webpack_require__(6);

var _schema = __webpack_require__(41);

var _TypeInfo = __webpack_require__(108);

/**
 * A validation rule which reports deprecated usages.
 *
 * Returns a list of GraphQLError instances describing each deprecated use.
 */
function findDeprecatedUsages(schema, ast) {
  var errors = [];
  var typeInfo = new _TypeInfo.TypeInfo(schema);

  (0, _visitor.visit)(ast, (0, _visitor.visitWithTypeInfo)(typeInfo, {
    Field: function Field(node) {
      var fieldDef = typeInfo.getFieldDef();
      if (fieldDef && fieldDef.isDeprecated) {
        var parentType = typeInfo.getParentType();
        if (parentType) {
          var reason = fieldDef.deprecationReason;
          errors.push(new _GraphQLError.GraphQLError('The field ' + parentType.name + '.' + fieldDef.name + ' is deprecated.' + (reason ? ' ' + reason : ''), [node]));
        }
      }
    },
    EnumValue: function EnumValue(node) {
      var enumVal = typeInfo.getEnumValue();
      if (enumVal && enumVal.isDeprecated) {
        var type = (0, _definition.getNamedType)(typeInfo.getInputType());
        if (type) {
          var reason = enumVal.deprecationReason;
          errors.push(new _GraphQLError.GraphQLError('The enum value ' + type.name + '.' + enumVal.name + ' is deprecated.' + (reason ? ' ' + reason : ''), [node]));
        }
      }
    }
  }));

  return errors;
}
/**
 *  Copyright (c) Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOperationAST = getOperationAST;

var _kinds = __webpack_require__(17);

/**
 * Returns an operation AST given a document AST and optionally an operation
 * name. If a name is not provided, an operation is only returned if only one is
 * provided in the document.
 */
function getOperationAST(documentAST, operationName) {
  var operation = null;
  for (var i = 0; i < documentAST.definitions.length; i++) {
    var definition = documentAST.definitions[i];
    if (definition.kind === _kinds.OPERATION_DEFINITION) {
      if (!operationName) {
        // If no operation name was provided, only return an Operation if there
        // is one defined in the document. Upon encountering the second, return
        // null.
        if (operation) {
          return null;
        }
        operation = definition;
      } else if (definition.name && definition.name.value === operationName) {
        return definition;
      }
    }
  }
  return operation;
}
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var introspectionQuery = exports.introspectionQuery = '\n  query IntrospectionQuery {\n    __schema {\n      queryType { name }\n      mutationType { name }\n      subscriptionType { name }\n      types {\n        ...FullType\n      }\n      directives {\n        name\n        description\n        locations\n        args {\n          ...InputValue\n        }\n      }\n    }\n  }\n\n  fragment FullType on __Type {\n    kind\n    name\n    description\n    fields(includeDeprecated: true) {\n      name\n      description\n      args {\n        ...InputValue\n      }\n      type {\n        ...TypeRef\n      }\n      isDeprecated\n      deprecationReason\n    }\n    inputFields {\n      ...InputValue\n    }\n    interfaces {\n      ...TypeRef\n    }\n    enumValues(includeDeprecated: true) {\n      name\n      description\n      isDeprecated\n      deprecationReason\n    }\n    possibleTypes {\n      ...TypeRef\n    }\n  }\n\n  fragment InputValue on __InputValue {\n    name\n    description\n    type { ...TypeRef }\n    defaultValue\n  }\n\n  fragment TypeRef on __Type {\n    kind\n    name\n    ofType {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n                ofType {\n                  kind\n                  name\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n';
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printSchema = printSchema;
exports.printIntrospectionSchema = printIntrospectionSchema;
exports.printType = printType;

var _invariant = __webpack_require__(10);

var _invariant2 = _interopRequireDefault(_invariant);

var _isNullish = __webpack_require__(27);

var _isNullish2 = _interopRequireDefault(_isNullish);

var _isInvalid = __webpack_require__(38);

var _isInvalid2 = _interopRequireDefault(_isInvalid);

var _astFromValue = __webpack_require__(80);

var _printer = __webpack_require__(53);

var _definition = __webpack_require__(6);

var _scalars = __webpack_require__(28);

var _directives = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

function printSchema(schema) {
  return printFilteredSchema(schema, function (n) {
    return !isSpecDirective(n);
  }, isDefinedType);
}

function printIntrospectionSchema(schema) {
  return printFilteredSchema(schema, isSpecDirective, isIntrospectionType);
}

function isSpecDirective(directiveName) {
  return directiveName === 'skip' || directiveName === 'include' || directiveName === 'deprecated';
}

function isDefinedType(typename) {
  return !isIntrospectionType(typename) && !isBuiltInScalar(typename);
}

function isIntrospectionType(typename) {
  return typename.indexOf('__') === 0;
}

function isBuiltInScalar(typename) {
  return typename === 'String' || typename === 'Boolean' || typename === 'Int' || typename === 'Float' || typename === 'ID';
}

function printFilteredSchema(schema, directiveFilter, typeFilter) {
  var directives = schema.getDirectives().filter(function (directive) {
    return directiveFilter(directive.name);
  });
  var typeMap = schema.getTypeMap();
  var types = Object.keys(typeMap).filter(typeFilter).sort(function (name1, name2) {
    return name1.localeCompare(name2);
  }).map(function (typeName) {
    return typeMap[typeName];
  });

  return [printSchemaDefinition(schema)].concat(directives.map(printDirective), types.map(printType)).filter(Boolean).join('\n\n') + '\n';
}

function printSchemaDefinition(schema) {
  if (isSchemaOfCommonNames(schema)) {
    return;
  }

  var operationTypes = [];

  var queryType = schema.getQueryType();
  if (queryType) {
    operationTypes.push('  query: ' + queryType.name);
  }

  var mutationType = schema.getMutationType();
  if (mutationType) {
    operationTypes.push('  mutation: ' + mutationType.name);
  }

  var subscriptionType = schema.getSubscriptionType();
  if (subscriptionType) {
    operationTypes.push('  subscription: ' + subscriptionType.name);
  }

  return 'schema {\n' + operationTypes.join('\n') + '\n}';
}

/**
 * GraphQL schema define root types for each type of operation. These types are
 * the same as any other type and can be named in any manner, however there is
 * a common naming convention:
 *
 *   schema {
 *     query: Query
 *     mutation: Mutation
 *   }
 *
 * When using this naming convention, the schema description can be omitted.
 */
function isSchemaOfCommonNames(schema) {
  var queryType = schema.getQueryType();
  if (queryType && queryType.name !== 'Query') {
    return false;
  }

  var mutationType = schema.getMutationType();
  if (mutationType && mutationType.name !== 'Mutation') {
    return false;
  }

  var subscriptionType = schema.getSubscriptionType();
  if (subscriptionType && subscriptionType.name !== 'Subscription') {
    return false;
  }

  return true;
}

function printType(type) {
  if (type instanceof _definition.GraphQLScalarType) {
    return printScalar(type);
  } else if (type instanceof _definition.GraphQLObjectType) {
    return printObject(type);
  } else if (type instanceof _definition.GraphQLInterfaceType) {
    return printInterface(type);
  } else if (type instanceof _definition.GraphQLUnionType) {
    return printUnion(type);
  } else if (type instanceof _definition.GraphQLEnumType) {
    return printEnum(type);
  }
  (0, _invariant2.default)(type instanceof _definition.GraphQLInputObjectType);
  return printInputObject(type);
}

function printScalar(type) {
  return printDescription(type) + ('scalar ' + type.name);
}

function printObject(type) {
  var interfaces = type.getInterfaces();
  var implementedInterfaces = interfaces.length ? ' implements ' + interfaces.map(function (i) {
    return i.name;
  }).join(', ') : '';
  return printDescription(type) + ('type ' + type.name + implementedInterfaces + ' {\n') + printFields(type) + '\n' + '}';
}

function printInterface(type) {
  return printDescription(type) + ('interface ' + type.name + ' {\n') + printFields(type) + '\n' + '}';
}

function printUnion(type) {
  return printDescription(type) + ('union ' + type.name + ' = ' + type.getTypes().join(' | '));
}

function printEnum(type) {
  return printDescription(type) + ('enum ' + type.name + ' {\n') + printEnumValues(type.getValues()) + '\n' + '}';
}

function printEnumValues(values) {
  return values.map(function (value, i) {
    return printDescription(value, '  ', !i) + '  ' + value.name + printDeprecated(value);
  }).join('\n');
}

function printInputObject(type) {
  var fieldMap = type.getFields();
  var fields = Object.keys(fieldMap).map(function (fieldName) {
    return fieldMap[fieldName];
  });
  return printDescription(type) + ('input ' + type.name + ' {\n') + fields.map(function (f, i) {
    return printDescription(f, '  ', !i) + '  ' + printInputValue(f);
  }).join('\n') + '\n' + '}';
}

function printFields(type) {
  var fieldMap = type.getFields();
  var fields = Object.keys(fieldMap).map(function (fieldName) {
    return fieldMap[fieldName];
  });
  return fields.map(function (f, i) {
    return printDescription(f, '  ', !i) + '  ' + f.name + printArgs(f.args, '  ') + ': ' + String(f.type) + printDeprecated(f);
  }).join('\n');
}

function printArgs(args) {
  var indentation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (args.length === 0) {
    return '';
  }

  // If every arg does not have a description, print them on one line.
  if (args.every(function (arg) {
    return !arg.description;
  })) {
    return '(' + args.map(printInputValue).join(', ') + ')';
  }

  return '(\n' + args.map(function (arg, i) {
    return printDescription(arg, '  ' + indentation, !i) + '  ' + indentation + printInputValue(arg);
  }).join('\n') + '\n' + indentation + ')';
}

function printInputValue(arg) {
  var argDecl = arg.name + ': ' + String(arg.type);
  if (!(0, _isInvalid2.default)(arg.defaultValue)) {
    argDecl += ' = ' + (0, _printer.print)((0, _astFromValue.astFromValue)(arg.defaultValue, arg.type));
  }
  return argDecl;
}

function printDirective(directive) {
  return printDescription(directive) + 'directive @' + directive.name + printArgs(directive.args) + ' on ' + directive.locations.join(' | ');
}

function printDeprecated(fieldOrEnumVal) {
  var reason = fieldOrEnumVal.deprecationReason;
  if ((0, _isNullish2.default)(reason)) {
    return '';
  }
  if (reason === '' || reason === _directives.DEFAULT_DEPRECATION_REASON) {
    return ' @deprecated';
  }
  return ' @deprecated(reason: ' + (0, _printer.print)((0, _astFromValue.astFromValue)(reason, _scalars.GraphQLString)) + ')';
}

function printDescription(def) {
  var indentation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var firstInBlock = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!def.description) {
    return '';
  }
  var lines = def.description.split('\n');
  var description = indentation && !firstInBlock ? '\n' : '';
  for (var i = 0; i < lines.length; i++) {
    if (lines[i] === '') {
      description += indentation + '#\n';
    } else {
      // For > 120 character long lines, cut at space boundaries into sublines
      // of ~80 chars.
      var sublines = breakLine(lines[i], 120 - indentation.length);
      for (var j = 0; j < sublines.length; j++) {
        description += indentation + '# ' + sublines[j] + '\n';
      }
    }
  }
  return description;
}

function breakLine(line, len) {
  if (line.length < len + 5) {
    return [line];
  }
  var parts = line.split(new RegExp('((?: |^).{15,' + (len - 40) + '}(?= |$))'));
  if (parts.length < 4) {
    return [line];
  }
  var sublines = [parts[0] + parts[1] + parts[2]];
  for (var i = 3; i < parts.length; i += 2) {
    sublines.push(parts[i].slice(1) + parts[i + 1]);
  }
  return sublines;
}

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.separateOperations = separateOperations;

var _visitor = __webpack_require__(78);

/**
 * separateOperations accepts a single AST document which may contain many
 * operations and fragments and returns a collection of AST documents each of
 * which contains a single operation as well the fragment definitions it
 * refers to.
 */
function separateOperations(documentAST) {

  var operations = [];
  var depGraph = Object.create(null);
  var fromName = void 0;

  // Populate the list of operations and build a dependency graph.
  (0, _visitor.visit)(documentAST, {
    OperationDefinition: function OperationDefinition(node) {
      operations.push(node);
      fromName = opName(node);
    },
    FragmentDefinition: function FragmentDefinition(node) {
      fromName = node.name.value;
    },
    FragmentSpread: function FragmentSpread(node) {
      var toName = node.name.value;
      (depGraph[fromName] || (depGraph[fromName] = Object.create(null)))[toName] = true;
    }
  });

  // For each operation, produce a new synthesized AST which includes only what
  // is necessary for completing that operation.
  var separatedDocumentASTs = Object.create(null);
  operations.forEach(function (operation) {
    var operationName = opName(operation);
    var dependencies = Object.create(null);
    collectTransitiveDependencies(dependencies, depGraph, operationName);

    separatedDocumentASTs[operationName] = {
      kind: 'Document',
      definitions: documentAST.definitions.filter(function (def) {
        return def === operation || def.kind === 'FragmentDefinition' && dependencies[def.name.value];
      })
    };
  });

  return separatedDocumentASTs;
}
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

// Provides the empty string for anonymous operations.
function opName(operation) {
  return operation.name ? operation.name.value : '';
}

// From a dependency graph, collects a list of transitive dependencies by
// recursing through a dependency graph.
function collectTransitiveDependencies(collected, depGraph, fromName) {
  var immediateDeps = depGraph[fromName];
  if (immediateDeps) {
    Object.keys(immediateDeps).forEach(function (toName) {
      if (!collected[toName]) {
        collected[toName] = true;
        collectTransitiveDependencies(collected, depGraph, toName);
      }
    });
  }
}

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(114)))

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  F: __webpack_require__(260),
  T: __webpack_require__(261),
  __: __webpack_require__(262),
  add: __webpack_require__(54),
  addIndex: __webpack_require__(263),
  adjust: __webpack_require__(116),
  all: __webpack_require__(264),
  allPass: __webpack_require__(265),
  always: __webpack_require__(33),
  and: __webpack_require__(117),
  any: __webpack_require__(118),
  anyPass: __webpack_require__(266),
  ap: __webpack_require__(83),
  aperture: __webpack_require__(267),
  append: __webpack_require__(268),
  apply: __webpack_require__(119),
  applySpec: __webpack_require__(269),
  ascend: __webpack_require__(270),
  assoc: __webpack_require__(43),
  assocPath: __webpack_require__(120),
  binary: __webpack_require__(271),
  bind: __webpack_require__(121),
  both: __webpack_require__(272),
  call: __webpack_require__(273),
  chain: __webpack_require__(84),
  clamp: __webpack_require__(274),
  clone: __webpack_require__(275),
  comparator: __webpack_require__(276),
  complement: __webpack_require__(277),
  compose: __webpack_require__(55),
  composeK: __webpack_require__(122),
  composeP: __webpack_require__(278),
  concat: __webpack_require__(85),
  cond: __webpack_require__(279),
  construct: __webpack_require__(280),
  constructN: __webpack_require__(123),
  contains: __webpack_require__(281),
  converge: __webpack_require__(124),
  countBy: __webpack_require__(282),
  curry: __webpack_require__(56),
  curryN: __webpack_require__(8),
  dec: __webpack_require__(283),
  descend: __webpack_require__(284),
  defaultTo: __webpack_require__(125),
  difference: __webpack_require__(126),
  differenceWith: __webpack_require__(127),
  dissoc: __webpack_require__(86),
  dissocPath: __webpack_require__(285),
  divide: __webpack_require__(286),
  drop: __webpack_require__(128),
  dropLast: __webpack_require__(287),
  dropLastWhile: __webpack_require__(288),
  dropRepeats: __webpack_require__(289),
  dropRepeatsWith: __webpack_require__(129),
  dropWhile: __webpack_require__(290),
  either: __webpack_require__(291),
  empty: __webpack_require__(130),
  eqBy: __webpack_require__(292),
  eqProps: __webpack_require__(293),
  equals: __webpack_require__(22),
  evolve: __webpack_require__(294),
  filter: __webpack_require__(87),
  find: __webpack_require__(295),
  findIndex: __webpack_require__(296),
  findLast: __webpack_require__(297),
  findLastIndex: __webpack_require__(298),
  flatten: __webpack_require__(299),
  flip: __webpack_require__(57),
  forEach: __webpack_require__(300),
  forEachObjIndexed: __webpack_require__(301),
  fromPairs: __webpack_require__(302),
  groupBy: __webpack_require__(303),
  groupWith: __webpack_require__(304),
  gt: __webpack_require__(305),
  gte: __webpack_require__(306),
  has: __webpack_require__(307),
  hasIn: __webpack_require__(308),
  head: __webpack_require__(309),
  identical: __webpack_require__(131),
  identity: __webpack_require__(88),
  ifElse: __webpack_require__(310),
  inc: __webpack_require__(311),
  indexBy: __webpack_require__(312),
  indexOf: __webpack_require__(313),
  init: __webpack_require__(314),
  insert: __webpack_require__(315),
  insertAll: __webpack_require__(316),
  intersection: __webpack_require__(351),
  intersectionWith: __webpack_require__(352),
  intersperse: __webpack_require__(353),
  into: __webpack_require__(354),
  invert: __webpack_require__(355),
  invertObj: __webpack_require__(356),
  invoker: __webpack_require__(45),
  is: __webpack_require__(146),
  isArrayLike: __webpack_require__(46),
  isEmpty: __webpack_require__(357),
  isNil: __webpack_require__(358),
  join: __webpack_require__(359),
  juxt: __webpack_require__(147),
  keys: __webpack_require__(20),
  keysIn: __webpack_require__(360),
  last: __webpack_require__(148),
  lastIndexOf: __webpack_require__(361),
  length: __webpack_require__(149),
  lens: __webpack_require__(63),
  lensIndex: __webpack_require__(362),
  lensPath: __webpack_require__(363),
  lensProp: __webpack_require__(364),
  lift: __webpack_require__(64),
  liftN: __webpack_require__(150),
  lt: __webpack_require__(365),
  lte: __webpack_require__(366),
  map: __webpack_require__(15),
  mapAccum: __webpack_require__(367),
  mapAccumRight: __webpack_require__(368),
  mapObjIndexed: __webpack_require__(369),
  match: __webpack_require__(370),
  mathMod: __webpack_require__(371),
  max: __webpack_require__(34),
  maxBy: __webpack_require__(372),
  mean: __webpack_require__(151),
  median: __webpack_require__(373),
  memoize: __webpack_require__(374),
  merge: __webpack_require__(375),
  mergeAll: __webpack_require__(376),
  mergeWith: __webpack_require__(377),
  mergeWithKey: __webpack_require__(152),
  min: __webpack_require__(378),
  minBy: __webpack_require__(379),
  modulo: __webpack_require__(380),
  multiply: __webpack_require__(153),
  nAry: __webpack_require__(65),
  negate: __webpack_require__(381),
  none: __webpack_require__(382),
  not: __webpack_require__(154),
  nth: __webpack_require__(47),
  nthArg: __webpack_require__(383),
  objOf: __webpack_require__(155),
  of: __webpack_require__(384),
  omit: __webpack_require__(385),
  once: __webpack_require__(386),
  or: __webpack_require__(156),
  over: __webpack_require__(157),
  pair: __webpack_require__(387),
  partial: __webpack_require__(388),
  partialRight: __webpack_require__(389),
  partition: __webpack_require__(390),
  path: __webpack_require__(48),
  pathEq: __webpack_require__(391),
  pathOr: __webpack_require__(392),
  pathSatisfies: __webpack_require__(393),
  pick: __webpack_require__(394),
  pickAll: __webpack_require__(158),
  pickBy: __webpack_require__(159),
  pipe: __webpack_require__(160),
  pipeK: __webpack_require__(395),
  pipeP: __webpack_require__(161),
  pluck: __webpack_require__(49),
  prepend: __webpack_require__(162),
  product: __webpack_require__(396),
  project: __webpack_require__(397),
  prop: __webpack_require__(93),
  propEq: __webpack_require__(398),
  propIs: __webpack_require__(399),
  propOr: __webpack_require__(400),
  propSatisfies: __webpack_require__(401),
  props: __webpack_require__(402),
  range: __webpack_require__(403),
  reduce: __webpack_require__(21),
  reduceBy: __webpack_require__(66),
  reduceRight: __webpack_require__(163),
  reduceWhile: __webpack_require__(404),
  reduced: __webpack_require__(405),
  reject: __webpack_require__(67),
  remove: __webpack_require__(406),
  repeat: __webpack_require__(407),
  replace: __webpack_require__(408),
  reverse: __webpack_require__(68),
  scan: __webpack_require__(409),
  sequence: __webpack_require__(164),
  set: __webpack_require__(410),
  slice: __webpack_require__(30),
  sort: __webpack_require__(411),
  sortBy: __webpack_require__(412),
  sortWith: __webpack_require__(413),
  split: __webpack_require__(414),
  splitAt: __webpack_require__(415),
  splitEvery: __webpack_require__(416),
  splitWhen: __webpack_require__(417),
  subtract: __webpack_require__(418),
  sum: __webpack_require__(165),
  symmetricDifference: __webpack_require__(419),
  symmetricDifferenceWith: __webpack_require__(420),
  tail: __webpack_require__(94),
  take: __webpack_require__(166),
  takeLast: __webpack_require__(421),
  takeLastWhile: __webpack_require__(422),
  takeWhile: __webpack_require__(423),
  tap: __webpack_require__(424),
  test: __webpack_require__(425),
  times: __webpack_require__(167),
  toLower: __webpack_require__(426),
  toPairs: __webpack_require__(427),
  toPairsIn: __webpack_require__(428),
  toString: __webpack_require__(50),
  toUpper: __webpack_require__(429),
  transduce: __webpack_require__(430),
  transpose: __webpack_require__(431),
  traverse: __webpack_require__(432),
  trim: __webpack_require__(433),
  tryCatch: __webpack_require__(434),
  type: __webpack_require__(95),
  unapply: __webpack_require__(435),
  unary: __webpack_require__(436),
  uncurryN: __webpack_require__(437),
  unfold: __webpack_require__(438),
  union: __webpack_require__(439),
  unionWith: __webpack_require__(440),
  uniq: __webpack_require__(96),
  uniqBy: __webpack_require__(168),
  uniqWith: __webpack_require__(97),
  unless: __webpack_require__(441),
  unnest: __webpack_require__(442),
  until: __webpack_require__(443),
  update: __webpack_require__(169),
  useWith: __webpack_require__(170),
  values: __webpack_require__(171),
  valuesIn: __webpack_require__(444),
  view: __webpack_require__(445),
  when: __webpack_require__(446),
  where: __webpack_require__(172),
  whereEq: __webpack_require__(447),
  without: __webpack_require__(448),
  xprod: __webpack_require__(449),
  zip: __webpack_require__(450),
  zipObj: __webpack_require__(451),
  zipWith: __webpack_require__(452)
};


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var always = __webpack_require__(33);


/**
 * A function that always returns `false`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.always, R.T
 * @example
 *
 *      R.F(); //=> false
 */
module.exports = always(false);


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var always = __webpack_require__(33);


/**
 * A function that always returns `true`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.always, R.F
 * @example
 *
 *      R.T(); //=> true
 */
module.exports = always(true);


/***/ }),
/* 262 */
/***/ (function(module, exports) {

/**
 * A special placeholder value used to specify "gaps" within curried functions,
 * allowing partial application of any combination of arguments, regardless of
 * their positions.
 *
 * If `g` is a curried ternary function and `_` is `R.__`, the following are
 * equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2, _)(1, 3)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @constant
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @example
 *
 *      var greet = R.replace('{name}', R.__, 'Hello, {name}!');
 *      greet('Alice'); //=> 'Hello, Alice!'
 */
module.exports = {'@@functional/placeholder': true};


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(19);
var _curry1 = __webpack_require__(1);
var curryN = __webpack_require__(8);


/**
 * Creates a new list iteration function from an existing one by adding two new
 * parameters to its callback function: the current index, and the entire list.
 *
 * This would turn, for instance, Ramda's simple `map` function into one that
 * more closely resembles `Array.prototype.map`. Note that this will only work
 * for functions in which the iteration callback function is the first
 * parameter, and where the list is the last parameter. (This latter might be
 * unimportant if the list parameter is not used.)
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Function
 * @category List
 * @sig ((a ... -> b) ... -> [a] -> *) -> (a ..., Int, [a] -> b) ... -> [a] -> *)
 * @param {Function} fn A list iteration function that does not pass index or list to its callback
 * @return {Function} An altered list iteration function that passes (item, index, list) to its callback
 * @example
 *
 *      var mapIndexed = R.addIndex(R.map);
 *      mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
 *      //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
 */
module.exports = _curry1(function addIndex(fn) {
  return curryN(fn.length, function() {
    var idx = 0;
    var origFn = arguments[0];
    var list = arguments[arguments.length - 1];
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = function() {
      var result = origFn.apply(this, _concat(arguments, [idx, list]));
      idx += 1;
      return result;
    };
    return fn.apply(this, args);
  });
});


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(4);
var _xall = __webpack_require__(335);


/**
 * Returns `true` if all elements of the list match the predicate, `false` if
 * there are any that don't.
 *
 * Dispatches to the `all` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by every element, `false`
 *         otherwise.
 * @see R.any, R.none, R.transduce
 * @example
 *
 *      var equals3 = R.equals(3);
 *      R.all(equals3)([3, 3, 3, 3]); //=> true
 *      R.all(equals3)([3, 3, 1, 3]); //=> false
 */
module.exports = _curry2(_dispatchable(['all'], _xall, function all(fn, list) {
  var idx = 0;
  while (idx < list.length) {
    if (!fn(list[idx])) {
      return false;
    }
    idx += 1;
  }
  return true;
}));


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var curryN = __webpack_require__(8);
var max = __webpack_require__(34);
var pluck = __webpack_require__(49);
var reduce = __webpack_require__(21);


/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if every one of the provided predicates is satisfied
 * by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.anyPass
 * @example
 *
 *      var isQueen = R.propEq('rank', 'Q');
 *      var isSpade = R.propEq('suit', '♠︎');
 *      var isQueenOfSpades = R.allPass([isQueen, isSpade]);
 *
 *      isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
 *      isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
 */
module.exports = _curry1(function allPass(preds) {
  return curryN(reduce(max, 0, pluck('length', preds)), function() {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (!preds[idx].apply(this, arguments)) {
        return false;
      }
      idx += 1;
    }
    return true;
  });
});


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var curryN = __webpack_require__(8);
var max = __webpack_require__(34);
var pluck = __webpack_require__(49);
var reduce = __webpack_require__(21);


/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if at least one of the provided predicates is
 * satisfied by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.allPass
 * @example
 *
 *      var isClub = R.propEq('suit', '♣');
 *      var isSpade = R.propEq('suit', '♠');
 *      var isBlackCard = R.anyPass([isClub, isSpade]);
 *
 *      isBlackCard({rank: '10', suit: '♣'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♠'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♦'}); //=> false
 */
module.exports = _curry1(function anyPass(preds) {
  return curryN(reduce(max, 0, pluck('length', preds)), function() {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (preds[idx].apply(this, arguments)) {
        return true;
      }
      idx += 1;
    }
    return false;
  });
});


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

var _aperture = __webpack_require__(318);
var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(4);
var _xaperture = __webpack_require__(336);


/**
 * Returns a new list, composed of n-tuples of consecutive elements If `n` is
 * greater than the length of the list, an empty list is returned.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @param {Number} n The size of the tuples to create
 * @param {Array} list The list to split into `n`-length tuples
 * @return {Array} The resulting list of `n`-length tuples
 * @see R.transduce
 * @example
 *
 *      R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
 *      R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
 *      R.aperture(7, [1, 2, 3, 4, 5]); //=> []
 */
module.exports = _curry2(_dispatchable([], _xaperture, _aperture));


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(19);
var _curry2 = __webpack_require__(0);


/**
 * Returns a new list containing the contents of the given list, followed by
 * the given element.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The element to add to the end of the new list.
 * @param {Array} list The list of elements to add a new item to.
 *        list.
 * @return {Array} A new list containing the elements of the old list followed by `el`.
 * @see R.prepend
 * @example
 *
 *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
 *      R.append('tests', []); //=> ['tests']
 *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
 */
module.exports = _curry2(function append(el, list) {
  return _concat(list, [el]);
});


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var apply = __webpack_require__(119);
var curryN = __webpack_require__(8);
var map = __webpack_require__(15);
var max = __webpack_require__(34);
var pluck = __webpack_require__(49);
var reduce = __webpack_require__(21);
var values = __webpack_require__(171);


/**
 * Given a spec object recursively mapping properties to functions, creates a
 * function producing an object of the same structure, by mapping each property
 * to the result of calling its associated function with the supplied arguments.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig {k: ((a, b, ..., m) -> v)} -> ((a, b, ..., m) -> {k: v})
 * @param {Object} spec an object recursively mapping properties to functions for
 *        producing the values for these properties.
 * @return {Function} A function that returns an object of the same structure
 * as `spec', with each property set to the value returned by calling its
 * associated function with the supplied arguments.
 * @see R.converge, R.juxt
 * @example
 *
 *      var getMetrics = R.applySpec({
 *                                      sum: R.add,
 *                                      nested: { mul: R.multiply }
 *                                   });
 *      getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
 * @symb R.applySpec({ x: f, y: { z: g } })(a, b) = { x: f(a, b), y: { z: g(a, b) } }
 */
module.exports = _curry1(function applySpec(spec) {
  spec = map(function(v) { return typeof v == 'function' ? v : applySpec(v); },
             spec);
  return curryN(reduce(max, 0, pluck('length', values(spec))),
                function() {
                  var args = arguments;
                  return map(function(f) { return apply(f, args); }, spec);
                });
});


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);


/**
 * Makes an ascending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Function
 * @sig Ord b => (a -> b) -> a -> a -> Number
 * @param {Function} fn A function of arity one that returns a value that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if fn(a) < fn(b), `1` if fn(b) < fn(a), otherwise `0`
 * @example
 *
 *      var byAge = R.ascend(R.prop('age'));
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByYoungestFirst = R.sort(byAge, people);
 */
module.exports = _curry3(function ascend(fn, a, b) {
  var aa = fn(a);
  var bb = fn(b);
  return aa < bb ? -1 : aa > bb ? 1 : 0;
});


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var nAry = __webpack_require__(65);


/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 2 parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Function
 * @sig (* -> c) -> (a, b -> c)
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity 2.
 * @example
 *
 *      var takesThreeArgs = function(a, b, c) {
 *        return [a, b, c];
 *      };
 *      takesThreeArgs.length; //=> 3
 *      takesThreeArgs(1, 2, 3); //=> [1, 2, 3]
 *
 *      var takesTwoArgs = R.binary(takesThreeArgs);
 *      takesTwoArgs.length; //=> 2
 *      // Only 2 arguments are passed to the wrapped function
 *      takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]
 * @symb R.binary(f)(a, b, c) = f(a, b)
 */
module.exports = _curry1(function binary(fn) {
  return nAry(2, fn);
});


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _isFunction = __webpack_require__(59);
var and = __webpack_require__(117);
var lift = __webpack_require__(64);


/**
 * A function which calls the two provided functions and returns the `&&`
 * of the results.
 * It returns the result of the first function if it is false-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * false-y value.
 *
 * In addition to functions, `R.both` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f A predicate
 * @param {Function} g Another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `&&`s their outputs together.
 * @see R.and
 * @example
 *
 *      var gt10 = R.gt(R.__, 10)
 *      var lt20 = R.lt(R.__, 20)
 *      var f = R.both(gt10, lt20);
 *      f(15); //=> true
 *      f(30); //=> false
 */
module.exports = _curry2(function both(f, g) {
  return _isFunction(f) ?
    function _both() {
      return f.apply(this, arguments) && g.apply(this, arguments);
    } :
    lift(and)(f, g);
});


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

var curry = __webpack_require__(56);


/**
 * Returns the result of calling its first argument with the remaining
 * arguments. This is occasionally useful as a converging function for
 * `R.converge`: the left branch can produce a function while the right branch
 * produces a value to be passed to that function as an argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig (*... -> a),*... -> a
 * @param {Function} fn The function to apply to the remaining arguments.
 * @param {...*} args Any number of positional arguments.
 * @return {*}
 * @see R.apply
 * @example
 *
 *      R.call(R.add, 1, 2); //=> 3
 *
 *      var indentN = R.pipe(R.times(R.always(' ')),
 *                           R.join(''),
 *                           R.replace(/^(?!$)/gm));
 *
 *      var format = R.converge(R.call, [
 *                                  R.pipe(R.prop('indent'), indentN),
 *                                  R.prop('value')
 *                              ]);
 *
 *      format({indent: 2, value: 'foo\nbar\nbaz\n'}); //=> '  foo\n  bar\n  baz\n'
 * @symb R.call(f, a, b) = f(a, b)
 */
module.exports = curry(function call(fn) {
  return fn.apply(this, Array.prototype.slice.call(arguments, 1));
});


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);

/**
 * Restricts a number to be within a range.
 *
 * Also works for other ordered types such as Strings and Dates.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Relation
 * @sig Ord a => a -> a -> a -> a
 * @param {Number} minimum The lower limit of the clamp (inclusive)
 * @param {Number} maximum The upper limit of the clamp (inclusive)
 * @param {Number} value Value to be clamped
 * @return {Number} Returns `minimum` when `val < minimum`, `maximum` when `val > maximum`, returns `val` otherwise
 * @example
 *
 *      R.clamp(1, 10, -5) // => 1
 *      R.clamp(1, 10, 15) // => 10
 *      R.clamp(1, 10, 4)  // => 4
 */
module.exports = _curry3(function clamp(min, max, value) {
  if (min > max) {
    throw new Error('min must not be greater than max in clamp(min, max, value)');
  }
  return value < min ? min :
         value > max ? max :
         value;
});


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

var _clone = __webpack_require__(132);
var _curry1 = __webpack_require__(1);


/**
 * Creates a deep copy of the value which may contain (nested) `Array`s and
 * `Object`s, `Number`s, `String`s, `Boolean`s and `Date`s. `Function`s are
 * assigned by reference rather than copied
 *
 * Dispatches to a `clone` method if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {*} -> {*}
 * @param {*} value The object or array to clone
 * @return {*} A deeply cloned copy of `val`
 * @example
 *
 *      var objects = [{}, {}, {}];
 *      var objectsClone = R.clone(objects);
 *      objects === objectsClone; //=> false
 *      objects[0] === objectsClone[0]; //=> false
 */
module.exports = _curry1(function clone(value) {
  return value != null && typeof value.clone === 'function' ?
    value.clone() :
    _clone(value, [], [], true);
});


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);


/**
 * Makes a comparator function out of a function that reports whether the first
 * element is less than the second.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a, b -> Boolean) -> (a, b -> Number)
 * @param {Function} pred A predicate function of arity two which will return `true` if the first argument
 * is less than the second, `false` otherwise
 * @return {Function} A Function :: a -> b -> Int that returns `-1` if a < b, `1` if b < a, otherwise `0`
 * @example
 *
 *      var byAge = R.comparator((a, b) => a.age < b.age);
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByIncreasingAge = R.sort(byAge, people);
 */
module.exports = _curry1(function comparator(pred) {
  return function(a, b) {
    return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
  };
});


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

var lift = __webpack_require__(64);
var not = __webpack_require__(154);


/**
 * Takes a function `f` and returns a function `g` such that if called with the same arguments
 * when `f` returns a "truthy" value, `g` returns `false` and when `f` returns a "falsy" value `g` returns `true`.
 *
 * `R.complement` may be applied to any functor
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> *) -> (*... -> Boolean)
 * @param {Function} f
 * @return {Function}
 * @see R.not
 * @example
 *
 *      var isNotNil = R.complement(R.isNil);
 *      isNil(null); //=> true
 *      isNotNil(null); //=> false
 *      isNil(7); //=> false
 *      isNotNil(7); //=> true
 */
module.exports = lift(not);


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

var pipeP = __webpack_require__(161);
var reverse = __webpack_require__(68);


/**
 * Performs right-to-left composition of one or more Promise-returning
 * functions. The rightmost function may have any arity; the remaining
 * functions must be unary.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((y -> Promise z), (x -> Promise y), ..., (a -> Promise b)) -> (a -> Promise z)
 * @param {...Function} functions The functions to compose
 * @return {Function}
 * @see R.pipeP
 * @example
 *
 *      var db = {
 *        users: {
 *          JOE: {
 *            name: 'Joe',
 *            followers: ['STEVE', 'SUZY']
 *          }
 *        }
 *      }
 *
 *      // We'll pretend to do a db lookup which returns a promise
 *      var lookupUser = (userId) => Promise.resolve(db.users[userId])
 *      var lookupFollowers = (user) => Promise.resolve(user.followers)
 *      lookupUser('JOE').then(lookupFollowers)
 *
 *      //  followersForUser :: String -> Promise [UserId]
 *      var followersForUser = R.composeP(lookupFollowers, lookupUser);
 *      followersForUser('JOE').then(followers => console.log('Followers:', followers))
 *      // Followers: ["STEVE","SUZY"]
 */
module.exports = function composeP() {
  if (arguments.length === 0) {
    throw new Error('composeP requires at least one argument');
  }
  return pipeP.apply(this, reverse(arguments));
};


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(23);
var _curry1 = __webpack_require__(1);
var map = __webpack_require__(15);
var max = __webpack_require__(34);
var reduce = __webpack_require__(21);


/**
 * Returns a function, `fn`, which encapsulates `if/else, if/else, ...` logic.
 * `R.cond` takes a list of [predicate, transformer] pairs. All of the arguments
 * to `fn` are applied to each of the predicates in turn until one returns a
 * "truthy" value, at which point `fn` returns the result of applying its
 * arguments to the corresponding transformer. If none of the predicates
 * matches, `fn` returns undefined.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Logic
 * @sig [[(*... -> Boolean),(*... -> *)]] -> (*... -> *)
 * @param {Array} pairs A list of [predicate, transformer]
 * @return {Function}
 * @example
 *
 *      var fn = R.cond([
 *        [R.equals(0),   R.always('water freezes at 0°C')],
 *        [R.equals(100), R.always('water boils at 100°C')],
 *        [R.T,           temp => 'nothing special happens at ' + temp + '°C']
 *      ]);
 *      fn(0); //=> 'water freezes at 0°C'
 *      fn(50); //=> 'nothing special happens at 50°C'
 *      fn(100); //=> 'water boils at 100°C'
 */
module.exports = _curry1(function cond(pairs) {
  var arity = reduce(max,
                     0,
                     map(function(pair) { return pair[0].length; }, pairs));
  return _arity(arity, function() {
    var idx = 0;
    while (idx < pairs.length) {
      if (pairs[idx][0].apply(this, arguments)) {
        return pairs[idx][1].apply(this, arguments);
      }
      idx += 1;
    }
  });
});


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var constructN = __webpack_require__(123);


/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> {*}) -> (* -> {*})
 * @param {Function} fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @example
 *
 *      // Constructor function
 *      function Animal(kind) {
 *        this.kind = kind;
 *      };
 *      Animal.prototype.sighting = function() {
 *        return "It's a " + this.kind + "!";
 *      }
 *
 *      var AnimalConstructor = R.construct(Animal)
 *
 *      // Notice we no longer need the 'new' keyword:
 *      AnimalConstructor('Pig'); //=> {"kind": "Pig", "sighting": function (){...}};
 *
 *      var animalTypes = ["Lion", "Tiger", "Bear"];
 *      var animalSighting = R.invoker(0, 'sighting');
 *      var sightNewAnimal = R.compose(animalSighting, AnimalConstructor);
 *      R.map(sightNewAnimal, animalTypes); //=> ["It's a Lion!", "It's a Tiger!", "It's a Bear!"]
 */
module.exports = _curry1(function construct(Fn) {
  return constructN(Fn.length, Fn);
});


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

var _contains = __webpack_require__(29);
var _curry2 = __webpack_require__(0);


/**
 * Returns `true` if the specified value is equal, in `R.equals` terms, to at
 * least one element of the given list; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Boolean
 * @param {Object} a The item to compare against.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.
 * @see R.any
 * @example
 *
 *      R.contains(3, [1, 2, 3]); //=> true
 *      R.contains(4, [1, 2, 3]); //=> false
 *      R.contains({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
 *      R.contains([42], [[42]]); //=> true
 */
module.exports = _curry2(_contains);


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

var reduceBy = __webpack_require__(66);


/**
 * Counts the elements of a list according to how many match each value of a
 * key generated by the supplied function. Returns an object mapping the keys
 * produced by `fn` to the number of occurrences in the list. Note that all
 * keys are coerced to strings because of how JavaScript objects work.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig (a -> String) -> [a] -> {*}
 * @param {Function} fn The function used to map values to keys.
 * @param {Array} list The list to count elements from.
 * @return {Object} An object mapping keys to number of occurrences in the list.
 * @example
 *
 *      var numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
 *      R.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}
 *
 *      var letters = ['a', 'b', 'A', 'a', 'B', 'c'];
 *      R.countBy(R.toLower)(letters);   //=> {'a': 3, 'b': 2, 'c': 1}
 */
module.exports = reduceBy(function(acc, elem) { return acc + 1; }, 0);


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

var add = __webpack_require__(54);


/**
 * Decrements its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n - 1
 * @see R.inc
 * @example
 *
 *      R.dec(42); //=> 41
 */
module.exports = add(-1);


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);


/**
 * Makes a descending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Function
 * @sig Ord b => (a -> b) -> a -> a -> Number
 * @param {Function} fn A function of arity one that returns a value that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if fn(a) > fn(b), `1` if fn(b) > fn(a), otherwise `0`
 * @example
 *
 *      var byAge = R.descend(R.prop('age'));
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByOldestFirst = R.sort(byAge, people);
 */
module.exports = _curry3(function descend(fn, a, b) {
  var aa = fn(a);
  var bb = fn(b);
  return aa > bb ? -1 : aa < bb ? 1 : 0;
});


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var assoc = __webpack_require__(43);
var dissoc = __webpack_require__(86);


/**
 * Makes a shallow clone of an object, omitting the property at the given path.
 * Note that this copies and flattens prototype properties onto the new object
 * as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.11.0
 * @category Object
 * @sig [String] -> {k: v} -> {k: v}
 * @param {Array} path The path to the value to omit
 * @param {Object} obj The object to clone
 * @return {Object} A new object without the property at path
 * @see R.assocPath
 * @example
 *
 *      R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}
 */
module.exports = _curry2(function dissocPath(path, obj) {
  switch (path.length) {
    case 0:
      return obj;
    case 1:
      return dissoc(path[0], obj);
    default:
      var head = path[0];
      var tail = Array.prototype.slice.call(path, 1);
      return obj[head] == null ? obj : assoc(head, dissocPath(tail, obj[head]), obj);
  }
});


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Divides two numbers. Equivalent to `a / b`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a / b`.
 * @see R.multiply
 * @example
 *
 *      R.divide(71, 100); //=> 0.71
 *
 *      var half = R.divide(R.__, 2);
 *      half(42); //=> 21
 *
 *      var reciprocal = R.divide(1);
 *      reciprocal(4);   //=> 0.25
 */
module.exports = _curry2(function divide(a, b) { return a / b; });


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(4);
var _dropLast = __webpack_require__(320);
var _xdropLast = __webpack_require__(339);


/**
 * Returns a list containing all but the last `n` elements of the given `list`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements of `list` to skip.
 * @param {Array} list The list of elements to consider.
 * @return {Array} A copy of the list with only the first `list.length - n` elements
 * @see R.takeLast, R.drop, R.dropWhile, R.dropLastWhile
 * @example
 *
 *      R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(3, 'ramda');               //=> 'ra'
 */
module.exports = _curry2(_dispatchable([], _xdropLast, _dropLast));


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(4);
var _dropLastWhile = __webpack_require__(321);
var _xdropLastWhile = __webpack_require__(340);


/**
 * Returns a new list excluding all the tailing elements of a given list which
 * satisfy the supplied predicate function. It passes each value from the right
 * to the supplied predicate function, skipping elements until the predicate
 * function returns a `falsy` value. The predicate function is applied to one argument:
 * *(value)*.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} predicate The function to be called on each element
 * @param {Array} list The collection to iterate over.
 * @return {Array} A new array without any trailing elements that return `falsy` values from the `predicate`.
 * @see R.takeLastWhile, R.addIndex, R.drop, R.dropWhile
 * @example
 *
 *      var lteThree = x => x <= 3;
 *
 *      R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]
 */
module.exports = _curry2(_dispatchable([], _xdropLastWhile, _dropLastWhile));


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var _dispatchable = __webpack_require__(4);
var _xdropRepeatsWith = __webpack_require__(144);
var dropRepeatsWith = __webpack_require__(129);
var equals = __webpack_require__(22);


/**
 * Returns a new list without any consecutively repeating elements. `R.equals`
 * is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *     R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]
 */
module.exports = _curry1(_dispatchable([], _xdropRepeatsWith(equals), dropRepeatsWith(equals)));


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(4);
var _xdropWhile = __webpack_require__(341);


/**
 * Returns a new list excluding the leading elements of a given list which
 * satisfy the supplied predicate function. It passes each value to the supplied
 * predicate function, skipping elements while the predicate function returns
 * `true`. The predicate function is applied to one argument: *(value)*.
 *
 * Dispatches to the `dropWhile` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} fn The function called per iteration.
 * @param {Array} list The collection to iterate over.
 * @return {Array} A new array.
 * @see R.takeWhile, R.transduce, R.addIndex
 * @example
 *
 *      var lteTwo = x => x <= 2;
 *
 *      R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]
 */
module.exports = _curry2(_dispatchable(['dropWhile'], _xdropWhile, function dropWhile(pred, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len && pred(list[idx])) {
    idx += 1;
  }
  return Array.prototype.slice.call(list, idx);
}));


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _isFunction = __webpack_require__(59);
var lift = __webpack_require__(64);
var or = __webpack_require__(156);


/**
 * A function wrapping calls to the two functions in an `||` operation,
 * returning the result of the first function if it is truth-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * truth-y value.
 *
 * In addition to functions, `R.either` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f a predicate
 * @param {Function} g another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `||`s their outputs together.
 * @see R.or
 * @example
 *
 *      var gt10 = x => x > 10;
 *      var even = x => x % 2 === 0;
 *      var f = R.either(gt10, even);
 *      f(101); //=> true
 *      f(8); //=> true
 */
module.exports = _curry2(function either(f, g) {
  return _isFunction(f) ?
    function _either() {
      return f.apply(this, arguments) || g.apply(this, arguments);
    } :
    lift(or)(f, g);
});


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);
var equals = __webpack_require__(22);


/**
 * Takes a function and two values in its domain and returns `true` if the
 * values map to the same value in the codomain; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Relation
 * @sig (a -> b) -> a -> a -> Boolean
 * @param {Function} f
 * @param {*} x
 * @param {*} y
 * @return {Boolean}
 * @example
 *
 *      R.eqBy(Math.abs, 5, -5); //=> true
 */
module.exports = _curry3(function eqBy(f, x, y) {
  return equals(f(x), f(y));
});


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);
var equals = __webpack_require__(22);


/**
 * Reports whether two objects have the same value, in `R.equals` terms, for
 * the specified property. Useful as a curried predicate.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig k -> {k: v} -> {k: v} -> Boolean
 * @param {String} prop The name of the property to compare
 * @param {Object} obj1
 * @param {Object} obj2
 * @return {Boolean}
 *
 * @example
 *
 *      var o1 = { a: 1, b: 2, c: 3, d: 4 };
 *      var o2 = { a: 10, b: 20, c: 3, d: 40 };
 *      R.eqProps('a', o1, o2); //=> false
 *      R.eqProps('c', o1, o2); //=> true
 */
module.exports = _curry3(function eqProps(prop, obj1, obj2) {
  return equals(obj1[prop], obj2[prop]);
});


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Creates a new object by recursively evolving a shallow copy of `object`,
 * according to the `transformation` functions. All non-primitive properties
 * are copied by reference.
 *
 * A `transformation` function will not be invoked if its corresponding key
 * does not exist in the evolved object.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {k: (v -> v)} -> {k: v} -> {k: v}
 * @param {Object} transformations The object specifying transformation functions to apply
 *        to the object.
 * @param {Object} object The object to be transformed.
 * @return {Object} The transformed object.
 * @example
 *
 *      var tomato  = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
 *      var transformations = {
 *        firstName: R.trim,
 *        lastName: R.trim, // Will not get invoked.
 *        data: {elapsed: R.add(1), remaining: R.add(-1)}
 *      };
 *      R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
 */
module.exports = _curry2(function evolve(transformations, object) {
  var result = {};
  var transformation, key, type;
  for (key in object) {
    transformation = transformations[key];
    type = typeof transformation;
    result[key] = type === 'function'                 ? transformation(object[key])
                : transformation && type === 'object' ? evolve(transformation, object[key])
                                                      : object[key];
  }
  return result;
});


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(4);
var _xfind = __webpack_require__(343);


/**
 * Returns the first element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * Dispatches to the `find` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn The predicate function used to determine if the element is the
 *        desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
 *      R.find(R.propEq('a', 2))(xs); //=> {a: 2}
 *      R.find(R.propEq('a', 4))(xs); //=> undefined
 */
module.exports = _curry2(_dispatchable(['find'], _xfind, function find(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (fn(list[idx])) {
      return list[idx];
    }
    idx += 1;
  }
}));


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(4);
var _xfindIndex = __webpack_require__(344);


/**
 * Returns the index of the first element of the list which matches the
 * predicate, or `-1` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Number} The index of the element found, or `-1`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
 *      R.findIndex(R.propEq('a', 2))(xs); //=> 1
 *      R.findIndex(R.propEq('a', 4))(xs); //=> -1
 */
module.exports = _curry2(_dispatchable([], _xfindIndex, function findIndex(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (fn(list[idx])) {
      return idx;
    }
    idx += 1;
  }
  return -1;
}));


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(4);
var _xfindLast = __webpack_require__(345);


/**
 * Returns the last element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      R.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}
 *      R.findLast(R.propEq('a', 4))(xs); //=> undefined
 */
module.exports = _curry2(_dispatchable([], _xfindLast, function findLast(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    if (fn(list[idx])) {
      return list[idx];
    }
    idx -= 1;
  }
}));


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(4);
var _xfindLastIndex = __webpack_require__(346);


/**
 * Returns the index of the last element of the list which matches the
 * predicate, or `-1` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Number} The index of the element found, or `-1`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      R.findLastIndex(R.propEq('a', 1))(xs); //=> 1
 *      R.findLastIndex(R.propEq('a', 4))(xs); //=> -1
 */
module.exports = _curry2(_dispatchable([], _xfindLastIndex, function findLastIndex(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    if (fn(list[idx])) {
      return idx;
    }
    idx -= 1;
  }
  return -1;
}));


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var _makeFlat = __webpack_require__(142);


/**
 * Returns a new list by pulling every item out of it (and all its sub-arrays)
 * and putting them in a new array, depth-first.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b]
 * @param {Array} list The array to consider.
 * @return {Array} The flattened list.
 * @see R.unnest
 * @example
 *
 *      R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
 *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 */
module.exports = _curry1(_makeFlat(true));


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

var _checkForMethod = __webpack_require__(44);
var _curry2 = __webpack_require__(0);


/**
 * Iterate over an input `list`, calling a provided function `fn` for each
 * element in the list.
 *
 * `fn` receives one argument: *(value)*.
 *
 * Note: `R.forEach` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.forEach` method. For more
 * details on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
 *
 * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns
 * the original array. In some libraries this function is named `each`.
 *
 * Dispatches to the `forEach` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> *) -> [a] -> [a]
 * @param {Function} fn The function to invoke. Receives one argument, `value`.
 * @param {Array} list The list to iterate over.
 * @return {Array} The original list.
 * @see R.addIndex
 * @example
 *
 *      var printXPlusFive = x => console.log(x + 5);
 *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
 *      // logs 6
 *      // logs 7
 *      // logs 8
 * @symb R.forEach(f, [a, b, c]) = [a, b, c]
 */
module.exports = _curry2(_checkForMethod('forEach', function forEach(fn, list) {
  var len = list.length;
  var idx = 0;
  while (idx < len) {
    fn(list[idx]);
    idx += 1;
  }
  return list;
}));


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var keys = __webpack_require__(20);


/**
 * Iterate over an input `object`, calling a provided function `fn` for each
 * key and value in the object.
 *
 * `fn` receives three argument: *(value, key, obj)*.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Object
 * @sig ((a, String, StrMap a) -> Any) -> StrMap a -> StrMap a
 * @param {Function} fn The function to invoke. Receives three argument, `value`, `key`, `obj`.
 * @param {Object} obj The object to iterate over.
 * @return {Object} The original object.
 * @example
 *
 *      var printKeyConcatValue = (value, key) => console.log(key + ':' + value);
 *      R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2}); //=> {x: 1, y: 2}
 *      // logs x:1
 *      // logs y:2
 * @symb R.forEachObjIndexed(f, {x: a, y: b}) = {x: a, y: b}
 */
module.exports = _curry2(function forEachObjIndexed(fn, obj) {
  var keyList = keys(obj);
  var idx = 0;
  while (idx < keyList.length) {
    var key = keyList[idx];
    fn(obj[key], key, obj);
    idx += 1;
  }
  return obj;
});


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);


/**
 * Creates a new object from a list key-value pairs. If a key appears in
 * multiple pairs, the rightmost pair is included in the object.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [[k,v]] -> {k: v}
 * @param {Array} pairs An array of two-element arrays that will be the keys and values of the output object.
 * @return {Object} The object made by pairing up `keys` and `values`.
 * @see R.toPairs, R.pair
 * @example
 *
 *      R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}
 */
module.exports = _curry1(function fromPairs(pairs) {
  var result = {};
  var idx = 0;
  while (idx < pairs.length) {
    result[pairs[idx][0]] = pairs[idx][1];
    idx += 1;
  }
  return result;
});


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

var _checkForMethod = __webpack_require__(44);
var _curry2 = __webpack_require__(0);
var reduceBy = __webpack_require__(66);

/**
 * Splits a list into sub-lists stored in an object, based on the result of
 * calling a String-returning function on each element, and grouping the
 * results according to values returned.
 *
 * Dispatches to the `groupBy` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> String) -> [a] -> {String: [a]}
 * @param {Function} fn Function :: a -> String
 * @param {Array} list The array to group
 * @return {Object} An object with the output of `fn` for keys, mapped to arrays of elements
 *         that produced that key when passed to `fn`.
 * @see R.transduce
 * @example
 *
 *      var byGrade = R.groupBy(function(student) {
 *        var score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      var students = [{name: 'Abby', score: 84},
 *                      {name: 'Eddy', score: 58},
 *                      // ...
 *                      {name: 'Jack', score: 69}];
 *      byGrade(students);
 *      // {
 *      //   'A': [{name: 'Dianne', score: 99}],
 *      //   'B': [{name: 'Abby', score: 84}]
 *      //   // ...,
 *      //   'F': [{name: 'Eddy', score: 58}]
 *      // }
 */
module.exports = _curry2(_checkForMethod('groupBy', reduceBy(function(acc, item) {
  if (acc == null) {
    acc = [];
  }
  acc.push(item);
  return acc;
}, null)));


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);

/**
 * Takes a list and returns a list of lists where each sublist's elements are
 * all "equal" according to the provided equality function.
 *
 * @func
 * @memberOf R
 * @since v0.21.0
 * @category List
 * @sig ((a, a) → Boolean) → [a] → [[a]]
 * @param {Function} fn Function for determining whether two given (adjacent)
 *        elements should be in the same group
 * @param {Array} list The array to group. Also accepts a string, which will be
 *        treated as a list of characters.
 * @return {List} A list that contains sublists of equal elements,
 *         whose concatenations are equal to the original list.
 * @example
 *
 * R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0], [1, 1], [2], [3], [5], [8], [13], [21]]
 *
 * R.groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0], [1, 1], [2], [3, 5], [8], [13, 21]]
 *
 * R.groupWith(R.eqBy(isVowel), 'aestiou')
 * //=> ['ae', 'st', 'iou']
 */
module.exports = _curry2(function(fn, list) {
  var res = [];
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    var nextidx = idx + 1;
    while (nextidx < len && fn(list[idx], list[nextidx])) {
      nextidx += 1;
    }
    res.push(list.slice(idx, nextidx));
    idx = nextidx;
  }
  return res;
});


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns `true` if the first argument is greater than the second; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @see R.lt
 * @example
 *
 *      R.gt(2, 1); //=> true
 *      R.gt(2, 2); //=> false
 *      R.gt(2, 3); //=> false
 *      R.gt('a', 'z'); //=> false
 *      R.gt('z', 'a'); //=> true
 */
module.exports = _curry2(function gt(a, b) { return a > b; });


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns `true` if the first argument is greater than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.lte
 * @example
 *
 *      R.gte(2, 1); //=> true
 *      R.gte(2, 2); //=> true
 *      R.gte(2, 3); //=> false
 *      R.gte('a', 'z'); //=> false
 *      R.gte('z', 'a'); //=> true
 */
module.exports = _curry2(function gte(a, b) { return a >= b; });


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _has = __webpack_require__(11);


/**
 * Returns whether or not an object has an own property with the specified name
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      var hasName = R.has('name');
 *      hasName({name: 'alice'});   //=> true
 *      hasName({name: 'bob'});     //=> true
 *      hasName({});                //=> false
 *
 *      var point = {x: 0, y: 0};
 *      var pointHas = R.has(R.__, point);
 *      pointHas('x');  //=> true
 *      pointHas('y');  //=> true
 *      pointHas('z');  //=> false
 */
module.exports = _curry2(_has);


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns whether or not an object or its prototype chain has a property with
 * the specified name
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      function Rectangle(width, height) {
 *        this.width = width;
 *        this.height = height;
 *      }
 *      Rectangle.prototype.area = function() {
 *        return this.width * this.height;
 *      };
 *
 *      var square = new Rectangle(2, 2);
 *      R.hasIn('width', square);  //=> true
 *      R.hasIn('area', square);  //=> true
 */
module.exports = _curry2(function hasIn(prop, obj) {
  return prop in obj;
});


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

var nth = __webpack_require__(47);


/**
 * Returns the first element of the given list or string. In some libraries
 * this function is named `first`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {Array|String} list
 * @return {*}
 * @see R.tail, R.init, R.last
 * @example
 *
 *      R.head(['fi', 'fo', 'fum']); //=> 'fi'
 *      R.head([]); //=> undefined
 *
 *      R.head('abc'); //=> 'a'
 *      R.head(''); //=> ''
 */
module.exports = nth(0);


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);
var curryN = __webpack_require__(8);


/**
 * Creates a function that will process either the `onTrue` or the `onFalse`
 * function depending upon the result of the `condition` predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
 * @param {Function} condition A predicate function
 * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
 * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
 * @return {Function} A new unary function that will process either the `onTrue` or the `onFalse`
 *                    function depending upon the result of the `condition` predicate.
 * @see R.unless, R.when
 * @example
 *
 *      var incCount = R.ifElse(
 *        R.has('count'),
 *        R.over(R.lensProp('count'), R.inc),
 *        R.assoc('count', 1)
 *      );
 *      incCount({});           //=> { count: 1 }
 *      incCount({ count: 1 }); //=> { count: 2 }
 */
module.exports = _curry3(function ifElse(condition, onTrue, onFalse) {
  return curryN(Math.max(condition.length, onTrue.length, onFalse.length),
    function _ifElse() {
      return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
    }
  );
});


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

var add = __webpack_require__(54);


/**
 * Increments its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n + 1
 * @see R.dec
 * @example
 *
 *      R.inc(42); //=> 43
 */
module.exports = add(1);


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

var reduceBy = __webpack_require__(66);


/**
 * Given a function that generates a key, turns a list of objects into an
 * object indexing the objects by the given key. Note that if multiple
 * objects generate the same value for the indexing key only the last value
 * will be included in the generated object.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (a -> String) -> [{k: v}] -> {k: {k: v}}
 * @param {Function} fn Function :: a -> String
 * @param {Array} array The array of objects to index
 * @return {Object} An object indexing each array element by the given property.
 * @example
 *
 *      var list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
 *      R.indexBy(R.prop('id'), list);
 *      //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
 */
module.exports = reduceBy(function(acc, elem) { return elem; }, null);


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _indexOf = __webpack_require__(137);
var _isArray = __webpack_require__(25);


/**
 * Returns the position of the first occurrence of an item in an array, or -1
 * if the item is not included in the array. `R.equals` is used to determine
 * equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @see R.lastIndexOf
 * @example
 *
 *      R.indexOf(3, [1,2,3,4]); //=> 2
 *      R.indexOf(10, [1,2,3,4]); //=> -1
 */
module.exports = _curry2(function indexOf(target, xs) {
  return typeof xs.indexOf === 'function' && !_isArray(xs) ?
    xs.indexOf(target) :
    _indexOf(xs, target, 0);
});


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

var slice = __webpack_require__(30);


/**
 * Returns all but the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.last, R.head, R.tail
 * @example
 *
 *      R.init([1, 2, 3]);  //=> [1, 2]
 *      R.init([1, 2]);     //=> [1]
 *      R.init([1]);        //=> []
 *      R.init([]);         //=> []
 *
 *      R.init('abc');  //=> 'ab'
 *      R.init('ab');   //=> 'a'
 *      R.init('a');    //=> ''
 *      R.init('');     //=> ''
 */
module.exports = slice(0, -1);


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);


/**
 * Inserts the supplied element into the list, at index `index`. _Note that
 * this is not destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.2.2
 * @category List
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} index The position to insert the element
 * @param {*} elt The element to insert into the Array
 * @param {Array} list The list to insert into
 * @return {Array} A new Array with `elt` inserted at `index`.
 * @example
 *
 *      R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]
 */
module.exports = _curry3(function insert(idx, elt, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  var result = Array.prototype.slice.call(list, 0);
  result.splice(idx, 0, elt);
  return result;
});


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);


/**
 * Inserts the sub-list into the list, at index `index`. _Note that this is not
 * destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig Number -> [a] -> [a] -> [a]
 * @param {Number} index The position to insert the sub-list
 * @param {Array} elts The sub-list to insert into the Array
 * @param {Array} list The list to insert the sub-list into
 * @return {Array} A new Array with `elts` inserted starting at `index`.
 * @example
 *
 *      R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]
 */
module.exports = _curry3(function insertAll(idx, elts, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  return [].concat(Array.prototype.slice.call(list, 0, idx),
                   elts,
                   Array.prototype.slice.call(list, idx));
});


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

var _contains = __webpack_require__(29);


// A simple Set type that honours R.equals semantics
module.exports = (function() {
  function _Set() {
    /* globals Set */
    this._nativeSet = typeof Set === 'function' ? new Set() : null;
    this._items = {};
  }

  // until we figure out why jsdoc chokes on this
  // @param item The item to add to the Set
  // @returns {boolean} true if the item did not exist prior, otherwise false
  //
  _Set.prototype.add = function(item) {
    return !hasOrAdd(item, true, this);
  };

  //
  // @param item The item to check for existence in the Set
  // @returns {boolean} true if the item exists in the Set, otherwise false
  //
  _Set.prototype.has = function(item) {
    return hasOrAdd(item, false, this);
  };

  //
  // Combines the logic for checking whether an item is a member of the set and
  // for adding a new item to the set.
  //
  // @param item       The item to check or add to the Set instance.
  // @param shouldAdd  If true, the item will be added to the set if it doesn't
  //                   already exist.
  // @param set        The set instance to check or add to.
  // @return {boolean} true if the item already existed, otherwise false.
  //
  function hasOrAdd(item, shouldAdd, set) {
    var type = typeof item;
    var prevSize, newSize;
    switch (type) {
      case 'string':
      case 'number':
        // distinguish between +0 and -0
        if (item === 0 && 1 / item === -Infinity) {
          if (set._items['-0']) {
            return true;
          } else {
            if (shouldAdd) {
              set._items['-0'] = true;
            }
            return false;
          }
        }
        // these types can all utilise the native Set
        if (set._nativeSet !== null) {
          if (shouldAdd) {
            prevSize = set._nativeSet.size;
            set._nativeSet.add(item);
            newSize = set._nativeSet.size;
            return newSize === prevSize;
          } else {
            return set._nativeSet.has(item);
          }
        } else {
          if (!(type in set._items)) {
            if (shouldAdd) {
              set._items[type] = {};
              set._items[type][item] = true;
            }
            return false;
          } else if (item in set._items[type]) {
            return true;
          } else {
            if (shouldAdd) {
              set._items[type][item] = true;
            }
            return false;
          }
        }

      case 'boolean':
        // set._items['boolean'] holds a two element array
        // representing [ falseExists, trueExists ]
        if (type in set._items) {
          var bIdx = item ? 1 : 0;
          if (set._items[type][bIdx]) {
            return true;
          } else {
            if (shouldAdd) {
              set._items[type][bIdx] = true;
            }
            return false;
          }
        } else {
          if (shouldAdd) {
            set._items[type] = item ? [false, true] : [true, false];
          }
          return false;
        }

      case 'function':
        // compare functions for reference equality
        if (set._nativeSet !== null) {
          if (shouldAdd) {
            prevSize = set._nativeSet.size;
            set._nativeSet.add(item);
            newSize = set._nativeSet.size;
            return newSize === prevSize;
          } else {
            return set._nativeSet.has(item);
          }
        } else {
          if (!(type in set._items)) {
            if (shouldAdd) {
              set._items[type] = [item];
            }
            return false;
          }
          if (!_contains(item, set._items[type])) {
            if (shouldAdd) {
              set._items[type].push(item);
            }
            return false;
          }
          return true;
        }

      case 'undefined':
        if (set._items[type]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type] = true;
          }
          return false;
        }

      case 'object':
        if (item === null) {
          if (!set._items['null']) {
            if (shouldAdd) {
              set._items['null'] = true;
            }
            return false;
          }
          return true;
        }
      /* falls through */
      default:
        // reduce the search size of heterogeneous sets by creating buckets
        // for each type.
        type = Object.prototype.toString.call(item);
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = [item];
          }
          return false;
        }
        // scan through all previously applied items
        if (!_contains(item, set._items[type])) {
          if (shouldAdd) {
            set._items[type].push(item);
          }
          return false;
        }
        return true;
    }
  }
  return _Set;
}());


/***/ }),
/* 318 */
/***/ (function(module, exports) {

module.exports = function _aperture(n, list) {
  var idx = 0;
  var limit = list.length - (n - 1);
  var acc = new Array(limit >= 0 ? limit : 0);
  while (idx < limit) {
    acc[idx] = Array.prototype.slice.call(list, idx, idx + n);
    idx += 1;
  }
  return acc;
};


/***/ }),
/* 319 */
/***/ (function(module, exports) {

module.exports = function _arrayFromIterator(iter) {
  var list = [];
  var next;
  while (!(next = iter.next()).done) {
    list.push(next.value);
  }
  return list;
};


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

var take = __webpack_require__(166);

module.exports = function dropLast(n, xs) {
  return take(n < xs.length ? xs.length - n : 0, xs);
};


/***/ }),
/* 321 */
/***/ (function(module, exports) {

module.exports = function dropLastWhile(pred, list) {
  var idx = list.length - 1;
  while (idx >= 0 && pred(list[idx])) {
    idx -= 1;
  }
  return Array.prototype.slice.call(list, 0, idx + 1);
};


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

var _arrayFromIterator = __webpack_require__(319);
var _functionName = __webpack_require__(325);
var _has = __webpack_require__(11);
var identical = __webpack_require__(131);
var keys = __webpack_require__(20);
var type = __webpack_require__(95);


module.exports = function _equals(a, b, stackA, stackB) {
  if (identical(a, b)) {
    return true;
  }

  if (type(a) !== type(b)) {
    return false;
  }

  if (a == null || b == null) {
    return false;
  }

  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) &&
           typeof b.equals === 'function' && b.equals(a);
  }

  switch (type(a)) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' &&
          _functionName(a.constructor) === 'Promise') {
        return a === b;
      }
      break;
    case 'Boolean':
    case 'Number':
    case 'String':
      if (!(typeof a === typeof b && identical(a.valueOf(), b.valueOf()))) {
        return false;
      }
      break;
    case 'Date':
      if (!identical(a.valueOf(), b.valueOf())) {
        return false;
      }
      break;
    case 'Error':
      return a.name === b.name && a.message === b.message;
    case 'RegExp':
      if (!(a.source === b.source &&
            a.global === b.global &&
            a.ignoreCase === b.ignoreCase &&
            a.multiline === b.multiline &&
            a.sticky === b.sticky &&
            a.unicode === b.unicode)) {
        return false;
      }
      break;
    case 'Map':
    case 'Set':
      if (!_equals(_arrayFromIterator(a.entries()), _arrayFromIterator(b.entries()), stackA, stackB)) {
        return false;
      }
      break;
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
      break;
    case 'ArrayBuffer':
      break;
    default:
      // Values of other types are only equal if identical.
      return false;
  }

  var keysA = keys(a);
  if (keysA.length !== keys(b).length) {
    return false;
  }

  var idx = stackA.length - 1;
  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }
    idx -= 1;
  }

  stackA.push(a);
  stackB.push(b);
  idx = keysA.length - 1;
  while (idx >= 0) {
    var key = keysA[idx];
    if (!(_has(key, b) && _equals(b[key], a[key], stackA, stackB))) {
      return false;
    }
    idx -= 1;
  }
  stackA.pop();
  stackB.pop();
  return true;
};


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

var _forceReduced = __webpack_require__(324);
var _reduce = __webpack_require__(18);
var _xfBase = __webpack_require__(7);
var isArrayLike = __webpack_require__(46);

module.exports = (function() {
  var preservingReduced = function(xf) {
    return {
      '@@transducer/init': _xfBase.init,
      '@@transducer/result': function(result) {
        return xf['@@transducer/result'](result);
      },
      '@@transducer/step': function(result, input) {
        var ret = xf['@@transducer/step'](result, input);
        return ret['@@transducer/reduced'] ? _forceReduced(ret) : ret;
      }
    };
  };

  return function _xcat(xf) {
    var rxf = preservingReduced(xf);
    return {
      '@@transducer/init': _xfBase.init,
      '@@transducer/result': function(result) {
        return rxf['@@transducer/result'](result);
      },
      '@@transducer/step': function(result, input) {
        return !isArrayLike(input) ? _reduce(rxf, result, [input]) : _reduce(rxf, result, input);
      }
    };
  };
}());


/***/ }),
/* 324 */
/***/ (function(module, exports) {

module.exports = function _forceReduced(x) {
  return {
    '@@transducer/value': x,
    '@@transducer/reduced': true
  };
};


/***/ }),
/* 325 */
/***/ (function(module, exports) {

module.exports = function _functionName(f) {
  // String(x => x) evaluates to "x => x", so the pattern may not match.
  var match = String(f).match(/^function (\w*)/);
  return match == null ? '' : match[1];
};


/***/ }),
/* 326 */
/***/ (function(module, exports) {

module.exports = function _isRegExp(x) {
  return Object.prototype.toString.call(x) === '[object RegExp]';
};


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

var _has = __webpack_require__(11);

// Based on https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
module.exports = function _objectAssign(target) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var output = Object(target);
  var idx = 1;
  var length = arguments.length;
  while (idx < length) {
    var source = arguments[idx];
    if (source != null) {
      for (var nextKey in source) {
        if (_has(nextKey, source)) {
          output[nextKey] = source[nextKey];
        }
      }
    }
    idx += 1;
  }
  return output;
};


/***/ }),
/* 328 */
/***/ (function(module, exports) {

module.exports = function _of(x) { return [x]; };


/***/ }),
/* 329 */
/***/ (function(module, exports) {

module.exports = function _pipe(f, g) {
  return function() {
    return g.call(this, f.apply(this, arguments));
  };
};


/***/ }),
/* 330 */
/***/ (function(module, exports) {

module.exports = function _pipeP(f, g) {
  return function() {
    var ctx = this;
    return f.apply(ctx, arguments).then(function(x) {
      return g.call(ctx, x);
    });
  };
};


/***/ }),
/* 331 */
/***/ (function(module, exports) {

module.exports = function _quote(s) {
  var escaped = s
    .replace(/\\/g, '\\\\')
    .replace(/[\b]/g, '\\b')  // \b matches word boundary; [\b] matches backspace
    .replace(/\f/g, '\\f')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t')
    .replace(/\v/g, '\\v')
    .replace(/\0/g, '\\0');

  return '"' + escaped.replace(/"/g, '\\"') + '"';
};


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

var _assign = __webpack_require__(89);
var _identity = __webpack_require__(91);
var _isTransformer = __webpack_require__(92);
var isArrayLike = __webpack_require__(46);
var objOf = __webpack_require__(155);


module.exports = (function() {
  var _stepCatArray = {
    '@@transducer/init': Array,
    '@@transducer/step': function(xs, x) {
      xs.push(x);
      return xs;
    },
    '@@transducer/result': _identity
  };
  var _stepCatString = {
    '@@transducer/init': String,
    '@@transducer/step': function(a, b) { return a + b; },
    '@@transducer/result': _identity
  };
  var _stepCatObject = {
    '@@transducer/init': Object,
    '@@transducer/step': function(result, input) {
      return _assign(
        result,
        isArrayLike(input) ? objOf(input[0], input[1]) : input
      );
    },
    '@@transducer/result': _identity
  };

  return function _stepCat(obj) {
    if (_isTransformer(obj)) {
      return obj;
    }
    if (isArrayLike(obj)) {
      return _stepCatArray;
    }
    if (typeof obj === 'string') {
      return _stepCatString;
    }
    if (typeof obj === 'object') {
      return _stepCatObject;
    }
    throw new Error('Cannot create transformer for ' + obj);
  };
}());


/***/ }),
/* 333 */
/***/ (function(module, exports) {

/**
 * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
 */
module.exports = (function() {
  var pad = function pad(n) { return (n < 10 ? '0' : '') + n; };

  return typeof Date.prototype.toISOString === 'function' ?
    function _toISOString(d) {
      return d.toISOString();
    } :
    function _toISOString(d) {
      return (
        d.getUTCFullYear() + '-' +
        pad(d.getUTCMonth() + 1) + '-' +
        pad(d.getUTCDate()) + 'T' +
        pad(d.getUTCHours()) + ':' +
        pad(d.getUTCMinutes()) + ':' +
        pad(d.getUTCSeconds()) + '.' +
        (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z'
      );
    };
}());


/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

var _contains = __webpack_require__(29);
var _map = __webpack_require__(62);
var _quote = __webpack_require__(331);
var _toISOString = __webpack_require__(333);
var keys = __webpack_require__(20);
var reject = __webpack_require__(67);


module.exports = function _toString(x, seen) {
  var recur = function recur(y) {
    var xs = seen.concat([x]);
    return _contains(y, xs) ? '<Circular>' : _toString(y, xs);
  };

  //  mapPairs :: (Object, [String]) -> [String]
  var mapPairs = function(obj, keys) {
    return _map(function(k) { return _quote(k) + ': ' + recur(obj[k]); }, keys.slice().sort());
  };

  switch (Object.prototype.toString.call(x)) {
    case '[object Arguments]':
      return '(function() { return arguments; }(' + _map(recur, x).join(', ') + '))';
    case '[object Array]':
      return '[' + _map(recur, x).concat(mapPairs(x, reject(function(k) { return /^\d+$/.test(k); }, keys(x)))).join(', ') + ']';
    case '[object Boolean]':
      return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();
    case '[object Date]':
      return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) + ')';
    case '[object Null]':
      return 'null';
    case '[object Number]':
      return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);
    case '[object String]':
      return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : _quote(x);
    case '[object Undefined]':
      return 'undefined';
    default:
      if (typeof x.toString === 'function') {
        var repr = x.toString();
        if (repr !== '[object Object]') {
          return repr;
        }
      }
      return '{' + mapPairs(x, keys(x)).join(', ') + '}';
  }
};


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _reduced = __webpack_require__(26);
var _xfBase = __webpack_require__(7);


module.exports = (function() {
  function XAll(f, xf) {
    this.xf = xf;
    this.f = f;
    this.all = true;
  }
  XAll.prototype['@@transducer/init'] = _xfBase.init;
  XAll.prototype['@@transducer/result'] = function(result) {
    if (this.all) {
      result = this.xf['@@transducer/step'](result, true);
    }
    return this.xf['@@transducer/result'](result);
  };
  XAll.prototype['@@transducer/step'] = function(result, input) {
    if (!this.f(input)) {
      this.all = false;
      result = _reduced(this.xf['@@transducer/step'](result, false));
    }
    return result;
  };

  return _curry2(function _xall(f, xf) { return new XAll(f, xf); });
}());


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(19);
var _curry2 = __webpack_require__(0);
var _xfBase = __webpack_require__(7);


module.exports = (function() {
  function XAperture(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XAperture.prototype['@@transducer/init'] = _xfBase.init;
  XAperture.prototype['@@transducer/result'] = function(result) {
    this.acc = null;
    return this.xf['@@transducer/result'](result);
  };
  XAperture.prototype['@@transducer/step'] = function(result, input) {
    this.store(input);
    return this.full ? this.xf['@@transducer/step'](result, this.getCopy()) : result;
  };
  XAperture.prototype.store = function(input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };
  XAperture.prototype.getCopy = function() {
    return _concat(Array.prototype.slice.call(this.acc, this.pos),
                   Array.prototype.slice.call(this.acc, 0, this.pos));
  };

  return _curry2(function _xaperture(n, xf) { return new XAperture(n, xf); });
}());


/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _flatCat = __webpack_require__(323);
var map = __webpack_require__(15);


module.exports = _curry2(function _xchain(f, xf) {
  return map(f, _flatCat(xf));
});


/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _xfBase = __webpack_require__(7);


module.exports = (function() {
  function XDrop(n, xf) {
    this.xf = xf;
    this.n = n;
  }
  XDrop.prototype['@@transducer/init'] = _xfBase.init;
  XDrop.prototype['@@transducer/result'] = _xfBase.result;
  XDrop.prototype['@@transducer/step'] = function(result, input) {
    if (this.n > 0) {
      this.n -= 1;
      return result;
    }
    return this.xf['@@transducer/step'](result, input);
  };

  return _curry2(function _xdrop(n, xf) { return new XDrop(n, xf); });
}());


/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _xfBase = __webpack_require__(7);


module.exports = (function() {
  function XDropLast(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XDropLast.prototype['@@transducer/init'] = _xfBase.init;
  XDropLast.prototype['@@transducer/result'] =  function(result) {
    this.acc = null;
    return this.xf['@@transducer/result'](result);
  };
  XDropLast.prototype['@@transducer/step'] = function(result, input) {
    if (this.full) {
      result = this.xf['@@transducer/step'](result, this.acc[this.pos]);
    }
    this.store(input);
    return result;
  };
  XDropLast.prototype.store = function(input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };

  return _curry2(function _xdropLast(n, xf) { return new XDropLast(n, xf); });
}());


/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _reduce = __webpack_require__(18);
var _xfBase = __webpack_require__(7);

module.exports = (function() {
  function XDropLastWhile(fn, xf) {
    this.f = fn;
    this.retained = [];
    this.xf = xf;
  }
  XDropLastWhile.prototype['@@transducer/init'] = _xfBase.init;
  XDropLastWhile.prototype['@@transducer/result'] = function(result) {
    this.retained = null;
    return this.xf['@@transducer/result'](result);
  };
  XDropLastWhile.prototype['@@transducer/step'] = function(result, input) {
    return this.f(input) ? this.retain(result, input)
                         : this.flush(result, input);
  };
  XDropLastWhile.prototype.flush = function(result, input) {
    result = _reduce(
      this.xf['@@transducer/step'],
      result,
      this.retained
    );
    this.retained = [];
    return this.xf['@@transducer/step'](result, input);
  };
  XDropLastWhile.prototype.retain = function(result, input) {
    this.retained.push(input);
    return result;
  };

  return _curry2(function _xdropLastWhile(fn, xf) { return new XDropLastWhile(fn, xf); });
}());


/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _xfBase = __webpack_require__(7);


module.exports = (function() {
  function XDropWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XDropWhile.prototype['@@transducer/init'] = _xfBase.init;
  XDropWhile.prototype['@@transducer/result'] = _xfBase.result;
  XDropWhile.prototype['@@transducer/step'] = function(result, input) {
    if (this.f) {
      if (this.f(input)) {
        return result;
      }
      this.f = null;
    }
    return this.xf['@@transducer/step'](result, input);
  };

  return _curry2(function _xdropWhile(f, xf) { return new XDropWhile(f, xf); });
}());


/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _xfBase = __webpack_require__(7);


module.exports = (function() {
  function XFilter(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFilter.prototype['@@transducer/init'] = _xfBase.init;
  XFilter.prototype['@@transducer/result'] = _xfBase.result;
  XFilter.prototype['@@transducer/step'] = function(result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
  };

  return _curry2(function _xfilter(f, xf) { return new XFilter(f, xf); });
}());


/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _reduced = __webpack_require__(26);
var _xfBase = __webpack_require__(7);


module.exports = (function() {
  function XFind(f, xf) {
    this.xf = xf;
    this.f = f;
    this.found = false;
  }
  XFind.prototype['@@transducer/init'] = _xfBase.init;
  XFind.prototype['@@transducer/result'] = function(result) {
    if (!this.found) {
      result = this.xf['@@transducer/step'](result, void 0);
    }
    return this.xf['@@transducer/result'](result);
  };
  XFind.prototype['@@transducer/step'] = function(result, input) {
    if (this.f(input)) {
      this.found = true;
      result = _reduced(this.xf['@@transducer/step'](result, input));
    }
    return result;
  };

  return _curry2(function _xfind(f, xf) { return new XFind(f, xf); });
}());


/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _reduced = __webpack_require__(26);
var _xfBase = __webpack_require__(7);


module.exports = (function() {
  function XFindIndex(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.found = false;
  }
  XFindIndex.prototype['@@transducer/init'] = _xfBase.init;
  XFindIndex.prototype['@@transducer/result'] = function(result) {
    if (!this.found) {
      result = this.xf['@@transducer/step'](result, -1);
    }
    return this.xf['@@transducer/result'](result);
  };
  XFindIndex.prototype['@@transducer/step'] = function(result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.found = true;
      result = _reduced(this.xf['@@transducer/step'](result, this.idx));
    }
    return result;
  };

  return _curry2(function _xfindIndex(f, xf) { return new XFindIndex(f, xf); });
}());


/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _xfBase = __webpack_require__(7);


module.exports = (function() {
  function XFindLast(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFindLast.prototype['@@transducer/init'] = _xfBase.init;
  XFindLast.prototype['@@transducer/result'] = function(result) {
    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.last));
  };
  XFindLast.prototype['@@transducer/step'] = function(result, input) {
    if (this.f(input)) {
      this.last = input;
    }
    return result;
  };

  return _curry2(function _xfindLast(f, xf) { return new XFindLast(f, xf); });
}());


/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _xfBase = __webpack_require__(7);


module.exports = (function() {
  function XFindLastIndex(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.lastIdx = -1;
  }
  XFindLastIndex.prototype['@@transducer/init'] = _xfBase.init;
  XFindLastIndex.prototype['@@transducer/result'] = function(result) {
    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.lastIdx));
  };
  XFindLastIndex.prototype['@@transducer/step'] = function(result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.lastIdx = this.idx;
    }
    return result;
  };

  return _curry2(function _xfindLastIndex(f, xf) { return new XFindLastIndex(f, xf); });
}());


/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _xfBase = __webpack_require__(7);


module.exports = (function() {
  function XMap(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XMap.prototype['@@transducer/init'] = _xfBase.init;
  XMap.prototype['@@transducer/result'] = _xfBase.result;
  XMap.prototype['@@transducer/step'] = function(result, input) {
    return this.xf['@@transducer/step'](result, this.f(input));
  };

  return _curry2(function _xmap(f, xf) { return new XMap(f, xf); });
}());


/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

var _curryN = __webpack_require__(58);
var _has = __webpack_require__(11);
var _xfBase = __webpack_require__(7);


module.exports = (function() {
  function XReduceBy(valueFn, valueAcc, keyFn, xf) {
    this.valueFn = valueFn;
    this.valueAcc = valueAcc;
    this.keyFn = keyFn;
    this.xf = xf;
    this.inputs = {};
  }
  XReduceBy.prototype['@@transducer/init'] = _xfBase.init;
  XReduceBy.prototype['@@transducer/result'] = function(result) {
    var key;
    for (key in this.inputs) {
      if (_has(key, this.inputs)) {
        result = this.xf['@@transducer/step'](result, this.inputs[key]);
        if (result['@@transducer/reduced']) {
          result = result['@@transducer/value'];
          break;
        }
      }
    }
    this.inputs = null;
    return this.xf['@@transducer/result'](result);
  };
  XReduceBy.prototype['@@transducer/step'] = function(result, input) {
    var key = this.keyFn(input);
    this.inputs[key] = this.inputs[key] || [key, this.valueAcc];
    this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
    return result;
  };

  return _curryN(4, [],
                 function _xreduceBy(valueFn, valueAcc, keyFn, xf) {
                   return new XReduceBy(valueFn, valueAcc, keyFn, xf);
                 });
}());


/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _reduced = __webpack_require__(26);
var _xfBase = __webpack_require__(7);

module.exports = (function() {
  function XTake(n, xf) {
    this.xf = xf;
    this.n = n;
    this.i = 0;
  }
  XTake.prototype['@@transducer/init'] = _xfBase.init;
  XTake.prototype['@@transducer/result'] = _xfBase.result;
  XTake.prototype['@@transducer/step'] = function(result, input) {
    this.i += 1;
    var ret = this.n === 0 ? result : this.xf['@@transducer/step'](result, input);
    return this.i >= this.n ? _reduced(ret) : ret;
  };

  return _curry2(function _xtake(n, xf) { return new XTake(n, xf); });
}());


/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _reduced = __webpack_require__(26);
var _xfBase = __webpack_require__(7);


module.exports = (function() {
  function XTakeWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTakeWhile.prototype['@@transducer/init'] = _xfBase.init;
  XTakeWhile.prototype['@@transducer/result'] = _xfBase.result;
  XTakeWhile.prototype['@@transducer/step'] = function(result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : _reduced(result);
  };

  return _curry2(function _xtakeWhile(f, xf) { return new XTakeWhile(f, xf); });
}());


/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

var _contains = __webpack_require__(29);
var _curry2 = __webpack_require__(0);
var _filter = __webpack_require__(136);
var flip = __webpack_require__(57);
var uniq = __webpack_require__(96);


/**
 * Combines two lists into a set (i.e. no duplicates) composed of those
 * elements common to both lists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The list of elements found in both `list1` and `list2`.
 * @see R.intersectionWith
 * @example
 *
 *      R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
 */
module.exports = _curry2(function intersection(list1, list2) {
  var lookupList, filteredList;
  if (list1.length > list2.length) {
    lookupList = list1;
    filteredList = list2;
  } else {
    lookupList = list2;
    filteredList = list1;
  }
  return uniq(_filter(flip(_contains)(lookupList), filteredList));
});


/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

var _containsWith = __webpack_require__(90);
var _curry3 = __webpack_require__(3);
var uniqWith = __webpack_require__(97);


/**
 * Combines two lists into a set (i.e. no duplicates) composed of those
 * elements common to both lists. Duplication is determined according to the
 * value returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate function that determines whether
 *        the two supplied elements are equal.
 * @param {Array} list1 One list of items to compare
 * @param {Array} list2 A second list of items to compare
 * @return {Array} A new list containing those elements common to both lists.
 * @see R.intersection
 * @example
 *
 *      var buffaloSpringfield = [
 *        {id: 824, name: 'Richie Furay'},
 *        {id: 956, name: 'Dewey Martin'},
 *        {id: 313, name: 'Bruce Palmer'},
 *        {id: 456, name: 'Stephen Stills'},
 *        {id: 177, name: 'Neil Young'}
 *      ];
 *      var csny = [
 *        {id: 204, name: 'David Crosby'},
 *        {id: 456, name: 'Stephen Stills'},
 *        {id: 539, name: 'Graham Nash'},
 *        {id: 177, name: 'Neil Young'}
 *      ];
 *
 *      R.intersectionWith(R.eqBy(R.prop('id')), buffaloSpringfield, csny);
 *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
 */
module.exports = _curry3(function intersectionWith(pred, list1, list2) {
  var lookupList, filteredList;
  if (list1.length > list2.length) {
    lookupList = list1;
    filteredList = list2;
  } else {
    lookupList = list2;
    filteredList = list1;
  }
  var results = [];
  var idx = 0;
  while (idx < filteredList.length) {
    if (_containsWith(pred, filteredList[idx], lookupList)) {
      results[results.length] = filteredList[idx];
    }
    idx += 1;
  }
  return uniqWith(pred, results);
});


/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

var _checkForMethod = __webpack_require__(44);
var _curry2 = __webpack_require__(0);


/**
 * Creates a new list with the separator interposed between elements.
 *
 * Dispatches to the `intersperse` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} separator The element to add to the list.
 * @param {Array} list The list to be interposed.
 * @return {Array} The new list.
 * @example
 *
 *      R.intersperse('n', ['ba', 'a', 'a']); //=> ['ba', 'n', 'a', 'n', 'a']
 */
module.exports = _curry2(_checkForMethod('intersperse', function intersperse(separator, list) {
  var out = [];
  var idx = 0;
  var length = list.length;
  while (idx < length) {
    if (idx === length - 1) {
      out.push(list[idx]);
    } else {
      out.push(list[idx], separator);
    }
    idx += 1;
  }
  return out;
}));


/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

var _clone = __webpack_require__(132);
var _curry3 = __webpack_require__(3);
var _isTransformer = __webpack_require__(92);
var _reduce = __webpack_require__(18);
var _stepCat = __webpack_require__(332);


/**
 * Transforms the items of the list with the transducer and appends the
 * transformed items to the accumulator using an appropriate iterator function
 * based on the accumulator type.
 *
 * The accumulator can be an array, string, object or a transformer. Iterated
 * items will be appended to arrays and concatenated to strings. Objects will
 * be merged directly or 2-item arrays will be merged as key, value pairs.
 *
 * The accumulator can also be a transformer object that provides a 2-arity
 * reducing iterator function, step, 0-arity initial value function, init, and
 * 1-arity result extraction function result. The step function is used as the
 * iterator function in reduce. The result function is used to convert the
 * final accumulator into the return type and in most cases is R.identity. The
 * init function is used to provide the initial accumulator.
 *
 * The iteration is performed with R.reduce after initializing the transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig a -> (b -> b) -> [c] -> a
 * @param {*} acc The initial accumulator value.
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
 *
 *      R.into([], transducer, numbers); //=> [2, 3]
 *
 *      var intoArray = R.into([]);
 *      intoArray(transducer, numbers); //=> [2, 3]
 */
module.exports = _curry3(function into(acc, xf, list) {
  return _isTransformer(acc) ?
    _reduce(xf(acc), acc['@@transducer/init'](), list) :
    _reduce(xf(_stepCat(acc)), _clone(acc, [], [], false), list);
});


/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var _has = __webpack_require__(11);
var keys = __webpack_require__(20);


/**
 * Same as R.invertObj, however this accounts for objects with duplicate values
 * by putting the values into an array.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {s: x} -> {x: [ s, ... ]}
 * @param {Object} obj The object or array to invert
 * @return {Object} out A new object with keys
 * in an array.
 * @example
 *
 *      var raceResultsByFirstName = {
 *        first: 'alice',
 *        second: 'jake',
 *        third: 'alice',
 *      };
 *      R.invert(raceResultsByFirstName);
 *      //=> { 'alice': ['first', 'third'], 'jake':['second'] }
 */
module.exports = _curry1(function invert(obj) {
  var props = keys(obj);
  var len = props.length;
  var idx = 0;
  var out = {};

  while (idx < len) {
    var key = props[idx];
    var val = obj[key];
    var list = _has(val, out) ? out[val] : (out[val] = []);
    list[list.length] = key;
    idx += 1;
  }
  return out;
});


/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var keys = __webpack_require__(20);


/**
 * Returns a new object with the keys of the given object as values, and the
 * values of the given object, which are coerced to strings, as keys. Note
 * that the last key found is preferred when handling the same value.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {s: x} -> {x: s}
 * @param {Object} obj The object or array to invert
 * @return {Object} out A new object
 * @example
 *
 *      var raceResults = {
 *        first: 'alice',
 *        second: 'jake'
 *      };
 *      R.invertObj(raceResults);
 *      //=> { 'alice': 'first', 'jake':'second' }
 *
 *      // Alternatively:
 *      var raceResults = ['alice', 'jake'];
 *      R.invertObj(raceResults);
 *      //=> { 'alice': '0', 'jake':'1' }
 */
module.exports = _curry1(function invertObj(obj) {
  var props = keys(obj);
  var len = props.length;
  var idx = 0;
  var out = {};

  while (idx < len) {
    var key = props[idx];
    out[obj[key]] = key;
    idx += 1;
  }
  return out;
});


/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var empty = __webpack_require__(130);
var equals = __webpack_require__(22);


/**
 * Returns `true` if the given value is its type's empty value; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> Boolean
 * @param {*} x
 * @return {Boolean}
 * @see R.empty
 * @example
 *
 *      R.isEmpty([1, 2, 3]);   //=> false
 *      R.isEmpty([]);          //=> true
 *      R.isEmpty('');          //=> true
 *      R.isEmpty(null);        //=> false
 *      R.isEmpty({});          //=> true
 *      R.isEmpty({length: 0}); //=> false
 */
module.exports = _curry1(function isEmpty(x) {
  return x != null && equals(x, empty(x));
});


/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);


/**
 * Checks if the input value is `null` or `undefined`.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} x The value to test.
 * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
 * @example
 *
 *      R.isNil(null); //=> true
 *      R.isNil(undefined); //=> true
 *      R.isNil(0); //=> false
 *      R.isNil([]); //=> false
 */
module.exports = _curry1(function isNil(x) { return x == null; });


/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

var invoker = __webpack_require__(45);


/**
 * Returns a string made by inserting the `separator` between each element and
 * concatenating all the elements into a single string.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig String -> [a] -> String
 * @param {Number|String} separator The string used to separate the elements.
 * @param {Array} xs The elements to join into a string.
 * @return {String} str The string made by concatenating `xs` with `separator`.
 * @see R.split
 * @example
 *
 *      var spacer = R.join(' ');
 *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
 *      R.join('|', [1, 2, 3]);    //=> '1|2|3'
 */
module.exports = invoker(1, 'join');


/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);


/**
 * Returns a list containing the names of all the properties of the supplied
 * object, including prototype properties.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own and prototype properties.
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.keysIn(f); //=> ['x', 'y']
 */
module.exports = _curry1(function keysIn(obj) {
  var prop;
  var ks = [];
  for (prop in obj) {
    ks[ks.length] = prop;
  }
  return ks;
});


/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _isArray = __webpack_require__(25);
var equals = __webpack_require__(22);


/**
 * Returns the position of the last occurrence of an item in an array, or -1 if
 * the item is not included in the array. `R.equals` is used to determine
 * equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @see R.indexOf
 * @example
 *
 *      R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
 *      R.lastIndexOf(10, [1,2,3,4]); //=> -1
 */
module.exports = _curry2(function lastIndexOf(target, xs) {
  if (typeof xs.lastIndexOf === 'function' && !_isArray(xs)) {
    return xs.lastIndexOf(target);
  } else {
    var idx = xs.length - 1;
    while (idx >= 0) {
      if (equals(xs[idx], target)) {
        return idx;
      }
      idx -= 1;
    }
    return -1;
  }
});


/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var lens = __webpack_require__(63);
var nth = __webpack_require__(47);
var update = __webpack_require__(169);


/**
 * Returns a lens whose focus is the specified index.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Number -> Lens s a
 * @param {Number} n
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var headLens = R.lensIndex(0);
 *
 *      R.view(headLens, ['a', 'b', 'c']);            //=> 'a'
 *      R.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']
 *      R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']
 */
module.exports = _curry1(function lensIndex(n) {
  return lens(nth(n), update(n));
});


/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var assocPath = __webpack_require__(120);
var lens = __webpack_require__(63);
var path = __webpack_require__(48);


/**
 * Returns a lens whose focus is the specified path.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @typedefn Idx = String | Int
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig [Idx] -> Lens s a
 * @param {Array} path The path to use.
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var xHeadYLens = R.lensPath(['x', 0, 'y']);
 *
 *      R.view(xHeadYLens, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> 2
 *      R.set(xHeadYLens, 1, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}
 *      R.over(xHeadYLens, R.negate, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
 */
module.exports = _curry1(function lensPath(p) {
  return lens(path(p), assocPath(p));
});


/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var assoc = __webpack_require__(43);
var lens = __webpack_require__(63);
var prop = __webpack_require__(93);


/**
 * Returns a lens whose focus is the specified property.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig String -> Lens s a
 * @param {String} k
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */
module.exports = _curry1(function lensProp(k) {
  return lens(prop(k), assoc(k));
});


/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns `true` if the first argument is less than the second; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @see R.gt
 * @example
 *
 *      R.lt(2, 1); //=> false
 *      R.lt(2, 2); //=> false
 *      R.lt(2, 3); //=> true
 *      R.lt('a', 'z'); //=> true
 *      R.lt('z', 'a'); //=> false
 */
module.exports = _curry2(function lt(a, b) { return a < b; });


/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns `true` if the first argument is less than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.gte
 * @example
 *
 *      R.lte(2, 1); //=> false
 *      R.lte(2, 2); //=> true
 *      R.lte(2, 3); //=> true
 *      R.lte('a', 'z'); //=> true
 *      R.lte('z', 'a'); //=> false
 */
module.exports = _curry2(function lte(a, b) { return a <= b; });


/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);


/**
 * The mapAccum function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from left to right, and returning a final value of this
 * accumulator together with the new list.
 *
 * The iterator function receives two arguments, *acc* and *value*, and should
 * return a tuple *[acc, value]*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.addIndex, R.mapAccumRight
 * @example
 *
 *      var digits = ['1', '2', '3', '4'];
 *      var appender = (a, b) => [a + b, a + b];
 *
 *      R.mapAccum(appender, 0, digits); //=> ['01234', ['01', '012', '0123', '01234']]
 * @symb R.mapAccum(f, a, [b, c, d]) = [
 *   f(f(f(a, b)[0], c)[0], d)[0],
 *   [
 *     f(a, b)[1],
 *     f(f(a, b)[0], c)[1],
 *     f(f(f(a, b)[0], c)[0], d)[1]
 *   ]
 * ]
 */
module.exports = _curry3(function mapAccum(fn, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  var tuple = [acc];
  while (idx < len) {
    tuple = fn(tuple[0], list[idx]);
    result[idx] = tuple[1];
    idx += 1;
  }
  return [tuple[0], result];
});


/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);


/**
 * The mapAccumRight function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from right to left, and returning a final value of this
 * accumulator together with the new list.
 *
 * Similar to `mapAccum`, except moves through the input list from the right to
 * the left.
 *
 * The iterator function receives two arguments, *value* and *acc*, and should
 * return a tuple *[value, acc]*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (x-> acc -> (y, acc)) -> acc -> [x] -> ([y], acc)
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.addIndex, R.mapAccum
 * @example
 *
 *      var digits = ['1', '2', '3', '4'];
 *      var append = (a, b) => [a + b, a + b];
 *
 *      R.mapAccumRight(append, 5, digits); //=> [['12345', '2345', '345', '45'], '12345']
 * @symb R.mapAccumRight(f, a, [b, c, d]) = [
 *   [
 *     f(b, f(c, f(d, a)[0])[0])[1],
 *     f(c, f(d, a)[0])[1],
 *     f(d, a)[1],
 *   ]
 *   f(b, f(c, f(d, a)[0])[0])[0],
 * ]
 */
module.exports = _curry3(function mapAccumRight(fn, acc, list) {
  var idx = list.length - 1;
  var result = [];
  var tuple = [acc];
  while (idx >= 0) {
    tuple = fn(list[idx], tuple[0]);
    result[idx] = tuple[1];
    idx -= 1;
  }
  return [result, tuple[0]];
});


/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _reduce = __webpack_require__(18);
var keys = __webpack_require__(20);


/**
 * An Object-specific version of `map`. The function is applied to three
 * arguments: *(value, key, obj)*. If only the value is significant, use
 * `map` instead.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig ((*, String, Object) -> *) -> Object -> Object
 * @param {Function} fn
 * @param {Object} obj
 * @return {Object}
 * @see R.map
 * @example
 *
 *      var values = { x: 1, y: 2, z: 3 };
 *      var prependKeyAndDouble = (num, key, obj) => key + (num * 2);
 *
 *      R.mapObjIndexed(prependKeyAndDouble, values); //=> { x: 'x2', y: 'y4', z: 'z6' }
 */
module.exports = _curry2(function mapObjIndexed(fn, obj) {
  return _reduce(function(acc, key) {
    acc[key] = fn(obj[key], key, obj);
    return acc;
  }, {}, keys(obj));
});


/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Tests a regular expression against a String. Note that this function will
 * return an empty array when there are no matches. This differs from
 * [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
 * which returns `null` when there are no matches.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig RegExp -> String -> [String | Undefined]
 * @param {RegExp} rx A regular expression.
 * @param {String} str The string to match against
 * @return {Array} The list of matches or empty array.
 * @see R.test
 * @example
 *
 *      R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
 *      R.match(/a/, 'b'); //=> []
 *      R.match(/a/, null); //=> TypeError: null does not have a method named "match"
 */
module.exports = _curry2(function match(rx, str) {
  return str.match(rx) || [];
});


/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _isInteger = __webpack_require__(139);


/**
 * mathMod behaves like the modulo operator should mathematically, unlike the
 * `%` operator (and by extension, R.modulo). So while "-17 % 5" is -2,
 * mathMod(-17, 5) is 3. mathMod requires Integer arguments, and returns NaN
 * when the modulus is zero or negative.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} m The dividend.
 * @param {Number} p the modulus.
 * @return {Number} The result of `b mod a`.
 * @example
 *
 *      R.mathMod(-17, 5);  //=> 3
 *      R.mathMod(17, 5);   //=> 2
 *      R.mathMod(17, -5);  //=> NaN
 *      R.mathMod(17, 0);   //=> NaN
 *      R.mathMod(17.2, 5); //=> NaN
 *      R.mathMod(17, 5.3); //=> NaN
 *
 *      var clock = R.mathMod(R.__, 12);
 *      clock(15); //=> 3
 *      clock(24); //=> 0
 *
 *      var seventeenMod = R.mathMod(17);
 *      seventeenMod(3);  //=> 2
 *      seventeenMod(4);  //=> 1
 *      seventeenMod(10); //=> 7
 */
module.exports = _curry2(function mathMod(m, p) {
  if (!_isInteger(m)) { return NaN; }
  if (!_isInteger(p) || p < 1) { return NaN; }
  return ((m % p) + p) % p;
});


/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);


/**
 * Takes a function and two values, and returns whichever value produces the
 * larger result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.max, R.minBy
 * @example
 *
 *      //  square :: Number -> Number
 *      var square = n => n * n;
 *
 *      R.maxBy(square, -3, 2); //=> -3
 *
 *      R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5
 *      R.reduce(R.maxBy(square), 0, []); //=> 0
 */
module.exports = _curry3(function maxBy(f, a, b) {
  return f(b) > f(a) ? b : a;
});


/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var mean = __webpack_require__(151);


/**
 * Returns the median of the given list of numbers.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @example
 *
 *      R.median([2, 9, 7]); //=> 7
 *      R.median([7, 2, 10, 9]); //=> 8
 *      R.median([]); //=> NaN
 */
module.exports = _curry1(function median(list) {
  var len = list.length;
  if (len === 0) {
    return NaN;
  }
  var width = 2 - len % 2;
  var idx = (len - width) / 2;
  return mean(Array.prototype.slice.call(list, 0).sort(function(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }).slice(idx, idx + width));
});


/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(23);
var _curry1 = __webpack_require__(1);
var _has = __webpack_require__(11);
var toString = __webpack_require__(50);


/**
 * Creates a new function that, when invoked, caches the result of calling `fn`
 * for a given argument set and returns the result. Subsequent calls to the
 * memoized `fn` with the same argument set will not result in an additional
 * call to `fn`; instead, the cached result for that set of arguments will be
 * returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (*... -> a) -> (*... -> a)
 * @param {Function} fn The function to memoize.
 * @return {Function} Memoized version of `fn`.
 * @example
 *
 *      var count = 0;
 *      var factorial = R.memoize(n => {
 *        count += 1;
 *        return R.product(R.range(1, n + 1));
 *      });
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      count; //=> 1
 */
module.exports = _curry1(function memoize(fn) {
  var cache = {};
  return _arity(fn.length, function() {
    var key = toString(arguments);
    if (!_has(key, cache)) {
      cache[key] = fn.apply(this, arguments);
    }
    return cache[key];
  });
});


/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

var _assign = __webpack_require__(89);
var _curry2 = __webpack_require__(0);


/**
 * Create a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects,
 * the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> {k: v} -> {k: v}
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeWith, R.mergeWithKey
 * @example
 *
 *      R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
 *      //=> { 'name': 'fred', 'age': 40 }
 *
 *      var resetToDefault = R.merge(R.__, {x: 0});
 *      resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}
 * @symb R.merge({ x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: 5, z: 3 }
 */
module.exports = _curry2(function merge(l, r) {
  return _assign({}, l, r);
});


/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

var _assign = __webpack_require__(89);
var _curry1 = __webpack_require__(1);


/**
 * Merges a list of objects together into one object.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig [{k: v}] -> {k: v}
 * @param {Array} list An array of objects
 * @return {Object} A merged object.
 * @see R.reduce
 * @example
 *
 *      R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
 *      R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}
 * @symb R.mergeAll([{ x: 1 }, { y: 2 }, { z: 3 }]) = { x: 1, y: 2, z: 3 }
 */
module.exports = _curry1(function mergeAll(list) {
  return _assign.apply(null, [{}].concat(list));
});


/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);
var mergeWithKey = __webpack_require__(152);


/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the values
 * associated with the key in each object, with the result being used as the
 * value associated with the key in the returned object. The key will be
 * excluded from the returned object if the resulting value is `undefined`.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig (a -> a -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.merge, R.mergeWithKey
 * @example
 *
 *      R.mergeWith(R.concat,
 *                  { a: true, values: [10, 20] },
 *                  { b: true, values: [15, 35] });
 *      //=> { a: true, b: true, values: [10, 20, 15, 35] }
 */
module.exports = _curry3(function mergeWith(fn, l, r) {
  return mergeWithKey(function(_, _l, _r) {
    return fn(_l, _r);
  }, l, r);
});


/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns the smaller of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.minBy, R.max
 * @example
 *
 *      R.min(789, 123); //=> 123
 *      R.min('a', 'b'); //=> 'a'
 */
module.exports = _curry2(function min(a, b) { return b < a ? b : a; });


/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);


/**
 * Takes a function and two values, and returns whichever value produces the
 * smaller result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.min, R.maxBy
 * @example
 *
 *      //  square :: Number -> Number
 *      var square = n => n * n;
 *
 *      R.minBy(square, -3, 2); //=> 2
 *
 *      R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1
 *      R.reduce(R.minBy(square), Infinity, []); //=> Infinity
 */
module.exports = _curry3(function minBy(f, a, b) {
  return f(b) < f(a) ? b : a;
});


/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Divides the first parameter by the second and returns the remainder. Note
 * that this function preserves the JavaScript-style behavior for modulo. For
 * mathematical modulo see `mathMod`.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The value to the divide.
 * @param {Number} b The pseudo-modulus
 * @return {Number} The result of `b % a`.
 * @see R.mathMod
 * @example
 *
 *      R.modulo(17, 3); //=> 2
 *      // JS behavior:
 *      R.modulo(-17, 3); //=> -2
 *      R.modulo(17, -3); //=> 2
 *
 *      var isOdd = R.modulo(R.__, 2);
 *      isOdd(42); //=> 0
 *      isOdd(21); //=> 1
 */
module.exports = _curry2(function modulo(a, b) { return a % b; });


/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);


/**
 * Negates its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number}
 * @example
 *
 *      R.negate(42); //=> -42
 */
module.exports = _curry1(function negate(n) { return -n; });


/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

var _complement = __webpack_require__(134);
var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(4);
var _xany = __webpack_require__(143);
var any = __webpack_require__(118);


/**
 * Returns `true` if no elements of the list match the predicate, `false`
 * otherwise.
 *
 * Dispatches to the `any` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is not satisfied by every element, `false` otherwise.
 * @see R.all, R.any
 * @example
 *
 *      var isEven = n => n % 2 === 0;
 *
 *      R.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true
 *      R.none(isEven, [1, 3, 5, 7, 8, 11]); //=> false
 */
module.exports = _curry2(_complement(_dispatchable(['any'], _xany, any)));


/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var curryN = __webpack_require__(8);
var nth = __webpack_require__(47);


/**
 * Returns a function which returns its nth argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig Number -> *... -> *
 * @param {Number} n
 * @return {Function}
 * @example
 *
 *      R.nthArg(1)('a', 'b', 'c'); //=> 'b'
 *      R.nthArg(-1)('a', 'b', 'c'); //=> 'c'
 * @symb R.nthArg(-1)(a, b, c) = c
 * @symb R.nthArg(0)(a, b, c) = a
 * @symb R.nthArg(1)(a, b, c) = b
 */
module.exports = _curry1(function nthArg(n) {
  var arity = n < 0 ? 1 : n + 1;
  return curryN(arity, function() {
    return nth(n, arguments);
  });
});


/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var _of = __webpack_require__(328);


/**
 * Returns a singleton array containing the value provided.
 *
 * Note this `of` is different from the ES6 `of`; See
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> [a]
 * @param {*} x any value
 * @return {Array} An array wrapping `x`.
 * @example
 *
 *      R.of(null); //=> [null]
 *      R.of([42]); //=> [[42]]
 */
module.exports = _curry1(_of);


/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

var _contains = __webpack_require__(29);
var _curry2 = __webpack_require__(0);


/**
 * Returns a partial copy of an object omitting the keys specified.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [String] -> {String: *} -> {String: *}
 * @param {Array} names an array of String property names to omit from the new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with properties from `names` not on it.
 * @see R.pick
 * @example
 *
 *      R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
 */
module.exports = _curry2(function omit(names, obj) {
  var result = {};
  for (var prop in obj) {
    if (!_contains(prop, names)) {
      result[prop] = obj[prop];
    }
  }
  return result;
});


/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(23);
var _curry1 = __webpack_require__(1);


/**
 * Accepts a function `fn` and returns a function that guards invocation of
 * `fn` such that `fn` can only ever be called once, no matter how many times
 * the returned function is invoked. The first value calculated is returned in
 * subsequent invocations.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a... -> b) -> (a... -> b)
 * @param {Function} fn The function to wrap in a call-only-once wrapper.
 * @return {Function} The wrapped function.
 * @example
 *
 *      var addOneOnce = R.once(x => x + 1);
 *      addOneOnce(10); //=> 11
 *      addOneOnce(addOneOnce(50)); //=> 11
 */
module.exports = _curry1(function once(fn) {
  var called = false;
  var result;
  return _arity(fn.length, function() {
    if (called) {
      return result;
    }
    called = true;
    result = fn.apply(this, arguments);
    return result;
  });
});


/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Takes two arguments, `fst` and `snd`, and returns `[fst, snd]`.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category List
 * @sig a -> b -> (a,b)
 * @param {*} fst
 * @param {*} snd
 * @return {Array}
 * @see R.objOf, R.of
 * @example
 *
 *      R.pair('foo', 'bar'); //=> ['foo', 'bar']
 */
module.exports = _curry2(function pair(fst, snd) { return [fst, snd]; });


/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(19);
var _createPartialApplicator = __webpack_require__(135);


/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided initially followed by the arguments provided to `g`.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a, b, c, ..., n) -> x) -> [a, b, c, ...] -> ((d, e, f, ..., n) -> x)
 * @param {Function} f
 * @param {Array} args
 * @return {Function}
 * @see R.partialRight
 * @example
 *
 *      var multiply2 = (a, b) => a * b;
 *      var double = R.partial(multiply2, [2]);
 *      double(2); //=> 4
 *
 *      var greet = (salutation, title, firstName, lastName) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      var sayHello = R.partial(greet, ['Hello']);
 *      var sayHelloToMs = R.partial(sayHello, ['Ms.']);
 *      sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partial(f, [a, b])(c, d) = f(a, b, c, d)
 */
module.exports = _createPartialApplicator(_concat);


/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(19);
var _createPartialApplicator = __webpack_require__(135);
var flip = __webpack_require__(57);


/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided to `g` followed by the arguments provided initially.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a, b, c, ..., n) -> x) -> [d, e, f, ..., n] -> ((a, b, c, ...) -> x)
 * @param {Function} f
 * @param {Array} args
 * @return {Function}
 * @see R.partial
 * @example
 *
 *      var greet = (salutation, title, firstName, lastName) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      var greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
 *
 *      greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partialRight(f, [a, b])(c, d) = f(c, d, a, b)
 */
module.exports = _createPartialApplicator(flip(_concat));


/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

var filter = __webpack_require__(87);
var juxt = __webpack_require__(147);
var reject = __webpack_require__(67);


/**
 * Takes a predicate and a list or other "filterable" object and returns the
 * pair of filterable objects of the same type of elements which do and do not
 * satisfy, the predicate, respectively.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> [f a, f a]
 * @param {Function} pred A predicate to determine which side the element belongs to.
 * @param {Array} filterable the list (or other filterable) to partition.
 * @return {Array} An array, containing first the subset of elements that satisfy the
 *         predicate, and second the subset of elements that do not satisfy.
 * @see R.filter, R.reject
 * @example
 *
 *      R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
 *      // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
 *
 *      R.partition(R.contains('s'), { a: 'sss', b: 'ttt', foo: 'bars' });
 *      // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]
 */
module.exports = juxt([filter, reject]);


/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);
var equals = __webpack_require__(22);
var path = __webpack_require__(48);


/**
 * Determines whether a nested path on an object has a specific value, in
 * `R.equals` terms. Most likely used to filter a list.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Relation
 * @typedefn Idx = String | Int
 * @sig [Idx] -> a -> {a} -> Boolean
 * @param {Array} path The path of the nested property to use
 * @param {*} val The value to compare the nested property with
 * @param {Object} obj The object to check the nested property in
 * @return {Boolean} `true` if the value equals the nested object property,
 *         `false` otherwise.
 * @example
 *
 *      var user1 = { address: { zipCode: 90210 } };
 *      var user2 = { address: { zipCode: 55555 } };
 *      var user3 = { name: 'Bob' };
 *      var users = [ user1, user2, user3 ];
 *      var isFamous = R.pathEq(['address', 'zipCode'], 90210);
 *      R.filter(isFamous, users); //=> [ user1 ]
 */
module.exports = _curry3(function pathEq(_path, val, obj) {
  return equals(path(_path, obj), val);
});


/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);
var defaultTo = __webpack_require__(125);
var path = __webpack_require__(48);


/**
 * If the given, non-null object has a value at the given path, returns the
 * value at that path. Otherwise returns the provided default value.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig a -> [Idx] -> {a} -> a
 * @param {*} d The default value.
 * @param {Array} p The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path` of the supplied object or the default value.
 * @example
 *
 *      R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
 */
module.exports = _curry3(function pathOr(d, p, obj) {
  return defaultTo(d, path(p, obj));
});


/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);
var path = __webpack_require__(48);


/**
 * Returns `true` if the specified object property at given path satisfies the
 * given predicate; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Logic
 * @typedefn Idx = String | Int
 * @sig (a -> Boolean) -> [Idx] -> {a} -> Boolean
 * @param {Function} pred
 * @param {Array} propPath
 * @param {*} obj
 * @return {Boolean}
 * @see R.propSatisfies, R.path
 * @example
 *
 *      R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true
 */
module.exports = _curry3(function pathSatisfies(pred, propPath, obj) {
  return propPath.length > 0 && pred(path(propPath, obj));
});


/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns a partial copy of an object containing only the keys specified. If
 * the key does not exist, the property is ignored.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.omit, R.props
 * @example
 *
 *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
 */
module.exports = _curry2(function pick(names, obj) {
  var result = {};
  var idx = 0;
  while (idx < names.length) {
    if (names[idx] in obj) {
      result[names[idx]] = obj[names[idx]];
    }
    idx += 1;
  }
  return result;
});


/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

var composeK = __webpack_require__(122);
var reverse = __webpack_require__(68);

/**
 * Returns the left-to-right Kleisli composition of the provided functions,
 * each of which must return a value of a type supported by [`chain`](#chain).
 *
 * `R.pipeK(f, g, h)` is equivalent to `R.pipe(R.chain(f), R.chain(g), R.chain(h))`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Function
 * @sig Chain m => ((a -> m b), (b -> m c), ..., (y -> m z)) -> (a -> m z)
 * @param {...Function}
 * @return {Function}
 * @see R.composeK
 * @example
 *
 *      //  parseJson :: String -> Maybe *
 *      //  get :: String -> Object -> Maybe *
 *
 *      //  getStateCode :: Maybe String -> Maybe String
 *      var getStateCode = R.pipeK(
 *        parseJson,
 *        get('user'),
 *        get('address'),
 *        get('state'),
 *        R.compose(Maybe.of, R.toUpper)
 *      );
 *
 *      getStateCode('{"user":{"address":{"state":"ny"}}}');
 *      //=> Just('NY')
 *      getStateCode('[Invalid JSON]');
 *      //=> Nothing()
 * @symb R.pipeK(f, g, h)(a) = R.chain(h, R.chain(g, f(a)))
 */
module.exports = function pipeK() {
  if (arguments.length === 0) {
    throw new Error('pipeK requires at least one argument');
  }
  return composeK.apply(this, reverse(arguments));
};


/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

var multiply = __webpack_require__(153);
var reduce = __webpack_require__(21);


/**
 * Multiplies together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The product of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.product([2,4,6,8,100,1]); //=> 38400
 */
module.exports = reduce(multiply, 1);


/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

var _map = __webpack_require__(62);
var identity = __webpack_require__(88);
var pickAll = __webpack_require__(158);
var useWith = __webpack_require__(170);


/**
 * Reasonable analog to SQL `select` statement.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @category Relation
 * @sig [k] -> [{k: v}] -> [{k: v}]
 * @param {Array} props The property names to project
 * @param {Array} objs The objects to query
 * @return {Array} An array of objects with just the `props` properties.
 * @example
 *
 *      var abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
 *      var fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
 *      var kids = [abby, fred];
 *      R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
 */
module.exports = useWith(_map, [pickAll, identity]); // passing `identity` gives correct arity


/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);
var equals = __webpack_require__(22);


/**
 * Returns `true` if the specified object property is equal, in `R.equals`
 * terms, to the given value; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig String -> a -> Object -> Boolean
 * @param {String} name
 * @param {*} val
 * @param {*} obj
 * @return {Boolean}
 * @see R.equals, R.propSatisfies
 * @example
 *
 *      var abby = {name: 'Abby', age: 7, hair: 'blond'};
 *      var fred = {name: 'Fred', age: 12, hair: 'brown'};
 *      var rusty = {name: 'Rusty', age: 10, hair: 'brown'};
 *      var alois = {name: 'Alois', age: 15, disposition: 'surly'};
 *      var kids = [abby, fred, rusty, alois];
 *      var hasBrownHair = R.propEq('hair', 'brown');
 *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
 */
module.exports = _curry3(function propEq(name, val, obj) {
  return equals(val, obj[name]);
});


/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);
var is = __webpack_require__(146);


/**
 * Returns `true` if the specified object property is of the given type;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Type
 * @sig Type -> String -> Object -> Boolean
 * @param {Function} type
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.is, R.propSatisfies
 * @example
 *
 *      R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
 *      R.propIs(Number, 'x', {x: 'foo'});    //=> false
 *      R.propIs(Number, 'x', {});            //=> false
 */
module.exports = _curry3(function propIs(type, name, obj) {
  return is(type, obj[name]);
});


/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);
var _has = __webpack_require__(11);


/**
 * If the given, non-null object has an own property with the specified name,
 * returns the value of that property. Otherwise returns the provided default
 * value.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Object
 * @sig a -> String -> Object -> a
 * @param {*} val The default value.
 * @param {String} p The name of the property to return.
 * @param {Object} obj The object to query.
 * @return {*} The value of given property of the supplied object or the default value.
 * @example
 *
 *      var alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      var favorite = R.prop('favoriteLibrary');
 *      var favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
 *
 *      favorite(alice);  //=> undefined
 *      favoriteWithDefault(alice);  //=> 'Ramda'
 */
module.exports = _curry3(function propOr(val, p, obj) {
  return (obj != null && _has(p, obj)) ? obj[p] : val;
});


/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);


/**
 * Returns `true` if the specified object property satisfies the given
 * predicate; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Logic
 * @sig (a -> Boolean) -> String -> {String: a} -> Boolean
 * @param {Function} pred
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.propEq, R.propIs
 * @example
 *
 *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
 */
module.exports = _curry3(function propSatisfies(pred, name, obj) {
  return pred(obj[name]);
});


/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Acts as multiple `prop`: array of keys in, array of values out. Preserves
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> [v]
 * @param {Array} ps The property names to fetch
 * @param {Object} obj The object to query
 * @return {Array} The corresponding values or partially applied function.
 * @example
 *
 *      R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
 *      R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
 *
 *      var fullName = R.compose(R.join(' '), R.props(['first', 'last']));
 *      fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
 */
module.exports = _curry2(function props(ps, obj) {
  var len = ps.length;
  var out = [];
  var idx = 0;

  while (idx < len) {
    out[idx] = obj[ps[idx]];
    idx += 1;
  }

  return out;
});


/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _isNumber = __webpack_require__(140);


/**
 * Returns a list of numbers from `from` (inclusive) to `to` (exclusive).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> Number -> [Number]
 * @param {Number} from The first number in the list.
 * @param {Number} to One more than the last number in the list.
 * @return {Array} The list of numbers in tthe set `[a, b)`.
 * @example
 *
 *      R.range(1, 5);    //=> [1, 2, 3, 4]
 *      R.range(50, 53);  //=> [50, 51, 52]
 */
module.exports = _curry2(function range(from, to) {
  if (!(_isNumber(from) && _isNumber(to))) {
    throw new TypeError('Both arguments to range must be numbers');
  }
  var result = [];
  var n = from;
  while (n < to) {
    result.push(n);
    n += 1;
  }
  return result;
});


/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

var _curryN = __webpack_require__(58);
var _reduce = __webpack_require__(18);
var _reduced = __webpack_require__(26);


/**
 * Like `reduce`, `reduceWhile` returns a single item by iterating through
 * the list, successively calling the iterator function. `reduceWhile` also
 * takes a predicate that is evaluated before each step. If the predicate returns
 * `false`, it "short-circuits" the iteration and returns the current value
 * of the accumulator.
 *
 * @func
 * @memberOf R
 * @since v0.22.0
 * @category List
 * @sig ((a, b) -> Boolean) -> ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} pred The predicate. It is passed the accumulator and the
 *        current element.
 * @param {Function} fn The iterator function. Receives two values, the
 *        accumulator and the current element.
 * @param {*} a The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced
 * @example
 *
 *      var isOdd = (acc, x) => x % 2 === 1;
 *      var xs = [1, 3, 5, 60, 777, 800];
 *      R.reduceWhile(isOdd, R.add, 0, xs); //=> 9
 *
 *      var ys = [2, 4, 6]
 *      R.reduceWhile(isOdd, R.add, 111, ys); //=> 111
 */
module.exports = _curryN(4, [], function _reduceWhile(pred, fn, a, list) {
  return _reduce(function(acc, x) {
    return pred(acc, x) ? fn(acc, x) : _reduced(acc);
  }, a, list);
});


/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var _reduced = __webpack_require__(26);

/**
 * Returns a value wrapped to indicate that it is the final value of the reduce
 * and transduce functions. The returned value should be considered a black
 * box: the internal structure is not guaranteed to be stable.
 *
 * Note: this optimization is unavailable to functions not explicitly listed
 * above. For instance, it is not currently supported by reduceRight.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category List
 * @sig a -> *
 * @param {*} x The final value of the reduce.
 * @return {*} The wrapped value.
 * @see R.reduce, R.transduce
 * @example
 *
 *      R.reduce(
 *        R.pipe(R.add, R.when(R.gte(R.__, 10), R.reduced)),
 *        0,
 *        [1, 2, 3, 4, 5]) // 10
 */

module.exports = _curry1(_reduced);


/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);


/**
 * Removes the sub-list of `list` starting at index `start` and containing
 * `count` elements. _Note that this is not destructive_: it returns a copy of
 * the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.2.2
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @param {Number} start The position to start removing elements
 * @param {Number} count The number of elements to remove
 * @param {Array} list The list to remove from
 * @return {Array} A new Array with `count` elements from `start` removed.
 * @example
 *
 *      R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
 */
module.exports = _curry3(function remove(start, count, list) {
  var result = Array.prototype.slice.call(list, 0);
  result.splice(start, count);
  return result;
});


/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var always = __webpack_require__(33);
var times = __webpack_require__(167);


/**
 * Returns a fixed list of size `n` containing a specified identical value.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig a -> n -> [a]
 * @param {*} value The value to repeat.
 * @param {Number} n The desired size of the output list.
 * @return {Array} A new array containing `n` `value`s.
 * @example
 *
 *      R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
 *
 *      var obj = {};
 *      var repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
 *      repeatedObjs[0] === repeatedObjs[1]; //=> true
 * @symb R.repeat(a, 0) = []
 * @symb R.repeat(a, 1) = [a]
 * @symb R.repeat(a, 2) = [a, a]
 */
module.exports = _curry2(function repeat(value, n) {
  return times(always(value), n);
});


/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);


/**
 * Replace a substring or regex match in a string with a replacement.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category String
 * @sig RegExp|String -> String -> String -> String
 * @param {RegExp|String} pattern A regular expression or a substring to match.
 * @param {String} replacement The string to replace the matches with.
 * @param {String} str The String to do the search and replacement in.
 * @return {String} The result.
 * @example
 *
 *      R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *      R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *
 *      // Use the "g" (global) flag to replace all occurrences:
 *      R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
 */
module.exports = _curry3(function replace(regex, replacement, str) {
  return str.replace(regex, replacement);
});


/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);


/**
 * Scan is similar to reduce, but returns a list of successively reduced values
 * from the left
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (a,b -> a) -> a -> [b] -> [a]
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {Array} A list of all intermediately reduced values.
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
 * @symb R.scan(f, a, [b, c]) = [a, f(a, b), f(f(a, b), c)]
 */
module.exports = _curry3(function scan(fn, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = [acc];
  while (idx < len) {
    acc = fn(acc, list[idx]);
    result[idx + 1] = acc;
    idx += 1;
  }
  return result;
});


/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);
var always = __webpack_require__(33);
var over = __webpack_require__(157);


/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the given value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> a -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
 *      R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}
 */
module.exports = _curry3(function set(lens, v, x) {
  return over(lens, always(v), x);
});


/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns a copy of the list, sorted according to the comparator function,
 * which should accept two values at a time and return a negative number if the
 * first value is smaller, a positive number if it's larger, and zero if they
 * are equal. Please note that this is a **copy** of the list. It does not
 * modify the original.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a,a -> Number) -> [a] -> [a]
 * @param {Function} comparator A sorting function :: a -> b -> Int
 * @param {Array} list The list to sort
 * @return {Array} a new array with its elements sorted by the comparator function.
 * @example
 *
 *      var diff = function(a, b) { return a - b; };
 *      R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
 */
module.exports = _curry2(function sort(comparator, list) {
  return Array.prototype.slice.call(list, 0).sort(comparator);
});


/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Sorts the list according to the supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord b => (a -> b) -> [a] -> [a]
 * @param {Function} fn
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted by the keys generated by `fn`.
 * @example
 *
 *      var sortByFirstItem = R.sortBy(R.prop(0));
 *      var sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
 *      var pairs = [[-1, 1], [-2, 2], [-3, 3]];
 *      sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
 *      var alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      var bob = {
 *        name: 'Bob',
 *        age: -10
 *      };
 *      var clara = {
 *        name: 'clara',
 *        age: 314.159
 *      };
 *      var people = [clara, bob, alice];
 *      sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
 */
module.exports = _curry2(function sortBy(fn, list) {
  return Array.prototype.slice.call(list, 0).sort(function(a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  });
});


/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Sorts a list according to a list of comparators.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Relation
 * @sig [a -> a -> Number] -> [a] -> [a]
 * @param {Array} functions A list of comparator functions.
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted according to the comarator functions.
 * @example
 *
 *      var alice = {
 *        name: 'alice',
 *        age: 40
 *      };
 *      var bob = {
 *        name: 'bob',
 *        age: 30
 *      };
 *      var clara = {
 *        name: 'clara',
 *        age: 40
 *      };
 *      var people = [clara, bob, alice];
 *      var ageNameSort = R.sortWith([
 *        R.descend(R.prop('age')),
 *        R.ascend(R.prop('name'))
 *      ]);
 *      ageNameSort(people); //=> [alice, clara, bob]
 */
module.exports = _curry2(function sortWith(fns, list) {
  return Array.prototype.slice.call(list, 0).sort(function(a, b) {
    var result = 0;
    var i = 0;
    while (result === 0 && i < fns.length) {
      result = fns[i](a, b);
      i += 1;
    }
    return result;
  });
});


/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

var invoker = __webpack_require__(45);


/**
 * Splits a string into an array of strings based on the given
 * separator.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig (String | RegExp) -> String -> [String]
 * @param {String|RegExp} sep The pattern.
 * @param {String} str The string to separate into an array.
 * @return {Array} The array of strings from `str` separated by `str`.
 * @see R.join
 * @example
 *
 *      var pathComponents = R.split('/');
 *      R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
 *
 *      R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
 */
module.exports = invoker(1, 'split');


/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var length = __webpack_require__(149);
var slice = __webpack_require__(30);


/**
 * Splits a given list or string at a given index.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig Number -> [a] -> [[a], [a]]
 * @sig Number -> String -> [String, String]
 * @param {Number} index The index where the array/string is split.
 * @param {Array|String} array The array/string to be split.
 * @return {Array}
 * @example
 *
 *      R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]
 *      R.splitAt(5, 'hello world');      //=> ['hello', ' world']
 *      R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']
 */
module.exports = _curry2(function splitAt(index, array) {
  return [slice(0, index, array), slice(index, length(array), array)];
});


/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var slice = __webpack_require__(30);


/**
 * Splits a collection into slices of the specified length.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @sig Number -> String -> [String]
 * @param {Number} n
 * @param {Array} list
 * @return {Array}
 * @example
 *
 *      R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
 *      R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']
 */
module.exports = _curry2(function splitEvery(n, list) {
  if (n <= 0) {
    throw new Error('First argument to splitEvery must be a positive integer');
  }
  var result = [];
  var idx = 0;
  while (idx < list.length) {
    result.push(slice(idx, idx += n, list));
  }
  return result;
});


/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Takes a list and a predicate and returns a pair of lists with the following properties:
 *
 *  - the result of concatenating the two output lists is equivalent to the input list;
 *  - none of the elements of the first output list satisfies the predicate; and
 *  - if the second output list is non-empty, its first element satisfies the predicate.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [[a], [a]]
 * @param {Function} pred The predicate that determines where the array is split.
 * @param {Array} list The array to be split.
 * @return {Array}
 * @example
 *
 *      R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]
 */
module.exports = _curry2(function splitWhen(pred, list) {
  var idx = 0;
  var len = list.length;
  var prefix = [];

  while (idx < len && !pred(list[idx])) {
    prefix.push(list[idx]);
    idx += 1;
  }

  return [prefix, Array.prototype.slice.call(list, idx)];
});


/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Subtracts its second argument from its first argument.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a - b`.
 * @see R.add
 * @example
 *
 *      R.subtract(10, 8); //=> 2
 *
 *      var minus5 = R.subtract(R.__, 5);
 *      minus5(17); //=> 12
 *
 *      var complementaryAngle = R.subtract(90);
 *      complementaryAngle(30); //=> 60
 *      complementaryAngle(72); //=> 18
 */
module.exports = _curry2(function subtract(a, b) {
  return Number(a) - Number(b);
});


/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var concat = __webpack_require__(85);
var difference = __webpack_require__(126);


/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` or `list2`, but not both.
 * @see R.symmetricDifferenceWith, R.difference, R.differenceWith
 * @example
 *
 *      R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); //=> [1,2,7,6,5]
 *      R.symmetricDifference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5,1,2]
 */
module.exports = _curry2(function symmetricDifference(list1, list2) {
  return concat(difference(list1, list2), difference(list2, list1));
});


/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);
var concat = __webpack_require__(85);
var differenceWith = __webpack_require__(127);


/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both. Duplication is determined according to the value
 * returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` or `list2`, but not both.
 * @see R.symmetricDifference, R.difference, R.differenceWith
 * @example
 *
 *      var eqA = R.eqBy(R.prop('a'));
 *      var l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
 *      var l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
 *      R.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
 */
module.exports = _curry3(function symmetricDifferenceWith(pred, list1, list2) {
  return concat(differenceWith(pred, list1, list2), differenceWith(pred, list2, list1));
});


/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var drop = __webpack_require__(128);


/**
 * Returns a new list containing the last `n` elements of the given list.
 * If `n > list.length`, returns a list of `list.length` elements.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements to return.
 * @param {Array} xs The collection to consider.
 * @return {Array}
 * @see R.dropLast
 * @example
 *
 *      R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(3, 'ramda');               //=> 'mda'
 */
module.exports = _curry2(function takeLast(n, xs) {
  return drop(n >= 0 ? xs.length - n : 0, xs);
});


/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns a new list containing the last `n` elements of a given list, passing
 * each value to the supplied predicate function, and terminating when the
 * predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * *(value)*.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} fn The function called per iteration.
 * @param {Array} list The collection to iterate over.
 * @return {Array} A new array.
 * @see R.dropLastWhile, R.addIndex
 * @example
 *
 *      var isNotOne = x => x !== 1;
 *
 *      R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
 */
module.exports = _curry2(function takeLastWhile(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0 && fn(list[idx])) {
    idx -= 1;
  }
  return Array.prototype.slice.call(list, idx + 1);
});


/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(4);
var _xtakeWhile = __webpack_require__(350);


/**
 * Returns a new list containing the first `n` elements of a given list,
 * passing each value to the supplied predicate function, and terminating when
 * the predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * *(value)*.
 *
 * Dispatches to the `takeWhile` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} fn The function called per iteration.
 * @param {Array} list The collection to iterate over.
 * @return {Array} A new array.
 * @see R.dropWhile, R.transduce, R.addIndex
 * @example
 *
 *      var isNotFour = x => x !== 4;
 *
 *      R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]
 */
module.exports = _curry2(_dispatchable(['takeWhile'], _xtakeWhile, function takeWhile(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len && fn(list[idx])) {
    idx += 1;
  }
  return Array.prototype.slice.call(list, 0, idx);
}));


/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Runs the given function with the supplied object, then returns the object.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a -> *) -> a -> a
 * @param {Function} fn The function to call with `x`. The return value of `fn` will be thrown away.
 * @param {*} x
 * @return {*} `x`.
 * @example
 *
 *      var sayX = x => console.log('x is ' + x);
 *      R.tap(sayX, 100); //=> 100
 *      // logs 'x is 100'
 * @symb R.tap(f, a) = a
 */
module.exports = _curry2(function tap(fn, x) {
  fn(x);
  return x;
});


/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

var _cloneRegExp = __webpack_require__(133);
var _curry2 = __webpack_require__(0);
var _isRegExp = __webpack_require__(326);
var toString = __webpack_require__(50);


/**
 * Determines whether a given string matches a given regular expression.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category String
 * @sig RegExp -> String -> Boolean
 * @param {RegExp} pattern
 * @param {String} str
 * @return {Boolean}
 * @see R.match
 * @example
 *
 *      R.test(/^x/, 'xyz'); //=> true
 *      R.test(/^y/, 'xyz'); //=> false
 */
module.exports = _curry2(function test(pattern, str) {
  if (!_isRegExp(pattern)) {
    throw new TypeError('‘test’ requires a value of type RegExp as its first argument; received ' + toString(pattern));
  }
  return _cloneRegExp(pattern).test(str);
});


/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

var invoker = __webpack_require__(45);


/**
 * The lower case version of a string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to lower case.
 * @return {String} The lower case version of `str`.
 * @see R.toUpper
 * @example
 *
 *      R.toLower('XYZ'); //=> 'xyz'
 */
module.exports = invoker(0, 'toLowerCase');


/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var _has = __webpack_require__(11);


/**
 * Converts an object into an array of key, value arrays. Only the object's
 * own properties are used.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own properties.
 * @see R.fromPairs
 * @example
 *
 *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
 */
module.exports = _curry1(function toPairs(obj) {
  var pairs = [];
  for (var prop in obj) {
    if (_has(prop, obj)) {
      pairs[pairs.length] = [prop, obj[prop]];
    }
  }
  return pairs;
});


/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);


/**
 * Converts an object into an array of key, value arrays. The object's own
 * properties and prototype properties are used. Note that the order of the
 * output array is not guaranteed to be consistent across different JS
 * platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own
 *         and prototype properties.
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
 */
module.exports = _curry1(function toPairsIn(obj) {
  var pairs = [];
  for (var prop in obj) {
    pairs[pairs.length] = [prop, obj[prop]];
  }
  return pairs;
});


/***/ }),
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

var invoker = __webpack_require__(45);


/**
 * The upper case version of a string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to upper case.
 * @return {String} The upper case version of `str`.
 * @see R.toLower
 * @example
 *
 *      R.toUpper('abc'); //=> 'ABC'
 */
module.exports = invoker(0, 'toUpperCase');


/***/ }),
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

var _reduce = __webpack_require__(18);
var _xwrap = __webpack_require__(145);
var curryN = __webpack_require__(8);


/**
 * Initializes a transducer using supplied iterator function. Returns a single
 * item by iterating through the list, successively calling the transformed
 * iterator function and passing it an accumulator value and the current value
 * from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It will be
 * wrapped as a transformer to initialize the transducer. A transformer can be
 * passed directly in place of an iterator function. In both cases, iteration
 * may be stopped early with the `R.reduced` function.
 *
 * A transducer is a function that accepts a transformer and returns a
 * transformer and can be composed directly.
 *
 * A transformer is an an object that provides a 2-arity reducing iterator
 * function, step, 0-arity initial value function, init, and 1-arity result
 * extraction function, result. The step function is used as the iterator
 * function in reduce. The result function is used to convert the final
 * accumulator into the return type and in most cases is R.identity. The init
 * function can be used to provide an initial accumulator, but is ignored by
 * transduce.
 *
 * The iteration is performed with R.reduce after initializing the transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (c -> c) -> (a,b -> a) -> a -> [b] -> a
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array. Wrapped as transformer, if necessary, and used to
 *        initialize the transducer
 * @param {*} acc The initial accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced, R.into
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
 *
 *      R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]
 */
module.exports = curryN(4, function transduce(xf, fn, acc, list) {
  return _reduce(xf(typeof fn === 'function' ? _xwrap(fn) : fn), acc, list);
});


/***/ }),
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);


/**
 * Transposes the rows and columns of a 2D list.
 * When passed a list of `n` lists of length `x`,
 * returns a list of `x` lists of length `n`.
 *
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [[a]] -> [[a]]
 * @param {Array} list A 2D list
 * @return {Array} A 2D list
 * @example
 *
 *      R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]) //=> [[1, 2, 3], ['a', 'b', 'c']]
 *      R.transpose([[1, 2, 3], ['a', 'b', 'c']]) //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 *
 * If some of the rows are shorter than the following rows, their elements are skipped:
 *
 *      R.transpose([[10, 11], [20], [], [30, 31, 32]]) //=> [[10, 20, 30], [11, 31], [32]]
 * @symb R.transpose([[a], [b], [c]]) = [a, b, c]
 * @symb R.transpose([[a, b], [c, d]]) = [[a, c], [b, d]]
 * @symb R.transpose([[a, b], [c]]) = [[a, c], [b]]
 */
module.exports = _curry1(function transpose(outerlist) {
  var i = 0;
  var result = [];
  while (i < outerlist.length) {
    var innerlist = outerlist[i];
    var j = 0;
    while (j < innerlist.length) {
      if (typeof result[j] === 'undefined') {
        result[j] = [];
      }
      result[j].push(innerlist[j]);
      j += 1;
    }
    i += 1;
  }
  return result;
});


/***/ }),
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);
var map = __webpack_require__(15);
var sequence = __webpack_require__(164);


/**
 * Maps an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning
 * function over a [Traversable](https://github.com/fantasyland/fantasy-land#traversable),
 * then uses [`sequence`](#sequence) to transform the resulting Traversable of Applicative
 * into an Applicative of Traversable.
 *
 * Dispatches to the `sequence` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (Applicative f, Traversable t) => (a -> f a) -> (a -> f b) -> t a -> f (t b)
 * @param {Function} of
 * @param {Function} f
 * @param {*} traversable
 * @return {*}
 * @see R.sequence
 * @example
 *
 *      // Returns `Nothing` if the given divisor is `0`
 *      safeDiv = n => d => d === 0 ? Nothing() : Just(n / d)
 *
 *      R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Just([5, 2.5, 2])
 *      R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Nothing
 */
module.exports = _curry3(function traverse(of, f, traversable) {
  return sequence(of, map(f, traversable));
});


/***/ }),
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);


/**
 * Removes (strips) whitespace from both ends of the string.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to trim.
 * @return {String} Trimmed version of `str`.
 * @example
 *
 *      R.trim('   xyz  '); //=> 'xyz'
 *      R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']
 */
module.exports = (function() {
  var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
           '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' +
           '\u2029\uFEFF';
  var zeroWidth = '\u200b';
  var hasProtoTrim = (typeof String.prototype.trim === 'function');
  if (!hasProtoTrim || (ws.trim() || !zeroWidth.trim())) {
    return _curry1(function trim(str) {
      var beginRx = new RegExp('^[' + ws + '][' + ws + ']*');
      var endRx = new RegExp('[' + ws + '][' + ws + ']*$');
      return str.replace(beginRx, '').replace(endRx, '');
    });
  } else {
    return _curry1(function trim(str) {
      return str.trim();
    });
  }
}());


/***/ }),
/* 434 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(23);
var _concat = __webpack_require__(19);
var _curry2 = __webpack_require__(0);


/**
 * `tryCatch` takes two functions, a `tryer` and a `catcher`. The returned
 * function evaluates the `tryer`; if it does not throw, it simply returns the
 * result. If the `tryer` *does* throw, the returned function evaluates the
 * `catcher` function and returns its result. Note that for effective
 * composition with this function, both the `tryer` and `catcher` functions
 * must return the same type of results.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig (...x -> a) -> ((e, ...x) -> a) -> (...x -> a)
 * @param {Function} tryer The function that may throw.
 * @param {Function} catcher The function that will be evaluated if `tryer` throws.
 * @return {Function} A new function that will catch exceptions and send then to the catcher.
 * @example
 *
 *      R.tryCatch(R.prop('x'), R.F)({x: true}); //=> true
 *      R.tryCatch(R.prop('x'), R.F)(null);      //=> false
 */
module.exports = _curry2(function _tryCatch(tryer, catcher) {
  return _arity(tryer.length, function() {
    try {
      return tryer.apply(this, arguments);
    } catch (e) {
      return catcher.apply(this, _concat([e], arguments));
    }
  });
});


/***/ }),
/* 435 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);


/**
 * Takes a function `fn`, which takes a single array argument, and returns a
 * function which:
 *
 *   - takes any number of positional arguments;
 *   - passes these arguments to `fn` as an array; and
 *   - returns the result.
 *
 * In other words, R.unapply derives a variadic function from a function which
 * takes an array. R.unapply is the inverse of R.apply.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Function
 * @sig ([*...] -> a) -> (*... -> a)
 * @param {Function} fn
 * @return {Function}
 * @see R.apply
 * @example
 *
 *      R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'
 * @symb R.unapply(f)(a, b) = f([a, b])
 */
module.exports = _curry1(function unapply(fn) {
  return function() {
    return fn(Array.prototype.slice.call(arguments, 0));
  };
});


/***/ }),
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var nAry = __webpack_require__(65);


/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 1 parameter. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Function
 * @sig (* -> b) -> (a -> b)
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity 1.
 * @example
 *
 *      var takesTwoArgs = function(a, b) {
 *        return [a, b];
 *      };
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      var takesOneArg = R.unary(takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only 1 argument is passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 * @symb R.unary(f)(a, b, c) = f(a)
 */
module.exports = _curry1(function unary(fn) {
  return nAry(1, fn);
});


/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var curryN = __webpack_require__(8);


/**
 * Returns a function of arity `n` from a (manually) curried function.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Function
 * @sig Number -> (a -> b) -> (a -> c)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to uncurry.
 * @return {Function} A new function.
 * @see R.curry
 * @example
 *
 *      var addFour = a => b => c => d => a + b + c + d;
 *
 *      var uncurriedAddFour = R.uncurryN(4, addFour);
 *      uncurriedAddFour(1, 2, 3, 4); //=> 10
 */
module.exports = _curry2(function uncurryN(depth, fn) {
  return curryN(depth, function() {
    var currentDepth = 1;
    var value = fn;
    var idx = 0;
    var endIdx;
    while (currentDepth <= depth && typeof value === 'function') {
      endIdx = currentDepth === depth ? arguments.length : idx + value.length;
      value = value.apply(this, Array.prototype.slice.call(arguments, idx, endIdx));
      currentDepth += 1;
      idx = endIdx;
    }
    return value;
  });
});


/***/ }),
/* 438 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Builds a list from a seed value. Accepts an iterator function, which returns
 * either false to stop iteration or an array of length 2 containing the value
 * to add to the resulting list and the seed to be used in the next call to the
 * iterator function.
 *
 * The iterator function receives one argument: *(seed)*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (a -> [b]) -> * -> [b]
 * @param {Function} fn The iterator function. receives one argument, `seed`, and returns
 *        either false to quit iteration or an array of length two to proceed. The element
 *        at index 0 of this array will be added to the resulting array, and the element
 *        at index 1 will be passed to the next call to `fn`.
 * @param {*} seed The seed value.
 * @return {Array} The final list.
 * @example
 *
 *      var f = n => n > 50 ? false : [-n, n + 10];
 *      R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]
 * @symb R.unfold(f, x) = [f(x)[0], f(f(x)[1])[0], f(f(f(x)[1])[1])[0], ...]
 */
module.exports = _curry2(function unfold(fn, seed) {
  var pair = fn(seed);
  var result = [];
  while (pair && pair.length) {
    result[result.length] = pair[0];
    pair = fn(pair[1]);
  }
  return result;
});


/***/ }),
/* 439 */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(19);
var _curry2 = __webpack_require__(0);
var compose = __webpack_require__(55);
var uniq = __webpack_require__(96);


/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @example
 *
 *      R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
 */
module.exports = _curry2(compose(uniq, _concat));


/***/ }),
/* 440 */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(19);
var _curry3 = __webpack_require__(3);
var uniqWith = __webpack_require__(97);


/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list. Duplication is determined according to the value returned by
 * applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig (a -> a -> Boolean) -> [*] -> [*] -> [*]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @see R.union
 * @example
 *
 *      var l1 = [{a: 1}, {a: 2}];
 *      var l2 = [{a: 1}, {a: 4}];
 *      R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]
 */
module.exports = _curry3(function unionWith(pred, list1, list2) {
  return uniqWith(pred, _concat(list1, list2));
});


/***/ }),
/* 441 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);


/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is not satisfied, the function will return the result of
 * calling the `whenFalseFn` function with the same argument. If the predicate
 * is satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred        A predicate function
 * @param {Function} whenFalseFn A function to invoke when the `pred` evaluates
 *                               to a falsy value.
 * @param {*}        x           An object to test with the `pred` function and
 *                               pass to `whenFalseFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenFalseFn`.
 * @see R.ifElse, R.when
 * @example
 *
 *      // coerceArray :: (a|[a]) -> [a]
 *      var coerceArray = R.unless(R.isArrayLike, R.of);
 *      coerceArray([1, 2, 3]); //=> [1, 2, 3]
 *      coerceArray(1);         //=> [1]
 */
module.exports = _curry3(function unless(pred, whenFalseFn, x) {
  return pred(x) ? x : whenFalseFn(x);
});


/***/ }),
/* 442 */
/***/ (function(module, exports, __webpack_require__) {

var _identity = __webpack_require__(91);
var chain = __webpack_require__(84);


/**
 * Shorthand for `R.chain(R.identity)`, which removes one level of nesting from
 * any [Chain](https://github.com/fantasyland/fantasy-land#chain).
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain c => c (c a) -> c a
 * @param {*} list
 * @return {*}
 * @see R.flatten, R.chain
 * @example
 *
 *      R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
 *      R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]
 */
module.exports = chain(_identity);


/***/ }),
/* 443 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);


/**
 * Takes a predicate, a transformation function, and an initial value,
 * and returns a value of the same type as the initial value.
 * It does so by applying the transformation until the predicate is satisfied,
 * at which point it returns the satisfactory value.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred A predicate function
 * @param {Function} fn The iterator function
 * @param {*} init Initial value
 * @return {*} Final value that satisfies predicate
 * @example
 *
 *      R.until(R.gt(R.__, 100), R.multiply(2))(1) // => 128
 */
module.exports = _curry3(function until(pred, fn, init) {
  var val = init;
  while (!pred(val)) {
    val = fn(val);
  }
  return val;
});


/***/ }),
/* 444 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);


/**
 * Returns a list of all the properties, including prototype properties, of the
 * supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own and prototype properties.
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.valuesIn(f); //=> ['X', 'Y']
 */
module.exports = _curry1(function valuesIn(obj) {
  var prop;
  var vs = [];
  for (prop in obj) {
    vs[vs.length] = obj[prop];
  }
  return vs;
});


/***/ }),
/* 445 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns a "view" of the given data structure, determined by the given lens.
 * The lens's focus determines which portion of the data structure is visible.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> s -> a
 * @param {Lens} lens
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});  //=> 1
 *      R.view(xLens, {x: 4, y: 2});  //=> 4
 */
module.exports = (function() {
  // `Const` is a functor that effectively ignores the function given to `map`.
  var Const = function(x) {
    return {value: x, map: function() { return this; }};
  };

  return _curry2(function view(lens, x) {
    // Using `Const` effectively ignores the setter function of the `lens`,
    // leaving the value returned by the getter function unmodified.
    return lens(Const)(x).value;
  });
}());


/***/ }),
/* 446 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);


/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is satisfied, the function will return the result of calling
 * the `whenTrueFn` function with the same argument. If the predicate is not
 * satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred       A predicate function
 * @param {Function} whenTrueFn A function to invoke when the `condition`
 *                              evaluates to a truthy value.
 * @param {*}        x          An object to test with the `pred` function and
 *                              pass to `whenTrueFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenTrueFn`.
 * @see R.ifElse, R.unless
 * @example
 *
 *      // truncate :: String -> String
 *      var truncate = R.when(
 *        R.propSatisfies(R.gt(R.__, 10), 'length'),
 *        R.pipe(R.take(10), R.append('…'), R.join(''))
 *      );
 *      truncate('12345');         //=> '12345'
 *      truncate('0123456789ABC'); //=> '0123456789…'
 */
module.exports = _curry3(function when(pred, whenTrueFn, x) {
  return pred(x) ? whenTrueFn(x) : x;
});


/***/ }),
/* 447 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var equals = __webpack_require__(22);
var map = __webpack_require__(15);
var where = __webpack_require__(172);


/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec, false otherwise. An object satisfies the spec if, for each of the
 * spec's own properties, accessing that property of the object gives the same
 * value (in `R.equals` terms) as accessing that property of the spec.
 *
 * `whereEq` is a specialization of [`where`](#where).
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @sig {String: *} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @see R.where
 * @example
 *
 *      // pred :: Object -> Boolean
 *      var pred = R.whereEq({a: 1, b: 2});
 *
 *      pred({a: 1});              //=> false
 *      pred({a: 1, b: 2});        //=> true
 *      pred({a: 1, b: 2, c: 3});  //=> true
 *      pred({a: 1, b: 1});        //=> false
 */
module.exports = _curry2(function whereEq(spec, testObj) {
  return where(map(equals, spec), testObj);
});


/***/ }),
/* 448 */
/***/ (function(module, exports, __webpack_require__) {

var _contains = __webpack_require__(29);
var _curry2 = __webpack_require__(0);
var flip = __webpack_require__(57);
var reject = __webpack_require__(67);


/**
 * Returns a new list without values in the first argument.
 * `R.equals` is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @param {Array} list1 The values to be removed from `list2`.
 * @param {Array} list2 The array to remove values from.
 * @return {Array} The new array without values in `list1`.
 * @see R.transduce
 * @example
 *
 *      R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
 */
module.exports = _curry2(function(xs, list) {
  return reject(flip(_contains)(xs), list);
});


/***/ }),
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Creates a new list out of the two supplied by creating each possible pair
 * from the lists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b] -> [[a,b]]
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The list made by combining each possible pair from
 *         `as` and `bs` into pairs (`[a, b]`).
 * @example
 *
 *      R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
 * @symb R.xprod([a, b], [c, d]) = [[a, c], [a, d], [b, c], [b, d]]
 */
module.exports = _curry2(function xprod(a, b) { // = xprodWith(prepend); (takes about 3 times as long...)
  var idx = 0;
  var ilen = a.length;
  var j;
  var jlen = b.length;
  var result = [];
  while (idx < ilen) {
    j = 0;
    while (j < jlen) {
      result[result.length] = [a[idx], b[j]];
      j += 1;
    }
    idx += 1;
  }
  return result;
});


/***/ }),
/* 450 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Creates a new list out of the two supplied by pairing up equally-positioned
 * items from both lists. The returned list is truncated to the length of the
 * shorter of the two input lists.
 * Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b] -> [[a,b]]
 * @param {Array} list1 The first array to consider.
 * @param {Array} list2 The second array to consider.
 * @return {Array} The list made by pairing up same-indexed elements of `list1` and `list2`.
 * @example
 *
 *      R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 * @symb R.zip([a, b, c], [d, e, f]) = [[a, d], [b, e], [c, f]]
 */
module.exports = _curry2(function zip(a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = [a[idx], b[idx]];
    idx += 1;
  }
  return rv;
});


/***/ }),
/* 451 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Creates a new object out of a list of keys and a list of values.
 * Key/value pairing is truncated to the length of the shorter of the two lists.
 * Note: `zipObj` is equivalent to `pipe(zipWith(pair), fromPairs)`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [String] -> [*] -> {String: *}
 * @param {Array} keys The array that will be properties on the output object.
 * @param {Array} values The list of values on the output object.
 * @return {Object} The object made by pairing up same-indexed elements of `keys` and `values`.
 * @example
 *
 *      R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
 */
module.exports = _curry2(function zipObj(keys, values) {
  var idx = 0;
  var len = Math.min(keys.length, values.length);
  var out = {};
  while (idx < len) {
    out[keys[idx]] = values[idx];
    idx += 1;
  }
  return out;
});


/***/ }),
/* 452 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(3);


/**
 * Creates a new list out of the two supplied by applying the function to each
 * equally-positioned pair in the lists. The returned list is truncated to the
 * length of the shorter of the two input lists.
 *
 * @function
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a,b -> c) -> [a] -> [b] -> [c]
 * @param {Function} fn The function used to combine the two elements into one value.
 * @param {Array} list1 The first array to consider.
 * @param {Array} list2 The second array to consider.
 * @return {Array} The list made by combining same-indexed elements of `list1` and `list2`
 *         using `fn`.
 * @example
 *
 *      var f = (x, y) => {
 *        // ...
 *      };
 *      R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
 *      //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
 * @symb R.zipWith(fn, [a, b, c], [d, e, f]) = [fn(a, d), fn(b, e), fn(c, f)]
 */
module.exports = _curry3(function zipWith(fn, a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = fn(a[idx], b[idx]);
    idx += 1;
  }
  return rv;
});


/***/ }),
/* 453 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(2), __webpack_require__(475));
	else if(typeof define === 'function' && define.amd)
		define(["react", "clipboard"], factory);
	else if(typeof exports === 'object')
		exports["ReactClipboard"] = factory(require("react"), require("clipboard"));
	else
		root["ReactClipboard"] = factory(root["React"], root["Clipboard"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_40__, __WEBPACK_EXTERNAL_MODULE_41__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(1)['default'];

	var _inherits = __webpack_require__(17)['default'];

	var _createClass = __webpack_require__(26)['default'];

	var _classCallCheck = __webpack_require__(29)['default'];

	var _extends = __webpack_require__(30)['default'];

	var _Object$keys = __webpack_require__(36)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	var ClipboardButton = (function (_React$Component) {
	  _inherits(ClipboardButton, _React$Component);

	  function ClipboardButton() {
	    _classCallCheck(this, ClipboardButton);

	    _get(Object.getPrototypeOf(ClipboardButton.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(ClipboardButton, [{
	    key: 'propsWith',

	    /* Returns a object with all props that fulfill a certain naming pattern
	     *
	     * @param {RegExp} regexp - Regular expression representing which pattern
	     *                          you'll be searching for.
	     * @param {Boolean} remove - Determines if the regular expression should be
	     *                           removed when transmitting the key from the props
	     *                           to the new object.
	     *
	     * e.g:
	     *
	     * // Considering:
	     * // this.props = {option-foo: 1, onBar: 2, data-foobar: 3 data-baz: 4};
	     *
	     * // *RegExps not using // so that this comment doesn't break up
	     * this.propsWith(option-*, true); // returns {foo: 1}
	     * this.propsWith(on*, true); // returns {Bar: 2}
	     * this.propsWith(data-*); // returns {data-foobar: 1, data-baz: 4}
	     */
	    value: function propsWith(regexp) {
	      var remove = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	      var object = {};

	      _Object$keys(this.props).forEach(function (key) {
	        if (key.search(regexp) !== -1) {
	          var objectKey = remove ? key.replace(regexp, '') : key;
	          object[objectKey] = this.props[key];
	        }
	      }, this);

	      return object;
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.clipboard && this.clipboard.destroy();
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // Support old API by trying to assign this.props.options first;
	      var options = this.props.options || this.propsWith(/^option-/, true);
	      var element = _react2['default'].version.match(/0\.13(.*)/) ? this.refs.element.getDOMNode() : this.refs.element;
	      var Clipboard = __webpack_require__(41);
	      this.clipboard = new Clipboard(element, options);

	      var callbacks = this.propsWith(/^on/, true);
	      _Object$keys(callbacks).forEach(function (callback) {
	        this.clipboard.on(callback.toLowerCase(), this.props['on' + callback]);
	      }, this);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var attributes = _extends({
	        type: this.getType(),
	        className: this.props.className || '',
	        style: this.props.style || {},
	        ref: 'element',
	        onClick: this.props.onClick
	      }, this.propsWith(/^data-/), this.propsWith(/^button-/, true));

	      return _react2['default'].createElement(this.getComponent(), attributes, this.props.children);
	    }
	  }, {
	    key: 'getType',
	    value: function getType() {
	      if (this.getComponent() === 'button' || this.getComponent() === 'input') {
	        return this.props.type || 'button';
	      } else {
	        return undefined;
	      }
	    }
	  }, {
	    key: 'getComponent',
	    value: function getComponent() {
	      return this.props.component || 'button';
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      options: _react2['default'].PropTypes.object,
	      type: _react2['default'].PropTypes.string,
	      className: _react2['default'].PropTypes.string,
	      style: _react2['default'].PropTypes.object,
	      component: _react2['default'].PropTypes.string,
	      children: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string, _react2['default'].PropTypes.number, _react2['default'].PropTypes.object])
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      onClick: function onClick() {}
	    },
	    enumerable: true
	  }]);

	  return ClipboardButton;
	})(_react2['default'].Component);

	exports['default'] = ClipboardButton;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$getOwnPropertyDescriptor = __webpack_require__(2)["default"];

	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;

	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    _again = false;
	    if (object === null) object = Function.prototype;

	    var desc = _Object$getOwnPropertyDescriptor(object, property);

	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);

	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        desc = parent = undefined;
	        continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;

	      if (getter === undefined) {
	        return undefined;
	      }

	      return getter.call(receiver);
	    }
	  }
	};

	exports.__esModule = true;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);
	__webpack_require__(5);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(6);

	__webpack_require__(10)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(7)
	  , defined = __webpack_require__(9);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(8);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(11)
	  , core    = __webpack_require__(13)
	  , fails   = __webpack_require__(16);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(12)
	  , core      = __webpack_require__(13)
	  , ctx       = __webpack_require__(14)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 12 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 13 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(15);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$create = __webpack_require__(18)["default"];

	var _Object$setPrototypeOf = __webpack_require__(20)["default"];

	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	exports.__esModule = true;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(19), __esModule: true };

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(21), __esModule: true };

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(22);
	module.exports = __webpack_require__(13).Object.setPrototypeOf;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(11);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(23).set});

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(4).getDesc
	  , isObject = __webpack_require__(24)
	  , anObject = __webpack_require__(25);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(14)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(24);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$defineProperty = __webpack_require__(27)["default"];

	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;

	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

	exports.__esModule = true;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(28), __esModule: true };

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	exports.__esModule = true;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$assign = __webpack_require__(31)["default"];

	exports["default"] = _Object$assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

	exports.__esModule = true;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(32), __esModule: true };

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(33);
	module.exports = __webpack_require__(13).Object.assign;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(11);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(34)});

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(4)
	  , toObject = __webpack_require__(35)
	  , IObject  = __webpack_require__(7);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(16)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(9);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(37), __esModule: true };

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(38);
	module.exports = __webpack_require__(13).Object.keys;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(35);

	__webpack_require__(10)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_40__;

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_41__;

/***/ }
/******/ ])
});
;

/***/ }),
/* 454 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = __webpack_require__(2);

var _themrShape = __webpack_require__(456);

var _themrShape2 = _interopRequireDefault(_themrShape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ThemeProvider = (_temp = _class = function (_Component) {
  _inherits(ThemeProvider, _Component);

  function ThemeProvider() {
    _classCallCheck(this, ThemeProvider);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  ThemeProvider.prototype.getChildContext = function getChildContext() {
    return {
      themr: {
        theme: this.props.theme
      }
    };
  };

  ThemeProvider.prototype.render = function render() {
    return _react.Children.only(this.props.children);
  };

  return ThemeProvider;
}(_react.Component), _class.propTypes = {
  children: _react.PropTypes.element.isRequired,
  theme: _react.PropTypes.object.isRequired
}, _class.defaultProps = {
  theme: {}
}, _class.childContextTypes = {
  themr: _themrShape2.default.isRequired
}, _temp);
exports.default = ThemeProvider;

/***/ }),
/* 455 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.themeable = themeable;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _invariant = __webpack_require__(258);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @typedef {Object.<string, TReactCSSThemrTheme>} TReactCSSThemrTheme
 */

/**
 * @typedef {{}} TReactCSSThemrOptions
 * @property {String|Boolean} [composeTheme=COMPOSE_DEEPLY]
 * @property {Boolean} [withRef=false]
 */

var COMPOSE_DEEPLY = 'deeply';
var COMPOSE_SOFTLY = 'softly';
var DONT_COMPOSE = false;

var DEFAULT_OPTIONS = {
  composeTheme: COMPOSE_DEEPLY,
  withRef: false
};

var THEMR_CONFIG = typeof Symbol !== 'undefined' ? Symbol('THEMR_CONFIG') : '__REACT_CSS_THEMR_CONFIG__';

/**
 * Themr decorator
 * @param {String|Number|Symbol} componentName - Component name
 * @param {TReactCSSThemrTheme} [localTheme] - Base theme
 * @param {{}} [options] - Themr options
 * @returns {function(ThemedComponent:Function):Function} - ThemedComponent
 */

exports.default = function (componentName, localTheme) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return function (ThemedComponent) {
    var _class, _temp;

    var _DEFAULT_OPTIONS$opti = _extends({}, DEFAULT_OPTIONS, options),
        optionComposeTheme = _DEFAULT_OPTIONS$opti.composeTheme,
        optionWithRef = _DEFAULT_OPTIONS$opti.withRef;

    validateComposeOption(optionComposeTheme);

    var config = ThemedComponent[THEMR_CONFIG];
    if (config && config.componentName === componentName) {
      config.localTheme = themeable(config.localTheme, localTheme);
      return ThemedComponent;
    }

    config = {
      componentName: componentName,
      localTheme: localTheme
    };

    /**
     * @property {{wrappedInstance: *}} refs
     */
    var Themed = (_temp = _class = function (_Component) {
      _inherits(Themed, _Component);

      function Themed() {
        _classCallCheck(this, Themed);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args)));

        _this.theme_ = _this.calcTheme(_this.props);
        return _this;
      }

      Themed.prototype.getWrappedInstance = function getWrappedInstance() {
        (0, _invariant2.default)(optionWithRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the third argument of the themr() call.');

        return this.refs.wrappedInstance;
      };

      Themed.prototype.getNamespacedTheme = function getNamespacedTheme(props) {
        var themeNamespace = props.themeNamespace,
            theme = props.theme;

        if (!themeNamespace) return theme;
        if (themeNamespace && !theme) throw new Error('Invalid themeNamespace use in react-css-themr. ' + 'themeNamespace prop should be used only with theme prop.');

        return Object.keys(theme).filter(function (key) {
          return key.startsWith(themeNamespace);
        }).reduce(function (result, key) {
          var _extends2;

          return _extends({}, result, (_extends2 = {}, _extends2[removeNamespace(key, themeNamespace)] = theme[key], _extends2));
        }, {});
      };

      Themed.prototype.getThemeNotComposed = function getThemeNotComposed(props) {
        if (props.theme) return this.getNamespacedTheme(props);
        if (config.localTheme) return config.localTheme;
        return this.getContextTheme();
      };

      Themed.prototype.getContextTheme = function getContextTheme() {
        return this.context.themr ? this.context.themr.theme[config.componentName] : {};
      };

      Themed.prototype.getTheme = function getTheme(props) {
        return props.composeTheme === COMPOSE_SOFTLY ? _extends({}, this.getContextTheme(), config.localTheme, this.getNamespacedTheme(props)) : themeable(themeable(this.getContextTheme(), config.localTheme), this.getNamespacedTheme(props));
      };

      Themed.prototype.calcTheme = function calcTheme(props) {
        var composeTheme = props.composeTheme;

        return composeTheme ? this.getTheme(props) : this.getThemeNotComposed(props);
      };

      Themed.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (nextProps.composeTheme !== this.props.composeTheme || nextProps.theme !== this.props.theme || nextProps.themeNamespace !== this.props.themeNamespace) {
          this.theme_ = this.calcTheme(nextProps);
        }
      };

      Themed.prototype.render = function render() {
        var renderedElement = void 0;
        //exclude themr-only props
        //noinspection JSUnusedLocalSymbols

        var _props = this.props,
            composeTheme = _props.composeTheme,
            themeNamespace = _props.themeNamespace,
            props = _objectWithoutProperties(_props, ['composeTheme', 'themeNamespace']); //eslint-disable-line no-unused-vars

        if (optionWithRef) {
          renderedElement = _react2.default.createElement(ThemedComponent, _extends({}, props, {
            ref: 'wrappedInstance',
            theme: this.theme_
          }));
        } else {
          renderedElement = _react2.default.createElement(ThemedComponent, _extends({}, props, {
            theme: this.theme_
          }));
        }

        return renderedElement;
      };

      return Themed;
    }(_react.Component), _class.displayName = 'Themed' + ThemedComponent.name, _class.contextTypes = {
      themr: _react.PropTypes.object
    }, _class.propTypes = _extends({}, ThemedComponent.propTypes, {
      composeTheme: _react.PropTypes.oneOf([COMPOSE_DEEPLY, COMPOSE_SOFTLY, DONT_COMPOSE]),
      theme: _react.PropTypes.object,
      themeNamespace: _react.PropTypes.string
    }), _class.defaultProps = _extends({}, ThemedComponent.defaultProps, {
      composeTheme: optionComposeTheme
    }), _temp);


    Themed[THEMR_CONFIG] = config;

    return Themed;
  };
};

/**
 * Merges two themes by concatenating values with the same keys
 * @param {TReactCSSThemrTheme} [original] - Original theme object
 * @param {TReactCSSThemrTheme} [mixin] - Mixing theme object
 * @returns {TReactCSSThemrTheme} - Merged resulting theme
 */


function themeable() {
  var original = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var mixin = arguments[1];

  //don't merge if no mixin is passed
  if (!mixin) return original;

  //merge themes by concatenating values with the same keys
  return Object.keys(mixin).reduce(

  //merging reducer
  function (result, key) {
    var _extends3;

    var originalValue = original[key] || '';
    var mixinValue = mixin[key] || '';

    var newValue = void 0;

    //when you are mixing an string with a object it should fail
    (0, _invariant2.default)(!(typeof originalValue === 'string' && (typeof mixinValue === 'undefined' ? 'undefined' : _typeof(mixinValue)) === 'object'), 'You are merging a string "' + originalValue + '" with an Object,' + 'Make sure you are passing the proper theme descriptors.');

    //check if values are nested objects
    if ((typeof originalValue === 'undefined' ? 'undefined' : _typeof(originalValue)) === 'object' && (typeof mixinValue === 'undefined' ? 'undefined' : _typeof(mixinValue)) === 'object') {
      //go recursive
      newValue = themeable(originalValue, mixinValue);
    } else {
      //either concat or take mixin value
      newValue = originalValue.split(' ').concat(mixinValue.split(' ')).filter(function (item, pos, self) {
        return self.indexOf(item) === pos && item !== '';
      }).join(' ');
    }

    return _extends({}, result, (_extends3 = {}, _extends3[key] = newValue, _extends3));
  },

  //use original theme as an acc
  original);
}

/**
 * Validates compose option
 * @param {String|Boolean} composeTheme - Compose them option
 * @throws
 * @returns {undefined}
 */
function validateComposeOption(composeTheme) {
  if ([COMPOSE_DEEPLY, COMPOSE_SOFTLY, DONT_COMPOSE].indexOf(composeTheme) === -1) {
    throw new Error('Invalid composeTheme option for react-css-themr. Valid composition options are ' + COMPOSE_DEEPLY + ', ' + COMPOSE_SOFTLY + ' and ' + DONT_COMPOSE + '. The given option was ' + composeTheme);
  }
}

/**
 * Removes namespace from key
 * @param {String} key - Key
 * @param {String} themeNamespace - Theme namespace
 * @returns {String} - Key
 */
function removeNamespace(key, themeNamespace) {
  var capitalized = key.substr(themeNamespace.length);
  return capitalized.slice(0, 1).toLowerCase() + capitalized.slice(1);
}

/***/ }),
/* 456 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(2);

exports.default = _react.PropTypes.shape({
  theme: _react.PropTypes.object.isRequired
});

/***/ }),
/* 457 */
/***/ (function(module, exports) {

module.exports = [
  "alignContent",
  "MozAlignContent",
  "WebkitAlignContent",
  "MSAlignContent",
  "OAlignContent",
  "alignItems",
  "MozAlignItems",
  "WebkitAlignItems",
  "MSAlignItems",
  "OAlignItems",
  "alignSelf",
  "MozAlignSelf",
  "WebkitAlignSelf",
  "MSAlignSelf",
  "OAlignSelf",
  "all",
  "MozAll",
  "WebkitAll",
  "MSAll",
  "OAll",
  "animation",
  "MozAnimation",
  "WebkitAnimation",
  "MSAnimation",
  "OAnimation",
  "animationDelay",
  "MozAnimationDelay",
  "WebkitAnimationDelay",
  "MSAnimationDelay",
  "OAnimationDelay",
  "animationDirection",
  "MozAnimationDirection",
  "WebkitAnimationDirection",
  "MSAnimationDirection",
  "OAnimationDirection",
  "animationDuration",
  "MozAnimationDuration",
  "WebkitAnimationDuration",
  "MSAnimationDuration",
  "OAnimationDuration",
  "animationFillMode",
  "MozAnimationFillMode",
  "WebkitAnimationFillMode",
  "MSAnimationFillMode",
  "OAnimationFillMode",
  "animationIterationCount",
  "MozAnimationIterationCount",
  "WebkitAnimationIterationCount",
  "MSAnimationIterationCount",
  "OAnimationIterationCount",
  "animationName",
  "MozAnimationName",
  "WebkitAnimationName",
  "MSAnimationName",
  "OAnimationName",
  "animationPlayState",
  "MozAnimationPlayState",
  "WebkitAnimationPlayState",
  "MSAnimationPlayState",
  "OAnimationPlayState",
  "animationTimingFunction",
  "MozAnimationTimingFunction",
  "WebkitAnimationTimingFunction",
  "MSAnimationTimingFunction",
  "OAnimationTimingFunction",
  "backfaceVisibility",
  "MozBackfaceVisibility",
  "WebkitBackfaceVisibility",
  "MSBackfaceVisibility",
  "OBackfaceVisibility",
  "background",
  "MozBackground",
  "WebkitBackground",
  "MSBackground",
  "OBackground",
  "backgroundAttachment",
  "MozBackgroundAttachment",
  "WebkitBackgroundAttachment",
  "MSBackgroundAttachment",
  "OBackgroundAttachment",
  "backgroundBlendMode",
  "MozBackgroundBlendMode",
  "WebkitBackgroundBlendMode",
  "MSBackgroundBlendMode",
  "OBackgroundBlendMode",
  "backgroundClip",
  "MozBackgroundClip",
  "WebkitBackgroundClip",
  "MSBackgroundClip",
  "OBackgroundClip",
  "backgroundColor",
  "MozBackgroundColor",
  "WebkitBackgroundColor",
  "MSBackgroundColor",
  "OBackgroundColor",
  "backgroundImage",
  "MozBackgroundImage",
  "WebkitBackgroundImage",
  "MSBackgroundImage",
  "OBackgroundImage",
  "backgroundOrigin",
  "MozBackgroundOrigin",
  "WebkitBackgroundOrigin",
  "MSBackgroundOrigin",
  "OBackgroundOrigin",
  "backgroundPosition",
  "MozBackgroundPosition",
  "WebkitBackgroundPosition",
  "MSBackgroundPosition",
  "OBackgroundPosition",
  "backgroundRepeat",
  "MozBackgroundRepeat",
  "WebkitBackgroundRepeat",
  "MSBackgroundRepeat",
  "OBackgroundRepeat",
  "backgroundSize",
  "MozBackgroundSize",
  "WebkitBackgroundSize",
  "MSBackgroundSize",
  "OBackgroundSize",
  "blockSize",
  "MozBlockSize",
  "WebkitBlockSize",
  "MSBlockSize",
  "OBlockSize",
  "border",
  "MozBorder",
  "WebkitBorder",
  "MSBorder",
  "OBorder",
  "borderBlockEnd",
  "MozBorderBlockEnd",
  "WebkitBorderBlockEnd",
  "MSBorderBlockEnd",
  "OBorderBlockEnd",
  "borderBlockEndColor",
  "MozBorderBlockEndColor",
  "WebkitBorderBlockEndColor",
  "MSBorderBlockEndColor",
  "OBorderBlockEndColor",
  "borderBlockEndStyle",
  "MozBorderBlockEndStyle",
  "WebkitBorderBlockEndStyle",
  "MSBorderBlockEndStyle",
  "OBorderBlockEndStyle",
  "borderBlockEndWidth",
  "MozBorderBlockEndWidth",
  "WebkitBorderBlockEndWidth",
  "MSBorderBlockEndWidth",
  "OBorderBlockEndWidth",
  "borderBlockStart",
  "MozBorderBlockStart",
  "WebkitBorderBlockStart",
  "MSBorderBlockStart",
  "OBorderBlockStart",
  "borderBlockStartColor",
  "MozBorderBlockStartColor",
  "WebkitBorderBlockStartColor",
  "MSBorderBlockStartColor",
  "OBorderBlockStartColor",
  "borderBlockStartStyle",
  "MozBorderBlockStartStyle",
  "WebkitBorderBlockStartStyle",
  "MSBorderBlockStartStyle",
  "OBorderBlockStartStyle",
  "borderBlockStartWidth",
  "MozBorderBlockStartWidth",
  "WebkitBorderBlockStartWidth",
  "MSBorderBlockStartWidth",
  "OBorderBlockStartWidth",
  "borderBottom",
  "MozBorderBottom",
  "WebkitBorderBottom",
  "MSBorderBottom",
  "OBorderBottom",
  "borderBottomColor",
  "MozBorderBottomColor",
  "WebkitBorderBottomColor",
  "MSBorderBottomColor",
  "OBorderBottomColor",
  "borderBottomLeftRadius",
  "MozBorderBottomLeftRadius",
  "WebkitBorderBottomLeftRadius",
  "MSBorderBottomLeftRadius",
  "OBorderBottomLeftRadius",
  "borderBottomRightRadius",
  "MozBorderBottomRightRadius",
  "WebkitBorderBottomRightRadius",
  "MSBorderBottomRightRadius",
  "OBorderBottomRightRadius",
  "borderBottomStyle",
  "MozBorderBottomStyle",
  "WebkitBorderBottomStyle",
  "MSBorderBottomStyle",
  "OBorderBottomStyle",
  "borderBottomWidth",
  "MozBorderBottomWidth",
  "WebkitBorderBottomWidth",
  "MSBorderBottomWidth",
  "OBorderBottomWidth",
  "borderCollapse",
  "MozBorderCollapse",
  "WebkitBorderCollapse",
  "MSBorderCollapse",
  "OBorderCollapse",
  "borderColor",
  "MozBorderColor",
  "WebkitBorderColor",
  "MSBorderColor",
  "OBorderColor",
  "borderImage",
  "MozBorderImage",
  "WebkitBorderImage",
  "MSBorderImage",
  "OBorderImage",
  "borderImageOutset",
  "MozBorderImageOutset",
  "WebkitBorderImageOutset",
  "MSBorderImageOutset",
  "OBorderImageOutset",
  "borderImageRepeat",
  "MozBorderImageRepeat",
  "WebkitBorderImageRepeat",
  "MSBorderImageRepeat",
  "OBorderImageRepeat",
  "borderImageSlice",
  "MozBorderImageSlice",
  "WebkitBorderImageSlice",
  "MSBorderImageSlice",
  "OBorderImageSlice",
  "borderImageSource",
  "MozBorderImageSource",
  "WebkitBorderImageSource",
  "MSBorderImageSource",
  "OBorderImageSource",
  "borderImageWidth",
  "MozBorderImageWidth",
  "WebkitBorderImageWidth",
  "MSBorderImageWidth",
  "OBorderImageWidth",
  "borderInlineEnd",
  "MozBorderInlineEnd",
  "WebkitBorderInlineEnd",
  "MSBorderInlineEnd",
  "OBorderInlineEnd",
  "borderInlineEndColor",
  "MozBorderInlineEndColor",
  "WebkitBorderInlineEndColor",
  "MSBorderInlineEndColor",
  "OBorderInlineEndColor",
  "borderInlineEndStyle",
  "MozBorderInlineEndStyle",
  "WebkitBorderInlineEndStyle",
  "MSBorderInlineEndStyle",
  "OBorderInlineEndStyle",
  "borderInlineEndWidth",
  "MozBorderInlineEndWidth",
  "WebkitBorderInlineEndWidth",
  "MSBorderInlineEndWidth",
  "OBorderInlineEndWidth",
  "borderInlineStart",
  "MozBorderInlineStart",
  "WebkitBorderInlineStart",
  "MSBorderInlineStart",
  "OBorderInlineStart",
  "borderInlineStartColor",
  "MozBorderInlineStartColor",
  "WebkitBorderInlineStartColor",
  "MSBorderInlineStartColor",
  "OBorderInlineStartColor",
  "borderInlineStartStyle",
  "MozBorderInlineStartStyle",
  "WebkitBorderInlineStartStyle",
  "MSBorderInlineStartStyle",
  "OBorderInlineStartStyle",
  "borderInlineStartWidth",
  "MozBorderInlineStartWidth",
  "WebkitBorderInlineStartWidth",
  "MSBorderInlineStartWidth",
  "OBorderInlineStartWidth",
  "borderLeft",
  "MozBorderLeft",
  "WebkitBorderLeft",
  "MSBorderLeft",
  "OBorderLeft",
  "borderLeftColor",
  "MozBorderLeftColor",
  "WebkitBorderLeftColor",
  "MSBorderLeftColor",
  "OBorderLeftColor",
  "borderLeftStyle",
  "MozBorderLeftStyle",
  "WebkitBorderLeftStyle",
  "MSBorderLeftStyle",
  "OBorderLeftStyle",
  "borderLeftWidth",
  "MozBorderLeftWidth",
  "WebkitBorderLeftWidth",
  "MSBorderLeftWidth",
  "OBorderLeftWidth",
  "borderRadius",
  "MozBorderRadius",
  "WebkitBorderRadius",
  "MSBorderRadius",
  "OBorderRadius",
  "borderRight",
  "MozBorderRight",
  "WebkitBorderRight",
  "MSBorderRight",
  "OBorderRight",
  "borderRightColor",
  "MozBorderRightColor",
  "WebkitBorderRightColor",
  "MSBorderRightColor",
  "OBorderRightColor",
  "borderRightStyle",
  "MozBorderRightStyle",
  "WebkitBorderRightStyle",
  "MSBorderRightStyle",
  "OBorderRightStyle",
  "borderRightWidth",
  "MozBorderRightWidth",
  "WebkitBorderRightWidth",
  "MSBorderRightWidth",
  "OBorderRightWidth",
  "borderSpacing",
  "MozBorderSpacing",
  "WebkitBorderSpacing",
  "MSBorderSpacing",
  "OBorderSpacing",
  "borderStyle",
  "MozBorderStyle",
  "WebkitBorderStyle",
  "MSBorderStyle",
  "OBorderStyle",
  "borderTop",
  "MozBorderTop",
  "WebkitBorderTop",
  "MSBorderTop",
  "OBorderTop",
  "borderTopColor",
  "MozBorderTopColor",
  "WebkitBorderTopColor",
  "MSBorderTopColor",
  "OBorderTopColor",
  "borderTopLeftRadius",
  "MozBorderTopLeftRadius",
  "WebkitBorderTopLeftRadius",
  "MSBorderTopLeftRadius",
  "OBorderTopLeftRadius",
  "borderTopRightRadius",
  "MozBorderTopRightRadius",
  "WebkitBorderTopRightRadius",
  "MSBorderTopRightRadius",
  "OBorderTopRightRadius",
  "borderTopStyle",
  "MozBorderTopStyle",
  "WebkitBorderTopStyle",
  "MSBorderTopStyle",
  "OBorderTopStyle",
  "borderTopWidth",
  "MozBorderTopWidth",
  "WebkitBorderTopWidth",
  "MSBorderTopWidth",
  "OBorderTopWidth",
  "borderWidth",
  "MozBorderWidth",
  "WebkitBorderWidth",
  "MSBorderWidth",
  "OBorderWidth",
  "bottom",
  "MozBottom",
  "WebkitBottom",
  "MSBottom",
  "OBottom",
  "boxDecorationBreak",
  "MozBoxDecorationBreak",
  "WebkitBoxDecorationBreak",
  "MSBoxDecorationBreak",
  "OBoxDecorationBreak",
  "boxShadow",
  "MozBoxShadow",
  "WebkitBoxShadow",
  "MSBoxShadow",
  "OBoxShadow",
  "boxSizing",
  "MozBoxSizing",
  "WebkitBoxSizing",
  "MSBoxSizing",
  "OBoxSizing",
  "breakAfter",
  "MozBreakAfter",
  "WebkitBreakAfter",
  "MSBreakAfter",
  "OBreakAfter",
  "breakBefore",
  "MozBreakBefore",
  "WebkitBreakBefore",
  "MSBreakBefore",
  "OBreakBefore",
  "breakInside",
  "MozBreakInside",
  "WebkitBreakInside",
  "MSBreakInside",
  "OBreakInside",
  "captionSide",
  "MozCaptionSide",
  "WebkitCaptionSide",
  "MSCaptionSide",
  "OCaptionSide",
  "caretColor",
  "MozCaretColor",
  "WebkitCaretColor",
  "MSCaretColor",
  "OCaretColor",
  "ch",
  "MozCh",
  "WebkitCh",
  "MSCh",
  "OCh",
  "clear",
  "MozClear",
  "WebkitClear",
  "MSClear",
  "OClear",
  "clip",
  "MozClip",
  "WebkitClip",
  "MSClip",
  "OClip",
  "clipPath",
  "MozClipPath",
  "WebkitClipPath",
  "MSClipPath",
  "OClipPath",
  "cm",
  "MozCm",
  "WebkitCm",
  "MSCm",
  "OCm",
  "color",
  "MozColor",
  "WebkitColor",
  "MSColor",
  "OColor",
  "columnCount",
  "MozColumnCount",
  "WebkitColumnCount",
  "MSColumnCount",
  "OColumnCount",
  "columnFill",
  "MozColumnFill",
  "WebkitColumnFill",
  "MSColumnFill",
  "OColumnFill",
  "columnGap",
  "MozColumnGap",
  "WebkitColumnGap",
  "MSColumnGap",
  "OColumnGap",
  "columnRule",
  "MozColumnRule",
  "WebkitColumnRule",
  "MSColumnRule",
  "OColumnRule",
  "columnRuleColor",
  "MozColumnRuleColor",
  "WebkitColumnRuleColor",
  "MSColumnRuleColor",
  "OColumnRuleColor",
  "columnRuleStyle",
  "MozColumnRuleStyle",
  "WebkitColumnRuleStyle",
  "MSColumnRuleStyle",
  "OColumnRuleStyle",
  "columnRuleWidth",
  "MozColumnRuleWidth",
  "WebkitColumnRuleWidth",
  "MSColumnRuleWidth",
  "OColumnRuleWidth",
  "columnSpan",
  "MozColumnSpan",
  "WebkitColumnSpan",
  "MSColumnSpan",
  "OColumnSpan",
  "columnWidth",
  "MozColumnWidth",
  "WebkitColumnWidth",
  "MSColumnWidth",
  "OColumnWidth",
  "columns",
  "MozColumns",
  "WebkitColumns",
  "MSColumns",
  "OColumns",
  "content",
  "MozContent",
  "WebkitContent",
  "MSContent",
  "OContent",
  "counterIncrement",
  "MozCounterIncrement",
  "WebkitCounterIncrement",
  "MSCounterIncrement",
  "OCounterIncrement",
  "counterReset",
  "MozCounterReset",
  "WebkitCounterReset",
  "MSCounterReset",
  "OCounterReset",
  "cursor",
  "MozCursor",
  "WebkitCursor",
  "MSCursor",
  "OCursor",
  "deg",
  "MozDeg",
  "WebkitDeg",
  "MSDeg",
  "ODeg",
  "direction",
  "MozDirection",
  "WebkitDirection",
  "MSDirection",
  "ODirection",
  "display",
  "MozDisplay",
  "WebkitDisplay",
  "MSDisplay",
  "ODisplay",
  "dpcm",
  "MozDpcm",
  "WebkitDpcm",
  "MSDpcm",
  "ODpcm",
  "dpi",
  "MozDpi",
  "WebkitDpi",
  "MSDpi",
  "ODpi",
  "dppx",
  "MozDppx",
  "WebkitDppx",
  "MSDppx",
  "ODppx",
  "em",
  "MozEm",
  "WebkitEm",
  "MSEm",
  "OEm",
  "emptyCells",
  "MozEmptyCells",
  "WebkitEmptyCells",
  "MSEmptyCells",
  "OEmptyCells",
  "ex",
  "MozEx",
  "WebkitEx",
  "MSEx",
  "OEx",
  "filter",
  "MozFilter",
  "WebkitFilter",
  "MSFilter",
  "OFilter",
  "flexBasis",
  "MozFlexBasis",
  "WebkitFlexBasis",
  "MSFlexBasis",
  "OFlexBasis",
  "flexDirection",
  "MozFlexDirection",
  "WebkitFlexDirection",
  "MSFlexDirection",
  "OFlexDirection",
  "flexFlow",
  "MozFlexFlow",
  "WebkitFlexFlow",
  "MSFlexFlow",
  "OFlexFlow",
  "flexGrow",
  "MozFlexGrow",
  "WebkitFlexGrow",
  "MSFlexGrow",
  "OFlexGrow",
  "flexShrink",
  "MozFlexShrink",
  "WebkitFlexShrink",
  "MSFlexShrink",
  "OFlexShrink",
  "flexWrap",
  "MozFlexWrap",
  "WebkitFlexWrap",
  "MSFlexWrap",
  "OFlexWrap",
  "float",
  "MozFloat",
  "WebkitFloat",
  "MSFloat",
  "OFloat",
  "font",
  "MozFont",
  "WebkitFont",
  "MSFont",
  "OFont",
  "fontFamily",
  "MozFontFamily",
  "WebkitFontFamily",
  "MSFontFamily",
  "OFontFamily",
  "fontFeatureSettings",
  "MozFontFeatureSettings",
  "WebkitFontFeatureSettings",
  "MSFontFeatureSettings",
  "OFontFeatureSettings",
  "fontKerning",
  "MozFontKerning",
  "WebkitFontKerning",
  "MSFontKerning",
  "OFontKerning",
  "fontLanguageOverride",
  "MozFontLanguageOverride",
  "WebkitFontLanguageOverride",
  "MSFontLanguageOverride",
  "OFontLanguageOverride",
  "fontSize",
  "MozFontSize",
  "WebkitFontSize",
  "MSFontSize",
  "OFontSize",
  "fontSizeAdjust",
  "MozFontSizeAdjust",
  "WebkitFontSizeAdjust",
  "MSFontSizeAdjust",
  "OFontSizeAdjust",
  "fontStretch",
  "MozFontStretch",
  "WebkitFontStretch",
  "MSFontStretch",
  "OFontStretch",
  "fontStyle",
  "MozFontStyle",
  "WebkitFontStyle",
  "MSFontStyle",
  "OFontStyle",
  "fontSynthesis",
  "MozFontSynthesis",
  "WebkitFontSynthesis",
  "MSFontSynthesis",
  "OFontSynthesis",
  "fontVariant",
  "MozFontVariant",
  "WebkitFontVariant",
  "MSFontVariant",
  "OFontVariant",
  "fontVariantAlternates",
  "MozFontVariantAlternates",
  "WebkitFontVariantAlternates",
  "MSFontVariantAlternates",
  "OFontVariantAlternates",
  "fontVariantCaps",
  "MozFontVariantCaps",
  "WebkitFontVariantCaps",
  "MSFontVariantCaps",
  "OFontVariantCaps",
  "fontVariantEastAsian",
  "MozFontVariantEastAsian",
  "WebkitFontVariantEastAsian",
  "MSFontVariantEastAsian",
  "OFontVariantEastAsian",
  "fontVariantLigatures",
  "MozFontVariantLigatures",
  "WebkitFontVariantLigatures",
  "MSFontVariantLigatures",
  "OFontVariantLigatures",
  "fontVariantNumeric",
  "MozFontVariantNumeric",
  "WebkitFontVariantNumeric",
  "MSFontVariantNumeric",
  "OFontVariantNumeric",
  "fontVariantPosition",
  "MozFontVariantPosition",
  "WebkitFontVariantPosition",
  "MSFontVariantPosition",
  "OFontVariantPosition",
  "fontWeight",
  "MozFontWeight",
  "WebkitFontWeight",
  "MSFontWeight",
  "OFontWeight",
  "fr",
  "MozFr",
  "WebkitFr",
  "MSFr",
  "OFr",
  "grad",
  "MozGrad",
  "WebkitGrad",
  "MSGrad",
  "OGrad",
  "grid",
  "MozGrid",
  "WebkitGrid",
  "MSGrid",
  "OGrid",
  "gridArea",
  "MozGridArea",
  "WebkitGridArea",
  "MSGridArea",
  "OGridArea",
  "gridAutoColumns",
  "MozGridAutoColumns",
  "WebkitGridAutoColumns",
  "MSGridAutoColumns",
  "OGridAutoColumns",
  "gridAutoFlow",
  "MozGridAutoFlow",
  "WebkitGridAutoFlow",
  "MSGridAutoFlow",
  "OGridAutoFlow",
  "gridAutoRows",
  "MozGridAutoRows",
  "WebkitGridAutoRows",
  "MSGridAutoRows",
  "OGridAutoRows",
  "gridColumn",
  "MozGridColumn",
  "WebkitGridColumn",
  "MSGridColumn",
  "OGridColumn",
  "gridColumnEnd",
  "MozGridColumnEnd",
  "WebkitGridColumnEnd",
  "MSGridColumnEnd",
  "OGridColumnEnd",
  "gridColumnGap",
  "MozGridColumnGap",
  "WebkitGridColumnGap",
  "MSGridColumnGap",
  "OGridColumnGap",
  "gridColumnStart",
  "MozGridColumnStart",
  "WebkitGridColumnStart",
  "MSGridColumnStart",
  "OGridColumnStart",
  "gridGap",
  "MozGridGap",
  "WebkitGridGap",
  "MSGridGap",
  "OGridGap",
  "gridRow",
  "MozGridRow",
  "WebkitGridRow",
  "MSGridRow",
  "OGridRow",
  "gridRowEnd",
  "MozGridRowEnd",
  "WebkitGridRowEnd",
  "MSGridRowEnd",
  "OGridRowEnd",
  "gridRowGap",
  "MozGridRowGap",
  "WebkitGridRowGap",
  "MSGridRowGap",
  "OGridRowGap",
  "gridRowStart",
  "MozGridRowStart",
  "WebkitGridRowStart",
  "MSGridRowStart",
  "OGridRowStart",
  "gridTemplate",
  "MozGridTemplate",
  "WebkitGridTemplate",
  "MSGridTemplate",
  "OGridTemplate",
  "gridTemplateAreas",
  "MozGridTemplateAreas",
  "WebkitGridTemplateAreas",
  "MSGridTemplateAreas",
  "OGridTemplateAreas",
  "gridTemplateColumns",
  "MozGridTemplateColumns",
  "WebkitGridTemplateColumns",
  "MSGridTemplateColumns",
  "OGridTemplateColumns",
  "gridTemplateRows",
  "MozGridTemplateRows",
  "WebkitGridTemplateRows",
  "MSGridTemplateRows",
  "OGridTemplateRows",
  "height",
  "MozHeight",
  "WebkitHeight",
  "MSHeight",
  "OHeight",
  "hyphens",
  "MozHyphens",
  "WebkitHyphens",
  "MSHyphens",
  "OHyphens",
  "hz",
  "MozHz",
  "WebkitHz",
  "MSHz",
  "OHz",
  "imageOrientation",
  "MozImageOrientation",
  "WebkitImageOrientation",
  "MSImageOrientation",
  "OImageOrientation",
  "imageRendering",
  "MozImageRendering",
  "WebkitImageRendering",
  "MSImageRendering",
  "OImageRendering",
  "imageResolution",
  "MozImageResolution",
  "WebkitImageResolution",
  "MSImageResolution",
  "OImageResolution",
  "imeMode",
  "MozImeMode",
  "WebkitImeMode",
  "MSImeMode",
  "OImeMode",
  "in",
  "MozIn",
  "WebkitIn",
  "MSIn",
  "OIn",
  "inherit",
  "MozInherit",
  "WebkitInherit",
  "MSInherit",
  "OInherit",
  "initial",
  "MozInitial",
  "WebkitInitial",
  "MSInitial",
  "OInitial",
  "inlineSize",
  "MozInlineSize",
  "WebkitInlineSize",
  "MSInlineSize",
  "OInlineSize",
  "isolation",
  "MozIsolation",
  "WebkitIsolation",
  "MSIsolation",
  "OIsolation",
  "justifyContent",
  "MozJustifyContent",
  "WebkitJustifyContent",
  "MSJustifyContent",
  "OJustifyContent",
  "khz",
  "MozKhz",
  "WebkitKhz",
  "MSKhz",
  "OKhz",
  "left",
  "MozLeft",
  "WebkitLeft",
  "MSLeft",
  "OLeft",
  "letterSpacing",
  "MozLetterSpacing",
  "WebkitLetterSpacing",
  "MSLetterSpacing",
  "OLetterSpacing",
  "lineBreak",
  "MozLineBreak",
  "WebkitLineBreak",
  "MSLineBreak",
  "OLineBreak",
  "lineHeight",
  "MozLineHeight",
  "WebkitLineHeight",
  "MSLineHeight",
  "OLineHeight",
  "listStyle",
  "MozListStyle",
  "WebkitListStyle",
  "MSListStyle",
  "OListStyle",
  "listStyleImage",
  "MozListStyleImage",
  "WebkitListStyleImage",
  "MSListStyleImage",
  "OListStyleImage",
  "listStylePosition",
  "MozListStylePosition",
  "WebkitListStylePosition",
  "MSListStylePosition",
  "OListStylePosition",
  "listStyleType",
  "MozListStyleType",
  "WebkitListStyleType",
  "MSListStyleType",
  "OListStyleType",
  "margin",
  "MozMargin",
  "WebkitMargin",
  "MSMargin",
  "OMargin",
  "marginBlockEnd",
  "MozMarginBlockEnd",
  "WebkitMarginBlockEnd",
  "MSMarginBlockEnd",
  "OMarginBlockEnd",
  "marginBlockStart",
  "MozMarginBlockStart",
  "WebkitMarginBlockStart",
  "MSMarginBlockStart",
  "OMarginBlockStart",
  "marginBottom",
  "MozMarginBottom",
  "WebkitMarginBottom",
  "MSMarginBottom",
  "OMarginBottom",
  "marginInlineEnd",
  "MozMarginInlineEnd",
  "WebkitMarginInlineEnd",
  "MSMarginInlineEnd",
  "OMarginInlineEnd",
  "marginInlineStart",
  "MozMarginInlineStart",
  "WebkitMarginInlineStart",
  "MSMarginInlineStart",
  "OMarginInlineStart",
  "marginLeft",
  "MozMarginLeft",
  "WebkitMarginLeft",
  "MSMarginLeft",
  "OMarginLeft",
  "marginRight",
  "MozMarginRight",
  "WebkitMarginRight",
  "MSMarginRight",
  "OMarginRight",
  "marginTop",
  "MozMarginTop",
  "WebkitMarginTop",
  "MSMarginTop",
  "OMarginTop",
  "mask",
  "MozMask",
  "WebkitMask",
  "MSMask",
  "OMask",
  "maskClip",
  "MozMaskClip",
  "WebkitMaskClip",
  "MSMaskClip",
  "OMaskClip",
  "maskComposite",
  "MozMaskComposite",
  "WebkitMaskComposite",
  "MSMaskComposite",
  "OMaskComposite",
  "maskImage",
  "MozMaskImage",
  "WebkitMaskImage",
  "MSMaskImage",
  "OMaskImage",
  "maskMode",
  "MozMaskMode",
  "WebkitMaskMode",
  "MSMaskMode",
  "OMaskMode",
  "maskOrigin",
  "MozMaskOrigin",
  "WebkitMaskOrigin",
  "MSMaskOrigin",
  "OMaskOrigin",
  "maskPosition",
  "MozMaskPosition",
  "WebkitMaskPosition",
  "MSMaskPosition",
  "OMaskPosition",
  "maskRepeat",
  "MozMaskRepeat",
  "WebkitMaskRepeat",
  "MSMaskRepeat",
  "OMaskRepeat",
  "maskSize",
  "MozMaskSize",
  "WebkitMaskSize",
  "MSMaskSize",
  "OMaskSize",
  "maskType",
  "MozMaskType",
  "WebkitMaskType",
  "MSMaskType",
  "OMaskType",
  "maxBlockSize",
  "MozMaxBlockSize",
  "WebkitMaxBlockSize",
  "MSMaxBlockSize",
  "OMaxBlockSize",
  "maxHeight",
  "MozMaxHeight",
  "WebkitMaxHeight",
  "MSMaxHeight",
  "OMaxHeight",
  "maxInlineSize",
  "MozMaxInlineSize",
  "WebkitMaxInlineSize",
  "MSMaxInlineSize",
  "OMaxInlineSize",
  "maxWidth",
  "MozMaxWidth",
  "WebkitMaxWidth",
  "MSMaxWidth",
  "OMaxWidth",
  "minBlockSize",
  "MozMinBlockSize",
  "WebkitMinBlockSize",
  "MSMinBlockSize",
  "OMinBlockSize",
  "minHeight",
  "MozMinHeight",
  "WebkitMinHeight",
  "MSMinHeight",
  "OMinHeight",
  "minInlineSize",
  "MozMinInlineSize",
  "WebkitMinInlineSize",
  "MSMinInlineSize",
  "OMinInlineSize",
  "minWidth",
  "MozMinWidth",
  "WebkitMinWidth",
  "MSMinWidth",
  "OMinWidth",
  "mixBlendMode",
  "MozMixBlendMode",
  "WebkitMixBlendMode",
  "MSMixBlendMode",
  "OMixBlendMode",
  "mm",
  "MozMm",
  "WebkitMm",
  "MSMm",
  "OMm",
  "ms",
  "MozMs",
  "WebkitMs",
  "MSMs",
  "OMs",
  "objectFit",
  "MozObjectFit",
  "WebkitObjectFit",
  "MSObjectFit",
  "OObjectFit",
  "objectPosition",
  "MozObjectPosition",
  "WebkitObjectPosition",
  "MSObjectPosition",
  "OObjectPosition",
  "offsetBlockEnd",
  "MozOffsetBlockEnd",
  "WebkitOffsetBlockEnd",
  "MSOffsetBlockEnd",
  "OOffsetBlockEnd",
  "offsetBlockStart",
  "MozOffsetBlockStart",
  "WebkitOffsetBlockStart",
  "MSOffsetBlockStart",
  "OOffsetBlockStart",
  "offsetInlineEnd",
  "MozOffsetInlineEnd",
  "WebkitOffsetInlineEnd",
  "MSOffsetInlineEnd",
  "OOffsetInlineEnd",
  "offsetInlineStart",
  "MozOffsetInlineStart",
  "WebkitOffsetInlineStart",
  "MSOffsetInlineStart",
  "OOffsetInlineStart",
  "opacity",
  "MozOpacity",
  "WebkitOpacity",
  "MSOpacity",
  "OOpacity",
  "order",
  "MozOrder",
  "WebkitOrder",
  "MSOrder",
  "OOrder",
  "orphans",
  "MozOrphans",
  "WebkitOrphans",
  "MSOrphans",
  "OOrphans",
  "outline",
  "MozOutline",
  "WebkitOutline",
  "MSOutline",
  "OOutline",
  "outlineColor",
  "MozOutlineColor",
  "WebkitOutlineColor",
  "MSOutlineColor",
  "OOutlineColor",
  "outlineOffset",
  "MozOutlineOffset",
  "WebkitOutlineOffset",
  "MSOutlineOffset",
  "OOutlineOffset",
  "outlineStyle",
  "MozOutlineStyle",
  "WebkitOutlineStyle",
  "MSOutlineStyle",
  "OOutlineStyle",
  "outlineWidth",
  "MozOutlineWidth",
  "WebkitOutlineWidth",
  "MSOutlineWidth",
  "OOutlineWidth",
  "overflow",
  "MozOverflow",
  "WebkitOverflow",
  "MSOverflow",
  "OOverflow",
  "overflowWrap",
  "MozOverflowWrap",
  "WebkitOverflowWrap",
  "MSOverflowWrap",
  "OOverflowWrap",
  "overflowX",
  "MozOverflowX",
  "WebkitOverflowX",
  "MSOverflowX",
  "OOverflowX",
  "overflowY",
  "MozOverflowY",
  "WebkitOverflowY",
  "MSOverflowY",
  "OOverflowY",
  "padding",
  "MozPadding",
  "WebkitPadding",
  "MSPadding",
  "OPadding",
  "paddingBlockEnd",
  "MozPaddingBlockEnd",
  "WebkitPaddingBlockEnd",
  "MSPaddingBlockEnd",
  "OPaddingBlockEnd",
  "paddingBlockStart",
  "MozPaddingBlockStart",
  "WebkitPaddingBlockStart",
  "MSPaddingBlockStart",
  "OPaddingBlockStart",
  "paddingBottom",
  "MozPaddingBottom",
  "WebkitPaddingBottom",
  "MSPaddingBottom",
  "OPaddingBottom",
  "paddingInlineEnd",
  "MozPaddingInlineEnd",
  "WebkitPaddingInlineEnd",
  "MSPaddingInlineEnd",
  "OPaddingInlineEnd",
  "paddingInlineStart",
  "MozPaddingInlineStart",
  "WebkitPaddingInlineStart",
  "MSPaddingInlineStart",
  "OPaddingInlineStart",
  "paddingLeft",
  "MozPaddingLeft",
  "WebkitPaddingLeft",
  "MSPaddingLeft",
  "OPaddingLeft",
  "paddingRight",
  "MozPaddingRight",
  "WebkitPaddingRight",
  "MSPaddingRight",
  "OPaddingRight",
  "paddingTop",
  "MozPaddingTop",
  "WebkitPaddingTop",
  "MSPaddingTop",
  "OPaddingTop",
  "pageBreakAfter",
  "MozPageBreakAfter",
  "WebkitPageBreakAfter",
  "MSPageBreakAfter",
  "OPageBreakAfter",
  "pageBreakBefore",
  "MozPageBreakBefore",
  "WebkitPageBreakBefore",
  "MSPageBreakBefore",
  "OPageBreakBefore",
  "pageBreakInside",
  "MozPageBreakInside",
  "WebkitPageBreakInside",
  "MSPageBreakInside",
  "OPageBreakInside",
  "pc",
  "MozPc",
  "WebkitPc",
  "MSPc",
  "OPc",
  "perspective",
  "MozPerspective",
  "WebkitPerspective",
  "MSPerspective",
  "OPerspective",
  "perspectiveOrigin",
  "MozPerspectiveOrigin",
  "WebkitPerspectiveOrigin",
  "MSPerspectiveOrigin",
  "OPerspectiveOrigin",
  "pointerEvents",
  "MozPointerEvents",
  "WebkitPointerEvents",
  "MSPointerEvents",
  "OPointerEvents",
  "position",
  "MozPosition",
  "WebkitPosition",
  "MSPosition",
  "OPosition",
  "pt",
  "MozPt",
  "WebkitPt",
  "MSPt",
  "OPt",
  "px",
  "MozPx",
  "WebkitPx",
  "MSPx",
  "OPx",
  "q",
  "MozQ",
  "WebkitQ",
  "MSQ",
  "OQ",
  "quotes",
  "MozQuotes",
  "WebkitQuotes",
  "MSQuotes",
  "OQuotes",
  "rad",
  "MozRad",
  "WebkitRad",
  "MSRad",
  "ORad",
  "rem",
  "MozRem",
  "WebkitRem",
  "MSRem",
  "ORem",
  "resize",
  "MozResize",
  "WebkitResize",
  "MSResize",
  "OResize",
  "revert",
  "MozRevert",
  "WebkitRevert",
  "MSRevert",
  "ORevert",
  "right",
  "MozRight",
  "WebkitRight",
  "MSRight",
  "ORight",
  "rubyAlign",
  "MozRubyAlign",
  "WebkitRubyAlign",
  "MSRubyAlign",
  "ORubyAlign",
  "rubyMerge",
  "MozRubyMerge",
  "WebkitRubyMerge",
  "MSRubyMerge",
  "ORubyMerge",
  "rubyPosition",
  "MozRubyPosition",
  "WebkitRubyPosition",
  "MSRubyPosition",
  "ORubyPosition",
  "s",
  "MozS",
  "WebkitS",
  "MSS",
  "OS",
  "scrollBehavior",
  "MozScrollBehavior",
  "WebkitScrollBehavior",
  "MSScrollBehavior",
  "OScrollBehavior",
  "scrollSnapCoordinate",
  "MozScrollSnapCoordinate",
  "WebkitScrollSnapCoordinate",
  "MSScrollSnapCoordinate",
  "OScrollSnapCoordinate",
  "scrollSnapDestination",
  "MozScrollSnapDestination",
  "WebkitScrollSnapDestination",
  "MSScrollSnapDestination",
  "OScrollSnapDestination",
  "scrollSnapType",
  "MozScrollSnapType",
  "WebkitScrollSnapType",
  "MSScrollSnapType",
  "OScrollSnapType",
  "shapeImageThreshold",
  "MozShapeImageThreshold",
  "WebkitShapeImageThreshold",
  "MSShapeImageThreshold",
  "OShapeImageThreshold",
  "shapeMargin",
  "MozShapeMargin",
  "WebkitShapeMargin",
  "MSShapeMargin",
  "OShapeMargin",
  "shapeOutside",
  "MozShapeOutside",
  "WebkitShapeOutside",
  "MSShapeOutside",
  "OShapeOutside",
  "tabSize",
  "MozTabSize",
  "WebkitTabSize",
  "MSTabSize",
  "OTabSize",
  "tableLayout",
  "MozTableLayout",
  "WebkitTableLayout",
  "MSTableLayout",
  "OTableLayout",
  "textAlign",
  "MozTextAlign",
  "WebkitTextAlign",
  "MSTextAlign",
  "OTextAlign",
  "textAlignLast",
  "MozTextAlignLast",
  "WebkitTextAlignLast",
  "MSTextAlignLast",
  "OTextAlignLast",
  "textCombineUpright",
  "MozTextCombineUpright",
  "WebkitTextCombineUpright",
  "MSTextCombineUpright",
  "OTextCombineUpright",
  "textDecoration",
  "MozTextDecoration",
  "WebkitTextDecoration",
  "MSTextDecoration",
  "OTextDecoration",
  "textDecorationColor",
  "MozTextDecorationColor",
  "WebkitTextDecorationColor",
  "MSTextDecorationColor",
  "OTextDecorationColor",
  "textDecorationLine",
  "MozTextDecorationLine",
  "WebkitTextDecorationLine",
  "MSTextDecorationLine",
  "OTextDecorationLine",
  "textDecorationStyle",
  "MozTextDecorationStyle",
  "WebkitTextDecorationStyle",
  "MSTextDecorationStyle",
  "OTextDecorationStyle",
  "textEmphasis",
  "MozTextEmphasis",
  "WebkitTextEmphasis",
  "MSTextEmphasis",
  "OTextEmphasis",
  "textEmphasisColor",
  "MozTextEmphasisColor",
  "WebkitTextEmphasisColor",
  "MSTextEmphasisColor",
  "OTextEmphasisColor",
  "textEmphasisPosition",
  "MozTextEmphasisPosition",
  "WebkitTextEmphasisPosition",
  "MSTextEmphasisPosition",
  "OTextEmphasisPosition",
  "textEmphasisStyle",
  "MozTextEmphasisStyle",
  "WebkitTextEmphasisStyle",
  "MSTextEmphasisStyle",
  "OTextEmphasisStyle",
  "textIndent",
  "MozTextIndent",
  "WebkitTextIndent",
  "MSTextIndent",
  "OTextIndent",
  "textOrientation",
  "MozTextOrientation",
  "WebkitTextOrientation",
  "MSTextOrientation",
  "OTextOrientation",
  "textOverflow",
  "MozTextOverflow",
  "WebkitTextOverflow",
  "MSTextOverflow",
  "OTextOverflow",
  "textRendering",
  "MozTextRendering",
  "WebkitTextRendering",
  "MSTextRendering",
  "OTextRendering",
  "textShadow",
  "MozTextShadow",
  "WebkitTextShadow",
  "MSTextShadow",
  "OTextShadow",
  "textTransform",
  "MozTextTransform",
  "WebkitTextTransform",
  "MSTextTransform",
  "OTextTransform",
  "textUnderlinePosition",
  "MozTextUnderlinePosition",
  "WebkitTextUnderlinePosition",
  "MSTextUnderlinePosition",
  "OTextUnderlinePosition",
  "top",
  "MozTop",
  "WebkitTop",
  "MSTop",
  "OTop",
  "touchAction",
  "MozTouchAction",
  "WebkitTouchAction",
  "MSTouchAction",
  "OTouchAction",
  "transform",
  "MozTransform",
  "WebkitTransform",
  "msTransform",
  "OTransform",
  "transformBox",
  "MozTransformBox",
  "WebkitTransformBox",
  "MSTransformBox",
  "OTransformBox",
  "transformOrigin",
  "MozTransformOrigin",
  "WebkitTransformOrigin",
  "MSTransformOrigin",
  "OTransformOrigin",
  "transformStyle",
  "MozTransformStyle",
  "WebkitTransformStyle",
  "MSTransformStyle",
  "OTransformStyle",
  "transition",
  "MozTransition",
  "WebkitTransition",
  "MSTransition",
  "OTransition",
  "transitionDelay",
  "MozTransitionDelay",
  "WebkitTransitionDelay",
  "MSTransitionDelay",
  "OTransitionDelay",
  "transitionDuration",
  "MozTransitionDuration",
  "WebkitTransitionDuration",
  "MSTransitionDuration",
  "OTransitionDuration",
  "transitionProperty",
  "MozTransitionProperty",
  "WebkitTransitionProperty",
  "MSTransitionProperty",
  "OTransitionProperty",
  "transitionTimingFunction",
  "MozTransitionTimingFunction",
  "WebkitTransitionTimingFunction",
  "MSTransitionTimingFunction",
  "OTransitionTimingFunction",
  "turn",
  "MozTurn",
  "WebkitTurn",
  "MSTurn",
  "OTurn",
  "unicodeBidi",
  "MozUnicodeBidi",
  "WebkitUnicodeBidi",
  "MSUnicodeBidi",
  "OUnicodeBidi",
  "unset",
  "MozUnset",
  "WebkitUnset",
  "MSUnset",
  "OUnset",
  "verticalAlign",
  "MozVerticalAlign",
  "WebkitVerticalAlign",
  "MSVerticalAlign",
  "OVerticalAlign",
  "vh",
  "MozVh",
  "WebkitVh",
  "MSVh",
  "OVh",
  "visibility",
  "MozVisibility",
  "WebkitVisibility",
  "MSVisibility",
  "OVisibility",
  "vmax",
  "MozVmax",
  "WebkitVmax",
  "MSVmax",
  "OVmax",
  "vmin",
  "MozVmin",
  "WebkitVmin",
  "MSVmin",
  "OVmin",
  "vw",
  "MozVw",
  "WebkitVw",
  "MSVw",
  "OVw",
  "whiteSpace",
  "MozWhiteSpace",
  "WebkitWhiteSpace",
  "MSWhiteSpace",
  "OWhiteSpace",
  "widows",
  "MozWidows",
  "WebkitWidows",
  "MSWidows",
  "OWidows",
  "width",
  "MozWidth",
  "WebkitWidth",
  "MSWidth",
  "OWidth",
  "willChange",
  "MozWillChange",
  "WebkitWillChange",
  "MSWillChange",
  "OWillChange",
  "wordBreak",
  "MozWordBreak",
  "WebkitWordBreak",
  "MSWordBreak",
  "OWordBreak",
  "wordSpacing",
  "MozWordSpacing",
  "WebkitWordSpacing",
  "MSWordSpacing",
  "OWordSpacing",
  "wordWrap",
  "MozWordWrap",
  "WebkitWordWrap",
  "MSWordWrap",
  "OWordWrap",
  "writingMode",
  "MozWritingMode",
  "WebkitWritingMode",
  "MSWritingMode",
  "OWritingMode",
  "zIndex",
  "MozZIndex",
  "WebkitZIndex",
  "MSZIndex",
  "OZIndex",
  "fontSize",
  "MozFontSize",
  "WebkitFontSize",
  "MSFontSize",
  "OFontSize",
  "flex",
  "MozFlex",
  "WebkitFlex",
  "MSFlex",
  "OFlex",
  "fr",
  "MozFr",
  "WebkitFr",
  "MSFr",
  "OFr"
]


/***/ }),
/* 458 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrowseButton = exports.browseButtonFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames2 = __webpack_require__(5);

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssThemr = __webpack_require__(12);

var _identifiers = __webpack_require__(13);

var _FontIcon = __webpack_require__(36);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _Ripple = __webpack_require__(51);

var _Ripple2 = _interopRequireDefault(_Ripple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(ripple, FontIcon) {
  var SimpleBrowseButton = function (_Component) {
    _inherits(SimpleBrowseButton, _Component);

    function SimpleBrowseButton() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, SimpleBrowseButton);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SimpleBrowseButton.__proto__ || Object.getPrototypeOf(SimpleBrowseButton)).call.apply(_ref, [this].concat(args))), _this), _this.getLevel = function () {
        if (_this.props.primary) return 'primary';
        if (_this.props.accent) return 'accent';
        return 'neutral';
      }, _this.getShape = function () {
        if (_this.props.raised) return 'raised';
        if (_this.props.floating) return 'floating';
        return 'flat';
      }, _this.handleMouseUp = function (event) {
        _this.labelNode.blur();
        if (_this.props.onMouseUp) _this.props.onMouseUp(event);
      }, _this.handleMouseLeave = function (event) {
        _this.labelNode.blur();
        if (_this.props.onMouseLeave) _this.props.onMouseLeave(event);
      }, _this.handleFileChange = function (event) {
        if (_this.props.onChange) _this.props.onChange(event);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SimpleBrowseButton, [{
      key: 'render',
      value: function render() {
        var _classnames,
            _this2 = this;

        var _props = this.props,
            accent = _props.accent,
            children = _props.children,
            className = _props.className,
            flat = _props.flat,
            floating = _props.floating,
            icon = _props.icon,
            inverse = _props.inverse,
            label = _props.label,
            mini = _props.mini,
            neutral = _props.neutral,
            primary = _props.primary,
            raised = _props.raised,
            theme = _props.theme,
            others = _objectWithoutProperties(_props, ['accent', 'children', 'className', 'flat', 'floating', 'icon', 'inverse', 'label', 'mini', 'neutral', 'primary', 'raised', 'theme']);

        var element = 'label';
        var level = this.getLevel();
        var shape = this.getShape();

        var classes = (0, _classnames3.default)(theme.button, [theme[shape]], (_classnames = {}, _defineProperty(_classnames, theme[level], neutral), _defineProperty(_classnames, theme.mini, mini), _defineProperty(_classnames, theme.inverse, inverse), _classnames), className);

        var props = _extends({}, others, {
          ref: function ref(node) {
            _this2.labelNode = node;
          },
          className: classes,
          disabled: this.props.disabled,
          onMouseUp: this.handleMouseUp,
          onMouseLeave: this.handleMouseLeave,
          'data-react-toolbox': 'label'
        });

        return _react2.default.createElement(element, props, icon ? _react2.default.createElement(FontIcon, { className: theme.icon, value: icon }) : null, _react2.default.createElement(
          'span',
          null,
          label
        ), _react2.default.createElement('input', { className: classes, type: 'file', onChange: this.handleFileChange }), children);
      }
    }]);

    return SimpleBrowseButton;
  }(_react.Component);

  SimpleBrowseButton.propTypes = {
    accent: _react.PropTypes.bool,
    children: _react.PropTypes.node,
    className: _react.PropTypes.string,
    disabled: _react.PropTypes.bool,
    flat: _react.PropTypes.bool,
    floating: _react.PropTypes.bool,
    icon: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
    inverse: _react.PropTypes.bool,
    label: _react.PropTypes.string,
    mini: _react.PropTypes.bool,
    neutral: _react.PropTypes.bool,
    onChange: _react.PropTypes.func,
    onMouseLeave: _react.PropTypes.func,
    onMouseUp: _react.PropTypes.func,
    primary: _react.PropTypes.bool,
    raised: _react.PropTypes.bool,
    theme: _react.PropTypes.shape({
      accent: _react.PropTypes.string,
      button: _react.PropTypes.string,
      flat: _react.PropTypes.string,
      floating: _react.PropTypes.string,
      icon: _react.PropTypes.string,
      inverse: _react.PropTypes.string,
      mini: _react.PropTypes.string,
      neutral: _react.PropTypes.string,
      primary: _react.PropTypes.string,
      raised: _react.PropTypes.string,
      rippleWrapper: _react.PropTypes.string,
      toggle: _react.PropTypes.string
    }),
    type: _react.PropTypes.string
  };
  SimpleBrowseButton.defaultProps = {
    accent: false,
    className: '',
    flat: false,
    floating: false,
    mini: false,
    neutral: true,
    primary: false,
    raised: false
  };


  return ripple(SimpleBrowseButton);
};

var BrowseButton = factory((0, _Ripple2.default)({ centered: false }), _FontIcon2.default);
exports.default = (0, _reactCssThemr.themr)(_identifiers.BUTTON)(BrowseButton);
exports.browseButtonFactory = factory;
exports.BrowseButton = BrowseButton;

/***/ }),
/* 459 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconButton = exports.iconButtonFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames2 = __webpack_require__(5);

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssThemr = __webpack_require__(12);

var _identifiers = __webpack_require__(13);

var _FontIcon = __webpack_require__(36);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _Ripple = __webpack_require__(51);

var _Ripple2 = _interopRequireDefault(_Ripple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(ripple, FontIcon) {
  var IconButton = function (_Component) {
    _inherits(IconButton, _Component);

    function IconButton() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, IconButton);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = IconButton.__proto__ || Object.getPrototypeOf(IconButton)).call.apply(_ref, [this].concat(args))), _this), _this.getLevel = function () {
        if (_this.props.primary) return 'primary';
        if (_this.props.accent) return 'accent';
        return 'neutral';
      }, _this.handleMouseUp = function (event) {
        _this.buttonNode.blur();
        if (_this.props.onMouseUp) _this.props.onMouseUp(event);
      }, _this.handleMouseLeave = function (event) {
        _this.buttonNode.blur();
        if (_this.props.onMouseLeave) _this.props.onMouseLeave(event);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(IconButton, [{
      key: 'render',
      value: function render() {
        var _classnames,
            _this2 = this;

        var _props = this.props,
            accent = _props.accent,
            children = _props.children,
            className = _props.className,
            href = _props.href,
            icon = _props.icon,
            inverse = _props.inverse,
            neutral = _props.neutral,
            primary = _props.primary,
            theme = _props.theme,
            type = _props.type,
            others = _objectWithoutProperties(_props, ['accent', 'children', 'className', 'href', 'icon', 'inverse', 'neutral', 'primary', 'theme', 'type']);

        var element = href ? 'a' : 'button';
        var level = this.getLevel();
        var classes = (0, _classnames3.default)([theme.toggle], (_classnames = {}, _defineProperty(_classnames, theme[level], neutral), _defineProperty(_classnames, theme.inverse, inverse), _classnames), className);

        var props = _extends({}, others, {
          href: href,
          ref: function ref(node) {
            _this2.buttonNode = node;
          },
          className: classes,
          disabled: this.props.disabled,
          onMouseUp: this.handleMouseUp,
          onMouseLeave: this.handleMouseLeave,
          type: !href ? type : null,
          'data-react-toolbox': 'button'
        });

        var iconElement = typeof icon === 'string' ? _react2.default.createElement(FontIcon, { className: theme.icon, value: icon }) : icon;

        return _react2.default.createElement(element, props, icon && iconElement, children);
      }
    }]);

    return IconButton;
  }(_react.Component);

  IconButton.propTypes = {
    accent: _react.PropTypes.bool,
    children: _react.PropTypes.node,
    className: _react.PropTypes.string,
    disabled: _react.PropTypes.bool,
    href: _react.PropTypes.string,
    icon: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
    inverse: _react.PropTypes.bool,
    neutral: _react.PropTypes.bool,
    onMouseLeave: _react.PropTypes.func,
    onMouseUp: _react.PropTypes.func,
    primary: _react.PropTypes.bool,
    theme: _react.PropTypes.shape({
      accent: _react.PropTypes.string,
      button: _react.PropTypes.string,
      flat: _react.PropTypes.string,
      floating: _react.PropTypes.string,
      icon: _react.PropTypes.string,
      inverse: _react.PropTypes.string,
      mini: _react.PropTypes.string,
      neutral: _react.PropTypes.string,
      primary: _react.PropTypes.string,
      raised: _react.PropTypes.string,
      rippleWrapper: _react.PropTypes.string,
      toggle: _react.PropTypes.string
    }),
    type: _react.PropTypes.string
  };
  IconButton.defaultProps = {
    accent: false,
    className: '',
    neutral: true,
    primary: false,
    type: 'button'
  };


  return ripple(IconButton);
};

var IconButton = factory((0, _Ripple2.default)({ centered: true }), _FontIcon2.default);
exports.default = (0, _reactCssThemr.themr)(_identifiers.BUTTON)(IconButton);
exports.iconButtonFactory = factory;
exports.IconButton = IconButton;

/***/ }),
/* 460 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = exports.checkboxFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames2 = __webpack_require__(5);

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactStyleProptype = __webpack_require__(173);

var _reactStyleProptype2 = _interopRequireDefault(_reactStyleProptype);

var _reactCssThemr = __webpack_require__(12);

var _identifiers = __webpack_require__(13);

var _Ripple = __webpack_require__(51);

var _Ripple2 = _interopRequireDefault(_Ripple);

var _Check = __webpack_require__(175);

var _Check2 = _interopRequireDefault(_Check);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Check) {
  var Checkbox = function (_Component) {
    _inherits(Checkbox, _Component);

    function Checkbox() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Checkbox);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.handleToggle = function (event) {
        if (event.pageX !== 0 && event.pageY !== 0) _this.blur();
        if (!_this.props.disabled && _this.props.onChange) {
          _this.props.onChange(!_this.props.checked, event);
        }
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Checkbox, [{
      key: 'blur',
      value: function blur() {
        if (this.inputNode) {
          this.inputNode.blur();
        }
      }
    }, {
      key: 'focus',
      value: function focus() {
        if (this.inputNode) {
          this.inputNode.focus();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            checked = _props.checked,
            children = _props.children,
            disabled = _props.disabled,
            label = _props.label,
            name = _props.name,
            style = _props.style,
            onChange = _props.onChange,
            onMouseEnter = _props.onMouseEnter,
            onMouseLeave = _props.onMouseLeave,
            theme = _props.theme,
            others = _objectWithoutProperties(_props, ['checked', 'children', 'disabled', 'label', 'name', 'style', 'onChange', 'onMouseEnter', 'onMouseLeave', 'theme']);

        var className = (0, _classnames3.default)(theme.field, _defineProperty({}, theme.disabled, this.props.disabled), this.props.className);

        return _react2.default.createElement(
          'label',
          {
            'data-react-toolbox': 'checkbox',
            htmlFor: name,
            className: className,
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave
          },
          _react2.default.createElement('input', _extends({}, others, {
            checked: checked,
            className: theme.input,
            disabled: disabled,
            name: name,
            onChange: function onChange() {},
            onClick: this.handleToggle,
            ref: function ref(node) {
              _this2.inputNode = node;
            },
            type: 'checkbox'
          })),
          _react2.default.createElement(Check, {
            checked: checked,
            disabled: disabled,
            rippleClassName: theme.ripple,
            style: style,
            theme: theme
          }),
          label ? _react2.default.createElement(
            'span',
            { 'data-react-toolbox': 'label', className: theme.text },
            label
          ) : null,
          children
        );
      }
    }]);

    return Checkbox;
  }(_react.Component);

  Checkbox.propTypes = {
    checked: _react.PropTypes.bool,
    children: _react.PropTypes.node,
    className: _react.PropTypes.string,
    disabled: _react.PropTypes.bool,
    label: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node]),
    name: _react.PropTypes.string,
    onChange: _react.PropTypes.func,
    onMouseEnter: _react.PropTypes.func,
    onMouseLeave: _react.PropTypes.func,
    style: _reactStyleProptype2.default,
    theme: _react.PropTypes.shape({
      disabled: _react.PropTypes.string,
      field: _react.PropTypes.string,
      input: _react.PropTypes.string,
      ripple: _react.PropTypes.string
    })
  };
  Checkbox.defaultProps = {
    checked: false,
    className: '',
    disabled: false
  };


  return Checkbox;
};

var Check = (0, _Check2.default)((0, _Ripple2.default)({ centered: true, spread: 2.6 }));
var Checkbox = factory(Check);
exports.default = (0, _reactCssThemr.themr)(_identifiers.CHECKBOX)(Checkbox);
exports.checkboxFactory = factory;
exports.Checkbox = Checkbox;

/***/ }),
/* 461 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = undefined;

var _reactCssThemr = __webpack_require__(12);

var _identifiers = __webpack_require__(13);

var _ripple = __webpack_require__(178);

var _ripple2 = _interopRequireDefault(_ripple);

var _Checkbox = __webpack_require__(460);

var _Check = __webpack_require__(175);

var _Check2 = _interopRequireDefault(_Check);

var _theme = __webpack_require__(236);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemedCheck = (0, _Check2.default)((0, _ripple2.default)({ centered: true, spread: 2.6 }));
var ThemedCheckbox = (0, _reactCssThemr.themr)(_identifiers.CHECKBOX, _theme2.default)((0, _Checkbox.checkboxFactory)(ThemedCheck));

exports.default = ThemedCheckbox;
exports.Checkbox = ThemedCheckbox;

/***/ }),
/* 462 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = exports.dropdownFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(70);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames4 = __webpack_require__(5);

var _classnames5 = _interopRequireDefault(_classnames4);

var _reactCssThemr = __webpack_require__(12);

var _identifiers = __webpack_require__(13);

var _Input = __webpack_require__(177);

var _Input2 = _interopRequireDefault(_Input);

var _events = __webpack_require__(98);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable */


var factory = function factory(Input) {
  var Dropdown = function (_Component) {
    _inherits(Dropdown, _Component);

    function Dropdown() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Dropdown);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        active: false,
        up: false
      }, _this.getDocumentEvents = function () {
        return {
          click: _this.handleDocumentClick,
          touchend: _this.handleDocumentClick
        };
      }, _this.getSelectedItem = function () {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _this.props.source[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            if (item.value === _this.props.value) return item;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return !_this.props.allowBlank ? _this.props.source[0] : undefined;
      }, _this.handleSelect = function (item, event) {
        if (_this.props.onBlur) _this.props.onBlur(event);
        if (!_this.props.disabled && _this.props.onChange) {
          if (_this.props.name) event.target.name = _this.props.name;
          _this.props.onChange(item, event);
          _this.close();
        }
      }, _this.handleClick = function (event) {
        _this.open(event);
        _events2.default.pauseEvent(event);
        if (_this.props.onClick) _this.props.onClick(event);
      }, _this.handleDocumentClick = function (event) {
        if (_this.state.active && !_events2.default.targetIsDescendant(event, _reactDom2.default.findDOMNode(_this))) {
          _this.setState({ active: false });
        }
      }, _this.close = function () {
        if (_this.state.active) {
          _this.setState({ active: false });
        }
      }, _this.open = function (event) {
        var client = event.target.getBoundingClientRect();
        var screenHeight = window.innerHeight || document.documentElement.offsetHeight;
        var up = _this.props.auto ? client.top > screenHeight / 2 + client.height : false;
        if (_this.inputNode) _this.inputNode.blur();
        _this.setState({ active: true, up: up });
      }, _this.handleFocus = function (event) {
        event.stopPropagation();
        if (!_this.props.disabled) _this.open(event);
        if (_this.props.onFocus) _this.props.onFocus(event);
      }, _this.handleBlur = function (event) {
        event.stopPropagation();
        if (_this.state.active) _this.close();
        if (_this.props.onBlur) _this.props.onBlur(event);
      }, _this.renderValue = function (item, idx) {
        var _classnames;

        var theme = _this.props.theme;

        var className = (0, _classnames5.default)((_classnames = {}, _defineProperty(_classnames, theme.selected, item.value === _this.props.value), _defineProperty(_classnames, theme.disabled, item.disabled), _classnames));
        return _react2.default.createElement(
          'li',
          {
            key: idx,
            className: className,
            onClick: !item.disabled && _this.handleSelect.bind(_this, item.value)
          },
          _this.props.template ? _this.props.template(item) : item.label
        );
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Dropdown, [{
      key: 'componentWillUpdate',
      value: function componentWillUpdate(nextProps, nextState) {
        if (!this.state.active && nextState.active) {
          _events2.default.addEventsToDocument(this.getDocumentEvents());
        }
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps, prevState) {
        if (prevState.active && !this.state.active) {
          _events2.default.removeEventsFromDocument(this.getDocumentEvents());
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.state.active) {
          _events2.default.removeEventsFromDocument(this.getDocumentEvents());
        }
      }
    }, {
      key: 'renderTemplateValue',
      value: function renderTemplateValue(selected) {
        var _classnames2;

        var theme = this.props.theme;

        var className = (0, _classnames5.default)(theme.field, (_classnames2 = {}, _defineProperty(_classnames2, theme.errored, this.props.error), _defineProperty(_classnames2, theme.disabled, this.props.disabled), _defineProperty(_classnames2, theme.required, this.props.required), _classnames2));

        return _react2.default.createElement(
          'div',
          { className: className, onClick: this.handleClick },
          _react2.default.createElement(
            'div',
            { className: theme.templateValue + ' ' + theme.value },
            this.props.template(selected)
          ),
          this.props.label ? _react2.default.createElement(
            'label',
            { htmlFor: this.props.name, className: theme.label },
            this.props.label,
            this.props.required ? _react2.default.createElement(
              'span',
              { className: theme.required },
              ' * '
            ) : null
          ) : null,
          this.props.error ? _react2.default.createElement(
            'span',
            { className: theme.error },
            this.props.error
          ) : null
        );
      }
    }, {
      key: 'render',
      value: function render() {
        var _classnames3,
            _this2 = this;

        var _props = this.props,
            allowBlank = _props.allowBlank,
            auto = _props.auto,
            required = _props.required,
            onChange = _props.onChange,
            onFocus = _props.onFocus,
            onBlur = _props.onBlur,
            source = _props.source,
            template = _props.template,
            theme = _props.theme,
            others = _objectWithoutProperties(_props, ['allowBlank', 'auto', 'required', 'onChange', 'onFocus', 'onBlur', 'source', 'template', 'theme']);

        var selected = this.getSelectedItem();
        var className = (0, _classnames5.default)(theme.dropdown, (_classnames3 = {}, _defineProperty(_classnames3, theme.up, this.state.up), _defineProperty(_classnames3, theme.active, this.state.active), _defineProperty(_classnames3, theme.disabled, this.props.disabled), _defineProperty(_classnames3, theme.required, this.props.required), _classnames3), this.props.className);

        return _react2.default.createElement(
          'div',
          {
            className: className,
            'data-react-toolbox': 'dropdown',
            onBlur: this.handleBlur,
            onFocus: this.handleFocus
          },
          _react2.default.createElement(Input, _extends({}, others, {
            tabIndex: '0',
            className: theme.value,
            onClick: this.handleClick,
            required: this.props.required,
            readOnly: true,
            ref: function ref(node) {
              _this2.inputNode = node && node.getWrappedInstance();
            },
            type: template && selected ? 'hidden' : null,
            theme: theme,
            themeNamespace: 'input',
            value: selected && selected.label ? selected.label : ''
          })),
          template && selected ? this.renderTemplateValue(selected) : null,
          _react2.default.createElement(
            'ul',
            { className: theme.values },
            source.map(this.renderValue)
          )
        );
      }
    }]);

    return Dropdown;
  }(_react.Component);

  Dropdown.propTypes = {
    allowBlank: _react.PropTypes.bool,
    auto: _react.PropTypes.bool,
    className: _react.PropTypes.string,
    disabled: _react.PropTypes.bool,
    error: _react.PropTypes.string,
    label: _react.PropTypes.string,
    name: _react.PropTypes.string,
    onBlur: _react.PropTypes.func,
    onChange: _react.PropTypes.func,
    onClick: _react.PropTypes.func,
    onFocus: _react.PropTypes.func,
    required: _react.PropTypes.bool,
    source: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object])).isRequired,
    template: _react.PropTypes.func,
    theme: _react.PropTypes.shape({
      active: _react.PropTypes.string,
      disabled: _react.PropTypes.string,
      dropdown: _react.PropTypes.string,
      error: _react.PropTypes.string,
      errored: _react.PropTypes.string,
      field: _react.PropTypes.string,
      label: _react.PropTypes.string,
      required: _react.PropTypes.string,
      selected: _react.PropTypes.string,
      templateValue: _react.PropTypes.string,
      up: _react.PropTypes.string,
      value: _react.PropTypes.string,
      values: _react.PropTypes.string
    }),
    value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
  };
  Dropdown.defaultProps = {
    auto: true,
    className: '',
    allowBlank: true,
    disabled: false,
    required: false
  };


  return Dropdown;
};

var Dropdown = factory(_Input2.default);
exports.default = (0, _reactCssThemr.themr)(_identifiers.DROPDOWN)(Dropdown);
exports.dropdownFactory = factory;
exports.Dropdown = Dropdown;

/***/ }),
/* 463 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = undefined;

var _reactCssThemr = __webpack_require__(12);

var _identifiers = __webpack_require__(13);

var _Dropdown = __webpack_require__(462);

var _input = __webpack_require__(465);

var _theme = __webpack_require__(237);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dropdown = (0, _Dropdown.dropdownFactory)(_input.Input);
var ThemedDropdown = (0, _reactCssThemr.themr)(_identifiers.DROPDOWN, _theme2.default)(Dropdown);

exports.default = ThemedDropdown;
exports.Dropdown = ThemedDropdown;

/***/ }),
/* 464 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActivableRendererFactory = function ActivableRendererFactory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { delay: 500 };
  return function (ActivableComponent) {
    var _class, _temp2;

    return _temp2 = _class = function (_Component) {
      _inherits(ActivableRenderer, _Component);

      function ActivableRenderer() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ActivableRenderer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ActivableRenderer.__proto__ || Object.getPrototypeOf(ActivableRenderer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
          active: _this.props.active,
          rendered: _this.props.active
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(ActivableRenderer, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          if (nextProps.active && !this.props.active) this.renderAndActivate();
          if (!nextProps.active && this.props.active) this.deactivateAndUnrender();
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          clearTimeout(this.activateTimeout);
          clearTimeout(this.unrenderTimeout);
        }
      }, {
        key: 'renderAndActivate',
        value: function renderAndActivate() {
          var _this2 = this;

          if (this.unrenderTimeout) clearTimeout(this.unrenderTimeout);
          this.setState({ rendered: true, active: false }, function () {
            _this2.activateTimeout = setTimeout(function () {
              return _this2.setState({ active: true });
            }, 20);
          });
        }
      }, {
        key: 'deactivateAndUnrender',
        value: function deactivateAndUnrender() {
          var _this3 = this;

          this.setState({ rendered: true, active: false }, function () {
            _this3.unrenderTimeout = setTimeout(function () {
              _this3.setState({ rendered: false });
              _this3.unrenderTimeout = null;
            }, _this3.props.delay);
          });
        }
      }, {
        key: 'render',
        value: function render() {
          var _props = this.props,
              delay = _props.delay,
              others = _objectWithoutProperties(_props, ['delay']); // eslint-disable-line no-unused-vars


          var _state = this.state,
              active = _state.active,
              rendered = _state.rendered;

          return rendered ? _react2.default.createElement(ActivableComponent, _extends({}, others, { active: active })) : null;
        }
      }]);

      return ActivableRenderer;
    }(_react.Component), _class.propTypes = {
      active: _react.PropTypes.bool.isRequired,
      children: _react.PropTypes.node,
      delay: _react.PropTypes.number
    }, _class.defaultProps = {
      delay: options.delay
    }, _temp2;
  };
};

exports.default = ActivableRendererFactory;

/***/ }),
/* 465 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = undefined;

var _reactCssThemr = __webpack_require__(12);

var _identifiers = __webpack_require__(13);

var _Input = __webpack_require__(177);

var _FontIcon = __webpack_require__(36);

var _theme = __webpack_require__(238);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = (0, _Input.inputFactory)(_FontIcon.FontIcon);
var ThemedInput = (0, _reactCssThemr.themr)(_identifiers.INPUT, _theme2.default, { withRef: true })(Input);

exports.default = ThemedInput;
exports.Input = ThemedInput;

/***/ }),
/* 466 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Snackbar = exports.snackbarFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames2 = __webpack_require__(5);

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssThemr = __webpack_require__(12);

var _identifiers = __webpack_require__(13);

var _ActivableRenderer = __webpack_require__(464);

var _ActivableRenderer2 = _interopRequireDefault(_ActivableRenderer);

var _Button = __webpack_require__(174);

var _Button2 = _interopRequireDefault(_Button);

var _Portal = __webpack_require__(176);

var _Portal2 = _interopRequireDefault(_Portal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Button) {
  var Snackbar = function (_Component) {
    _inherits(Snackbar, _Component);

    function Snackbar() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Snackbar);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Snackbar.__proto__ || Object.getPrototypeOf(Snackbar)).call.apply(_ref, [this].concat(args))), _this), _this.scheduleTimeout = function (props) {
        var onTimeout = props.onTimeout,
            timeout = props.timeout;

        if (_this.curTimeout) clearTimeout(_this.curTimeout);
        _this.curTimeout = setTimeout(function () {
          if (onTimeout) onTimeout();
          _this.curTimeout = null;
        }, timeout);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Snackbar, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.active && this.props.timeout) {
          this.scheduleTimeout(this.props);
        }
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.active && nextProps.timeout) {
          this.scheduleTimeout(nextProps);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        clearTimeout(this.curTimeout);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            action = _props.action,
            active = _props.active,
            children = _props.children,
            label = _props.label,
            onClick = _props.onClick,
            theme = _props.theme,
            type = _props.type;

        var className = (0, _classnames3.default)([theme.snackbar, theme[type]], _defineProperty({}, theme.active, active), this.props.className);

        return _react2.default.createElement(
          _Portal2.default,
          { className: theme.portal },
          _react2.default.createElement(
            'div',
            { 'data-react-toolbox': 'snackbar', className: className },
            _react2.default.createElement(
              'span',
              { className: theme.label },
              label,
              children
            ),
            action ? _react2.default.createElement(Button, { className: theme.button, label: action, onClick: onClick }) : null
          )
        );
      }
    }]);

    return Snackbar;
  }(_react.Component);

  Snackbar.propTypes = {
    action: _react.PropTypes.string,
    active: _react.PropTypes.bool,
    children: _react.PropTypes.node,
    className: _react.PropTypes.string,
    label: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
    onClick: _react.PropTypes.func,
    onTimeout: _react.PropTypes.func,
    theme: _react.PropTypes.shape({
      accept: _react.PropTypes.string,
      active: _react.PropTypes.string,
      button: _react.PropTypes.string,
      cancel: _react.PropTypes.string,
      label: _react.PropTypes.string,
      snackbar: _react.PropTypes.string,
      warning: _react.PropTypes.string
    }),
    timeout: _react.PropTypes.number,
    type: _react.PropTypes.oneOf(['accept', 'cancel', 'warning'])
  };


  return (0, _ActivableRenderer2.default)()(Snackbar);
};

var Snackbar = factory(_Button2.default);
exports.default = (0, _reactCssThemr.themr)(_identifiers.SNACKBAR)(Snackbar);
exports.snackbarFactory = factory;
exports.Snackbar = Snackbar;

/***/ }),
/* 467 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Snackbar = undefined;

var _reactCssThemr = __webpack_require__(12);

var _identifiers = __webpack_require__(13);

var _Snackbar = __webpack_require__(466);

var _button = __webpack_require__(35);

var _theme = __webpack_require__(240);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemedSnackbar = (0, _reactCssThemr.themr)(_identifiers.SNACKBAR, _theme2.default)((0, _Snackbar.snackbarFactory)(_button.Button));

exports.default = ThemedSnackbar;
exports.Snackbar = ThemedSnackbar;

/***/ }),
/* 468 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames2 = __webpack_require__(5);

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssThemr = __webpack_require__(12);

var _Portal = __webpack_require__(176);

var _Portal2 = _interopRequireDefault(_Portal);

var _utils = __webpack_require__(471);

var _identifiers = __webpack_require__(13);

var _events = __webpack_require__(98);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var POSITION = {
  BOTTOM: 'bottom',
  HORIZONTAL: 'horizontal',
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
  VERTICAL: 'vertical'
};

var defaults = {
  className: '',
  delay: 0,
  hideOnClick: true,
  passthrough: true,
  showOnClick: false,
  position: POSITION.VERTICAL,
  theme: {}
};

var tooltipFactory = function tooltipFactory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _defaults$options = _extends({}, defaults, options),
      defaultClassName = _defaults$options.className,
      defaultDelay = _defaults$options.delay,
      defaultHideOnClick = _defaults$options.hideOnClick,
      defaultShowOnClick = _defaults$options.showOnClick,
      defaultPassthrough = _defaults$options.passthrough,
      defaultPosition = _defaults$options.position,
      defaultTheme = _defaults$options.theme;

  return function (ComposedComponent) {
    var TooltippedComponent = function (_Component) {
      _inherits(TooltippedComponent, _Component);

      function TooltippedComponent() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, TooltippedComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TooltippedComponent.__proto__ || Object.getPrototypeOf(TooltippedComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
          active: false,
          position: _this.props.tooltipPosition,
          visible: false
        }, _this.onTransformEnd = function (e) {
          if (e.propertyName === 'transform') {
            _events2.default.removeEventListenerOnTransitionEnded(_this.tooltipNode, _this.onTransformEnd);
            _this.setState({ visible: false });
          }
        }, _this.handleMouseEnter = function (event) {
          _this.activate(_this.calculatePosition(event.currentTarget));
          if (_this.props.onMouseEnter) _this.props.onMouseEnter(event);
        }, _this.handleMouseLeave = function (event) {
          _this.deactivate();
          if (_this.props.onMouseLeave) _this.props.onMouseLeave(event);
        }, _this.handleClick = function (event) {
          if (_this.props.tooltipHideOnClick && _this.state.active) {
            _this.deactivate();
          }

          if (_this.props.tooltipShowOnClick && !_this.state.active) {
            _this.activate(_this.calculatePosition(event.currentTarget));
          }

          if (_this.props.onClick) _this.props.onClick(event);
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(TooltippedComponent, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          if (this.tooltipNode) {
            _events2.default.removeEventListenerOnTransitionEnded(this.tooltipNode, this.onTransformEnd);
          }
          if (this.timeout) clearTimeout(this.timeout);
        }
      }, {
        key: 'getPosition',
        value: function getPosition(element) {
          var tooltipPosition = this.props.tooltipPosition;

          if (tooltipPosition === POSITION.HORIZONTAL) {
            var origin = element.getBoundingClientRect();

            var _getViewport = (0, _utils.getViewport)(),
                ww = _getViewport.width;

            var toRight = origin.left < ww / 2 - origin.width / 2;
            return toRight ? POSITION.RIGHT : POSITION.LEFT;
          } else if (tooltipPosition === POSITION.VERTICAL) {
            var _origin = element.getBoundingClientRect();

            var _getViewport2 = (0, _utils.getViewport)(),
                wh = _getViewport2.height;

            var toBottom = _origin.top < wh / 2 - _origin.height / 2;
            return toBottom ? POSITION.BOTTOM : POSITION.TOP;
          }
          return tooltipPosition;
        }
      }, {
        key: 'activate',
        value: function activate(_ref2) {
          var _this2 = this;

          var top = _ref2.top,
              left = _ref2.left,
              position = _ref2.position;

          if (this.timeout) clearTimeout(this.timeout);
          this.setState({ visible: true, position: position });
          this.timeout = setTimeout(function () {
            _this2.setState({ active: true, top: top, left: left });
          }, this.props.tooltipDelay);
        }
      }, {
        key: 'deactivate',
        value: function deactivate() {
          if (this.timeout) clearTimeout(this.timeout);
          if (this.state.active) {
            _events2.default.addEventListenerOnTransitionEnded(this.tooltipNode, this.onTransformEnd);
            this.setState({ active: false });
          } else if (this.state.visible) {
            this.setState({ visible: false });
          }
        }
      }, {
        key: 'calculatePosition',
        value: function calculatePosition(element) {
          var position = this.getPosition(element);

          var _element$getBoundingC = element.getBoundingClientRect(),
              top = _element$getBoundingC.top,
              left = _element$getBoundingC.left,
              height = _element$getBoundingC.height,
              width = _element$getBoundingC.width;

          var xOffset = window.scrollX || window.pageXOffset;
          var yOffset = window.scrollY || window.pageYOffset;
          if (position === POSITION.BOTTOM) {
            return {
              top: top + height + yOffset,
              left: left + width / 2 + xOffset,
              position: position
            };
          } else if (position === POSITION.TOP) {
            return {
              top: top + yOffset,
              left: left + width / 2 + xOffset,
              position: position
            };
          } else if (position === POSITION.LEFT) {
            return {
              top: top + height / 2 + yOffset,
              left: left + xOffset,
              position: position
            };
          } else if (position === POSITION.RIGHT) {
            return {
              top: top + height / 2 + yOffset,
              left: left + width + xOffset,
              position: position
            };
          }
          return undefined;
        }
      }, {
        key: 'render',
        value: function render() {
          var _classnames,
              _this3 = this;

          var _state = this.state,
              active = _state.active,
              left = _state.left,
              top = _state.top,
              position = _state.position,
              visible = _state.visible;

          var positionClass = 'tooltip' + (position.charAt(0).toUpperCase() + position.slice(1));

          var _props = this.props,
              children = _props.children,
              className = _props.className,
              theme = _props.theme,
              onClick = _props.onClick,
              onMouseEnter = _props.onMouseEnter,
              onMouseLeave = _props.onMouseLeave,
              tooltip = _props.tooltip,
              tooltipDelay = _props.tooltipDelay,
              tooltipHideOnClick = _props.tooltipHideOnClick,
              tooltipPosition = _props.tooltipPosition,
              tooltipShowOnClick = _props.tooltipShowOnClick,
              other = _objectWithoutProperties(_props, ['children', 'className', 'theme', 'onClick', 'onMouseEnter', 'onMouseLeave', 'tooltip', 'tooltipDelay', 'tooltipHideOnClick', 'tooltipPosition', 'tooltipShowOnClick']);

          var _className = (0, _classnames3.default)(theme.tooltip, (_classnames = {}, _defineProperty(_classnames, theme.tooltipActive, active), _defineProperty(_classnames, theme[positionClass], theme[positionClass]), _classnames));

          var childProps = _extends({}, other, {
            className: className,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave
          });

          var shouldPass = typeof ComposedComponent !== 'string' && defaultPassthrough;
          var finalProps = shouldPass ? _extends({}, childProps, { theme: theme }) : childProps;

          return _react2.default.createElement(ComposedComponent, finalProps, children, visible && _react2.default.createElement(
            _Portal2.default,
            null,
            _react2.default.createElement(
              'span',
              {
                ref: function ref(node) {
                  _this3.tooltipNode = node;
                },
                className: _className,
                'data-react-toolbox': 'tooltip',
                style: { top: top, left: left }
              },
              _react2.default.createElement(
                'span',
                { className: theme.tooltipInner },
                tooltip
              )
            )
          ));
        }
      }]);

      return TooltippedComponent;
    }(_react.Component);

    TooltippedComponent.propTypes = {
      children: _react.PropTypes.node,
      className: _react.PropTypes.string,
      onClick: _react.PropTypes.func,
      onMouseEnter: _react.PropTypes.func,
      onMouseLeave: _react.PropTypes.func,
      theme: _react.PropTypes.shape({
        tooltip: _react.PropTypes.string,
        tooltipActive: _react.PropTypes.string,
        tooltipWrapper: _react.PropTypes.string
      }),
      tooltip: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node]),
      tooltipDelay: _react.PropTypes.number,
      tooltipHideOnClick: _react.PropTypes.bool,
      tooltipPosition: _react.PropTypes.oneOf(Object.keys(POSITION).map(function (key) {
        return POSITION[key];
      })),
      tooltipShowOnClick: _react.PropTypes.bool
    };
    TooltippedComponent.defaultProps = {
      className: defaultClassName,
      tooltipDelay: defaultDelay,
      tooltipHideOnClick: defaultHideOnClick,
      tooltipPosition: defaultPosition,
      tooltipShowOnClick: defaultShowOnClick
    };


    return (0, _reactCssThemr.themr)(_identifiers.TOOLTIP, defaultTheme)(TooltippedComponent);
  };
};

exports.default = tooltipFactory;

/***/ }),
/* 469 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tooltipFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Tooltip = __webpack_require__(468);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _theme = __webpack_require__(241);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var themedTooltipFactory = function themedTooltipFactory(options) {
  return (0, _Tooltip2.default)(_extends({}, options, { theme: _theme2.default }));
};
exports.default = (0, _Tooltip2.default)({ theme: _theme2.default });
exports.tooltipFactory = themedTooltipFactory;

/***/ }),
/* 470 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var WEBKIT = 'Webkit';
var MICROSOFT = 'Ms';

var properties = {
  transform: [WEBKIT, MICROSOFT]
};

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.substr(1);
}

function getPrefixes(property, value) {
  return properties[property].reduce(function (acc, item) {
    acc['' + item + capitalize(property)] = value; // eslint-disable-line no-param-reassign
    return acc;
  }, {});
}

function addPrefixesTo(style, property, value) {
  var vendor = getPrefixes(property, value);
  for (var prefix in vendor) {
    // eslint-disable-line no-restricted-syntax
    if ({}.hasOwnProperty.call(vendor, prefix)) {
      style[prefix] = vendor[prefix]; // eslint-disable-line no-param-reassign
    }
  }

  return style;
}

function prefixer(style) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _style = defaultValue;
  for (var property in style) {
    // eslint-disable-line no-restricted-syntax
    if ({}.hasOwnProperty.call(style, property)) {
      _style[property] = style[property];
      if (properties[property]) {
        addPrefixesTo(_style, property, style[property]);
      }
    }
  }

  return _style;
}

exports.default = prefixer;

/***/ }),
/* 471 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAnimationModule = exports.removeNamespace = exports.transformKeys = exports.prepareValueForInput = exports.inputTypeForPrototype = exports.cloneObject = exports.getViewport = exports.round = exports.range = exports.angle360FromPositions = exports.angleFromPositions = undefined;

var _assoc = __webpack_require__(43);

var _assoc2 = _interopRequireDefault(_assoc);

var _compose = __webpack_require__(55);

var _compose2 = _interopRequireDefault(_compose);

var _keys = __webpack_require__(20);

var _keys2 = _interopRequireDefault(_keys);

var _reduce = __webpack_require__(21);

var _reduce2 = _interopRequireDefault(_reduce);

var _pickBy = __webpack_require__(159);

var _pickBy2 = _interopRequireDefault(_pickBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var angleFromPositions = exports.angleFromPositions = function angleFromPositions(cx, cy, ex, ey) {
  var theta = Math.atan2(ey - cy, ex - cx) + Math.PI / 2;
  return theta * 180 / Math.PI;
};

var angle360FromPositions = exports.angle360FromPositions = function angle360FromPositions(cx, cy, ex, ey) {
  var angle = angleFromPositions(cx, cy, ex, ey);
  return angle < 0 ? 360 + angle : angle;
};

var range = exports.range = function range() {
  var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var stop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var _start = 0,
      _stop = start;

  if (stop !== null) {
    _start = start;
    _stop = stop;
  }
  var length = Math.max(Math.ceil((_stop - _start) / step), 0);
  var _range = Array(length);

  for (var idx = 0; idx < length; idx += 1, _start += step) {
    _range[idx] = _start;
  }

  return _range;
};

var round = exports.round = function round(number, decimals) {
  if (!isNaN(parseFloat(number)) && isFinite(number)) {
    var decimalPower = Math.pow(10, decimals);
    return Math.round(parseFloat(number) * decimalPower) / decimalPower;
  }
  return NaN;
};

var getViewport = exports.getViewport = function getViewport() {
  return {
    height: window.innerHeight || document.documentElement.offsetHeight,
    width: window.innerWidth || document.documentElement.offsetWidth
  };
};

var cloneObject = exports.cloneObject = function cloneObject(object) {
  return JSON.parse(JSON.stringify(object));
};

var inputTypeForPrototype = exports.inputTypeForPrototype = function inputTypeForPrototype(prototype) {
  if (prototype === Date) return 'date';
  if (prototype === Number) return 'number';
  if (prototype === Boolean) return 'checkbox';
  return 'text';
};

var prepareValueForInput = exports.prepareValueForInput = function prepareValueForInput(value, type) {
  if (type === 'date') return new Date(value).toISOString().slice(0, 10);
  if (type === 'checkbox') {
    return value ? 'on' : '';
  }
  return value;
};

var transformKeys = exports.transformKeys = function transformKeys(fn) {
  return function (obj) {
    var addTransformedKey = function addTransformedKey(result, key) {
      return (0, _assoc2.default)(fn(key), obj[key], result);
    };
    return (0, _reduce2.default)(addTransformedKey, {}, (0, _keys2.default)(obj));
  };
};

var removeNamespace = exports.removeNamespace = function removeNamespace(namespace) {
  return function (key) {
    var capitalized = key.substr(namespace.length);
    return capitalized.slice(0, 1).toLowerCase() + capitalized.slice(1);
  };
};

var getAnimationModule = exports.getAnimationModule = function getAnimationModule(animation, theme) {
  return (0, _compose2.default)(transformKeys(removeNamespace(animation)), (0, _pickBy2.default)(function (v, k) {
    return k.startsWith(animation);
  }))(theme);
};

/***/ }),
/* 472 */
/***/ (function(module, exports) {

module.exports = "<symbol viewBox=\"0 0 600 600\" id=\"RelayIcon\"><g fill=\"#F26B00\"><path d=\"M142.536 198.858c0 26.36-21.368 47.72-47.72 47.72-26.36 0-47.722-21.36-47.722-47.72s21.36-47.72 47.72-47.72c26.355 0 47.722 21.36 47.722 47.72\"/><path d=\"M505.18 414.225H238.124c-35.25 0-63.926-28.674-63.926-63.923s28.678-63.926 63.926-63.926h120.78c20.816 0 37.753-16.938 37.753-37.756s-16.938-37.756-37.753-37.756H94.81c-7.227 0-13.086-5.86-13.086-13.085 0-7.227 5.86-13.086 13.085-13.086h264.093c35.25 0 63.923 28.678 63.923 63.926s-28.674 63.923-63.923 63.923h-120.78c-20.82 0-37.756 16.938-37.756 37.76 0 20.816 16.938 37.753 37.756 37.753H505.18c7.227 0 13.086 5.86 13.086 13.085 0 7.226-5.858 13.085-13.085 13.085z\"/><path d=\"M457.464 401.142c0-26.36 21.36-47.72 47.72-47.72s47.72 21.36 47.72 47.72-21.36 47.72-47.72 47.72-47.72-21.36-47.72-47.72\"/></g></symbol>"

/***/ }),
/* 473 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
	return new Worker(__webpack_require__.p + "voyager.worker.js");
};

/***/ }),
/* 474 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_474__;

/***/ }),
/* 475 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_475__;

/***/ }),
/* 476 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_476__;

/***/ }),
/* 477 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_477__;

/***/ }),
/* 478 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_478__;

/***/ }),
/* 479 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_479__;

/***/ }),
/* 480 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_480__;

/***/ }),
/* 481 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_481__;

/***/ }),
/* 482 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(180);
module.exports = __webpack_require__(179);


/***/ })
/******/ ]);
});
//# sourceMappingURL=voyager.lib.js.map