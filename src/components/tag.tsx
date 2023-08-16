import React from 'react';
import styled from 'styled-components/native';

interface TagProps {
  children: JSX.Element;
  color: string;
}

export function Tag({children, color = ''}: TagProps) {
  return <StyledContainer color={color}>{children}</StyledContainer>;
}

const StyledContainer = styled.View<{color: string}>`
  background-color: ${({color}) => color};
  padding: 12px 16px;
  border-radius: 25px;
`;
