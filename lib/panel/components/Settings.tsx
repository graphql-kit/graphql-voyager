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

  color?: string;
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
      color,

      onChangeSort,
      onChangeSkipRelay,
      onChangeRoot
    } = this.props;

    color = 'white';
    let style = color ? {color: color, fill: color} : {};
    return (
      <div className="menu-content">
        <div className="setting-change-root">
          <h3> Root Node </h3>
          <RootSelector
            color={color}
            schema={schema}
            rootTypeId={rootTypeId}
            onChange={(root) => onChangeRoot(root) }
          />
        </div>
        <div className="setting-other-options">
          <h3> Options </h3>
          <div className="checkbox-wrap">
            <Checkbox label="Sort by Alphabet" checked={sortByAlphabet} iconStyle={style}
              labelStyle={style}
              onCheck={(e, val) => onChangeSort(val)} />
          </div>
          <div className="checkbox-wrap">
            <Checkbox label="Skip Relay" checked={skipRelay} iconStyle={style}
              labelStyle={style}
              onCheck={(e, val) => onChangeSkipRelay(val)} />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
