declare module '*.svg' {
  import React from 'react';
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module '*?raw' {
  const content: string;
  export default content;
}

declare module '*.css' {
  const content: any;
  export default content;
}
