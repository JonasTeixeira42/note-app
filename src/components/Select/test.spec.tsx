import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Select from '.'

const options = [
  { name: 'Home', value: 'home' },
  { name: 'Work', value: 'work' },
  { name: 'Personal', value: 'personal' }
]

describe('<Select />', () => {
  it('should render the Select', () => {
    renderWithTheme(<Select options={options} />)

    expect(screen.getByText(/home/i)).toBeInTheDocument()
    expect(screen.getByText(/work/i)).toBeInTheDocument()
    expect(screen.getByText(/personal/i)).toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    renderWithTheme(<Select options={options} placeholder="Select Category" />)

    expect(screen.getByText(/Select Category/i)).toBeInTheDocument()
  })

  it('should render error message', () => {
    renderWithTheme(
      <Select
        options={options}
        placeholder="Select Category"
        error="Error message"
      />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()
  })
})
