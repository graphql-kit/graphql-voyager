import * as _ from 'lodash';
import * as React from "react";
import { connect } from "react-redux"

import { focusElement } from '../../actions/';
import TypeName from './TypeName';
import Markdown from './Markdown';

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
          <TypeName type={rootType}/>
          <span className="doc-focus-type" onClick={() => {
            dispatch(focusElement(rootType.id));
          }}/>
          <Markdown
            className="doc-type-description"
            text={rootType.description || 'No Description'}
          />
        </div>
        {_.map(types, type =>
          <div key={type.id} className="doc-typelist-item">
            <TypeName type={type}/>
            <span className="doc-focus-type" onClick={() => {
              dispatch(focusElement(type.id));
            }}/>
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
