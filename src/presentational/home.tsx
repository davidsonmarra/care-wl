import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {Text} from '@components';

export function Home() {
  return (
    <StyledContainer>
      <Text type="h1">Home</Text>
    </StyledContainer>
  );
}

const StyledContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.background};
  padding: 16px 24px;
`;
