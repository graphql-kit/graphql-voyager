import './FocusTypeButton.css';

import IconButton from '@mui/material/IconButton';

import EyeIcon from '../icons/remove-red-eye.svg';

function FocusTypeButton(props: { onClick: () => void }) {
  return (
    <IconButton className="eye-button" onClick={props.onClick} color="primary">
      <EyeIcon />
    </IconButton>
  );
}

export default FocusTypeButton;
