import * as _ from 'lodash';
import { createStore, applyMiddleware, compose, Store } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

export function configureStore(preloadedState?): Store<any> {
  let composeEnhancers;
  if (DEBUG) {
    composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
  } else {
    composeEnhancers = compose;
  }

  return createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(thunk)));
}

// Initial version was copy-pasted from
// https://github.com/reactjs/redux/issues/303#issuecomment-125184409
export function observeStore(store: Store<any>, ...args) {
  let onChange = args.pop();
  let selectors = args;
  let currentState;

  function handleChange() {
    const nextState = _.map(selectors, f => f(store.getState()));
    const stateChanged = _(nextState)
      .zip(currentState)
      .some(([x, y]) => x !== y);

    if (stateChanged) {
      currentState = nextState;
      onChange(...currentState);
    }
  }

  let unsubscribe = store.subscribe(handleChange);
  handleChange();
  return unsubscribe;
}
