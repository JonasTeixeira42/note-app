import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Empty from '.'

const props = {
  title: 'no notes here',
  image: 'assets/images/search-image.svg'
}

describe('<Empty />', () => {
  it('should render the Empty component', () => {
    renderWithTheme(<Empty {...props} />)

    expect(
      screen.getByRole('heading', { name: /no notes here/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'assets/images/search-image.svg'
    )
  })
})
