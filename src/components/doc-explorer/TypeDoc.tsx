import * as _ from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';
import * as classNames from 'classnames';

import './TypeDoc.css';

import { SimplifiedTypeWithIDs } from '../../introspection/types';

import { selectEdge } from '../../actions';
import { getSelectedType } from '../../selectors';
import { getTypeGraphSelector } from '../../graph';
import TypeList from './TypeList';
import DocNavigation from './DocNavigation';
import Markdown from '../utils/Markdown';
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

class TypeDoc extends React.Component<TypeDocProps> {
  componentDidUpdate(prevProps: TypeDocProps) {
    if (this.props.selectedEdgeId !== prevProps.selectedEdgeId) {
      this.ensureActiveVisible();
    }
  }

  ensureActiveVisible() {
    let itemComponent = this.refs['selectedItem'] as HTMLElement;
    if (!itemComponent) return;

    itemComponent.scrollIntoViewIfNeeded();
  }

  renderTypesDef(type: SimplifiedTypeWithIDs, typeGraph, selectedId: string) {
    let typesTitle;
    let types: {
      id: string;
      type: SimplifiedTypeWithIDs;
    }[];
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

    types = _.filter(types, type => typeGraph.nodes[type.type.id] !== undefined);
    if (_.isEmpty(types)) return null;

    return (
      <div className="doc-category">
        <div className="title">{typesTitle}</div>
        {_.map(types, type => {
          let props: any = {
            key: type.id,
            className: classNames('item', {
              '-selected': type.id === selectedId,
            }),
            onClick: () => {
              dispatch(selectEdge(type.id));
            },
          };
          if (type.id === selectedId) props.ref = 'selectedItem';
          return (
            <div {...props}>
              <TypeLink type={type.type} />
              <Description text={type.type.description} className="-linked-type" />
            </div>
          );
        })}
      </div>
    );
  }

  renderFields(type: SimplifiedTypeWithIDs, selectedId: string) {
    if (_.isEmpty(type.fields)) return null;

    let dispatch = this.props.dispatch;
    return (
      <div className="doc-category">
        <div className="title">{'fields'}</div>
        {_.map(type.fields, field => {
          let props: any = {
            key: field.name,
            className: classNames('item', {
              '-selected': field.id === selectedId,
              '-with-args': !_.isEmpty(field.args),
            }),
            onClick: () => {
              dispatch(selectEdge(field.id));
            },
          };
          if (field.id === selectedId) props.ref = 'selectedItem';
          return (
            <div {...props}>
              <a className="field-name">{field.name}</a>
              <span
                className={classNames('args-wrap', {
                  '-empty': _.isEmpty(field.args),
                })}
              >
                {!_.isEmpty(field.args) && (
                  <span key="args" className="args">
                    {_.map(field.args, arg => (
                      <Argument key={arg.name} arg={arg} expanded={field.id === selectedId} />
                    ))}
                  </span>
                )}
              </span>
              <WrappedTypeName container={field} />
              {field.isDeprecated && <span className="doc-alert-text">{' (DEPRECATED)'}</span>}
              <Markdown text={field.description} className="description-box -field" />
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    const { selectedType, selectedEdgeId, typeGraph } = this.props;

    return (
      <div className="type-doc">
        {(typeGraph && <DocNavigation />) || <span className="loading"> Loading... </span>}
        {!selectedType ? (
          <TypeList typeGraph={typeGraph} />
        ) : (
          <div className="scroll-area">
            <Description className="-doc-type" text={selectedType.description} />
            {this.renderTypesDef(selectedType, typeGraph, selectedEdgeId)}
            {this.renderFields(selectedType, selectedEdgeId)}
          </div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps)(TypeDoc);
