import * as Viz from 'viz.js';
import * as svgPanZoom from 'svg-pan-zoom';
import { TypeGraph } from './graph_renderer';
const introspection = require('./swapi_introspection.json').data;

import { Viewport } from './viewport';

const viewport = new Viewport(document.getElementById('viewport'));
viewport.load(introspection);
viewport.render({skipRelay: true});
