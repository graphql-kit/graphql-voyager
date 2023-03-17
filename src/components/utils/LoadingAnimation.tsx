import { Component } from 'react';

import './LoadingAnimation.css';

import VoyagerIcon from '../icons/logo-with-signals.svg';

export default class LoadingAnimation extends Component {
  render() {
    return (
      <div role="status" className="loading-box">
        <span className="loading-animation">
          <VoyagerIcon />
          <h1> Transmitting... </h1>
        </span>
      </div>
    );
  }
}
