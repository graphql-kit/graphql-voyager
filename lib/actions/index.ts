export const CHANGE_INTROSPECTION = "CHANGE_INTROSPECTION";
export function changeIntrospection(introspection) {
  return {
    type: CHANGE_INTROSPECTION,
    payload: introspection,
  };
}

export const CHANGE_DISPLAY_OPTIONS = "CHANGE_DISPLAY_OPTIONS";
export function changeDisplayOptions(options) {
  return {
    type: CHANGE_DISPLAY_OPTIONS,
    payload: options,
  };
}

export function changeSortByAlphabet(state) {
  return {
    type: CHANGE_DISPLAY_OPTIONS,
    payload: {sortByAlphabet: state},
  };
}

export function changeSkipRelay(state) {
  return {
    type: CHANGE_DISPLAY_OPTIONS,
    payload: {skipRelay: state},
  };
}

export const RENDERING_SVG_FINISHED = "RENDERING_SVG_FINISHED";
export const SWITCH_CURRENT_SVG = "SWITCH_CURRENT_SVG";
export const SELECT_NODE = "SELECT_NODE";
