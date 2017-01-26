import * as React from "react";
import { connect } from "react-redux"

import {
  stringifyWrappers,
  isBuiltInScalarType,
  isScalarType,
  isInputObjectType,
} from '../../introspection';

import { selectElement } from '../../actions/';

interface TypeLinkProps {
  type: any;
  wrappers?: string[];
  dispatch: any;
}

class TypeLink extends React.Component<TypeLinkProps, void> {
  renderType(type, dispatch) {
    if (isBuiltInScalarType(type))
      return (<span className="built-in-type-name">{type.name}</span>);
    else if (isScalarType(type))
      return (<span className="scalar-type-name">{type.name}</span>);
    else if (isInputObjectType(type))
      return (<span className="input-obj-type-name">{type.name}</span>);
    else {
      return (
        <a
          className="object-type-name"
          onClick={() => {
            dispatch(selectElement(type.id));
          }}
        >{type.name}</a>
      );
    }
  }

  render() {
    const {
      type,
      wrappers,
      dispatch,
    } = this.props;

    const [leftWrap, rightWrap] = stringifyWrappers(wrappers || []);

    return (
      <span>
        {leftWrap}
        {this.renderType(type, dispatch)}
        {rightWrap}
      </span>
    );
  }
}

export default connect()(TypeLink);
