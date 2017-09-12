import * as _ from 'lodash';

import { createSelector } from 'reselect'
import { stringifyWrappers } from '../introspection/';
import { getTypeGraphSelector } from './type-graph';

const template = require('./dot_template.ejs');

function getDot(typeGraph):string {
  if (typeGraph === null) return null;
  if (typeGraph.hideRoot) {
    delete typeGraph.nodes[typeGraph.rootId]
  }
  return template({_, typeGraph, stringifyWrappers});
}

export const getDotSelector = createSelector(
  getTypeGraphSelector,
  getDot
);
