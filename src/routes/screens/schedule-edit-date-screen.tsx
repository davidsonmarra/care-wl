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
import {useDispatch} from 'react-redux';
import {actionsScheduleAppointment} from '@store';

const {RESET} = actionsScheduleAppointment;

export function ScheduleEditDateScreen() {
  const {bottom} = useSafeAreaInsets();
  const {goBack} = useNavigation<NavigationProp<AuthRootStackParamList>>();
  const {control, handleSubmit, setValue, reset} =
    useForm<ValidationScheduleEditDateSchemaProps>({});
  const dispatch = useDispatch();

  const handleBack = () => {
    reset();
    dispatch(RESET());
    goBack();
  };

  const onSubmit = () => {
    handleSubmit(handleNavigateToSuccessScreen)();
  };

  const handleNavigateToSuccessScreen = () => {
    Alert.alert('Agendamento realizado com sucesso!');
  };

  return (
    <ScheduleEditDate
      bottomInset={bottom}
      onPressBack={handleBack}
      onSubmit={onSubmit}
      control={control}
      setValue={setValue}
    />
  );
}
