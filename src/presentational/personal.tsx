import React, {RefObject} from 'react';
import {BottomModal, Button, Header, Input, Text} from '@components';
import {BottomModalRefProps, ValidationPersonalSchemaProps} from '@types';
import {Control, FieldErrors} from 'react-hook-form';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {AxiosError} from 'axios';

interface PersonalProps {
  control: Control<ValidationPersonalSchemaProps>;
  bottomInset?: number;
  isDirty: boolean;
  modalRef: RefObject<BottomModalRefProps>;
  errors: FieldErrors<ValidationPersonalSchemaProps>;
  apiError: AxiosError<any>;
  handleToggleModal: () => void;
  onPressBack: () => void;
  handleSubmit: () => void;
}

export function Personal({
  control,
  bottomInset = 0,
  isDirty,
  modalRef,
  errors,
  apiError,
  handleToggleModal,
  onPressBack,
  handleSubmit,
}: PersonalProps) {
  return (
    <StyledContainer edges={['bottom', 'left', 'right']}>
      <Header
        title="Dados Pessoais"
        leftIcon="chevron-left"
        handlePressLeftIcon={onPressBack}
      />
      <StyledFormContainer>
        <StyledImage
          source={{uri: `https://ui-avatars.com/api/davidson-marra`}}
        />
        <StyledDivider value={32} />
        <Text type="text">E-mail</Text>
        <StyledDivider value={8} />
        <Input
          control={control}
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="E-mail"
          type="text"
          name="email"
          editable={false}
        />
        <StyledDivider value={16} />
        <Text type="text">Nome</Text>
        <StyledDivider value={8} />
        <Input
          control={control}
          autoCorrect={false}
          autoCapitalize="words"
          placeholder="Nome"
          type="text"
          name="name"
        />
        <StyledDivider value={16} />
        <Text type="text">Telefone</Text>
        <StyledDivider value={8} />
        <Input
          control={control}
          autoCorrect={false}
          autoCapitalize="words"
          keyboardType="numeric"
          placeholder="Telefone"
          type="text"
          name="phone"
          mask="phone"
        />
      </StyledFormContainer>
      <StyledButtonContainer bottomInset={bottomInset}>
        <Button disabled={!isDirty} type="primary" onPress={handleSubmit}>
          <Text type="btn-primary">Salvar</Text>
        </Button>
      </StyledButtonContainer>
      <BottomModal
        title="Ops... algo deu errado"
        icon="report-gmailerrorred"
        ref={modalRef}>
        <Text type="text">
          {errors.name?.message ||
            errors.phone?.message ||
            apiError?.response?.data?.message}
        </Text>
        <Button type="secondary" onPress={handleToggleModal}>
          <StyledDivider value={8} />
          <Text type="btn-secondary">Tentar Novamente</Text>
        </Button>
      </BottomModal>
    </StyledContainer>
  );
}

const StyledContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

const StyledFormContainer = styled.View`
  flex: 1;
  padding: 16px 24px 8px;
`;

const StyledImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  align-self: center;
`;

const StyledDivider = styled.View<{value: number}>`
  margin-bottom: ${({value}) => value}px;
`;

const StyledButtonContainer = styled.View<{bottomInset: number}>`
  padding: 0px 24px 0;
  margin-bottom: ${({bottomInset}) => bottomInset || 12}px;
`;
