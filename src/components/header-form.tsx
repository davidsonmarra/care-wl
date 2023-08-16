import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text} from './text';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthRootStackParamList, PublicRootStackParamList} from '@types';

interface HeaderFormProps {
  leftIcon?: string;
  handlePressLeftIcon?: () => void;
}

export function HeaderForm({leftIcon, handlePressLeftIcon}: HeaderFormProps) {
  const {top} = useSafeAreaInsets();

  const {goBack} =
    useNavigation<
      NavigationProp<AuthRootStackParamList | PublicRootStackParamList>
    >();

  return (
    <StyledContainer topInset={top}>
      {leftIcon && (
        <StyledIconButton onPress={handlePressLeftIcon || goBack}>
          <StyledIcon name={leftIcon} />
        </StyledIconButton>
      )}
      <Text type="header-form">Agendar Consulta</Text>
      <StyledWrapper />
    </StyledContainer>
  );
}

const StyledContainer = styled.View<{topInset: number}>`
  padding: ${({topInset}) => `${topInset + 16}px 24px 16px`};
  background-color: ${({theme}) => theme.colors.primary};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledWrapper = styled.View`
  width: 24px;
`;

const StyledIconButton = styled.TouchableOpacity`
  width: 24px;
`;

const StyledIcon = styled(Icon).attrs(({theme}) => ({
  size: 24,
  color: theme.colors.secondary,
}))``;
