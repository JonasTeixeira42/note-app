import React from 'react'
import { Edit, Delete } from '@styled-icons/material/'

import Checkbox from 'components/Checkbox'

import * as S from './styles'
import { useNote } from 'hooks/use_note'

export type NoteTypes = 'home' | 'personal' | 'work'

export type NoteCardProps = {
  id?: string
  title?: string
  description?: string
  date?: string
  isFinished?: boolean
  type?: NoteTypes
}

const NoteCard = ({
  id = '',
  title = '',
  description = '',
  date = '',
  isFinished = false,
  type = 'home'
}: NoteCardProps) => {
  const { changeStatus } = useNote()

  const onCheck = (isChecked: boolean) => {
    changeStatus(id, isChecked)
  }

  return (
    <S.Wrapper type={type} isFinished={isFinished}>
      <S.Header>
        <Checkbox isChecked={isFinished} onCheck={(v) => onCheck(v)} />
        <S.Title>{title}</S.Title>
        <S.ActionGroup>
          <S.IconWrapper>
            <Edit aria-label="edit note" />
          </S.IconWrapper>
          <S.IconWrapper>
            <Delete aria-label="delete note" />
          </S.IconWrapper>
        </S.ActionGroup>
      </S.Header>

      <S.Description>{description}</S.Description>

      <S.Date>{date}</S.Date>
    </S.Wrapper>
  )
}

export default NoteCard
