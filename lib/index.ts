import * as Viz from 'viz.js';
import * as svgPanZoom from 'svg-pan-zoom';
import { TypeGraph, Viewport } from './graph';
import { githubIntrospection, swapiIntrospection } from './introspection';

import { initPanel } from './panel/';

const viewport = new Viewport(document.getElementById('viewport'));
viewport.load(swapiIntrospection);
viewport.render({skipRelay: true});

initPanel(document.getElementById('panel_root'));
