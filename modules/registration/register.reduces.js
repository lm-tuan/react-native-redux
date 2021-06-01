
import * as types from './register.type';

const initialState = {
    isRegister: false,
    displayName: "",
    uiId: "",
    messageError:""
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_REGISTER:
      return { ...state };
    case types.SUSCCESS_REGISTER:
        return { ...state, displayName : action.displayName, uiId: action.uiId, messageError:"", isRegister:true };
    case types.FAIL_REGISTER:
      return { ...state, displayName : "", uiId: "", messageError:"", isRegister:false };
    default:
      return state;
  }
};

export default registerReducer;