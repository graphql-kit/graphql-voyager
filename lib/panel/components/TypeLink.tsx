import * as React from "react";
import { connect } from "react-redux"

import { stringifyWrappers } from '../../introspection';
import { selectElement } from '../../actions/';

interface TypeLinkProps {
  type: any;
  wrappers?: string[];
  dispatch: any;
}

class TypeLink extends React.Component<TypeLinkProps, void> {
  render() {
    const {
      type,
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
            dispatch(selectElement(type.id));
          }}
        >{type.name}</a>
        {rightWrap}
      </span>
    );
  }
}

export default connect()(TypeLink);
