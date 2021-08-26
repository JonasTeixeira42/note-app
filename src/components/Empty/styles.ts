import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const Image = styled.img`
  ${({ theme }) => css`
    max-width: 100%;
    object-fit: cover;

    margin-top: ${theme.spacings.xlarge};
  `}
`
