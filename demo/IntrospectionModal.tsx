import * as React from 'react';
import * as classNames from 'classnames';

import Modal from '@material-ui/core/Modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Clipboard from 'react-clipboard.js';

import { buildSchema, introspectionQuery, introspectionFromSchema } from 'graphql/utilities';
import { PRESETS, defaultPresetName } from './presets';

import './IntrospectionModal.css';

export interface IntrospectionModalProps {
  open: boolean;
  onClose: () => void;
  onChange: (introspection: any) => void;
}

const Presets = 'Presets';
const URL = 'URL';
const SDL = 'SDL';
const Introspection = 'Introspection';
const tabNames = [Presets, URL, SDL, Introspection];

const initialConfig = {
  inputType: Presets,
  activePreset: defaultPresetName,
  urlText: null,
  headers: null,
  sdlText: null,
  jsonText: null,
};

export class IntrospectionModal extends React.Component<IntrospectionModalProps> {
  state = {
    submitted: initialConfig,
    current: initialConfig,
    recentlyCopied: false,
  };

  modalRef: React.RefObject<HTMLDivElement> = React.createRef();

  changeCurrent(diff) {
    this.setState({
      current: {
        ...this.state.current,
        ...diff,
      },
    });
  }

  handleTabChange = (_, activeTab) => {
    this.changeCurrent({ inputType: tabNames[activeTab] });
  };

  copy() {
    this.setState({ recentlyCopied: true });
    setTimeout(() => {
      this.setState({ recentlyCopied: false });
    }, 2000);
  }

  handleCancel = () => {
    this.setState({ current: { ...this.state.submitted } })
    this.props.onClose();
  };

  fetchIntrospection = (url, headers) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...JSON.parse(headers),
      },
      body: JSON.stringify({ query: introspectionQuery }),
    }).then((response) => response.json());
  }

  handleSubmit = () => {
    const { inputType, activePreset, urlText, headers, jsonText, sdlText } = this.state.current;
    switch (inputType) {
      case Presets:
        this.props.onChange(PRESETS[activePreset]);
        break;
      case URL:
        this.fetchIntrospection(urlText, headers).then((data) => this.props.onChange(data));
        break;
      case Introspection:
        this.props.onChange(JSON.parse(jsonText));
        break;
      case SDL:
        const data = introspectionFromSchema(buildSchema(sdlText));
        this.props.onChange({ data });
        break;
    }

    this.setState({ submitted: { ...this.state.current } })
    this.props.onClose();
  };

  handlePresetChange = (activePreset) => {
    this.changeCurrent({ activePreset });
  }

  handleURLChange = (event) => {
    let urlText = event.target.value;
    if (urlText === '') urlText = null;
    this.changeCurrent({ urlText });
  }

  handleHeadersChange = (event) => {
    let headers = event.target.value;
    if (headers === '') headers = null;
    this.changeCurrent({ headers });
  }

  handleSDLChange = (event) => {
    let sdlText = event.target.value;
    if (sdlText === '') sdlText = null;
    this.changeCurrent({ sdlText });
  }

  handleIntrospectionChange = (event) => {
    let jsonText = event.target.value;
    if (jsonText === '') jsonText = null;
    this.changeCurrent({ jsonText });
  }

  public render() {
    const { open } = this.props;
    const { inputType } = this.state.current;

    return (
      <Modal open={open} onClose={this.handleCancel}>
        <div className="modal-paper" tabIndex={-1} ref={this.modalRef}>
          <Tabs
            value={tabNames.indexOf(inputType)}
            indicatorColor="primary"
            textColor="primary"
            onChange={this.handleTabChange}
          >
            <Tab label={Presets} />
            <Tab label={URL} />
            <Tab label={SDL} />
            <Tab label={Introspection} />
          </Tabs>
          <div className="tab-container">
            {inputType === Presets && this.renderPresetsTab()}
            {inputType === URL && this.renderURLTab()}
            {inputType === SDL && this.renderSDLTab()}
            {inputType === Introspection && this.renderIntrospectionTab()}
          </div>

          <div className="model-footer">
            <Button variant="contained" onClick={this.handleCancel}>
              Cancel
            </Button>
            <Button variant="contained" color="primary"  style={{color: 'white'}} onClick={this.handleSubmit}>
              Display
            </Button>
          </div>
        </div>
      </Modal>
    );
  }

  renderPresetsTab() {
    const presetNames = Object.keys(PRESETS);
    const { activePreset } = this.state.current;

    return (
      <div className="preset-cards">
        {presetNames.map(name => (
          <div
            key={name}
            className={classNames('preset-card', {
              '-active': name === activePreset,
            })}
            onClick={() => this.handlePresetChange(name)}
          >
            <h2>{name}</h2>
          </div>
        ))}
      </div>
    );
  }

  renderURLTab() {
    const { urlText, headers } = this.state.current;
    return (
      <>
        <textarea
          value={urlText || ''}
          placeholder="Paste URL here"
          onChange={this.handleURLChange}
        />
        <div>
          Paste headers (in JSON format) into the textarea below.
        </div>
        <textarea
          value={headers || ''}
          placeholder="Paste headers here"
          onChange={this.handleHeadersChange}
        />
      </>
    );
  }

  renderSDLTab() {
    const { sdlText } = this.state.current;
    return (
      <textarea
        value={sdlText || ''}
        placeholder="Paste SDL here"
        onChange={this.handleSDLChange}
      />
    );
  }

  renderIntrospectionTab() {
    const { recentlyCopied } = this.state;
    const { jsonText } = this.state.current;
    return (
      <>
        <div>
          Run the introspection query against a GraphQL endpoint. Paste the result into the textarea
          below to view the model relationships.
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
          value={jsonText || ''}
          placeholder="Paste Introspection (JSON) here"
          onChange={this.handleIntrospectionChange}
        />
      </>
    );
  }
}
