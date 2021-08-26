import React, { SelectHTMLAttributes } from 'react'

import * as S from './styles'

type SelectOption = {
  name: string
  value: string
}

export type SelectProps = {
  onInputChange: (value: string) => void
  value: string
  error?: string
  placeholder?: string
  options: SelectOption[]
} & SelectHTMLAttributes<HTMLSelectElement>

const Select = ({
  onInputChange,
  value,
  error = '',
  placeholder = '',
  options = [],
  ...props
}: SelectProps) => {
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value

    onInputChange(newValue)
  }

  return (
    <>
      <S.Wrapper error={!!error}>
        <S.Select onChange={onChange} value={value} {...props}>
          {!!placeholder && (
            <option hidden value="">
              {placeholder}
            </option>
          )}
          {options.map(({ name, value }) => (
            <option key={value} value={value}>
              {name}
            </option>
          ))}
        </S.Select>
      </S.Wrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </>
  )
}

export default Select
