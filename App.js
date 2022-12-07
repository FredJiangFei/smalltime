import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Alert, StyleSheet, View } from 'react-native';
import BottomTabNavigator from './app/navigator/BottomTabNavigator';
import * as Sentry from 'sentry-expo';
import { AppState } from 'react-native';
import * as Updates from 'expo-updates';

Sentry.init({
  dsn: 'https://8dba2a9aef96488e8ccde6c3894f960d@o4503904847724544.ingest.sentry.io/4504278435495936',
  enableInExpoDevelopment: true,
  debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

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
      <BottomTabNavigator></BottomTabNavigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
