import * as _ from 'lodash';

var xmlns = "http://www.w3.org/2000/svg";

import { getInEdges } from './introspection';
import { getOutEdges } from './introspection';

export function appendHoverPaths(svg: SVGElement) {
  let $paths = svg.querySelectorAll('g.edge path');
  _.each($paths, $path => {
    let $newPath = $path.cloneNode() as HTMLElement;
    $newPath.classList.add('hover-path');
    $path.parentNode.appendChild($newPath);
  });
}

export function wrapFields(svg:SVGElement) {
  let $nodes = document.querySelectorAll('.node');
  _.each($nodes, ($node: HTMLElement) => {
    $node.removeChild($node.querySelector('title'));
    let $children = _.toArray($node.children);
    for(let i = 0; i < $children.length; i += 2) {
      let $wrap = document.createElementNS(xmlns, 'g');
      let $text = $children[i + 1] as HTMLElement;
      $wrap.setAttribute('id', 'FIELD::' + $text.textContent.trim());
      $wrap.appendChild($children[i]);
      $wrap.appendChild($text);
      $node.appendChild($wrap);
    }
  });
}

export function appendClickHighlightning(svg) {
  let dragged = false;

  let moveHandler = () => dragged = true;
  svg.addEventListener('mousedown', event => {
    dragged = false;
    setTimeout(() => svg.addEventListener('mousemove', moveHandler));
  });
  svg.addEventListener('mouseup', event => {
    svg.removeEventListener('mousemove', moveHandler);
    if (dragged) return;
    if (isNode(event.target)) {
      svg.classList.add('selection-active');
      selectNode(getNode(event.target));
    } else {
      if (isControl(event.target)) return;
      svg.classList.remove('selection-active');
      deselectAll();
    }
  });
}

function selectNode(node:Element) {
  deselectAll();
  node.classList.add('selected');
  let typeName = node.id.split('::')[1];
  let inEdges = getInEdges(typeName);
  let outEdges = getOutEdges(typeName);

  let allEdges = _.union(inEdges, outEdges);

  _.each(allEdges, edge => {
    let $edge = document.getElementById(edge.id);
    $edge.classList.add('selected');
    let $node = document.getElementById(edge.nodeId);
    $node.classList.add('selected-reachable');
  });
}

function deselectAll() {
  let $elems = document.querySelectorAll('svg .selected');
  for(let i = 0; i < $elems.length; i++) {
    $elems[i].classList.remove('selected');
  }

  $elems = document.querySelectorAll('svg .selected-reachable');
  for(let i = 0; i < $elems.length; i++) {
    $elems[i].classList.remove('selected-reachable');
  }

}

function getNode(elem:Element): Element | null {
  while (elem && elem.tagName !== 'svg') {
    if (elem.classList.contains('node')) return elem;
    elem = elem.parentNode as Element;
  }
  return null;
}

function isNode(elem:Element):boolean {
  return getNode(elem) != null;
}

function isControl(elem:SVGElement) {
  return elem.className.baseVal.startsWith('svg-pan-zoom');
}
