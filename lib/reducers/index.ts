import { getSchema } from '../introspection'
import { getTypeGraph } from '../graph'
import * as ActionTypes from '../actions'

var initialState = {
  introspection: null,
  schema: null,
  typeGraph: null,
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
  if (previousState.displayOptions.sortByAlphabet != state)
    return {schema: getSchema(previousState.introspection, state)}
  return {}
}

export function rootReducer(previousState = initialState, action) {
  const { type, error } = action;

  switch(type) {
    case ActionTypes.CHANGE_INTROSPECTION:
      var introspection = action.payload;
      var displayOptions = {...initialState.displayOptions};
      var schema = getSchema(introspection, displayOptions.sortByAlphabet);
      return {
        ...previousState,
        introspection,
        schema,
        typeGraph: getTypeGraph(schema, displayOptions.skipRelay),
        displayOptions,
        svgRenderingFinished: false,
        svgCache: [],
        currentSvgIndex: null,
        selectedNodeId: null,
      };
    case ActionTypes.CHANGE_DISPLAY_OPTIONS:
      return {
        ...previousState,
        ...reduceSortByAlphabet(previousState, action.payload.sortByAlphabet),
        displayOptions: action.payload,
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
    default:
      return previousState;
  }
}
