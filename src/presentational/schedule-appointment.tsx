import React, {RefObject} from 'react';
import {Dimensions, FlatList, FlatListProps} from 'react-native';
import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Control} from 'react-hook-form';
import {Button, Field, HeaderForm, Text} from '@components';
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
  STEPS: ScheduleAppointmentStepProps[];
}

const {width} = Dimensions.get('window');

export function ScheduleAppointment({
  listRef,
  bottomInset = 0,
  onPressBack,
  onSubmit,
  control,
  STEPS,
}: ScheduleAppointmentProps) {
  return (
    <StyledContainer edges={['bottom', 'left', 'right']}>
      <HeaderForm leftIcon="chevron-left" handlePressLeftIcon={onPressBack} />
      <StyledFormContainer>
        <StyledList
          data={STEPS}
          keyExtractor={({field}: ScheduleAppointmentStepProps) => `${field}`}
          renderItem={({item}: {item: ScheduleAppointmentStepProps}) =>
            renderItem({item}, control)
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
        <Button type="primary" onPress={onSubmit}>
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
) => (
  <StyledFieldContainer>
    <Field
      type={type}
      title={title}
      description={description}
      control={control}
      name={field}
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
