import { hideIntrospectionModal, changeActiveIntrospection } from './actions';
import { store } from './redux';

import { SVGRender } from './graph/';
import { Viewport } from './graph/'
import { initPanel } from './panel/';

var debugInitialPreset = 'swapi';

const svgRender = new SVGRender();
const viewport = new Viewport(document.getElementById('viewport'));
initPanel(document.getElementById('panel_root'));

if (debugInitialPreset) {
  store.dispatch(hideIntrospectionModal())
  store.dispatch(changeActiveIntrospection(debugInitialPreset));
}


