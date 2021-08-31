import React from 'react'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from 'utils/tests/helpers'

import Textarea from '.'

describe('<Textarea />', () => {
  it('should render with placeholder', () => {
    renderWithTheme(<Textarea placeholder="description" />)

    expect(screen.getByPlaceholderText('description')).toBeInTheDocument()
  })

  it('should render error message', () => {
    renderWithTheme(<Textarea placeholder="add note" error="Error message" />)

    expect(screen.getByText('Error message')).toBeInTheDocument()
  })

  it('should changes its value when typing', async () => {
    const onInput = jest.fn()
    renderWithTheme(<Textarea placeholder="add note" onInputChange={onInput} />)

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
  })
})
