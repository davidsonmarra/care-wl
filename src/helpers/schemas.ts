import * as Yup from 'yup';

export const validateSchemaLogin = Yup.object().shape({
  email: Yup.string()
    .email('Email inválido')
    .required('Campo de e-mail obrigatório'),
  password: Yup.string()
    .min(6, 'Senha deve ter no mínimo 6 caracteres')
    .required('Campo de senha obrigatório'),
});

export const validateSchemaScheduleAppointment = Yup.object().shape({
  obs: Yup.string(),
  type: Yup.string().required('Campo de tipo de consulta obrigatório'),
  date: Yup.string().required('Campo de data obrigatório'),
});
