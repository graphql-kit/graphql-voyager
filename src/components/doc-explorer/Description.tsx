import * as React from 'react';
import * as classNames from 'classnames';

import './Description.css';

import Markdown from '../utils/Markdown';

interface DescriptionProps {
  text?: string;
  termToHighlight?: string;
  className: string;
}

export default class Description extends React.Component<DescriptionProps> {
  render() {
    const { text, termToHighlight, className } = this.props;

    if (text)
      return (
        <Markdown
          text={text}
          termToHighlight={termToHighlight}
          className={classNames('description-box', className)}
        />
      );

    return (
      <div className={classNames('description-box', className, '-no-description')}>
        <p>No Description</p>
      </div>
    );
  }
}
