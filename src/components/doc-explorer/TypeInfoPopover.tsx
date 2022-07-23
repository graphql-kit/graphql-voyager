import { Component } from 'react';

import './TypeInfoPopover.css';

import CloseIcon from '../icons/close-black.svg';
import IconButton from '@mui/material/IconButton';

import TypeDetails from '../doc-explorer/TypeDetails';

interface ScalarDetailsProps {
  type: any;
  onChange: any;
}

interface ScalarDetailsState {
  localType: any;
}

export default class ScalarDetails extends Component<
  ScalarDetailsProps,
  ScalarDetailsState
> {
  constructor(props) {
    super(props);
    this.state = { localType: null };
  }
  close() {
    this.props.onChange(null);
    setTimeout(() => {
      this.setState({ localType: null });
    }, 450);
  }
  render() {
    let { type, onChange } = this.props;

    //FIXME: implement animation correctly
    //https://facebook.github.io/react/docs/animation.html
    let { localType } = this.state;
    if (type && (!localType || type.name !== localType.name)) {
      setTimeout(() => {
        this.setState({ localType: type });
      });
    }
    return (
      <div className={`type-info-popover ${type != null ? '-opened' : ''}`}>
        <IconButton className="closeButton" onClick={() => this.close()}>
          <CloseIcon />
        </IconButton>
        {(type || localType) && (
          <TypeDetails type={type || localType} onTypeLink={onChange} />
        )}
      </div>
    );
  }
}
