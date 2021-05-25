  
import { combineReducers } from 'redux';

import { counterReducer } from '../modules/count/index';

const rootReducer = () =>
  combineReducers({
    count: counterReducer,
  });

export default rootReducer;