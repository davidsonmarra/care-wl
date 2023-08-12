import React, {useState, useEffect, useRef, useCallback} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled, {useTheme} from 'styled-components/native';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {logoImg} from '@assets';
import {Button, BottomModal, Text, Input} from '@components';
import {validateSchemaLogin} from '@helpers';
import {api} from '@global';
import {BottomModalRefProps, ValidationLoginSchemaProps} from '@types';

export function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const modalRef = useRef<BottomModalRefProps>(null);
  const {
    fonts: {size},
  } = useTheme();
  const {
    control,
    handleSubmit,
    formState: {errors},
    setError,
  } = useForm<ValidationLoginSchemaProps>({
    resolver: yupResolver(validateSchemaLogin),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const handleLogin = async ({email, password}: ValidationLoginSchemaProps) => {
    console.log(email, password);
    setIsLoading(true);
    try {
      const {data} = await api.post('/login', {email, password});
      console.log(data);
    } catch (error) {
      setError('password', {message: 'E-mail ou senha incorretos'});
      handleToggleModal();
    } finally {
      setIsLoading(false);
    }
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
    <>
      <StyledContainer>
        <StyledContent>
          <StyledSection>
            <StyledLogo source={logoImg} />
          </StyledSection>
          <StyledSection>
            <Text type="h1">Entre na sua conta!</Text>
          </StyledSection>
          <StyledSection>
            <Input
              control={control}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="E-mail"
              type="text"
              name="email"
            />
            <StyledDivider value={8} />
            <Input
              control={control}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Senha"
              type="password"
              name="password"
            />
            <StyledDivider value={8} />
            <Button type="secondary" size={size.md}>
              <Text type="btn-secondary">Esqueci minha senha</Text>
            </Button>
          </StyledSection>
        </StyledContent>
        <StyledButtonContainer>
          <Button
            type="primary"
            onPress={handleSubmit(handleLogin)}
            isLoading={isLoading}>
            <Text type="btn-primary">Entrar</Text>
          </Button>
          <Button type="secondary">
            <Text type="btn-secondary">Criar conta</Text>
          </Button>
        </StyledButtonContainer>
      </StyledContainer>
      <BottomModal
        title="Ops... algo deu errado"
        icon="report-gmailerrorred"
        ref={modalRef}>
        <Text type="text">
          {errors.email?.message || errors.password?.message}
        </Text>
        <Button type="secondary" onPress={handleToggleModal}>
          <StyledDivider value={8} />
          <Text type="btn-secondary">Tentar Novamente</Text>
        </Button>
      </BottomModal>
    </>
  );
}

const StyledContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.background};
  padding: 16px 24px;
`;

const StyledContent = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledLogo = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

const StyledSection = styled.View`
  margin-bottom: 24px;
  width: 100%;
  align-items: center;
`;

const StyledDivider = styled.View<{value: number}>`
  margin-bottom: ${({value}) => value}px;
`;

const StyledButtonContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;
