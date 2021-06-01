import {  put, takeEvery} from 'redux-saga/effects';
import { fromEventPattern } from 'rxjs';
import * as actions from './login.action';
import * as types from './login.type'
import { firebase } from '../../firebase/config';
import { saveData } from './../../helper/storage'; 
export function* login(action) {
  try {
    let uiid = "", token = "", refreshToken = "";
    const { username, password } = action.account
    yield firebase
        .auth()
        .signInWithEmailAndPassword(username, password)
        .then(res => {
          if (res) {
            uiid = res.user.l;
            token = res.user.za;
            refreshToken = res.user.refreshToken
          }
        })
    yield saveData({
        uiid,
        token,
        refreshToken
    })    
    yield put(actions.loginSuccess(uiid, token, refreshToken));
  } catch (error) {
    console.log('error', error);
    yield put(actions.loginFail(error.toString()));
  }
}

export function* loginSaga() {
  yield takeEvery(types.REQUEST_LOGIN,login);
}