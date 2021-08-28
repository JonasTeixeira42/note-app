import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

import { ButtonColors, ButtonProps } from '.'

type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'color' | 'background' | 'hasShadow'
>

const wrapperModifiers = {
  background: (color: ButtonColors, theme: DefaultTheme) => css`
    background: ${theme.colors[color]};

    &:hover {
      background: ${darken(0.1, theme.colors[color])};
    }
  `,

  hasIcon: () => css`
    display: inline-flex;
    align-items: flex-start;
    justify-content: center;

    svg {
      width: 1.5rem;

      & + span {
        margin-left: 0.5rem;
      }
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, color, background, hasIcon, hasShadow }) => css`
    border: 0;
    outline: none;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: 500;
    text-transform: uppercase;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
    color: ${!!color && theme.colors[color]};
    cursor: pointer;
    letter-spacing: 0.125rem;
    transition: background 0.3s;

    ${hasIcon && wrapperModifiers.hasIcon()}
    ${hasShadow && 'box-shadow: 0px 3px 6px #00000029'};
    ${!!background && wrapperModifiers.background(background, theme)};
  `}
`
