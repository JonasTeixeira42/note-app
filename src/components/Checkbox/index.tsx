import React, { InputHTMLAttributes, useState } from 'react'

import * as S from './styles'

export type CheckboxProps = {
  onCheck?: (status: boolean) => void
  isChecked?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({ onCheck, isChecked = false, ...props }: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked)

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
