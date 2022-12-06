import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MomentsScreen from '../screen/Moments/MomentsScreen';
import SendMomentScreen from '../screen/Moments/SendMomentScreen';

const Stack = createNativeStackNavigator();

export default function MomentsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Moments" component={MomentsScreen} />
      <Stack.Screen name="SendMoment" component={SendMomentScreen} />
    </Stack.Navigator>
  );
}
