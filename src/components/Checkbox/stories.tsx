import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'checked' }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
} as Meta

export const Default: Story<CheckboxProps> = (args) => <Checkbox {...args} />
