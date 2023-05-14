import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewContactScreen from '../screens/client/Contact/NewContact';
import ContactListScreen from '../screens/client/Contact/ContactList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactDetail from '../screens/client/Contact/ContactDetail';
import { getUser } from '../store/auth/selectors';
import AdminScreen from '../screens/client/Admin/Admin';
import CreateUserScreen from '../screens/client/Admin/CreateUser';
import ProfileScreen from '../screens/client/Profile/Profile';
// @ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const user = getUser();
    return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'New Contact') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            }
            else if (route.name === 'Admin') {
              iconName = focused ? 'lock-closed' : 'lock-closed-outline';
            }
            else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
>
          <Tab.Screen name="Home" component={ContactStack} options={{headerShown:false}} />
          <Tab.Screen name="New Contact" component={NewContactScreen}  options={{headerShown:false}}/>
          {user?.role === "admin" && <Tab.Screen name="Admin" component={AdminStack} options={{headerShown:false}} />}
          <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}} />
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

  const Adminstack = createNativeStackNavigator();

  export const AdminStack = () => {
      return (
          <Adminstack.Navigator>
            <Adminstack.Screen
              name="Admin"
              component={AdminScreen}
              options={{headerShown: false}}
            />
            <Adminstack.Screen name="Create User" component={CreateUserScreen}  options={
              {headerStyle:{backgroundColor:'#003f5c'},headerTintColor:"white",headerTitle:"Create User"}
            } />
            <Adminstack.Screen name="ContactList" component={ContactListScreen} options={
              
              {headerStyle:{backgroundColor:'#003f5c'},headerTintColor:"white",headerTitle:"Contact List"}
            } />
            <Adminstack.Screen name="ContactDetail" component={ContactDetail} />

          </Adminstack.Navigator>
      );
    };
