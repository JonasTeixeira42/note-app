import React, { TextareaHTMLAttributes } from 'react'

import * as S from './styles'

export type TextareaProps = {
  onInputChange?: (value: string) => void
  value?: string
  error?: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = ({
  onInputChange,
  value = '',
  error = '',
  ...props
}: TextareaProps) => {
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <div>
      <S.Wrapper error={!!error}>
        <S.Textarea onChange={onChange} value={value} {...props}></S.Textarea>
      </S.Wrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </div>
  )
}

export default Textarea
