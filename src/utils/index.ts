export * from './dom-helpers';
export * from './highlight';

export function isMatch(sourceText: string, searchValue: string) {
  if (!searchValue) {
    return true;
  }

  try {
    const escaped = searchValue.replace(/[^_0-9A-Za-z]/g, (ch) => '\\' + ch);
    return sourceText.search(new RegExp(escaped, 'i')) !== -1;
  } catch (e) {
    return sourceText.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
  }
}

export function loadWorker(path: string, relative: boolean): Promise<Worker> {
  const url = relative ? relativeToJsUrlPathname(path) : path;
  return fetch(url)
    .then((response) => response.text())
    .then((payload) => {
      // HACK: to increase viz.js memory size from 16mb to 256mb
      // should use response.blob()
      payload = payload
        .replace('||16777216;', '||(16777216 * 16);')
        .replace('||5242880;', '||(5242880 * 16);');
      const script = new Blob([payload], { type: 'application/javascript' });
      const url = URL.createObjectURL(script);
      return new Worker(url);
    });
}

function relativeToJsUrlPathname(path: string): string {
  try {
    const url = new URL(
      path,
      (document.currentScript as HTMLScriptElement).src,
    );
    return url.pathname;
  } catch (e) {
    return path;
  }
}
