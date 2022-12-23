import React from 'react';
import { Button, Pressable, Text } from 'react-native';
import { useNotifications } from '../../hooks/useNotifications';
import * as Clipboard from 'expo-clipboard';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TimeScreen() {
  const { token, sendLocalNotification } = useNotifications();

  const handleCopyStatRecorderCode = async () => {
    await Clipboard.setStringAsync(token);
    alert('copy token');
  };

  return (
    <>
      <Text>Time 123</Text>
      <Text>token: {token}</Text>
      <Pressable onPress={handleCopyStatRecorderCode}>
        <MaterialCommunityIcons name="content-copy" size={28} />
      </Pressable>
      <Button
        title="Local Notification"
        onPress={() => sendLocalNotification()}
      />
    </>
  );
}
