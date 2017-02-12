import * as _ from 'lodash';
import * as React from "react";
import { connect } from "react-redux"

import { focusElement } from '../../actions/';
import TypeLink from './TypeLink';
import Markdown from './Markdown';
import FocusTypeButton from './FocusTypeButton';

interface TypeListProps {
  typeGraph: any;
  dispatch: any;
}

class TypeList extends React.Component<TypeListProps, void> {
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
      <div className="doc-explorer-scroll-area doc-explorer-type-list">
        <div className="doc-typelist-root-item doc-typelist-item">
          <TypeLink type={rootType}/>
          <FocusTypeButton typeId={rootType.id} />
          <Markdown
            className="doc-type-description"
            text={rootType.description || 'No Description'}
          />
        </div>
        {_.map(types, type =>
          <div key={type.id} className="doc-typelist-item">
            <TypeLink type={type}/>
            <FocusTypeButton typeId={type.id} />
            <Markdown
              className="doc-type-description"
              text={type.description || 'No Description'}
            />
          </div>
        )}
      </div>
    );
  }
}

export default connect()(TypeList);
