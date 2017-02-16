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

export const TOGGLE_MENU = 'TOGGLE_MENU';

export function toggleMenu() {
  return {
    type: TOGGLE_MENU
  }
}

export const REPORT_ERROR = 'REPORT_ERROR';

export function reportError(msg) {
  return {
    type: REPORT_ERROR,
    payload: msg
  }
}

export const CLEAR_ERROR = 'CLEAR_ERROR';

export function clearError() {
  return {
    type: CLEAR_ERROR
  }
}
