import { store } from '../redux';
import * as _ from 'lodash';

export const CHANGE_ACTIVE_INTROSPECTION = 'CHANGE_ACTIVE_INTROSPECTION';
export function changeActiveIntrospection(presetName: string) {
  var introspection = store.getState().introspection.presets[presetName];

  if (_.isUndefined(introspection))
    throw Error('Invalid preset name: ' + presetName);

  return {
    type: CHANGE_ACTIVE_INTROSPECTION,
    payload: presetName,
  };
}

export const CHANGE_DISPLAY_OPTIONS = 'CHANGE_DISPLAY_OPTIONS';
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

export const RENDERING_SVG_FINISHED = 'RENDERING_SVG_FINISHED';
export const SWITCH_CURRENT_SVG = 'SWITCH_CURRENT_SVG';

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

export const SHOW_INTROSPECTION_MODAL =
  'SHOW_INTROSPECTION_MODAL';
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
