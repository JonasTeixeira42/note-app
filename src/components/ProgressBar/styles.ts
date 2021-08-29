import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.medium};
  `}
`

type BarProps = {
  width: number
}

export const Bar = styled.h2<BarProps>`
  ${({ theme, width }) => css`
    margin-top: ${theme.spacings.xxsmall};
    height: 0.4rem;
    background-color: ${lighten(0.4, theme.colors.blue)};
    position: relative;

    &::before {
      transition: width 0.3s ease-in;
      content: '';
      position: absolute;
      height: 0.4rem;
      left: 0;
      top: 0;
      width: ${`${width}%`};
      background-color: ${theme.colors.blue};
    }
  `}
`
