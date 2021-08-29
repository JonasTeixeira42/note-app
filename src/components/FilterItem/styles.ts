import styled, { css, DefaultTheme } from 'styled-components'

import { Colors, FilterItemProps } from '.'

const wrapperModifiers = {
  active: (theme: DefaultTheme, background: Colors) => css`
    background-color: ${theme.colors[background]};

    ${Label} {
      color: ${theme.colors.white};
    }
  `
}

export const Wrapper = styled.div<Omit<FilterItemProps, 'label'>>`
  ${({ theme, background, active }) => css`
    position: relative;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} 2.6rem;
    width: fit-content;
    border-radius: 0.6rem;
    background-color: transparent;

    &::before {
      content: '';
      position: absolute;
      border-radius: 50%;
      width: 0.6rem;
      height: 0.6rem;
      background: ${theme.colors[background]};
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
    }

    ${active && wrapperModifiers.active(theme, background)}
  `}
`
export const Label = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
`
