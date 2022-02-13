import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native'
import { Font } from '../../Font'
import { Core } from '../../Core'

type TextButtonProps = {
  onPress: () => void
  label: string
  styleOverride?: ViewStyle
  labelStyleOverride?: TextStyle
}

export const TextButton = ({
  onPress,
  label,
  styleOverride,
}: TextButtonProps) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[styles.textButton, styleOverride]}>{`${label}`}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  textButton: {
    ...Font.sizes.body,
    ...Font.family.openSansBold,
    color: 'lime',
    paddingVertical: Core.unit / 2,
    paddingHorizontal: Core.unit * 4,
    alignSelf: 'center',
    marginTop: Core.unit,
    textAlign: 'center',
  },
})
