import * as React from 'react';
import { connect } from 'react-redux';

import './DocExplorer.css';

import {
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
  selectedTypeID: any;
  selectedEdgeID: string;
  typeGraph: any;
  dispatch: any;
}

function mapStateToProps(state) {
  return {
    selectedTypeID: state.selected.currentNodeId,
    selectedEdgeID: state.selected.currentEdgeId,
    typeGraph: getTypeGraphSelector(state),
  };
}

const initialNav = { title: 'Type List', type: null };

class DocExplorer extends React.Component<DocExplorerProps> {
  state = { navStack: [initialNav] };

  static getDerivedStateFromProps(props, state) {
    const { selectedTypeID, typeGraph } = props;

    const { navStack } = state;
    const lastNav = navStack[navStack.length - 1];
    const lastTypeID = lastNav.type ? lastNav.type.id : null;
    if (selectedTypeID !== lastTypeID) {
      if (selectedTypeID == null) {
        return { navStack: [initialNav] };
      }

      const type = typeGraph.nodes[selectedTypeID];
      const newNavStack = [...navStack, { title: type.name, type }];

      return { navStack: newNavStack };
    }

    return null;
  }

  render() {
    const { selectedEdgeID, typeGraph } = this.props;

    if (!typeGraph) {
      return (
        <div className="type-doc">
          <span className="loading"> Loading... </span>;
        </div>
      );
    }

    const { navStack } = this.state;
    const previousNav = navStack[navStack.length - 2];

    if (!previousNav) {
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

    const currentNav = navStack[navStack.length - 1];
    return (
      <div className="type-doc">
        <div className="doc-navigation">
          <span className="back" onClick={this.handleNavBackClick}>
            {previousNav.title}
          </span>
          <span className="active">
            {currentNav.type.name}
            <FocusTypeButton
              onClick={() => this.handleFocusType(currentNav.type)}
            />
          </span>
        </div>
        <div className="scroll-area">
          <TypeDoc
            selectedType={currentNav.type}
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
    const { dispatch } = this.props;
    const newNavStack = this.state.navStack.slice(0, -1);
    const newCurrentNode = newNavStack[newNavStack.length - 1];

    this.setState({ navStack: newNavStack });

    if (newCurrentNode.type == null) return dispatch(selectNode(null));

    const id = newCurrentNode.type.id;
    dispatch(focusElement(id));
    dispatch(selectNode(id));
  }
}

export default connect(mapStateToProps)(DocExplorer);
