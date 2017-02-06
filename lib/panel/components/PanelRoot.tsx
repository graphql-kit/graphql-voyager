import * as _ from 'lodash';
import * as React from "react";
import { connect } from "react-redux"
import * as ReactModal from "react-modal";
import * as classNames from 'classnames';

import {
  changeActiveIntrospection,
  changeSortByAlphabet,
  changeSkipRelay,
  showIntrospectionModal,
} from '../../actions/';

import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';

import IntrospectionModal from './IntrospectionModal';
import RootSelector from './RootSelector';
import TypeDoc from './TypeDoc';

interface PanelRootProps {
  isLoading: boolean;
  sortByAlphabet: boolean;
  skipRelay: boolean;
  dispatch: any;
}

function mapStateToProps(state) {
  return {
    isLoading: (state.currentSvgIndex === null),
    sortByAlphabet: state.displayOptions.sortByAlphabet,
    skipRelay: state.displayOptions.skipRelay
  };
}

class PanelRoot extends React.Component<PanelRootProps, void> {
  render() {
    const {
      isLoading,
      sortByAlphabet,
      skipRelay,
      dispatch
    } = this.props;
    return (
      <div className="panel-wrap">
        <div className="title-area">
          <h2>GraphQL Voyager</h2>
          <IntrospectionModal/>
          <RaisedButton label="Load Introspection" primary={true}
            onTouchTap={() => dispatch(showIntrospectionModal())}/>
          <p/>
          <RootSelector/>
          <Checkbox label="Sort by Alphabet" checked={sortByAlphabet}
            onCheck={(e, val) => dispatch(changeSortByAlphabet(val))} />
          <Checkbox label="Skip Relay" checked={skipRelay}
            onCheck={(e, val) => dispatch(changeSkipRelay(val))} />
        </div>
        <TypeDoc/>
        <div className={classNames({
          'loading-box': true,
          'visible': isLoading
        })}>
          <h1>Loading</h1>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(PanelRoot);
