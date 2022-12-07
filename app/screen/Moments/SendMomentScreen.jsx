import React, { useState } from 'react';
import { Button, Text, TextInput, StyleSheet, View } from 'react-native';
import momentService from '../../api/momentService';
import Screen from '../../components/Screen';
import colors from '../../config/colors';

export default function SendMomentScreen({ navigation, route }) {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    momentService.createMoment({ desc: text });
    navigation.goBack();
  };

  return (
    <Screen>
      <Text>SendMoment</Text>
      <Button
        title="Logs"
        onPress={() => navigation.navigate('LogNavigator', { screen: 'Log' })}
      />

      <View style={styles.textInputContainer}>
        <Text style={{ width: 50 }}>Text:</Text>
        <TextInput onChangeText={setText} style={styles.textInput} />
      </View>

      <Button title="Save" onPress={handleSubmit} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    backgroundColor: colors.light,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
  },
});
