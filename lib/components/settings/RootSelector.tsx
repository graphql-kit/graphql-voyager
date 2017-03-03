import * as _ from 'lodash';
import * as React from 'react';
import * as classNames from 'classnames';

import { isNode, getDefaultRoot } from '../../graph/';

import Dropdown from 'react-toolbox/lib/dropdown';
import { MenuItem, MenuDivider } from 'react-toolbox/lib/menu';


interface RootSelectorProps {
  rootTypeId?: string;
  schema: any;

  inversed?: boolean;
  compact?: boolean;
  onChange: any;
}

export default class RootSelector extends React.Component<RootSelectorProps, void> {
  render() {
    let {
      rootTypeId,
      inversed,
      compact,
      schema,
      onChange,
    } = this.props;

    if (schema === null)
      return null;

    rootTypeId = rootTypeId || getDefaultRoot(schema);
    let {
      types,
      queryType,
      mutationType,
      subscriptionType,
    } = schema;

    types = _.omit(types, queryType.id);
    if (mutationType)
      types = _.omit(types, mutationType.id);
    if (subscriptionType)
      types = _.omit(types, subscriptionType.id);

    types = _(types).values().filter(isNode)
      .sortBy('name').value();

    let typesList = _.compact([queryType, mutationType, subscriptionType]).map(type => ({
      value: type.id,
      label: type.name,
      bold: true
    }));
    typesList = [...typesList, ...types.map(type => ({ value: type.id, label: type.name}))];
    return (
      <Dropdown
        className={classNames('dropdown-root', {
          '-inversed': inversed,
          '-compact': compact
        })}
        source={typesList}
        onChange={value => {
          onChange(value);
        }}
        value={rootTypeId}
        template={item => item.bold ? <strong> {item.label} </strong> : <span>{item.label}</span>}
      />
    );
  }
}
