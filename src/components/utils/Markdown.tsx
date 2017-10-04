import * as React from 'react';
import { HtmlRenderer, Parser } from 'commonmark';

interface MarkdownProps {
  text: string;
  className: string;
}

export default class Markdown extends React.Component<MarkdownProps> {
  renderer: HtmlRenderer;
  parser: Parser;

  constructor(props) {
    super(props);
    this.renderer = new HtmlRenderer({ safe: true });
    this.parser = new Parser();
  }
  shouldComponentUpdate(nextProps) {
    return this.props.text !== nextProps.text;
  }

  render() {
    const { text, className } = this.props;

    if (!text) return null;

    const parsed = this.parser.parse(text);
    const html = this.renderer.render(parsed);

    return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />;
  }
}
