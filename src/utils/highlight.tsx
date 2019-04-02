import * as React from 'react';
import * as reactStringReplace from 'react-string-replace';

export function highlightTerm(content: string, term: string) {
  return term
    ? reactStringReplace(content, term, (match, i) => (
        <span key={i} style={{ backgroundColor: '#ffff03' }}>
          {match}
        </span>
      ))
    : content;
}
