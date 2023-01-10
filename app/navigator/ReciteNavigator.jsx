import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReciteScreen from '../screen/Recite/ReciteScreen';

const Stack = createNativeStackNavigator();

export default function ReciteNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Recite" component={ReciteScreen} />
    </Stack.Navigator>
  );
}
