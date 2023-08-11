import React, {PropsWithChildren} from 'react';
import {TextProps as RNTextProps} from 'react-native';
import styled from 'styled-components/native';

interface TextProps extends RNTextProps, PropsWithChildren {
  type: 'h1' | 'btn-primary' | 'btn-secondary';
}

export function Text({type, children}: TextProps) {
  const textType = {
    h1: <StyledH1>{children}</StyledH1>,
    'btn-primary': <StyledButtonPrimary>{children}</StyledButtonPrimary>,
    'btn-secondary': <StyledButtonSecondary>{children}</StyledButtonSecondary>,
  };

  return textType[type];
}

const StyledH1 = styled.Text``;

const StyledButtonPrimary = styled.Text`
  color: #fff;
  font-weight: bold;
`;

const StyledButtonSecondary = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-weight: bold;
`;
