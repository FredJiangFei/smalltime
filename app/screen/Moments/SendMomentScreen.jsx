import React from 'react';
import { Button, Text } from 'react-native';

export default function SendMomentScreen({ navigation, route }) {
  return (
    <>
      <Text>SendMoment</Text>
      <Button
        title="Logs"
        onPress={() => navigation.navigate('LogNavigator', { screen: 'Log' })}
      />
    </>
  );
}
