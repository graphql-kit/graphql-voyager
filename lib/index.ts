import * as Viz from 'viz.js';
import * as svgPanZoom from 'svg-pan-zoom';
import { TypeGraph, Viewport } from './graph';

import { initPanel } from './panel/';
import { store } from './redux';

const viewport = new Viewport(document.getElementById('viewport'));

initPanel(document.getElementById('panel_root'));
