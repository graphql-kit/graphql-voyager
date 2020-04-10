import * as React from 'react';

import { isMatch, highlightTerm } from '../../utils';
import Markdown from '../utils/Markdown';

interface OtherSearchResultsProps {
  typeGraph: any;
  withinType: any;
  searchValue: string;
  onTypeLink: (type: any) => void;
  onFieldLink: (field: any, type: any) => void;
}

export default class OtherSearchResults extends React.Component<OtherSearchResultsProps> {
  render() {
    const { typeGraph, withinType, searchValue, onTypeLink, onFieldLink } = this.props;

    const types: any = Object.values(typeGraph.nodes).filter(type => type !== withinType);

    const matchedTypes = [];
    if (withinType != null) {
      for (const type of types) {
        if (isMatch(type.name, searchValue) || isMatch(type.description, searchValue)) {
          matchedTypes.push(
            <div className="item" key={type.name} onClick={() => onTypeLink(type)}>
              <span className="type-name">{highlightTerm(type.name, searchValue)}</span>
              <Markdown
                text={type.description}
                termToHighlight={searchValue}
                className="description-box -field"
              />
            </div>,
          );
        }
      }
    }

    const matchedFields = [];
    for (const type of types) {
      if (matchedFields.length >= 100) {
        break;
      }
      if (type.fields == null) {
        continue;
      }

      const fields: any = Object.values(type.fields);
      for (const field of fields) {
        const args: any = Object.values(field.args);
        const matchingArgs = args.filter(
          arg => isMatch(arg.name, searchValue) || isMatch(arg.description, searchValue),
        );

        if (
          !(isMatch(field.name, searchValue) || isMatch(field.description, searchValue)) &&
          matchingArgs.length === 0
        ) {
          continue;
        }

        matchedFields.push(
          <div className="item" key={field.id} onClick={() => onFieldLink(field, type)}>
            <span className="type-name">{type.name}</span>
            <span className="field-name">{highlightTerm(field.name, searchValue)}</span>
            {matchingArgs.length > 0 && (
              <span className="args args-wrap">
                {matchingArgs.map(arg => (
                  <span key={arg.id} className="arg-wrap -expanded">
                    {/* FIXME: remove inline style */}
                    <span className="arg arg-name" style={{ paddingLeft: '15px' }}>
                      {highlightTerm(arg.name, searchValue)}
                    </span>
                    {/* FIXME: remove inline style */}
                    <span style={{ display: 'block', paddingLeft: '15px' }}>
                      <Markdown
                        className="arg-description"
                        text={arg.description}
                        termToHighlight={searchValue}
                      />
                    </span>
                  </span>
                ))}
              </span>
            )}
            <Markdown
              text={field.description}
              termToHighlight={searchValue}
              className="description-box -field"
            />
          </div>,
        );
      }
    }

    return (
      <div className="other-search-results doc-category">
        <div className="title">other results</div>
        {matchedTypes.length + matchedFields.length === 0 ? (
          <div className="doc-alert-text -search">No results found.</div>
        ) : (
          <>
            {matchedTypes}
            {matchedFields}
          </>
        )}
      </div>
    );
  }
}
