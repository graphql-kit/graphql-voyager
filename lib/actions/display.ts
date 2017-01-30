export const CHANGE_DISPLAY_OPTIONS = 'CHANGE_DISPLAY_OPTIONS';
export function changeDisplayOptions(options) {
  return {
    type: CHANGE_DISPLAY_OPTIONS,
    payload: options,
  };
}

export function changeSortByAlphabet(state) {
  return changeDisplayOptions({
    sortByAlphabet: state
  });
}

export function changeSkipRelay(state) {
  return changeDisplayOptions({
    skipRelay: state
  });
}

export function changeRootType(id: string) {
  return changeDisplayOptions({
    rootTypeId: id
  });
}
