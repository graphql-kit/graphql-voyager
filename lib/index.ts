import { SVGRender } from './graph/';
import { Viewport } from './graph/'
import { initPanel } from './panel/';


const svgRender = new SVGRender();
const viewport = new Viewport(document.getElementById('viewport'));
initPanel(document.getElementById('panel_root'));
