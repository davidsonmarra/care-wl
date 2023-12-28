import React from 'react';
import {Control} from 'react-hook-form';
import styled from 'styled-components/native';
import {Text} from '../text';
import {Calendar} from './calendar';
import {
  ValidationScheduleAppointmentSchemaProps,
  ValidationScheduleEditDateSchemaProps,
} from '@types';
import {TextInput} from './text-input';
import {Select} from './select';

type SetValueScheduleAppointment = (
  name: keyof ValidationScheduleAppointmentSchemaProps,
  value: string,
) => void;

type SetValueScheduleEditDate = (
  name: keyof ValidationScheduleEditDateSchemaProps,
  value: string,
) => void;

interface FieldProps {
  type: 'date' | 'select' | 'text';
  title: string;
  description: string;
  control:
    | Control<ValidationScheduleAppointmentSchemaProps>
    | Control<ValidationScheduleEditDateSchemaProps>;
  name: string;
  setValue: SetValueScheduleAppointment | SetValueScheduleEditDate;
}

const inputTypes = (props: any) => ({
  date: <Calendar {...props} />,
  select: <Select {...props} />,
  text: <TextInput {...props} />,
});

export const Field = ({type, title, description, ...rest}: FieldProps) => {
  return (
    <StyledContainer>
      <Text type="h1">{title}</Text>
      <StyledDivider value={12} />
      <Text type="text">{description}</Text>
      <StyledDivider value={24} />
      {inputTypes({...rest})[type]}
    </StyledContainer>
  );
};

const StyledContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 24,
  },
  showsVerticalScrollIndicator: false,
})``;

const StyledDivider = styled.View<{value: number}>`
  margin-bottom: ${({value}) => value}px;
`;
