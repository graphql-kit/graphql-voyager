import * as React from "react";
import { connect } from "react-redux"

import { stringifyWrappers } from '../../graph';
import { getTypeGraphSelector, TypeGraph } from '../../graph';
import { selectElement } from '../../actions/';

interface TypeLinkProps {
  name: string;
  wrappers?: string[];
  dispatch: any;
}

class TypeLink extends React.Component<TypeLinkProps, void> {
  render() {
    const {
      name,
      wrappers,
      dispatch,
    } = this.props;

    const [leftWrap, rightWrap] = stringifyWrappers(wrappers || []);
    //TODO: add onClick
    return (
      <span>
        {leftWrap}
        <a
          className="type-name"
          onClick={() => {
            dispatch(selectElement('TYPE::' + name));
          }}
        >{name}</a>
        {rightWrap}
      </span>
    );
  }
}

export default connect()(TypeLink);
