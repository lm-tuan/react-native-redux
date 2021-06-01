
import * as types from './register.type';

export const registerRequest = (account) => ({ type: types.REQUEST_REGISTER, account});
export const registerSuccess = (uiid, displayName) => ({ type: types.SUSCCESS_REGISTER, uiid, displayName });
export const registerFail = (error) => ({ type: types.FAIL_REGISTER, error });
