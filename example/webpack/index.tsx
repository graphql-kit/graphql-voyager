import { Voyager, voyagerIntrospectionQuery } from 'graphql-voyager';
import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';

const response = await fetch('https://swapi-graphql.netlify.app/graphql', {
  method: 'post',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ query: voyagerIntrospectionQuery }),
  credentials: 'omit',
});
const introspection = await response.json();

const reactRoot = ReactDOMClient.createRoot(
  document.getElementById('voyager')!,
);
reactRoot.render(
  <StrictMode>
    <Voyager
      introspection={introspection}
      displayOptions={{ skipRelay: false, showLeafFields: true }}
    />
  </StrictMode>,
);
