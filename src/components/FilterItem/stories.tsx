import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import FilterItem, { FilterItemProps } from '.'

export default {
  title: 'FilterItem',
  component: FilterItem,
  args: {
    active: false,
    color: 'purple',
    label: 'Work'
  }
} as Meta

export const Default: Story<FilterItemProps> = (args) => (
  <FilterItem {...args} />
)
