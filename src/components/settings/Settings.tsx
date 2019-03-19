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

    if (schema == null) return null;

    return (
      <div className="menu-content">
        <div className="setting-change-root">
          <RootSelector
            schema={schema}
            rootTypeId={options.rootTypeId}
            onChange={rootTypeId => onChange({ rootTypeId })}
          />
        </div>
        <div className="setting-other-options">
          <Checkbox
            id="sort"
            color="primary"
            checked={!!options.sortByAlphabet}
            onChange={event => onChange({ sortByAlphabet: event.target.checked })}
          />
          <label htmlFor="sort">Sort by Alphabet</label>
          <Checkbox
            id="skip"
            color="primary"
            checked={!!options.skipRelay}
            onChange={event => onChange({ skipRelay: event.target.checked })}
          />
          <label htmlFor="skip">Skip Relay</label>
          <Checkbox
            id="showLeafFields"
            color="primary"
            checked={!!options.showLeafFields}
            onChange={event => onChange({ showLeafFields: event.target.checked })}
          />
          <label htmlFor="showLeafFields">Show leaf fields</label>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
