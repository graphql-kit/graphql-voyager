import * as React from 'react';
import { connect } from 'react-redux';

import './DocExplorer.css';

import { getPreviousType, getSelectedType } from '../../selectors';
import { selectPreviousType, clearSelection, focusElement } from '../../actions/';

import { getTypeGraphSelector } from '../../graph';
import TypeList from './TypeList';
import TypeDoc from './TypeDoc';
import FocusTypeButton from './FocusTypeButton';

interface DocExplorerProps {
  previousType: any;
  selectedType: any;
  typeGraph: any;
  dispatch: any;
}

function mapStateToProps(state) {
  return {
    previousType: getPreviousType(state),
    selectedType: getSelectedType(state),
    typeGraph: getTypeGraphSelector(state),
  };
}

class DocExplorer extends React.Component<DocExplorerProps> {
  render() {
    const { previousType, selectedType, typeGraph } = this.props;

    if (!typeGraph) {
      return (
        <div className="type-doc">
          <span className="loading"> Loading... </span>;
        </div>
      );
    } else if (!selectedType) {
      return (
        <div className="type-doc">
          <div className="doc-navigation">
            <span className="header">Type List</span>
          </div>
          <div className="scroll-area">
            <TypeList typeGraph={typeGraph} />
          </div>
        </div>
      );
    }

    return (
      <div className="type-doc">
        <div className="doc-navigation">
          <span className="back" onClick={this.handleNavBackClick}>
            {previousType ? previousType.name : 'Type List'}
          </span>
          <span className="active">
            {selectedType.name} <FocusTypeButton type={selectedType} />
          </span>
        </div>
        <div className="scroll-area">
          <TypeDoc />
        </div>
      </div>
    );
  }

  handleNavBackClick = () => {
    const { dispatch, previousType } = this.props;

    if (!previousType) return dispatch(clearSelection());

    dispatch(focusElement(previousType.id));
    dispatch(selectPreviousType());
  }
}

export default connect(mapStateToProps)(DocExplorer);
