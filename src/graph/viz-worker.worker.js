import * as Viz from 'viz.js';

onmessage = function(event) {
  try {
    console.time('Rendering Graph');
    var svgString = Viz(event.data.dot, {totalMemory: 2 * 16777216});
    console.timeEnd('Rendering Graph');
    postMessage({result: 'success', svgString: svgString});
  }
  catch(e) {
    postMessage({result: 'failed', msg: e.toString()});
  }
};
