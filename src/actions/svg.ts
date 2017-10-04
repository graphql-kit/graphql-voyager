export const SVG_RENDERING_FINISHED = 'SVG_RENDERING_FINISHED';
export function svgRenderingFinished(svgString) {
  return {
    type: SVG_RENDERING_FINISHED,
    payload: svgString,
  };
}
