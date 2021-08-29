import React from 'react'

import * as S from './styles'

export type Colors = 'orange' | 'blue' | 'green' | 'purple'

export type FilterItemProps = {
  label: string
  background: Colors
  active?: boolean
  hasCircle?: boolean
  onClick?: (label: string) => void
}

const FilterItem = ({
  label = '',
  background = 'blue',
  active = false,
  hasCircle = true,
  onClick
}: FilterItemProps) => {
  const handleClick = () => {
    onClick && onClick(label)
  }

  return (
    <S.Wrapper
      onClick={handleClick}
      background={background}
      active={active}
      hasCircle={hasCircle}
    >
      <S.Label>{label}</S.Label>
    </S.Wrapper>
  )
}

export default FilterItem
