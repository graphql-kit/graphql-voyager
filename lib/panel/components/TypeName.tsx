import * as React from "react";
import Popover, { PopoverAnimationHorizontal } from 'material-ui/Popover';

import Markdown from './Markdown';
import {
  isBuiltInScalarType,
  isScalarType,
  isInputObjectType,
} from '../../introspection';

interface TypeNameProps {
  type: any;
}

interface TypeNameState {
  isDetailsOpen: boolean;
}

export default class TypeName extends React.Component<TypeNameProps, TypeNameState> {
  constructor(props) {
    super(props);
    this.state = {isDetailsOpen: false};
  }

  render() {
    const { type } = this.props;
    const { isDetailsOpen } = this.state;

    let className;
    if (isBuiltInScalarType(type))
      className = 'built-in-type-name';
    else if (isScalarType(type))
      className = 'scalar-type-name';
    else if (isInputObjectType(type))
      className = 'input-obj-type-name';

    const $anchor = this.refs['popurAnchor'];
    return (
      <span ref="popurAnchor" className={className}
       onClick={() => {
         this.setState({...this.state, isDetailsOpen: true});
       }}
      >
        <Popover
          open={isDetailsOpen}
          // anchorEl={$anchor}
          // anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          // targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={() => {
            this.setState({...this.state, isDetailsOpen: false});
          }}
          animation={PopoverAnimationHorizontal}
          canAutoPosition={false}
          className="details-popover"
          useLayerForClickAway={false}
        >
          <h3>{type.name}</h3>
          <Markdown
            className="doc-type-description"
            text={type.description || 'No Description'}
          />
        </Popover>
        {type.name}
      </span>
    );

  }
}
