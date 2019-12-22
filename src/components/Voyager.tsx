import { introspectionQuery } from 'graphql/utilities';
import { GraphQLSchema } from 'graphql';

import { getSchema, prepareSchema, extractTypeId } from '../introspection';
import { SVGRender, getTypeGraph } from '../graph/';
import { WorkerCallback } from '../utils/types';

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { theme } from './MUITheme';
import { MuiThemeProvider } from '@material-ui/core/styles';

import GraphViewport from './GraphViewport';
import DocExplorer from './doc-explorer/DocExplorer';
import PoweredBy from './utils/PoweredBy';
import Settings from './settings/Settings';

import './Voyager.css';
import './viewport.css';

type IntrospectionProvider = (query: string) => Promise<Object>;

export interface VoyagerDisplayOptions {
  rootType?: string;
  skipRelay?: boolean;
  skipDeprecated?: boolean;
  showLeafFields?: boolean;
  sortByAlphabet?: boolean;
  hideRoot?: boolean;
}

const defaultDisplayOptions = {
  rootType: undefined,
  skipRelay: true,
  skipDeprecated: true,
  sortByAlphabet: false,
  showLeafFields: true,
  hideRoot: false,
};

function normalizeDisplayOptions(options) {
  return options != null ? { ...defaultDisplayOptions, ...options } : defaultDisplayOptions;
}

export interface VoyagerProps {
  fetcher?: IntrospectionProvider;
  schema?: GraphQLSchema;
  displayOptions?: VoyagerDisplayOptions;
  hideDocs?: boolean;
  hideSettings?: boolean;
  workerURI?: string;
  loadWorker?: WorkerCallback;

  children?: React.ReactNode;
}

export default class Voyager extends React.Component<VoyagerProps> {
  static propTypes = {
    fetcher: PropTypes.func.isRequired,
    schema: PropTypes.object,
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
    introspectionData: null,
    schema: null,
    typeGraph: null,
    displayOptions: defaultDisplayOptions,
    selectedTypeID: null,
    selectedEdgeID: null,
  };

  svgRenderer: SVGRender;
  viewportRef = React.createRef<GraphViewport>();
  instospectionPromise = null;

  constructor(props) {
    super(props);
    this.svgRenderer = new SVGRender(this.props.workerURI, this.props.loadWorker);
  }

  componentDidMount() {
    if (this.props.schema) {
      const displayOptions = normalizeDisplayOptions(this.props.displayOptions);

      this.updateSchema(
        prepareSchema(
          this.props.schema,
          displayOptions.sortByAlphabet,
          displayOptions.skipRelay,
          displayOptions.skipDeprecated,
        ),
        displayOptions,
      );
    } else if (this.props.fetcher) {
      this.fetchIntrospection();
    }
  }

  fetchIntrospection() {
    const displayOptions = normalizeDisplayOptions(this.props.displayOptions);

    let promise = this.props.fetcher(introspectionQuery);

    if (!isPromise(promise)) {
      throw new Error('SchemaProvider did not return a Promise for introspection.');
    }

    this.setState({
      introspectionData: null,
      schema: null,
      typeGraph: null,
      displayOptions: null,
      selectedTypeID: null,
      selectedEdgeID: null,
    });

    this.instospectionPromise = promise;
    promise.then(introspectionData => {
      if (promise === this.instospectionPromise) {
        this.instospectionPromise = null;
        this.updateIntrospection(introspectionData, displayOptions);
      }
    });
  }

  updateIntrospection(introspectionData, displayOptions) {
    const schema = getSchema(
      introspectionData,
      displayOptions.sortByAlphabet,
      displayOptions.skipRelay,
      displayOptions.skipDeprecated,
    );

    this.updateSchema(schema, displayOptions);

    this.setState({
      introspectionData,
    });
  }

  updateSchema(schema, displayOptions) {
    const typeGraph = getTypeGraph(schema, displayOptions.rootType, displayOptions.hideRoot);

    this.setState({
      schema,
      typeGraph,
      displayOptions,
      selectedTypeID: null,
      selectedEdgeID: null,
    });
  }

  componentDidUpdate(prevProps: VoyagerProps) {
    const displayOptions = normalizeDisplayOptions(this.props.displayOptions);

    if (this.props.schema && this.props.schema !== prevProps.schema) {
      this.updateSchema(
        prepareSchema(
          this.props.schema,
          displayOptions.sortByAlphabet,
          displayOptions.skipRelay,
          displayOptions.skipDeprecated,
        ),
        displayOptions,
      );
    } else if (
      this.state.introspectionData &&
      this.props.displayOptions !== prevProps.displayOptions
    ) {
      this.updateIntrospection(
        this.state.introspectionData,
        normalizeDisplayOptions(this.props.displayOptions),
      );
    }

    if (this.props.hideDocs !== prevProps.hideDocs) {
      this.viewportRef.current.resize();
    }
  }

  render() {
    const { hideDocs = false, hideSettings = false } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div className="graphql-voyager">
          {!hideDocs && this.renderPanel()}
          {!hideSettings && this.renderSettings()}
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

    const { typeGraph, selectedTypeID, selectedEdgeID } = this.state;
    const onFocusNode = id => this.viewportRef.current.focusNode(id);

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

  renderSettings() {
    const { schema, displayOptions } = this.state;

    if (schema == null) return null;

    return (
      <Settings
        schema={schema}
        options={displayOptions}
        onChange={this.handleDisplayOptionsChange}
      />
    );
  }

  renderGraphViewport() {
    const { displayOptions, typeGraph, selectedTypeID, selectedEdgeID } = this.state;

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

  handleDisplayOptionsChange = delta => {
    const displayOptions = { ...this.state.displayOptions, ...delta };
    this.updateIntrospection(this.state.introspectionData, displayOptions);
  };

  handleSelectNode = selectedTypeID => {
    if (selectedTypeID !== this.state.selectedTypeID) {
      this.setState({ selectedTypeID, selectedEdgeID: null });
    }
  };

  handleSelectEdge = selectedEdgeID => {
    if (selectedEdgeID === this.state.selectedEdgeID) {
      // deselect if click again
      this.setState({ selectedEdgeID: null });
    } else {
      const selectedTypeID = extractTypeId(selectedEdgeID);
      this.setState({ selectedTypeID, selectedEdgeID });
    }
  };

  static PanelHeader = props => {
    return props.children || null;
  };
}

// Duck-type promise detection.
function isPromise(value) {
  return typeof value === 'object' && typeof value.then === 'function';
}
