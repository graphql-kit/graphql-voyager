import * as React from 'react';

import VoyagerIcon from '../icons/logo-with-signals.svg';

interface LoadingAnimationProps {
  loading: boolean;
}


export default class LoadingAnimation extends React.Component<LoadingAnimationProps, void> {
  shouldComponentUpdate(nextProps) {
    return this.props.loading !== nextProps.loading;
  }

  render() {
    const loading = this.props.loading;

    return (
      <div className='loading-animation'>
        <VoyagerIcon />
        <h1> Transmitting... </h1>
      </div>
    );
  }
}
