import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PublicRootStackParamList} from '@types';
import {SignInScreen, SignUpScreen} from '../screens';

const {Screen, Navigator} =
  createNativeStackNavigator<PublicRootStackParamList>();

export function PublicRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SignIn">
      <Screen name="SignIn" component={SignInScreen} />
      <Screen name="SignUp" component={SignUpScreen} />
    </Navigator>
  );
}
