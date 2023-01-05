import React from 'react';
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
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';

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
            <View style={styles.textInputContainer}>
              <Text style={{ width: 50 }}>Text:</Text>
              <TextInput
                name="desc"
                placeholder="Say something...."
                onBlur={() => setFieldTouched('desc')}
                onChangeText={handleChange('desc')}
                style={styles.textInput}
              />
            </View>
            <Text style={{ color: 'red' }}>{errors['desc']}</Text>

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
          </>
        )}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
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
