import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import DeleteIcon from '.'

describe('<Checkbox />', () => {
  it('should render the checkbox', () => {
    renderWithTheme(<DeleteIcon />)

    expect(screen.getByLabelText(/Delete Note/i)).toBeInTheDocument()
  })
})
