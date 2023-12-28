import {DateDTO} from './DTOs';

export type PublicRootStackParamList = {
  SignIn: undefined;
};

export type AuthRootStackParamList = {
  Home: undefined;
  ScheduleAppointment: undefined;
  ScheduleDetails: {schedule: DateDTO};
  ScheduleEditDate: {schedule: DateDTO};
};
