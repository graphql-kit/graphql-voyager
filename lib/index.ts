import { Viewport } from './graph/'
import { initPanel } from './panel/';

const viewport = new Viewport(document.getElementById('viewport'));
initPanel(document.getElementById('panel_root'));
