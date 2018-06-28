declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.css' {
  const content: any;
  export default content;
}

declare module '*.json' {
  const json: any;
  export default json;
}

interface Window {
  Worker: any;
}
