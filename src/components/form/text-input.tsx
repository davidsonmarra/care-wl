import React, {useState} from 'react';
import {TextInputProps as RNTextInputProps} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface TextInputProps extends RNTextInputProps {
  password?: boolean;
}

export function TextInput({password = false, ...rest}: TextInputProps) {
  const [showPassword, setShowPassword] = useState(password);
  const {
    colors: {text},
    fonts: {
      size: {lg},
    },
  } = useTheme();

  const handleToggleShowPassword = () => setShowPassword(prev => !prev);

  return (
    <StyledContainer>
      <StyledInput secureTextEntry={showPassword} {...rest} />
      {password && (
        <StyledButton onPress={handleToggleShowPassword}>
          <Icon
            name={showPassword ? 'eye-outline' : 'eye-off-outline'}
            size={lg}
            color={text}
          />
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
  background-color: ${({theme}) => theme.colors.secondary};
`;

const StyledInput = styled.TextInput`
  flex: 1;
  padding: 12px 16px;
`;

const StyledButton = styled.TouchableOpacity`
  padding: 12px 16px;
  border-left-width: 1px;
  border-left-color: ${({theme}) => theme.colors.disabled};
`;
