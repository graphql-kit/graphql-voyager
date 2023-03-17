import * as _ from 'lodash';
import { isMatch } from '../../utils';

import './TypeList.css';

import TypeLink from './TypeLink';
import Description from './Description';
import FocusTypeButton from './FocusTypeButton';

interface TypeListProps {
  typeGraph: any;
  filter: string;
  onFocusType: (any) => void;
  onTypeLink: (any) => void;
}

export default function TypeList(props: TypeListProps) {
  const { typeGraph, filter, onFocusType, onTypeLink } = props;

  if (typeGraph === null) return null;

  const rootType = typeGraph.nodes[typeGraph.rootId];
  const types = _(typeGraph.nodes)
    .values()
    .reject({ id: rootType?.id })
    .sortBy('name')
    .value();

  return (
    <div className="doc-explorer-type-list">
      {rootType && renderItem(rootType, '-root')}
      {_.map(types, (type) => renderItem(type, ''))}
    </div>
  );

  function renderItem(type, className?: string) {
    if (!isMatch(type.name, filter)) {
      return null;
    }

    return (
      <div key={type.id} className={`typelist-item ${className}`}>
        <TypeLink type={type} onClick={onTypeLink} filter={filter} />
        <FocusTypeButton onClick={() => onFocusType(type)} />
        <Description className="-doc-type" text={type.description} />
      </div>
    );
  }
}
