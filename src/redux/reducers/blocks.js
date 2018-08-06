// @flow

import * as types from '../types';

type ActionTypes<T> = {
  type: 'CREATE_BLOCK',
  payload: T
}

type payloadTypes = {
  coordX: string,
  coordY: string
}

export default
(state: Array<payloadTypes> = [],
  action: ActionTypes<payloadTypes>): Array<payloadTypes> => {
  switch (action.type) {
    case types.CREATE_BLOCK: return [...state, action.payload];
    default: return state;
  }
};
