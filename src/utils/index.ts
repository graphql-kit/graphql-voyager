import * as path from 'path';

// similar to node __dirname
export var __dirname;
export * from './dom-helpers';

export function getQueryParams(query = location.search) {
  if (!query) {
    return {};
  }

  return (/^[?#]/.test(query) ? query.slice(1) : query).split('&').reduce((params, param) => {
    let [key, value] = param.split('=');
    params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
    return params;
  }, {});
}

export function loadWorker(path: string, relative: boolean): Promise<Worker> {
  const url = relative ? __dirname + '/' + path : path;
  return fetch(url)
    .then(response => response.blob())
    .then(script => {
      var url = URL.createObjectURL(script);
      return new Worker(url);
    });
}

/*
  get current script URL
*/
function getJsUrl(): string {
  var id = +new Date() + Math.random();
  try {
    // write empty script to the document. It will get placed directly after the current script
    document.write(`<script id="dummy${id}"><\/script>`);
    // find appended script and return src of the previous script which is the current script
    return (document.getElementById('dummy' + id).previousSibling as HTMLScriptElement).src;
  } catch (e) {
    return '';
  }
}

__dirname = path.dirname(getJsUrl());
