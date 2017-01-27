export const SELECT_ELEMENT = 'SELECT_ELEMENT';
export function selectElement(id) {
  return {
    type: SELECT_ELEMENT,
    payload: id,
  };
}

export function clearSelection() {
  return {
    type: SELECT_ELEMENT,
    payload: null,
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
