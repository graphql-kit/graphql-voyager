import * as React from "react";
import { connect } from "react-redux"

import Checkbox from 'material-ui/Checkbox';
import RootSelector from './RootSelector';

import { getSchemaSelector } from '../../introspection';

import {
  changeActiveIntrospection,
  changeSortByAlphabet,
  changeSkipRelay,
  changeRootType
} from '../../actions/';

interface SettingsProps {
  sortByAlphabet: boolean;
  skipRelay: boolean;
  rootTypeId: string;
  onChangeSort?: any;
  onChangeSkipRelay?: any;
  onChangeRoot?: any;
  schema: any;
}

function mapStateToProps(state) {
  return {
    sortByAlphabet: state.displayOptions.sortByAlphabet,
    skipRelay: state.displayOptions.skipRelay,
    rootTypeId: state.displayOptions.rootTypeId,
    schema: getSchemaSelector(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeSort: (val) => {
      dispatch(changeSortByAlphabet(val));
    },
    onChangeSkipRelay: (val) => {
      dispatch(changeSkipRelay(val));
    },
    onChangeRoot: (root) => {
      dispatch(changeRootType(root));
    }
  }
}

export class Settings extends React.Component<SettingsProps, void> {
  render() {
    let {
      sortByAlphabet,
      skipRelay,
      rootTypeId,
      schema,

      onChangeSort,
      onChangeSkipRelay,
      onChangeRoot
    } = this.props;
    return (
      <div className="menu-content">
        <h3 style={{margin: 0}}> Root Node </h3>
        <RootSelector schema={schema} rootTypeId={rootTypeId} onChange={(root) => onChangeRoot(root) }/>
        <h3> Options </h3>
        <Checkbox label="Sort by Alphabet" checked={sortByAlphabet}
          onCheck={(e, val) => onChangeSort(val)} />
        <Checkbox label="Skip Relay" checked={skipRelay}
          onCheck={(e, val) => onChangeSkipRelay(val)} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
