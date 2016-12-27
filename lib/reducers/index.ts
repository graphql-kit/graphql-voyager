import * as ActionTypes from '../actions'

export function rootReducer(previousState = {msg: 'Initial string'}, action) {
  const { type, error } = action;

  if (type === ActionTypes.HELLO)
    return {msg: 'Hello World!'};
  return previousState;
}
