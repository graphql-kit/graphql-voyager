import * as _ from 'lodash';
import * as React from 'react';
import * as classNames from 'classnames';

import './TypeList.css';

import TypeLink from './TypeLink';
import Description from './Description';
import FocusTypeButton from './FocusTypeButton';

interface TypeListProps {
  typeGraph: any;
  onFocusType: (any) => void;
  onTypeLink: (any) => void;
}

export default class TypeList extends React.Component<TypeListProps> {
  render() {
    const { typeGraph, onFocusType, onTypeLink } = this.props;

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
      return (
        <div key={type.id} className={classNames('typelist-item', className)}>
          <TypeLink type={type} onClick={onTypeLink} />
          <FocusTypeButton onClick={() => onFocusType(type)} />
          <Description className="-doc-type" text={type.description} />
        </div>
      );
    }
  }
}
