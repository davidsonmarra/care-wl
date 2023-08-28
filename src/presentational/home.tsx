import React from 'react';
import {FlatList, FlatListProps} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';
import {Button, CardDate, Header, Text} from '@components';
import {AuthRootStackParamList, DateDTO, UserDTO} from '@types';
import {NavigationProp, useNavigation} from '@react-navigation/native';

interface HomeProps {
  user: UserDTO;
  handlePressSchedule: (schedule: DateDTO) => void;
}

const date: DateDTO[] = [
  {
    id: 1,
    date: '2023-11-20',
    hour: '10:00',
    doctor: 'Dr. Pedro',
    tag: 'scheduled',
    type: 'Limpeza',
  },
  {
    id: 2,
    date: '2023-10-21',
    hour: '10:00',
    doctor: 'Dr. Pedro',
    tag: 'scheduled',
    type: 'Limpeza',
  },
  {
    id: 3,
    date: '2023-09-20',
    doctor: 'Dr. Pedro',
    hour: '10:00',
    tag: 'scheduled',
    type: 'Limpeza',
  },
  {
    id: 4,
    date: '2023-08-20',
    doctor: 'Dr. Pedro',
    hour: '10:00',
    tag: 'scheduled',
    type: 'Limpeza',
  },
  {
    id: 5,
    date: '2023-08-20',
    hour: '10:00',
    doctor: 'Dr. Pedro',
    tag: 'scheduled',
    type: 'Limpeza',
  },
];

export function Home({user: {name}, handlePressSchedule}: HomeProps) {
  const {navigate} =
    useNavigation<NavigationProp<AuthRootStackParamList, 'Home'>>();

  const handleScheduleAppointment = () => {
    navigate('ScheduleAppointment');
  };

  return (
    <>
      <Header name={name} />
      <StyledContainer edges={['bottom', 'left', 'right']}>
        <StyledList
          data={date}
          renderItem={({item}: {item: DateDTO}) =>
            renderItem({item}, handlePressSchedule)
          }
          keyExtractor={(item: DateDTO) => `${item.id}`}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={itemSeparator}
        />
        <StyledButton type="primary" onPress={handleScheduleAppointment}>
          <StyledIcon name="calendar-plus" />
          <Text type="btn-primary">Agendar</Text>
        </StyledButton>
      </StyledContainer>
    </>
  );
}

const renderItem = (
  {item}: {item: DateDTO},
  handlePressSchedule: (schedule: DateDTO) => void,
) => <CardDate date={item} onPress={() => handlePressSchedule(item)} />;

const itemSeparator = () => <StyledDivider />;

const StyledContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  padding: 16px 24px;
`;

const StyledDivider = styled.View`
  margin-bottom: 8px;
`;

const StyledList = styled(
  FlatList as new (props: FlatListProps<DateDTO>) => FlatList<DateDTO>,
)``;

const StyledButton = styled(Button)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

const StyledIcon = styled(Icon).attrs(({theme}) => ({
  color: theme.colors.secondary,
  size: theme.fonts.size.xxl,
}))`
  margin-right: 8px;
`;
