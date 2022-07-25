export function stringToSvg(svgString: string): SVGElement {
  const svgDoc = new DOMParser().parseFromString(svgString, 'image/svg+xml');
  return <SVGElement>(document.importNode(svgDoc.documentElement, true) as any);
}
