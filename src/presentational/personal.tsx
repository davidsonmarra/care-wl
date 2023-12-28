import React from 'react';
import {Button, Header, Input, Text} from '@components';
import {ValidationPersonalSchemaProps} from '@types';
import {Control} from 'react-hook-form';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

interface PersonalProps {
  control: Control<ValidationPersonalSchemaProps>;
  bottomInset?: number;
  onPressBack: () => void;
  handleSubmit: () => void;
  isDirty: boolean;
}

export function Personal({
  control,
  bottomInset = 0,
  isDirty,
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
      </StyledFormContainer>
      <StyledButtonContainer bottomInset={bottomInset}>
        <Button disabled={!isDirty} type="primary" onPress={handleSubmit}>
          <Text type="btn-primary">Salvar</Text>
        </Button>
      </StyledButtonContainer>
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
