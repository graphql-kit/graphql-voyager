import * as ActionTypes from '../actions/'
import { githubIntrospection, swapiIntrospection } from '../introspection';
import * as _ from 'lodash';

var debugInitialPreset = 'swapi';

var initialState = {
  introspection: {
    presets: {
      'github': githubIntrospection,
      'swapi': swapiIntrospection,
      'custom': null
    },
    activePreset: debugInitialPreset || null,
  },
  panel: {
    showIntrospectionModal: debugInitialPreset ? false : true
  },
  displayOptions: {
    skipRelay: true,
    sortByAlphabet: false
  },
  currentSvgIndex: null,
  svgCache: [
  ],
  selectedId: null,
  graphView: {
    focusedId: null,
  }
};

export function rootReducer(previousState = initialState, action) {
  const { type, error } = action;
  switch(type) {
    case ActionTypes.CHANGE_ACTIVE_INTROSPECTION:
      return {
        ...previousState,
        introspection: {
          ...previousState.introspection,
          activePreset: action.payload,
        },
        displayOptions: {...initialState.displayOptions},
        svgCache: [],
        currentSvgIndex: null,
        selectedNodeId: null,
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
        selectedNodeId: null,
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
    case ActionTypes.SELECT_ELEMENT:
      return {
        ...previousState,
        selectedId: action.payload,
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
    default:
      return previousState;
  }
}
