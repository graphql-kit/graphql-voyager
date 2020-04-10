import * as React from 'react';
import * as classNames from 'classnames';

import './Argument.css';

import Markdown from '../utils/Markdown';
import WrappedTypeName from './WrappedTypeName';
import { highlightTerm } from '../../utils';

interface ArgumentProps {
  arg: any;
  expanded: boolean;
  termToHighlight?: string;
  onTypeLink: (any) => void;
}

export default class Argument extends React.Component<ArgumentProps> {
  render() {
    const { arg, expanded, onTypeLink, termToHighlight } = this.props;
    return (
      <span className={classNames('arg-wrap', { '-expanded': expanded })}>
        <span className="arg">
          <span className="arg-name">{highlightTerm(arg.name, termToHighlight)}</span>
          <WrappedTypeName container={arg} onTypeLink={onTypeLink} />
          {arg.defaultValue !== null && (
            <span>
              {' = '}
              <span className="default-value">{arg.defaultValue}</span>
            </span>
          )}
        </span>
        <Markdown
          text={arg.description}
          termToHighlight={termToHighlight}
          className="arg-description"
        />
      </span>
    );
  }
}
