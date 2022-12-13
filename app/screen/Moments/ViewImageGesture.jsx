import React from 'react';
import { Modal, StyleSheet } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
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
    .onUpdate((e) => {
      scale.value = savedScale.value * e.scale;
    })
    .onEnd(() => {
      savedScale.value = scale.value;
    });

  const composed = Gesture.Race(panGesture, pinchGesture);

  return (
    <Modal visible={!!image}>
      <Pressable style={[styles.container]} onPress={() => setImage(null)}>
        <GestureDetector gesture={composed}>
          <Animated.Image
            style={[{ height: 300, width: '100%' }, animatedStyles]}
            resizeMode="contain"
            source={{ uri: image }}
          />
        </GestureDetector>
      </Pressable>
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
