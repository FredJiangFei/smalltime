import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Image,
  Text,
} from 'react-native';

export default function Card({ desc, imageUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={() => onPress(desc)}>
      <View style={styles.root}>
        <Text>{desc}</Text>
        {imageUrl && <Image style={styles.image} source={{ uri: imageUrl }} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  root: {
    marginTop: 8,
    paddingBottom: 8,
    padding: 8,
    borderBottomColor: 'red',
    borderBottomWidth: 1,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
});
