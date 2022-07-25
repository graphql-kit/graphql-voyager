import * as _ from 'lodash';

export function highlightTerm(content: string, term: string) {
  if (!term) {
    return content;
  }

  const re = new RegExp('(' + _.escapeRegExp(term) + ')', 'gi');
  const result: any = content.split(re);

  // Apply highlight to all odd elements
  for (let i = 1, length = result.length; i < length; i += 2) {
    result[i] = <mark key={i}>{result[i]}</mark>;
  }

  return result;
}
