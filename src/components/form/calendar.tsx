import React, {useState} from 'react';
import {Calendar as RNCalendar, LocaleConfig} from 'react-native-calendars';
import {useTheme} from 'styled-components/native';

import {ptBR} from '../../helpers';
import {format} from 'date-fns/esm';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

export const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const {
    colors: {primary, secondary},
  } = useTheme();

  return (
    <RNCalendar
      onDayPress={day => {
        setSelectedDate(day.dateString);
      }}
      markedDates={{
        [selectedDate]: {
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
  );
};
