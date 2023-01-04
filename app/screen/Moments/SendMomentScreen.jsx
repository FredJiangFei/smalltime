import React, { useState } from 'react';
import {
  Button,
  Text,
  TextInput,
  StyleSheet,
  View,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import momentService from '../../api/momentService';
import colors from '../../config/colors';
import useImagePicker from '../../hooks/useImagePicker';
import Icon from '../../components/Icon';

export default function SendMomentScreen({ navigation, route }) {
  const [text, setText] = useState('');
  const { openImagePickerAsync, openCameraAsync, image } = useImagePicker();

  const handleSubmit = () => {
    momentService.createMoment({ desc: text, imageUrl: image.uri });
    navigation.goBack();
  };

  return (
    <ScrollView style={{ paddingLeft: 8, paddingRight: 8 }}>
      <View style={styles.textInputContainer}>
        <Text style={{ width: 50 }}>Text:</Text>
        <TextInput onChangeText={setText} style={styles.textInput} />
      </View>

      {image.uri && (
        <Image style={styles.thumbnail} source={{ uri: image.uri }} />
      )}

      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Pressable onPress={openCameraAsync}>
          <Icon name="camera" />
        </Pressable>
        <Pressable onPress={openImagePickerAsync}>
          <Icon name="file-image" />
        </Pressable>
      </View>
      <Button title="Save" onPress={handleSubmit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8
  },
  textInput: {
    height: 40,
    backgroundColor: colors.light,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
  },
  thumbnail: {
    marginTop: 16,
    height: 150,
    resizeMode: 'contain',
  },
});
