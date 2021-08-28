import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as TextareaStyles from 'components/Textarea/styles'

export const Wrapper = styled.div``

export const Form = styled.form`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.xsmall};

    ${TextareaStyles.Wrapper} {
      height: 10rem;
    }

    ${media.greaterThan('medium')`
      grid-template-columns: 1fr 0.6fr;
      column-gap: ${theme.spacings.xsmall};
      row-gap: ${theme.spacings.medium};

      ${TextareaStyles.Wrapper} {
        height: 22rem;
      }
    `}
  `}
`
