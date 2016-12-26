import * as _ from 'lodash';
import * as Viz from 'viz.js';
import * as svgPanZoom from 'svg-pan-zoom';
import * as animate from '@f/animate';

import {
  TypeGraph,
  cleanTypeName
} from './type-graph';
import { getSchema } from '../introspection/';

const xmlns = "http://www.w3.org/2000/svg";

import {
  removeClass,
  forEachNode
} from '../utils/';


export class Viewport {
  $svg: SVGElement;
  renderer: TypeGraph;
  schema: any;
  zoomer: SvgPanZoom.Instance;

  constructor(public container: HTMLElement) {
  }

  load(introspection:any) {
    this.schema = getSchema(introspection);
  }

  render(options:any) {
    this.clear();
    this.renderer = new TypeGraph(this.schema, options);
    let svgString = Viz(this.renderer.getDot());
    this.$svg = preprocessVizSvg(svgString, this.renderer);
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
      if (isLink(event.target as Element)) {
        this.panAndZoomToLink(event.target as Element);
      } else if (isNode(event.target as Element)) {
        this.$svg.classList.add('selection-active');
        this.selectNode(getParent(event.target as Element, 'node'));
      } else if (isEdge(event.target as Element)) {
        this.$svg.classList.remove('selection-active');
        this.selectEdge(getParent(event.target as Element, 'edge'));
      } else {
        if (isControl(event.target as SVGElement)) return;
        this.$svg.classList.remove('selection-active');
        this.deselectAll();
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
        let edgeId = this.renderer.getEdgeBySourceId($sourceGroup.id).id;
        let $edge = document.getElementById(edgeId);
        $edge.classList.add('hovered');
        $prevHoveredEdge = $edge;
      } else {
        clearSelection();
      }
    });
  }

  selectNode(node:Element) {
    this.deselectAll();
    node.classList.add('selected');
    let inEdges = this.renderer.getInEdges(node.id);
    let outEdges = this.renderer.getOutEdges(node.id);

    let allEdges = _.union(inEdges, outEdges);

    _.each(allEdges, edge => {
      let $edge = document.getElementById(edge.id);
      $edge.classList.add('selected');
      let $node = document.getElementById(edge.nodeId);
      $node.classList.add('selected-reachable');
    });
  }

  selectEdge(edge:Element) {
    this.deselectAll();
    edge.classList.add('selected');
  }

  deselectAll() {
    let viewport = document.getElementById('viewport');
    removeClass(this.$svg, '.selected', 'selected');
    removeClass(this.$svg, '.selected-reachable', 'selected-reachable');
  }

  panAndZoomToLink(link: Element) {
    //FIXME:
    let typeName = cleanTypeName(link.textContent);
    let nodeId = 'TYPE::' + typeName;

    let bbBox = document.getElementById(nodeId).getBoundingClientRect();
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

export function preprocessVizSvg(svgString:string, graph:TypeGraph) {
  var wrapper = document.createElement('div');
  wrapper.innerHTML = svgString;
  var svg = <SVGElement>wrapper.firstElementChild;

  forEachNode(svg, 'a', $a => {
    let $g = $a.parentNode;

    var $docFrag = document.createDocumentFragment();
    while ($a.firstChild) {
        let $child = $a.removeChild($a.firstChild);
        $docFrag.appendChild($child);
    }

    $g.replaceChild($docFrag, $a);

    $g.id = $g.id.replace(/^a_/, '');
  });

  forEachNode(svg, 'title', $el => $el.remove());

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
    texts[1].remove();
    texts[2].classList.add('field-type');

    let type = graph.getFieldTypeById($field.id);
    if (graph.isDisplayedType(type.name)) {
      $field.classList.add('edge-source');
      $field.querySelector('.field-type').classList.add('type-link');
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

function isControl(elem:SVGElement) {
  return elem.className.baseVal.startsWith('svg-pan-zoom');
}
