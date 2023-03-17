import './PoweredBy.css';

export default function PoweredBy() {
  return (
    <div className="powered-by">
      🛰 Powered by{' '}
      <a
        href="https://github.com/IvanGoncharov/graphql-voyager"
        target="_blank"
      >
        GraphQL Voyager
      </a>
    </div>
  );
}
