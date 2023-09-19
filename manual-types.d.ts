declare module '*.svg' {
  import React from 'react';
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module '*.css' {
  const content: any;
  export default content;
}

declare module '*.json' {
  const json: any;
  export default json;
}
