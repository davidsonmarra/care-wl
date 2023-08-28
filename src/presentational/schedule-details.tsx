import React from 'react';
import styled from 'styled-components/native';
import {DateDTO} from '@types';

interface ScheduleDetailsProps {
  schedule: DateDTO;
}

export function ScheduleDetails({schedule}: ScheduleDetailsProps) {
  console.log(schedule);
  return <StyledContainer />;
}

const StyledContainer = styled.View``;
