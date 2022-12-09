import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BallGestureScreen from '../screen/Statistics/BallGestureScreen';
import BallScreen from '../screen/Statistics/BallScreen';
import StatisticsScreen from '../screen/Statistics/StatisticsScreen';

const Stack = createNativeStackNavigator();

export default function StatisticsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Statistics" component={StatisticsScreen} />
      <Stack.Screen name="Ball" component={BallScreen} />
      <Stack.Screen name="BallGesture" component={BallGestureScreen} />
    </Stack.Navigator>
  );
}
