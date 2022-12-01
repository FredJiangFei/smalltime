import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProjectScreen from '../screen/Project/Project';

const Stack = createNativeStackNavigator();

export default function ProjectNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Project" component={ProjectScreen} />
    </Stack.Navigator>
  );
}
