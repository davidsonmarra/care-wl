import {TextInputProps} from 'react-native';
import {
  ValidationScheduleAppointmentSchemaProps,
  ValidationSignUpSchemaProps,
} from './schemas';

export interface ScheduleAppointmentStepProps extends TextInputProps {
  title: string;
  description: string;
  field: keyof ValidationScheduleAppointmentSchemaProps;
  type: 'date' | 'select' | 'text';
  required: boolean;
}

export interface SignUpStepProps extends TextInputProps {
  title: string;
  description: string;
  field: keyof ValidationSignUpSchemaProps;
  type: 'text';
  required: boolean;
}
