import React from 'react'
import { getIsAuthenticated } from '../store/auth/selectors'
import TabNavigator from './clientNavigation'
import { LoginStack } from './authNavigation'

export default function RootNavigation() {
const isAuthenticated = getIsAuthenticated();
return isAuthenticated ? <TabNavigator /> : <LoginStack />;
}
