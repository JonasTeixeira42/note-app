import React from 'react'
import { screen, waitFor } from '@testing-library/react'
import { Email } from '@styled-icons/material-outlined'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from 'utils/tests/helpers'

import TextInput from '.'

describe('<TextInput />', () => {
  it('should render the TextInput', () => {
    renderWithTheme(<TextInput data-testid="input" />)

    expect(screen.getByTestId(/input/i)).toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    renderWithTheme(<TextInput placeholder="add note" />)

    expect(screen.getByPlaceholderText('add note')).toBeInTheDocument()
  })

  it('should render with icon', () => {
    renderWithTheme(<TextInput icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render search type', () => {
    renderWithTheme(<TextInput placeholder="add note" isInputSearch />)

    expect(screen.getByPlaceholderText('add note').parentElement).toHaveStyle({
      'background-color': '#FFFFFF',
      'border-color': '#FFFFFF',
      'box-shadow': '0 0.3rem 0.6rem #00000029'
    })
  })

  it('should render error message', () => {
    renderWithTheme(<TextInput placeholder="add note" error="Error message" />)

    expect(screen.getByText('Error message')).toBeInTheDocument()
  })

  it('should changes its value when typing', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextInput placeholder="add note" onInputChange={onInput} />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
  })
})
