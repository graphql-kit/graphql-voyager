import * as _ from 'lodash';
import * as React from 'react';
import * as classNames from 'classnames';
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

export default class TypeList extends React.Component<TypeListProps> {
  render() {
    const { typeGraph, filter, onFocusType, onTypeLink } = this.props;

    if (typeGraph === null) return null;

    const rootType = typeGraph.nodes[typeGraph.rootId];
    const types = _(typeGraph.nodes)
      .values()
      .reject({ id: rootType && rootType.id })
      .sortBy('name')
      .value();

    return (
      <div className="doc-explorer-type-list">
        {rootType && renderItem(rootType, '-root')}
        {_.map(types, type => renderItem(type, ''))}
      </div>
    );

    function renderItem(type, className?: string) {
      if (!(isMatch(type.name, filter) || isMatch(type.description, filter))) {
        return null;
      }

      return (
        <div key={type.id} className={classNames('typelist-item', className)}>
          <TypeLink type={type} onClick={onTypeLink} filter={filter} />
          <FocusTypeButton onClick={() => onFocusType(type)} />
          <Description className="-doc-type" text={type.description} termToHighlight={filter} />
        </div>
      );
    }
  }
}
