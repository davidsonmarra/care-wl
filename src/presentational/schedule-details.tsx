import React from 'react';
import styled from 'styled-components/native';
import {DateDTO, BottomModalRefProps} from '@types';
import {
  BottomModal as CancelModelConfirmation,
  Button,
  CardDate,
  Header,
  Text,
} from '@components';

interface ScheduleDetailsProps {
  schedule: DateDTO;
  goBack: () => void;
  day: string;
  month: string;
  bottomInset?: number;
  handleToggleModal: () => void;
  handleEditAppointment: () => void;
  modalRef: React.RefObject<BottomModalRefProps>;
}

export function ScheduleDetails({
  schedule,
  goBack,
  day,
  month,
  bottomInset = 0,
  handleToggleModal,
  handleEditAppointment,
  modalRef,
}: ScheduleDetailsProps) {
  return (
    <StyledContainer>
      <Header
        title={`Agendado: ${schedule.type}`}
        handlePressLeftIcon={goBack}
        leftIcon="chevron-left"
      />
      <StyledWrapper>
        <StyledContainerCardDate>
          <CardDate day={day} hour={schedule.hour} month={month} />
        </StyledContainerCardDate>
        <StyledContainerInfo>
          <Text type="h2">Serviço: {schedule.type}</Text>
          <Text type="h2">Profissional: {schedule.doctor}</Text>
        </StyledContainerInfo>
      </StyledWrapper>
      <StyledButtonContainer bottomInset={bottomInset}>
        <Button type="primary" onPress={handleEditAppointment}>
          <Text type="btn-primary">Alterar horário</Text>
        </Button>
        <Button type="secondary" onPress={handleToggleModal}>
          <Text type="btn-secondary">Cancelar consulta</Text>
        </Button>
      </StyledButtonContainer>
      <CancelModelConfirmation
        title="Deseja cancelar a consulta?"
        icon="delete-forever"
        ref={modalRef}>
        <Text type="text">
          Após cancelado, não será possível reverter a ação.
        </Text>
        <Button type="secondary" onPress={handleToggleModal}>
          <StyledDivider value={8} />
          <Text type="btn-secondary">Cancelar</Text>
        </Button>
      </CancelModelConfirmation>
    </StyledContainer>
  );
}

const StyledContainer = styled.View`
  flex: 1;
`;

const StyledWrapper = styled.View`
  flex: 1;
  padding: 16px 24px 8px;
  align-items: center;
`;

const StyledContainerCardDate = styled.View`
  width: 120px;
  margin: 0 auto 16px;
`;

const StyledContainerInfo = styled.View`
  width: 100%;
`;

const StyledButtonContainer = styled.View<{bottomInset: number}>`
  padding: 0px 24px 0;
  margin-bottom: ${({bottomInset}) => bottomInset || 12}px;
`;

const StyledDivider = styled.View<{value: number}>`
  margin-bottom: ${({value}) => value}px;
`;
