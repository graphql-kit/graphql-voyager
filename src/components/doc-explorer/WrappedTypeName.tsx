import * as React from 'react';
import Tooltip from 'react-toolbox/lib/tooltip';
import { IconButton } from 'react-toolbox/lib/button';
import './WrappedTypeName.css';

import { stringifyWrappers } from '../../introspection/';
import { isNode } from '../../graph/';
import TypeLink from './TypeLink';
import TypeName from './TypeName';

import RelayIcon from '../icons/relay-icon.svg';

const TooltipIcon = Tooltip(IconButton);

interface WrappedTypeNameProps {
  container: any;
}

export default class WrappedTypeName extends React.Component<WrappedTypeNameProps> {
  renderRelayIcon() {
    return (
      <TooltipIcon
        className="relay-icon"
        tooltipPosition="top"
        ripple={false}
        tooltip="Relay Connection"
      >
        <RelayIcon />
      </TooltipIcon>
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
        {rightWrap}
        {container.relayType && this.renderRelayIcon()}
      </span>
    );
  }
}
