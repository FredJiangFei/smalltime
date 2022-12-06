import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import BottomTabNavigator from './app/navigator/BottomTabNavigator';
import * as Sentry from 'sentry-expo';

Sentry.init({
  dsn: 'https://8dba2a9aef96488e8ccde6c3894f960d@o4503904847724544.ingest.sentry.io/4504278435495936',
  // enableInExpoDevelopment: true,
  debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

export default function App() {
  Sentry.Native.captureException(new Error('App Run'));

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
