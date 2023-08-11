import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';

interface ButtonProps extends TouchableOpacityProps {
  type: 'primary' | 'secondary';
  isLoading?: boolean;
  size?: number;
}

export function Button({
  type,
  isLoading = false,
  size = 18,
  children,
}: ButtonProps) {
  const buttonType = {
    primary: (
      <StyledButtonPrimary>
        {isLoading ? <StyledLoading size={size} /> : children}
      </StyledButtonPrimary>
    ),
    secondary: <StyledButtonSecondary>{children}</StyledButtonSecondary>,
  };

  return buttonType[type];
}

const StyledButtonPrimary = styled.TouchableOpacity<TouchableOpacityProps>`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  border-radius: 8px;
  background-color: ${({theme: {colors}, disabled}) =>
    disabled ? colors.disabled : colors.primary};
`;

const StyledButtonSecondary = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
`;

const StyledLoading = styled.ActivityIndicator.attrs(({theme}) => ({
  color: theme.colors.secondary,
}))``;
