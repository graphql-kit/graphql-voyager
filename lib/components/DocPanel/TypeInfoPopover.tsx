import * as React from 'react';
import { connect } from 'react-redux';
import * as classNames from 'classnames';

import './TypeInfoPopover.css';

import Popover from 'material-ui/Popover';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';

import { changeSelectedTypeInfo } from '../../actions';

import TypeDetails from '../DocExplorer/TypeDetails';

function mapStateToProps(state) {
  return {
    type: state.selected.typeinfo
  };
}

interface ScalarDetailsProps {
  type: any;
  dispatch: any;
}

interface ScalarDetailsState {
  localType: any;
}

class ScalarDetails extends React.Component<ScalarDetailsProps, ScalarDetailsState> {
  constructor(props) {
    super(props);
    this.state = { localType : null };
  }
  close() {
    this.props.dispatch(changeSelectedTypeInfo(null));
    setTimeout(() => {
      this.setState({ localType: null });
    }, 450);
  }
  render() {
    let { type, dispatch } = this.props;

    //FIXME: implement animation correctly
    //https://facebook.github.io/react/docs/animation.html
    let { localType } = this.state;
    if (type && (!localType || type.name !== localType.name)) {
      setTimeout(() => {
        this.setState({ localType: type });
      });
    }
    return (
      <div
        className={classNames('type-info-popover', {
          '-opened': !!type
        })}
      >
      <IconButton style={{float: 'right', padding: 0, height: 48, width: 24}}
        onTouchTap={() => this.close()}>
        <NavigationClose />
      </IconButton>
        {(type || localType) && <TypeDetails type={type || localType}/> }
      </div>
    )
  }
}

export default connect(mapStateToProps)(ScalarDetails);
