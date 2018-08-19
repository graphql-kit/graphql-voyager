import * as React from 'react';
import { connect } from 'react-redux';

import Checkbox from '@material-ui/core/Checkbox';

import RootSelector from './RootSelector';

import { getSchemaSelector } from '../../introspection';
import { changeDisplayOptions } from '../../actions/';

interface SettingsProps {
  schema: any;
  options: any;
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
    let { schema, options, onChange } = this.props;

    return (
      <div className="menu-content">
        <div className="setting-change-root">
          <RootSelector
            schema={schema}
            rootTypeId={options.rootTypeId}
            onChange={rootTypeId => onChange({ ...options, rootTypeId })}
          />
        </div>
        <div className="setting-other-options">
          <Checkbox
            id="sort"
            color="primary"
            checked={!!options.sortByAlphabet}
            onChange={event => onChange({ ...options, sortByAlphabet: event.target.checked })}
          />
          <label htmlFor="sort">Sort by Alphabet</label>
          <Checkbox
            id="skip"
            color="primary"
            checked={!!options.skipRelay}
            onChange={event => onChange({ ...options, skipRelay: event.target.checked })}
          />
          <label htmlFor="skip">Skip Relay</label>
          <Checkbox
            id="displayScalars"
            color="primary"
            checked={!!options.displayScalars}
            onChange={event => onChange({ ...options, displayScalars: event.target.checked })}
          />
          <label htmlFor="displayScalars">Display scalars</label>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
