import * as _ from 'lodash';
import {
  switchCurrentSvg,
  svgRenderingFinished,
  renderSvg
} from './svg';

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
      return dispatch(renderSvg());
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
