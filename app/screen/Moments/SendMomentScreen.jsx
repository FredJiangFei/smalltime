import React from 'react';
import { Text, StyleSheet, Image, ScrollView } from 'react-native';
import momentService from '../../api/momentService';
import useImagePicker from '../../hooks/useImagePicker';
import Icon from '../../components/Icon';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { Input, FormControl, Button, Pressable } from 'native-base';

const validationSchema = Yup.object().shape({
  desc: Yup.string().required().label('Text'),
});

const initValue = {
  desc: '',
};

export default function SendMomentScreen({ navigation, route }) {
  const { openImagePickerAsync, openCameraAsync, image } = useImagePicker();

  // const { handleChange, handleSubmit, errors, setFieldTouched } = useFormik({
  //   initialValues: initValue,
  //   validationSchema: validationSchema,
  //   onSubmit: (values) => handleSendMoment(values),
  // });

  const handleSendMoment = (data) => {
    momentService.createMoment({ ...data, imageUrl: image.uri });
    navigation.goBack();
  };

  return (
    <ScrollView style={{ paddingLeft: 8, paddingRight: 8 }}>
      <Formik
        initialValues={initValue}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSendMoment(values)}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched }) => (
          <>
            <FormControl>
              <FormControl.Label>Message</FormControl.Label>
              <Input
                name="desc"
                placeholder="Say something...."
                onBlur={() => setFieldTouched('desc')}
                onChangeText={handleChange('desc')}
              />
            </FormControl>

            <Text style={{ color: 'red' }}>{errors['desc']}</Text>

            {image.uri && (
              <Image style={styles.thumbnail} source={{ uri: image.uri }} />
            )}
            <Pressable onPress={openCameraAsync}>
              <Icon name="camera" />
            </Pressable>
            {/* <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Pressable onPress={openCameraAsync}>
                <Icon name="camera" />
              </Pressable>
              <Pressable onPress={openImagePickerAsync}>
                <Icon name="file-image" />
              </Pressable>
            </View> */}
            <Button onPress={handleSubmit}>Save</Button>
          </>
        )}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  thumbnail: {
    marginTop: 16,
    height: 150,
    resizeMode: 'contain',
  },
});
