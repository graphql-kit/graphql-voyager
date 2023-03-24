import { getDot } from './dot';

// eslint-disable-next-line import/no-unresolved
import VizWorker from '../../worker/voyager.worker.js';
import { stringToSvg } from '../utils/';

const RelayIconSvg = require('!!svg-as-symbol-loader?id=RelayIcon!../components/icons/relay-icon.svg');
const DeprecatedIconSvg = require('!!svg-as-symbol-loader?id=DeprecatedIcon!../components/icons/deprecated-icon.svg');
const svgNS = 'http://www.w3.org/2000/svg';
const xlinkNS = 'http://www.w3.org/1999/xlink';

interface SerializedError {
  message: string;
  lineNumber?: number;
  fileName?: string;
  stack?: string;
}

type RenderRequestListener = (error: SerializedError, result?: string) => void;

interface RenderRequest {
  id: number;
  src: string;
}

interface RenderResponse {
  id: number;
  error?: SerializedError;
  result?: string;
}

export class SVGRender {
  private _worker: Worker;

  private _listeners: RenderRequestListener[] = [];
  private _nextId = 0;

  constructor() {
    this._worker = VizWorker;

    this._worker.addEventListener('message', (event) => {
      const { id, error, result } = event.data as RenderResponse;

      this._listeners[id](error, result);
      delete this._listeners[id];
    });
  }

  async renderSvg(typeGraph, displayOptions) {
    console.time('Rendering Graph');
    const dot = getDot(typeGraph, displayOptions);
    const rawSVG = await this._renderString(dot);
    const svg = preprocessVizSVG(rawSVG);
    console.timeEnd('Rendering Graph');
    return svg;
  }

  _renderString(src: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const id = this._nextId++;

      this._listeners[id] = function (error, result): void {
        if (error) {
          const e = new Error(error.message);
          if (error.fileName) (e as any).fileName = error.fileName;
          if (error.lineNumber) (e as any).lineNumber = error.lineNumber;
          if (error.stack) (e as any).stack = error.stack;
          return reject(e);
        }
        resolve(result);
      };

      const renderRequest: RenderRequest = { id, src };
      this._worker.postMessage(renderRequest);
    });
  }
}

function preprocessVizSVG(svgString: string) {
  //Add Relay and Deprecated icons
  svgString = svgString.replace(/<svg [^>]*>/, '$&' + RelayIconSvg);
  svgString = svgString.replace(/<svg [^>]*>/, '$&' + DeprecatedIconSvg);

  const svg = stringToSvg(svgString);

  for (const $a of svg.querySelectorAll('a')) {
    const $g = $a.parentNode;

    const $docFrag = document.createDocumentFragment();
    while ($a.firstChild) {
      const $child = $a.firstChild;
      $docFrag.appendChild($child);
    }

    $g.replaceChild($docFrag, $a);

    // @ts-expect-error We know for sure `id` is present here
    $g.id = $g.id.replace(/^a_/, '');
  }

  for (const $el of svg.querySelectorAll('title')) {
    $el.remove();
  }

  const edgesSources = {};
  for (const $edge of svg.querySelectorAll('.edge')) {
    const [from, to] = $edge.id.split(' => ');
    $edge.removeAttribute('id');
    $edge.setAttribute('data-from', from);
    $edge.setAttribute('data-to', to);
    edgesSources[from] = true;
  }

  for (const $el of svg.querySelectorAll('[id*=\\:\\:]')) {
    const [tag] = $el.id.split('::');
    $el.classList.add(tag.toLowerCase().replace(/_/, '-'));
  }

  for (const $path of svg.querySelectorAll('g.edge path')) {
    const $newPath = $path.cloneNode() as HTMLElement;
    $newPath.classList.add('hover-path');
    $newPath.removeAttribute('stroke-dasharray');
    $path.parentNode.appendChild($newPath);
  }

  for (const $field of svg.querySelectorAll('.field')) {
    const texts = $field.querySelectorAll('text');
    texts[0].classList.add('field-name');
    //Remove spaces used for text alignment
    texts[1].remove();

    if (edgesSources[$field.id]) $field.classList.add('edge-source');

    for (let i = 2; i < texts.length; ++i) {
      const str = texts[i].innerHTML;
      if (str === '{R}' || str == '{D}') {
        const $iconPlaceholder = texts[i];
        const height = 22;
        const width = 22;
        const $useIcon = document.createElementNS(svgNS, 'use');
        $useIcon.setAttributeNS(
          xlinkNS,
          'href',
          str === '{R}' ? '#RelayIcon' : '#DeprecatedIcon',
        );
        $useIcon.setAttribute('width', `${width}px`);
        $useIcon.setAttribute('height', `${height}px`);

        //FIXME: remove hardcoded offset
        const y = parseInt($iconPlaceholder.getAttribute('y')) - 15;
        $useIcon.setAttribute('x', $iconPlaceholder.getAttribute('x'));
        $useIcon.setAttribute('y', y.toString());
        $field.replaceChild($useIcon, $iconPlaceholder);
        continue;
      }

      texts[i].classList.add('field-type');
      if (edgesSources[$field.id] && !/[[\]!]/.test(str))
        texts[i].classList.add('type-link');
    }
  }

  for (const $derivedType of svg.querySelectorAll('.derived-type')) {
    $derivedType.classList.add('edge-source');
    $derivedType.querySelector('text').classList.add('type-link');
  }

  for (const $possibleType of svg.querySelectorAll('.possible-type')) {
    $possibleType.classList.add('edge-source');
    $possibleType.querySelector('text').classList.add('type-link');
  }

  const serializer = new XMLSerializer();
  return serializer.serializeToString(svg);
}
