import * as React from "react";

import { stringifyWrappers } from '../../graph';

interface TypeLinkProps {
  name: string;
  wrappers?: string[];
}

export default class TypeLink extends React.Component<TypeLinkProps, void> {
  render() {
    const {
      name,
      wrappers,
    } = this.props;

    const [leftWrap, rightWrap] = stringifyWrappers(wrappers || []);
    //TODO: add onClick
    return <span>{leftWrap}<a className="type-name">{name}</a>{rightWrap}</span>
  }
}
