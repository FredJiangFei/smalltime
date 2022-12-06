import React from 'react';
import { Button, Text } from 'react-native';
import * as Sentry from 'sentry-expo';

export default function TimeScreen() {
  const throwError = () => {
    Sentry.Native.captureException(new Error('This is small time error'));
    alert('capture sentry error');
  };

  return (
    <>
      <Text>Time 1234</Text>
      <Button title="Throw Sentry Error" onPress={throwError} />
    </>
  );
}
