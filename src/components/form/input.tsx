import React from 'react';
import {Control} from 'react-hook-form';
import {TextInputProps} from 'react-native';
import {ValidationLoginSchemaProps} from '@types';
import {TextInput} from './text-input';

interface InputProps extends TextInputProps {
  control: Control<ValidationLoginSchemaProps>;
  name: keyof ValidationLoginSchemaProps;
  type: 'text' | 'password';
}

export function Input({type, ...rest}: InputProps) {
  const inputType = {
    text: <TextInput {...rest} />,
    password: <TextInput password {...rest} />,
  };
  return inputType[type];
}
