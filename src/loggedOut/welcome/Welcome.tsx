import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { AuthStackParamList } from '../../navigation/AuthNavigator'
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ROUTE_LOGIN, ROUTE_REGISTER } from '../../navigation/constants'
import { Button, TextButton, Core, Font } from '../../lib'

type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Welcome'
>

export const Welcome = () => {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation<WelcomeScreenNavigationProp>()

  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
      <Text style={styles.header}>React-Native-Starter App</Text>
      <Text style={styles.text}>
        This app will give you some different things out the box. It might seem
        a little barebones or OTT but give it a while and even make it your own!
      </Text>

      <Button
        onPress={() => navigation.navigate(ROUTE_REGISTER)}
        label="Register"
      />
      <TextButton
        onPress={() => navigation.navigate(ROUTE_LOGIN)}
        label="Already have an account? Login!"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Core.unit,
  },
  header: {
    ...Font.sizes.heading,
    ...Font.family.openSansBold,
    textAlign: 'center',
    letterSpacing: 1,
    marginVertical: Core.unit * 2,
  },
  text: {
    paddingVertical: Core.unit * 3,
    textAlign: 'center',
    ...Font.sizes.body,
    ...Font.family.openSansRegular,
    lineHeight: 22,
  },
})
