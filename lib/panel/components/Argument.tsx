import * as React from 'react';
import { astFromValue, print } from 'graphql';

import TypeLink from './TypeLink';

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
        <TypeLink type={arg.type} wrappers={arg.typeWrappers}/>
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
