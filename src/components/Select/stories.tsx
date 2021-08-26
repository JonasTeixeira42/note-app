import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import Select, { SelectProps } from '.'

const options = [
  { name: 'Home', value: 'home' },
  { name: 'Work', value: 'work' },
  { name: 'Personal', value: 'personal' }
]

export default {
  title: 'Select',
  component: Select,
  args: {
    name: 'type',
    options,
    value: ''
  },
  argTypes: {
    onInputChange: { action: 'changed' }
  }
} as Meta

export const Default: Story<SelectProps> = (args) => (
  <div style={{ maxWidth: '30rem' }}>
    <Select {...args} />
  </div>
)

export const WithError: Story<SelectProps> = (args) => (
  <div style={{ maxWidth: '30rem' }}>
    <Select {...args} />
  </div>
)

WithError.args = {
  error: 'Select an option'
}
