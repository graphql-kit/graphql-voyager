import * as _ from 'lodash';

import * as ActionTypes from '../actions/'
import {
  githubIntrospection,
  swapiIntrospection,
  brandFolderIntrospection,
  hslIntrospection,
  extractTypeId,
} from '../introspection';

var initialState = {
  introspection: {
    presets: {
      'Star Wars': swapiIntrospection,
      'BrandFolder': brandFolderIntrospection,
      'OpenTripPlanner': hslIntrospection,
      'GitHub': githubIntrospection,
      'custom': null
    },
    activePreset: null,
  },
  panel: {
    showIntrospectionModal: false,
    notApplied: null,
  },
  displayOptions: {
    rootTypeId: null,
    skipRelay: true,
    sortByAlphabet: false
  },
  currentSvgIndex: null,
  svgCache: [
  ],
  selected: {
    previousTypesIds: [],
    currentNodeId: null,
    currentEdgeId: null,
    scalar: null
  },
  graphView: {
    focusedId: null,
  },
  menuOpened: false,
  errorMessage: null,
};


function pushHistory(currentTypeId: string, previousState): string[] {
  let previousTypesIds = previousState.selected.previousTypesIds;
  let previousTypeId = previousState.selected.currentNodeId;

  if (previousTypeId === null || previousTypeId === currentTypeId)
    return previousTypesIds;

  if (_.last(previousTypesIds) !== previousTypeId)
    return [...previousTypesIds, previousTypeId];
}

export function rootReducer(previousState = initialState, action) {
  const { type, error } = action;
  switch(type) {
    case ActionTypes.CHANGE_ACTIVE_INTROSPECTION:
      return {
        ...previousState,
        introspection: {
          ...previousState.introspection,
          activePreset: action.payload.presetName,
        },
        displayOptions: action.payload.displayOptions || initialState.displayOptions,
        svgCache: [],
        currentSvgIndex: null,
        graphView: initialState.graphView,
        selected: initialState.selected,
      };
    case ActionTypes.CHANGE_CUSTOM_INTROSPECTION:
      return {
        ...previousState,
        introspection: {
          ...previousState.introspection,
          presets: {
            ...previousState.introspection.presets,
            custom: action.payload
          }
        }
      }
    case ActionTypes.CHANGE_DISPLAY_OPTIONS:
      let displayOptions = {...previousState.displayOptions, ...action.payload};
      let cacheIdx = _.findIndex(previousState.svgCache, cacheItem => {
        return _.isEqual(cacheItem.displayOptions, displayOptions)
      });
      return {
        ...previousState,
        displayOptions,
        currentSvgIndex: cacheIdx >= 0 ? cacheIdx : null,
        graphView: initialState.graphView,
        selected: initialState.selected,
      };
    case ActionTypes.SVG_RENDERING_FINISHED:
      return {
        ...previousState,
        svgCache: previousState.svgCache.concat([{
          displayOptions: previousState.displayOptions,
          svg: action.payload
        }]),
        currentSvgIndex: previousState.svgCache.length
      };
    case ActionTypes.SELECT_NODE:
      const currentNodeId = action.payload;
      if (currentNodeId === previousState.selected.currentNodeId)
        return previousState;

      return {
        ...previousState,
        selected: {
          ...previousState.selected,
          previousTypesIds: pushHistory(currentNodeId, previousState),
          currentNodeId,
          currentEdgeId: null,
          scalar: null
        },
      };
    case ActionTypes.SELECT_EDGE:
      let currentEdgeId = action.payload;

      // deselect if click again
      if (currentEdgeId === previousState.selected.currentEdgeId) {
        return {
          ...previousState,
          selected: {
            ...previousState.selected,
            currentEdgeId: null,
            scalar: null
          }
        };
      }

      let nodeId = extractTypeId(currentEdgeId);
      return {
        ...previousState,
        selected: {
          ...previousState.selected,
          previousTypesIds: pushHistory(nodeId, previousState),
          currentNodeId: nodeId,
          currentEdgeId,
          scalar: null
        },
      };
    case ActionTypes.SELECT_PREVIOUS_TYPE:
      return {
        ...previousState,
        selected: {
          ...previousState.selected,
          previousTypesIds: _.initial(previousState.selected.previousTypesIds),
          currentNodeId: _.last(previousState.selected.previousTypesIds),
          currentEdgeId: null,
          scalar: null
        },
      };
    case ActionTypes.CLEAR_SELECTION:
      return {
        ...previousState,
        selected: initialState.selected,
      };
    case ActionTypes.FOCUS_ELEMENT:
      return {
        ...previousState,
        graphView: {
          ...previousState.graphView,
          focusedId: action.payload,
        },
      };
    case ActionTypes.FOCUS_ELEMENT_DONE:
      if (previousState.graphView.focusedId !== action.payload)
        return previousState;

      return {
        ...previousState,
        graphView: {
          ...previousState.graphView,
          focusedId: null,
        },
      };
    case ActionTypes.SHOW_INTROSPECTION_MODAL:
      const customPreset = previousState.introspection.presets['custom'];
      const customPresetText =  customPreset ? JSON.stringify(customPreset, null, 2) : null;
      return {
        ...previousState,
        panel: {
          ...previousState.panel,
          showIntrospectionModal: true,
          notApplied: {
            activePreset: previousState.introspection.activePreset,
            displayOptions: previousState.displayOptions,
            customPresetText
          }
        },
        errorMessage: initialState.errorMessage,
      }
    case ActionTypes.CHANGE_NOT_APPLIED_ACTIVE_PRESET:
      const previousNa = previousState.panel.notApplied;
      const naActivePreset = action.payload;
      if (naActivePreset === previousNa.activePreset)
        return previousState;

      return {
        ...previousState,
        panel: {
          ...previousState.panel,
          notApplied: {
            ...previousState.panel.notApplied,
            activePreset: naActivePreset,
            displayOptions: initialState.displayOptions,
          }
        },
        errorMessage: initialState.errorMessage,
      }
    case ActionTypes.CHANGE_NOT_APPLIED_CUSTOM_PRESET:
      return {
        ...previousState,
        panel: {
          ...previousState.panel,
          notApplied: {
            ...previousState.panel.notApplied,
            displayOptions: initialState.displayOptions,
            customPresetText: action.payload,
          },
        },
        errorMessage: initialState.errorMessage,
      }
    case ActionTypes.CHANGE_NOT_APPLIED_DISPLAY_OPTIONS:
      return {
        ...previousState,
        panel: {
          ...previousState.panel,
          notApplied: {
            ...previousState.panel.notApplied,
            displayOptions: action.payload,
          },
        },
      }
    case ActionTypes.HIDE_INTROSPECTION_MODAL:
      return {
        ...previousState,
        panel: {
          ...previousState.panel,
          showIntrospectionModal: false,
          notApplied: null,
        }
      }
    case ActionTypes.TOGGLE_MENU:
      return {
        ...previousState,
        menuOpened: !previousState.menuOpened
      }
    case ActionTypes.REPORT_ERROR:
      return {
        ...previousState,
        errorMessage: action.payload,
      }
    case ActionTypes.CLEAR_ERROR:
      return {
        ...previousState,
        errorMessage: initialState.errorMessage,
      }
    case ActionTypes.CHANGE_SELECTED_TYPEINFO:
      return {
        ...previousState,
        selected: {
          ...previousState.selected,
          typeinfo: action.payload
        }
      }
    default:
      return previousState;
  }
}
