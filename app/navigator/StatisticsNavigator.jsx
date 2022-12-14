import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StatisticsScreen from '../screen/Statistics/StatisticsScreen';

const Stack = createNativeStackNavigator();

export default function StatisticsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Statistics" component={StatisticsScreen} />
    </Stack.Navigator>
  );
}
