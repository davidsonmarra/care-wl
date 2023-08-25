import {TextInputProps} from 'react-native';
import {ValidationScheduleAppointmentSchemaProps} from './schemas';

export interface ScheduleAppointmentStepProps extends TextInputProps {
  title: string;
  description: string;
  field: keyof ValidationScheduleAppointmentSchemaProps;
  type: 'date' | 'select' | 'text';
  required: boolean;
}
