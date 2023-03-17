import './LoadingAnimation.css';

import VoyagerIcon from '../icons/logo-with-signals.svg';

export default function LoadingAnimation() {
  return (
    <div role="status" className="loading-box">
      <span className="loading-animation">
        <VoyagerIcon />
        <h1> Transmitting... </h1>
      </span>
    </div>
  );
}
