import React from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Welcome from '../screens/Welcome';
import Register from '../screens/Register';
import Home from '../screens/Home';
import RegisterSuccess from '../screens/RegisterSuccess';
import RouteScreen from '../screens/RouteScreen';
import StudentEntryScreen from '../screens/StudentEntryScreen';
import StudentShuffleScreen from '../screens/StudentShuffleScreen';
import VanShuffleScreen from '../screens/VanShuffleScreen';
import EmergencyScreen from '../screens/EmergencyScreen';
import StudentCard from '../screens/StudentCard';
import StudentDetailsScreen from '../screens/StudentDetailsScreen';
import Calendar from '../screens/Calendar';
import PickupMapScreen from '../screens/PickupMapScreen';

//import DrawerNavigator from './DrawerNavigator';
const Stack = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef();

const options = { headerShown: false, animation: 'none' };

const NavigationStack = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator initialRouteName='PickupMapScreen'  >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Splash" component={Splash} options={options} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterSuccess"
        component={RegisterSuccess}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Route"
        component={RouteScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StudentEntry"
        component={StudentEntryScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="StudentShuffle"
        component={StudentShuffleScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VanShuffle"
        component={VanShuffleScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Emergency"
        component={EmergencyScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StudentCard"
        component={StudentCard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StudentDetails"
        component={StudentDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={options}
      /> */}
      <Stack.Screen
        name="Calendar"
        component={Calendar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PickupMapScreen"
        component={PickupMapScreen}
        options={{ headerShown: false }}
      />



    </Stack.Navigator>
  </NavigationContainer>
);

export default NavigationStack;
