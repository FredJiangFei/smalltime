import React from 'react';
import { Button, Text } from 'react-native';

export default function StatisticsScreen({ navigation }) {
  return <>
    <Button title='Animated' onPress={() => navigation.navigate('Animated')}/>
  </>;
}
