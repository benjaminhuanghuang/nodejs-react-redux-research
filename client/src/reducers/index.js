import { combineReducers } from 'redux';
//
import UserReducer from './UserReducer';

// maps state and reducer
const reducers = combineReducers({
  user: UserReducer,
});

export default reducers; 