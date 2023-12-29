import React, {useCallback, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {SignIn} from '@presentational';
import {actionsProfile, RootStateProps} from '@store';
import {validateSchemaLogin} from '@helpers';
import {
  BottomModalRefProps,
  PublicRootStackParamList,
  ValidationLoginSchemaProps,
} from '@types';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const {LOGIN} = actionsProfile;

export function SignInScreen() {
  const modalRef = useRef<BottomModalRefProps>(null);
  const dispatch = useDispatch();
  const {isLoading, error} = useSelector(
    ({profile}: RootStateProps) => profile,
  );
  const {navigate} =
    useNavigation<NavigationProp<PublicRootStackParamList, 'SignIn'>>();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<ValidationLoginSchemaProps>({
    resolver: yupResolver(validateSchemaLogin),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const handleLogin = async (formData: ValidationLoginSchemaProps) => {
    dispatch(LOGIN({...formData, onCallbackPress: handleToggleModal}));
  };

  const handleToggleModal = useCallback(() => {
    const isActive = modalRef.current?.isActive();
    isActive ? modalRef.current?.scrollTo(0) : modalRef.current?.scrollTo(-250);
  }, []);

  useEffect(() => {
    if (errors.email || errors.password) {
      handleToggleModal();
    }
  }, [errors]);

  return (
    <SignIn
      control={control}
      isLoading={isLoading}
      modalRef={modalRef}
      errors={errors}
      apiError={error}
      handleSubmit={handleSubmit(handleLogin)}
      handleToggleModal={handleToggleModal}
      handleSignUp={() => navigate('SignUp')}
    />
  );
}
