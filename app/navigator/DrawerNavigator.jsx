import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import SettingsScreen from '../screen/SettingsScreen';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const DrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  const state = useNavigationState((state) => state);
  const isMainScreen = !state || state.routeNames[state.index] === 'BottomTab';
  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        drawerPosition: 'right',
        drawerType: 'front',
        swipeEnabled: false,
        headerShown: !isMainScreen,
        headerLeft: () => (
          <Pressable onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              name="chevron-left"
              size={32}
              style={{
                marginLeft: 8,
              }}
            />
          </Pressable>
        ),
      }}
    >
      <Drawer.Screen name="BottomTab" component={BottomTabNavigator} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
