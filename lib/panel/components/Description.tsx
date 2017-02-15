import * as React from 'react';
import * as classNames from 'classnames';

import Markdown from './Markdown';

interface DescriptionProps {
  text?: string;
  className: string;
}

export default class Description extends React.Component<DescriptionProps, void> {
  render() {
    const {text, className} = this.props;

    if (text)
      return (<Markdown text={text} className={className}/>);

    return (
      <div className={classNames(className, 'no-description')}>
        <p>{'No Description'}</p>
      </div>
    );
  }
}
