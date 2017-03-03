import * as React from 'react';
import { connect } from 'react-redux'

import './TitleArea.css';

import {
  showIntrospectionModal
} from '../../actions/';

import LogoIcon from '../icons/logo-small.svg';

import { Button } from 'react-toolbox/lib/button';

interface TitleAreaProps {
  dispatch: any;
}


class TitleArea extends React.Component<TitleAreaProps, void> {
  render() {
    const {
      dispatch,
    } = this.props;
    return (
      <div className="title-area">
        <a href="https://github.com/APIs-guru/graphql-voyager">
          <div className="logo">
            <LogoIcon/>
            <h2 className="title"><strong>GraphQL</strong> Voyager</h2>
          </div>
        </a>
        <Button className="choosebutton" raised primary label="Change Introspection"
          onClick={() => dispatch(showIntrospectionModal())}/>
      </div>
    )
  }
}

export default connect()(TitleArea);
