import './style.css';

import {
  reportError,
  showIntrospectionModal,
  hideIntrospectionModal,
  changeActiveIntrospection
} from './actions';

import { store } from './redux';
import { init } from './components/';

init(document.getElementById('panel_root'));

store.dispatch(showIntrospectionModal())
if (DEBUG_INITIAL_PRESET) {
  store.dispatch(hideIntrospectionModal())
  store.dispatch(changeActiveIntrospection(DEBUG_INITIAL_PRESET));
}

export * from './components';
