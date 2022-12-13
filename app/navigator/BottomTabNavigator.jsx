import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogNavigator from './LogNavigator';
import MineNavigator from './MineNavigator';
import StatisticsNavigator from './StatisticsNavigator';
import TimeNavigator from './TimeNavigator';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MomentsNavigator from './MomentsNavigator';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="MomentsTab"
        component={MomentsNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="egg-easter"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TimeTab"
        component={TimeNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="clock-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="StatisticTab"
        component={StatisticsNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="chart-bar"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="LogTab"
        component={LogNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="file-document"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="MineTab"
        component={MineNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
