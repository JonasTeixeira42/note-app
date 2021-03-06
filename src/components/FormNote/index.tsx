import React, { useState, forwardRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Select from 'components/Select'
import Textarea from 'components/Textarea'
import TextInput from 'components/TextInput'
import { NoteTypes } from 'components/NoteCard'

import * as S from './styles'
import options from './options'
import { useNote } from 'hooks/use_note'
import { FieldErrors, noteValidade } from 'utils/validations'

export type FormNoteProps = {
  id?: string
  title?: string
  category?: string
  description?: string
}

const FormNote = forwardRef<HTMLButtonElement, FormNoteProps>(
  ({ title = '', category = '', description = '', id = '' }, ref) => {
    const [formErrors, setFormErrors] = useState<FieldErrors>({})
    const [values, setValues] = useState({
      title: title,
      category: category,
      description: description
    })

    const { addNote, updateNote } = useNote()

    const handleInput = (field: string, value: string) => {
      setValues((v) => ({ ...v, [field]: value }))
    }

    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault()

      const errors = noteValidade(values)

      if (Object.keys(errors).length) {
        setFormErrors(errors)
        return
      }

      const newNote = {
        id: id || uuidv4(),
        title: values.title,
        type: values.category as NoteTypes,
        description: values.description
      }

      id ? updateNote(newNote) : addNote(newNote)

      setFormErrors({})
      setValues({
        title: title,
        category: category,
        description: description
      })
    }

    return (
      <S.Wrapper>
        <S.Form onSubmit={handleSubmit}>
          <TextInput
            name="title"
            placeholder="Add tittle..."
            error={formErrors?.title}
            type="text"
            value={values.title}
            onInputChange={(v) => handleInput('title', v)}
          />

          <Select
            onInputChange={(v) => handleInput('category', v)}
            name="category"
            placeholder="Select Category"
            value={values.category}
            options={options}
            error={formErrors?.category}
          />

          <Textarea
            onInputChange={(v) => handleInput('description', v)}
            name="description"
            placeholder="Add a description..."
            value={values.description}
            error={formErrors?.description}
          />

          <button ref={ref} type="submit">
            add
          </button>
        </S.Form>
      </S.Wrapper>
    )
  }
)

export default FormNote
