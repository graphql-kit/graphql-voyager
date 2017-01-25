import * as _ from 'lodash';
import * as React from "react";

import TypeLink from './TypeLink';

interface TypeListProps {
  typeGraph: any;
}

export default class TypeList extends React.Component<TypeListProps, void> {
  render() {
    const { typeGraph } = this.props;
    const typeNames = _(typeGraph).map('name').sort().value();
    return (
      <div>
        {_.map(typeNames, name =>
          <div key={name} className="doc-typelist-item">
            <TypeLink name={name}/>
          </div>
        )}
      </div>
    );
  }
}
