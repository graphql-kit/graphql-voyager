// Dummy file to make tsc happy, real file is generated into 'worker-dist' folder
export const VizWorkerSource: string;
export const VizWorkerHash: string;

interface SerializedError {
  message: string;
  lineNumber?: number;
  fileName?: string;
  stack?: string;
}

interface RenderRequest {
  id: number;
  src: string;
}

interface RenderResponse {
  id: number;
  result: RenderResult;
}
type RenderResult = { error: SerializedError } | { value: string };
