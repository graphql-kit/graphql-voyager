import * as React from 'react';
import { connect } from 'react-redux'

import {
  showIntrospectionModal
} from '../../actions/';

import RaisedButton from 'material-ui/RaisedButton';
import LogoIcon from '../icons/logo-small.svg';


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
            <h2><strong>GraphQL</strong> Voyager</h2>
          </div>
        </a>
        <div ref="panel" className="menu-buttons">
          <RaisedButton label="Change Introspection" primary={true} style={{flex: 1}}
            onTouchTap={() => dispatch(showIntrospectionModal())}/>
        </div>
      </div>
    )
  }
}

export default connect()(TitleArea);
