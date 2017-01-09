import { getSchema } from '../introspection'
import { getTypeGraph } from '../graph'
import * as ActionTypes from '../actions'
import { githubIntrospection, swapiIntrospection } from '../introspection';

var initialState = {
  introspection: {
    presets: {
      'github': githubIntrospection,
      'swapi': swapiIntrospection,
      //'custom': null,
    },
    activePreset: null,
  },
  schema: null,
  typeGraph: null,
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
  selectedNodeId: null,
};

export function rootReducer(previousState = initialState, action) {
  const { type, error } = action;
  switch(type) {
    case ActionTypes.CHANGE_ACTIVE_INTROSPECTION:
      var activePreset = action.payload;
      var introspection = previousState.introspection.presets[activePreset];
      var displayOptions:any = {...initialState.displayOptions};
      var schema = getSchema(introspection, displayOptions.sortByAlphabet);
      return {
        ...previousState,
        introspection: {
          ...previousState.introspection,
          activePreset,
        },
        schema,
        typeGraph: getTypeGraph(schema, displayOptions.skipRelay),
        displayOptions,
        svgRenderingFinished: false,
        svgCache: [],
        currentSvgIndex: null,
        selectedNodeId: null,
      };
    case ActionTypes.CHANGE_DISPLAY_OPTIONS:
      var newState:any = {
        ...previousState,
        displayOptions: {...previousState.displayOptions, ...action.payload},
        svgRenderingFinished: false,
        currentSvgIndex: null,
        selectedNodeId: null,
      };

      if (newState.introspection.activePreset === null)
        return newState;

      var sortByAlphabet = newState.displayOptions.sortByAlphabet;
      if (previousState.displayOptions.sortByAlphabet !== sortByAlphabet) {
        var activePreset = newState.introspection.activePreset;
        var introspection = newState.introspection.presets[activePreset];
        newState = {...newState, schema: getSchema(introspection, sortByAlphabet)};
      }

      var skipRelay = newState.displayOptions.skipRelay;
      var schema = newState.schema;
      return {...newState, typeGraph: getTypeGraph(schema, skipRelay)};
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
    case ActionTypes.SELECT_NODE:
      return {
        ...previousState,
        selectedNodeId: action.payload,
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
