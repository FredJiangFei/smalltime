import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  runOnJS,
} from 'react-native-reanimated';

export default function ViewImageGesture({ image, setImage }) {
  const position = useSharedValue({ x: 0, y: 0 });
  const start = useSharedValue({ x: 0, y: 0 });
  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: position.value.x },
        { translateY: position.value.y },
        { scale: scale.value },
      ],
    };
  });

  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      position.value = {
        x: e.translationX + start.value.x,
        y: e.translationY + start.value.y,
      };
    })
    .onEnd(() => {
      start.value = {
        x: position.value.x,
        y: position.value.y,
      };
    });

  const pinchGesture = Gesture.Pinch()
    .onUpdate((e) => (scale.value = savedScale.value * e.scale))
    .onEnd(() => (savedScale.value = scale.value));

  const close = () => setImage(null);

  const tap = Gesture.Tap().onStart(() => {
    runOnJS(close)();
    position.value = {
      x: 0,
      y: 0,
    };
    start.value = {
      x: 0,
      y: 0,
    };
    scale.value = 1;
    savedScale.value = 1;
  });

  const composed = Gesture.Race(panGesture, pinchGesture, tap);

  return (
    <Modal visible={!!image}>
      <View style={styles.container}>
        <GestureDetector gesture={composed}>
          <Animated.Image
            style={[{ height: 300, width: '100%' }, animatedStyles]}
            resizeMode="contain"
            source={{ uri: image }}
          />
        </GestureDetector>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    overflow: 'hidden',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
