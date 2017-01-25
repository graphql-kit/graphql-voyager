import * as _ from 'lodash';
import * as React from "react";

import TypeLink from './TypeLink';
import Markdown from './Markdown';

interface TypeListProps {
  typeGraph: any;
}

export default class TypeList extends React.Component<TypeListProps, void> {
  render() {
    const { typeGraph } = this.props;
    const types = _.sortBy(typeGraph, 'name');
    return (
      <div>
        {_.map(types, type =>
          <div key={type.id} className="doc-typelist-item">
            <TypeLink name={type.name}/>
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
