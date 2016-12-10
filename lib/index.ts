import { dot } from './introspection';
import * as Viz from 'viz.js';
import * as svgPanZoom from 'svg-pan-zoom';

import { appendHoverPaths, appendClickHighlightning, wrapFields} from './viewport-helpers';

let result = Viz(dot);

let elem = document.getElementById('viewport');
elem.innerHTML = result;

let svg = <SVGElement>elem.firstElementChild;

appendHoverPaths(svg);
appendClickHighlightning(svg);
wrapFields(svg);

export var zoomer = svgPanZoom(svg, {
  zoomScaleSensitivity: 0.3,
  minZoom: 0.5,
  controlIconsEnabled: true
});
