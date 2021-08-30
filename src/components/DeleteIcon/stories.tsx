import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import DeleteIcon from '.'

export default {
  title: 'DeleteIcon',
  component: DeleteIcon,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story = (args) => <DeleteIcon {...args} />
