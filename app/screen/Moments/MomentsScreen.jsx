import { useIsFocused } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Button, FlatList, Image, Modal, StyleSheet } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import momentService from '../../api/momentService';
import Card from '../../components/Card';
import Screen from '../../components/Screen';

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
        title="Send a moment"
        onPress={() => navigation.navigate('SendMoment')}
      />
      <FlatList
        data={moments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Card {...item} onPress={setImage} />}
      />

      <Modal visible={!!image}>
        <Pressable style={[styles.container]} onPress={() => setImage(null)}>
          <Image
            style={{ height: 300, width: '100%' }}
            resizeMode="contain"
            source={{ uri: image }}
          />
        </Pressable>
      </Modal>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    overflow: 'hidden',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  }
});
