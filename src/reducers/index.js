import { combineReducers } from 'redux';
import headerReducer from './headerReducer.js';
import aboutDialog from './dialogReducer.js';

const allReducers = combineReducers({
  name: headerReducer,
  aboutDialog: aboutDialog,
  // createEventForm: createEventFormReducer,
});

export default allReducers;
