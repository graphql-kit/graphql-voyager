import * as _ from 'lodash';
import * as React from 'react';

import { isNode, getDefaultRoot } from '../../graph/';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import './RootSelector.css';

interface RootSelectorProps {
  rootTypeId?: string;
  schema: any;
  onChange: any;
}

export default class RootSelector extends React.Component<RootSelectorProps> {
  render() {
    let { rootTypeId, schema, onChange } = this.props;

    if (schema === null) return null;

    rootTypeId = rootTypeId || getDefaultRoot(schema);
    let { types, queryType, mutationType, subscriptionType } = schema;

    types = _.omit(types, queryType.id);
    if (mutationType) types = _.omit(types, mutationType.id);
    if (subscriptionType) types = _.omit(types, subscriptionType.id);

    types = _(types)
      .values()
      .filter(isNode)
      .sortBy('name')
      .value();

    let typesList = _.compact([queryType, mutationType, subscriptionType]).map(type => ({
      value: type.id,
      label: type.name,
      bold: true,
    }));
    typesList = [...typesList, ...types.map(type => ({ value: type.id, label: type.name }))];
    return (
      <Select
        className="root-selector"
        onChange={event => onChange(event.target.value)}
        value={rootTypeId}
      >
        {typesList.map(item => (
          <MenuItem value={item.value} key={item.value}>
            {item.bold ? <strong> {item.label} </strong> : <span>{item.label}</span>}
          </MenuItem>
        ))}
      </Select>
    );
  }
}
