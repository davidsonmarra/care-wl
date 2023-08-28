import {ScheduleDetails} from '@presentational';
import {RouteProp, useRoute} from '@react-navigation/native';
import {AuthRootStackParamList} from '@types';
import React from 'react';

export function ScheduleDetailsScreen() {
  const {schedule} =
    useRoute<RouteProp<AuthRootStackParamList, 'ScheduleDetails'>>().params;

  return <ScheduleDetails schedule={schedule} />;
}
