export const SHOW_INTROSPECTION_MODAL = 'SHOW_INTROSPECTION_MODAL';
export const HIDE_INTROSPECTION_MODAL = 'HIDE_INTROSPECTION_MODAL';

export function showIntrospectionModal() {
  return {
    type: SHOW_INTROSPECTION_MODAL
  };
}

export function hideIntrospectionModal() {
  return {
    type: HIDE_INTROSPECTION_MODAL
  };
}

export const CHANGE_CUSTOM_INTROSPECTION = 'CHANGE_CUSTOM_INTROSPECTION';
export function changeCustomIntrospection(value) {
  return {
    type: CHANGE_CUSTOM_INTROSPECTION,
    payload: JSON.parse(value)
  };
}
