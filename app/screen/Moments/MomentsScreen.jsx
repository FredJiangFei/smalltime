import { useIsFocused } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Button, FlatList } from 'react-native';
import momentService from '../../api/momentService';
import Card from '../../components/Card';
import Screen from '../../components/Screen';

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
    setMoments(moments);
  };

  return (
    <Screen>
      <Button
        title="Send a moment"
        onPress={() => navigation.navigate('SendMoment')}
      />
      <FlatList
        data={moments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Card {...item} />}
      />
    </Screen>
  );
}
