import React from 'react';
import {TextInputProps} from 'react-native';
import {TextInput} from './text-input';

interface InputProps extends TextInputProps {
  type: 'text' | 'password';
}

export function Input({type, ...rest}: InputProps) {
  const inputType = {
    text: <TextInput {...rest} />,
    password: <TextInput password {...rest} />,
  };
  return inputType[type];
}
