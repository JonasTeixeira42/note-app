import styled, { css } from 'styled-components'

export const Icon = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.white};
    position: relative;
    display: flex;
    align-items: center;
    padding-right: 2.4rem;
    z-index: ${theme.layers.overlay};

    > svg {
      width: 2.4rem;
      color: rgba(255, 255, 255, 0.6);
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    cursor: auto;
    display: flex;
    font-size: 1.6rem;
    flex-direction: column;
    background: ${theme.colors.white};
    color: ${theme.colors.darkGray};
    margin-top: ${theme.spacings.xsmall};
    position: absolute;
    right: 0;
    z-index: ${theme.layers.modal};
    box-shadow: 0px 3px 6px #00000029;

    &::before {
      content: '';
      position: absolute;
      border-right: 0.6rem solid transparent;
      border-left: 0.6rem solid transparent;
      border-bottom: 0.6rem solid ${theme.colors.white};
      top: -0.6rem;
      right: 2.8rem;
    }
  `}
`

export const Overlay = styled.div`
  ${({ theme }) => css`
    cursor: auto;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${theme.layers.overlay};
  `}
`

type WrapperProps = {
  isOpen?: boolean
}

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
    visibility: visible;
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
    visibility: hidden;
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ isOpen }) => css`
    position: relative;
    width: max-content;
    height: auto;

    ${Content},
    ${Overlay} {
      transition: transform 0.2s ease-in, opacity 0.3s ease-in;

      ${isOpen && wrapperModifiers.open()}
      ${!isOpen && wrapperModifiers.close()}
    }
  `}
`
