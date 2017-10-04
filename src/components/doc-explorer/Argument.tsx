import * as React from 'react';
import * as classNames from 'classnames';

import './Argument.css';

import Markdown from '../utils/Markdown';
import WrappedTypeName from './WrappedTypeName';

interface ArgumentProps {
  arg: any;
  expanded: boolean;
}

export default class Argument extends React.Component<ArgumentProps> {
  render() {
    const { arg, expanded } = this.props;
    return (
      <span className={classNames('arg-wrap', { '-expanded': expanded })}>
        <span className="arg">
          <span className="arg-name">{arg.name}</span>
          <WrappedTypeName container={arg} />
          {arg.defaultValue !== null && (
            <span>
              {' = '}
              <span className="default-value">{arg.defaultValue}</span>
            </span>
          )}
        </span>
        <Markdown text={arg.description} className="arg-description" />
      </span>
    );
  }
}
