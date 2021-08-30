import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    width: 30rem;
  `}
`

export const ActionWrapper = styled.div`
  ${({ theme }) => css`
    text-align: right;
    margin-top: ${theme.spacings.medium};
  `}
`
