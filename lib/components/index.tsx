import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Voyager from './Voyager';
import IntrospectionModal from './settings/IntrospectionModal';
import { store } from '../redux';

export function init(container: HTMLElement) {
  ReactDOM.render(
    <div>
      <Voyager />
      <Provider store={ store }>
          <MuiThemeProvider>
          <IntrospectionModal />
        </MuiThemeProvider>
      </Provider>
    </div>,
    container
  );
}

export { Voyager };
