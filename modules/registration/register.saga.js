import {  put, takeEvery} from 'redux-saga/effects';
import { fromEventPattern } from 'rxjs';
import * as actions from './register.action';
import * as types from './register.type';
import { firebase } from '../../firebase/config';
import AsyncStorage from '@react-native-community/async-storage';

export function* register(action) {
  try {
    const { username, password, fullname } = action.account.user;
    let uiId;
    yield firebase
        .auth()
        .createUserWithEmailAndPassword(username,password)
        .then((res) => {
          if(res.additionalUserInfo.isNewUser){
            res.user.updateProfile({
              displayName: action.account.fullname
            })
            console.log('res', res.user.apiKey);
            uiId =  res.user.apiKey
          };
      })
    console.log('uiId', uiId)
    // yield put(actions.registerSuccess({
    //   uiid: uiId,
    //   displayName: fullname
    // }))
  } catch (error) {
    console.log('error', error);
    yield put(actions.registerFail(error.toString()));
  }
}

export function* registerSaga() {
  yield takeEvery(types.REQUEST_REGISTER,register);
}