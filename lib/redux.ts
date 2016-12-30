import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from './reducers'

function configureStore(preloadedState?) {
  const devTools = window['__REDUX_DEVTOOLS_EXTENSION__'];

  return createStore(
    rootReducer,
    preloadedState,
    devTools && devTools()
  );
}

export const store = configureStore();

//Copy-pasted from https://github.com/reactjs/redux/issues/303#issuecomment-125184409
export function observeStore(select, onChange) {
  let currentState;

  function handleChange() {
    let nextState = select(store.getState());
    if (nextState !== currentState) {
      currentState = nextState;
      onChange(currentState);
    }
  }

  let unsubscribe = store.subscribe(handleChange);
  handleChange();
  return unsubscribe;
}
