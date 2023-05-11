import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewContactScreen from '../screens/client/Contact/NewContact';
import ContactListScreen from '../screens/client/Contact/ContactList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactDetail from '../screens/client/Contact/ContactDetail';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={ContactStack} options={{headerShown:false}} />
          <Tab.Screen name="New Contact" component={NewContactScreen}  options={{headerShown:false}}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
}

const Stack = createNativeStackNavigator();

export const ContactStack = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen
            name="Contact List"
            component={ContactListScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Contact Detail" component={ContactDetail} />
        </Stack.Navigator>
    );
  };