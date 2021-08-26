import React, { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

export type ButtonColors = 'blue' | 'white'

export type ButtonProps = {
  children: React.ReactNode
  color?: ButtonColors
  background?: ButtonColors
  icon?: JSX.Element
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  icon,
  color = 'blue',
  background = 'blue',
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper
      hasIcon={!!icon}
      color={color}
      background={background}
      {...props}
    >
      {!!icon && icon}
      <span>{children}</span>
    </S.Wrapper>
  )
}

export default Button
