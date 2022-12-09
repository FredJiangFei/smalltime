import React from 'react';
import { Button } from 'react-native';

export default function StatisticsScreen({ navigation }) {
  return <>
    <Button title='Ball' onPress={() => navigation.navigate('Ball')}/>
    <Button title='BallGesture' onPress={() => navigation.navigate('BallGesture')}/>
  </>;
}
