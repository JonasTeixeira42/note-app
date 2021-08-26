import React from 'react'
import { Email } from '@styled-icons/material-outlined'
import { Meta, Story } from '@storybook/react/types-6-0'

import TextInput, { TextInputProps } from '.'

export default {
  title: 'TextInput',
  component: TextInput,
  args: {
    label: 'Email',
    name: 'email',
    id: 'email',
    initialValue: '',
    iconPosition: 'left',
    placeholder: 'jonaslagoteixeira@gmail.com',
    disabled: false
  },
  argTypes: {
    onInputChange: { action: 'changed' },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story<TextInputProps> = (args) => (
  <div style={{ maxWidth: '30rem' }}>
    <TextInput {...args} />
  </div>
)

export const WithIcon: Story<TextInputProps> = (args) => (
  <div style={{ maxWidth: '30rem' }}>
    <TextInput {...args} />
  </div>
)

WithIcon.args = {
  icon: <Email />
}

export const WithError: Story<TextInputProps> = (args) => (
  <div style={{ maxWidth: '30rem' }}>
    <TextInput {...args} />
  </div>
)

WithError.args = {
  error: 'E-mail not valid',
  icon: <Email />
}
