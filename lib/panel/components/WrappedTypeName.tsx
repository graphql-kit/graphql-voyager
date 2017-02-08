import * as React from "react";
import SvgIcon from 'material-ui/SvgIcon';

import { stringifyWrappers } from '../../introspection';
import TypeName from './TypeName';

import RelayIcon from '../icons/relay-icon.svg';

interface WrappedTypeNameProps {
  container: any;
}

export default class WrappedTypeName extends React.Component<WrappedTypeNameProps, void> {
  renderRelayIcon() {
    return (
      <RelayIcon style={{width: '20px', height: '20px', verticalAlign: 'middle', marginLeft: '5px'}} />
    );
  }
  render() {
    const { container } = this.props;

    const type = container.type;
    const wrappers = container.typeWrappers || [];
    const [leftWrap, rightWrap] = stringifyWrappers(wrappers);

    return (
      <span className="wrapped-type-name">
        { container.relayType && this.renderRelayIcon() }
        {leftWrap}<TypeName type={type} />{rightWrap}
      </span>
    );
  }
}
