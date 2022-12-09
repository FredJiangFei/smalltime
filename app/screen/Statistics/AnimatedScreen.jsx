import React, { useRef } from 'react';
import { Animated, Button, StyleSheet } from 'react-native';

export default function AnimatedScreen() {
  const pos = useRef(new Animated.Value(0)).current;
  const handleMove = () => {
    Animated.timing(pos, {
      toValue: 200,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Animated.View
        style={[styles.ball, { transform: [{ translateX: pos }] }]}
      />
      <Button title="Move" onPress={handleMove} />
    </>
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
