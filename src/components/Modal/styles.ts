import styled, { css } from 'styled-components'

type WrapperProps = { isOpen: boolean }

const wrapperModifiers = {
  show: (isOpen: boolean) => css`
    opacity: ${isOpen ? 1 : 0};
    visibility: ${isOpen ? 'visible' : 'hidden'};

    ${Modal} {
      transform: ${isOpen ? 'translateY(0)' : 'translateY(-3rem)'};
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${theme.layers.alwaysOnTop};
    background-color: rgba(0, 0, 0, 0.4);
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;

    ${wrapperModifiers.show(isOpen)}
  `}
`

export const Modal = styled.div`
  ${({ theme }) => css`
    width: 82.4rem;
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    transition: transform 0.2s ease-in-out;
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    border-bottom: 0.1rem solid ${theme.colors.lightGray};
  `}
`

export const Body = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
  `}
`

export const Content = styled.div``

export const Footer = styled.div`
  ${({ theme }) => css`
    text-align: right;
    margin-top: ${theme.spacings.xsmall};
  `}
`
