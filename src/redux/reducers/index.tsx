import { combineReducers } from 'redux';
import recentSearchReducer from './recentSearch';
import featuresReducer from './features';

export default combineReducers({
  recentSearch: recentSearchReducer,
  features: featuresReducer
});