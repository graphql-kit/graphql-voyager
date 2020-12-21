import * as React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import './WrappedTypeName.css';

import { stringifyWrappers } from '../../introspection/';
import TypeLink from './TypeLink';

import RelayIcon from '../icons/relay-icon.svg';

interface WrappedTypeNameProps {
  container: any;
  onTypeLink: (any) => void;
}

export default class WrappedTypeName extends React.Component<
  WrappedTypeNameProps
> {
  render() {
    const { container, onTypeLink } = this.props;

    const type = container.type;
    const wrappers = container.typeWrappers || [];
    const [leftWrap, rightWrap] = stringifyWrappers(wrappers);

    return (
      <span className="wrapped-type-name">
        {leftWrap}
        <TypeLink type={type} onClick={onTypeLink} />
        {rightWrap} {container.relayType && wrapRelayIcon()}
      </span>
    );
  }
}

function wrapRelayIcon() {
  return (
    <Tooltip title="Relay Connection" placement="top">
      <IconButton className="relay-icon">
        <RelayIcon />
      </IconButton>
    </Tooltip>
  );
}
