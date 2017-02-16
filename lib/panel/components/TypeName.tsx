import * as React from "react";
import Popover, { PopoverAnimationHorizontal } from 'material-ui/Popover';

import Description from './Description';
import TypeDetails from './TypeDetails';
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
          <TypeDetails type={type}/>
        </Popover>
        {type.name}
      </span>
    );

  }
}
