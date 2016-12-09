import { dot } from './introspection';
import * as Viz from 'viz.js';
import * as svgPanZoom from 'svg-pan-zoom';

let result = Viz(dot);

let elem = document.getElementById('viewport');
elem.innerHTML = result;

let svg = <HTMLElement>elem.firstElementChild;

let zoomer = svgPanZoom(svg, {
  zoomScaleSensitivity: 0.3,
  minZoom: 0.5
});
