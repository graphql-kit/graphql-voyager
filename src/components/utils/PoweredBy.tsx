import * as React from 'react';

import './PoweredBy.css';

export default class PoweredBy extends React.Component {
  render() {
    return (
      <div className="powered-by">
        🛰 Powered by{' '}
        <a
          href="https://github.com/IvanGoncharov/graphql-voyager"
          target="_blank"
        >
          GraphQL Voyager
        </a>
      </div>
    );
  }
}
