import './style.css';

import {
  reportError,
  showIntrospectionModal,
  hideIntrospectionModal,
  changeActiveIntrospection
} from './actions';

import { store } from './redux';
import { initPanel } from './panel/';

initPanel(document.getElementById('panel_root'));

window.onerror = (msg, url, line, col, error) => {
  store.dispatch(reportError(error.toString()));
};

store.dispatch(showIntrospectionModal())
if (DEBUG_INITIAL_PRESET) {
  store.dispatch(hideIntrospectionModal())
  store.dispatch(changeActiveIntrospection(DEBUG_INITIAL_PRESET));
}
