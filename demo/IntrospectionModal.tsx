import * as React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Clipboard from 'react-clipboard.js';

import {
  buildSchema,
  introspectionQuery,
  introspectionFromSchema,
} from 'graphql/utilities';

import './IntrospectionModal.css';

export interface IntrospectionModalProps {
  onClose: () => void;
  onChange: (introspectin: any) => void;
}

const SDL = 'SDL';
const Introspection = 'Introspection';
const tabNames = [SDL, Introspection];

export class IntrospectionModal extends React.Component<IntrospectionModalProps> {
  state = {
    inputType: SDL,
    recentlyCopied: false,
    sdlText: null,
    jsonText: null,
  };

  modalRef: React.RefObject<HTMLDivElement> = React.createRef();

  handleTabChange = (_, activeTab) => {
    this.setState({
      inputType: tabNames[activeTab],
    });
  };

  copy() {
    this.setState({ recentlyCopied: true });
    setTimeout(() => {
      this.setState({ recentlyCopied: false });
    }, 2000);
  }

  handleCancel = () => {
    this.props.onClose();
  };

  handleSubmit = () => {
    const { inputType, jsonText, sdlText } = this.state;
    switch (inputType) {
      case Introspection:
        this.props.onChange(JSON.parse(jsonText));
        break;
      case SDL:
        const data = introspectionFromSchema(buildSchema(sdlText));
        this.props.onChange({ data });
        break;
    }
  };

  handleSDLChange(event) {
    let sdlText = event.target.value;
    if (sdlText === '') sdlText = null;
    this.setState({ sdlText });
  }

  handleJSONChange(event) {
    let jsonText = event.target.value;
    if (jsonText === '') jsonText = null;
    this.setState({ jsonText });
  }

  public render() {
    const { inputType } = this.state;
    return (
      <div className="modal-paper" tabIndex={-1} ref={this.modalRef}>
        <Tabs
          value={tabNames.indexOf(inputType)}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleTabChange}
        >
          <Tab label={SDL} />
          <Tab label={Introspection} />
        </Tabs>
        <div className="tab-container">
          { inputType === SDL && this.renderSDLTab() }
          { inputType === Introspection && this.renderIntrospectionTab() }
        </div>

        <div className="model-footer">
          <Button variant="raised" onClick={this.handleCancel}>
            Cancel
          </Button>
          <Button variant="raised" color="primary" onClick={this.handleSubmit}>
            Display
          </Button>
        </div>
      </div>
    );
  }

  renderSDLTab() {
    const { sdlText } = this.state;
    console.log(sdlText);
    return <textarea
      value={ sdlText || ''}
      placeholder="Paste SDL Here"
      onChange={this.handleSDLChange.bind(this)}
    />
  }

  renderIntrospectionTab() {
    const { jsonText, recentlyCopied } = this.state;
    return (<>
      <div>
        Run the introspection query against a GraphQL endpoint.
        Paste the result into the textarea below to view the model relationships.
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
      <textarea
        value={ jsonText || ''}
        placeholder="Paste Introspection Here"
        onChange={this.handleJSONChange.bind(this)}
      />
    </>);
  }
}
