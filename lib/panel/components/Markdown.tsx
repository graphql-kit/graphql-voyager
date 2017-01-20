import * as React from 'react';
import * as Marked from 'marked';

interface MarkdownProps {
  text: string;
  className: string;
}

export default class Markdown extends React.Component<MarkdownProps, void> {
  shouldComponentUpdate(nextProps) {
    return this.props.text !== nextProps.text;
  }

  render() {
    const {text} = this.props;

    if (!text)
      return <div />;

    const html = Marked(text, { sanitize: true });

    return (
      <div
        className={this.props.className}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
}
