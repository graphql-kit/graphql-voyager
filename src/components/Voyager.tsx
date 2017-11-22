import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as _ from 'lodash';

import { Provider, Store } from 'react-redux';

import { configureStore } from '../redux';

import { introspectionQuery } from 'graphql/utilities';

import './Voyager.css';
import './viewport.css';

import ErrorBar from './utils/ErrorBar';
import LoadingAnimation from './utils/LoadingAnimation';
import DocPanel from './panel/DocPanel';
import SchemaModal from './settings/SchemaModal';

import { SVGRender } from './../graph/';
import { Viewport } from './../graph/';

import { changeSchema, reportError, changeDisplayOptions } from '../actions/';

import { typeNameToId } from '../introspection/';
import { StateInterface } from '../reducers';

type IntrospectionProvider = (query: string) => Promise<any>;

export interface VoyagerDisplayOptions {
  rootType?: string;
  skipRelay?: boolean;
  sortByAlphabet?: boolean;
  hideRoot?: boolean;
}

export interface VoyagerProps {
  _schemaPresets?: any;
  introspection: IntrospectionProvider | Object | boolean;
  displayOptions?: VoyagerDisplayOptions;
  hideDocs?: boolean;
  workerURI?: string;
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
    }),
    hideDocs: PropTypes.bool,
    workerURI: PropTypes.string
  };

  viewport: Viewport;
  renderer: SVGRender;
  store: Store<StateInterface>;

  constructor(props) {
    super(props);
    this.store = configureStore();
  }

  componentDidMount() {
    // init viewport and svg-renderer
    this.renderer = new SVGRender(this.store, this.props.workerURI);
    this.viewport = new Viewport(this.store, this.refs['viewport'] as HTMLElement);

    this.updateIntrospection();
  }

  componentWillUnmount() {
    this.viewport.destroy();
    this.renderer.unsubscribe();
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
    let { _schemaPresets, hideDocs = false } = this.props;

    let showModal = !!_schemaPresets;

    return (
      <Provider store={this.store}>
        <div className="graphql-voyager">
          {!hideDocs && <DocPanel _showChangeButton={!!_schemaPresets} />}
          <div ref="viewport" className="viewport" />
          <ErrorBar />
          <LoadingAnimation />
          {showModal && <SchemaModal presets={_schemaPresets} />}
        </div>
      </Provider>
    );
  }
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
