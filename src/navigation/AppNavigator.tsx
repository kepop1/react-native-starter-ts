import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Main } from '../loggedIn/main/Main'

import { ROUTE_MAIN } from './constants'

export type AppStackParamList = {
  [ROUTE_MAIN]: undefined
}

const Stack = createNativeStackNavigator<AppStackParamList>()

export const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={ROUTE_MAIN}
      component={Main}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
)
