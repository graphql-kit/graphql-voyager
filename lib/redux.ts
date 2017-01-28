import * as _ from 'lodash';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers'

function configureStore(preloadedState?) {
  const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk))
  );
}

export const store = configureStore();

// Initial version was copy-pasted from
// https://github.com/reactjs/redux/issues/303#issuecomment-125184409
export function observeStore(...args) {
  let onChange = args.pop();
  let selectors = args;
  let currentState;

  function handleChange() {
    const nextState = _.map(selectors, f => f(store.getState()));
    const stateChanged = _(nextState)
      .zip(currentState)
      .some(([x, y]) => (x !== y));

    if (stateChanged) {
      currentState = nextState;
      onChange(...currentState);
    }
  }

  let unsubscribe = store.subscribe(handleChange);
  handleChange();
  return unsubscribe;
}
