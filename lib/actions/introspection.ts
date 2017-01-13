import { store } from '../redux';
import * as _ from 'lodash';
import { svgRenderingFinished, renderSvg } from './svg';

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
