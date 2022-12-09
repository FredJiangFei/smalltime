import React from 'react';
import { Image, Modal, StyleSheet } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function ViewImage({ image, setImage }) {
  return (
    <Modal visible={!!image}>
      <Pressable style={[styles.container]} onPress={() => setImage(null)}>
        <Image
          style={{ height: 300, width: '100%' }}
          resizeMode="contain"
          source={{ uri: image }}
        />
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
