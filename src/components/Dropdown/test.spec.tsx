/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Dropdown from '.'

describe('<Dropdown />', () => {
  it('should render the Dropdown', () => {
    renderWithTheme(<Dropdown />)

    expect(screen.getByLabelText(/Delete Note/i)).toBeInTheDocument()
  })

  it('should handle open/close dropdown', () => {
    renderWithTheme(<Dropdown />)

    const content =
      screen.getByText(/Delete Note?/i).parentElement?.parentElement

    expect(content).toHaveStyle({ opacity: 0 })
    expect(content?.getAttribute('aria-hidden')).toBe('true')

    userEvent.click(screen.getByLabelText(/delete note/))

    expect(content).toHaveStyle({ opacity: 1 })
    expect(content?.getAttribute('aria-hidden')).toBe('false')
  })

  it('should handle open/close dropdown when clicking on overlay', () => {
    renderWithTheme(<Dropdown />)

    const content =
      screen.getByText(/Delete Note?/i).parentElement?.parentElement

    const overlay = content?.nextElementSibling

    userEvent.click(screen.getByLabelText(/delete note/))

    expect(overlay).toHaveStyle({ opacity: 1 })
    expect(overlay!.getAttribute('aria-hidden')).toBe('false')

    userEvent.click(overlay!)

    expect(overlay).toHaveStyle({ opacity: 0 })
    expect(overlay!.getAttribute('aria-hidden')).toBe('true')
  })
})
