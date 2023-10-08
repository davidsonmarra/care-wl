import React, {memo} from 'react';
import {TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';
import {formatDate, getCategory} from '@helpers';
import {DateDTO} from '@types';
import {Tag} from './tag';
import {Text} from './text';

interface CardScheduleProps extends TouchableOpacityProps {
  date: DateDTO;
}

function CardScheduleComponent({
  date: {tag = 'first', hour, doctor, type, date},
  onPress,
}: CardScheduleProps) {
  const {colorBackground, colorText, text: textTag} = getCategory[tag];
  const {day, month} = formatDate(date);

  return (
    <StyledContainer onPress={onPress}>
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

const StyledContainer = styled.TouchableOpacity`
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

const StyledInfoContainer = styled.View`
  justify-content: space-between;
  align-items: flex-end;
`;

export const CardSchedule = memo(
  CardScheduleComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.date, nextProps.date);
  },
);
