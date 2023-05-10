import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import { Voyager, type VoyagerProps } from './index';

export function renderVoyager(rootElement: HTMLElement, props: VoyagerProps) {
  const reactRoot = ReactDOMClient.createRoot(rootElement);
  reactRoot.render(React.createElement(Voyager, props));
}

export * from './index';
