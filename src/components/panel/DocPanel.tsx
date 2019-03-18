import * as React from 'react';

import './DocPanel.css';

import DocExplorer from '../doc-explorer/DocExplorer';
import TypeInfoPopover from './TypeInfoPopover';
import PoweredBy from '../utils/PoweredBy';

export interface DocPanelProps {
  header: React.ReactNode;
}

export default class DocPanel extends React.Component<DocPanelProps> {
  render() {
    return (
      <div className="doc-panel">
        <div className="contents">
          {this.props.header}
          <DocExplorer />
          <PoweredBy />
        </div>
        <TypeInfoPopover />
      </div>
    );
  }
}
