import * as React from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import EyeIcon from '../icons/remove-red-eye.svg';

import './FocusTypeButton.css';
import { focusElement } from '../../actions/';

interface FocusTypeButtonProps {
  type: {
    id: string;
  };
  dispatch: any;
}

const FocusTypeButton: React.SFC<FocusTypeButtonProps> = props => {
  return (
    <IconButton
      className="eye-button"
      onClick={() => props.dispatch(focusElement(props.type.id))}
      color="primary"
    >
      <EyeIcon />
    </IconButton>
  );
};

export default connect()(FocusTypeButton);
