import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {Text} from './text';

interface HeaderProps {
  name: string;
}

export function Header({name = ''}: HeaderProps) {
  const {top} = useSafeAreaInsets();

  return (
    <StyledContainer topInset={top}>
      <StyledUserContainer>
        <StyledImage source={{uri: `https://ui-avatars.com/api/${name}`}} />
        <StyledInfoContainer>
          <Text type="text">Olá,</Text>
          <Text type="h2">{name}</Text>
        </StyledInfoContainer>
      </StyledUserContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.View<{topInset: number}>`
  padding: ${({topInset}) => `${topInset + 16}px 24px 16px`};
  background-color: ${({theme}) => theme.colors.background};
  flex-direction: row;
  align-items: center;
`;

const StyledUserContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const StyledImage = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 38px;
`;

const StyledInfoContainer = styled.View`
  margin-left: 16px;
`;
