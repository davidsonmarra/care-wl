import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {CardDate, Header} from '@components';
import {DateDTO, UserDTO} from '@types';

interface HomeProps {
  user: UserDTO;
}

const date1: DateDTO = {
  id: 1,
  date: new Date(),
  doctor: 'Dr. Pedro',
  tag: 'scheduled',
  type: 'Limpeza',
};

const date2: DateDTO = {
  id: 2,
  date: new Date(),
  doctor: 'Dr. Pedro',
  tag: 'scheduled',
  type: 'Limpeza',
};

export function Home({user: {name}}: HomeProps) {
  return (
    <>
      <Header name={name} />
      <StyledContainer edges={['bottom', 'left', 'right']}>
        <CardDate date={date1} />
        <StyledDivider />
        <CardDate date={date2} />
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  padding: 16px 24px;
`;

const StyledDivider = styled.View`
  margin-bottom: 8px;
`;
