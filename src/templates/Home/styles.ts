import styled, { css } from 'styled-components'

import * as ProgressBarStyles from 'components/ProgressBar/styles'

export const Container = styled.main`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;
    padding: 0 2rem;

    ${ProgressBarStyles.Wrapper} {
      margin-bottom: ${theme.spacings.small};
    }
  `}
`

export const Wrapper = styled.div`
  ${() => css`
    margin-top: 6.4rem;
  `}
`

export const SearchWrapper = styled.div``

export const Actions = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    margin: ${theme.spacings.small} 0 ${theme.spacings.medium};
  `}
`

export const Notes = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    column-gap: ${theme.spacings.xsmall};
    row-gap: ${theme.spacings.small};
  `}
`
