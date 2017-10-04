export const SHOW_SCHEMA_MODAL = 'SHOW_SCHEMA_MODAL';
export const HIDE_SCHEMA_MODAL = 'HIDE_SCHEMA_MODAL';

export function showSchemaModal() {
  return {
    type: SHOW_SCHEMA_MODAL,
  };
}

export function hideSchemaModal() {
  return {
    type: HIDE_SCHEMA_MODAL,
  };
}

export const CHANGE_NOT_APPLIED_ACTIVE_PRESET = 'CHANGE_NOT_APPLIED_ACTIVE_PRESET';
export const CHANGE_NOT_APPLIED_DISPLAY_OPTIONS = 'CHANGE_NOT_APPLIED_DISPLAY_OPTIONS';
export const CHANGE_ACTIVE_PRESET = 'CHANGE_ACTIVE_PRESET';

export function changeNaActivePreset(value: string, schema: any) {
  return {
    type: CHANGE_NOT_APPLIED_ACTIVE_PRESET,
    payload: {
      presetName: value,
      schema,
    },
  };
}

export function changeNaDisplayOptions(options: any) {
  return {
    type: CHANGE_NOT_APPLIED_DISPLAY_OPTIONS,
    payload: options,
  };
}

export function changeActivePreset(preset: string) {
  console.log(preset);
  return {
    type: CHANGE_ACTIVE_PRESET,
    payload: preset,
  };
}
