import React from 'react';
import styled from 'styled-components/native';
import {format} from 'date-fns';
import {Tag} from './tag';
import {Text} from './text';
import {getCategory} from '@helpers';
import {DateDTO} from '@types';

interface CardDateProps {
  date: DateDTO;
}

export function CardDate({
  date: {tag = 'first', doctor, type, date},
}: CardDateProps) {
  const {colorBackground, colorText, text: textTag} = getCategory[tag];
  const day = format(date, 'dd');
  const month = format(date, 'MMM');
  const hour = format(date, 'HH:mm');

  return (
    <StyledContainer>
      <StyledDateContainer>
        <StyledDay>{day}</StyledDay>
        <StyledHourContainer>
          <StyledDivider />
          <StyledHour>{hour}</StyledHour>
          <StyledDivider />
        </StyledHourContainer>
        <StyledMonth>{month}</StyledMonth>
      </StyledDateContainer>
      <StyledInfoContainer>
        <Text type="text">{doctor}</Text>
        <Text type="h2">{type}</Text>
        <Tag color={colorBackground}>
          <Text type="tag" color={colorText}>
            {textTag}
          </Text>
        </Tag>
      </StyledInfoContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border-radius: 12px;
  padding: 16px;
  background-color: ${({theme}) => theme.colors.secondary};
`;

const StyledDateContainer = styled.View`
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
  padding: 16px 0px;
  border-radius: 12px;
`;

const StyledDay = styled.Text`
  font-size: 32px;
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
  font-size: 16px;
  font-family: ${({theme}) => theme.fonts.primary.medium};
  color: ${({theme}) => theme.colors.secondary};
  margin: 0 4px;
`;

const StyledMonth = styled.Text`
  font-size: 20px;
  font-family: ${({theme}) => theme.fonts.primary.semiBold};
  color: ${({theme}) => theme.colors.secondary};
`;

const StyledInfoContainer = styled.View`
  justify-content: space-between;
  align-items: flex-end;
`;
