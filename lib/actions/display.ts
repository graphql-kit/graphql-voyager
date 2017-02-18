export const CHANGE_DISPLAY_OPTIONS = 'CHANGE_DISPLAY_OPTIONS';

export function changeDisplayOptions(options) {
  return {
    type: CHANGE_DISPLAY_OPTIONS,
    payload: options,
  };
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

export const CHANGE_EXTRA_INFO_TYPE = 'CHANGE_EXTRA_INFO_TYPE';

export function changeExtraInfoType(type) {
  return {
    type: CHANGE_EXTRA_INFO_TYPE,
    payload: type
  }
}
