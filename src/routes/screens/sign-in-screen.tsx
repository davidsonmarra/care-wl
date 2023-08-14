import React, {useCallback, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {SignIn} from '@presentational';
import {actions, RootStateProps} from '@store';
import {validateSchemaLogin} from '@helpers';
import {BottomModalRefProps, ValidationLoginSchemaProps} from '@types';

const {LOGIN} = actions;

export function SignInScreen() {
  const modalRef = useRef<BottomModalRefProps>(null);
  const dispatch = useDispatch();
  const {isLoading, error} = useSelector(
    ({profile}: RootStateProps) => profile,
  );

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
      handleSubmit={handleSubmit(handleLogin)}
      handleToggleModal={handleToggleModal}
      isLoading={isLoading}
      modalRef={modalRef}
      errors={errors}
      apiError={error}
    />
  );
}