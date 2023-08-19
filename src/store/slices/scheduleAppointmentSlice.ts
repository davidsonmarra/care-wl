import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';

interface InitialStateProps {
  date: string;
  hours: string[];
  isLoading: boolean;
  error: AxiosError<any>;
}

const initialState: InitialStateProps = {
  date: '',
  hours: [],
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
  },
});

const {actions, reducer} = scheduleAppointmentSlice;

export const {GET_HOURS, GET_HOURS_SUCCESS, GET_HOURS_FAILURE} = actions;
export default reducer;
