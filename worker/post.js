/* global Module */
function onmessageCallBack(event) {
  const { id, src } = event.data;

  try {
    const result = Module['vizRenderFromString'](src);

    const errorMessageString = Module['vizLastErrorMessage']();

    if (errorMessageString !== '') {
      throw new Error(errorMessageString);
    }

    postMessage({ id, result });
  } catch (e) {
    const error =
      e instanceof Error
        ? {
            message: e.message,
            fileName: e.fileName,
            lineNumber: e.lineNumber,
            stack: e.stack,
          }
        : { message: e.toString() };

    postMessage({ id, error });
  }
}

addEventListener('message', onmessageCallBack);
