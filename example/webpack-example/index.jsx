import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import { Voyager } from 'graphql-voyager';

class Test extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Voyager
        introspection={this.introspectionProvider}
        displayOptions={{ skipRelay: false, showLeafFields: true }}
      />
    );
  }

  async introspectionProvider(query) {
    const response = await fetch('https://swapi-graphql.netlify.app/.netlify/functions/index', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
      credentials: 'omit',
    });
    return response.json();
  }
}

const reactRoot = ReactDOMClient.createRoot(document.getElementById('voyager'));
reactRoot.render(<Test />);
