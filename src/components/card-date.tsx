import React from 'react';
import styled from 'styled-components/native';

interface CardDateProps {
  day: string;
  hour: string;
  month: string;
}

export function CardDate({day, hour, month}: CardDateProps) {
  return (
    <StyledDateContainer>
      <StyledDay>{day}</StyledDay>
      <StyledHourContainer>
        <StyledDivider />
        <StyledHour>{hour}</StyledHour>
        <StyledDivider />
      </StyledHourContainer>
      <StyledMonth>{month}</StyledMonth>
    </StyledDateContainer>
  );
}

const StyledDateContainer = styled.View`
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
  padding: 16px 0px;
  border-radius: 12px;
`;

const StyledDay = styled.Text`
  font-size: ${({theme}) => theme.fonts.size.xxxl}px;
  font-family: ${({theme}) => theme.fonts.primary.bold};
  color: ${({theme}) => theme.colors.secondary};
`;

const StyledHourContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const StyledDivider = styled.View`
  width: 16px;
  height: 3px;
  background-color: ${({theme}) => theme.colors.background};
`;

const StyledHour = styled.Text`
  margin: 0 4px;
  font-size: ${({theme}) => theme.fonts.size.lg}px;
  font-family: ${({theme}) => theme.fonts.primary.medium};
  color: ${({theme}) => theme.colors.secondary};
`;

const StyledMonth = styled.Text`
  font-size: ${({theme}) => theme.fonts.size.xxl}px;
  font-family: ${({theme}) => theme.fonts.primary.semiBold};
  color: ${({theme}) => theme.colors.secondary};
`;
