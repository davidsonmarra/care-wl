import React, {useCallback, useRef} from 'react';
import {formatDate} from '@helpers';
import {ScheduleDetails} from '@presentational';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {AuthRootStackParamList, BottomModalRefProps} from '@types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export function ScheduleDetailsScreen() {
  const {schedule} =
    useRoute<RouteProp<AuthRootStackParamList, 'ScheduleDetails'>>().params;
  const {goBack, navigate} =
    useNavigation<NavigationProp<AuthRootStackParamList, 'ScheduleDetails'>>();
  const {bottom} = useSafeAreaInsets();
  const modalRef = useRef<BottomModalRefProps>(null);

  const {day, month} = formatDate(schedule.date);

  const handleEditAppointment = () => {
    navigate('ScheduleEditDate', {schedule});
  };

  // const handleCancelAppointment = () => {
  //   TODO: implement cancel appointment
  // };

  const handleToggleModal = useCallback(() => {
    const isActive = modalRef.current?.isActive();
    isActive ? modalRef.current?.scrollTo(0) : modalRef.current?.scrollTo(-250);
  }, []);

  return (
    <ScheduleDetails
      goBack={goBack}
      schedule={schedule}
      day={day}
      month={month}
      bottomInset={bottom}
      handleToggleModal={handleToggleModal}
      handleEditAppointment={handleEditAppointment}
      modalRef={modalRef}
    />
  );
}
