import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import { Voyager } from '../src';
import { defaultPreset, PRESETS } from './presets';

const currentUrl = new URL(window.location.href);
const url = currentUrl.searchParams.get('url');
const withCredentials = currentUrl.searchParams.get('withCredentials');

const introspection =
  url != null
    ? async (introspectionQuery: string) => {
        const response = await fetch(url, {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query: introspectionQuery }),
          ...(withCredentials === 'true'
            ? { credentials: 'include', mode: 'cors' }
            : {}),
        });
        return response.json();
      }
    : defaultPreset;

const rootElement = document.getElementById('root');
const reactRoot = ReactDOMClient.createRoot(rootElement);
reactRoot.render(
  React.createElement(Voyager, {
    introspection,
    introspectionPresets: PRESETS,
    allowToChangeSchema: true,
    hideVoyagerLogo: false,
  }),
);
