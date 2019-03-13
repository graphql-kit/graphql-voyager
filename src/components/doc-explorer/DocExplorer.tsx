import * as React from 'react';
import { connect } from 'react-redux';

import './DocExplorer.css';

import {
 selectPreviousType,
 clearSelection,
 focusElement,
 selectNode,
 selectEdge,
 changeSelectedTypeInfo,
} from '../../actions/';

import { isNode, getTypeGraphSelector } from '../../graph';
import TypeList from './TypeList';
import TypeDoc from './TypeDoc';
import FocusTypeButton from './FocusTypeButton';

interface DocExplorerProps {
  previousType: any;
  selectedType: any;
  selectedEdgeID: string;
  typeGraph: any;
  dispatch: any;
}

function mapStateToProps(state) {
  const typeGraph = getTypeGraphSelector(state);
  const nodes = typeGraph ? typeGraph.nodes : Object.create(null);

  const previousTypesIds = state.selected.previousTypesIds;
  const previousTypeId = previousTypesIds[previousTypesIds.length - 1];
  const selectedTypeId = state.selected.currentNodeId;

  return {
    previousType: previousTypeId && nodes[previousTypeId],
    selectedType: selectedTypeId && nodes[selectedTypeId],
    selectedEdgeID: state.selected.currentEdgeId,
    typeGraph,
  };
}

class DocExplorer extends React.Component<DocExplorerProps> {
  render() {
    const { previousType, selectedType, selectedEdgeID, typeGraph } = this.props;

    if (!typeGraph) {
      return (
        <div className="type-doc">
          <span className="loading"> Loading... </span>;
        </div>
      );
    }

    if (!selectedType) {
      return (
        <div className="type-doc">
          <div className="doc-navigation">
            <span className="header">Type List</span>
          </div>
          <div className="scroll-area">
            <TypeList
              typeGraph={typeGraph}
              onTypeLink={this.handleTypeLink}
              onFocusType={this.handleFocusType}
            />
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
            {selectedType.name}
            <FocusTypeButton
              onClick={() => this.handleFocusType(selectedType)}
            />
          </span>
        </div>
        <div className="scroll-area">
          <TypeDoc
            selectedType={selectedType}
            selectedEdgeID={selectedEdgeID}
            typeGraph={typeGraph}
            onTypeLink={this.handleTypeLink}
            onSelectEdge={this.handleSelectEdge}
          />
        </div>
      </div>
    );
  }

  handleSelectEdge = (edgeID) => {
    const { dispatch } = this.props;
    dispatch(selectEdge(edgeID));
  }

  handleFocusType = (type) => {
    const { dispatch } = this.props;
    dispatch(focusElement(type.id));
  }

  handleTypeLink = (type) => {
    let { dispatch } = this.props;

    if (isNode(type)) {
      dispatch(focusElement(type.id));
      dispatch(selectNode(type.id));
    } else {
      dispatch(changeSelectedTypeInfo(type));
    }
  }

  handleNavBackClick = () => {
    const { dispatch, previousType } = this.props;

    if (!previousType) return dispatch(clearSelection());

    dispatch(focusElement(previousType.id));
    dispatch(selectPreviousType());
  }
}

export default connect(mapStateToProps)(DocExplorer);
