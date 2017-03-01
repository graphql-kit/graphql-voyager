import * as _ from 'lodash';
import * as React from "react";
import { connect } from "react-redux"

import { extractTypeId } from '../../introspection';
import { getSelectedType, getPreviousType } from '../../selectors';
import {
  selectPreviousType,
  clearSelection,
  focusElement
} from '../../actions/';
import FocusTypeButton from './FocusTypeButton';

interface PreviousTypeProps {
  selectedType: any;
  previousType: any;
  dispatch: any;
}

function mapStateToProps(state) {
  return {
    selectedType: getSelectedType(state),
    previousType: getPreviousType(state),
  };
}

class PreviousType extends React.Component<PreviousTypeProps, void> {
  render() {
    const {
      selectedType,
      previousType,
      dispatch,
    } = this.props;

    let clickHandler = () => {
      if (!previousType)
        return dispatch(clearSelection());

      dispatch(focusElement(previousType.id));
      dispatch(selectPreviousType());
    }

    return (
      <div className="previous-type-area">
        {
          selectedType && <span className="doc-explorer-back" onClick={clickHandler}>
            { previousType ? previousType.name : 'Type List' }
          </span> || <span>Type List</span>
        }
        {
          selectedType &&
          <span className="selected-type">{selectedType.name}<FocusTypeButton type={selectedType} /></span>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps)(PreviousType);
