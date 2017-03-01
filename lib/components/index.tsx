import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import Voyager from "./Voyager/Voyager";
import IntrospectionModal from './IntrospectionModal';
import { store } from "../redux";

export function initPanel(container: HTMLElement) {
  ReactDOM.render(
      <Provider store={ store }>
        <MuiThemeProvider>
          <div>
            <Voyager />
          </div>
        </MuiThemeProvider>
      </Provider>,
      container
  );
}
