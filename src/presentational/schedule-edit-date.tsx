import {Button, Field, Header, Text} from '@components';
import {ValidationScheduleEditDateSchemaProps} from '@types';
import React, {useEffect, useState} from 'react';
import {Control, useWatch} from 'react-hook-form';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

interface ScheduleEditDateProps {
  bottomInset?: number;
  onPressBack: () => void;
  control: Control<ValidationScheduleEditDateSchemaProps>;
  setValue: (
    name: keyof ValidationScheduleEditDateSchemaProps,
    value: string,
  ) => void;
  onSubmit: () => void;
}

export function ScheduleEditDate({
  bottomInset = 0,
  onPressBack,
  control,
  setValue,
  onSubmit,
}: ScheduleEditDateProps) {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const fieldValue = useWatch({
    control,
  });

  useEffect(() => {
    setButtonDisabled(!fieldValue.date);
  }, [fieldValue]);

  return (
    <StyledContainer edges={['bottom', 'left', 'right']}>
      <Header
        title="Editar agendamento"
        leftIcon="chevron-left"
        handlePressLeftIcon={onPressBack}
      />
      <StyledFormContainer>
        <Field
          title="Data"
          description="Selecione a data do agendamento"
          type="date"
          control={control}
          name="date"
          setValue={setValue}
        />
      </StyledFormContainer>
      <StyledButtonContainer bottomInset={bottomInset}>
        <Button disabled={buttonDisabled} type="primary" onPress={onSubmit}>
          <Text type="btn-primary">Avançar</Text>
        </Button>
      </StyledButtonContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

const StyledFormContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 16px 24px 8px;
`;

const StyledButtonContainer = styled.View<{bottomInset: number}>`
  padding: 0px 24px 0;
  margin-bottom: ${({bottomInset}) => bottomInset || 12}px;
`;
