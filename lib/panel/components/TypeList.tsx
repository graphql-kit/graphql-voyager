import * as _ from 'lodash';
import * as React from "react";

import TypeName from './TypeName';
import Markdown from './Markdown';

interface TypeListProps {
  typeGraph: any;
}

export default class TypeList extends React.Component<TypeListProps, void> {
  render() {
    const { typeGraph } = this.props;

    if (typeGraph === null)
      return null;

    const rootType = typeGraph.nodes[typeGraph.rootId];
    const types = _(typeGraph.nodes)
      .values()
      .reject({id: rootType.id})
      .sortBy('name').value();

    return (
      <div>
        <div className="doc-typelist-root-item">
          <TypeName type={rootType}/>
          <Markdown
            className="doc-type-description"
            text={rootType.description || 'No Description'}
          />
        </div>
        {_.map(types, type =>
          <div key={type.id} className="doc-typelist-item">
            <TypeName type={type}/>
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
