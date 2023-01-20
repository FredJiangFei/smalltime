import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MessageScreen from '../screen/Message/MessageScreen';

const Stack = createNativeStackNavigator();

export default function MessageNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Message" component={MessageScreen} />
    </Stack.Navigator>
  );
}
