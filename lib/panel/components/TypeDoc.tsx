import * as _ from 'lodash';
import * as React from "react";
import { connect } from "react-redux"

import { extractTypeId } from '../../introspection';
import { getTypeGraphSelector } from '../../graph';
import TypeList from './TypeList';
import PreviousType from './PreviousType';
import Markdown from './Markdown';
import TypeLink from './TypeLink';
import Argument from './Argument';

interface TypeDocProps {
  selectedId: string;
  typeGraph: any;
  dispatch: any;
}

function mapStateToProps(state) {
  return {
    selectedId: state.selected.currentId,
    typeGraph: getTypeGraphSelector(state),
  };
}

class TypeDoc extends React.Component<TypeDocProps, void> {
  renderTypesDef(type) {
    let typesTitle;
    let types;

    switch (type.kind) {
      case 'UNION':
        typesTitle = 'possible types';
        types = type.possibleTypes;
        break;
      case 'INTERFACE':
        typesTitle = 'implementations';
        types = type.derivedTypes;
        break;
      case 'OBJECTS':
        typesTitle = 'implements';
        types = type.interfaces;
        break;
      default:
        return null;
    }

    if (_.isEmpty(types))
      return null;

    return (
      <div className="doc-category">
        <div className="doc-category-title">
          {typesTitle}
        </div>
        {_.map(types, type =>
          <div key={type.id} className="doc-category-item">
            <TypeLink type={type.type}/>
          </div>
        )}
      </div>
    );
  }

  renderFields(type) {
    if (_.isEmpty(type.fields))
      return null;

    return (
      <div className="doc-category">
        <div className="doc-category-title">
          {'fields'}
        </div>
        {_.map(type.fields, field => (
          <div key={field.name} className="doc-category-item">
            <a className="field-name">
              {field.name}
            </a>
            {!_.isEmpty(field.args) && [
              '(',
              <span key="args">
                {_.map(field.args, arg =>
                  <Argument
                    key={arg.name}
                    arg={arg}
                  />
                )}
              </span>,
              ')'
            ]}
            {': '}
            <TypeLink type={field.type} wrappers={field.typeWrappers} />
            {
              field.isDeprecated &&
              <span className="doc-alert-text">{' (DEPRECATED)'}</span>
            }
          </div>)
        )}
      </div>
    );
  }

  render() {
    const {
      dispatch,
      selectedId,
      typeGraph
    } = this.props;

    if (selectedId === null)
      return (<TypeList typeGraph={typeGraph}/>);

    var type = typeGraph.nodes[extractTypeId(selectedId)];

    return (
      <div>
        <PreviousType/>
        <h3>{type.name}</h3>
        <Markdown
          className="doc-type-description" 
          text={type.description || 'No Description'}
        />
        {this.renderTypesDef(type)}
        {this.renderFields(type)}
      </div>
    );
  }
}

export default connect(mapStateToProps)(TypeDoc);
