export function addClass(parent: Element, selector: string, className: string) {
  parent
    .querySelectorAll(selector)
    .forEach((node) => node.classList.add(className));
}

export function removeClass(
  parent: Element,
  selector: string,
  className: string,
) {
  parent
    .querySelectorAll(selector)
    .forEach((node) => node.classList.remove(className));
}

export function stringToSvg(svgString: string): SVGElement {
  var svgDoc = new DOMParser().parseFromString(svgString, 'image/svg+xml');
  return <SVGElement>(document.importNode(svgDoc.documentElement, true) as any);
}
