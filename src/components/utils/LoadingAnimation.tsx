import { Component } from 'react';

import './LoadingAnimation.css';

import VoyagerIcon from '../icons/logo-with-signals.svg';

interface LoadingAnimationProps {
  loading: boolean;
}

export default class LoadingAnimation extends Component<LoadingAnimationProps> {
  render() {
    const { loading } = this.props;
    return (
      <div className={`loading-box ${loading ? 'visible' : ''}`}>
        <span className="loading-animation">
          <VoyagerIcon />
          <h1> Transmitting... </h1>
        </span>
      </div>
    );
  }
}
