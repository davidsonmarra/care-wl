import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ValidationLoginSchemaProps, TokenProps, UserDTO} from '@types';
import {AxiosError} from 'axios';

interface InitialStateProps {
  email: string;
  token: string;
  error: AxiosError<any>;
  errorOnStart: AxiosError;
  isLogged: boolean;
  isLoading: boolean;
  user: UserDTO;
}

const initialState: InitialStateProps = {
  email: '',
  token: '',
  error: {} as AxiosError,
  errorOnStart: {} as AxiosError,
  isLogged: false,
  isLoading: false,
  user: {} as UserDTO,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    LOGIN: (
      state,
      {
        payload,
      }: PayloadAction<
        ValidationLoginSchemaProps & {onCallbackPress: () => void}
      >,
    ) => ({
      ...state,
      email: payload.email,
      error: {} as AxiosError,
      isLoading: true,
    }),
    LOGIN_ON_START: state => ({
      ...state,
    }),
    LOGIN_SUCCESS: (state, {payload}: PayloadAction<string>) => ({
      ...state,
      token: payload,
      isLogged: true,
      isLoading: false,
    }),
    LOGIN_FAILURE: (state, {payload}: PayloadAction<AxiosError>) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),
    LOGIN_FAILURE_ON_START: (state, {payload}: PayloadAction<AxiosError>) => ({
      ...state,
      errorOnStart: payload,
      isLoading: false,
    }),
    SET_AUTHORIZATIONS: (state, {payload}: PayloadAction<TokenProps>) => ({
      ...state,
      token: payload.token,
    }),
    LOGOUT: state => ({
      ...state,
      email: '',
      password: '',
      token: '',
      isLogged: false,
    }),
    GET_USER_INFO: state => ({
      ...state,
      isLoading: true,
    }),
    GET_USER_INFO_SUCCESS: (state, {payload}: PayloadAction<UserDTO>) => ({
      ...state,
      user: payload,
      isLoading: false,
    }),
  },
});

const {actions, reducer} = profileSlice;

export const {
  LOGIN,
  LOGIN_ON_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_FAILURE_ON_START,
  SET_AUTHORIZATIONS,
  LOGOUT,
  GET_USER_INFO,
  GET_USER_INFO_SUCCESS,
} = actions;
export default reducer;
