import React, {useState} from 'react';
import {TextInputProps as RNTextInputProps} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import {Control, Controller} from 'react-hook-form';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  ValidationLoginSchemaProps,
  ValidationPersonalSchemaProps,
} from '@types';
import {formatPhoneMask} from '@helpers';

interface TextInputProps extends RNTextInputProps {
  control: Control<any>;
  name: keyof ValidationLoginSchemaProps | keyof ValidationPersonalSchemaProps;
  password?: boolean;
  mask?: 'phone';
}

const masks = {
  phone: formatPhoneMask,
};

export function TextInput({
  password = false,
  control,
  name,
  editable = true,
  mask,
  ...rest
}: TextInputProps) {
  const [showPassword, setShowPassword] = useState(password);
  const {
    colors: {text},
    fonts: {
      size: {lg},
    },
  } = useTheme();

  const handleToggleShowPassword = () => setShowPassword(prev => !prev);

  return (
    <>
      <StyledContainer editable={editable}>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <>
              <StyledInput
                secureTextEntry={showPassword}
                onBlur={onBlur}
                onChangeText={valueText =>
                  onChange(mask ? masks[mask](valueText) : valueText)
                }
                value={value}
                editable={editable}
                {...rest}
              />
              {password && (
                <StyledButton onPress={handleToggleShowPassword}>
                  <Icon
                    name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                    size={lg}
                    color={text}
                  />
                </StyledButton>
              )}
            </>
          )}
          name={name}
        />
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.View<{editable: boolean}>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background-color: ${({theme, editable}) =>
    editable ? theme.colors.secondary : theme.colors.disabled};
`;

const StyledInput = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor: theme.colors.disabled,
}))`
  flex: 1;
  padding: 12px 16px;
  color: ${({theme}) => theme.colors.text};
`;

const StyledButton = styled.TouchableOpacity`
  padding: 12px 16px;
  border-left-width: 1px;
  border-left-color: ${({theme}) => theme.colors.disabled};
`;
