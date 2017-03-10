import * as React from 'react';
import { PropTypes } from 'react';
import * as _ from 'lodash';

import { Provider } from 'react-redux';

import { store } from '../redux';

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
  reportError
} from '../actions/';

type IntrospectionProvider = (query: string) => Promise<any>;

export interface VoyagerProps {
  _schemaPresets?: any;
  introspection: IntrospectionProvider | Object | boolean;
}

export default class Voyager extends React.Component<VoyagerProps, void> {

  static propTypes = {
    introspection: PropTypes.oneOfType([
      PropTypes.func.isRequired,
      PropTypes.object.isRequired,
      PropTypes.bool.isRequired
    ]).isRequired,
    _schemaPresets: PropTypes.object
  }

  viewport: Viewport;
  renderer: SVGRender;

  componentDidMount() {
    // init viewport and svg-renderer
    this.renderer = new SVGRender();
    this.viewport = new Viewport(this.refs['viewport'] as HTMLElement);

    this.updateIntrospection();
  }

  componentWillUnmount() {
    this.viewport.destroy();
    this.renderer.unsubscribe();
  }

    if (_.isFunction(this.props.introspection)) {
      let promise = (this.props.introspection as IntrospectionProvider)(introspectionQuery);

      if (!isPromise(promise)) {
        store.dispatch(reportError('SchemaProvider did not return a Promise for introspection.'))
      }

      promise.then(schema => {
        store.dispatch(changeSchema(schema));
      });
    } else if (this.props.introspection) {
      store.dispatch(changeSchema(this.props.introspection));
    }
  }

  render() {
    let {
      _schemaPresets
    } = this.props;

    let showModal = !!_schemaPresets;

    return (
      <Provider store={ store }>
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
