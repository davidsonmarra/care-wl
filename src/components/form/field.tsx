import React from 'react';
import styled from 'styled-components/native';
import {Text} from '../text';
import {Calendar} from './calendar';

interface FieldProps {
  type: 'date';
  title: string;
}

const inputTypes = (props: any) => ({
  date: <Calendar {...props} />,
});

export const Field = ({type}: FieldProps) => {
  return (
    <StyledContainer>
      <Text type="h1">Data</Text>
      <StyledDivider value={12} />
      <Text type="text">Selecione uma data para a consulta.</Text>
      <StyledDivider value={24} />
      {inputTypes({})[type]}
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  padding: 16px 24px;
`;

const StyledDivider = styled.View<{value: number}>`
  margin-bottom: ${({value}) => value}px;
`;
