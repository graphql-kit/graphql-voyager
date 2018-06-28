import * as React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import './WrappedTypeName.css';

import { stringifyWrappers } from '../../introspection/';
import { isNode } from '../../graph/';
import TypeLink from './TypeLink';
import TypeName from './TypeName';

import RelayIcon from '../icons/relay-icon.svg';

interface WrappedTypeNameProps {
  container: any;
}

export default class WrappedTypeName extends React.Component<WrappedTypeNameProps> {
  renderRelayIcon() {
    return (
      <Tooltip title="Relay Connection" placement="top">
        <IconButton className="relay-icon">
          <RelayIcon />
        </IconButton>
      </Tooltip>
    );
  }

  render() {
    const { container } = this.props;

    const type = container.type;
    const wrappers = container.typeWrappers || [];
    const [leftWrap, rightWrap] = stringifyWrappers(wrappers);

    return (
      <span className="wrapped-type-name">
        {leftWrap}
        {isNode(type) ? <TypeLink type={type} /> : <TypeName type={type} />}
        {rightWrap} {container.relayType && this.renderRelayIcon()}
      </span>
    );
  }
}
