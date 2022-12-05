import { isNode } from '../../graph';

import { Component } from 'react';
import TypeList from './TypeList';
import TypeDoc from './TypeDoc';
import FocusTypeButton from './FocusTypeButton';
import TypeInfoPopover from './TypeInfoPopover';
import OtherSearchResults from './OtherSearchResults';
import SearchBox from '../utils/SearchBox';

import './DocExplorer.css';

interface DocExplorerProps {
  typeGraph: any;
  selectedTypeID: string;
  selectedEdgeID: string;

  onFocusNode: (id: string) => void;
  onSelectNode: (id: string) => void;
  onSelectEdge: (id: string) => void;
}

const initialNav = { title: 'Type List', type: null, searchValue: null };

export default class DocExplorer extends Component<DocExplorerProps> {
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
      const newNavStack = [
        ...navStack,
        { title: type.name, type, searchValue: null },
      ];

      return { navStack: newNavStack, typeForInfoPopover: null };
    }

    return null;
  }

  render() {
    const { typeGraph } = this.props;

    if (!typeGraph) {
      return (
        <div className="type-doc" key={0}>
          <span className="loading"> Loading... </span>
        </div>
      );
    }

    const { navStack } = this.state;
    const previousNav = navStack[navStack.length - 2];
    const currentNav = navStack[navStack.length - 1];

    const name = currentNav.type ? currentNav.type.name : 'Schema';
    return (
      <div className="type-doc" key={navStack.length}>
        {this.renderNavigation(previousNav, currentNav)}
        <SearchBox
          placeholder={`Search ${name}...`}
          value={currentNav.searchValue}
          onSearch={this.handleSearch}
        />
        <div className="scroll-area">
          {this.renderCurrentNav(currentNav)}
          {currentNav.searchValue && (
            <OtherSearchResults
              typeGraph={typeGraph}
              withinType={currentNav.type}
              searchValue={currentNav.searchValue}
              onTypeLink={this.handleTypeLink}
              onFieldLink={this.handleFieldLink}
            />
          )}
        </div>
        {currentNav.type && (
          <TypeInfoPopover
            type={this.state.typeForInfoPopover}
            onChange={(type) => this.setState({ typeForInfoPopover: type })}
          />
        )}
      </div>
    );
  }

  renderCurrentNav(currentNav) {
    const { typeGraph, selectedEdgeID, onSelectEdge, onFocusNode } = this.props;

    if (currentNav.type) {
      return (
        <TypeDoc
          selectedType={currentNav.type}
          selectedEdgeID={selectedEdgeID}
          typeGraph={typeGraph}
          filter={currentNav.searchValue}
          onTypeLink={this.handleTypeLink}
          onSelectEdge={onSelectEdge}
        />
      );
    }

    return (
      <TypeList
        typeGraph={typeGraph}
        filter={currentNav.searchValue}
        onTypeLink={this.handleTypeLink}
        onFocusType={(type) => onFocusNode(type.id)}
      />
    );
  }

  renderNavigation(previousNav, currentNav) {
    const { onFocusNode } = this.props;
    if (previousNav) {
      return (
        <div className="doc-navigation">
          <span className="back" onClick={this.handleNavBackClick}>
            {previousNav.title}
          </span>
          <span className="active" title={currentNav.title}>
            {currentNav.title}
            <FocusTypeButton onClick={() => onFocusNode(currentNav.type.id)} />
          </span>
        </div>
      );
    }

    return (
      <div className="doc-navigation">
        <span className="header">{currentNav.title}</span>
      </div>
    );
  }

  handleSearch = (value) => {
    const navStack = this.state.navStack.slice();
    const currentNav = navStack[navStack.length - 1];
    navStack[navStack.length - 1] = { ...currentNav, searchValue: value };
    this.setState({ navStack });
  };

  handleTypeLink = (type) => {
    const { onFocusNode, onSelectNode } = this.props;

    if (isNode(type)) {
      onFocusNode(type.id);
      onSelectNode(type.id);
    } else {
      this.setState({ typeForInfoPopover: type });
    }
  };

  handleFieldLink = (field, type) => {
    const { onFocusNode, onSelectNode, onSelectEdge } = this.props;

    onFocusNode(type.id);
    onSelectNode(type.id);
    // wait for docs panel to rerender with new edges
    setTimeout(() => onSelectEdge(field.id));
  };

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
  };
}
