import * as React from 'react';
import { connect } from 'react-redux';

import './DocExplorer.css';

import { selectNode, selectEdge } from '../../actions/';

import { isNode, getTypeGraphSelector } from '../../graph';
import TypeInfoPopover from './TypeInfoPopover';
import PoweredBy from '../utils/PoweredBy';

import TypeList from './TypeList';
import TypeDoc from './TypeDoc';
import FocusTypeButton from './FocusTypeButton';

interface DocExplorerProps {
  header: React.ReactNode;
  selectedTypeID: any;
  selectedEdgeID: string;
  typeGraph: any;
  dispatch: any;
  onFocusNode: any;
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
  state = { navStack: [initialNav], typeForInfoPopover: null };

  static getDerivedStateFromProps(props, state) {
    const { selectedTypeID, typeGraph } = props;

    const { navStack } = state;
    const lastNav = navStack[navStack.length - 1];
    const lastTypeID = lastNav.type ? lastNav.type.id : null;
    if (selectedTypeID !== lastTypeID) {
      if (selectedTypeID == null) {
        return { navStack: [initialNav], typeForInfoPopover: null };
      }

      const type = typeGraph.nodes[selectedTypeID];
      const newNavStack = [...navStack, { title: type.name, type }];

      return { navStack: newNavStack, typeForInfoPopover: null };
    }

    return null;
  }

  render() {
    return (
      <div className="doc-panel">
        <div className="contents">
          {this.props.header}
          {this.renderDocs()}
          <PoweredBy />
        </div>
        <TypeInfoPopover
          type={this.state.typeForInfoPopover}
          onChange={type => this.setState({ typeForInfoPopover: type })}
        />
      </div>
    );
  }

  renderDocs() {
    const { selectedEdgeID, typeGraph, onFocusNode } = this.props;

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
              onFocusType={onFocusNode}
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
              onClick={() => onFocusNode(currentNav.type)}
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

  handleTypeLink = (type) => {
    let { dispatch, onFocusNode } = this.props;

    if (isNode(type)) {
      onFocusNode(type);
      dispatch(selectNode(type.id));
    } else {
      this.setState({ typeForInfoPopover: type });
    }
  }

  handleNavBackClick = () => {
    const { dispatch, onFocusNode } = this.props;
    const newNavStack = this.state.navStack.slice(0, -1);
    const newCurrentNode = newNavStack[newNavStack.length - 1];

    this.setState({ navStack: newNavStack, typeForInfoPopover: null });

    if (newCurrentNode.type == null) return dispatch(selectNode(null));

    onFocusNode(newCurrentNode.type);
    dispatch(selectNode(newCurrentNode.type.id));
  }
}

export default connect(mapStateToProps)(DocExplorer);
