import React from 'react';
import { Button, Text } from 'react-native';
import { useNotifications } from '../../hooks/useNotifications';

export default function TimeScreen() {
  const { token, sendLocalNotification } = useNotifications();

  return (
    <>
      <Text>Time 1234</Text>
      <Text>token: {token}</Text>
      <Button title="Local Notification" onPress={() => sendLocalNotification()} />
    </>
  );
}
