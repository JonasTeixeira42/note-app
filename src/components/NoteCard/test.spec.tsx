import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import NoteCard from '.'

const props = {
  title: 'Note',
  description: 'some note',
  date: 'Aug 30, 2021'
}

describe('<NoteCard />', () => {
  it('should render the NoteCard', () => {
    const { container } = renderWithTheme(<NoteCard {...props} type="home" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument
    expect(screen.getByLabelText(/edit note/i)).toBeInTheDocument
    expect(screen.getByLabelText(/delete note/i)).toBeInTheDocument
    expect(screen.getByRole('heading', { name: /note/i })).toBeInTheDocument
    expect(screen.getByText(/some note/i)).toBeInTheDocument
    expect(screen.getByText(/Aug 30, 2021/i)).toBeInTheDocument
    expect(container.firstChild).toHaveStyle({
      'background-color': '#FF9100'
    })
  })

  it('should render purple background when personal type is passed', () => {
    const { container } = renderWithTheme(
      <NoteCard {...props} type="personal" />
    )

    expect(container.firstChild).toHaveStyle({
      'background-color': '#66BB6A'
    })
  })

  it('should render purple background when work type is passed', () => {
    const { container } = renderWithTheme(<NoteCard {...props} type="work" />)

    expect(container.firstChild).toHaveStyle({
      'background-color': '#5C6BC0'
    })
  })

  it('should render finished note', () => {
    const { container } = renderWithTheme(
      <NoteCard {...props} type="work" isFinished />
    )

    expect(container.firstChild).toHaveStyle({
      'background-color': '#666666'
    })
    expect(screen.getByText(/some note/i)).toHaveStyle({
      'text-decoration': 'line-through'
    })
    expect(screen.getByRole('heading', { name: /note/i })).toHaveStyle({
      'text-decoration': 'line-through'
    })
  })
})
