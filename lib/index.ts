import * as Viz from 'viz.js';
import * as svgPanZoom from 'svg-pan-zoom';
import { getSchema } from './introspection';
import { TypeGraph } from './graph_renderer';
const introspection = require('./swapi_introspection.json').data;

import {
  attachHoverPaths,
  attachClickHighlighting,
  attachHoverHighlighting,
  wrapFields
} from './viewport-helpers';

var schema = getSchema(introspection);
export var typeGraph = new TypeGraph(schema, {
 skipRelay: true,
 //sortByAlphabet: true
});
let result = Viz(typeGraph.getDot());

let elem = document.getElementById('viewport');
elem.innerHTML = result;

let svg = <SVGElement>elem.firstElementChild;

attachHoverPaths(svg);
attachClickHighlighting(svg);
wrapFields(svg);
attachHoverHighlighting(svg);

export var zoomer = svgPanZoom(svg, {
  zoomScaleSensitivity: 0.3,
  minZoom: 0.5,
  controlIconsEnabled: true
});
