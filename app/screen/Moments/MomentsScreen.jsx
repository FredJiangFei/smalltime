import React, { useState } from 'react';
import { Button, Text } from 'react-native';

export default function MomentsScreen({ navigation, route }) {
  const [moments, setMoments] = useState([]);

  return (
    <>
      <Button
        title="Send a moment"
        onPress={() => navigation.navigate('SendMoment')}
      />
    </>
  );
}
