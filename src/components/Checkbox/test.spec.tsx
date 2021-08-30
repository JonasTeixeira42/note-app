import React from 'react'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from 'utils/tests/helpers'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render the checkbox', () => {
    renderWithTheme(<Checkbox />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<Checkbox onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should call onCheck with false if the Checkbox is already checked', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<Checkbox onCheck={onCheck} isChecked />)

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(false)
  })
})
