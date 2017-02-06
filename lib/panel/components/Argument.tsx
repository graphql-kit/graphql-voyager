import * as React from 'react';
import { astFromValue, print } from 'graphql';

import Markdown from './Markdown';
import WrappedTypeName from './WrappedTypeName';

interface ArgumentProps {
  arg: any;
}

export default class Argument extends React.Component<ArgumentProps, void> {
  render() {
    const {arg} = this.props;
    return (
      <span className="arg-wrap">
        <span className="arg">
          <span className="arg-name">{arg.name}</span>
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
        <Markdown text={arg.description} className="arg-description"/>
      </span>
    );
  }
}
