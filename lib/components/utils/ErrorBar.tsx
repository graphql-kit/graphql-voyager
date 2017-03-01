import * as React from 'react';
import { connect } from 'react-redux'
import {red900, grey50} from 'material-ui/styles/colors';
import Snackbar from 'material-ui/Snackbar';

import {clearError} from '../../actions';

function mapStateToProps(state) {
  return {
    errorMessage: state.errorMessage,
  };
}

interface ErrorBarProps {
  errorMessage?: string;
  dispatch: any;
}

class ErrorBar extends React.Component<ErrorBarProps, void> {
  render() {
    const {
      errorMessage,
      dispatch,
    } = this.props;

    if (!errorMessage)
      return null;

    return (
      <Snackbar
        open={errorMessage !== null}
        action={"Dismiss"}
        onActionTouchTap={() => dispatch(clearError())}
        onRequestClose={(reason) => false}
        message={errorMessage}
        bodyStyle={{
          backgroundColor: red900,
          color: grey50
        }}
        contentStyle={{
          display: 'block',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden'
        }}
        />
    );
  }
}

export default connect(mapStateToProps)(ErrorBar);
