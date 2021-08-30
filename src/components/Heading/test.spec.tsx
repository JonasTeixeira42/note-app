import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Heading>Note App</Heading>)

    const heading = screen.getByRole('heading', { name: /note app/i })

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveStyle({ color: '#9E9E9E' })
  })

  it('should render the heading with normal size by default', () => {
    renderWithTheme(<Heading>Note App</Heading>)

    const heading = screen.getByRole('heading', { name: /note app/i })

    expect(heading).toHaveStyle({ 'font-size': '2.0rem' })
  })

  it('should render the heading with large size', () => {
    renderWithTheme(<Heading size="large">Note App</Heading>)

    const heading = screen.getByRole('heading', { name: /note app/i })

    expect(heading).toHaveStyle({ 'font-size': '2.4rem' })
  })
})
