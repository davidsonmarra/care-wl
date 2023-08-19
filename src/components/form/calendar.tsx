import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import styled, {useTheme} from 'styled-components/native';
import {Calendar as RNCalendar, LocaleConfig} from 'react-native-calendars';
import {format} from 'date-fns/esm';
import {actionsScheduleAppointment, RootStateProps} from '@store';

import {ptBR} from '../../helpers';
import {useDispatch, useSelector} from 'react-redux';
import {Text} from '../text';
import {Button} from '../button';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

const {GET_HOURS} = actionsScheduleAppointment;

export const Calendar = () => {
  const [selectedHour, setSelectedHour] = useState('');

  const {
    colors: {primary, secondary},
  } = useTheme();

  const {date, hours, isLoading} = useSelector(
    ({scheduleAppointment}: RootStateProps) => scheduleAppointment,
  );
  const dispatch = useDispatch();

  const handleVerifyHour = (hour: string) => selectedHour === hour;

  useEffect(() => {
    setSelectedHour('');
  }, [date]);

  return (
    <Container>
      <RNCalendar
        onDayPress={selectedDay => {
          dispatch(GET_HOURS(selectedDay.dateString));
        }}
        markedDates={{
          [date]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: primary,
            endingDay: true,
          },
        }}
        minDate={format(new Date(), 'yyyy-MM-dd')}
        theme={{
          arrowColor: primary,
          calendarBackground: secondary,
        }}
      />
      {isLoading ? (
        <StyledLoading size="large" />
      ) : (
        <StyledListContainer>
          {hours.length !== 0
            ? hours.map((item: string) =>
                renderItem(
                  {item},
                  () => handleVerifyHour(item),
                  setSelectedHour,
                ),
              )
            : date
            ? noHoursAvailable()
            : noSelectDay()}
        </StyledListContainer>
      )}
    </Container>
  );
};

const renderItem = (
  {item}: {item: string},
  callback: () => boolean,
  setState: Dispatch<SetStateAction<string>>,
) => (
  <StyledButton
    onPress={() => setState(item)}
    opacity={callback()}
    type="primary"
    key={item}>
    <Text type="btn-primary">{item}</Text>
  </StyledButton>
);

const noSelectDay = () => (
  <StyledEmptyContainer>
    <Text type="h2">Escolha um dia a sua consulta!</Text>
  </StyledEmptyContainer>
);

const noHoursAvailable = () => (
  <StyledEmptyContainer>
    <Text type="h2">Não há horários disponíveis para o dia selecionado!</Text>
  </StyledEmptyContainer>
);

const Container = styled.View``;

const StyledListContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 12px;
`;

const StyledButton = styled(Button)<{opacity: boolean}>`
  width: 30%;
  border-radius: 30px;
  margin-top: 12px;
  opacity: ${({opacity}) => (opacity ? 1 : 0.5)};
`;

const StyledEmptyContainer = styled.View`
  flex: 1;
  height: 100%;
  align-items: center;
`;

const StyledLoading = styled.ActivityIndicator.attrs(({theme}) => ({
  color: theme.colors.primary,
}))`
  margin-top: 24px;
`;
