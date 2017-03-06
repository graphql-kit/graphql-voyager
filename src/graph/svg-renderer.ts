import { getDotSelector } from './dot'
import { store, observeStore } from '../redux';
import { svgRenderingFinished, reportError } from '../actions';

import { monkeyPatchWorker } from './worker.monkeypatch';

monkeyPatchWorker();
const VizWorker = require('./viz-worker.worker');

export class SVGRender {
  worker: Worker;

  constructor() {
    this.worker = new VizWorker();

    observeStore(
      state => state.currentSvgIndex,
      getDotSelector,
      (currentSvgIndex, dot) => {
        if (currentSvgIndex === null && dot !== null)
          this._renderSvg(dot);
      }
    );
  }

  _renderSvg(dot) {
    let cb = event => {
      let data = event.data;
      if (data.result === 'success')
        store.dispatch(svgRenderingFinished(data.svgString));
      else
        store.dispatch(reportError(data.msg));
      this.worker.removeEventListener('message', cb);
    }
    this.worker.postMessage({dot});
    this.worker.addEventListener('message', cb);
  }
};
