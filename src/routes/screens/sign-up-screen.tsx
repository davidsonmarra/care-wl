import React, {useRef, useState} from 'react';
import {SignUp} from '@presentational';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {PublicRootStackParamList} from '@types';
import {FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SIGN_UP_STEPS as STEPS} from '@helpers';
import {useForm} from 'react-hook-form';
import {ValidationSignUpSchemaProps} from '@types';

export function SignUpScreen() {
  const {goBack} =
    useNavigation<NavigationProp<PublicRootStackParamList, 'SignUp'>>();
  const [currentStep, setCurrentStep] = useState(0);
  const listRef = useRef<FlatList>(null);

  const {bottom} = useSafeAreaInsets();
  const {control, handleSubmit, setValue} =
    useForm<ValidationSignUpSchemaProps>({});

  const onSubmit = () => {
    if (currentStep === STEPS.length - 1) {
      handleSubmit(handleCreateAccount)();
    } else {
      scrollToNextStep();
      setCurrentStep(currentStep + 1);
    }
  };

  const handleCreateAccount = (data: ValidationSignUpSchemaProps) => {
    console.log('handleCreateAccount => ', data);
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

  return (
    <SignUp
      control={control}
      currentStep={currentStep}
      listRef={listRef}
      bottomInset={bottom}
      STEPS={STEPS}
      setValue={setValue}
      onPressBack={() =>
        verifyIfScrollIsPossible(-1) ? scrollToBackStep() : goBack()
      }
      onSubmit={onSubmit}
    />
  );
}
