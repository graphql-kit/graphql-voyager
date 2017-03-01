import * as _ from 'lodash';
import * as React from "react";
import { connect } from "react-redux"
import * as classNames from 'classnames';

import './voyager.css';

import {
  showIntrospectionModal
} from '../../actions/';

import RaisedButton from 'material-ui/RaisedButton';

import ErrorBar from '../components/ErrorBar';
import TypeDoc from '../components/TypeDoc';
import ExtraTypeInfo from '../components/ExtraTypeInfo';
import LoadingAnimation from '../components/LoadingAnimation';
import LogoIcon from '../icons/logo-small.svg';

import { SVGRender } from '../../graph/';
import { Viewport } from '../../graph/'

interface VoyagerProps {
  isLoading: boolean;
  sortByAlphabet: boolean;
  skipRelay: boolean;
  dispatch: any;
}

function mapStateToProps(state) {
  return {
    isLoading: (state.currentSvgIndex === null),
    sortByAlphabet: state.displayOptions.sortByAlphabet,
    skipRelay: state.displayOptions.skipRelay
  };
}

class Voyager extends React.Component<VoyagerProps, void> {

  componentDidMount() {
    const svgRender = new SVGRender();
    const viewport = new Viewport(this.refs['viewport'] as HTMLElement);
  }

  render() {
    const {
      isLoading,
      sortByAlphabet,
      skipRelay,
      dispatch,
    } = this.props;

    return (
      <div className="graphql-voyager">
        <div className="panel">
          <div>
            <ErrorBar/>
            <div className="title-area">
              <a href="https://github.com/APIs-guru/graphql-voyager">
                <div className="logo">
                  <LogoIcon/>
                  <h2><strong>GraphQL</strong> Voyager</h2>
                </div>
              </a>
              <div ref="panel" className="menu-buttons">
                <RaisedButton label="Change Introspection" primary={true} style={{flex: 1}}
                  onTouchTap={() => dispatch(showIntrospectionModal())}/>
              </div>
            </div>
            <TypeDoc/>
            <div className={classNames({
              'loading-box': true,
              'visible': isLoading
            })}>
              <LoadingAnimation loading={isLoading} />
            </div>
          </div>
          <ExtraTypeInfo/>
        </div>
        <div ref="viewport" id="viewport"></div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Voyager);
