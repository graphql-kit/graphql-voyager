import * as React from 'react';
import { HtmlRenderer, Parser } from 'commonmark';

interface MarkdownProps {
  text: string;
  termToHighlight?: string;
  className: string;
}

export default class Markdown extends React.Component<MarkdownProps> {
  renderer: HtmlRenderer;
  parser: Parser;

  constructor(props) {
    super(props);
    this.renderer = new HtmlRenderer();
    this.parser = new Parser();
  }

  shouldComponentUpdate(nextProps) {
    return (
      this.props.text !== nextProps.text || this.props.termToHighlight !== nextProps.termToHighlight
    );
  }

  render() {
    const { text, termToHighlight, className } = this.props;

    if (!text) return null;

    const highlighedText = highlightTermInMarkdown(text, termToHighlight);
    const parsed = this.parser.parse(highlighedText);
    const html = this.renderer.render(parsed);

    return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />;
  }
}

function highlightTermInMarkdown(content: string, term: string) {
  if (!term) {
    return content;
  }

  return content.replace(new RegExp(term, 'gi'), match => `<mark>${match}</mark>`);
}
