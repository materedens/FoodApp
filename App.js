import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//imported screen
import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/DetailsScreen';
import SettingsScreen from './Screens/SettingsScreen';
import ProfilesScreen from './Screens/ProfilesScreen';
import OnboardingScreen from './Screens/OnboardingScreen';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

// const home = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Onboarding" component={OnboardingScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#FF10F0' barStyle='light-content' />
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
        inactiveColor='#000'
        barStyle={{ backgroundColor: '#FF10F0', paddingBottom: 2 }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={15} />
            ),
          }}
        />
        <Tab.Screen
          name="Detail"
          component={DetailsScreen}
          options={{
            tabBarLabel: 'Details',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={15} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfilesScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={15} />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="update" color={color} size={15} />
            ),
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;


