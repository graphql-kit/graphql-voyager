import * as ReactDOMClient from 'react-dom/client';

import { GraphQLVoyager } from '../src';
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

const reactRoot = ReactDOMClient.createRoot(document.getElementById('root'));
reactRoot.render(
  <GraphQLVoyager
    introspection={introspection}
    introspectionPresets={PRESETS}
    allowToChangeSchema={true}
    hideVoyagerLogo={false}
  />,
);
