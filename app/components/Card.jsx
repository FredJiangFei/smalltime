import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Image,
  Text,
} from 'react-native';
import colors from '../config/colors';

export default function Card({ desc, imageUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={() => onPress(desc)}>
      <View style={styles.root}>
        <Text>{desc}</Text>
        <Image style={styles.image} source={{ uri: imageUrl }} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.secondary,
    marginTop: 8
  },
  image: {
    width: '100%',
    height: 50,
  },
});
