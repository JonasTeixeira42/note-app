import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import FilterItem from '.'

describe('<FilterItem />', () => {
  it('should render with the blue background', () => {
    renderWithTheme(<FilterItem label="all" background="blue" active={true} />)

    expect(screen.getByText(/all/i)).toBeInTheDocument()
    expect(screen.getByText(/all/i).parentElement).toHaveStyle({
      'background-color': '#03A9F4'
    })
  })

  it('should render with the blue background', () => {
    renderWithTheme(<FilterItem label="all" background="blue" active={true} />)

    expect(screen.getByText(/all/i)).toBeInTheDocument()
    expect(screen.getByText(/all/i).parentElement).toHaveStyle({
      'background-color': '#03A9F4'
    })
  })

  it('should render with the orange background', () => {
    renderWithTheme(
      <FilterItem label="all" background="orange" active={true} />
    )

    expect(screen.getByText(/all/i)).toBeInTheDocument()
    expect(screen.getByText(/all/i).parentElement).toHaveStyle({
      'background-color': '#FF9100'
    })
  })

  it('should render with the purple background', () => {
    renderWithTheme(
      <FilterItem label="all" background="purple" active={true} />
    )

    expect(screen.getByText(/all/i)).toBeInTheDocument()
    expect(screen.getByText(/all/i).parentElement).toHaveStyle({
      'background-color': '#5C6BC0'
    })
  })

  it('should render with the green background', () => {
    renderWithTheme(<FilterItem label="all" background="green" active={true} />)

    expect(screen.getByText(/all/i)).toBeInTheDocument()
    expect(screen.getByText(/all/i).parentElement).toHaveStyle({
      'background-color': '#66BB6A'
    })
  })

  it('should render transparent background when active is false', () => {
    renderWithTheme(
      <FilterItem label="all" background="green" active={false} />
    )

    expect(screen.getByText(/all/i)).toBeInTheDocument()
    expect(screen.getByText(/all/i).parentElement).toHaveStyle({
      'background-color': 'transparent'
    })
  })
})
