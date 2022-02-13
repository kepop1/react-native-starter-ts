import React from 'react'
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextStyle,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  KeyboardTypeOptions,
} from 'react-native'
import { Font } from '../../Font'
import { Core } from '../../Core'

type TextInputParams = {
  placeholder?: string
  onBlur: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void
  onChangeText: (text: string) => void
  value: string
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined
  keyboardType?: KeyboardTypeOptions
  autoFocus?: boolean
  styleOverride?: TextStyle
  secureTextEntry?: boolean
  autoCorrect?: boolean
}

export const TextInput = ({
  placeholder,
  onBlur,
  onChangeText,
  autoCapitalize,
  keyboardType,
  value,
  autoFocus,
  autoCorrect,
  secureTextEntry,
  styleOverride,
}: TextInputParams) => {
  return (
    <RNTextInput
      style={[styles.textInput, styleOverride]}
      placeholder={placeholder}
      onBlur={onBlur}
      onChangeText={onChangeText}
      autoCapitalize={autoCapitalize}
      keyboardType={keyboardType}
      value={value}
      autoFocus={autoFocus}
      autoCorrect={autoCorrect}
      secureTextEntry={secureTextEntry}
    />
  )
}

const styles = StyleSheet.create({
  textInput: {
    ...Font.sizes.subHeading,
    ...Font.family.openSansRegular,
    backgroundColor: 'white',
    paddingVertical: Core.unit,
    paddingHorizontal: Core.unit / 2,
    marginHorizontal: Core.unit * 2,
    marginBottom: Core.unit,
  },
})
