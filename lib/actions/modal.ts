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

export const CHANGE_NOT_APPLIED_ACTIVE_PRESET = 'CHANGE_NOT_APPLIED_ACTIVE_PRESET';
export const CHANGE_NOT_APPLIED_CUSTOM_PRESET = 'CHANGE_NOT_APPLIED_CUSTOM_PRESET';
export const CHANGE_NOT_APPLIED_DISPLAY_OPTIONS = 'CHANGE_NOT_APPLIED_DISPLAY_OPTIONS';

export function changeNaActivePreset(value:string) {
  return {
    type: CHANGE_NOT_APPLIED_ACTIVE_PRESET,
    payload: value
  };
}

export function changeNaCustomPreset(value:string) {
  return {
    type: CHANGE_NOT_APPLIED_CUSTOM_PRESET,
    payload: value
  };
}

export function changeNaDisplayOptions(options:any) {
  return {
    type: CHANGE_NOT_APPLIED_DISPLAY_OPTIONS,
    payload: options
  };
}
