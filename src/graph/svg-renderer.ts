import { getDotSelector } from './dot';
import { observeStore } from '../redux';
import { svgRenderingFinished, reportError } from '../actions';

import { loadWorker } from '../utils/';

// just reference it to to trigger worker loader
require('./viz-worker.worker');

export class SVGRender {
  worker: Worker;
  unsubscribe: any;

  constructor(public store, workerURI?: string) {
    loadWorker(workerURI || 'voyager.worker.js', !workerURI).then(worker => {
      this.worker = worker;

      this.unsubscribe = observeStore(
        store,
        state => state.currentSvgIndex,
        getDotSelector,
        (currentSvgIndex, dot) => {
          if (currentSvgIndex === null && dot !== null) this._renderSvg(dot);
        },
      );
    });
  }

  destroy() {
    this.unsubscribe();
  }

  _renderSvg(dot) {
    let cb = event => {
      let data = event.data;
      if (data.result === 'success') this.store.dispatch(svgRenderingFinished(data.svgString));
      else this.store.dispatch(reportError(data.msg));
      this.worker.removeEventListener('message', cb);
    };
    this.worker.postMessage({ dot });
    this.worker.addEventListener('message', cb);
  }
}
