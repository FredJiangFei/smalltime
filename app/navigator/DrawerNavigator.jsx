import React from 'react';
import { Text } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();
const Settings = () => <Text>Settings</Text>;

const DrawerContent = ({ navigation }) => {
  return (
      <DrawerContentScrollView>
        <DrawerItem label="Settings" onPress={() => navigation.navigate('Settings')} />
      </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        drawerType: 'front',
        swipeEnabled: false,
        headerShown: false
      }}
    >
      <Drawer.Screen name="BottomTab" component={BottomTabNavigator} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
