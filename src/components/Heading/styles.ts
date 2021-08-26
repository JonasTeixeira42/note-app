import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { HeadingProps } from '.'

type WrapperProps = Pick<HeadingProps, 'size'>

const wrapperModifiers = {
  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
    `}
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `
}

export const Wrapper = styled.h2<WrapperProps>`
  ${({ theme, size }) => css`
    color: ${theme.colors.gray};
    font-weight: ${theme.font.normal};

    ${!!size && wrapperModifiers[size](theme)};
  `}
`
