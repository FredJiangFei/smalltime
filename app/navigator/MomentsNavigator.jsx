import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable, Text } from 'react-native';
import MomentsScreen from '../screen/Moments/MomentsScreen';
import SendMomentScreen from '../screen/Moments/SendMomentScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

export default function MomentsNavigator({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Moments"
        component={MomentsScreen}
        // options={{
        //   headerRight: () => (
        //     <Pressable onPress={() => navigation.openDrawer()}>
        //       <MaterialCommunityIcons name='menu' size={24}/>
        //     </Pressable>
        //   ),
        // }}
      />
      <Stack.Screen name="SendMoment" component={SendMomentScreen} />
    </Stack.Navigator>
  );
}
