import * as _ from 'lodash';

import { getInEdges } from './introspection';
import { getOutEdges } from './introspection';

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

function isNode(elem:HTMLElement) {
  return elem.classList.contains('node');
}
