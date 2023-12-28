import React from 'react';
import {Personal} from '@presentational';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthRootStackParamList, ValidationPersonalSchemaProps} from '@types';
import {useForm} from 'react-hook-form';
import {useSelector} from 'react-redux';
import {RootStateProps} from '@store';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export function PersonalScreen() {
  const {
    email,
    user: {name},
  } = useSelector(({profile}: RootStateProps) => profile);
  const {goBack} =
    useNavigation<NavigationProp<AuthRootStackParamList, 'Personal'>>();
  const bottomInset = useSafeAreaInsets().bottom;

  const {
    control,
    handleSubmit,
    formState: {isDirty},
  } = useForm<ValidationPersonalSchemaProps>({
    defaultValues: {
      name,
      email,
    },
  });

  const handleSaveNewPersonalData = (data: ValidationPersonalSchemaProps) => {
    console.log(data);
    // TODO: implement save new personal data
  };

  return (
    <Personal
      control={control}
      bottomInset={bottomInset}
      onPressBack={goBack}
      handleSubmit={handleSubmit(handleSaveNewPersonalData)}
      isDirty={isDirty}
    />
  );
}
