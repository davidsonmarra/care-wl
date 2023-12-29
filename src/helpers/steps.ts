import {ScheduleAppointmentStepProps} from '@types';
import {SignUpStepProps} from 'src/types/steps';

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

export const SIGN_UP_STEPS: SignUpStepProps[] = [
  {
    title: 'Nome',
    description: 'Digite seu nome completo',
    field: 'name',
    type: 'text',
    required: true,
  },
  {
    title: 'E-mail',
    description: 'Digite seu e-mail',
    field: 'email',
    type: 'text',
    required: true,
  },
  {
    title: 'Telefone',
    description: 'Digite seu telefone',
    field: 'phone',
    type: 'text',
    required: true,
  },
  {
    title: 'Senha',
    description: 'Digite sua senha',
    field: 'password',
    type: 'text',
    required: true,
  },
];
