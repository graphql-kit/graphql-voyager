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


const introspectionData = require('./github_introspection.json').data.__schema;
//console.log(introspectionData);
var rootTypeName = introspectionData.queryType.name;

var nodes = [];
var edges = [];

function unwrapType(type) {
  while (type.kind === 'NON_NULL' || type.kind == 'LIST')
    type = type.ofType;
  return type;
}

_.each(introspectionData.types, type => {
  if (type.kind === 'SCALAR')
    return;

  nodes.push({
    group: 'nodes',
    data: {id:type.name, name:type.name},
  });

  _.each(type.fields, field => {
    var fieldType = unwrapType(field.type);
    if (fieldType.kind === 'SCALAR')
      return;

    console.log(field.name);
    edges.push({
      group: 'edges',
      data: {
        id: type.name + '::' + field.name,
        label: field.name,
        source: type.name,
        target: fieldType.name
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
        'content': 'data(name)',
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
        'width': 1
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
      }),
  elements: {
    nodes: nodes,
    edges: edges
  },
  layout: {
    name: 'dagre',
  }
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
