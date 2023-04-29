import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import { Voyager } from '../src';

async function fetchPreset(name: string) {
  const response = await fetch(`./presets/${name}_introspection.json`);
  return response.json();
}

// FIXME: use await
// eslint-disable-next-line @typescript-eslint/no-floating-promises
Promise.all([
  fetchPreset('swapi'),
  fetchPreset('yelp'),
  fetchPreset('shopify'),
  fetchPreset('github'),
]).then((presetValues) => {
  const PRESETS = {
    'Star Wars': presetValues[0],
    Yelp: presetValues[1],
    'Shopify Storefront': presetValues[2],
    GitHub: presetValues[3],
  };

  const defaultPreset = PRESETS['Star Wars'];

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
});
