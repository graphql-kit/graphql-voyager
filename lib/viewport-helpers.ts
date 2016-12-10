import * as _ from 'lodash';
import { zoomer } from './index';
import * as svgPanZoom from 'svg-pan-zoom';
import * as animate from '@f/animate';
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

export function attachHoverPaths(svg: SVGElement) {
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

      let [fieldName, fieldType] = $text.textContent.split(':');
      $wrap.classList.add(isScalar(cleanTypeName(fieldType)) ? 'type-field-scalar' : 'type-field-compound');
      $wrap.setAttribute('id', 'FIELD::' + typeName + '::' + fieldName.trim());
      $wrap.appendChild(splitFieldText($text));
      $wrap.insertBefore($fields[i], $wrap.firstChild);
      $node.appendChild($wrap);
    }
  });
}

export function attachClickHighlighting(svg) {
  let dragged = false;

  let moveHandler = () => dragged = true;
  svg.addEventListener('mousedown', event => {
    dragged = false;
    setTimeout(() => svg.addEventListener('mousemove', moveHandler));
  });
  svg.addEventListener('mouseup', event => {
    svg.removeEventListener('mousemove', moveHandler);
    if (dragged) return;
    if (isLink(event.target)) {
      panAndZoomToLink(event.target);
    } else if (isNode(event.target)) {
      svg.classList.add('selection-active');
      selectNode(getParent(event.target, 'node'));
    } else if (isEdge(event.target)) {
      svg.classList.remove('selection-active');
      selectEdge(getParent(event.target, 'edge'));
    } else {
      if (isControl(event.target)) return;
      svg.classList.remove('selection-active');
      deselectAll();
    }
  });
}

export function attachHoverHighlighting(svg) {
  let $prevHovered = null;
  let $prevHoveredEdge = null;

  function clearSelection() {
    if ($prevHovered) $prevHovered.classList.remove('hovered');
    if ($prevHoveredEdge) $prevHoveredEdge.classList.remove('hovered');
  }

  svg.addEventListener('mousemove', event => {
    if (isCompoundField(event.target)) {
      let $field = getParent(event.target, 'type-field-compound');
      if ($field.classList.contains('hovered')) return;
      clearSelection();
      $field.classList.add('hovered');
      $prevHovered = $field;
      let $corEdge = svg.getElementById($field.id.replace('FIELD::', 'FIELD_EDGE::'));
      $corEdge.classList.add('hovered');
      $prevHoveredEdge = $corEdge;
    } else {
      clearSelection();
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

function selectEdge(edge:Element) {
  deselectAll();
  edge.classList.add('selected');
}

function deselectAll() {
  let viewport = document.getElementById('viewport');
  removeClass(viewport, 'svg .selected', 'selected');
  removeClass(viewport, 'svg .selected-reachable', 'selected-reachable');
}

function getParent(elem:Element, className:string): Element | null {
  while (elem && elem.tagName !== 'svg') {
    if (elem.classList.contains(className)) return elem;
    elem = elem.parentNode as Element;
  }
  return null;
}

function isNode(elem:Element):boolean {
  return getParent(elem, 'node') != null;
}

function isEdge(elem:Element):boolean {
  return getParent(elem, 'edge') != null;
}

function isLink(elem:Element):boolean {
  return elem.classList.contains('field-type-compound');
}

function isCompoundField(elem:Element):boolean {
  return getParent(elem, 'type-field-compound') != null;
}

function panAndZoomToLink(link: Element) {
  let typeName = link.getAttribute('data-type');
  let nodeId = 'TYPE::' + typeName;

  let bbBox = document.getElementById(nodeId).getBoundingClientRect();
  let currentPan = zoomer.getPan();
  let viewPortSizes = (<any>zoomer).getSizes();

  currentPan.x += viewPortSizes.width/2 - bbBox.width/2;
  currentPan.y += viewPortSizes.height/2 - bbBox.height/2;

  let zoomUpdate = Math.max(bbBox.height / viewPortSizes.height, bbBox.width / viewPortSizes.width);
  zoomUpdate *= 1.2;

  let newZoom = zoomer.getZoom() / zoomUpdate;
  let newX = currentPan.x - bbBox.left;
  let newY = currentPan.y - bbBox.top;
  //zoomer.zoomAtPoint(newZoom, {x:newX, y:newY});
  animatePanAndZoom(newX , newY, newZoom, zoomer);
}

function animatePanAndZoom(x, y, zoomEnd, zoomer:SvgPanZoom.Instance) {
  let pan = zoomer.getPan();
  let panEnd = {x, y};
  animate(pan, panEnd, (props, t) => {
    zoomer.pan({x: props.x, y: props.y});
    if (props == panEnd) {
      let zoom = zoomer.getZoom();
      animate({zoom}, {zoom: zoomEnd}, props => {
        zoomer.zoom(props.zoom);
      });
    }
  });
}

function isControl(elem:SVGElement) {
  return elem.className.baseVal.startsWith('svg-pan-zoom');
}
