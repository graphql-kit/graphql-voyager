import * as _ from 'lodash';

var xmlns = "http://www.w3.org/2000/svg";

import {
  getInEdges,
  getOutEdges,
  isScalar,
  cleanTypeName
} from './introspection';


import {
  removeClass,
  forEachNode
} from './dom-helpers';


function createSvgGroup() {
  return document.createElementNS(xmlns, 'g');
}

export function appendHoverPaths(svg: SVGElement) {
  forEachNode(svg, 'g.edge path', $path => {
    let $newPath = $path.cloneNode() as HTMLElement;
    $newPath.classList.add('hover-path');
    $path.parentNode.appendChild($newPath);
  });
}

export function splitFieldText($textNode: SVGTextElement): Element {
  let [fieldName, typeName] = $textNode.textContent.split(':');
  let $clone = $textNode.cloneNode() as Element;
  $textNode.textContent = fieldName;
  $clone.textContent = typeName;
  $clone.classList.add('field-type');

  typeName = cleanTypeName(typeName);
  $clone.setAttribute('data-type', typeName);
  $clone.classList.add(isScalar(typeName) ? 'field-type-scalar' : 'field-type-compound');

  // performance bottleneck
  let bbox = (<SVGPolygonElement>$textNode.previousElementSibling).getBBox();
  let clonePos = bbox.x + bbox.width - 5;
  $clone.setAttribute('x', clonePos.toString());
  $clone.setAttribute('text-anchor', 'end');
  let $group = createSvgGroup();
  $group.appendChild($textNode);
  $group.appendChild($clone);
  return $group;
}

export function wrapFields(svg:SVGElement) {
  forEachNode(svg, '.node', $node => {
    $node.removeChild($node.querySelector('title'));
    let $children = _.toArray($node.children);
    let $title =  $children.slice(0, 2);
    let $fields = $children.slice(2);

    let $titleWrap = createSvgGroup();
    let $text = $title[1] as SVGTextElement;
    $titleWrap.appendChild($title[0]);
    $titleWrap.appendChild($text);
    $titleWrap.classList.add('type-title');
    $node.appendChild($titleWrap);
    let typeName = $text.textContent.trim();
    for(let i = 0; i < $fields.length; i += 2) {
      let $wrap = createSvgGroup();
      let $text = $fields[i + 1] as SVGTextElement;
      $wrap.setAttribute('id', 'FIELD::' + typeName + '::' + $text.textContent.split(':')[0].trim());
      $wrap.appendChild(splitFieldText($text));
      $wrap.appendChild($fields[i]);
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
  let viewport = document.getElementById('viewport');
  removeClass(viewport, 'svg .selected', 'selected');
  removeClass(viewport, 'svg .selected-reachable', 'selected-reachable');
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
