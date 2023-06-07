import './Argument.css';

import Markdown from '../utils/Markdown';
import WrappedTypeName from './WrappedTypeName';

interface ArgumentProps {
  arg: any;
  expanded: boolean;
  onTypeLink: (any) => void;
}

export default function Argument(props: ArgumentProps) {
  const { arg, expanded, onTypeLink } = props;

  return (
    <span className={`arg-wrap ${expanded ? '-expanded' : ''}`}>
      <Markdown text={arg.description} className="arg-description" />
      <span className="arg">
        <span className="arg-name">{arg.name}</span>
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
