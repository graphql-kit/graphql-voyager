import * as _ from 'lodash';
import * as React from "react";
import { connect } from "react-redux"
import * as ReactModal from "react-modal";

import AppBar from 'material-ui/AppBar';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import {
  changeActiveIntrospection,
  hideIntrospectionModal,
  changeCustomIntrospection
} from '../../actions/';

interface IntrospectionModalProps {
  showIntrospectionModal: boolean;
  activePreset: string;
  presetValue: string;
  presets: any[];
  dispatch: any;
}

interface IntrospectionModalState {
  presetValue: string;
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
      presetValue: this.props.presets[preset]
        && JSON.stringify(this.props.presets[preset], null, 2) || '',
      currentPreset: preset || 'custom'
    }
  }

  switchPresetValue(preset) {
    this.setState(this.getState(preset));
  }

  handleTextChange(event) {
   this.setState({...this.state, presetValue: event.target.value});
  }

  handleChange() {
    let selected = (this.refs['presetGroup'] as any).state.selected;
    if (selected === 'custom') {
      this.props.dispatch(changeCustomIntrospection(this.state.presetValue));
    }
    this.props.dispatch(changeActiveIntrospection(selected));
    this.props.dispatch(hideIntrospectionModal());
  }

  render() {
    const {
      showIntrospectionModal,
      presets,
      dispatch,
    } = this.props;

    const {
      currentPreset,
      presetValue,
    } = this.state;

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
        onRequestClose={
          () => dispatch(hideIntrospectionModal())
        }
      >
        <AppBar
          title="Select Introspection"
          showMenuIconButton={false}
          iconElementRight={<IconButton
            onTouchTap={() => dispatch(hideIntrospectionModal())}>
            <NavigationClose />
          </IconButton>}
        />
        <div className="panel-content">
          <RadioButtonGroup name="preset" defaultSelected={currentPreset}
          ref="presetGroup" onChange={(e,value) => this.switchPresetValue(value)}>
            {_.map(_.keys(presets), (name,i) => <RadioButton
                key={i}
                value={name}
                label={name}
              />
            )}
          </RadioButtonGroup>
          <textarea value={presetValue} disabled={currentPreset != 'custom'}
          onChange={this.handleTextChange.bind(this)} placeholder="Paste Introspection"/>
          <RaisedButton label="Change Introspection" primary={true}
            onTouchTap={this.handleChange.bind(this)}/>
        </div>
      </ReactModal>
    );
  }
}


export default connect(mapStateToProps)(IntrospectionModal);
