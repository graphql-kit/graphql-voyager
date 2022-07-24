export function stringToSvg(svgString: string): SVGElement {
  const svgDoc = new DOMParser().parseFromString(svgString, 'image/svg+xml');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <SVGElement>(document.importNode(svgDoc.documentElement, true) as any);
}
