/* eslint-disable @typescript-eslint/ban-ts-comment */ // This file only - :crossed_fingers:
import 'react-native-gesture-handler' //Required for React-Navigation Stack
import React from 'react'
import { Text, StatusBar, ScrollView } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import RootNavigator from './navigation/RootNavigator'
import { AuthProvider } from './stores/auth'

//This disables any of the Text from scaling according to the OS settings for text.
//This is not a good idea long term and should be addressed!

//@ts-ignore
Text.defaultProps = {
  //@ts-ignore
  ...(Text.defaultProps || {}),
  allowFontScaling: false,
}

// Most designs don't make use of a vertical scroll bar, in an app it's more intuitive than on web.
// Can be overridden as and when.

//@ts-ignore
ScrollView.defaultProps = {
  //@ts-ignore
  ...(ScrollView.defaultProps || {}),
  showsVerticalScrollIndicator: false,
}

export const App = () => (
  <SafeAreaProvider>
    <StatusBar barStyle="dark-content" />

    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  </SafeAreaProvider>
)
