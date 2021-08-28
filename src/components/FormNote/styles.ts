import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as TextareaStyles from 'components/Textarea/styles'

export const Wrapper = styled.div``

export const Form = styled.form`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.xsmall};

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

export const Button = styled.button`
  ${({ theme }) => css`
    background-color: #7d40e7;
    padding: 1.5rem 0;
    outline: 0;
    border: 0;
    border-radius: 0.4rem;
    font-weight: 700;
    cursor: pointer;
    color: #fafafa;
    margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
  `}
`
