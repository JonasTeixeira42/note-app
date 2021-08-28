import React, { useState, forwardRef } from 'react'

import Select from 'components/Select'
import Textarea from 'components/Textarea'
import TextInput from 'components/TextInput'

import * as S from './styles'
import options from './options'
import { FieldErrors, noteValidade } from 'utils/validations'

export type FormNoteProps = {
  title?: string
  category?: string
  description?: string
}

const FormNote = forwardRef<HTMLButtonElement, FormNoteProps>(
  ({ title = '', category = '', description = '' }, ref) => {
    const [formErrors, setFormErrors] = useState<FieldErrors>({})
    const [values, setValues] = useState({
      title: title,
      category: category,
      description: description
    })

    const handleInput = (field: string, value: string) => {
      setValues((v) => ({ ...v, [field]: value }))
    }

    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault()

      const erros = noteValidade(values)

      if (Object.keys(erros).length) {
        setFormErrors(erros)
        return
      }

      setFormErrors({})
    }

    return (
      <S.Wrapper>
        <S.Form onSubmit={handleSubmit}>
          <TextInput
            name="title"
            placeholder="title"
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
