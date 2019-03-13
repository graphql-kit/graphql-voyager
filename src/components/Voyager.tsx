import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as _ from 'lodash';

import { introspectionQuery } from 'graphql/utilities';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { configureStore } from '../redux';

import './Voyager.css';
import './viewport.css';

import ErrorBar from './utils/ErrorBar';
import LoadingAnimation from './utils/LoadingAnimation';
import DocPanel from './panel/DocPanel';

import { SVGRender } from './../graph/';
import { Viewport } from './../graph/';

import { changeSchema, reportError, changeDisplayOptions } from '../actions/';

import { typeNameToId } from '../introspection/';
import { StateInterface } from '../reducers';

import { WorkerCallback } from '../utils/types';
import Settings from './settings/Settings';
import { theme } from './MUITheme';

type IntrospectionProvider = (query: string) => Promise<any>;

export interface VoyagerDisplayOptions {
  rootType?: string;
  skipRelay?: boolean;
  showLeafFields?: boolean;
  sortByAlphabet?: boolean;
  hideRoot?: boolean;
}

export interface VoyagerProps {
  _schemaPresets?: any;
  introspection: IntrospectionProvider | Object | boolean;
  displayOptions?: VoyagerDisplayOptions;
  hideDocs?: boolean;
  hideSettings?: boolean;
  workerURI?: string;
  loadWorker?: WorkerCallback;

  children?: React.ReactNode;
}

export default class Voyager extends React.Component<VoyagerProps> {
  static propTypes = {
    introspection: PropTypes.oneOfType([
      PropTypes.func.isRequired,
      PropTypes.object.isRequired,
      PropTypes.bool.isRequired,
    ]).isRequired,
    _schemaPresets: PropTypes.object,
    displayOptions: PropTypes.shape({
      rootType: PropTypes.string,
      skipRelay: PropTypes.bool,
      sortByAlphabet: PropTypes.bool,
      hideRoot: PropTypes.bool,
      showLeafFields: PropTypes.bool,
    }),
    hideDocs: PropTypes.bool,
    hideSettings: PropTypes.bool,
    workerURI: PropTypes.string,
    loadWorker: PropTypes.func,
  };

  viewport: Viewport;
  store: Store<StateInterface>;

  constructor(props) {
    super(props);
    this.store = configureStore();
  }

  componentDidMount() {
    // init viewport and svg-renderer
    const renderer = new SVGRender(this.props.workerURI, this.props.loadWorker);
    this.viewport = new Viewport(this.store, renderer, this.refs['viewport'] as HTMLElement);

    this.updateIntrospection();
  }

  componentWillUnmount() {
    this.viewport.destroy();
  }

  updateIntrospection() {
    let displayOpts = normalizeDisplayOptions(this.props.displayOptions);
    if (_.isFunction(this.props.introspection)) {
      let promise = (this.props.introspection as IntrospectionProvider)(introspectionQuery);

      if (!isPromise(promise)) {
        this.store.dispatch(
          reportError('SchemaProvider did not return a Promise for introspection.'),
        );
      }

      promise.then(schema => {
        if (schema === this.store.getState().schema) return;
        this.store.dispatch(changeSchema(schema, displayOpts));
      });
    } else if (this.props.introspection) {
      this.store.dispatch(changeSchema(this.props.introspection, displayOpts));
    }
  }

  componentDidUpdate(prevProps: VoyagerProps) {
    if (this.props.introspection !== prevProps.introspection) {
      this.updateIntrospection();
      return;
    }
    if (this.props.displayOptions !== prevProps.displayOptions) {
      let opts = normalizeDisplayOptions(this.props.displayOptions);
      this.store.dispatch(changeDisplayOptions(opts));
    }

    if (this.props.hideDocs !== prevProps.hideDocs) {
      this.viewport.resize();
    }
  }

  render() {
    let { hideDocs = false, hideSettings } = this.props;

    const children = React.Children.toArray(this.props.children);

    const panelHeader = children.find(
      (child: React.ReactElement<any>) => child.type === Voyager.PanelHeader,
    );

    return (
      <Provider store={this.store}>
        <MuiThemeProvider theme={theme}>
          <div className="graphql-voyager">
            {!hideDocs && <DocPanel header={panelHeader} />}
            {!hideSettings && <Settings />}
            <div ref="viewport" className="viewport" />
            <ErrorBar />
            <LoadingAnimation />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }

  static PanelHeader = props => {
    return props.children || null;
  };
}

// Duck-type promise detection.
function isPromise(value) {
  return typeof value === 'object' && typeof value.then === 'function';
}

function normalizeDisplayOptions(opts: VoyagerDisplayOptions = {}) {
  return {
    ...opts,
    rootTypeId: opts.rootType && typeNameToId(opts.rootType),
  };
}
