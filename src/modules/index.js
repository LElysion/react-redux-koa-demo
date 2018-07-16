import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import selfer from './selfer';

export default combineReducers({
  router: routerReducer,
  counter,
  selfer
});
