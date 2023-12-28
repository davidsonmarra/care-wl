import React from 'react';
import {Control} from 'react-hook-form';
import {TextInputProps} from 'react-native';
import {
  ValidationLoginSchemaProps,
  ValidationPersonalSchemaProps,
} from '@types';
import {TextInput} from './text-input';

interface InputProps extends TextInputProps {
  control:
    | Control<ValidationLoginSchemaProps>
    | Control<ValidationPersonalSchemaProps>;
  name: keyof ValidationLoginSchemaProps | keyof ValidationPersonalSchemaProps;
  type: 'text' | 'password';
}

export function Input({type, ...rest}: InputProps) {
  const inputType = {
    text: <TextInput {...rest} />,
    password: <TextInput password {...rest} />,
  };
  return inputType[type];
}
