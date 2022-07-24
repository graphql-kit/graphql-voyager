export function stringToSvg(svgString: string): SVGElement {
  var svgDoc = new DOMParser().parseFromString(svgString, 'image/svg+xml');
  return <SVGElement>(document.importNode(svgDoc.documentElement, true) as any);
}
