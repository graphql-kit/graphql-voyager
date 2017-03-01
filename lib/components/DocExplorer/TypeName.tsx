import * as React from "react";

import Description from './Description';
import {
  isBuiltInScalarType,
  isScalarType,
  isInputObjectType,
} from '../../introspection';

import { store } from '../../redux';

import {
  changeSelectedTypeInfo
} from '../../actions/';

interface TypeNameProps {
  type: any;
}

export default class TypeName extends React.Component<TypeNameProps, {}> {
  render() {
    const { type } = this.props;

    let className;
    if (isBuiltInScalarType(type))
      className = 'built-in-type-name';
    else if (isScalarType(type))
      className = 'scalar-type-name';
    else if (isInputObjectType(type))
      className = 'input-obj-type-name';

    const $anchor = this.refs['popurAnchor'];
    return (
      <span ref="popurAnchor" className={className}
       onClick={(event) => {
         store.dispatch(changeSelectedTypeInfo(type));
         event.stopPropagation();
       }}
      >
        {type.name}
      </span>
    );

  }
}
