import React, {memo} from 'react';
import {TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';
import {formatDate, getCategory} from '@helpers';
import {DateDTO} from '@types';
import {Tag} from './tag';
import {Text} from './text';
import {CardDate} from './card-date';

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
      <CardDate day={day} hour={hour} month={month} />
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
