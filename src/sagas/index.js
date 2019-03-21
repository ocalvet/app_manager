import { all } from 'redux-saga/effects';
import auth from './auth';
import status from './status';

const rootSaga = function*() {
  yield all([...auth, ...status]);
};

export default rootSaga;
