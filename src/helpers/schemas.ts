import * as Yup from 'yup';

export const validateSchemaLogin = Yup.object().shape({
  email: Yup.string()
    .email('Email inválido')
    .required('Campo de e-mail obrigatório'),
  password: Yup.string()
    .min(6, 'Senha deve ter no mínimo 6 caracteres')
    .required('Campo de senha obrigatório'),
});

export const validateSchemaPersonal = Yup.object().shape({
  name: Yup.string().required('Campo de nome obrigatório'),
  email: Yup.string()
    .email('Email inválido')
    .required('Campo de e-mail obrigatório'),
  phone: Yup.string()
    .min(15, 'Telefone inválido')
    .required('Campo de telefone obrigatório'),
});
