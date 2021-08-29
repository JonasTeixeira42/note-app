import React, { useState, useRef } from 'react'
import { Add, Search } from '@styled-icons/material-outlined'

import Modal from 'components/Modal'
import Empty from 'components/Empty'
import Button from 'components/Button'
import NoteCard from 'components/NoteCard'
import TextInput from 'components/TextInput'
import FormNote, { FormNoteProps } from 'components/FormNote'

import { useNote } from 'hooks/use_note'
import initialValue from './initalValue'
import emptyNoteImage from 'assets/images/add-note-illustration.svg'
import * as S from './styles'

const Home = () => {
  const [showModal, setShowModal] = useState(false)
  const [currentNote, setCurrentNote] = useState<FormNoteProps>(initialValue)
  const [values, setValues] = useState({ search: '' })

  const { notes, completed, quantity } = useNote()

  const form = useRef<HTMLButtonElement>(null)

  const toggleModal = () => {
    setCurrentNote(initialValue)
    setShowModal(!showModal)
  }

  const onUpdate = (note: FormNoteProps) => {
    setCurrentNote({ ...note })
    setShowModal(true)
  }

  const onSubmit = () => {
    console.log('QUANTI', quantity, 'completed', completed)
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
          {showModal && <FormNote {...currentNote} ref={form} />}
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
          {notes.length ? (
            notes.map((note, key) => (
              <NoteCard
                key={key}
                id={note.id}
                type={note.type}
                date={note.date}
                title={note.title}
                isFinished={note.isFinished}
                onUpdate={(v) => onUpdate(v)}
                description={note.description}
              />
            ))
          ) : (
            <Empty title="You don't have any notes" image={emptyNoteImage} />
          )}
        </S.Notes>
      </S.Wrapper>
    </S.Container>
  )
}

export default Home
