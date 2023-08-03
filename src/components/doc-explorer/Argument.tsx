import './Argument.css';

import { GraphQLArgument, GraphQLNamedType } from 'graphql/type';

import { highlightTerm } from '../../utils/highlight';
import Markdown from '../utils/Markdown';
import WrappedTypeName from './WrappedTypeName';

interface ArgumentProps {
  arg: GraphQLArgument;
  filter: string;
  expanded: boolean;
  onTypeLink: (type: GraphQLNamedType) => void;
}

export default function Argument(props: ArgumentProps) {
  const { arg, filter, expanded, onTypeLink } = props;

  return (
    <span className={`arg-wrap ${expanded ? '-expanded' : ''}`}>
      <Markdown text={arg.description} className="arg-description" />
      <span className="arg">
        <span className="arg-name">{highlightTerm(arg.name, filter)}</span>
        <WrappedTypeName container={arg} onTypeLink={onTypeLink} />
        {arg.defaultValue != null && (
          <span>
            {' = '}
            <span className="default-value">
              {JSON.stringify(arg.defaultValue)}
            </span>
          </span>
        )}
      </span>
    </span>
  );
}
