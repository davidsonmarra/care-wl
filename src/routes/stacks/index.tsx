import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootStateProps} from '@store';
import {PublicRoutes} from './public.routes';
import {AuthRoutes} from './auth.routes';

export function Routes() {
  const {isLogged} = useSelector(({profile}: RootStateProps) => profile);

  return (
    <NavigationContainer>
      {isLogged ? <AuthRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
}
