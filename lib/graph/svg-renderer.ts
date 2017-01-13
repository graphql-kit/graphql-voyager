import { getTypeGraphSelector, TypeGraph } from './type-graph';
const VizWorker = require('./viz-worker.worker');
import { store, observeStore } from '../redux';
import { renderSvgIfNeeded } from '../actions/'

export class SVGRenderer {
  worker: Worker;
  typeGraph: TypeGraph;

  constructor() {
    this.worker = new VizWorker();

    observeStore(getTypeGraphSelector, typeGraph => {
      if (typeGraph === null)
        return;
      this.typeGraph = new TypeGraph(typeGraph);
      store.dispatch<any>(renderSvgIfNeeded());
    });
  }

  render() {
    return new Promise((resolve, reject) => {
      let cb = event => {
        let data = event.data;
        if (data.result === 'success') {
          resolve(data.svgString);
        } else {
          reject(data);
        }
        this.worker.removeEventListener('message', cb);
      }
      this.worker.postMessage({dot: this.typeGraph.getDot()});
      this.worker.addEventListener('message', cb);
    });
  }
}
