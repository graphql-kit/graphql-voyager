import * as React from 'react';
import { connect } from 'react-redux';

import Checkbox from 'react-toolbox/lib/checkbox';
import RootSelector from './RootSelector';

import { getSchemaSelector } from '../../introspection';
import { changeDisplayOptions } from '../../actions/';

interface SettingsProps {
  schema: any;
  options: any;
  theme: any;
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
    onChange: options => {
      dispatch(changeDisplayOptions(options));
    },
  };
}

export class Settings extends React.Component<SettingsProps> {
  render() {
    let { schema, options, theme, onChange } = this.props;

    return (
      <div className="menu-content">
        <div className="setting-change-root">
          <h3> Root Node </h3>
          <RootSelector
            theme={theme}
            schema={schema}
            rootTypeId={options.rootTypeId}
            onChange={rootTypeId => onChange({ ...options, rootTypeId })}
          />
        </div>
        <div className="setting-other-options">
          <h3> Options </h3>
          <Checkbox
            label="Sort by Alphabet"
            theme={theme}
            checked={!!options.sortByAlphabet}
            onChange={sortByAlphabet => onChange({ ...options, sortByAlphabet })}
          />
          <Checkbox
            label="Skip Relay"
            theme={theme}
            checked={!!options.skipRelay}
            onChange={skipRelay => onChange({ ...options, skipRelay })}
          />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
