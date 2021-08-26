import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import Textarea, { TextareaProps } from '.'

export default {
  title: 'Textarea',
  component: Textarea,
  args: {
    name: 'description',
    placeholder: 'Type here...'
  },
  argTypes: {
    onInputChange: { action: 'changed' }
  }
} as Meta

export const Default: Story<TextareaProps> = (args) => (
  <div style={{ maxWidth: '30rem' }}>
    <Textarea {...args} />
  </div>
)

export const WithError: Story<TextareaProps> = (args) => (
  <div style={{ maxWidth: '30rem' }}>
    <Textarea {...args} />
  </div>
)

WithError.args = {
  error: 'Type Something'
}
