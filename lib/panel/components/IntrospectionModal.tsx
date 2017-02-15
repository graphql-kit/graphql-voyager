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

import {
  changeActiveIntrospection,
  hideIntrospectionModal,
  changeCustomIntrospection
} from '../../actions/';

interface IntrospectionModalProps {
  showIntrospectionModal: boolean;
  activePreset: string;
  customPresetValue: string;
  presets: any[];
  dispatch: any;
}

interface IntrospectionModalState {
  customPresetValue: string;
  currentPreset: string;
}

function mapStateToProps(state) {
  return {
    showIntrospectionModal: state.panel.showIntrospectionModal,
    activePreset: state.introspection.activePreset,
    presets: state.introspection.presets
  };
}

class IntrospectionModal extends React.Component<IntrospectionModalProps, IntrospectionModalState> {
  presetGroup: RadioButtonGroup;
  constructor(props) {
    super(props);
    this.state = this.getState(this.props.activePreset);
  }

  getState(preset) {
    return {
      customPresetValue: this.props.presets['custom']
        && JSON.stringify(this.props.presets['custom'], null, 2) || '',
      currentPreset: preset || null
    }
  }

  switchPresetValue(preset) {
    this.setState(this.getState(preset));
  }

  handleTextChange(event) {
   this.setState({...this.state, customPresetValue: event.target.value});
  }

  handleChange() {
    let selected = this.state.currentPreset;
    if (selected === 'custom') {
      this.props.dispatch(changeCustomIntrospection(this.state.customPresetValue));
    }
    this.props.dispatch(changeActiveIntrospection(selected));
    this.props.dispatch(hideIntrospectionModal());
  }

  close() {
    this.switchPresetValue(null);
    this.props.dispatch(hideIntrospectionModal())
  }

  render() {
    const {
      showIntrospectionModal,
      presets,
      dispatch,
      activePreset
    } = this.props;

    let {
      currentPreset,
      customPresetValue,
    } = this.state;

    if (!currentPreset) currentPreset = activePreset;

    let customStyle = {
      content: {
        padding: 0, display: 'flex', flexDirection: 'column'
      },
      overlay: { zIndex: 10 }
    };

    return (
      <ReactModal isOpen={showIntrospectionModal}
        style={customStyle}
        contentLabel="Select Introspection"
        onRequestClose={() => this.close()}
      >
        <AppBar
          title="Select Introspection"
          showMenuIconButton={false}
          iconElementRight={<IconButton
            onTouchTap={() => this.close()}>
            <NavigationClose />
          </IconButton>}
        />
        <div className="modal-content">
          <div className="modal-cards">
            <div className="modal-introspection-predefined">
              {_.map(_.filter(_.keys(presets), v => v !== 'custom'), (name,i) =>
                <div key={i} className={classNames({
                  'introspection-card': true,
                  'active': name === currentPreset
                })} onClick={() => this.switchPresetValue(name)}>
                  <h1> {name} </h1>
                </div>
              )}
            </div>
            <div className="modal-introspection-custom">
              <div className={classNames({
                'introspection-card': true,
                'active': currentPreset === 'custom'
              })} onClick={() => this.switchPresetValue('custom')}>
                <h1> Custom </h1>
                <div className="modal-introspection-custom-area">
                  <textarea value={customPresetValue} disabled={currentPreset != 'custom'}
                  onChange={this.handleTextChange.bind(this)} placeholder="Paste Introspection Here"/>
                </div>
              </div>
            </div>
          </div>
          <RaisedButton label="Change Introspection" primary={true}
            onTouchTap={this.handleChange.bind(this)}/>
        </div>
      </ReactModal>
    );
  }
}


export default connect(mapStateToProps)(IntrospectionModal);
