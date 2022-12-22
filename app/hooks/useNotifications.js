import { useEffect, useRef, useState } from 'react';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { useNavigation } from '@react-navigation/native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export const useNotifications = () => {
  const [token, setToken] = useState('');
  const [notification, setNotification] = useState(false);
  const listener = useRef();
  const resListener = useRef();
  var navigation = useNavigation();

  useEffect(() => {
    registerTokenAsync().then((token) => {
      console.log(token);
      setToken(token);
    });

    // 监听notification
    listener.current = Notifications.addNotificationReceivedListener((n) =>
      console.log(n)
    );

    // 点击notification，做什么
    resListener.current = Notifications.addNotificationResponseReceivedListener(
      (res) => {
        navigation.navigate('MineTab', {
          screen: 'Mine',
        });
      }
    );

    return () => {
      Notifications.removeNotificationSubscription(listener.current);
      Notifications.removeNotificationSubscription(resListener.current);
    };
  }, []);

  const registerTokenAsync = async () => {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }

      token = (await Notifications.getExpoPushTokenAsync()).data;
    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    return token;
  };

  const sendLocalNotification = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Local notification',
        body: 'A test local notification',
      },
      trigger: null,
    });
  };

  return { sendLocalNotification, token, notification };
};
