import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native'
import { Core } from '../../../Core'
import { Font } from '../../../Font'

type ButtonProps = {
  onPress: () => void
  label: string
  styleOverride?: ViewStyle
  labelStyleOverride?: TextStyle
}

export const Button = ({
  onPress,
  label,
  styleOverride,
  labelStyleOverride,
}: ButtonProps) => (
  <TouchableOpacity style={[styles.button, styleOverride]} onPress={onPress}>
    <Text style={[styles.buttonText, labelStyleOverride]}>{`${label}`}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  buttonText: {
    ...Font.sizes.button,
    ...Font.family.openSansBold,
    color: 'white',
  },
  button: {
    backgroundColor: 'lime',
    paddingVertical: Core.unit / 2,
    paddingHorizontal: Core.unit * 4,
    alignSelf: 'center',
    borderRadius: Core.unit * 2,
    marginTop: Core.unit * 2,
  },
})
