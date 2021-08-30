import React, { useState } from 'react'

import FilterItem, { FilterItemProps } from 'components/FilterItem'

import * as S from './styles'
import { useNote } from 'hooks/use_note'

export type FiltersProps = {
  filters: FilterItemProps[]
}

const Filters = ({ filters }: FiltersProps) => {
  const [filter, setFilter] = useState<FilterItemProps[]>(filters)

  const { filterByCategory } = useNote()

  const toggleActive = (label: string) => {
    const data = [...filter]

    data.forEach((item) => {
      item.active = item.label === label ? true : false
    })

    setFilter(data)
    filterByCategory(label)
  }

  return (
    <S.Wrapper>
      {filter.map((item) => (
        <FilterItem
          key={item.label}
          label={item.label}
          active={item.active}
          hasCircle={item.hasCircle}
          background={item.background}
          onClick={(v) => toggleActive(v)}
        />
      ))}
    </S.Wrapper>
  )
}

export default Filters
