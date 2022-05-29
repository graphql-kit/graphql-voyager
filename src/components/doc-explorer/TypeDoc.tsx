import * as _ from 'lodash';
import * as React from 'react';
import classNames from 'classnames';

import './TypeDoc.css';

import { SimplifiedTypeWithIDs } from '../../introspection/types';
import { isMatch, highlightTerm } from '../../utils';

import Markdown from '../utils/Markdown';
import Description from './Description';
import TypeLink from './TypeLink';
import WrappedTypeName from './WrappedTypeName';
import Argument from './Argument';

interface TypeDocProps {
  selectedType: any;
  selectedEdgeID: string;
  typeGraph: any;
  filter: string;
  onSelectEdge: (string) => void;
  onTypeLink: (any) => void;
}

export default class TypeDoc extends React.Component<TypeDocProps> {
  componentDidUpdate(prevProps: TypeDocProps) {
    if (this.props.selectedEdgeID !== prevProps.selectedEdgeID) {
      this.ensureActiveVisible();
    }
  }

  componentDidMount() {
    this.ensureActiveVisible();
  }

  ensureActiveVisible() {
    let itemComponent = this.refs['selectedItem'] as HTMLElement;
    if (!itemComponent) return;

    itemComponent.scrollIntoViewIfNeeded();
  }

  render() {
    const {
      selectedType,
      selectedEdgeID,
      typeGraph,
      filter,
      onSelectEdge,
      onTypeLink,
    } = this.props;

    return (
      <>
        <Description className="-doc-type" text={selectedType.description} />
        {renderTypesDef(selectedType, selectedEdgeID)}
        {renderFields(selectedType, selectedEdgeID)}
      </>
    );

    function renderTypesDef(type: SimplifiedTypeWithIDs, selectedId) {
      let typesTitle;
      let types: {
        id: string;
        type: SimplifiedTypeWithIDs;
      }[];

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

      types = types.filter(
        ({ type }) => typeGraph.nodes[type.id] && isMatch(type.name, filter),
      );

      if (types.length === 0) return null;

      return (
        <div className="doc-category">
          <div className="title">{typesTitle}</div>
          {_.map(types, (type) => {
            let props: any = {
              key: type.id,
              className: classNames('item', {
                '-selected': type.id === selectedId,
              }),
              onClick: () => onSelectEdge(type.id),
            };
            if (type.id === selectedId) props.ref = 'selectedItem';
            return (
              <div {...props}>
                <TypeLink
                  type={type.type}
                  onClick={onTypeLink}
                  filter={filter}
                />
                <Description
                  text={type.type.description}
                  className="-linked-type"
                />
              </div>
            );
          })}
        </div>
      );
    }

    function renderFields(type: SimplifiedTypeWithIDs, selectedId: string) {
      let fields: any = Object.values(type.fields);
      fields = fields.filter((field) => {
        const args: any = Object.values(field.args);
        const matchingArgs = args.filter((arg) => isMatch(arg.name, filter));

        return isMatch(field.name, filter) || matchingArgs.length > 0;
      });

      if (fields.length === 0) return null;

      return (
        <div className="doc-category">
          <div className="title">fields</div>
          {fields.map((field) => {
            let props: any = {
              key: field.name,
              className: classNames('item', {
                '-selected': field.id === selectedId,
                '-with-args': !_.isEmpty(field.args),
              }),
              onClick: () => onSelectEdge(field.id),
            };
            if (field.id === selectedId) props.ref = 'selectedItem';
            return (
              <div {...props}>
                <a className="field-name">
                  {highlightTerm(field.name, filter)}
                </a>
                <span
                  className={classNames('args-wrap', {
                    '-empty': _.isEmpty(field.args),
                  })}
                >
                  {!_.isEmpty(field.args) && (
                    <span key="args" className="args">
                      {_.map(field.args, (arg) => (
                        <Argument
                          key={arg.name}
                          arg={arg}
                          expanded={field.id === selectedId}
                          onTypeLink={onTypeLink}
                        />
                      ))}
                    </span>
                  )}
                </span>
                <WrappedTypeName container={field} onTypeLink={onTypeLink} />
                {field.isDeprecated && (
                  <span className="doc-alert-text"> DEPRECATED</span>
                )}
                <Markdown
                  text={field.description}
                  className="description-box -field"
                />
              </div>
            );
          })}
        </div>
      );
    }
  }
}
