import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Core, Font } from '../../lib'
import { useAuth } from '../../stores/auth'

export const Main = () => {
  const insets = useSafeAreaInsets()
  const { authToken } = useAuth()

  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
      <View style={styles.content}>
        <Text style={styles.text}>
          This is the main page! Do what you will with this page going forwards!
        </Text>
        <Text style={styles.text}>
          Who knows maybe this will be a fancy menu or dashboard someday! {'\n'}
        </Text>
        <Text style={styles.italicText}>
          User Object: {JSON.stringify(authToken, null, 2)}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    alignContent: 'center',
    justifyContent: 'center',
    margin: Core.unit * 4,
    paddingBottom: Core.unit,
    paddingHorizontal: Core.unit,
    backgroundColor: Core.color.cyberGrape,
    borderRadius: Core.unit,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: Core.unit / 1.5,
    shadowOpacity: 0.2,
    elevation: 5,
  },
  text: {
    ...Font.sizes.subHeading,
    ...Font.family.openSansBold,
    marginTop: Core.unit,
    textAlign: 'center',
    color: 'white',
  },
  italicText: {
    ...Font.sizes.body,
    ...Font.family.openSansItalic,
    marginTop: Core.unit,
    textAlign: 'center',
    color: Core.color.goldCrayola,
  },
})
