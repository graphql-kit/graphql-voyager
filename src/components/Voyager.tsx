import * as React from 'react';
import { PropTypes } from 'react';
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
import { Viewport } from './../graph/'

import {
  changeSchema,
  reportError,
  changeDisplayOptions
} from '../actions/';

import { typeNameToId } from '../introspection/';

type IntrospectionProvider = (query: string) => Promise<any>;

export interface VoyagerProps {
  _schemaPresets?: any;
  introspection: IntrospectionProvider | Object | boolean;
  displayOptions: {
    rootType: string;
    skipRelay: boolean;
    sortByAlphabet: boolean;
  }
}

export default class Voyager extends React.Component<VoyagerProps, void> {
  static propTypes = {
    introspection: PropTypes.oneOfType([
      PropTypes.func.isRequired,
      PropTypes.object.isRequired,
      PropTypes.bool.isRequired
    ]).isRequired,
    _schemaPresets: PropTypes.object,
    displayOptions: PropTypes.shape({
      rootType: PropTypes.string,
      skipRelay: PropTypes.bool,
      sortByAlphabet: PropTypes.bool
    })
  }

  viewport: Viewport;
  renderer: SVGRender;
  store: Store<any>;

  constructor(props) {
    super(props);
    this.store = configureStore();
  }

  componentDidMount() {
    // init viewport and svg-renderer
    this.renderer = new SVGRender(this.store);
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
        this.store.dispatch(reportError('SchemaProvider did not return a Promise for introspection.'))
      }

      promise.then(schema => {
        debugger;
        if (schema === this.store.schema) return;
        this.store.dispatch(changeSchema(schema, displayOpts));
      });
    } else if (this.props.introspection) {
      this.store.dispatch(changeSchema(this.props.introspection, displayOpts));
    }
  }

  componentDidUpdate(prevProps:VoyagerProps) {
    if (this.props.introspection !== prevProps.introspection) {
      this.updateIntrospection();
      return;
    }
    if (this.props.displayOptions !== prevProps.displayOptions) {
      let opts = normalizeDisplayOptions(this.props.displayOptions);
      this.store.dispatch(changeDisplayOptions(opts));
    }
  }

  render() {
    let {
      _schemaPresets
    } = this.props;

    let showModal = !!_schemaPresets;

    return (
      <Provider store={ this.store }>
        <div className="graphql-voyager">
          <DocPanel _showChangeButton={!!_schemaPresets}/>
          <div ref="viewport" className="viewport"></div>
          <ErrorBar/>
          <LoadingAnimation/>
          { showModal && <SchemaModal presets={_schemaPresets}/> }
        </div>
      </Provider>
    );
  }
}

// Duck-type promise detection.
function isPromise(value) {
  return typeof value === 'object' && typeof value.then === 'function';
}


function normalizeDisplayOptions(opts: any) {
  opts = opts || {};
  return {
    rootTypeId: opts.rootType && typeNameToId(opts.rootType),
    skipRelay: opts.skipRelay,
    sortByAlphabet: opts.sortByAlphabet
  }
}
