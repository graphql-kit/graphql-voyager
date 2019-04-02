import * as React from 'react';
import * as _ from 'lodash';

export function highlightTerm(content: string, term: string) {
  if (!term) {
    return content;
  }

  var re = new RegExp('(' + _.escapeRegExp(term) + ')', 'gi');
  var result: any = content.split(re);

  // Apply highlight to all odd elements
  for (var i = 1, length = result.length; i < length; i += 2) {
    result[i] = <span key={i} style={{ backgroundColor: '#ffff03' }}>
      {result[i]}
    </span>;
  }

  return result;
}
