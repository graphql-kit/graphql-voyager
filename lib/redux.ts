import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from './reducers'

export function configureStore(preloadedState?) {
  const devTools = window['__REDUX_DEVTOOLS_EXTENSION__'];

  return createStore(
    rootReducer,
    preloadedState,
    devTools && devTools()
  );
}
