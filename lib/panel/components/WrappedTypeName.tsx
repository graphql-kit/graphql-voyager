import * as React from "react";

import { stringifyWrappers } from '../../introspection';
import TypeName from './TypeName';

interface WrappedTypeNameProps {
  container: any;
}

export default class WrappedTypeName extends React.Component<WrappedTypeNameProps, void> {
  render() {
    const { container } = this.props;

    const type = container.type;
    const wrappers = container.typeWrappers || [];
    const [leftWrap, rightWrap] = stringifyWrappers(wrappers);

    return (
      <span className="wrapped-type-name">
        { container.relayType && <span className="relay-field" />}
        {leftWrap}<TypeName type={type} />{rightWrap}
      </span>
    );
  }
}
