import * as _ from 'lodash';
import * as svgPanZoom from 'svg-pan-zoom';
import * as animate from '@f/animate';

import * as Actions from '../actions';
import { observeStore } from '../redux';

import { removeClass, forEachNode, stringToSvg } from '../utils/';

import { typeNameToId } from '../introspection';

const RelayIconSvg = require('!!svg-as-symbol-loader?id=RelayIcon!../components/icons/relay-icon.svg');
const svgns = 'http://www.w3.org/2000/svg';
const xlinkns = 'http://www.w3.org/1999/xlink';

export class Viewport {
  $svg: SVGElement;
  zoomer: SvgPanZoom.Instance;
  offsetLeft: number;
  offsetTop: number;
  maxZoom: number;

  _unsubscribe: any;

  constructor(public store, public container: HTMLElement) {
    let unsubscribe = [];

    function subscribe(...args) {
      unsubscribe.push(observeStore(store, ...args));
    }

    this._unsubscribe = observeStore(
      store,
      state => state.currentSvgIndex,
      svgIdx => {
        unsubscribe.forEach(f => f());
        unsubscribe = [];

        if (svgIdx === null) return;

        let cachedSvg = store.getState().svgCache[svgIdx];
        this.display(cachedSvg.svg);

        subscribe(state => state.selected.currentNodeId, id => this.selectNodeById(id));
        subscribe(state => state.selected.currentEdgeId, id => this.selectEdgeById(id));
        subscribe(
          state => state.graphView.focusedId,
          id => {
            if (id === null) return;

            this.focusElement(id);
            store.dispatch(Actions.focusElementDone(id));
          },
        );
      },
    );

    window.addEventListener('resize', this.resize);

    this.resize();
  }

  resize = () => {
    let bbRect = this.container.getBoundingClientRect();
    this.offsetLeft = bbRect.left;
    this.offsetTop = bbRect.top;
    if (this.zoomer !== undefined) {
      this.zoomer.resize();
    }
  };

  display(svgString) {
    this.clear();
    this.$svg = preprocessVizSvg(svgString);
    this.container.appendChild(this.$svg);
    // run on the next tick
    setTimeout(() => {
      this.enableZoom();
      this.bindClick();
      this.bindHover();
    }, 0);
  }

  clear() {
    try {
      this.zoomer && this.zoomer.destroy();
    } catch (e) {
      // skip
    }
    this.container.innerHTML = '';
  }

  enableZoom() {
    const svgHeight = this.$svg['height'].baseVal.value;
    const svgWidth = this.$svg['width'].baseVal.value;
    const bbRect = this.container.getBoundingClientRect();
    this.maxZoom = Math.max(svgHeight / bbRect.height, svgWidth / bbRect.width);

    this.zoomer = svgPanZoom(this.$svg, {
      zoomScaleSensitivity: 0.25,
      minZoom: 0.95,
      maxZoom: this.maxZoom,
      controlIconsEnabled: true,
    });
    this.zoomer.zoom(0.95);
  }

