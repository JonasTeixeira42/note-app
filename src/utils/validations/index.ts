import Joi from 'joi'

const fieldValidations = {
  title: Joi.string().min(3).required(),
  category: Joi.string().required(),
  description: Joi.string().min(3).max(300).required()
}

type noteValues = {
  title: string
  category: string
  description: string
}

export type FieldErrors = {
  [key: string]: string
}

function getFieldErrors(objError: Joi.ValidationResult) {
  const errors: FieldErrors = {}

  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message
    })
  }

  return errors
}

export function noteValidade(values: noteValues) {
  const schema = Joi.object(fieldValidations)

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}
