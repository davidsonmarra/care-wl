import React from 'react';
import {Home} from '@presentational';
import {useSelector} from 'react-redux';
import {RootStateProps} from '@store';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {AuthRootStackParamList, DateDTO} from '@types';

export function HomeScreen() {
  const {navigate} =
    useNavigation<NavigationProp<AuthRootStackParamList, 'Home'>>();
  const {user} = useSelector(({profile}: RootStateProps) => profile);

  const handlePressSchedule = (schedule: DateDTO) => {
    navigate('ScheduleDetails', {schedule});
  };

  return <Home user={user} handlePressSchedule={handlePressSchedule} />;
}
