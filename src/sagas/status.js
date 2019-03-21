import { put, call, takeLatest } from 'redux-saga/effects';
import {
  APP_LOADING_START,
  appLoadingDone,
  userAuthenticated
} from '../actions';
import services from '../services';

const appLoading = function*(action) {
  try {
    console.log('Start loading app');
    // Check if user is laoded
    const user = yield call(services.auth.getUser);
    console.log('GOTTEN USER', user);
    if (user && user.token && user.token.length > 0) {
      yield put(userAuthenticated(user));
    }
    yield put(appLoadingDone());
  } catch (e) {
    console.log('ERROR SAGA', e);
  }
};

export default [takeLatest(APP_LOADING_START, appLoading)];
