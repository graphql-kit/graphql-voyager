import * as React from "react";
import { connect } from "react-redux"

import Checkbox from 'material-ui/Checkbox';
import RootSelector from './RootSelector';

import { getSchemaSelector } from '../../introspection';
import { changeDisplayOptions } from '../../actions/';

interface SettingsProps {
  schema: any;
  options: any;
  color?: string;
  onChange: any;
}

function mapStateToProps(state) {
  const schema = getSchemaSelector(state);
  return {
    options: state.displayOptions,
    schema: schema,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: (options) => {
      dispatch(changeDisplayOptions(options));
    }
  }
}

export class Settings extends React.Component<SettingsProps, void> {
  render() {
    let {
      schema,
      options,
      color,
      onChange,
    } = this.props;

    let style = color ? {color: color, fill: color} : {};

    return (
      <div className="menu-content">
        <div className="setting-change-root">
          <h3> Root Node </h3>
          <RootSelector
            color={color}
            schema={schema}
            rootTypeId={options.rootTypeId}
            onChange={(rootTypeId) => onChange({...options, rootTypeId})}
          />
        </div>
        <div className="setting-other-options">
          <h3> Options </h3>
          <div className="checkbox-wrap">
            <Checkbox label="Sort by Alphabet" checked={options.sortByAlphabet} iconStyle={style}
              labelStyle={style}
              onCheck={(e,sortByAlphabet) => onChange({...options, sortByAlphabet})} />
          </div>
          <div className="checkbox-wrap">
            <Checkbox label="Skip Relay" checked={options.skipRelay} iconStyle={style}
              labelStyle={style}
              onCheck={(e,skipRelay) => onChange({...options, skipRelay})} />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
