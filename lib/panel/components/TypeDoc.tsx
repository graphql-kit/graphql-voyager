import * as _ from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux'
import * as classNames from 'classnames';

import { selectEdge } from '../../actions';
import { getSelectedType } from '../../selectors';
import { getTypeGraphSelector } from '../../graph';
import TypeList from './TypeList';
import PreviousType from './PreviousType';
import Markdown from './Markdown';
import Description from './Description';
import TypeLink from './TypeLink';
import WrappedTypeName from './WrappedTypeName';
import Argument from './Argument';

interface TypeDocProps {
  selectedType: any;
  selectedEdgeId: string;
  typeGraph: any;
  dispatch: any;
}

function mapStateToProps(state) {
  return {
    selectedType: getSelectedType(state),
    selectedEdgeId: state.selected.currentEdgeId,
    typeGraph: getTypeGraphSelector(state),
  };
}

class TypeDoc extends React.Component<TypeDocProps, void> {
  componentDidUpdate(prevProps:TypeDocProps) {
    if (this.props.selectedEdgeId !== prevProps.selectedEdgeId) {
      this.ensureActiveVisible();
    }
  }

  ensureActiveVisible() {
    let itemComponent = this.refs['selectedItem'] as HTMLElement
    if (!itemComponent) return;

    itemComponent.scrollIntoViewIfNeeded();
  }

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
        {_.map(types, type => {
          let props:any = {
            key: type.id,
            className: classNames({
              'doc-category-item': true,
              'selected': type.id === selectedId
            }),
            onClick:() => {
              dispatch(selectEdge(type.id));
            }
          }
          if (type.id === selectedId) props.ref = 'selectedItem';
          return <div {...props}>
            <TypeLink type={type.type}/>
            <Description
              text={type.type.description}
              className="linked-type-description"
            />
          </div>
        })}
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
        {_.map(type.fields, field => {
          let props:any = {
            key: field.name,
            className: classNames({
              'doc-category-item': true,
              'selected': field.id === selectedId
            }),
            onClick: () => {
              dispatch(selectEdge(field.id));
            }
          }
          if (field.id === selectedId) props.ref = 'selectedItem';
          return <div {...props}>
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
          </div>
        })}
      </div>
    );
  }

  render() {
    const {
      dispatch,
      selectedType,
      selectedEdgeId,
      typeGraph
    } = this.props;

    return (
      <div className="doc-explorer-contents">
        <PreviousType />
        {
          !selectedType ?
            <TypeList typeGraph={typeGraph}/> :
            <div className="doc-explorer-scroll-area">
              <Description
                className="doc-type-description"
                text={selectedType.description}
              />
              {this.renderTypesDef(selectedType, typeGraph, selectedEdgeId)}
              {this.renderFields(selectedType, selectedEdgeId)}
            </div>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps)(TypeDoc);
