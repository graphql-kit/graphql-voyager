import { getDotSelector } from './dot';
import { observeStore } from '../redux';
import { svgRenderingFinished, reportError } from '../actions';

import { loadWorker as defaultLoadWorker } from '../utils/';
import { WorkerCallback } from '../utils/types';

import Viz from 'viz.js';
import defaultWorkerURI from 'viz.js/full.render.js';

export class SVGRender {
  unsubscribe: any;
  viz: any;

  constructor(
    public store,
    workerURI: string = defaultWorkerURI,
    loadWorker: WorkerCallback = defaultLoadWorker,
  ) {
    loadWorker(workerURI || defaultWorkerURI, !workerURI).then(worker => {
      this.viz = new Viz({ worker });

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
    this.viz.renderString(dot)
      .then(svg => this.store.dispatch(svgRenderingFinished(svg)))
      .catch(error => {
        const msg = error.message || 'Unknown error';
        this.store.dispatch(reportError(msg));
      });
  }
}
