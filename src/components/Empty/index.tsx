import React from 'react'

import Heading from 'components/Heading'

import * as S from './styles'

export type EmptyProps = {
  title: string
  image: string
}

const Empty = ({ title, image }: EmptyProps) => {
  return (
    <S.Wrapper>
      <Heading size={'large'}>{title}</Heading>
      <S.Image src={image} />
    </S.Wrapper>
  )
}

export default Empty
