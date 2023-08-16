import {ScheduleAppointmentStepProps} from '@types';

export const SCHEDULE_APPOINTMENT_STEPS: ScheduleAppointmentStepProps[] = [
  {
    title: 'Tipo',
    description: 'Selecione o tipo de agendamento',
    field: 'type',
    type: 'select',
  },
  {
    title: 'Data',
    description: 'Selecione a data do agendamento',
    field: 'date',
    type: 'date',
  },
];
