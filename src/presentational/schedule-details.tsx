import React from 'react';
import styled from 'styled-components/native';
import {DateDTO} from '@types';
import {Header, Text} from '@components';

interface ScheduleDetailsProps {
  schedule: DateDTO;
  goBack: () => void;
  day: string;
  month: string;
}

export function ScheduleDetails({schedule, goBack, day}: ScheduleDetailsProps) {
  console.log(schedule);
  return (
    <StyledContainer>
      <Header
        title={schedule.type}
        handlePressLeftIcon={goBack}
        leftIcon="chevron-left"
      />
      <StyledWrapper>
        <Text type="h2">{day}</Text>
        <Text type="h2">{schedule.hour}</Text>
        <Text type="h2">Serviço: {schedule.type}</Text>
        <Text type="h2">Profissional: {schedule.doctor}</Text>
      </StyledWrapper>
    </StyledContainer>
  );
}

const StyledContainer = styled.View``;

const StyledWrapper = styled.View`
  padding: 16px 24px 8px;
  align-items: center;
`;
