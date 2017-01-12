import * as ActionTypes from '../actions'
import { githubIntrospection, swapiIntrospection } from '../introspection';

var initialState = {
  introspection: {
    presets: {
      'github': githubIntrospection,
      'swapi': swapiIntrospection,
      'custom': ''
    },
    activePreset: null,
  },
  panel: {
    showIntrospectionModal: true,
  },
  displayOptions: {
    skipRelay: true,
    sortByAlphabet: false
  },
  currentSvgIndex: null,
  svgCache: [
  ],
  svgRenderingFinished: false,
  selectedId: null
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
        svgRenderingFinished: false,
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
      return {
        ...previousState,
        displayOptions: {...previousState.displayOptions, ...action.payload},
        svgRenderingFinished: false,
        currentSvgIndex: null,
        selectedNodeId: null,
      };
    case ActionTypes.RENDERING_SVG_FINISHED:
      return {
        ...previousState,
        svgCache: previousState.svgCache.concat([[
          previousState.displayOptions,
          action.payload
        ]]),
      };
    case ActionTypes.SWITCH_CURRENT_SVG:
      return {
        ...previousState,
        currentSvgIndex: action.payload,
        svgRenderingFinished: true,
      };
    case ActionTypes.SELECT_ELEMENT:
      return {
        ...previousState,
        selectedId: action.payload,
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
