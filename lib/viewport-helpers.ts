export function appendHoverPaths(svg: SVGElement) {
  let $paths = svg.querySelectorAll('g.edge path');
  for (let i=0; i < $paths.length; i++) {
    let $path = $paths[i];
    let $newPath = $path.cloneNode() as HTMLElement;
    $newPath.classList.add('hover-path');
    $path.parentNode.appendChild($newPath);
  }
}

export function appendClickHighlightning(svg) {
  svg.addEventListener('click', event => {
    if (isNode(event.target) || isNode(event.target.parentNode) ) {
      selectNode(isNode(event.target) ? event.target : event.target.parentNode);
    } else {
      deselectNode();
    }
  });
}

function selectNode(node:HTMLElement) {
  node.classList.add('selected');
  //let type = node.id.split()
}

function deselectNode() {

}

function isNode(elem:HTMLElement) {
  return elem.classList.contains('node');
}
