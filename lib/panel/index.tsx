import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import PanelRoot from "./components/PanelRoot";
import { store } from "../redux";

export function initPanel(container: HTMLElement) {
  ReactDOM.render(
      <Provider store={ store }>
        <PanelRoot/>
      </Provider>,
      container
  );
}
