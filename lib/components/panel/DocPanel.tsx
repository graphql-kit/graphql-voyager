import * as React from "react";

import './DocPanel.css';

import TitleArea from './TitleArea';
import TypeDoc from '../doc-explorer/TypeDoc';
import TypeInfoPopover from './TypeInfoPopover';

export default class DocPanel extends React.Component<void, void> {

  render() {
    return (
      <div className="doc-panel">
        <div className="contents">
          <TitleArea/>
          <TypeDoc/>
        </div>
        <TypeInfoPopover/>
      </div>
    )
  }
}
