import { combineReducers } from 'redux';
import characterGetAllReducer from './characterGetAll.reducer';
import characterGetReducer from './characterGet.reducer';

const reducers = combineReducers({
  characterGetAllReducer,
  characterGetReducer
});

export default reducers;
