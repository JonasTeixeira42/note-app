import React, { useState } from 'react'
import { Delete } from '@styled-icons/material/'

import NoteActions from 'components/NoteActions'

import * as S from './styles'
import { useNote } from 'hooks/use_note'

export type DropdownProps = {
  id?: string
}

const Dropdown = ({ id = '' }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const { removeNote } = useNote()

  const onDelete = () => {
    removeNote(id)
    setIsOpen(!isOpen)
  }

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Icon onClick={() => setIsOpen(!isOpen)}>
        <Delete aria-label="delete note" />
      </S.Icon>

      <S.Content aria-hidden={!isOpen}>
        <NoteActions onDelete={onDelete} onClose={() => setIsOpen(!isOpen)} />
      </S.Content>
      <S.Overlay aria-hidden={!isOpen} onClick={() => setIsOpen(!isOpen)} />
    </S.Wrapper>
  )
}

export default Dropdown
