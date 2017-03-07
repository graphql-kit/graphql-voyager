import * as React from 'react';
import * as classNames from 'classnames';

import './TypeName.css';

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
      className = '-built-in';
    else if (isScalarType(type))
      className = '-scalar';
    else if (isInputObjectType(type))
      className = '-input-obj';

    return (
      <span className={classNames('type-name', className)}
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
