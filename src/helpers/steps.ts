import {ScheduleAppointmentStepProps} from '@types';

export const SCHEDULE_APPOINTMENT_STEPS: ScheduleAppointmentStepProps[] = [
  {
    title: 'Tipo',
    description: 'Selecione o tipo de agendamento',
    field: 'type',
    type: 'select',
    required: true,
  },
  {
    title: 'Data',
    description: 'Selecione a data do agendamento',
    field: 'date',
    type: 'date',
    required: true,
  },
  {
    title: 'Observação',
    description: 'Escreva uma observação para o agendamento',
    field: 'obs',
    type: 'text',
    placeholder: 'Escreva uma observação (campo opcional)',
    multiline: true,
    numberOfLines: 4,
    style: {height: 250},
    required: false,
  },
];
