import * as _ from 'lodash';

export const CHANGE_ACTIVE_INTROSPECTION = 'CHANGE_ACTIVE_INTROSPECTION';
export function changeActiveIntrospection(presetName: string, displayOptions?: any) {
  return {
    type: CHANGE_ACTIVE_INTROSPECTION,
    payload: {
      presetName,
      displayOptions
    }
  };
}

export const CHANGE_CUSTOM_INTROSPECTION = 'CHANGE_CUSTOM_INTROSPECTION';
export function changeCustomIntrospection(introspection: string) {
  return {
    type: CHANGE_CUSTOM_INTROSPECTION,
    payload: introspection,
  };
}
