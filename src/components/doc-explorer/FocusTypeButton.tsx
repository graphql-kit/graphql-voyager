import * as React from 'react';
import { connect } from 'react-redux';
import { IconButton } from 'react-toolbox/lib/button';
import EyeIcon from '../icons/remove-red-eye.svg';

import './FocusTypeButton.css';
import { focusElement } from '../../actions/';

interface FocusTypeButtonProps {
  type: {
    id: string;
  };
  dispatch: any;
}

function FocusTypeButton(props: FocusTypeButtonProps) {
  return (
    <IconButton className="eye-button" onClick={() => props.dispatch(focusElement(props.type.id))}>
      <EyeIcon />
    </IconButton>
  );
}

export default connect()(FocusTypeButton);
