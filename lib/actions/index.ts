export const CHANGE_INTROSPECTION = "CHANGE_INTROSPECTION";

export function changeIntrospection(introspection) {
  return {
    type: CHANGE_INTROSPECTION,
    payload: introspection,
  };
}

export const CHANGE_DISPLAY_OPTIONS = "CHANGE_DISPLAY_OPTIONS";
export const RENDERING_SVG_FINISHED = "RENDERING_SVG_FINISHED";
export const SWITCH_CURRENT_SVG = "SWITCH_CURRENT_SVG";
export const SELECT_NODE = "SELECT_NODE";
