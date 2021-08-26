import styled, { css, DefaultTheme } from 'styled-components'

import { TextInputProps } from '.'

type WrapperProps = { error?: boolean } & Pick<TextInputProps, 'disabled'>

type InputProps = { hasIcon: boolean }

const wrapperModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${InputWrapper},
    ${Input} {
      cursor: not-allowed;
      color: ${theme.colors.gray};

      &::placeholder {
        color: currentColor;
      }
    }
  `,

  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border: 0.2rem solid ${theme.colors.red};
    }

    ${Icon} {
      color: ${theme.colors.red};
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled, error }) => css`
    border-radius: ${theme.border.radius} ${theme.border.radius} 0 0;

    ${disabled && wrapperModifiers.disabled(theme)};
    ${error && wrapperModifiers.error(theme)};
  `}
`

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem ${theme.colors.lightGray} solid;
    border-radius: inherit;

    &:focus-within {
      border-color: ${theme.colors.black};
    }
  `}
`

export const Input = styled.input<InputProps>`
  ${({ theme, hasIcon }) => css`
    color: ${theme.colors.darkGray};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: calc(${theme.spacings.small} / 2) 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;

    ${hasIcon && `padding-left: ${theme.spacings.xxsmall}`}
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.gray};

    & > svg {
      width: 100%;
    }
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.red};
  `}
`
