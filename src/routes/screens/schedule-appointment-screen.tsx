import React, {useEffect, useRef, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FlatList} from 'react-native-gesture-handler';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {ScheduleAppointment} from '@presentational';
import {SCHEDULE_APPOINTMENT_STEPS as STEPS} from '@helpers';
import {
  AuthRootStackParamList,
  ValidationScheduleAppointmentSchemaProps,
} from '@types';
import {actionsScheduleAppointment} from '@store';
import {Alert} from 'react-native';

const {GET_CATEGORIES, RESET} = actionsScheduleAppointment;

export function ScheduleAppointmentScreen() {
  const [currentStep, setCurrentStep] = useState(0);
  const listRef = useRef<FlatList>(null);

  const {bottom} = useSafeAreaInsets();
  const {goBack} = useNavigation<NavigationProp<AuthRootStackParamList>>();
  const {control, handleSubmit, setValue, reset} =
    useForm<ValidationScheduleAppointmentSchemaProps>({});

  const dispatch = useDispatch();

  const handleBack = () => {
    reset();
    dispatch(RESET());
    goBack();
  };

  const onSubmit = () => {
    if (currentStep === STEPS.length - 1) {
      handleSubmit(handleNavigateToSuccessScreen)();
    } else {
      scrollToNextStep();
      setCurrentStep(currentStep + 1);
    }
  };

  const scrollToNextStep = () => {
    listRef?.current?.scrollToIndex({
      animated: true,
      index: currentStep + 1,
    });
  };

  const scrollToBackStep = () => {
    listRef?.current?.scrollToIndex({
      animated: true,
      index: currentStep - 1,
    });
  };

  const verifyIfScrollIsPossible = (offset: number) => {
    if (currentStep + offset < 0 || currentStep + offset > STEPS.length - 1) {
      return false;
    }
    setCurrentStep(currentStep + offset);
    return true;
  };

  const handleNavigateToSuccessScreen = () => {
    Alert.alert('Agendamento realizado com sucesso!');
  };

  useEffect(() => {
    dispatch(GET_CATEGORIES());
  }, []);

  return (
    <ScheduleAppointment
      listRef={listRef}
      bottomInset={bottom}
      currentStep={currentStep}
      onPressBack={() =>
        verifyIfScrollIsPossible(-1) ? scrollToBackStep() : handleBack()
      }
      onSubmit={onSubmit}
      control={control}
      setValue={setValue}
      STEPS={STEPS}
    />
  );
}
