import * as React from 'react';
import { connect } from 'react-redux';

import './TitleArea.css';
import LogoIcon from '../icons/logo-small.svg';

interface TitleAreaProps {
  _showChangeButton: boolean;
}

class TitleArea extends React.Component<TitleAreaProps> {
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

export default connect()(TitleArea);
