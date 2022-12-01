import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogScreen from '../screen/Log/Log';

const Stack = createNativeStackNavigator();

export default function LogNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Log" component={LogScreen} />
    </Stack.Navigator>
  );
}
