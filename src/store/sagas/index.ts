import {all} from 'redux-saga/effects';

import loginSaga from './profileSaga';

function* rootSaga() {
  yield all([loginSaga()]);
}

export default rootSaga;
