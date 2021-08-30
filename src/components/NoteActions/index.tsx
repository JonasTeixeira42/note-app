import React from 'react'

import Button from 'components/Button'

import * as S from './styles'
import { useNote } from 'hooks/use_note'

export type NoteActionsProps = {
  id?: string
}

const NoteActions = ({ id = '' }: NoteActionsProps) => {
  const { removeNote } = useNote()

  const onDelete = () => {
    removeNote(id)
  }

  return (
    <S.Wrapper>
      <p>Delete Note?</p>

      <S.ActionWrapper>
        <Button onClick={onDelete} background="white" color="blue">
          Delete
        </Button>
      </S.ActionWrapper>
    </S.Wrapper>
  )
}

export default NoteActions
