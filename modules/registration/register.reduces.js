
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
      // console.log('REQUEST_REGISTER', action);
      return { ...state };
    case types.SUSCCESS_REGISTER:
        console.log('SUSCCESS_REGISTER-REDUCES', action);
        return { ...state };
    case types.FAIL_REGISTER:
        // console.log('FAIL_REGISTER', action);
        return { ...state };
    default:
      return state;
  }
};

export default registerReducer;