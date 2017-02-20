import * as _ from 'lodash';
import * as React from "react";
import { connect } from "react-redux"
import * as ReactModal from "react-modal";
import * as classNames from 'classnames';

import Settings from './Settings';
import {
  showIntrospectionModal,
  toggleMenu
} from '../../actions/';

import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import IconButton from 'material-ui/IconButton';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import { cyan500 } from 'material-ui/styles/colors';

import ErrorBar from './ErrorBar';
import IntrospectionModal from './IntrospectionModal';
import TypeDoc from './TypeDoc';
import ExtraTypeInfo from './ExtraTypeInfo';
import LoadingAnimation from './LoadingAnimation';
import LogoIcon from '../icons/logo-small.svg';


interface PanelRootProps {
  isLoading: boolean;
  sortByAlphabet: boolean;
  skipRelay: boolean;
  dispatch: any;
  menuOpened: boolean;
}

function mapStateToProps(state) {
  return {
    isLoading: (state.currentSvgIndex === null),
    sortByAlphabet: state.displayOptions.sortByAlphabet,
    skipRelay: state.displayOptions.skipRelay,
    menuOpened: state.menuOpened
  };
}

class PanelRoot extends React.Component<PanelRootProps, void> {

  // TODO: temp method
  toggleDarkMode() {
    document.querySelector('body').classList.toggle('dark-theme');
  }

  render() {
    const {
      isLoading,
      sortByAlphabet,
      skipRelay,
      dispatch,
      menuOpened
    } = this.props;
    const $panel = this.refs['panel'];

    return (
      <div className="panel-wrap">
        <div>
          <ErrorBar/>
          <div className="title-area">
            <div className="logo">
              <LogoIcon/>
              <h2><strong>GraphQL</strong> Voyager</h2>
            </div>
            <IntrospectionModal/>
            <div ref="panel" className="menu-buttons">
              <RaisedButton label="Load Introspection" primary={true} style={{flex: 1}}
                onTouchTap={() => dispatch(showIntrospectionModal())}/>
            </div>
            <Popover
              open={menuOpened}
              anchorEl={$panel}
              anchorOrigin={{horizontal: 'left', vertical: 'top'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              onRequestClose={() => dispatch(toggleMenu())}
            >
              <Settings color="white"/>
            </Popover>
          </div>
          <TypeDoc/>
          <div className={classNames({
            'loading-box': true,
            'visible': isLoading
          })}>
            <LoadingAnimation loading={isLoading} />
          </div>
        </div>
        <ExtraTypeInfo/>
      </div>
    );
  }
}

export default connect(mapStateToProps)(PanelRoot);
