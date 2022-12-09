import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnimatedScreen from '../screen/Statistics/AnimatedScreen';
import StatisticsScreen from '../screen/Statistics/StatisticsScreen';

const Stack = createNativeStackNavigator();

export default function StatisticsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Statistics" component={StatisticsScreen} />
      <Stack.Screen name="Animated" component={AnimatedScreen} />
    </Stack.Navigator>
  );
}
