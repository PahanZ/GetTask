// @flow

type ActionTypes<T> =
  | { type: "CREATE_BLOCK", payload: T }
  | { type: "CREATE_LINE", payload: T }


  type blockType = {
    coordX: string,
    coordY: string
  }

  type lineType = {
    firstPoint: string,
    secondPoint: string
  }


const createBlock = (block: blockType): ActionTypes<blockType> => ({
  type: 'CREATE_BLOCK',
  payload: block,
});

const createLine = (line: lineType): ActionTypes<lineType> => ({
  type: 'CREATE_LINE',
  payload: line,
});

export { createBlock, createLine };
