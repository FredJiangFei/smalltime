import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
} from 'react-native';
import colors from '../config/colors';

export default function ListItem({ title, image, IconComponent, onPress }) {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.white,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },

  title: {
    fontWeight: '500',
  }
});
