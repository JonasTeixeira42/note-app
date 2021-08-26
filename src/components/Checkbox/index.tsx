import React, { InputHTMLAttributes, useState } from 'react'

import * as S from './styles'

export type CheckboxProps = {
  onCheck: (status: boolean) => void
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({ onCheck, ...props }: CheckboxProps) => {
  const [checked, setChecked] = useState(false)

  const onChange = () => {
    const status = !checked
    setChecked(status)

    !!onCheck && onCheck(status)
  }

  return (
    <S.Wrapper>
      <S.Input
        type="checkbox"
        onChange={onChange}
        checked={checked}
        {...props}
      />
    </S.Wrapper>
  )
}

export default Checkbox
