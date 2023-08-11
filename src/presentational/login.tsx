import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled, {useTheme} from 'styled-components/native';
import {logoImg} from '@assets';
import {Button, Input, Text} from '@components';
import {api} from '../global';

export function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    fonts: {size},
  } = useTheme();

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const {data} = await api.post('/login');
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
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
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="E-mail"
            type="text"
          />
          <StyledDivider />
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Senha"
            type="password"
          />
          <StyledDivider />
          <Button type="secondary" size={size.md}>
            <Text type="btn-secondary">Esqueci minha senha</Text>
          </Button>
        </StyledSection>
      </StyledContent>
      <StyledButtonContainer>
        <Button type="primary" onPress={handleLogin} isLoading={isLoading}>
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

const StyledDivider = styled.View`
  margin-bottom: 8px;
`;

const StyledButtonContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;
