import { combineReducers } from 'redux';
import recentSearchReducer from './recentSearch';

export default combineReducers({
  recentSearch: recentSearchReducer
});