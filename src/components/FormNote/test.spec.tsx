import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import FormNote from '.'

describe('<FormNote />', () => {
  it('should render the Empty FormNote', () => {
    renderWithTheme(<FormNote />)

    expect(screen.getByPlaceholderText(/Add tittle.../i)).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText(/Add a description.../i)
    ).toBeInTheDocument()
    expect(screen.getByText(/Select Category/i)).toBeInTheDocument()
  })
})
