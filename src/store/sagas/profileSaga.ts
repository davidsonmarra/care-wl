import {AxiosError} from 'axios';
import {all, call, put, takeLatest} from 'redux-saga/effects';
import {api} from '@global';
import {
  storage,
  ASYNC_STORAGE_USER_KEY,
  ASYNC_STORAGE_USER_ID,
  ASYNC_STORAGE_USER_REFRESH,
} from '@helpers';
import {
  LOGIN,
  LOGIN_ON_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_FAILURE_ON_START,
  SET_AUTHORIZATIONS,
  LOGOUT,
} from '../slices/profileSlice';

const requestSignIn = async (email: string, password: string) =>
  api
    .post('/login', {
      email,
      password,
    })
    .then(response => response);

function* login({
  payload: {email, password, onCallbackPress},
}: ReturnType<typeof LOGIN>) {
  try {
    const {data, headers} = yield requestSignIn(email, password);
    yield put(
      SET_AUTHORIZATIONS({
        token: headers.authorization,
        id: data.id,
        refresh: headers['refresh-token'],
      }),
    );
    yield put(LOGIN_SUCCESS(headers.authorization));
  } catch (error) {
    if (error instanceof AxiosError) {
      yield put(LOGIN_FAILURE(error));
      onCallbackPress();
    }
  }
}

async function store(key: string, value: string) {
  try {
    storage.set(key, value);
  } catch (error) {
    console.log('Erro durante o armazenamento do token:', error);
  }
}

export function* setAuthorizations({
  payload,
}: ReturnType<typeof SET_AUTHORIZATIONS>) {
  yield call(store, ASYNC_STORAGE_USER_KEY, payload.token);
  yield call(store, ASYNC_STORAGE_USER_ID, payload.id);
  yield call(store, ASYNC_STORAGE_USER_REFRESH, payload.refresh);
}

async function clearUserData() {
  storage.clearAll();
}

export function* loginOnStart() {
  const token: string = yield call(
    storage.getString,
    ASYNC_STORAGE_USER_REFRESH,
  );
  if (token) {
    try {
      const {headers} = yield call(
        api.post,
        '/auth/refresh-token',
        {
          refreshToken: token,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const id: string = yield call(storage.getString, ASYNC_STORAGE_USER_ID);
      yield put(
        SET_AUTHORIZATIONS({
          token: headers.authorization,
          id,
          refresh: headers['refresh-token'],
        }),
      );
      yield put(LOGIN_SUCCESS(headers.authorization));
    } catch (error) {
      if (error instanceof AxiosError) yield put(LOGIN_FAILURE_ON_START(error));
    }
  }
}

export default function* watcher() {
  yield all([
    takeLatest(LOGIN, login),
    takeLatest(LOGIN_ON_START, loginOnStart),
    takeLatest(SET_AUTHORIZATIONS, setAuthorizations),
    takeLatest(LOGOUT, clearUserData),
  ]);
}
