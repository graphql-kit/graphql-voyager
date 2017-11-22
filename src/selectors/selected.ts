import * as _ from 'lodash';
import { createSelector } from 'reselect';

import { getTypeGraphSelector } from '../graph';

export const getSelectedType = createSelector(
  (state: any) => state.selected.currentNodeId,
  (state: any) => getTypeGraphSelector(state),
  (selectedNodeId, typeGraph) => {
    console.log();
    return _.get(typeGraph, ['nodes', selectedNodeId], null);
  },
);

export const getPreviousType = createSelector(
  (state: any) => _.last(state.selected.previousTypesIds),
  (state: any) => getTypeGraphSelector(state),
  (previousNodeId: string, typeGraph) => {
    return _.get(typeGraph, ['nodes', previousNodeId], null);
  },
);
