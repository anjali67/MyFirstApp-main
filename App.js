import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/routes/NavigationStack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './src/redux/store';
import store from './src/redux/store';

/*const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'SFProDisplay-Medium',
          fontWeight: '500',
        },
      }}>
      <Drawer.Screen
        name="welcome"
        component={WelcomeScreen}
        options={{
          drawerLabel: 'Home',
          title: 'Home',
        }}
      />
      <Drawer.Screen
        name="Article"
        component={LoginForm}
        options={{title: 'My Article'}}
      />
    </Drawer.Navigator>
  );
}
*/
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationStack />
      </PersistGate>
    </Provider>
  );
}
