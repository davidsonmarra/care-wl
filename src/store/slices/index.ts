import {combineReducers} from '@reduxjs/toolkit';

import profile, * as actionsProfile from './profileSlice';
import scheduleAppointment, * as actionsScheduleAppointment from './scheduleAppointmentSlice';

export default combineReducers({profile, scheduleAppointment});

export {actionsProfile, actionsScheduleAppointment};
