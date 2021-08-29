import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Filters, { FiltersProps } from '.'

import filters from './initialValue'

export default {
  title: 'Filters',
  component: Filters,
  args: {
    filters
  }
} as Meta

export const Default: Story<FiltersProps> = (args) => <Filters {...args} />
