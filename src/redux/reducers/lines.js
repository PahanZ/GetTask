// @flow

import * as types from '../types';

const { List } = require('immutable');

export default (state = List(), action: Object): Array<Object> => {
  switch (action.type) {
    case types.CREATE_LINE: return state.push({ type: action.type });
    default: return state;
  }
};
