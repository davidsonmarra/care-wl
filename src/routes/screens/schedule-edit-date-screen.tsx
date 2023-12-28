import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useForm} from 'react-hook-form';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {ScheduleEditDate} from '@presentational';
import {
  AuthRootStackParamList,
  ValidationScheduleEditDateSchemaProps,
} from '@types';
import {Alert} from 'react-native';

export function ScheduleEditDateScreen() {
  const {bottom} = useSafeAreaInsets();
  const {goBack} = useNavigation<NavigationProp<AuthRootStackParamList>>();
  const {control, handleSubmit, setValue} =
    useForm<ValidationScheduleEditDateSchemaProps>({});

  const onSubmit = () => {
    handleSubmit(handleNavigateToSuccessScreen)();
  };

  const handleNavigateToSuccessScreen = () => {
    Alert.alert('Agendamento realizado com sucesso!');
  };

  return (
    <ScheduleEditDate
      bottomInset={bottom}
      onPressBack={goBack}
      onSubmit={onSubmit}
      control={control}
      setValue={setValue}
    />
  );
}
