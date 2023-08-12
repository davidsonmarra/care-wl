import React, {useCallback, forwardRef, useImperativeHandle} from 'react';
import {ModalProps, View} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {BottomModalRefProps} from '@types';
import {SCREEN_HEIGHT} from '@helpers';
import {Text} from './text';

interface BottomModalProps extends ModalProps {
  title?: string;
  icon?: string;
}

const MAX_TRANSLATE_X = -SCREEN_HEIGHT + 50;

const AnimatedView = Animated.createAnimatedComponent(View);

export const BottomModal = forwardRef<BottomModalRefProps, BottomModalProps>(
  ({title, children}, ref) => {
    const {colors} = useTheme();

    const translateY = useSharedValue(0);
    const context = useSharedValue({y: 0});
    const active = useSharedValue(false);

    const scrollTo = useCallback((destination: number) => {
      'worklet';
      if (destination === 0) {
        active.value = false;
      } else {
        active.value = true;
      }
      active.value = destination !== 0;

      translateY.value = withSpring(destination, {
        damping: 50,
      });
    }, []);

    const isActive = useCallback(() => {
      return active.value;
    }, []);

    useImperativeHandle(
      ref,
      () => ({
        scrollTo,
        isActive,
      }),
      [scrollTo, isActive],
    );

    const gesture = Gesture.Pan()
      .onStart(() => {
        context.value = {y: translateY.value};
      })
      .onUpdate(event => {
        translateY.value = event.translationY + context.value.y;
        translateY.value = Math.max(translateY.value, MAX_TRANSLATE_X);
      })
      .onEnd(() => {
        if (translateY.value > -SCREEN_HEIGHT / 3) {
          scrollTo(0);
        } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
          scrollTo(MAX_TRANSLATE_X);
        }
      });

    const rBottomSheetStyle = useAnimatedStyle(() => {
      const borderRadius = interpolate(
        translateY.value,
        [MAX_TRANSLATE_X + 50, MAX_TRANSLATE_X],
        [25, 5],
        Extrapolate.CLAMP,
      );
      return {
        borderRadius,
        transform: [{translateY: translateY.value}],
      };
    });

    return (
      <GestureDetector gesture={gesture}>
        <StyledContainer style={[rBottomSheetStyle]}>
          <StyledLine />
          <StyledTitleContainer>
            <Icon name="report-gmailerrorred" size={56} color={colors.error} />
            <StyledDivider value={8} />
            <Text type="modal-title">{title}</Text>
          </StyledTitleContainer>
          <StyledDivider value={12} />
          {children}
        </StyledContainer>
      </GestureDetector>
    );
  },
);

const StyledContainer = styled(AnimatedView)`
  height: ${SCREEN_HEIGHT}px;
  top: ${SCREEN_HEIGHT}px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.secondary};
  position: absolute;
  align-items: center;
`;

const StyledLine = styled.View`
  width: 75px;
  height: 4px;
  background-color: grey;
  align-self: center;
  margin: 15px 0;
  border-radius: 2px;
`;

const StyledTitleContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const StyledDivider = styled.View<{value: number}>`
  margin-bottom: ${({value}) => value}px;
`;
