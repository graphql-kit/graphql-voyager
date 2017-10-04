import * as React from 'react';
import { connect } from 'react-redux';
import * as classNames from 'classnames';

import './TypeInfoPopover.css';

import CloseIcon from '../icons/close-black.svg';
import { IconButton } from 'react-toolbox/lib/button';

import { changeSelectedTypeInfo } from '../../actions';

import TypeDetails from '../doc-explorer/TypeDetails';

function mapStateToProps(state) {
  return {
    type: state.selected.typeinfo,
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
    this.state = { localType: null };
  }
  close() {
    this.props.dispatch(changeSelectedTypeInfo(null));
    setTimeout(() => {
      this.setState({ localType: null });
    }, 450);
  }
  render() {
    let { type } = this.props;

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
          '-opened': !!type,
        })}
      >
        <IconButton className="closeButton" onClick={() => this.close()}>
          <CloseIcon />
        </IconButton>
        {(type || localType) && <TypeDetails type={type || localType} />}
      </div>
    );
  }
}

export default connect(mapStateToProps)(ScalarDetails);
