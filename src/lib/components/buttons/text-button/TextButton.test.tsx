import React from 'react'
import { TextButton } from './TextButton'
import { render, fireEvent } from 'test-utils'

describe('TextButton component', () => {
  test('Renders correctly and can be pressed', () => {
    const fakeOnPress = jest.fn()
    const { getByText } = render(
      <TextButton onPress={fakeOnPress} label="Test" />,
    )

    const renderedButton = getByText('Test')

    fireEvent.press(renderedButton)

    expect(renderedButton).toBeDefined()
    expect(fakeOnPress).toHaveBeenCalled()
  })
})
