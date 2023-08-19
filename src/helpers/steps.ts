import {ScheduleAppointmentStepProps} from '@types';

export const SCHEDULE_APPOINTMENT_STEPS: ScheduleAppointmentStepProps[] = [
  {
    title: 'Data',
    description: 'Selecione a data do agendamento',
    field: 'date',
    type: 'date',
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
  },
  {
    title: 'Tipo',
    description: 'Selecione o tipo de agendamento',
    field: 'type',
    type: 'select',
  },
];
