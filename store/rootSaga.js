import { all } from 'redux-saga/effects';
import { registerSaga } from "../modules/registration/register.saga";
import { loginSaga } from "../modules/login/login.saga";

export default function* rootSaga() {
    yield all([
        registerSaga(),
        loginSaga(),
    ]);
  }