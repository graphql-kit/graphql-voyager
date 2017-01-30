import * as React from 'react';
import { astFromValue, print } from 'graphql';

import WrappedTypeName from './WrappedTypeName';

interface ArgumentProps {
  arg: any;
}

export default class Argument extends React.Component<ArgumentProps, void> {
  render() {
    const {arg} = this.props;
    return (
      <span className="arg">
        <span className="arg-name">{arg.name}</span>
        {': '}
        <WrappedTypeName container={arg} />
        {arg.defaultValue !== undefined &&
          <span>
            {' = '}
            <span className="arg-default-value">
              {print(astFromValue(arg.defaultValue, arg.type))}
            </span>
          </span>
        }
      </span>
    );
  }
}
