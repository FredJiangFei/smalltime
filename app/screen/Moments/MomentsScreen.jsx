import { useIsFocused } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';
import momentService from '../../api/momentService';

export default function MomentsScreen({ navigation, route }) {
  const [moments, setMoments] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (!isFocused) return;

    getMoments();
  }, [isFocused]);

  const getMoments = () => {
    const moments = momentService.getMoments();
    console.log(moments);
  };

  return (
    <>
      <Button
        title="Send a moment"
        onPress={() => navigation.navigate('SendMoment')}
      />
    </>
  );
}
