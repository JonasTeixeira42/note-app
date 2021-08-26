import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  ${() => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid rgba(255, 255, 255, 0.6);
    border-radius: 0.2rem;
    transition: background border 0.1s;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      width: 0.6rem;
      height: 0.9rem;
      border: 0.2rem solid transparent;
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      opacity: 0;
      transition: 0.1s;
    }

    &:checked {
      &:before {
        opacity: 1;
        border-color: rgba(255, 255, 255, 0.6);
      }
    }
  `}
`
