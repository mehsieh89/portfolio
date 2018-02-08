import { combineReducers } from 'redux';
import headerReducer from './headerReducer.js';

const allReducers = combineReducers({
  name: headerReducer
  // createEventForm: createEventFormReducer,
});

export default allReducers;
