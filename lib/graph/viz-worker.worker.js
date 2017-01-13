import * as Viz from 'viz.js';

onmessage = function(event) {
  var svgString = Viz(event.data.dot);
  postMessage({result: 'success', svgString: svgString});
};
