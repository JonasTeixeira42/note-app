import React, { InputHTMLAttributes } from 'react'

import * as S from './styles'

export type TextInputProps = {
  onInputChange: (value: string) => void
  value?: string
  icon?: React.ReactNode
  disabled?: boolean
  error?: string
  isInputSearch?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const TextInput = ({
  onInputChange,
  icon,
  error = '',
  disabled = false,
  value = '',
  isInputSearch = false,
  ...props
}: TextInputProps) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value

    onInputChange(newValue)
  }

  return (
    <div>
      <S.Wrapper
        disabled={disabled}
        error={!!error}
        isInputSearch={isInputSearch}
      >
        <S.InputWrapper>
          {!!icon && <S.Icon>{icon}</S.Icon>}
          <S.Input
            hasIcon={!!icon}
            disabled={disabled}
            type="text"
            onChange={onChange}
            value={value}
            {...props}
          />
        </S.InputWrapper>
      </S.Wrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </div>
  )
}

export default TextInput
