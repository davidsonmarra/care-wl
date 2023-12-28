import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';
import {
  HomeScreen,
  ScheduleAppointmentScreen,
  ScheduleDetailsScreen,
} from '../screens';
import {AuthRootStackParamList} from '@types';
import {actionsProfile} from '@store';
import {ScheduleEditDateScreen} from '../screens/schedule-edit-date-screen';

const {Screen, Navigator} =
  createNativeStackNavigator<AuthRootStackParamList>();
const {GET_USER_INFO} = actionsProfile;

export function AuthRoutes() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_USER_INFO());
  }, []);

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Screen name="Home" component={HomeScreen} />
      <Screen
        name="ScheduleAppointment"
        component={ScheduleAppointmentScreen}
      />
      <Screen name="ScheduleDetails" component={ScheduleDetailsScreen} />
      <Screen name="ScheduleEditDate" component={ScheduleEditDateScreen} />
    </Navigator>
  );
}
