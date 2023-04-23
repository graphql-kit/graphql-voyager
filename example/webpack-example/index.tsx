import * as ReactDOMClient from 'react-dom/client';

import { Voyager, voyagerIntrospectionQuery } from 'graphql-voyager';

const introspection = fetch(
  'https://swapi-graphql.netlify.app/.netlify/functions/index',
  {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: voyagerIntrospectionQuery }),
    credentials: 'omit',
  },
).then((response) => response.json());

const reactRoot = ReactDOMClient.createRoot(document.getElementById('voyager'));
reactRoot.render(
  <Voyager
    introspection={introspection}
    displayOptions={{ skipRelay: false, showLeafFields: true }}
  />,
);
