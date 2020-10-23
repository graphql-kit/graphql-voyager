import * as React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import RootSelector from './RootSelector';

interface SettingsProps {
  schema: any;
  options: any;
  onChange: (any) => void;
}

export default class Settings extends React.Component<SettingsProps> {
  render() {
    let { schema, options, onChange } = this.props;

    return (
      <div className="menu-content">
        <div className="setting-change-root">
          <RootSelector
            schema={schema}
            rootType={options.rootType}
            onChange={(rootType) => onChange({ rootType })}
          />
        </div>
        <div className="setting-other-options">
          <Checkbox
            id="sort"
            color="primary"
            checked={!!options.sortByAlphabet}
            onChange={(event) =>
              onChange({ sortByAlphabet: event.target.checked })
            }
          />
          <label htmlFor="sort">Sort by Alphabet</label>
          <Checkbox
            id="skip"
            color="primary"
            checked={!!options.skipRelay}
            onChange={(event) => onChange({ skipRelay: event.target.checked })}
          />
          <label htmlFor="skip">Skip Relay</label>
          <Checkbox
            id="deprecated"
            color="primary"
            checked={!!options.skipDeprecated}
            onChange={(event) =>
              onChange({ skipDeprecated: event.target.checked })
            }
          />
          <label htmlFor="deprecated">Skip deprecated</label>
          <Checkbox
            id="showLeafFields"
            color="primary"
            checked={!!options.showLeafFields}
            onChange={(event) =>
              onChange({ showLeafFields: event.target.checked })
            }
          />
          <label htmlFor="showLeafFields">Show leaf fields</label>
        </div>
      </div>
    );
  }
}
