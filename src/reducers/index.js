import { combineReducers } from 'redux';
import headerReducer from './headerReducer.js';
import dialog from './dialogReducer.js';

const allReducers = combineReducers({
  name: headerReducer,
  dialog: dialog,
  // createEventForm: createEventFormReducer,
});

export default allReducers;
