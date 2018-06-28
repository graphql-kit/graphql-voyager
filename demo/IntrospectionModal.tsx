import * as React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Clipboard from 'react-clipboard.js';

import { introspectionQuery } from 'graphql/utilities';

import './IntrospectionModal.css';

export interface IntrospectionModalProps {
  onClose?: () => void;
  onChange?: (introspectin: any) => void;
}

export class IntrospectionModal extends React.Component<IntrospectionModalProps> {
  state = {
    activeTab: 0,
    recentlyCopied: false,
  };

  modalRef: React.RefObject<HTMLDivElement> = React.createRef();

  handleTabChange = (_, value) => {
    this.setState({
      activeTab: value,
    });
  };

  copy() {
    this.setState({ recentlyCopied: true });
    setTimeout(() => {
      this.setState({ recentlyCopied: false });
    }, 2000);
  }

  handleCancel = () => {
    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  public render() {
    const { activeTab, recentlyCopied } = this.state;
    return (
      <div className="modal-paper" tabIndex={-1} ref={this.modalRef}>
        <Tabs
          value={activeTab}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleTabChange}
        >
          <Tab label="SDL" />
          <Tab label="Introspection" />
        </Tabs>
        {activeTab === 0 && (
          <div className="tab-container">
            <textarea placeholder="Paste SDL Here" />
          </div>
        )}
        {activeTab === 1 && (
          <div className="tab-container">
            <div>
              Run the introspection query against a GraphQL endpoint. Paste the result into the
              textarea below to view the model relationships.
            </div>
            <Clipboard
              component="a"
              className="copy-button"
              options={{ container: this.modalRef.current }}
              data-clipboard-text={introspectionQuery}
              onClick={() => this.copy()}
            >
              <Button color="primary" size="small">
                {recentlyCopied ? 'Copied!' : 'Copy Introspection Query'}
              </Button>
            </Clipboard>
            <textarea placeholder="Paste Introspection Here" />
          </div>
        )}

        <div className="model-footer">
          <Button variant="raised" onClick={this.handleCancel}>
            Cancel
          </Button>
          <Button variant="raised" color="primary" disabled>
            Display
          </Button>
        </div>
      </div>
    );
  }
}
