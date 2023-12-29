import {DateDTO} from './DTOs';

export type PublicRootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type AuthRootStackParamList = {
  Home: undefined;
  ScheduleAppointment: undefined;
  ScheduleDetails: {schedule: DateDTO};
  ScheduleEditDate: {schedule: DateDTO};
  Personal: undefined;
};
