import { put, call, takeLatest } from 'redux-saga/effects';
import {
  APP_LOADING_START,
  appLoadingDone,
  userAuthenticated
} from '../actions';
import services from '../services';

const appLoading = function*(action) {
  try {
    // Check if user is loaded
    const user = yield call(services.auth.getUser);
    if (user && user.token && user.token.length > 0) {
      yield put(userAuthenticated(user));
    }
    yield put(appLoadingDone());
  } catch (e) {
    console.log('ERROR SAGA', e);
  }
};

export default [takeLatest(APP_LOADING_START, appLoading)];
