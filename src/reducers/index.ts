import * as _ from 'lodash';

import * as ActionTypes from '../actions/';

import { extractTypeId } from '../introspection';

export type DisplayOptions = {
  rootTypeId?: string;
  skipRelay: boolean;
  sortByAlphabet: boolean;
  hideRoot: boolean;
};

export type StateInterface = {
  schema: any;
  schemaModal: {
    opened: boolean;
    activePreset: string | null;
    notApplied: {
      displayOptions: DisplayOptions;
      presetValue: any;
      activePreset: string;
    } | null;
  };
  displayOptions: DisplayOptions;
  currentSvgIndex: number | null;
  svgCache: {
    displayOptions: DisplayOptions;
    svg: string;
  }[];
  selected: {
    previousTypesIds: string[];
    currentNodeId: string | null;
    currentEdgeId: string | null;
    scalar: string | null;
  };
  graphView: {
    focusedId: string | null;
  };
  menuOpened: boolean;
  errorMessage: string | null;
};

const initialState: StateInterface = {
  schema: null,
  schemaModal: {
    opened: false,
    activePreset: null,
    notApplied: null,
  },
  displayOptions: {
    rootTypeId: undefined,
    skipRelay: true,
    sortByAlphabet: false,
    hideRoot: false,
  },
  currentSvgIndex: null,
  svgCache: [],
  selected: {
    previousTypesIds: [],
    currentNodeId: null,
    currentEdgeId: null,
    scalar: null,
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

  if (previousTypeId === null || previousTypeId === currentTypeId) return previousTypesIds;

  if (_.last(previousTypesIds) !== previousTypeId) return [...previousTypesIds, previousTypeId];
}

export function rootReducer(previousState = initialState, action) {
  const { type } = action;
  switch (type) {
    case ActionTypes.CHANGE_SCHEMA:
      return {
        ...previousState,
        schema: action.payload.introspection,
        displayOptions: _.defaults(action.payload.displayOptions, initialState.displayOptions),
        svgCache: [],
        currentSvgIndex: null,
        graphView: initialState.graphView,
        selected: initialState.selected,
      };
    case ActionTypes.CHANGE_DISPLAY_OPTIONS:
      let displayOptions = {
        ...previousState.displayOptions,
        ...action.payload,
      };
      let cacheIdx = _.findIndex(previousState.svgCache, cacheItem => {
        return _.isEqual(cacheItem.displayOptions, displayOptions);
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
        svgCache: previousState.svgCache.concat([
          {
            displayOptions: previousState.displayOptions,
            svg: action.payload,
          },
        ]),
        currentSvgIndex: previousState.svgCache.length,
      };
    case ActionTypes.SELECT_NODE:
      const currentNodeId = action.payload;
      if (currentNodeId === previousState.selected.currentNodeId) return previousState;

      return {
        ...previousState,
        selected: {
          ...previousState.selected,
          previousTypesIds: pushHistory(currentNodeId, previousState),
          currentNodeId,
          currentEdgeId: null,
          scalar: null,
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
            scalar: null,
          },
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
          scalar: null,
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
          scalar: null,
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
      if (previousState.graphView.focusedId !== action.payload) return previousState;

      return {
        ...previousState,
        graphView: {
          ...previousState.graphView,
          focusedId: null,
        },
      };
    case ActionTypes.SHOW_SCHEMA_MODAL:
      const presetValue = previousState.schema;
      return {
        ...previousState,
        schemaModal: {
          ...previousState.schemaModal,
          opened: true,
          notApplied: {
            //schema: schema,
            activePreset: previousState.schemaModal.activePreset,
            displayOptions: previousState.displayOptions,
            presetValue,
          },
        },
        errorMessage: initialState.errorMessage,
      };
    case ActionTypes.CHANGE_ACTIVE_PRESET:
      return {
        ...previousState,
        schemaModal: {
          ...previousState.schemaModal,
          activePreset: action.payload,
        },
      };
    case ActionTypes.CHANGE_NOT_APPLIED_ACTIVE_PRESET:
      const naActivePreset = action.payload.presetName;
      const naSchema = action.payload.schema;

      return {
        ...previousState,
        schemaModal: {
          ...previousState.schemaModal,
          notApplied: {
            ...previousState.schemaModal.notApplied,
            presetValue: naSchema,
            activePreset: naActivePreset,
            displayOptions: initialState.displayOptions,
          },
        },
        errorMessage: initialState.errorMessage,
      };
    case ActionTypes.CHANGE_NOT_APPLIED_DISPLAY_OPTIONS:
      return {
        ...previousState,
        schemaModal: {
          ...previousState.schemaModal,
          notApplied: {
            ...previousState.schemaModal.notApplied,
            displayOptions: action.payload,
          },
        },
      };
    case ActionTypes.HIDE_SCHEMA_MODAL:
      return {
        ...previousState,
        schemaModal: {
          ...previousState.schemaModal,
          opened: false,
          notApplied: null,
        },
      };
    case ActionTypes.TOGGLE_MENU:
      return {
        ...previousState,
        menuOpened: !previousState.menuOpened,
      };
    case ActionTypes.REPORT_ERROR:
      return {
        ...previousState,
        errorMessage: action.payload,
      };
    case ActionTypes.CLEAR_ERROR:
      return {
        ...previousState,
        errorMessage: initialState.errorMessage,
      };
    case ActionTypes.CHANGE_SELECTED_TYPEINFO:
      return {
        ...previousState,
        selected: {
          ...previousState.selected,
          typeinfo: action.payload,
        },
      };
    default:
      return previousState;
  }
}
