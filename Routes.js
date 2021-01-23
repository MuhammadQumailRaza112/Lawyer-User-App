import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './Screens/SignIn'

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Signin" component={SignIn} options={{title:"Login"}}  />
        </Stack.Navigator>
        </NavigationContainer>
    );
  };
  export default Routes;