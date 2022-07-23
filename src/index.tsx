import * as ReactDOM from 'react-dom';
import { Voyager, VoyagerProps } from './components';

function init(element: HTMLElement, options: VoyagerProps) {
  ReactDOM.render(<Voyager {...options} />, element);
}

export { Voyager as GraphQLVoyager, Voyager, init };
