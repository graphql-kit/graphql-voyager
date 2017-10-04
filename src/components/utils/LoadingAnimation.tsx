import * as React from 'react';
import { connect } from 'react-redux';
import * as classNames from 'classnames';

import './LoadingAnimation.css';

import VoyagerIcon from '../icons/logo-with-signals.svg';

interface LoadingAnimationProps {
  loading: boolean;
}

function mapStateToProps(state) {
  return {
    loading: state.currentSvgIndex === null,
  };
}

class LoadingAnimation extends React.Component<LoadingAnimationProps> {
  shouldComponentUpdate(nextProps) {
    return this.props.loading !== nextProps.loading;
  }

  render() {
    const loading = this.props.loading;
    return (
      <div
        className={classNames({
          'loading-box': true,
          visible: loading,
        })}
      >
        <span className="loading-animation">
          <VoyagerIcon />
          <h1> Transmitting... </h1>
        </span>
      </div>
    );
  }
}

export default connect(mapStateToProps)(LoadingAnimation);
