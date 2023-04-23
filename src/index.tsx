import * as ReactDOM from 'react-dom';

import { Voyager, VoyagerProps } from './components';
import { voyagerIntrospectionQuery } from './utils/introspection-query';

function init(element: HTMLElement, options: VoyagerProps) {
  ReactDOM.render(<Voyager {...options} />, element);
}

export { Voyager as GraphQLVoyager, init, Voyager, voyagerIntrospectionQuery };
