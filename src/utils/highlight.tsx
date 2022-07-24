import * as _ from 'lodash';
import { ReactElement } from 'react';

export function highlightTerm(content: string, term: string) {
  if (!term) {
    return content;
  }

  const re = new RegExp('(' + _.escapeRegExp(term) + ')', 'gi');
  const result: string[] = content.split(re);

  // Apply highlight to all odd elements
  for (let i = 1, length = result.length; i < length; i += 2) {
    const result: ReactElement | null = null;
    result[i] = <mark key={i}>{result[i]}</mark>;
  }

  return result;
}
