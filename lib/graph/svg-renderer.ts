import { getDotSelector } from './dot'
import { store, observeStore } from '../redux';
import { renderSvgIfNeeded } from '../actions/';

const VizWorker = require('./viz-worker.worker');
export class SVGRenderer {
  worker: Worker;
  dot: string;

  constructor() {
    this.worker = new VizWorker();

    observeStore(getDotSelector, dot => {
      if (dot === null)
        return;
      this.dot = dot;
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
      this.worker.postMessage({dot: this.dot});
      this.worker.addEventListener('message', cb);
    });
  }
}
