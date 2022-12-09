import React, { useRef } from 'react';
import { Animated, Button, StyleSheet } from 'react-native';

export default function BallScreen() {
  const tranX = useRef(new Animated.Value(0)).current;
  const handleMove = () => {
    Animated.timing(tranX, {
      toValue: 200,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Animated.View
        style={[styles.ball, { transform: [{ translateX: tranX }] }]}
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
