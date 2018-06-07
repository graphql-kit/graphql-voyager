import * as React from 'react';
import { connect } from 'react-redux';

import './TitleArea.css';

import { showSchemaModal } from '../../actions/';

import LogoIcon from '../icons/logo-small.svg';

import { Button } from 'react-toolbox/lib/button';

interface TitleAreaProps {
  _showChangeButton: boolean;
  dispatch: any;
}

class TitleArea extends React.Component<TitleAreaProps> {
  render() {
    const { dispatch, _showChangeButton } = this.props;
    return (
      <div className="title-area">
        <a href="https://github.com/APIs-guru/graphql-voyager">
          <div className="logo">
            <LogoIcon />
            <h2 className="title">
              <strong>GraphQL</strong> Voyager
            </h2>
          </div>
        </a>
        {_showChangeButton && (
          <Button
            className="choosebutton"
            raised
            primary
            label="Change Schema"
            onClick={() => dispatch(showSchemaModal())}
          />
        )}
      </div>
    );
  }
}

export default connect()(TitleArea);
