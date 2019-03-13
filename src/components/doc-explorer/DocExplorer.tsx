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
  previousTypeID: string;
  selectedTypeID: string;
  selectedEdgeID: string;
  typeGraph: any;
  dispatch: any;
}

function mapStateToProps(state) {
  const previousTypesIds = state.selected.previousTypesIds;
  return {
    previousTypeID: previousTypesIds[previousTypesIds.length - 1],
    selectedTypeID: state.selected.currentNodeId,
    selectedEdgeID: state.selected.currentEdgeId,
    typeGraph: getTypeGraphSelector(state),
  };
}

class DocExplorer extends React.Component<DocExplorerProps> {
  render() {
    const { previousTypeID, selectedTypeID, selectedEdgeID, typeGraph } = this.props;

    if (!typeGraph) {
      return (
        <div className="type-doc">
          <span className="loading"> Loading... </span>;
        </div>
      );
    }

    if (!selectedTypeID) {
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

    const selectedType = typeGraph.nodes[selectedTypeID];
    return (
      <div className="type-doc">
        <div className="doc-navigation">
          <span className="back" onClick={this.handleNavBackClick}>
            {previousTypeID ? typeGraph.nodes[previousTypeID].name : 'Type List'}
          </span>
          <span className="active">
            {selectedType.name}
            <FocusTypeButton
              onClick={() => this.handleFocusType(selectedType.id)}
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

  handleFocusType = (typeID) => {
    const { dispatch } = this.props;
    dispatch(focusElement(typeID));
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
    const { dispatch, previousTypeID } = this.props;

    if (!previousTypeID) return dispatch(clearSelection());

    dispatch(focusElement(previousTypeID));
    dispatch(selectPreviousType());
  }
}

export default connect(mapStateToProps)(DocExplorer);
