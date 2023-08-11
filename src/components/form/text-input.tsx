import React from 'react';
import {TextInputProps as RNTextInputProps} from 'react-native';
import styled from 'styled-components/native';

interface TextInputProps extends RNTextInputProps {
  password?: boolean;
}

export function TextInput({password = false, ...rest}: TextInputProps) {
  return (
    <StyledContainer>
      <StyledInput {...rest} />
      {password && (
        <StyledButton>
          <StyledButtonText>mostrar</StyledButtonText>
        </StyledButton>
      )}
    </StyledContainer>
  );
}

const StyledContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background-color: #fff;
`;

const StyledInput = styled.TextInput`
  flex: 1;
  padding: 12px 16px;
`;

const StyledButton = styled.TouchableOpacity`
  padding: 12px 16px;
  border-left-width: 1px;
  border-left-color: #ccc;
`;

const StyledButtonText = styled.Text``;
