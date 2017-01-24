import * as _ from 'lodash';
import * as ejs from 'ejs';
import { createSelector } from 'reselect'

import { stringifyWrappers } from '../introspection/';
import { getTypeGraphSelector } from './type-graph';

const template = require('./dot_template.ejs');

function getDot(typeGraph):string {
  if (typeGraph === null) return null;
  return ejs.render(template, {_, typeGraph, stringifyWrappers});
}

export const getDotSelector = createSelector(
  getTypeGraphSelector,
  getDot
);
