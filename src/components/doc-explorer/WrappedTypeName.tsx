import './WrappedTypeName.css';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {
  getNamedType,
  GraphQLArgument,
  GraphQLField,
  GraphQLNamedType,
} from 'graphql/type';

import { stringifyTypeWrappers } from '../../utils/stringify-type-wrappers';
import RelayIcon from '../icons/relay-icon.svg';
import TypeLink from './TypeLink';

interface WrappedTypeNameProps {
  container: GraphQLField<any, any> | GraphQLArgument;
  onTypeLink: (type: GraphQLNamedType) => void;
}

export default function WrappedTypeName(props: WrappedTypeNameProps) {
  const { container, onTypeLink } = props;

  const type = getNamedType(container.type);
  const [leftWrap, rightWrap] = stringifyTypeWrappers(container.type);

  return (
    <span className="wrapped-type-name">
      <>
        {leftWrap}
        <TypeLink type={type} onClick={onTypeLink} />
        {rightWrap} {container.extensions.isRelayField && wrapRelayIcon()}
      </>
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
