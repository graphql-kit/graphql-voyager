import * as Viz from 'viz.js';
import * as svgPanZoom from 'svg-pan-zoom';
import { getSchema } from './introspection';
import { TypeGraph } from './graph_renderer';
const introspection = require('./swapi_introspection.json').data;

import {
  attachHoverPaths,
  attachClickHighlighting,
  attachHoverHighlighting,
  preprocessVizSvg
} from './viewport-helpers';

var schema = getSchema(introspection);
export var typeGraph = new TypeGraph(schema, {
 skipRelay: true,
 //sortByAlphabet: true
});

let svgString = Viz(typeGraph.getDot());
let svgElement = preprocessVizSvg(svgString);

document.getElementById('viewport').appendChild(svgElement);

//attachHoverPaths(svg);
//attachClickHighlighting(svg);
//wrapFields(svg);
//attachHoverHighlighting(svg);
//
export var zoomer = svgPanZoom(svgElement, {
  zoomScaleSensitivity: 0.3,
  minZoom: 0.5,
  controlIconsEnabled: true
});
