import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';

interface ButtonProps extends TouchableOpacityProps {
  type: 'primary' | 'secondary';
}

export function Button({type, children}: ButtonProps) {
  const buttonType = {
    primary: <StyledButtonPrimary>{children}</StyledButtonPrimary>,
    secondary: <StyledButtonSecondary>{children}</StyledButtonSecondary>,
  };

  return buttonType[type];
}

const StyledButtonPrimary = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.primary};
`;

const StyledButtonSecondary = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
`;
