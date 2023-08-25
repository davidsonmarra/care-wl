import {all, put, takeLatest} from 'redux-saga/effects';
import {api} from '@global';
import {
  GET_CATEGORIES,
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_SUCCESS,
  GET_HOURS,
  GET_HOURS_FAILURE,
  GET_HOURS_SUCCESS,
} from '../slices/scheduleAppointmentSlice';
import {AxiosError} from 'axios';

const requestHours = async (date: string) =>
  api.get(`/hours/${date}`).then(response => response);

function* getHours({payload}: ReturnType<typeof GET_HOURS>) {
  const {data} = yield requestHours(payload);
  try {
    yield put(GET_HOURS_SUCCESS(data));
  } catch (error) {
    if (error instanceof AxiosError) {
      yield put(GET_HOURS_FAILURE(error));
    }
  }
}

const requestCategories = async () =>
  api.get(`/categories`).then(response => response);

function* getCategories() {
  const {data} = yield requestCategories();

  try {
    yield put(GET_CATEGORIES_SUCCESS(data));
  } catch (error) {
    if (error instanceof AxiosError) {
      yield put(GET_CATEGORIES_FAILURE(error));
    }
  }
}

export default function* watcher() {
  yield all([
    takeLatest(GET_HOURS, getHours),
    takeLatest(GET_CATEGORIES, getCategories),
  ]);
}
