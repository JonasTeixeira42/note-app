import { FilterItemProps } from 'components/FilterItem'

const filterItems: FilterItemProps[] = [
  {
    label: 'All',
    background: 'blue',
    active: true,
    hasCircle: false
  },
  {
    label: 'Home',
    background: 'orange',
    active: false,
    hasCircle: true
  },
  {
    label: 'Work',
    background: 'purple',
    active: false,
    hasCircle: true
  },
  {
    label: 'Personal',
    background: 'green',
    active: false,
    hasCircle: true
  }
]

export default filterItems
