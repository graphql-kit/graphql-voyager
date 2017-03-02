import * as _ from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux'

import './Voyager.css';
import './viewport.css';

import ErrorBar from '../utils/ErrorBar';
import LoadingAnimation from '../utils/LoadingAnimation';
import DocPanel from '../DocPanel/DocPanel';

import { SVGRender } from '../../graph/';
import { Viewport } from '../../graph/'

interface VoyagerProps {
  isLoading: boolean;
}

function mapStateToProps(state) {
  return {
    isLoading: (state.currentSvgIndex === null)
  };
}

class Voyager extends React.Component<VoyagerProps, void> {

  componentDidMount() {
    const svgRender = new SVGRender();
    const viewport = new Viewport(this.refs['viewport'] as HTMLElement);
  }

  render() {
    const {
      isLoading
    } = this.props;

    return (
      <div className="graphql-voyager">
        <DocPanel/>
        <div ref="viewport" className="viewport"></div>
        <ErrorBar/>
        <LoadingAnimation loading={isLoading} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Voyager);
