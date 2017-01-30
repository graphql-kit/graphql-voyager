import * as _ from 'lodash';
import * as React from "react";
import { connect } from "react-redux"

import { getSchemaSelector, isObjectType, isSystemType } from '../../introspection';
import { changeRootType } from '../../actions/';

interface RootSelectorProps {
  rootTypeId: string;
  schema: any;
  dispatch: any;
}

function mapStateToProps(state) {
  return {
    rootTypeId: state.displayOptions.rootTypeId,
    schema: getSchemaSelector(state),
  };
}

class RootSelector extends React.Component<RootSelectorProps, void> {
  render() {
    const {
      dispatch,
      rootTypeId,
      schema,
    } = this.props;


    if (!schema || !rootTypeId)
      return null;

    let types = schema.types;

    const queryType = schema.types[schema.queryType];
    types = _.omit(types, queryType.id);
    const mutationType = schema.types[schema.mutationType];
    if (mutationType)
      types = _.omit(types, mutationType.id);

    types = _(types).values()
      .filter(type => isObjectType(type) && !isSystemType(type))
      .sortBy('name').value();

    const currentRoot = schema.types[rootTypeId].id;

    return (
      <select
        onChange={({target}) => {
          dispatch(changeRootType(target['value']));
        }}
        value={currentRoot}>

        <option value={queryType.id}>{queryType.name}</option>
        {mutationType && (<option value={mutationType.id}>{mutationType.name}</option>)}
        <option disabled={true}>----</option>
        {_.map(types, type => (
          <option key={type.id} value={type.id}>{type.name}</option>
        ))}
      </select>
    );
  }
}

export default connect(mapStateToProps)(RootSelector);
