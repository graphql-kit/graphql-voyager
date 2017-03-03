import * as _ from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux'
import * as ReactModal from 'react-modal';
import * as classNames from 'classnames';

import './IntrospectionModal.css';

import { Button, IconButton } from 'react-toolbox/lib/button';
import CloseIcon from '../icons/close-black.svg';

import * as ClipboardButton from 'react-clipboard.js';

import { introspectionQuery } from 'graphql/utilities';

import {
  changeActiveIntrospection,
  changeCustomIntrospection,
  changeDisplayOptions,
  hideIntrospectionModal,
  changeNaActivePreset,
  changeNaCustomPreset,
  changeNaDisplayOptions,
} from '../../actions/';
import { Settings } from './Settings';
import { getNaSchemaSelector } from '../../introspection';

interface IntrospectionModalProps {
  showIntrospectionModal: boolean;
  notApplied: any;
  presetNames: string[];
  schema: any;
  dispatch: any;
}

interface IntrospectionModalState {
  recentlyCopied: boolean;
}

function mapStateToProps(state) {
  return {
    showIntrospectionModal: state.panel.showIntrospectionModal,
    notApplied: state.panel.notApplied,
    presetNames: _.keys(state.introspection.presets),
    schema: getNaSchemaSelector(state),
  };
}

class IntrospectionModal extends React.Component<IntrospectionModalProps, IntrospectionModalState> {
  constructor(props) {
    super(props);
    this.state = {recentlyCopied: false};
  }

  handleTextChange(event) {
    let text = event.target.value;
    if (text === '')
      text = null;
    this.props.dispatch(changeNaCustomPreset(text));
  }

  handlePresetChange(name) {
    this.props.dispatch(changeNaActivePreset(name));
  }

  handleDisplayOptionsChange(options) {
    this.props.dispatch(changeNaDisplayOptions(options));
  }

  handleChange() {
    const {
      notApplied: {
        customPresetText,
        activePreset,
        displayOptions,
      },
      dispatch
    } = this.props;

    if (activePreset === 'custom')
      dispatch(changeCustomIntrospection(JSON.parse(customPresetText)));

    dispatch(changeActiveIntrospection(activePreset, displayOptions));
    this.props.dispatch(hideIntrospectionModal());
  }

  close() {
    this.props.dispatch(hideIntrospectionModal())
  }

  copy() {
    this.setState({...this.state, recentlyCopied: true});
    setTimeout(() => {
      this.setState({...this.state, recentlyCopied: false});
    }, 2000)
  }

  appBar() {
    return (
      <IconButton className="close-icon" onClick={() => this.close()}>
          <CloseIcon color="#ffffff" />
      </IconButton>
    );
  }

  predefinedCards(presetNames:string[], activePreset) {
    return (
      <div className="modal-introspection-predefined">
        {_(presetNames).without('custom').map(name =>
          <div key={name} className={classNames({
            'introspection-card': true,
            'active': name === activePreset
          })} onClick={() => {
            if (name !== activePreset)
              this.handlePresetChange(name)
          }}>
            <h2> {name} </h2>
          </div>
        ).value()}
      </div>
    );
  }

  customCard(isActive:boolean, customPresetText:string) {
    return (
      <div className="modal-introspection-custom">
        <div className={classNames('introspection-card', {
          'active': isActive
        })} onClick={() => isActive || this.handlePresetChange('custom')}>
          <div className="card-header">
            <h2> Custom Introspection </h2>
          </div>
          <div className="modal-introspection-custom-area">
            <p> Run the introspection query against a GraphQL endpoint. Paste the result into the textarea below to view the model relationships.</p>
            <ClipboardButton component="a" data-clipboard-text={introspectionQuery}
            className={classNames({
              'hint--top': this.state.recentlyCopied
            })}
            data-hint='Copied to clipboard'
            onClick={() => this.copy()}>
              Copy Introspection Query
            </ClipboardButton>
            <textarea value={customPresetText || ''} disabled={!isActive}
            onChange={this.handleTextChange.bind(this)} placeholder="Paste Introspection Here"/>
          </div>
        </div>
      </div>
    );
  }

  modalContent(presetNames, notApplied, schema) {
    if (notApplied === null)
      return null;

    const {
      activePreset,
      displayOptions,
      customPresetText,
    } = notApplied;
    const validSelected = !!(schema.schema);
    const errorMessage = schema.error;

    let infoMessage = null;
    let infoClass = null;
    if (errorMessage !== null) {
      infoMessage = errorMessage;
      infoClass = '-error';
    }
    else if (activePreset === null) {
      infoMessage = 'Please select introspection';
      infoClass = '-select';
    }
    else if (activePreset === 'custom') {
      infoMessage = 'Please paste your introspection';
      infoClass = '-select';
    }

    return (
      <div className="introspection-modal">
        <div className="logo">
          <img src="logo.png" />
        </div>
        <div className="modal-cards">
          {this.predefinedCards(presetNames, activePreset)}
          {this.customCard(activePreset === 'custom', customPresetText)}
        </div>
        <div className={classNames('modal-info-panel', {
          '-message': !validSelected,
          '-settings': validSelected
        })}>
          <div className={classNames('modal-message', 'content', infoClass)}>
            {infoMessage}
          </div>
          <Settings inversed={true} compact={true}
            schema={schema.schema}
            options={displayOptions}
            onChange={(options) => this.handleDisplayOptionsChange(options)}/>
        </div>
        <Button raised label="Change Introspection" className="submit-button"
        disabled={!validSelected} onClick={this.handleChange.bind(this)}/>
      </div>
    );
  }

  render() {
    const {
      showIntrospectionModal,
      presetNames,
      notApplied,
      schema,
      dispatch,
    } = this.props;

    let customStyle = {
      content: {maxHeight: '600px', maxWidth: '1000px'},
      overlay: { zIndex: 10, backgroundColor: 'rgba(0, 0, 0, 0.74902)' }
    };

    return (
      <ReactModal isOpen={showIntrospectionModal} className="modal-root"
        style={customStyle}
        contentLabel="Select Introspection"
        onRequestClose={() => this.close()}
      >
        {this.appBar()}
        {this.modalContent(presetNames, notApplied, schema)}
      </ReactModal>
    );
  }
}


export default connect(mapStateToProps)(IntrospectionModal);
