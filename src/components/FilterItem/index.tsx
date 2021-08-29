import React from 'react'

import * as S from './styles'

export type Colors = 'orange' | 'blue' | 'green' | 'purple'

export type FilterItemProps = {
  label: string
  background: Colors
  active?: boolean
}

const FilterItem = ({
  label = '',
  background = 'blue',
  active = false
}: FilterItemProps) => {
  return (
    <S.Wrapper background={background} active={active}>
      <S.Label>{label}</S.Label>
    </S.Wrapper>
  )
}

export default FilterItem
