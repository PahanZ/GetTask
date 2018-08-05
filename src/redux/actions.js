// @flow

const createBlock = (block: Object): Object => ({
  type: 'CREATE_BLOCK',
  payload: block,
});

const createLine = (line: Object): Object => ({
  type: 'CREATE_LINE',
  payload: line,
});

export { createBlock, createLine };
