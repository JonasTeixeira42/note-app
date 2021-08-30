import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import NotecardDropdown from '.'

export default {
  title: 'NotecardDropdown',
  component: NotecardDropdown,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <NotecardDropdown {...args} />
  </div>
)
