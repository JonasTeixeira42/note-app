import React, { InputHTMLAttributes } from 'react'

import * as S from './styles'

export type TextInputProps = {
  onInputChange: (value: string) => void
  value: string
  icon?: React.ReactNode
  disabled?: boolean
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextInput = ({
  onInputChange,
  icon,
  error = '',
  disabled = false,
  value,
  ...props
}: TextInputProps) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value

    onInputChange(newValue)
  }

  return (
    <>
      <S.Wrapper disabled={disabled} error={!!error}>
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
    </>
  )
}

export default TextInput
