import * as React from 'react';
import * as classNames from 'classnames';
import { isBuiltInScalarType, isScalarType, isInputObjectType } from '../../introspection';

import './TypeLink.css';

interface TypeLinkProps {
  type: any;
  onClick: (any) => void;
}

export default class TypeLink extends React.Component<TypeLinkProps> {
  render() {
    const { type, onClick } = this.props;

    let className;
    if (isBuiltInScalarType(type)) className = '-built-in';
    else if (isScalarType(type)) className = '-scalar';
    else if (isInputObjectType(type)) className = '-input-obj';
    else className = '-object';

    return (
      <a
        className={classNames('type-name', className)}
        onClick={event => {
          event.stopPropagation();
          onClick(type);
        }}
      >
        {type.name}
      </a>
    );
  }
}
