import * as _ from 'lodash';
import * as React from "react";

import { isNode, getDefaultRoot } from '../../graph/';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

interface RootSelectorProps {
  rootTypeId?: string;
  schema: any;

  color?: string;

  onChange: any;
}

export default class RootSelector extends React.Component<RootSelectorProps, void> {
  render() {
    let {
      rootTypeId,
      color,
      schema,
      onChange,
    } = this.props;

    let labelStyle = {}, style = {}, iconStyle = {};
    if (color) {
      labelStyle = { color: color, height: '22px', lineHeight: '22px' };
      style = { height: '22px' };
      iconStyle = { top: '-2px' };
    }

    if (schema === null)
      return null;

    rootTypeId = rootTypeId || getDefaultRoot(schema);
    let types = schema.types;

    const queryType = schema.types[schema.queryType];
    types = _.omit(types, queryType.id);
    const mutationType = schema.types[schema.mutationType];
    if (mutationType)
      types = _.omit(types, mutationType.id);

    types = _(types).values().filter(isNode)
      .sortBy('name').value();

    const currentRoot = schema.types[rootTypeId].id;

    return (
      <DropDownMenu style={style} iconStyle={iconStyle} labelStyle={labelStyle}
        className="dropdown-root" autoWidth={false}
        onChange={(event, index, value) => {
          onChange(value);
        }} value={currentRoot}>

        <MenuItem value={queryType.id} primaryText={queryType.name} />
        {mutationType && (<MenuItem value={mutationType.id} primaryText={mutationType.name} />)}
        <Divider/>
        {_.map(types, type => (
          <MenuItem key={type.id} value={type.id} primaryText={type.name} />
        ))}
      </DropDownMenu>
    );
  }
}
