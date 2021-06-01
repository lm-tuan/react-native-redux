
import * as types from './login.type';
import { clearStorage } from './../../helper/storage'; 

const initialState = {
    isLogin: false,
    messageError:"",
    uiid: "",
    isLogout:false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_LOGIN:
      return { ...state };
    case types.SUSCCESS_LOGIN:
        return { ...state, isLogin: true, uiid : action.uiid, messageError:"", isLogout:true };
    case types.FAIL_LOGIN:
        return { ...state, isLogin: false, uiid : "", messageError:action.error, isLogout:false };
    case types.LOGOUT:
        clearStorage();
        return { ...state, isLogin: false, uiid : "", messageError:"", isLogout:false  };
    default:
      return state;
  }
};

export default loginReducer;