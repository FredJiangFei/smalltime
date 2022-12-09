import React, { useRef } from 'react';
import { Animated, PanResponder, StyleSheet } from 'react-native';

export default function BallGestureScreen() {
  const pos = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () =>
        pos.setOffset({
          x: pos.x._value,
          y: pos.y._value,
        }),
      onPanResponderMove: Animated.event([null, { dx: pos.x, dy: pos.y }]),
      onPanResponderRelease: () => pos.flattenOffset(),
    })
  ).current;

  return (
    <Animated.View
      style={[
        styles.ball,
        { transform: [{ translateX: pos.x }, { translateY: pos.y }] },
      ]}
      {...panResponder.panHandlers}
    />
  );
}

const styles = StyleSheet.create({
  ball: {
    height: 70,
    width: 70,
    backgroundColor: 'blue',
    borderRadius: 35,
  },
});
