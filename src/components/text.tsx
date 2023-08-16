import React, {PropsWithChildren} from 'react';
import {TextProps as RNTextProps} from 'react-native';
import styled from 'styled-components/native';

interface TextProps extends RNTextProps, PropsWithChildren {
  type:
    | 'h1'
    | 'h2'
    | 'text'
    | 'modal-title'
    | 'btn-primary'
    | 'btn-secondary'
    | 'tag'
    | 'header-form';
  color?: string;
}

export function Text({type, children, color}: TextProps) {
  const textType = {
    h1: <StyledH1>{children}</StyledH1>,
    h2: <StyledH2>{children}</StyledH2>,
    text: <StyledText>{children}</StyledText>,
    'modal-title': <StyledModalTitle>{children}</StyledModalTitle>,
    'btn-primary': <StyledButtonPrimary>{children}</StyledButtonPrimary>,
    'btn-secondary': <StyledButtonSecondary>{children}</StyledButtonSecondary>,
    tag: <StyledTag color={color}>{children}</StyledTag>,
    'header-form': <StyledHeaderForm>{children}</StyledHeaderForm>,
  };

  return textType[type];
}

const StyledH1 = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary.bold};
  font-size: ${({theme}) => theme.fonts.size.xl}px;
  color: ${({theme}) => theme.colors.text};
`;

const StyledH2 = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary.semiBold};
  font-size: ${({theme}) => theme.fonts.size.lg}px;
  color: ${({theme}) => theme.colors.text};
`;

const StyledText = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary.regular};
  font-size: ${({theme}) => theme.fonts.size.md}px;
  color: ${({theme}) => theme.colors.text};
`;

const StyledModalTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary.bold};
  font-size: ${({theme}) => theme.fonts.size.lg}px;
  color: ${({theme}) => theme.colors.text};
`;

const StyledButtonPrimary = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary.bold};
  font-size: ${({theme}) => theme.fonts.size.md}px;
  color: ${({theme}) => theme.colors.secondary};
`;

const StyledButtonSecondary = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary.bold};
  font-size: ${({theme}) => theme.fonts.size.md}px;
  color: ${({theme}) => theme.colors.primary};
`;

const StyledTag = styled.Text<{color?: string}>`
  font-family: ${({theme}) => theme.fonts.primary.medium};
  font-size: ${({theme}) => theme.fonts.size.sm}px;
  color: ${({theme, color}) => color || theme.colors.text};
`;

const StyledHeaderForm = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary.semiBold};
  font-size: ${({theme}) => theme.fonts.size.lg}px;
  color: ${({theme}) => theme.colors.secondary};
`;
