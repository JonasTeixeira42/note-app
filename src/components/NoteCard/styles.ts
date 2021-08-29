import styled, { css, DefaultTheme } from 'styled-components'

import { NoteCardProps } from '.'
import colors from './colors'

type WrapperProps = Pick<NoteCardProps, 'type' | 'isFinished'>

const wrapperModifiers = {
  done: (theme: DefaultTheme) => css`
    ${Title},
    ${Description},
    ${Date} {
      text-decoration: line-through;
    }

    background-color: ${theme.colors.darkGray};
  `
}

export const Wrapper = styled.article<WrapperProps>`
  ${({ theme, type, isFinished }) => css`
    display: flex;
    flex-direction: column;
    border-radius: ${theme.border.radius};
    padding: 2rem ${theme.spacings.xsmall};
    box-shadow: 0px 3px 6px #00000029;
    background-color: ${!!type && theme.colors[colors[type]]};

    ${isFinished && wrapperModifiers.done(theme)};
  `}
`

export const Header = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.h2`
  ${({ theme }) => css`
    flex: 1;
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.medium};
    color: ${theme.colors.white};
    margin-left: calc(${theme.spacings.large} / 2);
  `}
`
export const ActionGroup = styled.div`
  display: flex;

  > div {
    margin-left: 2rem;
  }
`

export const IconWrapper = styled.div`
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  width: 2.4rem;

  > svg {
    width: 100%;
  }
`

export const Description = styled.p`
  ${({ theme }) => css`
    flex: 1;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.white};
    font-weight: ${theme.font.normal};
    margin: 0.8rem 0 1.2rem;
  `}
`

export const Date = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};
  `}
`
