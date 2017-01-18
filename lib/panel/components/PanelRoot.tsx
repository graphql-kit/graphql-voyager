import * as _ from 'lodash';
import * as React from "react";
import { connect } from "react-redux"
import * as ReactModal from "react-modal";

import {
  changeActiveIntrospection,
  changeSortByAlphabet,
  changeSkipRelay,
  showIntrospectionModal,
} from '../../actions/';

import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';

import IntrospectionModal from './IntrospectionModal';
import TypeInfo from './TypeInfo';

interface PanelRootProps {
  isLoading: boolean;
  sortByAlphabet: boolean;
  skipRelay: boolean;
}

function mapStateToProps(state) {
  return {
    isLoading: state.svgRenderingInProgress,
    sortByAlphabet: state.displayOptions.sortByAlphabet,
    skipRelay: state.displayOptions.skipRelay
  };
}

class PanelRoot extends React.Component<PanelRootProps, void> {
  render() {
      const {
        isLoading,
        sortByAlphabet,
        skipRelay
      } = this.props;
      const dispatch = this.props['dispatch'];
      return (
        <div>
          <h2>GraphQL Voyager</h2>
          {isLoading && <div> Loading </div>}
          <IntrospectionModal> </IntrospectionModal>
          <RaisedButton label="Load Introspection" primary={true}
            onTouchTap={() => dispatch(showIntrospectionModal())}/>
          <p/>
          <Checkbox label="Sort by Alphabet" checked={sortByAlphabet}
            onCheck={(e, val) => dispatch(changeSortByAlphabet(val))} />
          <Checkbox label="Skip Relay" checked={skipRelay}
            onCheck={(e, val) => dispatch(changeSkipRelay(val))} />
          <TypeInfo/>
        </div>
      );
  }
}

export default connect(mapStateToProps)(PanelRoot);
