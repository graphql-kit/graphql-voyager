import * as React from 'react';
import * as Marked from 'marked';

interface MarkdownProps {
  text: string;
  className: string;
}

export default class Markdown extends React.Component<MarkdownProps> {
  shouldComponentUpdate(nextProps) {
    return this.props.text !== nextProps.text;
  }

  render() {
    const {text, className} = this.props;

    if (!text)
      return null;

    const html = Marked(text, { sanitize: true });

    return (
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
}
