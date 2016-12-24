import * as React from "react";
import * as ReactDOM from "react-dom";

import { PanelRoot } from "./components/PanelRoot";

export function initPanel(container: HTMLElement) {
  ReactDOM.render(
      <PanelRoot/>,
      container
  );

}
