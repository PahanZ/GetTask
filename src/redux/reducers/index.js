import * as types from '../types';

export default (state = {test: 'test'}, action ) => {
  switch (action.type) {
    case types.testType: return {...state, test: 'TEST'};    
    default: return state;
  }
}