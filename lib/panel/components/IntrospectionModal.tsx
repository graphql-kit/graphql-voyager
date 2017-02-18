import * as _ from 'lodash';
import * as React from "react";
import { connect } from "react-redux"
import * as ReactModal from "react-modal";

import AppBar from 'material-ui/AppBar';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import * as classNames from 'classnames';

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
  presetGroup: RadioButtonGroup;
  constructor(props) {
    super(props);
    this.state = {recentlyCopied: false};
  }

  handleTextChange(event) {
    this.props.dispatch(changeNaCustomPreset(event.target.value));
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
      dispatch(changeCustomIntrospection(customPresetText));

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
      <AppBar
        style={{backgroundColor: 'transparent', height: 0}}
        titleStyle={{height: '54px', lineHeight: '50px', fontSize: '18px'}}
        showMenuIconButton={false}
        iconStyleRight={{marginTop: 0}}
        iconElementRight={<IconButton
          onTouchTap={() => this.close()}>
          <NavigationClose />
        </IconButton>}
      />
    );
  }

  predefinedCards(presetNames:string[], activePreset) {
    return (
      <div className="modal-introspection-predefined">
        {_(presetNames).without('custom').map(name =>
          <div key={name} className={classNames({
            'introspection-card': true,
            'active': name === activePreset
          })} onClick={() => this.handlePresetChange(name)}>
            <h2> {name} </h2>
          </div>
        ).value()}
      </div>
    );
  }

  customCard(isActive:boolean, customPresetText:string) {
    return (
      <div className="modal-introspection-custom">
        <div className={classNames({
          'introspection-card': true,
          'active': isActive
        })} onClick={() => this.handlePresetChange('custom')}>
          <div className="card-header">
            <h2> Custom Introspection </h2>
            <p> Run the introspection query against a GraphQL endpoint. Paste the result into the textarea below to view the model relationships.</p>
            <ClipboardButton component="a" data-clipboard-text={introspectionQuery}
            className={classNames({
              'hint--top': this.state.recentlyCopied
            })}
            data-hint='Copied to clipboard'
            onClick={() => this.copy()}>
              Copy Introspection Query
            </ClipboardButton>
          </div>
          <div className="modal-introspection-custom-area">
            <textarea value={customPresetText} disabled={isActive}
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
    let validSelected = (schema !== null);

    return (
      <div className="modal-content">
        <div className="logo">
          <img src="logo.png" />
        </div>
        <div className="modal-cards">
          {this.predefinedCards(presetNames, activePreset)}
          {this.customCard(activePreset === 'custom', customPresetText)}
        </div>
        <Settings disabled={!validSelected}
        schema={schema}
        options={displayOptions}
        onChange={(options) => this.handleDisplayOptionsChange(options)}/>
        <RaisedButton label="Change Introspection"
        backgroundColor="#265759" disabledBackgroundColor="#1e4651"
        disabledLabelColor="rbga(255,255,255,0.21)" labelColor="white"
        disabled={!validSelected} onTouchTap={this.handleChange.bind(this)}/>
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
