import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Alert } from 'react-native';
import DrawerNavigator from './app/navigator/DrawerNavigator';
import { AppState } from 'react-native';
import * as Updates from 'expo-updates';

export default function App() {
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (appState) => {
      if (appState === 'active') {
        checkUpdate();
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const checkUpdate = async () => {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        Alert.alert(
          'Apply update',
          'Hey there! We got an update for you 🥳🎉.',
          [
            {
              text: 'Cancel',
            },
            { text: 'OK', onPress: () => Updates.reloadAsync() },
          ]
        );
      }
    } catch (e) {
      // handle or log error
    }
  };

  return (
    <NavigationContainer>
      <DrawerNavigator></DrawerNavigator>
    </NavigationContainer>
  );
}