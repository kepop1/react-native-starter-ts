import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import { ROUTE_APP, ROUTE_AUTH } from './constants'
import { useAuth } from '../stores/auth'
import { AuthNavigator } from './AuthNavigator'
import { AppNavigator } from './AppNavigator'

const Stack = createNativeStackNavigator()

const RootNavigator = () => {
  const { authToken } = useAuth()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {true ? (
          <Stack.Screen name={ROUTE_APP} component={AppNavigator} />
        ) : (
          <Stack.Screen name={ROUTE_AUTH} component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
