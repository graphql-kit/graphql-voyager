import * as React from 'react';

import './DocPanel.css';

import DocExplorer from '../doc-explorer/DocExplorer';
import TypeInfoPopover from './TypeInfoPopover';

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
          <div className="powered-by">
            🛰 Powered by{' '}
            <a href="https://github.com/APIs-guru/graphql-voyager" target="_blank">
              GraphQL Voyager
            </a>
          </div>
        </div>
        <TypeInfoPopover />
      </div>
    );
  }
}
