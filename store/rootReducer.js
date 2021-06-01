  
import { combineReducers } from 'redux';

import { counterReducer } from '../modules/count/index';
import { registerReducer } from '../modules/registration/index';
import { loginReducer } from '../modules/login/index';
const rootReducer = () =>
  combineReducers({
    count: counterReducer,
    registration: registerReducer,
    login: loginReducer
  });

export default rootReducer;