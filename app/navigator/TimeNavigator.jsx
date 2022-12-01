import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TimeScreen from '../screen/Time/Time';

const Stack = createNativeStackNavigator();

export default function TimeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Time" component={TimeScreen} />
    </Stack.Navigator>
  );
}
