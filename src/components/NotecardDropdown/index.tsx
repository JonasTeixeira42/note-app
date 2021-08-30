import React from 'react'

import Dropdown from 'components/Dropdown'
import DeleteIcon from 'components/DeleteIcon'
import NoteActions from 'components/NoteActions'

import * as S from './styles'

type NotecardDropdownProps = {
  id?: string
}

const NotecardDropdown = ({ id }: NotecardDropdownProps) => {
  return (
    <S.Wrapper>
      <Dropdown title={<DeleteIcon />}>
        <NoteActions id={id} />
      </Dropdown>
    </S.Wrapper>
  )
}

export default NotecardDropdown
