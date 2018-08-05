import { combineReducers } from 'redux';
import blocks from './blocks';
import lines from './lines';

export default combineReducers({ blocks, lines });
