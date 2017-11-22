import * as _ from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';
import * as ReactModal from 'react-modal';
import * as classNames from 'classnames';

import './SchemaModal.css';
import * as buttonDarkTheme from './button-dark.theme.css';
import * as settingsDarkTheme from './settings-dark.theme.css';

import { Button, IconButton } from 'react-toolbox/lib/button';
import CloseIcon from '../icons/close-black.svg';
import { StateInterface } from '../../reducers';

import ClipboardButton from 'react-clipboard.js';

import { introspectionQuery } from 'graphql/utilities';
import { request } from 'graphql-request';

import {
  changeSchema,
  hideSchemaModal,
  showSchemaModal,
  changeActivePreset,
  changeNaActivePreset,
  changeNaDisplayOptions,
  reportError,
} from '../../actions/';
import { Settings } from './Settings';
import { getNaSchemaSelector } from '../../introspection';
import { getQueryParams } from '../../utils/';

interface SchemaModalProps {
  presets?: any;

  showSchemaModal: boolean;
  notApplied: any;
  schema: any;
  dispatch: any;
}

interface SchemaModalState {
  recentlyCopied: boolean;
}

function mapStateToProps(state: StateInterface) {
  return {
    showSchemaModal: state.schemaModal.opened,
    notApplied: state.schemaModal.notApplied,
    schema: getNaSchemaSelector(state),
  };
}

class SchemaModal extends React.Component<SchemaModalProps, SchemaModalState> {
  constructor(props) {
    super(props);
    this.state = { recentlyCopied: false };
  }

  componentDidMount() {
    this.props.dispatch(showSchemaModal());
    let url = getQueryParams()['url'];
    if (url) {
      this.props.dispatch(hideSchemaModal());
      request(url, introspectionQuery)
        .then(introspection => this.props.dispatch(changeSchema({ data: introspection })))
        .catch(err => {
          this.props.dispatch(
            reportError(err.response.data || `Error loading: ${err.response.status}`),
          );
        });
    } else if (DEBUG_INITIAL_PRESET) {
      this.props.dispatch(hideSchemaModal());
      this.props.dispatch(changeActivePreset(DEBUG_INITIAL_PRESET));
      this.props.dispatch(changeSchema(this.props.presets[DEBUG_INITIAL_PRESET]));
    }
  }

  handleTextChange(event) {
    let text = event.target.value;
    if (text === '') text = null;
    this.props.dispatch(changeNaActivePreset('custom', text));
  }

  handlePresetChange(name) {
    this.props.dispatch(changeNaActivePreset(name, this.props.presets[name]));
  }

  handleDisplayOptionsChange(options) {
    this.props.dispatch(changeNaDisplayOptions(options));
  }

  handleChange() {
    const { notApplied: { activePreset, displayOptions, presetValue } } = this.props;

    let schema = activePreset === 'custom' ? JSON.parse(presetValue) : presetValue;
    this.props.dispatch(changeActivePreset(activePreset));
    this.props.dispatch(changeSchema(schema, displayOptions));
    this.props.dispatch(hideSchemaModal());
  }

  close() {
    this.props.dispatch(hideSchemaModal());
  }

  copy() {
    this.setState({ ...this.state, recentlyCopied: true });
    setTimeout(() => {
      this.setState({ ...this.state, recentlyCopied: false });
    }, 2000);
  }

  appBar() {
    return (
      <IconButton className="close-icon" onClick={() => this.close()}>
        <CloseIcon color="#ffffff" />
      </IconButton>
    );
  }

  predefinedCards(presetNames: string[], activePreset) {
    return (
      <div className="schema-presets">
        {_(presetNames)
          .without('custom')
          .map(name => (
            <div
              key={name}
              className={classNames('introspection-card', {
                '-active': name === activePreset,
              })}
              onClick={() => {
                if (name !== activePreset) this.handlePresetChange(name);
              }}
            >
              <h2> {name} </h2>
            </div>
          ))
          .value()}
      </div>
    );
  }

  customCard(isActive: boolean, customPresetText: string) {
    return (
      <div className="custom-schema-selector">
        <div
          className={classNames('introspection-card', {
            '-active': isActive,
          })}
          onClick={() => isActive || this.handlePresetChange('custom')}
        >
          <div className="card-header">
            <h2> Custom Schema </h2>
          </div>
          <div className="card-content">
            <p>
              {' '}
              Run the introspection query against a GraphQL endpoint. Paste the result into the
              textarea below to view the model relationships.
            </p>
            <ClipboardButton
              component="a"
              data-clipboard-text={introspectionQuery}
              className={classNames({
                'hint--top': this.state.recentlyCopied,
              })}
              data-hint="Copied to clipboard"
              onClick={() => this.copy()}
            >
              Copy Introspection Query
            </ClipboardButton>
            <textarea
              value={customPresetText || ''}
              disabled={!isActive}
              onChange={this.handleTextChange.bind(this)}
              placeholder="Paste Introspection Here"
            />
          </div>
        </div>
      </div>
    );
  }

  modalContent(presetNames, notApplied, schema) {
    if (notApplied === null) return null;

    const { activePreset, displayOptions, presetValue } = notApplied;
    const validSelected = !!schema.schema;
    const errorMessage = schema.error;

    let infoMessage = null;
    let infoClass = null;
    if (errorMessage != null) {
      infoMessage = errorMessage;
      infoClass = '-error';
    } else if (activePreset == null) {
      infoMessage = 'Please select introspection';
      infoClass = '-select';
    } else if (activePreset === 'custom') {
      infoMessage = 'Please paste your introspection';
      infoClass = '-select';
    }

    return (
      <div className="schema-modal">
        <div className="logo">
          <img src="logo.png" />
        </div>
        <div className="modal-cards">
          {this.predefinedCards(presetNames, activePreset)}
          {this.customCard(activePreset === 'custom', presetValue)}
        </div>
        <div
          className={classNames('modal-info-panel', {
            '-message': !validSelected,
            '-settings': validSelected,
          })}
        >
          <div className={classNames('modal-message', 'content', infoClass)}>{infoMessage}</div>
          <Settings
            theme={settingsDarkTheme}
            schema={schema.schema}
            options={displayOptions}
            onChange={options => this.handleDisplayOptionsChange(options)}
          />
        </div>
        <Button
          raised
          label="Change Schema"
          theme={buttonDarkTheme as any}
          disabled={!validSelected}
          onClick={this.handleChange.bind(this)}
        />
      </div>
    );
  }

  render() {
    const { showSchemaModal, notApplied, schema, presets } = this.props;

    if (!presets)
      throw new Error('To use schema modal pass "_schemaPresets" property to "<Voyager>"');

    let customStyle = {
      content: { maxHeight: '600px', maxWidth: '1000px' },
      overlay: { zIndex: 10, backgroundColor: 'rgba(0, 0, 0, 0.74902)' },
    };

    return (
      <ReactModal
        isOpen={showSchemaModal}
        className="modal-root"
        style={customStyle}
        contentLabel="Select Introspection"
        onRequestClose={() => this.close()}
      >
        {this.appBar()}
        {this.modalContent(Object.keys(presets), notApplied, schema)}
      </ReactModal>
    );
  }
}

export default connect<{}, {}, { presets: any }>(mapStateToProps)(SchemaModal);
