import * as React from 'react';

import './Description.css';

import Markdown from '../utils/Markdown';

interface DescriptionProps {
  text?: string;
  className: string;
}

export default class Description extends React.Component<DescriptionProps> {
  render() {
    const { text, className } = this.props;

    if (text)
      return (
        <Markdown text={text} className={`description-box ${className}`} />
      );

    return (
      <div className={`description-box ${className} -no-description`}>
        <p>No Description</p>
      </div>
    );
  }
}
