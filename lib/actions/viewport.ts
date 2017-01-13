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
