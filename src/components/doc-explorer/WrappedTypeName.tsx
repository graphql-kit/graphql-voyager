import './WrappedTypeName.css';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import { stringifyWrappers } from '../../introspection/';
import RelayIcon from '../icons/relay-icon.svg';
import TypeLink from './TypeLink';

interface WrappedTypeNameProps {
  container: any;
  onTypeLink: (any) => void;
}

export default function WrappedTypeName(props: WrappedTypeNameProps) {
  const { container, onTypeLink } = props;

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

function wrapRelayIcon() {
  return (
    <Tooltip title="Relay Connection" placement="top">
      <IconButton className="relay-icon">
        <RelayIcon />
      </IconButton>
    </Tooltip>
  );
}
