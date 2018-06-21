import { combineReducers } from 'redux';
import dialog from './dialogReducer.js';

const allReducers = combineReducers({
  dialog: dialog,
});

export default allReducers;
