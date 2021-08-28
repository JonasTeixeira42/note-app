import React from 'react'

import Button from 'components/Button'
import Heading from 'components/Heading'

import * as S from './styles'

export type ModalProps = {
  title?: string
  isOpen?: boolean
  children?: React.ReactNode
  onAdd?: () => void
  onClose?: () => void
}

const Modal = ({
  isOpen = false,
  title = 'Add note',
  children = '',
  onClose,
  onAdd
}: ModalProps) => {
  return (
    <S.Wrapper aria-hidden={!isOpen} isOpen={isOpen} onClick={onClose}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <S.Header>
          <Heading size={'normal'}>{title}</Heading>
        </S.Header>
        <S.Body>
          <S.Content>{children}</S.Content>
          <S.Footer>
            <Button onClick={onClose} color="blue" background="white">
              cancel
            </Button>
            <Button onClick={onAdd} color="blue" background="white">
              add
            </Button>
          </S.Footer>
        </S.Body>
      </S.Modal>
    </S.Wrapper>
  )
}

export default Modal
