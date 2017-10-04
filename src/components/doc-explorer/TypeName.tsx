import * as React from 'react';
import * as classNames from 'classnames';
import { connect } from 'react-redux';

import './TypeName.css';

import { isBuiltInScalarType, isScalarType, isInputObjectType } from '../../introspection';

import { changeSelectedTypeInfo } from '../../actions/';

interface TypeNameProps {
  type: any;
  dispatch: any;
}

class TypeName extends React.Component<TypeNameProps, {}> {
  render() {
    const { type } = this.props;

    let className;
    if (isBuiltInScalarType(type)) className = '-built-in';
    else if (isScalarType(type)) className = '-scalar';
    else if (isInputObjectType(type)) className = '-input-obj';

    return (
      <span
        className={classNames('type-name', className)}
        onClick={event => {
          this.props.dispatch(changeSelectedTypeInfo(type));
          event.stopPropagation();
        }}
      >
        {type.name}
      </span>
    );
  }
}

export default connect()(TypeName);
