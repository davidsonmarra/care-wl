import React from 'react';
import {FlatList, FlatListProps, ListRenderItem} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';
import {Button, CardDate, Header, Text} from '@components';
import {AuthRootStackParamList, DateDTO, UserDTO} from '@types';
import {NavigationProp, useNavigation} from '@react-navigation/native';

interface HomeProps {
  user: UserDTO;
}

const date: DateDTO[] = [
  {
    id: 1,
    date: new Date(),
    doctor: 'Dr. Pedro',
    tag: 'scheduled',
    type: 'Limpeza',
  },
  {
    id: 2,
    date: new Date(),
    doctor: 'Dr. Pedro',
    tag: 'scheduled',
    type: 'Limpeza',
  },
  {
    id: 3,
    date: new Date(),
    doctor: 'Dr. Pedro',
    tag: 'scheduled',
    type: 'Limpeza',
  },
  {
    id: 4,
    date: new Date(),
    doctor: 'Dr. Pedro',
    tag: 'scheduled',
    type: 'Limpeza',
  },
  {
    id: 5,
    date: new Date(),
    doctor: 'Dr. Pedro',
    tag: 'scheduled',
    type: 'Limpeza',
  },
];

export function Home({user: {name}}: HomeProps) {
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
          renderItem={renderItem}
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

const renderItem: ListRenderItem<DateDTO> = ({item}: {item: DateDTO}) => (
  // @ts-ignore
  <CardDate date={item} />
);

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
