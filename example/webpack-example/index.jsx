import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Voyager} from 'graphql-voyager';
import fetch from 'isomorphic-fetch';

const INTROSPECTION_URL = 'https://gist.githubusercontent.com/RomanGotsiy/0f472e61cc50b497ec48c24b3cb283f1/raw/a544b330f773dcdefeb16364451f7b469800dc5d/swapi-introspection.json';

class Test extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Voyager introspection={this.introspectionProvider} displayOptions={{skipRelay: false}}/>
    )
  }

  introspectionProvider(query) {
    return fetch(INTROSPECTION_URL, {
      method: 'get',
    }).then(response => response.json());
  }
}

ReactDOM.render(<Test/>, document.getElementById('voyager'));
