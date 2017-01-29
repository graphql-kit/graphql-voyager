export const SELECT_ELEMENT = 'SELECT_ELEMENT';
export function selectElement(id) {
  return {
    type: SELECT_ELEMENT,
    payload: id,
  };
}

export const SELECT_PREVIOUS_TYPE = 'SELECT_PREVIOUS_TYPE';
export function selectPreviousType() {
  return {
    type: SELECT_PREVIOUS_TYPE,
  };
}

export const CLEAR_SELECTION = 'CLEAR_SELECTION';
export function clearSelection() {
  return {
    type: CLEAR_SELECTION,
  };
}

export const FOCUS_ELEMENT = 'FOCUS_ELEMENT';
export function focusElement(id) {
  return {
    type: FOCUS_ELEMENT,
    payload: id,
  };
}

export const FOCUS_ELEMENT_DONE = 'FOCUS_ELEMENT_DONE';
export function focusElementDone(id) {
  return {
    type: FOCUS_ELEMENT_DONE,
    payload: null,
  };
}
