import * as React from 'react';
import { connect } from 'react-redux';
import * as classNames from 'classnames';

import Popover, { PopoverAnimationHorizontal } from 'material-ui/Popover';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';

import { changeExtraInfoType } from '../../actions';

import TypeDetails from './TypeDetails';

function mapStateToProps(state) {
  return {
    type: state.selected.extraInfoType,
  };
}

interface ExtraTypeInfoProps {
  type: any;
  dispatch: any;
}

interface ExtraTypeInfoState {
  localType: any;
}

class ExtraTypeInfo extends React.Component<ExtraTypeInfoProps, ExtraTypeInfoState> {
  constructor(props) {
    super(props);
    this.state = { localType : null };
  }
  close() {
    this.props.dispatch(changeExtraInfoType(null));
    setTimeout(() => {
      this.setState({ localType: null });
    }, 450);
  }
  render() {
    let { type, dispatch } = this.props;
    let { localType } = this.state;
    if (type && (!localType || type.name !== localType.name)) {
      this.setState({ localType: type });
    }
    return (
      <div
        className={classNames('extra-details-panel', {
          'opened': !!type
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

export default connect(mapStateToProps)(ExtraTypeInfo);
