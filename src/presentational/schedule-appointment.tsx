import React from 'react';
import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Field, HeaderForm} from '@components';

export function ScheduleAppointment() {
  return (
    <StyledContainer edges={['bottom', 'left', 'right']}>
      <HeaderForm leftIcon="chevron-left" />
      <Field type="date" title="" />
    </StyledContainer>
  );
}

const StyledContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;
