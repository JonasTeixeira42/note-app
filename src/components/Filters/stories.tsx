import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Filters from '.'

export default {
  title: 'Filters',
  component: Filters
} as Meta

export const Default: Story = (args) => <Filters />
