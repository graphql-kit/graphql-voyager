import * as Viz from 'viz.js';

onmessage = function(event) {
  console.time('Viz');
  var svgString = Viz(event.data.dot);
  console.timeEnd('Viz');
  postMessage({result: 'success', svgString: svgString});
};
