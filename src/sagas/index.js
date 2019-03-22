import { all } from 'redux-saga/effects';
import auth from './auth';
import status from './status';
import applications from './applications';

const rootSaga = function*() {
  yield all([...auth, ...status, ...applications]);
};

export default rootSaga;
