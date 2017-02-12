import * as React from "react";
import { connect } from "react-redux"

import { selectNode, focusElement } from '../../actions/';

interface TypeLinkProps {
  type: any;
  dispatch: any;
}

class TypeLink extends React.Component<TypeLinkProps, void> {
  render() {
    const {
      type,
      dispatch,
    } = this.props;

    return (
      <a
        className="object-type-name"
        onClick={(event) => {
          event.stopPropagation();
          dispatch(focusElement(type.id));
          dispatch(selectNode(type.id));
        }}
      >{type.name}</a>
    );
  }
}

export default connect()(TypeLink);
