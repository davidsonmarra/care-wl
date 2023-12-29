import React, {RefObject, useEffect, useState} from 'react';
import {Button, Field, Header, Text} from '@components';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {Dimensions, FlatList, FlatListProps} from 'react-native';
import {SignUpStepProps, ValidationSignUpSchemaProps} from '@types';
import {Control, useWatch} from 'react-hook-form';

interface SignUpProps {
  control: Control<ValidationSignUpSchemaProps>;
  currentStep: number;
  listRef: RefObject<FlatList>;
  bottomInset: number;
  STEPS: SignUpStepProps[];
  setValue: (name: keyof ValidationSignUpSchemaProps, value: string) => void;
  onPressBack: () => void;
  onSubmit: () => void;
}

const {width} = Dimensions.get('window');

export function SignUp({
  control,
  currentStep,
  listRef,
  bottomInset = 0,
  STEPS,
  setValue,
  onPressBack,
  onSubmit,
}: SignUpProps) {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const fieldValue = useWatch({
    control,
  });

  useEffect(() => {
    setButtonDisabled(!fieldValue[STEPS[currentStep].field]);
  }, [fieldValue, currentStep]);

  return (
    <Container edges={['bottom', 'left', 'right']}>
      <Header
        title="Criar conta"
        leftIcon="chevron-left"
        handlePressLeftIcon={onPressBack}
      />
      <StyledFormContainer>
        <StyledList
          data={STEPS}
          keyExtractor={({field}: SignUpStepProps) => `${field}`}
          renderItem={({item}: {item: SignUpStepProps}) =>
            renderItem({item}, control, setValue)
          }
          ref={listRef}
          decelerationRate="fast"
          bounces={false}
          horizontal
          pagingEnabled
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
        />
      </StyledFormContainer>
      <StyledButtonContainer bottomInset={bottomInset}>
        <Button
          disabled={buttonDisabled && STEPS[currentStep].required}
          type="primary"
          onPress={onSubmit}>
          <Text type="btn-primary">Avançar</Text>
        </Button>
      </StyledButtonContainer>
    </Container>
  );
}

const renderItem = (
  {item: {type, title, description, field, ...rest}}: {item: SignUpStepProps},
  control: Control<ValidationSignUpSchemaProps>,
  setValue: (name: keyof ValidationSignUpSchemaProps, value: string) => void,
) => (
  <StyledFieldContainer>
    <Field
      type={type}
      title={title}
      description={description}
      control={control}
      name={field}
      setValue={setValue}
      {...rest}
    />
  </StyledFieldContainer>
);

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

const StyledFormContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 16px 24px 8px;
`;

const StyledList = styled(
  FlatList as new (
    props: FlatListProps<SignUpStepProps>,
  ) => FlatList<SignUpStepProps>,
)``;

const StyledFieldContainer = styled.View`
  width: ${width - 48}px;
`;

const StyledButtonContainer = styled.View<{bottomInset: number}>`
  padding: 0px 24px 0;
  margin-bottom: ${({bottomInset}) => bottomInset || 12}px;
`;
