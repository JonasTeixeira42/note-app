/* eslint-disable @typescript-eslint/no-empty-function */
//DEIXAT ICONES COM ARIA_LABEL PARA TESTES
import React from 'react'
import { Edit, Delete } from '@styled-icons/material/'

import Checkbox from 'components/Checkbox'

import * as S from './styles'

export type NoteTypes = 'home' | 'personal' | 'work'

export type NoteCardProps = {
  title: string
  description: string
  date: string
  isFinished: boolean
  type: NoteTypes
}

const NoteCard = ({
  title,
  description,
  date,
  isFinished,
  type = 'home'
}: NoteCardProps) => {
  return (
    <S.Wrapper type={type} isFinished={isFinished}>
      <S.Header>
        <Checkbox onCheck={() => {}} />
        <S.Title>{title}</S.Title>
        <S.ActionGroup>
          <S.IconWrapper>
            <Edit />
          </S.IconWrapper>
          <S.IconWrapper>
            <Delete />
          </S.IconWrapper>
        </S.ActionGroup>
      </S.Header>

      <S.Description>{description}</S.Description>

      <S.Date>{date}</S.Date>
    </S.Wrapper>
  )
}

export default NoteCard
