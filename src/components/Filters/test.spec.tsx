import React from 'react'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from 'utils/tests/helpers'

import Filters from '.'

import values from './initialValue'

describe('<Filters />', () => {
  it('should render the Filters correctly', () => {
    renderWithTheme(<Filters filters={values} />)

    const all = screen.getByText(/all/i)
    const home = screen.getByText(/home/i)
    const work = screen.getByText(/work/i)
    const personal = screen.getByText(/personal/i)

    expect(all).toBeInTheDocument()
    expect(all.parentElement).toHaveStyle({
      'background-color': '#03A9F4'
    })
    expect(home).toBeInTheDocument()
    expect(work).toBeInTheDocument()
    expect(personal).toBeInTheDocument()
  })

  it('should render the filter when selected', () => {
    renderWithTheme(<Filters filters={values} />)

    const all = screen.getByText(/all/i)
    const home = screen.getByText(/home/i)

    expect(all).toBeInTheDocument()
    expect(all.parentElement).toHaveStyle({
      'background-color': '#03A9F4'
    })

    userEvent.click(home)

    expect(all.parentElement).toHaveStyle({
      'background-color': 'transparent'
    })
    expect(home.parentElement).toHaveStyle({
      'background-color': '#FF9100'
    })
  })
})
