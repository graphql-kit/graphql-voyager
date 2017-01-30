import * as _ from 'lodash';
import * as React from "react";
import { connect } from "react-redux"

import { extractTypeId } from '../../introspection';
import { getTypeGraphSelector } from '../../graph';
import { selectPreviousType, focusElement } from '../../actions/';

interface PreviousTypeProps {
  previousTypeId: string;
  typeGraph: any;
  dispatch: any;
}

function mapStateToProps(state) {
  return {
    previousTypeId: _.last(state.selected.previousTypesIds),
    typeGraph: getTypeGraphSelector(state),
  };
}

class PreviousType extends React.Component<PreviousTypeProps, void> {
  render() {
    const {
      dispatch,
      previousTypeId,
      typeGraph
    } = this.props;


    //TODO: add button that clear selection and return to list of types
    if (!previousTypeId)
      return null;

    var previousType = typeGraph.nodes[previousTypeId];

    return (
      <div className="doc-explorer-back"
        onClick={() => {
          dispatch(focusElement(previousType.id));
          dispatch(selectPreviousType());
        }}>
        {previousType.name}
      </div>
    );
  }
}

export default connect(mapStateToProps)(PreviousType);
