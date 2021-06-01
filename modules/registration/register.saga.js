import {  put, takeEvery} from 'redux-saga/effects';
import { fromEventPattern } from 'rxjs';
import * as actions from './register.action';
import * as types from './register.type';
import { firebase } from '../../firebase/config';
import AsyncStorage from '@react-native-community/async-storage';

export function* register(action) {
  try {
    const { username, password } = action.account;
    const displayName = action.account.fullname;
    let uiid;
    yield firebase
        .auth()
        .createUserWithEmailAndPassword(username,password)
        .then((res) => {
          if(res.additionalUserInfo.isNewUser){
            res.user.updateProfile({
              displayName: action.account.fullname
            })
            uiid =  res.user.l
          };
      })
    yield put(actions.registerSuccess(
      uiid,
      displayName
    ))
  } catch (error) {
    console.log('error', error);
    yield put(actions.registerFail(error.toString()));
  }
}

export function* registerSaga() {
  yield takeEvery(types.REQUEST_REGISTER,register);
}