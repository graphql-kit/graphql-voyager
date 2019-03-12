import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import EyeIcon from '../icons/remove-red-eye.svg';

import './FocusTypeButton.css';

function FocusTypeButton(props: { onClick: () => void }) {
  return (
    <IconButton className="eye-button" onClick={props.onClick} color="primary">
      <EyeIcon />
    </IconButton>
  );
}

export default FocusTypeButton;
