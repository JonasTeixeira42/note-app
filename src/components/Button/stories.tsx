import React from 'react'
import { Add } from '@styled-icons/material-outlined'
import { Story, Meta } from '@storybook/react/types-6-0'

import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'add title',
    color: 'white',
    background: 'blue'
  },
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

export const WithIcon: Story<ButtonProps> = (args) => <Button {...args} />

WithIcon.args = {
  icon: <Add />
}
