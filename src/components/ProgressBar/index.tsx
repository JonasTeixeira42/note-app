import React from 'react'

import { useNote } from 'hooks/use_note'

import * as S from './styles'

const ProgressBar = () => {
  const { quantity, completed } = useNote()

  return (
    <S.Wrapper>
      <S.Title>{`You have ${completed}/${quantity} notes completed`}</S.Title>
      <S.Bar progress={(completed / quantity) * 100} />
    </S.Wrapper>
  )
}

export default ProgressBar
