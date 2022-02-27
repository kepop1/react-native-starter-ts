import React from 'react'
import { Button } from './Button'
import { render, fireEvent } from 'test-utils'

describe('Button component', () => {
  test('Renders correctly and can be pressed', () => {
    const fakeOnPress = jest.fn()
    const { getByText } = render(<Button onPress={fakeOnPress} label="Test" />)

    const renderedButton = getByText('Test')

    fireEvent.press(renderedButton)

    expect(renderedButton).toBeDefined()
    expect(fakeOnPress).toHaveBeenCalled()
  })
})
