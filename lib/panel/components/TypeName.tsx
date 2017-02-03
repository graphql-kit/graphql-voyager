import * as React from "react";
import { connect } from "react-redux"

import {
  isBuiltInScalarType,
  isScalarType,
  isInputObjectType,
} from '../../introspection';

import { selectNode, focusElement } from '../../actions/';

interface TypeNameProps {
  type: any;
  dispatch: any;
}

class TypeName extends React.Component<TypeNameProps, void> {
  render() {
    const {
      type,
      dispatch,
    } = this.props;

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
          onClick={(event) => {
            event.stopPropagation();
            dispatch(focusElement(type.id));
            dispatch(selectNode(type.id));
          }}
        >{type.name}</a>
      );
    }
  }
}

export default connect()(TypeName);
