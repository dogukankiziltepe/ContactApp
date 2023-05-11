// authentication screen navigator react native
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/Login';
import RegisterScreen from '../screens/auth/Register';

const Stack = createNativeStackNavigator();

export const LoginStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };