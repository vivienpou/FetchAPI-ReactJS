
import { combineReducers } from 'redux';
import itemsReducer from './fetchReducer';

export default combineReducers({
  items: itemsReducer,
});