import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TimeScreen from '../screen/Time/TimeScreen';

const Stack = createNativeStackNavigator();

export default function TimeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Time123" component={TimeScreen} />
    </Stack.Navigator>
  );
}
