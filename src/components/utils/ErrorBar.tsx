import * as React from 'react';
import { connect } from 'react-redux';
import { Snackbar } from 'react-toolbox/lib/snackbar';

import './ErrorBar.css';

import { clearError } from '../../actions';

function mapStateToProps(state) {
  return {
    errorMessage: state.errorMessage,
  };
}

interface ErrorBarProps {
  errorMessage?: string;
  dispatch: any;
}

class ErrorBar extends React.PureComponent<ErrorBarProps> {
  render() {
    const { errorMessage, dispatch } = this.props;

    if (!errorMessage) return null;

    return (
      <Snackbar
        className="error-bar"
        action="Dismiss"
        active={errorMessage !== null}
        label={errorMessage}
        timeout={2000}
        onClick={() => dispatch(clearError())}
        type="warning"
      />
    );
  }
}

export default connect(mapStateToProps)(ErrorBar as any);
