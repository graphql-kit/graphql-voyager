import * as React from 'react';
import { connect } from 'react-redux'
import * as classNames from 'classnames';

import Checkbox from 'react-toolbox/lib/checkbox';
import RootSelector from './RootSelector';

import { getSchemaSelector } from '../../introspection';
import { changeDisplayOptions } from '../../actions/';

interface SettingsProps {
  schema: any;
  options: any;
  inversed?: boolean;
  compact?: boolean;
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
      inversed,
      compact,
      onChange,
    } = this.props;

    return (
      <div className="menu-content">
        <div className="setting-change-root">
          <h3> Root Node </h3>
          <RootSelector
            inversed={inversed}
            compact={compact}
            schema={schema}
            rootTypeId={options.rootTypeId}
            onChange={(rootTypeId) => onChange({...options, rootTypeId})}
          />
        </div>
        <div className="setting-other-options">
          <h3> Options </h3>
          <div className={classNames('checkbox-wrap', { '-inversed': inversed })}>
            <Checkbox label="Sort by Alphabet" checked={!!options.sortByAlphabet}
              onChange={sortByAlphabet => onChange({...options, sortByAlphabet})} />
          </div>
          <div className={classNames('checkbox-wrap', { '-inversed': inversed })}>
            <Checkbox label="Skip Relay" checked={!!options.skipRelay}
              onChange={skipRelay => {
                onChange({...options, skipRelay})
              }} />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
