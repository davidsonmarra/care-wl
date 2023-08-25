import React, {useEffect, useState} from 'react';
import {Control} from 'react-hook-form';
import {TextInputProps} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {RootStateProps} from '@store';
import {CategoryDTO, ValidationScheduleAppointmentSchemaProps} from '@types';
import {Button} from '../button';
import {Text} from '../text';

interface SelectProps extends TextInputProps {
  control: Control<ValidationScheduleAppointmentSchemaProps>;
  name: keyof ValidationScheduleAppointmentSchemaProps;
  type: 'text' | 'password';
  setValue: (
    name: keyof ValidationScheduleAppointmentSchemaProps,
    value: string,
  ) => void;
}

export function Select({setValue}: SelectProps) {
  const [selectedCategory, setSelectedCategory] = useState({} as CategoryDTO);
  const {categories} = useSelector(
    ({scheduleAppointment}: RootStateProps) => scheduleAppointment,
  );

  useEffect(() => {
    setValue('type', selectedCategory.name);
  }, [selectedCategory]);

  return (
    <StyledContainer>
      {categories.map(item => (
        <StyledButton
          isSelect={selectedCategory.id === item.id}
          key={item.id}
          type="primary"
          onPress={() => setSelectedCategory(item)}>
          <Text type="btn-primary">{item.name}</Text>
        </StyledButton>
      ))}
    </StyledContainer>
  );
}

const StyledContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledButton = styled(Button)<{isSelect: boolean}>`
  width: auto;
  opacity: ${({isSelect}) => (isSelect ? 1 : 0.5)};
  margin-right: 12px;
`;
