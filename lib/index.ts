import * as Viz from 'viz.js';
import * as svgPanZoom from 'svg-pan-zoom';
import { TypeGraph, Viewport } from './graph';
import { githubIntrospection, swapiIntrospection } from './introspection';

import { initPanel } from './panel/';
import { store } from './redux';
import { changeIntrospection, changeDisplayOptions } from './actions/';

const viewport = new Viewport(document.getElementById('viewport'));
store.dispatch(changeIntrospection(swapiIntrospection));
//store.dispatch(changeIntrospection(githubIntrospection));
store.dispatch(changeDisplayOptions({sortByAlphabet: true}));

initPanel(document.getElementById('panel_root'));
