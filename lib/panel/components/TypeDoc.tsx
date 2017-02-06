import * as _ from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux'
import { selectEdge } from '../../actions/';

import * as classNames from 'classnames';

import { extractTypeId } from '../../introspection';
import { getTypeGraphSelector } from '../../graph';
import TypeList from './TypeList';
import PreviousType from './PreviousType';
import Markdown from './Markdown';
import TypeName from './TypeName';
import WrappedTypeName from './WrappedTypeName';
import Argument from './Argument';

interface TypeDocProps {
  selectedId: string;
  selectedEdgeId: string;
  typeGraph: any;
  dispatch: any;
}

function mapStateToProps(state) {
  return {
    selectedId: state.selected.currentNodeId,
    selectedEdgeId: state.selected.currentEdgeId,
    typeGraph: getTypeGraphSelector(state),
  };
}

class TypeDoc extends React.Component<TypeDocProps, void> {
  renderTypesDef(type, typeGraph, selectedId) {
    let typesTitle;
    let types;
    let dispatch = this.props.dispatch;

    switch (type.kind) {
      case 'UNION':
        typesTitle = 'possible types';
        types = type.possibleTypes;
        break;
      case 'INTERFACE':
        typesTitle = 'implementations';
        types = type.derivedTypes;
        break;
      case 'OBJECT':
        typesTitle = 'implements';
        types = type.interfaces;
        break;
      default:
        return null;
    }

    types = _.filter(types, type => (typeGraph.nodes[type.type.id] !== undefined));
    if (_.isEmpty(types))
      return null;

    return (
      <div className="doc-category">
        <div className="doc-category-title">
          {typesTitle}
        </div>
        {_.map(types, type =>
          <div key={type.id} className={classNames({
            'doc-category-item': true,
            'selected': type.id === selectedId
          })}
          onClick={() => {
            dispatch(selectEdge(type.id));
          }}>
            <TypeName type={type.type}/>
            <Markdown text={type.type.description} className="linked-type-description"/>
          </div>
        )}
      </div>
    );
  }

  renderFields(type, selectedId) {
    if (_.isEmpty(type.fields))
      return null;

    let dispatch = this.props.dispatch;
    return (
      <div className="doc-category">
        <div className="doc-category-title">
          fields
        </div>
        {_.map(type.fields, field => (
          <div key={field.name} className={classNames({
            'doc-category-item': true,
            'selected': field.id === selectedId
          })}
          onClick={() => {
            dispatch(selectEdge(field.id));
          }}>
            <a className="field-name">
              {field.name}
            </a>
            <span className={classNames({
                'args-wrap': true,
                'empty': _.isEmpty(field.args)
              })
            }>
              {!_.isEmpty(field.args) &&
                <span key="args" className="args">
                  {_.map(field.args, arg =>
                    <Argument
                      key={arg.name}
                      arg={arg}
                    />
                  )}
                </span>
              }
            </span>
            <WrappedTypeName container={field} />
            { field.isDeprecated &&
              <span className="doc-alert-text">{' (DEPRECATED)'}</span>
            }
            <Markdown text={field.description} className="field-description"/>
          </div>)
        )}
      </div>
    );
  }

  render() {
    const {
      dispatch,
      selectedId,
      selectedEdgeId,
      typeGraph
    } = this.props;

    let content;
    if (selectedId === null)
      content = (<TypeList typeGraph={typeGraph}/>)
    else {
      let type = typeGraph.nodes[extractTypeId(selectedId)];
      content = (
        <div className="doc-explorer-scroll-area">
          <h3>{type.name}</h3>
          <Markdown
            className="doc-type-description"
            text={type.description || 'No Description'}
          />
          {this.renderTypesDef(type, typeGraph, selectedEdgeId)}
          {this.renderFields(type, selectedEdgeId)}
        </div>
      );
    }

    return (
      <div className="doc-explorer-contents">
        <div className="previous-type-area">
          {selectedId !== null && <PreviousType />}
        </div>
        {content}
      </div>
    );
  }
}

export default connect(mapStateToProps)(TypeDoc);
