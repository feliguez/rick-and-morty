import { combineReducers } from 'redux';
import heroeReducers from './heroe.reducers';

const reducers = combineReducers({
  heroes: heroeReducers
});

export default reducers;
