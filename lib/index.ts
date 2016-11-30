import * as cytoscape from 'cytoscape';
import * as dagre from 'dagre';
import * as cydagre from 'cytoscape-dagre';
import * as _ from 'lodash';

import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';


const schema = require('./github_introspection.json').data.__schema;

var nodes = [];
var edges = [];

function unwrapType(type) {
  while (type.kind === 'NON_NULL' || type.kind == 'LIST')
    type = type.ofType;
  return type;
}

function isNode(kind) {
  return ['SCALAR', 'INPUT_OBJECT', 'ENUM'].indexOf(kind) === -1;
}

function typeId(typeName) {
  return 'TYPE::' + typeName;
}

_.each(schema.types, type => {
  //Skip introspection types
  if (_.startsWith(type.name, '__'))
    return;

  if (!isNode(type.kind))
    return;

  nodes.push({
    data: {id: typeId(type.name), typeName:type.name, kind: type.kind},
  });

  if (type.kind === 'UNION') {
    _.each(type.possibleTypes, possibleType => {
      edges.push({
        data: {
          id: type.name + '|' + possibleType.name,
          typeName: type.name,
          source: typeId(type.name),
          target: typeId(possibleType.name)
        }
      });
    });
    return;
  }
  else if (type.kind === 'INTERFACE') {
    _.each(type.possibleTypes, possibleType => {
      edges.push({
        data: {
          id: type.name + '=>' + possibleType.name,
          sourceKind: type.kind,
          source: typeId(type.name),
          target: typeId(possibleType.name)
        }
      });
    });
  }

  _.each(type.fields, field => {
    var fieldType = unwrapType(field.type);
    if (!isNode(fieldType.kind))
      return;

    edges.push({
      data: {
        id: type.name + '::' + field.name,
        sourceKind: type.kind,
        fieldName: field.name,
        source: typeId(type.name),
        target: typeId(fieldType.name),
      }
    });
  });
});

cydagre( cytoscape, dagre ); // register extension:w
var cy = cytoscape({
  container: document.querySelector('#cy'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'content': 'data(typeName)',
        'text-valign': 'center',
        'color': 'white',
        'font-size': 10,
        'text-outline-width': 2,
        'background-color': '#000'
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': '#ccc',
        'line-color': '#ccc',
        'width': 1,
      })
    .selector('edge[sourceKind="OBJECT"]')
      .css({
        'label': 'data(fieldName)',
      })
    .selector(':selected')
      .css({
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black'
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      })
    .selector('node[!usedInQuery]')
      .style({
        'display': 'none',
        'visibility': 'hidden',
      }),
  elements: {
    nodes: nodes,
    edges: edges
  },
});

cy.on('tap', 'node', function(e){
  var node = e.cyTarget;
  var neighborhood = node.neighborhood().add(node);

  cy.elements().addClass('faded');
  neighborhood.removeClass('faded');
});

cy.on('tap', function(e){
  if( e.cyTarget === cy ){
    cy.elements().removeClass('faded');
  }
});

function getSubgraph(id) {
  var root = cy.getElementById(id);
  var result = root;
  while (true) {
    var previous_size = result.size();
    result = result.successors().union(result);
    if (result.size() === previous_size)
      break;
    result = result.incomers().union(result);
    if (result.size() === previous_size)
      break;
  }
  return result;
}

getSubgraph(typeId(schema.queryType.name)).data('usedInQuery', true);
if (!_.isUndefined(schema.mutationType))
  getSubgraph(typeId(schema.mutationType.name)).data('usedInMutation', true);

//console.log(JSON.stringify(cy.json(), null, 2));
//cy.nodes('[!usedInQuery]').remove();

var layout = cy.makeLayout({ name: 'dagre' });
layout.run();
