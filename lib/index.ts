import './style.css';
import {
  reportError,
  hideIntrospectionModal,
  changeActiveIntrospection
} from './actions';
import { store } from './redux';

import { SVGRender } from './graph/';
import { Viewport } from './graph/'
import { initPanel } from './panel/';

const svgRender = new SVGRender();
const viewport = new Viewport(document.getElementById('viewport'));
initPanel(document.getElementById('panel_root'));

window.onerror = (msg, url, line, col, error) => {
  store.dispatch(reportError(error.toString()));
};

if (DEBUG_INITIAL_PRESET) {
  //store.dispatch(hideIntrospectionModal())
  //store.dispatch(changeActiveIntrospection(DEBUG_INITIAL_PRESET));
}
