import { createSelector } from 'reselect';

const blocksSelector = state => state.blocks;
const linesSelector = state => state.lines;

const getBlockSelector = createSelector(
  blocksSelector,
  linesSelector,
);

export default getBlockSelector;
