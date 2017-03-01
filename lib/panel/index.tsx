import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import Voyager from "./voyager/Voyager";
import IntrospectionModal from './components/IntrospectionModal';
import { store } from "../redux";

export function initPanel(container: HTMLElement) {
  ReactDOM.render(
      <Provider store={ store }>
        <MuiThemeProvider>
          <div>
            <Voyager />
            <IntrospectionModal/>
          </div>
        </MuiThemeProvider>
      </Provider>,
      container
  );
}
