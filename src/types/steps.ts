import {ValidationScheduleAppointmentSchemaProps} from './schemas';

export interface ScheduleAppointmentStepProps {
  title: string;
  description: string;
  field: keyof ValidationScheduleAppointmentSchemaProps;
  type: 'date' | 'select';
}
