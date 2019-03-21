import { call, put, select, takeLatest } from 'redux-saga/effects';
import { history } from '../history';
import {
  REQUEST_LOGIN,
  requestLoginSucceeded,
  requestLoginFailed,
  SIGNOUT_START,
  completeSignout
} from '../actions';
import services from '../services/index';

const singin = function*(action) {
  try {
    const state = yield select();
    const user = yield call(
      services.auth.authenticate,
      action.username,
      action.password
    );
    yield put(requestLoginSucceeded(user));
    history.push(state.auth.redirectUrl || '/');
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
