import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthRootStackParamList} from '@types';
import {HomeScreen} from '../screens';

const {Screen, Navigator} =
  createNativeStackNavigator<AuthRootStackParamList>();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  );
}
