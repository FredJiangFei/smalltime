import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

const useImagePicker = () => {
    const [image, setImage] = useState({ uri: '' });

    const openImagePickerAsync = async () => {
        let permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permission.granted === false) {
            alert('Permission to access media is required!');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 4],
        });
        if (result.canceled === true) {
            return;
        }

        setImage(result);
    };

    const openCameraAsync = async () => {
        let permission = await ImagePicker.requestCameraPermissionsAsync();

        if (permission.granted === false) {
            alert('Permission to access camera is required!');
            return;
        }

        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 4],
        });
        if (result.canceled) return;

        setImage(result);
    };

    return { openImagePickerAsync, openCameraAsync, image };
};

export default useImagePicker;
