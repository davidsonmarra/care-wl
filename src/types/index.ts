export type {
  ValidationLoginSchemaProps,
  ValidationSignUpSchemaProps,
  ValidationScheduleAppointmentSchemaProps,
  ValidationScheduleEditDateSchemaProps,
  ValidationPersonalSchemaProps,
} from './schemas';

export interface BottomModalRefProps {
  scrollTo: (destination: number) => void;
  isActive: () => boolean;
}

export interface TokenProps {
  token: string;
  id: string;
  refresh: string;
}

export type {
  PublicRootStackParamList,
  AuthRootStackParamList,
} from './navigation';

export type {UserDTO, DateDTO, CategoryDTO} from './DTOs';

export type {ScheduleAppointmentStepProps, SignUpStepProps} from './steps';
