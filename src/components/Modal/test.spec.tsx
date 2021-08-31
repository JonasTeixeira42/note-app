import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Modal from '.'

describe('<Modal />', () => {
  it('should render the Modal', () => {
    renderWithTheme(
      <Modal data-testid="modal" isOpen={true} title="title">
        content
      </Modal>
    )

    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument()
    expect(screen.getByText(/content/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument()
  })
})
