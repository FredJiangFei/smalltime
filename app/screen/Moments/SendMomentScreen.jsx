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
import useLocation from '../../hooks/useLocation';
import MapView, { Marker } from 'react-native-maps';

export default function SendMomentScreen({ navigation, route }) {
  const [text, setText] = useState('');
  const { openImagePickerAsync, openCameraAsync, image } = useImagePicker();
  const { location, setLocation } = useLocation();

  const handleSubmit = () => {
    momentService.createMoment({ desc: text, imageUrl: image.uri });
    navigation.goBack();
  };

  return (
    <ScrollView style={{ paddingLeft: 8, paddingRight: 8 }}>
      <Text>SendMoment</Text>
      <Button
        title="Logs"
        onPress={() => navigation.navigate('LogNavigator', { screen: 'Log' })}
      />

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

      <Text>latitude: {location?.latitude}</Text>
      <Text>longitude: {location?.longitude}</Text>
      <MapView
        style={{ alignSelf: 'stretch', height: 200 }}
        region={{
          latitude: location?.latitude,
          longitude: location?.longitude,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0121,
        }}
      >
        <Marker
          coordinate={{
            latitude: location?.latitude,
            longitude: location?.longitude,
          }}
        />
      </MapView>
      <Button title="Save" onPress={handleSubmit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
