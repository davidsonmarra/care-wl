import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export function Login() {
  return (
    <StyledContainer>
      <StyledText>Teste</StyledText>
    </StyledContainer>
  );
}

const StyledContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.background};
`;

const StyledText = styled.Text``;
