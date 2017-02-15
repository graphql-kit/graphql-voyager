import * as React from "react";
import SvgIcon from 'material-ui/SvgIcon';
import IconButton from 'material-ui/IconButton';

import { stringifyWrappers } from '../../introspection';
import { isNode } from '../../graph';
import TypeLink from './TypeLink';
import TypeName from './TypeName';

import RelayIcon from '../icons/relay-icon.svg';

interface WrappedTypeNameProps {
  container: any;
}

export default class WrappedTypeName extends React.Component<WrappedTypeNameProps, void> {
  renderRelayIcon() {
    return (
      <IconButton disableTouchRipple={true} tooltipPosition="top-center" tooltip="Relay Connection"
      style={{width: '20px', height: '20px', verticalAlign: 'middle', padding: 0}}
      tooltipStyles={{'marginLeft': '-5px'}}>
        <RelayIcon style={{width: '20px', height: '20px', verticalAlign: 'middle', marginLeft: '5px'}} />
      </IconButton>
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
        { isNode(type) ? <TypeLink type={type} /> : <TypeName type={type} /> }
        {rightWrap}{ container.relayType && this.renderRelayIcon() }
      </span>
    );
  }
}
