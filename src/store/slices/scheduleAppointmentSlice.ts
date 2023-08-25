import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {CategoryDTO} from '@types';

interface InitialStateProps {
  date: string;
  hours: string[];
  categories: CategoryDTO[];
  isLoading: boolean;
  error: AxiosError<any>;
}

const initialState: InitialStateProps = {
  date: '',
  hours: [],
  categories: [],
  isLoading: false,
  error: {} as AxiosError,
};

const scheduleAppointmentSlice = createSlice({
  name: 'scheduleAppointment',
  initialState,
  reducers: {
    GET_HOURS: (state, {payload}: PayloadAction<string>) => ({
      ...state,
      date: payload,
      isLoading: true,
      error: {} as AxiosError,
    }),
    GET_HOURS_SUCCESS: (state, {payload}: PayloadAction<string[]>) => ({
      ...state,
      hours: payload,
      isLoading: false,
    }),
    GET_HOURS_FAILURE: (state, {payload}: PayloadAction<AxiosError>) => ({
      ...state,
      hours: [],
      error: payload,
      isLoading: false,
    }),
    GET_CATEGORIES: state => ({
      ...state,
      isLoading: true,
      error: {} as AxiosError,
    }),
    GET_CATEGORIES_SUCCESS: (
      state,
      {payload}: PayloadAction<CategoryDTO[]>,
    ) => ({
      ...state,
      categories: payload,
      isLoading: false,
    }),
    GET_CATEGORIES_FAILURE: (state, {payload}: PayloadAction<AxiosError>) => ({
      ...state,
      categories: [],
      error: payload,
      isLoading: false,
    }),
  },
});

const {actions, reducer} = scheduleAppointmentSlice;

export const {
  GET_HOURS,
  GET_HOURS_SUCCESS,
  GET_HOURS_FAILURE,
  GET_CATEGORIES,
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_SUCCESS,
} = actions;
export default reducer;
