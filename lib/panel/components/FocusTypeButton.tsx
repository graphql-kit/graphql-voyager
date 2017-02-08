import * as React from 'react';
import { connect } from "react-redux"
import IconButton from 'material-ui/IconButton';
import EyeIcon from 'material-ui/svg-icons/image/remove-red-eye';
import { cyan500 } from 'material-ui/styles/colors';

import { focusElement } from '../../actions/';
import { store } from '../../redux';

interface FocusTypeButtonProps {
  typeId: string;
  dispatch: any;
}

function FocusTypeButton(props:FocusTypeButtonProps) {
  return (
    <IconButton
      onTouchTap={() => props.dispatch(focusElement(props.typeId))}
      style={{height: '36px', padding: 0, width: '36px'}}>
      <EyeIcon color={cyan500}/>
    </IconButton>
  );
}

export default connect()(FocusTypeButton);
