import React from 'react'

import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  size?: 'normal' | 'large'
}

const Heading = ({ children, size = 'normal' }: HeadingProps) => {
  return <S.Wrapper size={size}>{children}</S.Wrapper>
}

export default Heading
