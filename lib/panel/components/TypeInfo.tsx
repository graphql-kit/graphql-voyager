import * as _ from 'lodash';
import * as React from "react";
import { connect } from "react-redux"

import { getTypeGraphSelector, TypeGraph, stringifyWrappers } from '../../graph';

interface TypeInfoProps {
  selectedId: string;
  typeGraph: any;
  dispatch: any;
}

function mapStateToProps(state) {
  return {
    selectedId: state.selectedId,
    typeGraph: new TypeGraph(getTypeGraphSelector(state)),
  };
}

class TypeInfo extends React.Component<TypeInfoProps, void> {
  renderArgs(field:any) {
    if (_.isEmpty(field.args))
      return null;
    return <span>({
      _.map(_.values(field.args), (arg, i) => {
        const [leftWrap, rightWrap] = stringifyWrappers(field.typeWrappers);
        return <span key={i}>
          {(i !== 0) ? ', ' : ''}{arg.name}:{leftWrap}{arg.type}{rightWrap}
        </span>
      })
    })</span>
  }

  renderFields(type: any) {
    return <div> Fields<br/>
      {_.map(type.fields, (field, i) => {
        return <div key={i}><a>{field.name}
        {/* TODO: onClick => select edge */}
        </a>{this.renderArgs(field)}</div>;
      })}
    </div>
  }

  renderSubProperties(type: any) {
    switch (type.kind) {
      case 'OBJECT':
        return <div>{this.renderFields(type)}</div>;
      default:
        return null;
    }
  }

  render() {
    const {
      dispatch,
      selectedId,
      typeGraph
    } = this.props;

    if (selectedId === null)
      return null;

    var selectedNode = typeGraph.getTypeById(selectedId);

    return (
      <div>
        <h3>{selectedNode.name}</h3>
        <div>{selectedNode.description}</div>
        {this.renderSubProperties(selectedNode)}
      </div>
    );
  }
}

export default connect(mapStateToProps)(TypeInfo);
