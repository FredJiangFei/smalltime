import { useIsFocused } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Button, FlatList } from 'react-native';
import momentService from '../../api/momentService';
import Card from '../../components/Card';
import Screen from '../../components/Screen';
import ViewImage from './ViewImage';
import ViewImageGesture from './ViewImageGesture';

export default function MomentsScreen({ navigation, route }) {
  const [moments, setMoments] = useState([]);
  const [image, setImage] = useState();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (!isFocused) return;

    getMoments();
  }, [isFocused]);

  const getMoments = () => {
    const moments = momentService.getMoments();
    setMoments(moments);
  };

  return (
    <Screen>
      <Button
        title="Send a new moment"
        onPress={() => navigation.navigate('SendMoment')}
      />

      <FlatList
        data={moments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Card {...item} onPress={setImage} />}
      />

      <ViewImageGesture image={image} setImage={setImage} />
    </Screen>
  );
}
