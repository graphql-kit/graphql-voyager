export function forEachNode(parent: Element, selector: string, fn) {
  let $nodes = parent.querySelectorAll(selector);
  for (let i = 0; i < $nodes.length; i++) {
    fn($nodes[i]);
  }
}

export function addClass(parent: Element, selector: string, className: string) {
  forEachNode(parent, selector, node => node.classList.add(className));
}

export function removeClass(parent: Element, selector: string, className: string) {
  forEachNode(parent, selector, node => node.classList.remove(className));
}

export function stringToSvg(svgString: string): SVGElement {
  var svgDoc = new DOMParser().parseFromString(svgString, 'image/svg+xml');
  return <SVGElement>(document.importNode(svgDoc.documentElement, true) as any);
}
