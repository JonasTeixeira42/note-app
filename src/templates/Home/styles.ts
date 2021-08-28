import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;
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
