import React, {useCallback, useEffect, useRef} from 'react';
import {Personal} from '@presentational';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {
  AuthRootStackParamList,
  BottomModalRefProps,
  ValidationPersonalSchemaProps,
} from '@types';
import {useForm} from 'react-hook-form';
import {useSelector} from 'react-redux';
import {RootStateProps} from '@store';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  formatPhoneMask,
  formatPhoneUnmask,
  validateSchemaPersonal,
} from '@helpers';
import {yupResolver} from '@hookform/resolvers/yup';

export function PersonalScreen() {
  const modalRef = useRef<BottomModalRefProps>(null);
  const {
    email,
    user: {name, phone},
    error,
  } = useSelector(({profile}: RootStateProps) => profile);
  const {goBack} =
    useNavigation<NavigationProp<AuthRootStackParamList, 'Personal'>>();
  const bottomInset = useSafeAreaInsets().bottom;

  const {
    control,
    handleSubmit,
    formState: {isDirty, errors},
  } = useForm<ValidationPersonalSchemaProps>({
    resolver: yupResolver(validateSchemaPersonal),
    defaultValues: {
      name,
      email,
      phone: formatPhoneMask(phone),
    },
  });

  const handleSaveNewPersonalData = (data: ValidationPersonalSchemaProps) => {
    console.log(data);
    console.log(formatPhoneUnmask(data.phone));
    // TODO: implement save new personal data
  };

  const handleToggleModal = useCallback(() => {
    const isActive = modalRef.current?.isActive();
    isActive ? modalRef.current?.scrollTo(0) : modalRef.current?.scrollTo(-250);
  }, []);

  useEffect(() => {
    if (errors.name || errors.phone) {
      handleToggleModal();
    }
  }, [errors]);

  return (
    <Personal
      control={control}
      bottomInset={bottomInset}
      isDirty={isDirty}
      modalRef={modalRef}
      errors={errors}
      onPressBack={goBack}
      handleSubmit={handleSubmit(handleSaveNewPersonalData)}
      handleToggleModal={handleToggleModal}
      apiError={error}
    />
  );
}
