import * as React from "react";
import SvgIcon from 'material-ui/SvgIcon';

import { stringifyWrappers } from '../../introspection';
import TypeName from './TypeName';
import RelayIcon from './RelayIcon';

interface WrappedTypeNameProps {
  container: any;
}

export default class WrappedTypeName extends React.Component<WrappedTypeNameProps, void> {
  renderRelayIcon() {
    return (
      <SvgIcon viewBox="0 0 600 600">
        <RelayIcon/>
      </SvgIcon>
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
