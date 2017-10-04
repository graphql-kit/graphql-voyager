declare module '*.ejs' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.css' {
  const content: string;
  export default content;
}

declare module '*.json' {
  const json: any;
  export default json;
}

declare var DEBUG_INITIAL_PRESET: string;
declare var DEBUG: boolean;

interface Window {
  VOYAGER_PRESETS: any;
  Worker: any;
}
