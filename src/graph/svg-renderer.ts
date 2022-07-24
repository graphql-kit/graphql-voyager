import * as _ from 'lodash';
import { getDot } from './dot';

import { loadWorker as defaultLoadWorker, stringToSvg } from '../utils/';

import { WorkerCallback } from '../utils/types';

import Viz from 'viz.js';
import defaultWorkerURI from 'viz.js/full.render.js';

const RelayIconSvg = require('!!svg-as-symbol-loader?id=RelayIcon!../components/icons/relay-icon.svg');
const DeprecatedIconSvg = require('!!svg-as-symbol-loader?id=DeprecatedIcon!../components/icons/deprecated-icon.svg');
const svgNS = 'http://www.w3.org/2000/svg';
const xlinkNS = 'http://www.w3.org/1999/xlink';

export class SVGRender {
  vizPromise: any;

  constructor(
    workerURI: string,
    loadWorker: WorkerCallback = defaultLoadWorker,
  ) {
    this.vizPromise = loadWorker(
      workerURI || defaultWorkerURI,
      !workerURI,
    ).then((worker) => new Viz({ worker }));
  }

  renderSvg(typeGraph, displayOptions) {
    return this.vizPromise
      .then((viz) => {
        console.time('Rendering Graph');
        const dot = getDot(typeGraph, displayOptions);
        return viz.renderString(dot);
      })
      .then((rawSVG) => {
        const svg = preprocessVizSVG(rawSVG);
        console.timeEnd('Rendering Graph');
        return svg;
      });
  }
}

function preprocessVizSVG(svgString: string) {
  //Add Relay and Deprecated icons
  svgString = svgString.replace(/<svg [^>]*>/, '$&' + RelayIconSvg);
  svgString = svgString.replace(/<svg [^>]*>/, '$&' + DeprecatedIconSvg);

  let svg = stringToSvg(svgString);

  svg.querySelectorAll('a').forEach(($a) => {
    let $g = $a.parentNode;

    var $docFrag = document.createDocumentFragment();
    while ($a.firstChild) {
      let $child = $a.firstChild;
      $docFrag.appendChild($child);
    }

    $g.replaceChild($docFrag, $a);

    // @ts-ignore
    $g.id = $g.id.replace(/^a_/, '');
  });

  svg.querySelectorAll('title').forEach(($el) => $el.remove());

  var edgesSources = {};
  svg.querySelectorAll('.edge').forEach(($edge) => {
    let [from, to] = $edge.id.split(' => ');
    $edge.removeAttribute('id');
    $edge.setAttribute('data-from', from);
    $edge.setAttribute('data-to', to);
    edgesSources[from] = true;
  });

  svg.querySelectorAll('[id]').forEach(($el) => {
    let [tag, ...restOfId] = $el.id.split('::');
    if (_.size(restOfId) < 1) return;

    $el.classList.add(tag.toLowerCase().replace(/_/, '-'));
  });

  svg.querySelectorAll('g.edge path').forEach(($path) => {
    let $newPath = $path.cloneNode() as HTMLElement;
    $newPath.classList.add('hover-path');
    $newPath.removeAttribute('stroke-dasharray');
    $path.parentNode.appendChild($newPath);
  });

  svg.querySelectorAll('.field').forEach(($field) => {
    let texts = $field.querySelectorAll('text');
    texts[0].classList.add('field-name');
    //Remove spaces used for text alignment
    texts[1].remove();

    if (edgesSources[$field.id]) $field.classList.add('edge-source');

    for (var i = 2; i < texts.length; ++i) {
      var str = texts[i].innerHTML;
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
      if (edgesSources[$field.id] && !/[\[\]\!]/.test(str))
        texts[i].classList.add('type-link');
    }
  });

  svg.querySelectorAll('.derived-type').forEach(($derivedType) => {
    $derivedType.classList.add('edge-source');
    $derivedType.querySelector('text').classList.add('type-link');
  });

  svg.querySelectorAll('.possible-type').forEach(($possibleType) => {
    $possibleType.classList.add('edge-source');
    $possibleType.querySelector('text').classList.add('type-link');
  });

  const serializer = new XMLSerializer();
  return serializer.serializeToString(svg);
}
