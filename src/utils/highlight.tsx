import * as _ from 'lodash';

export function highlightTerm(content: string, term: string) {
  if (!term) {
    return content;
  }

  let re = new RegExp('(' + _.escapeRegExp(term) + ')', 'gi');
  let result: any = content.split(re);

  // Apply highlight to all odd elements
  for (let i = 1, length = result.length; i < length; i += 2) {
    result[i] = <mark key={i}>{result[i]}</mark>;
  }

  return result;
}
