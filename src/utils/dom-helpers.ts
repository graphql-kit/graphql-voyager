export function stringToSvg(svgString: string): SVGSVGElement {
  const svgDoc = new DOMParser().parseFromString(svgString, 'image/svg+xml');
  // @ts-expect-error not sure how to properly type it
  return document.importNode(svgDoc.documentElement, true);
}
