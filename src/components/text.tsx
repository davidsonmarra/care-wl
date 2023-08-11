import React, {PropsWithChildren} from 'react';
import {TextProps as RNTextProps} from 'react-native';
import styled from 'styled-components/native';

interface TextProps extends RNTextProps, PropsWithChildren {
  type: 'h1' | 'h2' | 'btn-primary' | 'btn-secondary';
}

export function Text({type, children}: TextProps) {
  const textType = {
    h1: <StyledH1>{children}</StyledH1>,
    h2: <StyledH2>{children}</StyledH2>,
    'btn-primary': <StyledButtonPrimary>{children}</StyledButtonPrimary>,
    'btn-secondary': <StyledButtonSecondary>{children}</StyledButtonSecondary>,
  };

  return textType[type];
}

const StyledH1 = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary.bold};
  font-size: ${({theme}) => theme.fonts.size.xl}px;
`;

const StyledH2 = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary.semiBold};
  font-size: ${({theme}) => theme.fonts.size.lg}px;
`;

const StyledButtonPrimary = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary.bold};
  font-size: ${({theme}) => theme.fonts.size.md}px;
  color: #fff;
`;

const StyledButtonSecondary = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary.bold};
  font-size: ${({theme}) => theme.fonts.size.md}px;
  color: ${({theme}) => theme.colors.primary};
`;
