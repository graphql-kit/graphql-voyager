
import * as React from 'react';

import { Provider } from 'react-redux';

import { store } from '../redux';

import './Voyager.css';
import './viewport.css';

import ErrorBar from './utils/ErrorBar';
import LoadingAnimation from './utils/LoadingAnimation';
import DocPanel from './panel/DocPanel';
import SchemaModal from './settings/SchemaModal';

import { SVGRender } from './../graph/';
import { Viewport } from './../graph/'

import {
  changeSchema
} from '../actions/';

type SchemaProvider = () => Promise<any>;

interface VoyagerProps {
  _schemaPresets?: any;
  schemaProvider: SchemaProvider
}

export default class Voyager extends React.Component<VoyagerProps, void> {

  componentDidMount() {
    // init viewport and svg-renderer
    new SVGRender();
    new Viewport(this.refs['viewport'] as HTMLElement);

    if (this.props.schemaProvider) {
      this.props.schemaProvider().then(schema => {
        store.dispatch(changeSchema(schema));
      });
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
