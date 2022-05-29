import * as React from 'react';
import * as classNames from 'classnames';

import './LoadingAnimation.css';

import VoyagerIcon from '../icons/logo-with-signals.svg';

interface LoadingAnimationProps {
  loading: boolean;
}

export default class LoadingAnimation extends React.Component<LoadingAnimationProps> {
  render() {
    const { loading } = this.props;
    return (
      <div className={classNames({ 'loading-box': true, visible: loading })}>
        <span className="loading-animation">
          <VoyagerIcon />
          <h1> Transmitting... </h1>
        </span>
      </div>
    );
  }
}
