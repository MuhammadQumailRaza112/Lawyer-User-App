import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './Screens/SignIn'
import SignUp from './Screens/SignUp';
import Home from './Screens/Home'

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName='sigin'>
          <Stack.Screen name="signin" component={SignIn} options={{title:"Login", headerShown:false}}  />
          <Stack.Screen name="home" component={Home} options={{title:"home", headerShown:false}}  />
        </Stack.Navigator>
        </NavigationContainer>
    );
  };
  export default Routes;