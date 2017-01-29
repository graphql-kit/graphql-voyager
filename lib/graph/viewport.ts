import * as _ from 'lodash';
import * as svgPanZoom from 'svg-pan-zoom';
import * as animate from '@f/animate';

import * as Actions from '../actions'
import { store, observeStore } from '../redux';

import {
  removeClass,
  forEachNode
} from '../utils/';

import { typeNameToId } from '../introspection';

export class Viewport {
  $svg: SVGElement;
  zoomer: SvgPanZoom.Instance;

  constructor(public container: HTMLElement) {
    observeStore(state => state.currentSvgIndex, svgIdx => {
      if (svgIdx == null) {
        return;
      }
      let cachedSvg = store.getState().svgCache[svgIdx];
      this.display(cachedSvg.svg);
    })

    observeStore(state => state.selected.currentId, id => this.selectId(id));
    observeStore(state => state.graphView.focusedId, id => {
      if (id === null)
        return;

      this.focusElement(id);
      store.dispatch(Actions.focusElementDone(id));
    });
  }

  display(svgString) {
    this.clear();
    this.$svg = preprocessVizSvg(svgString);
    this.container.appendChild(this.$svg);
    this.enableZoom();
    this.bindClick();
    this.bindHover();
  }

  clear() {
    this.zoomer && this.zoomer.destroy();
    this.container.innerHTML = '';
  }

  enableZoom() {
    this.zoomer = svgPanZoom(this.$svg, {
      zoomScaleSensitivity: 0.3,
      minZoom: 0.9,
      controlIconsEnabled: true
    });
  }

  bindClick() {
    let dragged = false;

    let moveHandler = () => dragged = true;
    this.$svg.addEventListener('mousedown', event => {
      dragged = false;
      setTimeout(() => this.$svg.addEventListener('mousemove', moveHandler));
    });
    this.$svg.addEventListener('mouseup', event => {
      this.$svg.removeEventListener('mousemove', moveHandler);
      if (dragged) return;

      var target = event.target as Element;
      if (isLink(target)) {
        const typeId = typeNameToId(target.textContent);
        store.dispatch(Actions.focusElement(typeId));
      } else if (isNode(target)) {
        let $node = getParent(target, 'node');
        store.dispatch(Actions.selectElement($node.id));
      } else if (isEdge(target)) {
        let $edge = getParent(target, 'edge');
        store.dispatch(Actions.selectElement(edgeSource($edge).id));
      } else if (!isControl(target)) {
        store.dispatch(Actions.clearSelection());
      }
    });
  }

  bindHover() {
    let $prevHovered = null;
    let $prevHoveredEdge = null;

    function clearSelection() {
      if ($prevHovered) $prevHovered.classList.remove('hovered');
      if ($prevHoveredEdge) $prevHoveredEdge.classList.remove('hovered');
    }

    this.$svg.addEventListener('mousemove', event => {
      let target = event.target as Element;
      if (isEdgeSource(target)) {
        let $sourceGroup = getParent(target, 'edge-source');
        if ($sourceGroup.classList.contains('hovered')) return;
        clearSelection();
        $sourceGroup.classList.add('hovered');
        $prevHovered = $sourceGroup;
        let $edge = edgeFrom($sourceGroup.id);
        $edge.classList.add('hovered');
        $prevHoveredEdge = $edge;
      } else {
        clearSelection();
      }
    });
  }

  selectId(id:string) {
    if (!this.$svg)
      return;

    this.deselectAll();

    if (id === null) {
      this.$svg.classList.remove('selection-active');
      return;
    }

    this.$svg.classList.add('selection-active');
    var $selected = document.getElementById(id);
    if ($selected.classList.contains('node'))
      this.selectNode($selected);
    else if ($selected.classList.contains('edge-source'))
      this.selectEdge($selected);
  }

  selectNode(node:Element) {
    node.classList.add('selected');

    forEachNode(node, '.edge-source', source => {
      const $edge = edgeFrom(source.id);
      $edge.classList.add('selected');
      edgeTarget($edge).classList.add('selected-reachable');
    });

    _.each(edgesTo(node.id), $edge => {
      $edge.classList.add('selected');
      edgeSource($edge).parentElement.classList.add('selected-reachable');
    });
  }

  selectEdge(edgeSource:Element) {
    edgeFrom(edgeSource.id).classList.add('selected');
  }

  deselectAll() {
    let viewport = document.getElementById('viewport');
    removeClass(this.$svg, '.selected', 'selected');
    removeClass(this.$svg, '.selected-reachable', 'selected-reachable');
  }

