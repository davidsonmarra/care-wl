import {formatDate} from '@helpers';
import {ScheduleDetails} from '@presentational';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {AuthRootStackParamList} from '@types';
import React from 'react';

export function ScheduleDetailsScreen() {
  const {schedule} =
    useRoute<RouteProp<AuthRootStackParamList, 'ScheduleDetails'>>().params;
  const {goBack} =
    useNavigation<NavigationProp<AuthRootStackParamList, 'ScheduleDetails'>>();

  const {day, month} = formatDate(schedule.date);

  return (
    <ScheduleDetails
      goBack={goBack}
      schedule={schedule}
      day={day}
      month={month}
    />
  );
}
