import React from 'react'
import { Add } from '@styled-icons/material-outlined'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render the button', () => {
    renderWithTheme(<Button>add note</Button>)

    expect(screen.getByRole('button', { name: /add note/i })).toBeInTheDocument
  })

  it('should render blue background by default', () => {
    renderWithTheme(<Button>add note</Button>)

    expect(screen.getByRole('button', { name: /add note/i })).toHaveStyle({
      background: '#03A9F4'
    })
  })

  it('should render white background when passed', () => {
    renderWithTheme(<Button background="white">add note</Button>)

    expect(screen.getByRole('button', { name: /add note/i })).toHaveStyle({
      background: '#FFFFFF'
    })
  })

  it('should render white color by default', () => {
    renderWithTheme(<Button>add note</Button>)

    expect(screen.getByRole('button', { name: /add note/i })).toHaveStyle({
      color: '#FFFFFF'
    })
  })

  it('should render blue color when passed', () => {
    renderWithTheme(<Button color="blue">add note</Button>)

    expect(screen.getByRole('button', { name: /add note/i })).toHaveStyle({
      color: '#03A9F4'
    })
  })

  it('should render an icon version', () => {
    renderWithTheme(<Button icon={<Add data-testid="icon" />}>add note</Button>)

    expect(screen.getByText(/add note/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
