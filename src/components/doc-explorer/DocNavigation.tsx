import * as React from 'react';
import { connect } from 'react-redux';

import './DocNavigation.css';

import { getSelectedType, getPreviousType } from '../../selectors';
import { selectPreviousType, clearSelection, focusElement } from '../../actions/';
import FocusTypeButton from './FocusTypeButton';

interface DocNavigationProps {
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

class DocNavigation extends React.Component<DocNavigationProps> {
  render() {
    const { selectedType, previousType, dispatch } = this.props;

    let clickHandler = () => {
      if (!previousType) return dispatch(clearSelection());

      dispatch(focusElement(previousType.id));
      dispatch(selectPreviousType());
    };

    return (
      <div className="doc-navigation">
        {(selectedType && (
          <span className="back" onClick={clickHandler}>
            {previousType ? previousType.name : 'Type List'}
          </span>
        )) || <span className="header">Type List</span>}
        {selectedType && (
          <span className="active">
            {selectedType.name}
            <FocusTypeButton type={selectedType} />
          </span>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps)(DocNavigation);
