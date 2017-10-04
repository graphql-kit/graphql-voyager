import * as React from 'react';

import './DocPanel.css';

import TitleArea from './TitleArea';
import TypeDoc from '../doc-explorer/TypeDoc';
import TypeInfoPopover from './TypeInfoPopover';

interface DocPanelProps {
  _showChangeButton?: boolean;
}
export default class DocPanel extends React.Component<DocPanelProps> {
  render() {
    let { _showChangeButton } = this.props;

    return (
      <div className="doc-panel">
        <div className="contents">
          <TitleArea _showChangeButton={_showChangeButton} />
          <TypeDoc />
        </div>
        <TypeInfoPopover />
      </div>
    );
  }
}
