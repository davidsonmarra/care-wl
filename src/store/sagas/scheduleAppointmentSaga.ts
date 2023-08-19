import {all, put, takeLatest} from 'redux-saga/effects';
import {api} from '@global';
import {
  GET_HOURS,
  GET_HOURS_FAILURE,
  GET_HOURS_SUCCESS,
} from '../slices/scheduleAppointmentSlice';
import {AxiosError} from 'axios';

const requestHours = async (date: string) =>
  api.get(`/hours/${date}`).then(response => response);

function* getHours({payload}: ReturnType<typeof GET_HOURS>) {
  const {data} = yield requestHours(payload);
  yield put(GET_HOURS_SUCCESS(data));
  try {
  } catch (error) {
    if (error instanceof AxiosError) {
      yield put(GET_HOURS_FAILURE(error));
    }
  }
}

export default function* watcher() {
  yield all([takeLatest(GET_HOURS, getHours)]);
}
