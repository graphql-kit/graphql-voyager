import { isNode } from '../../graph';

import * as React from 'react';
import TypeList from './TypeList';
import TypeDoc from './TypeDoc';
import FocusTypeButton from './FocusTypeButton';
import TypeInfoPopover from './TypeInfoPopover';

import './DocExplorer.css';

interface DocExplorerProps {
  typeGraph: any;
  selectedTypeID: string;
  selectedEdgeID: string;

  onFocusNode: (id: string) => void;
  onSelectNode: (id: string) => void;
  onSelectEdge: (id: string) => void;
}

const initialNav = { title: 'Type List', type: null };

export default class DocExplorer extends React.Component<DocExplorerProps> {
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
    const {
      selectedEdgeID,
      typeGraph,
      onFocusNode,
      onSelectEdge,
    } = this.props;

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
              onFocusType={type => onFocusNode(type.id)}
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
              onClick={() => onFocusNode(currentNav.type.id)}
            />
          </span>
        </div>
        <div className="scroll-area">
          <TypeDoc
            selectedType={currentNav.type}
            selectedEdgeID={selectedEdgeID}
            typeGraph={typeGraph}
            onTypeLink={this.handleTypeLink}
            onSelectEdge={onSelectEdge}
          />
        </div>
        <TypeInfoPopover
            type={this.state.typeForInfoPopover}
            onChange={type => this.setState({ typeForInfoPopover: type })}
          />
      </div>
    );
  }

  handleTypeLink = (type) => {
    let { onFocusNode, onSelectNode } = this.props;

    if (isNode(type)) {
      onFocusNode(type.id);
      onSelectNode(type.id);
    } else {
      this.setState({ typeForInfoPopover: type });
    }
  }

  handleNavBackClick = () => {
    const { onFocusNode, onSelectNode } = this.props;
    const newNavStack = this.state.navStack.slice(0, -1);
    const newCurrentNode = newNavStack[newNavStack.length - 1];

    this.setState({ navStack: newNavStack, typeForInfoPopover: null });

    if (newCurrentNode.type == null) {
      return onSelectNode(null);
    }

    onFocusNode(newCurrentNode.type.id);
    onSelectNode(newCurrentNode.type.id);
  }
}
