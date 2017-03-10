/*
  According to WebWorker spec scriptURL argument is resolved
  relative to the entry script's base URL, when the method is invoked.
  Because graphql-voyager may be used as a lib and file with worker is located in
  the same folder as main script file we need resolve worker relatively to it.
*/

import * as path from 'path';
const origWorker = window.Worker;

function getPatchedWorker(relativeTo) {
  return function relativeWorker(scriptURL: string) {
    if (scriptURL.endsWith('voyager.worker.js')) {
      relativeTo = relativeTo.endsWith('/') ? relativeTo : relativeTo + '/';
      return new origWorker(relativeTo + scriptURL);
    } else {
      return new origWorker(scriptURL);
    }
  }
}

export function monkeyPatchWorker() {
  let relativeTo = getJsUrl();
  let baseDir = path.dirname(relativeTo);
  window.Worker = getPatchedWorker(baseDir);
}

/*
  get current script URL
*/
function getJsUrl() {
  var id = +new Date + Math.random();
  try {
    // write empty script to the document. It will get placed directly after the current script
  	document.write(`<script id="dummy${id}"><\/script>`);
    // find appended script and return src of the previous script which is the current script
  	return (document.getElementById('dummy' + id).previousSibling as HTMLScriptElement).src;
  } catch(e) {
    return '';
  }
}