  bindClick() {
    let dragged = false;

    let moveHandler = () => (dragged = true);
    this.$svg.addEventListener('mousedown', () => {
      dragged = false;
      setTimeout(() => this.$svg.addEventListener('mousemove', moveHandler));
    });
    this.$svg.addEventListener('mouseup', event => {
      this.$svg.removeEventListener('mousemove', moveHandler);
      if (dragged) return;

      var target = event.target as Element;
      if (isLink(target)) {
        const typeId = typeNameToId(target.textContent);
        this.store.dispatch(Actions.focusElement(typeId));
      } else if (isNode(target)) {
        let $node = getParent(target, 'node');
        this.store.dispatch(Actions.selectNode($node.id));
      } else if (isEdge(target)) {
        let $edge = getParent(target, 'edge');
        this.store.dispatch(Actions.selectEdge(edgeSource($edge).id));
      } else if (!isControl(target)) {
        this.store.dispatch(Actions.clearSelection());
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

  selectNodeById(id: string) {
    this.deselectNode();

    if (id === null) {
      this.$svg.classList.remove('selection-active');
      return;
    }

    this.$svg.classList.add('selection-active');
    var $selected = document.getElementById(id);
    this.selectNode($selected);
  }

  selectNode(node: Element) {
    node.classList.add('selected');

    _.each(edgesFromNode(node), $edge => {
      $edge.classList.add('highlighted');
      edgeTarget($edge).classList.add('selected-reachable');
    });

    _.each(edgesTo(node.id), $edge => {
      $edge.classList.add('highlighted');
      edgeSource($edge).parentElement.classList.add('selected-reachable');
    });
  }

  selectEdgeById(id: string) {
    removeClass(this.$svg, '.edge.selected', 'selected');
    removeClass(this.$svg, '.edge-source.selected', 'selected');
    removeClass(this.$svg, '.field.selected', 'selected');

    if (id === null) return;

    var $selected = document.getElementById(id);
    if ($selected) {
      let $edge = edgeFrom($selected.id);
      if ($edge) $edge.classList.add('selected');
      $selected.classList.add('selected');
    }
  }

  deselectNode() {
    removeClass(this.$svg, '.node.selected', 'selected');
    removeClass(this.$svg, '.highlighted', 'highlighted');
    removeClass(this.$svg, '.selected-reachable', 'selected-reachable');
  }

  focusElement(id: string) {
    let bbBox = document.getElementById(id).getBoundingClientRect();
    let currentPan = this.zoomer.getPan();
    let viewPortSizes = (<any>this.zoomer).getSizes();

    currentPan.x += viewPortSizes.width / 2 - bbBox.width / 2;
    currentPan.y += viewPortSizes.height / 2 - bbBox.height / 2;

    let zoomUpdateToFit =
      1.2 * Math.max(bbBox.height / viewPortSizes.height, bbBox.width / viewPortSizes.width);
    let newZoom = this.zoomer.getZoom() / zoomUpdateToFit;
    let recomendedZoom = this.maxZoom * 0.6;
    if (newZoom > recomendedZoom) newZoom = recomendedZoom;

    let newX = currentPan.x - bbBox.left + this.offsetLeft;
    let newY = currentPan.y - bbBox.top + this.offsetTop;
    this.animatePanAndZoom(newX, newY, newZoom);
  }

  animatePanAndZoom(x, y, zoomEnd) {
    let pan = this.zoomer.getPan();
    let panEnd = { x, y };
    animate(pan, panEnd, props => {
      this.zoomer.pan({ x: props.x, y: props.y });
      if (props === panEnd) {
        let zoom = this.zoomer.getZoom();
        animate({ zoom }, { zoom: zoomEnd }, props => {
          this.zoomer.zoom(props.zoom);
        });
      }
    });
  }

  destroy() {
    this._unsubscribe();
    window.removeEventListener('resize', this.resize);
    try {
      this.zoomer.destroy();
    } catch (e) {
      // skip
    }
  }
}

export function preprocessVizSvg(svgString: string) {
  //Add Relay Icon
  svgString = svgString.replace(/<svg [^>]*>/, '$&' + RelayIconSvg);

  let svg = stringToSvg(svgString);

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
    if (_.size(restOfId) < 1) return;

    $el.classList.add(tag.toLowerCase().replace(/_/, '-'));
  });

  forEachNode(svg, 'g.edge path', $path => {
    let $newPath = $path.cloneNode() as HTMLElement;
    $newPath.classList.add('hover-path');
    $newPath.removeAttribute('stroke-dasharray');
    $path.parentNode.appendChild($newPath);
  });

  forEachNode(svg, '.field', $field => {
    let texts = $field.querySelectorAll('text');
    texts[0].classList.add('field-name');
    //Remove spaces used for text alligment
    texts[1].remove();

    if (edgesSources[$field.id]) $field.classList.add('edge-source');

    for (var i = 2; i < texts.length; ++i) {
      var str = texts[i].innerHTML;
      if (str === '{R}') {
        const $iconPlaceholder = texts[i];
        const height = 22;
        const width = 22;
        const $useRelayIcon = document.createElementNS(svgns, 'use');
        $useRelayIcon.setAttributeNS(xlinkns, 'href', '#RelayIcon');
        $useRelayIcon.setAttribute('width', `${width}px`);
        $useRelayIcon.setAttribute('height', `${height}px`);

        //FIXME: remove hardcoded offset
        const y = parseInt($iconPlaceholder.getAttribute('y')) - 15;
        $useRelayIcon.setAttribute('x', $iconPlaceholder.getAttribute('x'));
        $useRelayIcon.setAttribute('y', y.toString());
        $field.replaceChild($useRelayIcon, $iconPlaceholder);
        continue;
      }

      texts[i].classList.add('field-type');
      if (edgesSources[$field.id] && !/[\[\]\!]/.test(str)) texts[i].classList.add('type-link');
    }
  });

  forEachNode(svg, '.derived-type', $derivedType => {
    $derivedType.classList.add('edge-source');
    $derivedType.querySelector('text').classList.add('type-link');
  });

  forEachNode(svg, '.possible-type', $possibleType => {
    $possibleType.classList.add('edge-source');
    $possibleType.querySelector('text').classList.add('type-link');
  });

  return svg;
}

function getParent(elem: Element, className: string): Element | null {
  while (elem && elem.tagName !== 'svg') {
    if (elem.classList.contains(className)) return elem;
    elem = elem.parentNode as Element;
  }
  return null;
}

function isNode(elem: Element): boolean {
  return getParent(elem, 'node') != null;
}

function isEdge(elem: Element): boolean {
  return getParent(elem, 'edge') != null;
}

function isLink(elem: Element): boolean {
  return elem.classList.contains('type-link');
}

function isEdgeSource(elem: Element): boolean {
  return getParent(elem, 'edge-source') != null;
}

function isControl(elem: Element) {
  if (!(elem instanceof SVGElement)) return false;
  return elem.className.baseVal.startsWith('svg-pan-zoom');
}

function edgeSource(edge: Element) {
  return document.getElementById(edge['dataset']['from']);
}

function edgeTarget(edge: Element) {
  return document.getElementById(edge['dataset']['to']);
}

function edgeFrom(id: String) {
  return document.querySelector(`.edge[data-from='${id}']`);
}

function edgesFromNode($node) {
  var edges = [];
  forEachNode($node, '.edge-source', $source => {
    const $edge = edgeFrom($source.id);
    edges.push($edge);
  });
  return edges;
}

function edgesTo(id: String) {
  return _.toArray(document.querySelectorAll(`.edge[data-to='${id}']`));
}
