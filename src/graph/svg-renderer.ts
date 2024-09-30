import { stringToSvg } from '../utils/dom-helpers';
import { getDot } from './dot';
import { VizWorker } from './graphviz-worker';
import { TypeGraph } from './type-graph';

const vizWorker = new VizWorker();

export async function renderSvg(typeGraph: TypeGraph) {
  const dot = getDot(typeGraph);
  const rawSVG = await vizWorker.renderString(dot);
  const svg = preprocessVizSVG(rawSVG);
  return svg;
}

// eslint-disable-next-line @typescript-eslint/no-require-imports
const RelayIconSvg = require('!!svg-as-symbol-loader?id=RelayIcon!../components/icons/relay-icon.svg');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const DeprecatedIconSvg = require('!!svg-as-symbol-loader?id=DeprecatedIcon!../components/icons/deprecated-icon.svg');

const svgNS = 'http://www.w3.org/2000/svg';
const xlinkNS = 'http://www.w3.org/1999/xlink';

function preprocessVizSVG(svgString: string) {
  const svg = stringToSvg(svgString);

  //Add Relay and Deprecated icons
  let defs = svg.querySelector('defs');
  if (!defs) {
    defs = document.createElementNS(svgNS, 'defs');
    svg.insertBefore(defs, svg.firstChild);
  }
  defs.appendChild(stringToSvg(DeprecatedIconSvg));
  defs.appendChild(stringToSvg(RelayIconSvg));

  for (const $a of svg.querySelectorAll('a')) {
    const $g = $a.parentNode!;

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

  const edgesSources = new Set<string>();
  for (const $edge of svg.querySelectorAll('.edge')) {
    const [from, to] = $edge.id.split(' => ');
    $edge.removeAttribute('id');
    $edge.setAttribute('data-from', from);
    $edge.setAttribute('data-to', to);
    edgesSources.add(from);
  }

  for (const $el of svg.querySelectorAll('[id*=\\:\\:]')) {
    const [tag] = $el.id.split('::');
    $el.classList.add(tag.toLowerCase().replace(/_/, '-'));
  }

  for (const $path of svg.querySelectorAll('g.edge path')) {
    const $newPath = $path.cloneNode() as HTMLElement;
    $newPath.classList.add('hover-path');
    $newPath.removeAttribute('stroke-dasharray');
    $path.parentNode?.appendChild($newPath);
  }

  for (const $field of svg.querySelectorAll('.field')) {
    const texts = $field.querySelectorAll('text');
    texts[0].classList.add('field-name');
    //Remove spaces used for text alignment
    texts[1].remove();

    if (edgesSources.has($field.id)) $field.classList.add('edge-source');

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
        const y = parseInt($iconPlaceholder.getAttribute('y')!) - 15;
        $useIcon.setAttribute('x', $iconPlaceholder.getAttribute('x')!);
        $useIcon.setAttribute('y', y.toString());
        $field.replaceChild($useIcon, $iconPlaceholder);
        continue;
      }

      texts[i].classList.add('field-type');
      if (edgesSources.has($field.id) && !/[[\]!]/.test(str))
        texts[i].classList.add('type-link');
    }
  }

  for (const $derivedType of svg.querySelectorAll('.derived-type')) {
    $derivedType.classList.add('edge-source');
    $derivedType.querySelector('text')?.classList.add('type-link');
  }

  for (const $possibleType of svg.querySelectorAll('.possible-type')) {
    $possibleType.classList.add('edge-source');
    $possibleType.querySelector('text')?.classList.add('type-link');
  }

  const serializer = new XMLSerializer();
  return serializer.serializeToString(svg);
}
