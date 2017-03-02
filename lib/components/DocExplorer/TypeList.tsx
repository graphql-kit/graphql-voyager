import * as _ from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux'
import * as classNames from 'classnames';

import './TypeList.css';

import { focusElement } from '../../actions/';
import TypeLink from './TypeLink';
import Description from './Description';
import FocusTypeButton from './FocusTypeButton';

interface TypeListProps {
  typeGraph: any;
  dispatch: any;
}

class TypeList extends React.Component<TypeListProps, void> {
  renderItem(type, className?: string) {
    return (
      <div key={type.id} className={classNames('typelist-item', className || '')}>
        <TypeLink type={type}/>
        <FocusTypeButton type={type} />
        <Description
          className="-doc-type"
          text={type.description}
        />
      </div>
    );
  }
  render() {
    const { typeGraph, dispatch } = this.props;

    if (typeGraph === null)
      return null;

    const rootType = typeGraph.nodes[typeGraph.rootId];
    const types = _(typeGraph.nodes)
      .values()
      .reject({id: rootType.id})
      .sortBy('name').value();

    return (
      <div className="scroll-area doc-explorer-type-list">
        {this.renderItem(rootType, '-root')}
        {_.map(types, type => this.renderItem(type))}
      </div>
    );
  }
}

export default connect()(TypeList);
