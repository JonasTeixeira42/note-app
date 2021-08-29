import React, { useState, useRef } from 'react'
import { Add, Search } from '@styled-icons/material-outlined'

import Modal from 'components/Modal'
import Button from 'components/Button'
import NoteCard from 'components/NoteCard'
import FormNote from 'components/FormNote'
import TextInput from 'components/TextInput'

import { useNote } from 'hooks/use_note'
import * as S from './styles'

const Home = () => {
  const [showModal, setShowModal] = useState(false)
  const [values, setValues] = useState({ search: '' })

  const { notes } = useNote()

  const form = useRef<HTMLButtonElement>(null)

  const toggleModal = () => setShowModal(!showModal)

  const onSubmit = () => {
    if (form.current) {
      form.current.click()
    }
  }

  const handleInput = (field: string, value: string) => {
    setValues((v) => ({ ...v, [field]: value }))
  }

  return (
    <S.Container>
      <S.Wrapper>
        <Modal
          title={'Add note'}
          isOpen={showModal}
          onClose={toggleModal}
          onAdd={onSubmit}
        >
          <FormNote ref={form} />
        </Modal>

        <S.SearchWrapper>
          <TextInput
            name="search"
            value={values.search}
            isInputSearch
            icon={<Search />}
            onInputChange={(v) => handleInput('search', v)}
          />
          <S.Actions>
            <div></div>
            <Button
              onClick={toggleModal}
              color="white"
              background="blue"
              icon={<Add />}
              hasShadow
            >
              add note
            </Button>
          </S.Actions>
        </S.SearchWrapper>

        <S.Notes>
          {notes.map((note, key) => (
            <NoteCard
              key={key}
              id={note.id}
              type={note.type}
              date={note.date}
              title={note.title}
              isFinished={note.isFinished}
              description={note.description}
            />
          ))}
        </S.Notes>
      </S.Wrapper>
    </S.Container>
  )
}

export default Home
