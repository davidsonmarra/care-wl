import {all} from 'redux-saga/effects';

import loginSaga from './profileSaga';
import scheduleAppointmentSaga from './scheduleAppointmentSaga';

function* rootSaga() {
  yield all([loginSaga(), scheduleAppointmentSaga()]);
}

export default rootSaga;
