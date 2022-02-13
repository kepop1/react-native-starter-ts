import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from '../loggedOut/login/Login'
import { Register } from '../loggedOut/register/Register'
import { Welcome } from '../loggedOut/welcome/Welcome'

import { ROUTE_WELCOME, ROUTE_REGISTER, ROUTE_LOGIN } from './constants'

export type AuthStackParamList = {
  [ROUTE_WELCOME]: undefined
  [ROUTE_REGISTER]: undefined
  [ROUTE_LOGIN]: { email: string } | undefined
}

const Stack = createNativeStackNavigator<AuthStackParamList>()

export const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={ROUTE_WELCOME}
      component={Welcome}
      options={{ headerShown: false }}
    />

    <Stack.Group
      screenOptions={{
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerTitle: '',
      }}>
      <Stack.Screen name={ROUTE_REGISTER} component={Register} />
      <Stack.Screen name={ROUTE_LOGIN} component={Login} />
    </Stack.Group>
  </Stack.Navigator>
)
