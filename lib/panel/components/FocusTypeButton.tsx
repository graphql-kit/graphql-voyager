import * as React from 'react';
import { focusElement } from '../../actions/';
import { store } from '../../redux';

interface FocusTypeButtonProps {
  typeId: string;
}

export default function FocusTypeButton(props:FocusTypeButtonProps) {
  return <span className="doc-focus-type" onClick={() => {
    store.dispatch(focusElement(props.typeId));
  }}/>;
}
