import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';
import {HomeScreen, ScheduleAppointmentScreen} from '../screens';
import {AuthRootStackParamList} from '@types';
import {actions} from '@store';

const {Screen, Navigator} =
  createNativeStackNavigator<AuthRootStackParamList>();
const {GET_USER_INFO} = actions;

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
    </Navigator>
  );
}