  focusElement(id:string) {
    let bbBox = document.getElementById(id).getBoundingClientRect();
    let currentPan = this.zoomer.getPan();
    let viewPortSizes = (<any>this.zoomer).getSizes();

    currentPan.x += viewPortSizes.width/2 - bbBox.width/2;
    currentPan.y += viewPortSizes.height/2 - bbBox.height/2;

    let zoomUpdate = Math.max(bbBox.height / viewPortSizes.height, bbBox.width / viewPortSizes.width);
    zoomUpdate *= 1.2;

    let newZoom = this.zoomer.getZoom() / zoomUpdate;
    let newX = currentPan.x - bbBox.left;
    let newY = currentPan.y - bbBox.top;
    //zoomer.zoomAtPoint(newZoom, {x:newX, y:newY});
    this.animatePanAndZoom(newX , newY, newZoom);
  }

  animatePanAndZoom(x, y, zoomEnd) {
    let pan = this.zoomer.getPan();
    let panEnd = {x, y};
    animate(pan, panEnd, (props, t) => {
      this.zoomer.pan({x: props.x, y: props.y});
      if (props == panEnd) {
        let zoom = this.zoomer.getZoom();
        if (zoomEnd > zoom) return;
        animate({zoom}, {zoom: zoomEnd}, props => {
          this.zoomer.zoom(props.zoom);
        });
      }
    });
  }
}

export function preprocessVizSvg(svgString:string) {
  var wrapper = document.createElement('div');
  wrapper.innerHTML = svgString;
  var svg = <SVGElement>wrapper.firstElementChild;

  forEachNode(svg, 'a', $a => {
    let $g = $a.parentNode;

    var $docFrag = document.createDocumentFragment();
    while ($a.firstChild) {
        let $child = $a.firstChild;
        $docFrag.appendChild($child);
    }

    $g.replaceChild($docFrag, $a);

    $g.id = $g.id.replace(/^a_/, '');
  });

  forEachNode(svg, 'title', $el => $el.remove());

  var edgesSources = {};
  forEachNode(svg, '.edge', $edge => {
    let [from, to] = $edge.id.split(' => ');
    $edge.removeAttribute('id');
    $edge.setAttribute('data-from', from);
    $edge.setAttribute('data-to', to);
    edgesSources[from] = true;
  });

  forEachNode(svg, '[id]', $el => {
    let [tag, ...restOfId] = $el.id.split('::');
    if (_.size(restOfId) < 1)
      return;

    $el.classList.add(tag.toLowerCase().replace(/_/, '-'));
  });

  forEachNode(svg, 'g.edge path', $path => {
    let $newPath = $path.cloneNode() as HTMLElement;
    $newPath.classList.add('hover-path');
    $path.parentNode.appendChild($newPath);
  });

  forEachNode(svg, '.field', $field => {
    let texts = $field.querySelectorAll('text');
    texts[0].classList.add('field-name');
    //Remove spaces used for text alligment
    texts[1].remove();

    for (var i = 2; i < texts.length; ++i) {
      texts[i].classList.add('field-type');
      var str = texts[i].innerHTML;
      if (edgesSources[$field.id]) {
        $field.classList.add('edge-source');
        texts[i].classList.add('type-link');
      }
    }
  })

  forEachNode(svg, '.derived-type', $derivedType => {
    $derivedType.classList.add('edge-source');
    $derivedType.querySelector('text').classList.add('type-link');
  })

  forEachNode(svg, '.possible-type', $possibleType => {
    $possibleType.classList.add('edge-source');
    $possibleType.querySelector('text').classList.add('type-link');
  })

  wrapper.removeChild(svg);
  return svg;
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
  return elem.classList.contains('type-link');
}

function isEdgeSource(elem:Element):boolean {
  return getParent(elem, 'edge-source') != null;
}

function isControl(elem:Element) {
  if (!(elem instanceof SVGElement))
    return false;
  return elem.className.baseVal.startsWith('svg-pan-zoom');
}

function edgeSource(edge:Element) {
  return document.getElementById(edge['dataset']['from']);
}

function edgeTarget(edge:Element) {
  return document.getElementById(edge['dataset']['to']);
}

function edgeFrom(id:String) {
  return document.querySelector(`.edge[data-from='${id}']`);
}

function edgesTo(id:String) {
  return document.querySelectorAll(`.edge[data-to='${id}']`);
}
