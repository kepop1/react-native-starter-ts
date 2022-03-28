import React from 'react'
import { TextInputProps, View } from 'react-native'
import { fireEvent } from '@testing-library/react-native'
import { render } from 'test-utils'
import { TextInput } from './TextInput'

describe('TextInput component', () => {
  const fakeOnChangeText = jest.fn()
  const fakeOnBlur = jest.fn()
  const fakeValue = ''

  test('Renders correctly with placeholder', () => {
    const { toJSON } = render(
      <TextInput
        onChangeText={fakeOnChangeText}
        onBlur={fakeOnBlur}
        value={fakeValue}
        placeholder="Placeholder"
      />,
    )

    const textInput = toJSON() as { props: TextInputProps }
    const props = textInput.props

    expect(textInput).toBeDefined()
    expect(props.placeholder).toBe('Placeholder')
  })
  test('Typing into the input changes the value', () => {
    const { getByPlaceholderText } = render(
      <TextInput
        onChangeText={fakeOnChangeText}
        onBlur={fakeOnBlur}
        value={fakeValue}
        placeholder="Placeholder"
      />,
    )

    const textInput = getByPlaceholderText('Placeholder')

    fireEvent(textInput, 'onChangeText', 'Hello')

    expect(textInput).toBeDefined()
    expect(fakeOnChangeText).toBeCalledWith('Hello')
  })
  test('Clicking off the input triggers onBlur', () => {
    const { getByPlaceholderText } = render(
      <TextInput
        onChangeText={fakeOnChangeText}
        onBlur={fakeOnBlur}
        value={fakeValue}
        placeholder="Placeholder"
      />,
    )

    const textInput = getByPlaceholderText('Placeholder')

    fireEvent(textInput, 'onChangeText', 'Hello')
    fireEvent(textInput, 'blur')

    expect(textInput).toBeDefined()
    expect(fakeOnBlur).toBeCalled()
  })
})
