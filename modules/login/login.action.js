
import * as types from './login.type';

export const loginRequest = (account) => ({ type: types.REQUEST_LOGIN, account});
export const loginSuccess = (uiid, token, refreshToken ) => ({ type: types.SUSCCESS_LOGIN, uiid, token, refreshToken  });
export const loginFail = (error) => ({ type: types.FAIL_LOGIN, error });

export const loginOut = () => ({ type: types.LOGOUT });