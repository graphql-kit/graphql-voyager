import * as _ from 'lodash';

import { getInEdgesIds } from './introspection';
import { getOutEdgesIds } from './introspection';

export function appendHoverPaths(svg: SVGElement) {
  let $paths = svg.querySelectorAll('g.edge path');
  for (let i=0; i < $paths.length; i++) {
    let $path = $paths[i];
    let $newPath = $path.cloneNode() as HTMLElement;
    $newPath.classList.add('hover-path');
    $path.parentNode.appendChild($newPath);
  }
}

export function appendClickHighlightning(svg) {
  svg.addEventListener('click', event => {
    if (isNode(event.target) || isNode(event.target.parentNode) ) {
      svg.classList.add('selection-active');
      selectNode(isNode(event.target) ? event.target : event.target.parentNode);
    } else {
      svg.classList.remove('selection-active');
      deselectAll();
    }
  });
}

function selectNode(node:HTMLElement) {
  deselectAll();
  node.classList.add('selected');
  let typeName = node.id.split('::')[1];
  let inEdges = getInEdgesIds(typeName);
  let outEdges = getOutEdgesIds(typeName);

  let allEdgesIds = _.union(inEdges, outEdges);

  _.each(allEdgesIds, edgeId => {
    let $edge = document.getElementById(edgeId);
    $edge.classList.add('selected');
  });
}

function deselectAll() {
  let $selected = document.querySelectorAll('svg .selected');
  for(let i = 0; i < $selected.length; i++) {
    $selected[i].classList.remove('selected');
  }
}

function isNode(elem:HTMLElement) {
  return elem.classList.contains('node');
}
