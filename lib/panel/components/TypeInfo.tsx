import * as _ from 'lodash';
import * as React from "react";
import { connect } from "react-redux"

interface TypeInfoProps {
  selectedId: string;
  dispatch: any;
}

function mapStateToProps(state) {
  return {
    selectedId: state.selectedId,
  };
}

class TypeInfo extends React.Component<TypeInfoProps, void> {
  render() {
    const {
      dispatch,
      selectedId
    } = this.props;

    return (
      <div>
        {selectedId}
      </div>
    );
  }
}

export default connect(mapStateToProps)(TypeInfo);
