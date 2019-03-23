import { call, put, takeLatest } from 'redux-saga/effects';
import {
  REQUEST_APPLICATIONS,
  requestApplicationsSucceeded,
  requestApplicationsFailed
} from '../actions';
import services from '../services/index';

const getAllApplications = function*(action) {
  try {
    const applications = yield call(services.applications.getAll);
    yield put(requestApplicationsSucceeded(applications));
  } catch (e) {
    console.log('ERROR SAGA', e);
    yield put(requestApplicationsFailed('Error signin in'));
  }
};

export default [takeLatest(REQUEST_APPLICATIONS, getAllApplications)];
