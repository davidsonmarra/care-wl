import React from 'react';
import {Home} from '@presentational';
import {useSelector} from 'react-redux';
import {RootStateProps} from '@store';

export function HomeScreen() {
  const {user} = useSelector(({profile}: RootStateProps) => profile);

  return <Home user={user} />;
}
