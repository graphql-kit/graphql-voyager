import * as _ from 'lodash';

import * as ActionTypes from '../actions/'
import {
  githubIntrospection,
  swapiIntrospection,
  getSchemaSelector,
  extractTypeId,
} from '../introspection';

var initialState = {
  introspection: {
    presets: {
      'github': githubIntrospection,
      'swapi': swapiIntrospection,
      'custom': null
    },
    activePreset: null,
  },
  panel: {
    showIntrospectionModal: true
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
    currentEdgeId: null
  },
  graphView: {
    focusedId: null,
  },
  menuOpened: false
};


function pushHistory(nodeId: string, previousState): string[] {
  let previousTypesIds = previousState.selected.previousTypesIds;
  let previousId = previousState.selected.currentNodeId;
  if (previousId) {
    const previousTypeId = extractTypeId(previousId);
    const currentTypeId = extractTypeId(nodeId);
    if (_.last(previousTypesIds) !== previousTypeId && previousTypeId !== currentTypeId) {
      previousTypesIds = [...previousTypesIds, previousTypeId];
    }
  }
  return previousTypesIds;
}

export function rootReducer(previousState = initialState, action) {
  const { type, error } = action;
  switch(type) {
    case ActionTypes.CHANGE_ACTIVE_INTROSPECTION:
      let newState = {
        ...previousState,
        introspection: {
          ...previousState.introspection,
          activePreset: action.payload,
        },
        displayOptions: {...initialState.displayOptions},
        svgCache: [],
        currentSvgIndex: null,
        graphView: initialState.graphView,
        selected: initialState.selected,
      };

      newState.displayOptions.rootTypeId = getSchemaSelector(newState).queryType;
      return newState;
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
          currentNodeId
        },
      };
    case ActionTypes.SELECT_EDGE:
      let currentEdgeId = action.payload;

      let nodeId = extractTypeId(currentEdgeId);

      // deselect if click again
      if (currentEdgeId === previousState.selected.currentEdgeId)
        currentEdgeId = null;

      return {
        ...previousState,
        selected: {
          ...previousState.selected,
          previousTypesIds: pushHistory(nodeId, previousState),
          currentNodeId: nodeId,
          currentEdgeId
        },
      };
    case ActionTypes.SELECT_PREVIOUS_TYPE:
      return {
        ...previousState,
        selected: {
          ...previousState.selected,
          previousTypesIds: _.initial(previousState.selected.previousTypesIds),
          currentNodeId: _.last(previousState.selected.previousTypesIds),
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
      return {
        ...previousState,
        panel: {
          ...previousState.panel,
          showIntrospectionModal: true
        }
      }
    case ActionTypes.HIDE_INTROSPECTION_MODAL:
      return {
        ...previousState,
        panel: {
          ...previousState.panel,
          showIntrospectionModal: false
        }
      }
    case ActionTypes.TOGGLE_MENU:
      return {
        ...previousState,
        menuOpened: !previousState.menuOpened
      }
    default:
      return previousState;
  }
}
