import * as svgPanZoom from 'svg-pan-zoom';

import { stringToSvg } from '../utils/';
import { typeNameToId } from '../introspection';

// FIXME: we are waiting for this [PR](https://github.com/ariutta/svg-pan-zoom/pull/379), after that this two interfaces might be removed in favor to `import { Instance, Point } from 'svg-pan-zoom'`
interface Point {
  x: number;
  y: number;
}

interface Instance {
  resize(): Instance;
  zoom(scale: number): void;
  getPan(): Point;
  getZoom(): number;
  pan(point: Point): Instance;
  destroy(): void;
}

export class Viewport {
  onSelectNode: (id: string) => void;
  onSelectEdge: (id: string) => void;

  $svg: SVGElement;
  zoomer: Instance;
  offsetLeft: number;
  offsetTop: number;
  maxZoom: number;

  constructor(
    svgString,
    public container: HTMLElement,
    onSelectNode,
    onSelectEdge,
  ) {
    this.onSelectNode = onSelectNode;
    this.onSelectEdge = onSelectEdge;

    this.container.innerHTML = '';
    this.$svg = stringToSvg(svgString);
    this.container.appendChild(this.$svg);

    // Allow the SVG dimensions to be computed
    // Quick fix for SVG manipulation issues.
    setTimeout(() => this.enableZoom(), 0);
    this.bindClick();
    this.bindHover();

    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    let bbRect = this.container.getBoundingClientRect();
    this.offsetLeft = bbRect.left;
    this.offsetTop = bbRect.top;
    if (this.zoomer !== undefined) {
      this.zoomer.resize();
    }
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
    this.$svg.addEventListener('mouseup', (event) => {
      this.$svg.removeEventListener('mousemove', moveHandler);
      if (dragged) return;

      var target = event.target as Element;
      if (isLink(target)) {
        const typeId = typeNameToId(target.textContent);
        this.focusElement(typeId);
      } else if (isNode(target)) {
        let $node = getParent(target, 'node');
        this.onSelectNode($node.id);
      } else if (isEdge(target)) {
        let $edge = getParent(target, 'edge');
        this.onSelectEdge(edgeSource($edge).id);
      } else if (!isControl(target)) {
        this.onSelectNode(null);
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

    this.$svg.addEventListener('mousemove', (event) => {
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
    this.removeClass('.node.selected', 'selected');
    this.removeClass('.highlighted', 'highlighted');
    this.removeClass('.selected-reachable', 'selected-reachable');

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

    edgesFromNode(node).forEach(($edge) => {
      $edge.classList.add('highlighted');
      edgeTarget($edge).classList.add('selected-reachable');
    });

    edgesTo(node.id).forEach(($edge) => {
      $edge.classList.add('highlighted');
      edgeSource($edge).parentElement.classList.add('selected-reachable');
    });
  }

  selectEdgeById(id: string) {
    this.removeClass('.edge.selected', 'selected');
    this.removeClass('.edge-source.selected', 'selected');
    this.removeClass('.field.selected', 'selected');

    if (id === null) return;

    var $selected = document.getElementById(id);
    if ($selected) {
      let $edge = edgeFrom($selected.id);
      if ($edge) $edge.classList.add('selected');
      $selected.classList.add('selected');
    }
  }

  removeClass(selector: string, className: string) {
    this.$svg
      .querySelectorAll(selector)
      .forEach((node) => node.classList.remove(className));
  }

  focusElement(id: string) {
    let bbBox = document.getElementById(id).getBoundingClientRect();
    let currentPan = this.zoomer.getPan();
    let viewPortSizes = (<any>this.zoomer).getSizes();

    currentPan.x += viewPortSizes.width / 2 - bbBox.width / 2;
    currentPan.y += viewPortSizes.height / 2 - bbBox.height / 2;

    let zoomUpdateToFit =
      1.2 *
      Math.max(
        bbBox.height / viewPortSizes.height,
        bbBox.width / viewPortSizes.width,
      );
    let newZoom = this.zoomer.getZoom() / zoomUpdateToFit;
    let recommendedZoom = this.maxZoom * 0.6;
    if (newZoom > recommendedZoom) newZoom = recommendedZoom;

    let newX = currentPan.x - bbBox.left + this.offsetLeft;
    let newY = currentPan.y - bbBox.top + this.offsetTop;
    this.animatePanAndZoom(newX, newY, newZoom);
  }

  animatePanAndZoom(x, y, zoomEnd) {
    let pan = this.zoomer.getPan();
    let panEnd = { x, y };
    animate(pan, panEnd, (props) => {
      this.zoomer.pan({ x: props.x, y: props.y });
      if (props === panEnd) {
        let zoom = this.zoomer.getZoom();
        animate({ zoom }, { zoom: zoomEnd }, (props) => {
          this.zoomer.zoom(props.zoom);
        });
      }
    });
  }

  destroy() {
    window.removeEventListener('resize', this.resize);
    try {
      this.zoomer.destroy();
    } catch (e) {
      // skip
    }
  }
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
  $node.querySelectorAll('.edge-source').forEach(($source) => {
    const $edge = edgeFrom($source.id);
    edges.push($edge);
  });
  return edges;
}

function edgesTo(id: String) {
  return document.querySelectorAll(`.edge[data-to='${id}']`);
}

function animate(startObj, endObj, render) {
  const defaultDuration = 350;
  const fps60 = 1000 / 60;
  const totalFrames = defaultDuration / fps60;
  const startTime = new Date().getTime();

  window.requestAnimationFrame(ticker);

  function ticker() {
    const timeElapsed = new Date().getTime() - startTime;
    const framesElapsed = timeElapsed / fps60;

    if (totalFrames - framesElapsed < 1) {
      render(endObj);
      return;
    }

    const t = framesElapsed / totalFrames;

    const frame = Object.fromEntries(
      Object.keys(startObj).map((key) => {
        const start = startObj[key];
        const end = endObj[key];

        return [key, start + t * (end - start)];
      }),
    );

    render(frame);

    window.requestAnimationFrame(ticker);
  }
}
