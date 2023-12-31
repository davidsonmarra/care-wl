import React, {RefObject, useEffect, useState} from 'react';
import {Dimensions, FlatList, FlatListProps} from 'react-native';
import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Control, useWatch} from 'react-hook-form';
import {Button, Field, Header, Text} from '@components';
import {
  ScheduleAppointmentStepProps,
  ValidationScheduleAppointmentSchemaProps,
} from '@types';
interface ScheduleAppointmentProps {
  listRef: RefObject<FlatList>;
  bottomInset: number;
  currentStep: number;
  onPressBack: () => void;
  onSubmit: () => void;
  control: Control<ValidationScheduleAppointmentSchemaProps>;
  setValue: (
    name: keyof ValidationScheduleAppointmentSchemaProps,
    value: string,
  ) => void;
  STEPS: ScheduleAppointmentStepProps[];
}

const {width} = Dimensions.get('window');

export function ScheduleAppointment({
  listRef,
  bottomInset = 0,
  currentStep,
  onPressBack,
  onSubmit,
  control,
  setValue,
  STEPS,
}: ScheduleAppointmentProps) {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const fieldValue = useWatch({
    control,
  });

  useEffect(() => {
    setButtonDisabled(!fieldValue[STEPS[currentStep].field]);
  }, [fieldValue, currentStep]);

  return (
    <StyledContainer edges={['bottom', 'left', 'right']}>
      <Header
        title="Agendar Consulta"
        leftIcon="chevron-left"
        handlePressLeftIcon={onPressBack}
      />
      <StyledFormContainer>
        <StyledList
          data={STEPS}
          keyExtractor={({field}: ScheduleAppointmentStepProps) => `${field}`}
          renderItem={({item}: {item: ScheduleAppointmentStepProps}) =>
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
    </StyledContainer>
  );
}

const renderItem = (
  {
    item: {type, title, description, field, ...rest},
  }: {item: ScheduleAppointmentStepProps},
  control: Control<ValidationScheduleAppointmentSchemaProps>,
  setValue: (
    name: keyof ValidationScheduleAppointmentSchemaProps,
    value: string,
  ) => void,
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

const StyledContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

const StyledFormContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 16px 24px 8px;
`;

const StyledFieldContainer = styled.View`
  width: ${width - 48}px;
`;

const StyledList = styled(
  FlatList as new (
    props: FlatListProps<ScheduleAppointmentStepProps>,
  ) => FlatList<ScheduleAppointmentStepProps>,
)``;

const StyledButtonContainer = styled.View<{bottomInset: number}>`
  padding: 0px 24px 0;
  margin-bottom: ${({bottomInset}) => bottomInset || 12}px;
`;
