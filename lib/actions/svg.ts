import { SVGRenderer } from '../graph/svg-renderer';

let svgRenderer = new SVGRenderer();

export function renderSvg() {
  return dispatch => {
    svgRenderer.render().then((svgString) => {
      dispatch(svgRenderingFinished(svgString));
    });
  }
}

export function renderSvgIfNeeded() {
  return (dispatch, getState) => {
    let state = getState();
    if (state.currentSvgIndex == null && state.introspection.activePreset) {
      dispatch(renderSvg());
    }
  }
}

export const SVG_RENDERING_FINISHED = 'SVG_RENDERING_FINISHED';
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
