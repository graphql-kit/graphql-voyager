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
} from '../../actions/';

interface IntrospectionModalProps {
  showIntrospectionModal: boolean;
  presetsNames: Array<string>;
  activePreset: string;
  dispatch: any;
}

function mapStateToProps(state) {
  return {
    showIntrospectionModal: state.panel.showIntrospectionModal,
    activePreset: state.introspection.activePreset,
    presetsNames: _.keys(state.introspection.presets),
  };
}

class IntrospectionModal extends React.Component<IntrospectionModalProps, void> {
  presetGroup: RadioButtonGroup;
  render() {
    const {
      showIntrospectionModal,
      presetsNames,
      activePreset
    } = this.props;
    const dispatch = this.props.dispatch;
    let customStyle = {
      content: {
        padding: 0
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
          <RadioButtonGroup name="preset" defaultSelected={activePreset}
          ref="presetGroup">
            {_.map(presetsNames, (name,i) => <RadioButton
                key={i}
                value={name}
                label={name}
              />
            )}
          </RadioButtonGroup>
          <br />
          <RaisedButton label="Change Introspection" primary={true}
            onTouchTap={() => {
              dispatch(changeActiveIntrospection((this.refs['presetGroup'] as any).state.selected));
              dispatch(hideIntrospectionModal());
            }}/>
        </div>
      </ReactModal>
    );
  }
}


export default connect(mapStateToProps)(IntrospectionModal);
