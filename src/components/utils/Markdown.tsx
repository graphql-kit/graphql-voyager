import { HtmlRenderer, Parser } from 'commonmark';

const parser = new Parser();
const renderer = new HtmlRenderer({ safe: true });

interface MarkdownProps {
  text: string;
  className: string;
}

export default function Markdown(props: MarkdownProps) {
  const { text, className } = props;

  if (!text) return null;

  const __html = renderer.render(parser.parse(text));
  return <div className={className} dangerouslySetInnerHTML={{ __html }} />;
}
