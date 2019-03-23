import { call, put, takeLatest } from 'redux-saga/effects';
import { history } from '../history';
import {
  REQUEST_LOGIN,
  requestLoginSucceeded,
  requestLoginFailed,
  SIGNOUT_START,
  completeSignout
} from '../actions';
import services from '../services/index';
import { REDIRECT_URL_KEY } from '../shared/constants';

const singin = function*(action) {
  try {
    const user = yield call(
      services.auth.authenticate,
      action.username,
      action.password
    );
    yield put(requestLoginSucceeded(user));
    const redirectUrl = localStorage.getItem(REDIRECT_URL_KEY);
    history.push(redirectUrl || '/');
  } catch (e) {
    console.log('ERROR SAGA', e);
    yield put(requestLoginFailed('Error signin in'));
  }
};

const signout = function*() {
  yield call(services.auth.signout);
  yield put(completeSignout());
};

export default [
  takeLatest(REQUEST_LOGIN, singin),
  takeLatest(SIGNOUT_START, signout)
];
