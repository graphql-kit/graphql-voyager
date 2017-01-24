import * as _ from 'lodash';

export function stringifyWrappers(wrappers) {
  return _.reduce(wrappers, ([left, right], wrapper) => {
    switch (wrapper) {
      case 'NON_NULL':
        return [left, right + '!'];
      case 'LIST':
        return ['[' + left, right + ']'];
    }
  }, ['', '']);
}

export function buildId(...parts) {
  return parts.join('::');
}

export function extractTypeId(id:string) {
  let [tag, type] = id.split('::');
  return buildId('TYPE', type);
}
