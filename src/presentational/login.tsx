import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {logoImg} from '@assets';
import {Button, Text} from '@components';

export function Login() {
  return (
    <StyledContainer>
      <StyledSection>
        <StyledLogo source={logoImg} />
      </StyledSection>
      <StyledSection>
        <Text type="h1">Entre na sua conta!</Text>
      </StyledSection>
      <StyledSection>
        <Text type="h1">Email Field</Text>
        <Text type="h1">Password Field</Text>
      </StyledSection>
      <StyledButtonContainer>
        <Button type="primary">
          <Text type="btn-primary">Entrar</Text>
        </Button>
        <Button type="secondary">
          <Text type="btn-secondary">Criar conta</Text>
        </Button>
      </StyledButtonContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  background-color: ${({theme}) => theme.colors.background};
  padding: 0 24px;
`;

const StyledLogo = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

const StyledSection = styled.View`
  margin-bottom: 24px;
`;

const StyledButtonContainer = styled.View`
  position: absolute;
  bottom: 24px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
