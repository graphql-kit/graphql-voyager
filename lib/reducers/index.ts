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
    showIntrospectionLoad: false,
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


function reduceSortByAlphabet(previousState, state:boolean) {
  var activePreset = previousState.introspection.activePreset;
  var introspection = previousState.introspection.presets[activePreset];
  if (previousState.displayOptions.sortByAlphabet != state)
    return {schema: getSchema(introspection, state)}
  return {}
}

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
      var displayOptions:any = {...previousState.displayOptions, ...action.payload};
      return {
        ...previousState,
        ...reduceSortByAlphabet(previousState, displayOptions.sortByAlphabet),
        displayOptions,
        typeGraph: getTypeGraph(previousState.schema, displayOptions.skipRelay),
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
    case ActionTypes.SELECT_NODE:
      return {
        ...previousState,
        selectedNodeId: action.payload,
      };
    case ActionTypes.PANEL_CHANGE_INTROSPECTION_LOAD_VISIBILITY:
      return {
        ...previousState,
        panel: {
          ...previousState.panel,
          showIntrospectionLoad: action.payload
        }
      }
    default:
      return previousState;
  }
}
