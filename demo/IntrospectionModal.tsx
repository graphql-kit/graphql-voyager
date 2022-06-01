import * as React from 'react';

import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';

import {
  buildSchema,
  getIntrospectionQuery,
  introspectionFromSchema,
} from 'graphql/utilities';
import { PRESETS, defaultPresetName } from './presets';

import './IntrospectionModal.css';

export interface IntrospectionModalProps {
  open: boolean;
  onClose: () => void;
  onChange: (introspectin: any) => void;
}

const Presets = 'Presets';
const SDL = 'SDL';
const Introspection = 'Introspection';
const tabNames = [Presets, SDL, Introspection];

const initialConfig = {
  inputType: Presets,
  activePreset: defaultPresetName,
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

  async copyIntrospectionQuery() {
    await navigator.clipboard.writeText(getIntrospectionQuery());
    this.setState({ recentlyCopied: true });
    setTimeout(() => {
      this.setState({ recentlyCopied: false });
    }, 2000);
  }

  handleCancel = () => {
    this.setState({ current: { ...this.state.submitted } });
    this.props.onClose();
  };

  handleSubmit = () => {
    const { inputType, activePreset, jsonText, sdlText } = this.state.current;
    switch (inputType) {
      case Presets:
        this.props.onChange(PRESETS[activePreset]);
        break;
      case Introspection:
        this.props.onChange(JSON.parse(jsonText));
        break;
      case SDL:
        const data = introspectionFromSchema(buildSchema(sdlText));
        this.props.onChange({ data });
        break;
    }

    this.setState({ submitted: { ...this.state.current } });
    this.props.onClose();
  };

  handlePresetChange = (activePreset) => {
    this.changeCurrent({ activePreset });
  };

  handleSDLChange = (event) => {
    let sdlText = event.target.value;
    if (sdlText === '') sdlText = null;
    this.changeCurrent({ sdlText });
  };

  handleJSONChange = (event) => {
    let jsonText = event.target.value;
    if (jsonText === '') jsonText = null;
    this.changeCurrent({ jsonText });
  };

  public render() {
    const { open } = this.props;
    const { inputType } = this.state.current;

    return (
      <Modal open={open} onClose={this.handleCancel}>
        <div className="modal-paper" tabIndex={-1} ref={this.modalRef}>
          <Tabs
            variant="fullWidth"
            value={tabNames.indexOf(inputType)}
            indicatorColor="primary"
            textColor="primary"
            onChange={this.handleTabChange}
          >
            <Tab label={Presets} />
            <Tab label={SDL} />
            <Tab label={Introspection} />
          </Tabs>
          <div className="tab-container">
            {inputType === Presets && this.renderPresetsTab()}
            {inputType === SDL && this.renderSDLTab()}
            {inputType === Introspection && this.renderIntrospectionTab()}
          </div>

          <div className="model-footer">
            <Button
              variant="contained"
              style={{ background: '#eeeeee' }}
              onClick={this.handleCancel}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              style={{ color: 'white' }}
              onClick={this.handleSubmit}
            >
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
        {presetNames.map((name) => (
          <div
            key={name}
            className={`preset-card ${name === activePreset ? '-active' : ''}`}
            onClick={() => this.handlePresetChange(name)}
          >
            <h2>{name}</h2>
          </div>
        ))}
      </div>
    );
  }

  renderSDLTab() {
    const { sdlText } = this.state.current;
    return (
      <textarea
        value={sdlText || ''}
        placeholder="Paste SDL Here"
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
          Run the introspection query against a GraphQL endpoint. Paste the
          result into the textarea below to view the model relationships.
        </div>
        <Grid container justifyContent="center">
          <Button
            color="primary"
            size="small"
            onClick={async () => this.copyIntrospectionQuery()}
          >
            {recentlyCopied ? 'Copied!' : 'Copy Introspection Query'}
          </Button>
        </Grid>
        <textarea
          value={jsonText || ''}
          placeholder="Paste Introspection Here"
          onChange={this.handleJSONChange}
        />
      </>
    );
  }
}
