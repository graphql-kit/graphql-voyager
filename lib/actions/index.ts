import { store } from '../redux';
import * as _ from 'lodash';
import { SVGRenderer } from '../graph/svg-renderer';

var svgRenderer = new SVGRenderer();

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

export function loadIntrospection(presetName: string) {
  return dispatch => {
    dispatch(changeActiveIntrospection(presetName));

    svgRenderer.render().then((svgString) => {
      dispatch(svgRenderingFinished(svgString));
    });
  }
}

export const CHANGE_DISPLAY_OPTIONS = 'CHANGE_DISPLAY_OPTIONS';
export function changeDisplayOptions(options) {
  return {
    type: CHANGE_DISPLAY_OPTIONS,
    payload: options,
  };
}

export function updateDisplayOptions(options) {
  return (dispatch, getPrevState) => {
    let prevState = getPrevState();
    options = { ...prevState.displayOptions, ...options };

    dispatch(changeDisplayOptions(options));

    let cacheIdx = _.findIndex(prevState.svgCache, cacheItem => {
      return _.isEqual(cacheItem.displayOpts, options)
    });
    if (cacheIdx >= 0) {
      dispatch(switchCurrentSvg(cacheIdx));
    } else {
      svgRenderer.render().then((svgString) => {
        dispatch(svgRenderingFinished(svgString));
      });
    }
  }
}

export function changeSortByAlphabet(state) {
  return updateDisplayOptions({
    sortByAlphabet: state
  });
}

export function changeSkipRelay(state) {
  return updateDisplayOptions({
    skipRelay: state
  });
}

export const SVG_RENDERING_FINISHED = 'RENDERING_SVG_FINISHED';
export function svgRenderingFinished(svgString) {
  return {
    type: SVG_RENDERING_FINISHED,
    payload: svgString
  };
}
export const SWITCH_CURRENT_SVG = 'SWITCH_CURRENT_SVG';
export function switchCurrentSvg(idx) {
  return {
    type: SWITCH_CURRENT_SVG,
    payload: idx
  };
}

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
