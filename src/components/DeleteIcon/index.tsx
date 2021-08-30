import React from 'react'
import { Delete } from '@styled-icons/material/'

import * as S from './styles'

const CartIcon = () => {
  return (
    <S.Wrapper>
      <Delete aria-label="Delete Note" />
    </S.Wrapper>
  )
}

export default CartIcon
