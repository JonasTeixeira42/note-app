import styled, { css } from 'styled-components'

type WrapperProps = { error: boolean }

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error }) => css`
    background-color: ${theme.colors.lightGray};
    padding: ${theme.spacings.xsmall};
    border: 0.2rem ${theme.colors.lightGray} solid;

    ${error && `border-color: ${theme.colors.red}`};
  `}
`

export const Textarea = styled.textarea`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    resize: none;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
    height: 100%;
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.red};
  `}
`
