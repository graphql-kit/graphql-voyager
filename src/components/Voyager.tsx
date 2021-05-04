import {
  SVGRender,
  extractTypeId,
  fixConstants
} from '../graph/'
import { WorkerCallback } from '../utils/types';

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { theme } from './MUITheme';
import { MuiThemeProvider } from '@material-ui/core/styles';

import GraphViewport from './GraphViewport';
import DocExplorer from './doc-explorer/DocExplorer';
import PoweredBy from './utils/PoweredBy';

import './Voyager.css';
import './viewport.css';

export interface VoyagerDisplayOptions {
  rootType?: string;
  skipRelay?: boolean;
  skipDeprecated?: boolean;
  showLeafFields?: boolean;
  sortByAlphabet?: boolean;
  hideRoot?: boolean;
}

const defaultDisplayOptions = {
  rootType: "Root",
  skipRelay: true,
  skipDeprecated: true,
  sortByAlphabet: false,
  showLeafFields: true,
  hideRoot: true,
};

function normalizeDisplayOptions(options) {
  return options != null
    ? { ...defaultDisplayOptions, ...options }
    : defaultDisplayOptions;
}

export interface VoyagerProps {
  displayOptions?: VoyagerDisplayOptions;
  hideDocs?: boolean;
  hideSettings?: boolean;
  workerURI?: string;
  loadWorker?: WorkerCallback;
  typeGraph: any

  children?: React.ReactNode;
}

export default class Voyager extends React.Component<VoyagerProps> {
  static propTypes = {
    displayOptions: PropTypes.shape({
      rootType: PropTypes.string,
      skipRelay: PropTypes.bool,
      skipDeprecated: PropTypes.bool,
      sortByAlphabet: PropTypes.bool,
      hideRoot: PropTypes.bool,
      showLeafFields: PropTypes.bool,
    }),
    hideDocs: PropTypes.bool,
    hideSettings: PropTypes.bool,
    workerURI: PropTypes.string,
    loadWorker: PropTypes.func,
  };

  state = {
    typeGraph: null,
    displayOptions: defaultDisplayOptions,
    selectedTypeID: null,
    selectedEdgeID: null,
  };

  svgRenderer: SVGRender;
  viewportRef = React.createRef<GraphViewport>();

  constructor(props) {
    super(props);
    this.svgRenderer = new SVGRender(
      this.props.workerURI,
      this.props.loadWorker,
    );
  }

  componentDidMount() {
    const displayOptions = normalizeDisplayOptions(this.props.displayOptions);

    const typeGraph = this.props.typeGraph
    for (let id in typeGraph.nodes) {
      fixConstants(typeGraph.nodes[id])
    }
    
    this.setState({
      typeGraph,
      displayOptions,
      selectedTypeID: null,
      selectedEdgeID: null,
    });
  }

  componentDidUpdate(prevProps: VoyagerProps) {
    if (this.props.hideDocs !== prevProps.hideDocs) {
      this.viewportRef.current.resize();
    }
  }

  render() {
    const { hideDocs = false } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div className="graphql-voyager">
          {!hideDocs && this.renderPanel()}
          {this.renderGraphViewport()}
        </div>
      </MuiThemeProvider>
    );
  }

  renderPanel() {
    const children = React.Children.toArray(this.props.children);
    const panelHeader = children.find(
      (child: React.ReactElement<any>) => child.type === Voyager.PanelHeader,
    );

    const { typeGraph, selectedTypeID, selectedEdgeID } = this.state
    const onFocusNode = (id) => this.viewportRef.current.focusNode(id);

    return (
      <div className="doc-panel">
        <div className="contents">
          {panelHeader}
          <DocExplorer
            typeGraph={typeGraph}
            selectedTypeID={selectedTypeID}
            selectedEdgeID={selectedEdgeID}
            onFocusNode={onFocusNode}
            onSelectNode={this.handleSelectNode}
            onSelectEdge={this.handleSelectEdge}
          />
          <PoweredBy />
        </div>
      </div>
    );
  }
  
  renderGraphViewport() {
    const {
      displayOptions,
      typeGraph,
      selectedTypeID,
      selectedEdgeID,
    } = this.state;

    //if (typeGraph) {
    //  //const releaseDate = typeGraph.nodes["TYPE::Film"].fields["releaseDate"]
    //  //const arrayType: SimplifiedField<GraphQLScalarType> = {
    //  //  description: 
    //  //}
    //  //console.log(typeGraph.nodes, typeGraph.nodes["TYPE::Film"].fields["releaseDate"] as SimplifiedField<any>)
    //  console.log(typeGraph.nodes, typeGraph.nodes["TYPE::Film"].fields["planetConnection"] as SimplifiedField<any>)
    //  const planetConnection = typeGraph.nodes["TYPE::Film"].fields["planetConnection"] as SimplifiedField<any>
    //  planetConnection.typeWrappers.push("EMBEDDED")
    //  //debugger
    //}

    return (
      <GraphViewport
        svgRenderer={this.svgRenderer}
        typeGraph={typeGraph}
        displayOptions={displayOptions}
        selectedTypeID={selectedTypeID}
        selectedEdgeID={selectedEdgeID}
        onSelectNode={this.handleSelectNode}
        onSelectEdge={this.handleSelectEdge}
        ref={this.viewportRef}
      />
    );
  }

  handleSelectNode = (selectedTypeID) => {
    if (selectedTypeID !== this.state.selectedTypeID) {
      this.setState({ selectedTypeID, selectedEdgeID: null });
    }
  };

  handleSelectEdge = (selectedEdgeID) => {
    if (selectedEdgeID === this.state.selectedEdgeID) {
      // deselect if click again
      this.setState({ selectedEdgeID: null });
    } else {
      const selectedTypeID = extractTypeId(selectedEdgeID);
      this.setState({ selectedTypeID, selectedEdgeID });
    }
  };

  static PanelHeader = (props) => {
    return props.children || null;
  };
}
