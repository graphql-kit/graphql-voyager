export function stringToSvg(svgString: string): SVGElement {
  const svgDoc = new DOMParser().parseFromString(svgString, 'image/svg+xml');
  return document.importNode(svgDoc.documentElement, true) as any as SVGElement;
}
