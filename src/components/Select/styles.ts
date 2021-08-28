import styled, { css } from 'styled-components'

type WrapperProps = {
  error: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error }) => css`
    position: relative;
    border: 0.2rem ${theme.colors.lightGray} solid;
    border-radius: ${theme.border.radius} ${theme.border.radius} 0 0;

    ${error && `border-color: ${theme.colors.red}`};

    &:before {
      content: '';
      position: absolute;
      right: 1.6rem;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-left: 0.6rem solid transparent;
      border-right: 0.6rem solid transparent;
      border-top: 0.6rem solid ${theme.colors.darkGray};
    }
  `}
`

export const Select = styled.select`
  ${({ theme }) => css`
    background: ${theme.colors.lightGray};
    padding: calc(${theme.spacings.small} / 2) ${theme.spacings.xsmall};
    width: 100%;
    height: 100%;
    border: none;
    font-size: 1.6rem;
    appearance: none;
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.red};
  `}
`
