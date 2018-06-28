import * as React from 'react';

import './Logo.css';
import LogoIcon from './icons/logo-small.svg';

export default class TitleArea extends React.Component {
  render() {
    return (
      <div className="title-area">
        <a href="https://github.com/APIs-guru/graphql-voyager" target="_blank">
          <div className="logo">
            <LogoIcon />
            <h2 className="title">
              <strong>GraphQL</strong> Voyager
            </h2>
          </div>
        </a>
      </div>
    );
  }
}