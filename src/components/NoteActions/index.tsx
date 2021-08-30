import React from 'react'

import Button from 'components/Button'

import * as S from './styles'

export type NoteActionsProps = {
  id?: string
  onDelete?: () => void
  onClose?: () => void
}

const NoteActions = ({ onClose, onDelete }: NoteActionsProps) => {
  return (
    <S.Wrapper>
      <p>Delete note?</p>
      <S.Action>
        <Button
          onClick={() => onClose && onClose()}
          background="white"
          color="blue"
        >
          cancel
        </Button>
        <Button
          onClick={() => onDelete && onDelete()}
          background="white"
          color="blue"
        >
          delete
        </Button>
      </S.Action>
    </S.Wrapper>
  )
}

export default NoteActions
