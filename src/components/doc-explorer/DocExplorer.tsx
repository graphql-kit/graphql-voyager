import './DocExplorer.css';

import { assertCompositeType, GraphQLNamedType } from 'graphql/type';
import { Component } from 'react';

import { isNode, TypeGraph } from '../../graph';
import { extractTypeName, typeObjToId } from '../../introspection/utils';
import SearchBox from '../utils/SearchBox';
import FocusTypeButton from './FocusTypeButton';
import OtherSearchResults from './OtherSearchResults';
import TypeDoc from './TypeDoc';
import TypeInfoPopover from './TypeInfoPopover';
import TypeList from './TypeList';

interface DocExplorerProps {
  typeGraph: TypeGraph;
  selectedTypeID: string;
  selectedEdgeID: string;

  onFocusNode: (id: string) => void;
  onSelectNode: (id: string) => void;
  onSelectEdge: (id: string) => void;
}

interface NavStackItem {
  title: string;
  type: GraphQLNamedType | null;
  searchValue: string | null;
}

interface DocExplorerState {
  navStack: ReadonlyArray<NavStackItem>;
  typeForInfoPopover: GraphQLNamedType;
}

const initialNav = { title: 'Type List', type: null, searchValue: null };

export default class DocExplorer extends Component<
  DocExplorerProps,
  DocExplorerState
> {
  state: DocExplorerState = {
    navStack: [initialNav],
    typeForInfoPopover: null,
  };

  static getDerivedStateFromProps(
    props: DocExplorerProps,
    state: DocExplorerState,
  ) {
    const { selectedTypeID, typeGraph } = props;

    const { navStack } = state;
    const lastNav = navStack[navStack.length - 1];
    const type =
      selectedTypeID != null
        ? assertCompositeType(
            typeGraph.nodes.get(extractTypeName(selectedTypeID)),
          )
        : null;

    if (type !== lastNav.type) {
      if (type == null) {
        return { navStack: [initialNav], typeForInfoPopover: null };
      }

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

    if (typeGraph == null) {
      return (
        <div className="type-doc" key={0}>
          <span className="loading"> Loading... </span>
        </div>
      );
    }

    const { navStack } = this.state;
    const previousNav = navStack.at(-2);
    const currentNav = navStack.at(-1);

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

  renderCurrentNav(currentNav: NavStackItem) {
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
        onFocusType={(type) => onFocusNode(typeObjToId(type))}
      />
    );
  }

  renderNavigation(previousNav: NavStackItem, currentNav: NavStackItem) {
    const { onFocusNode } = this.props;
    if (previousNav) {
      return (
        <div className="doc-navigation">
          <span className="back" onClick={this.handleNavBackClick}>
            {previousNav.title}
          </span>
          <span className="active" title={currentNav.title}>
            {currentNav.title}
            <FocusTypeButton
              onClick={() => onFocusNode(typeObjToId(currentNav.type))}
            />
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

  handleSearch = (value: string) => {
    const navStack = this.state.navStack.slice();
    const currentNav = navStack[navStack.length - 1];
    navStack[navStack.length - 1] = { ...currentNav, searchValue: value };
    this.setState({ navStack });
  };

  handleTypeLink = (type: GraphQLNamedType) => {
    const { onFocusNode, onSelectNode } = this.props;

    if (isNode(type)) {
      onFocusNode(typeObjToId(type));
      onSelectNode(typeObjToId(type));
    } else {
      this.setState({ typeForInfoPopover: type });
    }
  };

  handleFieldLink = (type: GraphQLNamedType, fieldID: string) => {
    const { onFocusNode, onSelectNode, onSelectEdge } = this.props;

    onFocusNode(typeObjToId(type));
    onSelectNode(typeObjToId(type));
    // wait for docs panel to rerender with new edges
    setTimeout(() => onSelectEdge(fieldID));
  };

  handleNavBackClick = () => {
    const { onFocusNode, onSelectNode } = this.props;
    const newNavStack = this.state.navStack.slice(0, -1);
    const newCurrentNode = newNavStack[newNavStack.length - 1];

    this.setState({ navStack: newNavStack, typeForInfoPopover: null });

    if (newCurrentNode.type == null) {
      return onSelectNode(null);
    }

    onFocusNode(typeObjToId(newCurrentNode.type));
    onSelectNode(typeObjToId(newCurrentNode.type));
  };
}
